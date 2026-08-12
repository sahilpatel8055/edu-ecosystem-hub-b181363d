import type { ReactNode } from "react";
import {
  Award,
  BookOpenCheck,
  Building2,
  CalendarDays,
  ClipboardCheck,
  Compass,
  ExternalLink,
  FileBadge,
  GraduationCap,
  Info,
  Layers,
  Laptop,
  LifeBuoy,
  MapPin,
  MonitorPlay,
  ScrollText,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  Wallet,
  X,
} from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { EmptyNote } from "@/components/university/DataSections";
import { universityLogo } from "@/lib/assets";
import {
  feeRangeLabel,
  getUniversityBySlug,
  programmesOf,
  recognitionLabels,
  relatedUniversities,
  type UniversityRecordJson,
} from "@/lib/universityData";
import { getCareerInfo, getExamPattern, getScholarshipInfo, type ScholarshipCriterion } from "@/lib/insightsData";

/**
 * University pillar-page hub sections.
 *
 * Every component here is reusable across all universities and renders ONLY
 * what the dataset publishes. When a fact is missing the row, card or whole
 * section is hidden — nothing is invented, estimated or rounded up.
 */

/* ------------------------------ primitives ------------------------------- */

function IconCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Award;
  label: string;
  value: ReactNode;
}) {
  return (
    <div className="box-hover flex items-start gap-2.5 rounded-xl border border-border bg-card p-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
        <Icon className="h-4 w-4" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
        <p className="mt-0.5 break-words text-[0.85rem] font-bold leading-snug">{value}</p>
      </div>
    </div>
  );
}

function levelSet(u: UniversityRecordJson): string[] {
  const order = ["UG", "PG", "Diploma", "Certificate"];
  const found = new Set(u.programmes.map((p) => String(p.level)));
  return order.filter((l) => found.has(l));
}

function durationRange(u: UniversityRecordJson): string | null {
  const years = u.programmes
    .map((p) => p.duration ?? "")
    .flatMap((d) => Array.from(d.matchAll(/(\d+(?:\.\d+)?)\s*year/gi)).map((m) => Number(m[1])))
    .filter((n) => Number.isFinite(n) && n > 0);
  if (!years.length) return null;
  const min = Math.min(...years);
  const max = Math.max(...years);
  return min === max ? `${min} Years` : `${min}–${max} Years`;
}

/* --------------------------- PART 1 — at a glance ------------------------ */

export function UniversityGlance({ slug }: { slug: string }) {
  const u = getUniversityBySlug(slug);
  if (!u) return null;

  const specCount = u.programmes.reduce((n, p) => n + p.specializations.length, 0);
  const levels = levelSet(u);
  const duration = durationRange(u);
  const site = u.basic_information.official_online_portal ?? u.basic_information.official_website;

  const items: Array<{ icon: typeof Award; label: string; value: ReactNode }> = [];
  if (u.basic_information.established_year)
    items.push({ icon: CalendarDays, label: "Established", value: u.basic_information.established_year });
  if (u.mode) items.push({ icon: Laptop, label: "Mode", value: u.mode === "Both" ? "Online / Distance" : u.mode });
  if (u.programmes.length) items.push({ icon: BookOpenCheck, label: "Programmes", value: u.programmes.length });
  if (levels.length) items.push({ icon: GraduationCap, label: "Levels", value: levels.join(" & ") });
  if (duration) items.push({ icon: CalendarDays, label: "Duration", value: duration });
  if (specCount) items.push({ icon: Layers, label: "Specialisations", value: `${specCount}+` });
  if (u.basic_information.location)
    items.push({ icon: MapPin, label: "Location", value: u.basic_information.location });
  const recognitions = recognitionLabels(u);
  if (recognitions.length)
    items.push({ icon: ShieldCheck, label: "Recognition", value: `${recognitions.length} published approvals` });

  if (!items.length) return null;

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((i) => (
          <IconCard key={i.label} icon={i.icon} label={i.label} value={i.value} />
        ))}
      </div>
      {site && (
        <a
          href={site}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand hover:underline"
        >
          Official website <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

/* ----------------------- PART 2 — learning experience -------------------- */

export function UniversityLearningExperience({ slug, shortName }: { slug: string; shortName: string }) {
  const u = getUniversityBySlug(slug);
  const exam = getExamPattern(slug)?.data;
  if (!u) return null;

  const cards: Array<{ icon: typeof Award; title: string; body: string }> = [];
  if (exam?.proctoring) cards.push({ icon: MonitorPlay, title: "Learning platform (LMS)", body: exam.proctoring });
  if (exam?.mode) cards.push({ icon: Laptop, title: "Examination delivery", body: `Examinations are conducted in ${exam.mode} mode.` });
  if (exam?.assessment) cards.push({ icon: ClipboardCheck, title: "Assessments", body: exam.assessment });
  if (exam?.weightage) cards.push({ icon: Layers, title: "Assessment weightage", body: exam.weightage });
  if (u.mode)
    cards.push({
      icon: Compass,
      title: "Study mode",
      body:
        u.mode === "Both"
          ? "Programmes are published in both online and distance/ODL mode — check the mode on each course page."
          : `Programmes at ${shortName} are delivered in ${u.mode.toLowerCase()} mode.`,
    });

  if (!cards.length)
    return <EmptyNote>Learning-delivery details are not published in our verified sources for this university yet.</EmptyNote>;

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((c) => (
        <div key={c.title} className="box-hover rounded-xl border border-border bg-card p-3.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-brand">
            <c.icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className="mt-2.5 text-sm font-bold">{c.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{c.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------ PART 3 — career & placement -------------------- */

export function UniversityCareerSupport({ slug, shortName }: { slug: string; shortName: string }) {
  const career = getCareerInfo(slug)?.data;
  const summary = career?.university_level_summary;
  const reference = career?.placement_support_reference;

  return (
    <div className="space-y-4">
      <p className="rounded-xl border border-border bg-secondary p-3.5 text-sm leading-relaxed text-muted-foreground">
        {shortName} publishes <strong className="text-foreground">placement assistance</strong>, which is career support
        such as guidance and opportunity sharing. It is not a placement guarantee, and no employment outcome is assured.
      </p>
      {summary && <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>}
      {!summary && !reference && (
        <EmptyNote>University-level placement statistics are not published in our verified sources.</EmptyNote>
      )}
      <div className="flex flex-wrap gap-2.5">
        <AppLink
          to={`/universities/${slug}/placement`}
          className="inline-flex items-center gap-1.5 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-brand-foreground"
        >
          <LifeBuoy className="h-4 w-4" aria-hidden="true" /> View placement details
        </AppLink>
        {reference && (
          <a
            href={reference}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-4 py-2.5 text-sm font-semibold hover:bg-secondary"
          >
            Placement reference <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        )}
      </div>
    </div>
  );
}

/* --------------------------- PART 4 — scholarships ----------------------- */

export function UniversityScholarshipCTA({ slug, shortName }: { slug: string; shortName: string }) {
  const info = getScholarshipInfo(slug)?.data;
  const criteria = info?.criteria ?? [];
  return (
    <div className="space-y-3">
      {criteria.length > 0 && (
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2">
          {criteria.map((c: ScholarshipCriterion) => (
            <details key={c.name ?? c.criterion} className="box-hover group rounded-xl border border-border bg-card p-3.5">
              <summary className="cursor-pointer list-none text-sm font-bold marker:hidden">
                {c.name ?? "Scholarship"}
                <span className="float-right text-brand transition-transform group-open:rotate-45">+</span>
              </summary>
              {c.criterion && <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.criterion}</p>}
            </details>
          ))}
        </div>
      )}
      {info?.note && <p className="text-xs leading-relaxed text-muted-foreground">{info.note}</p>}
      <AppLink
        to={`/universities/${slug}/scholarships`}
        className="inline-flex items-center gap-1.5 rounded-lg border border-brand px-4 py-2.5 text-sm font-bold text-brand"
      >
        <Wallet className="h-4 w-4" aria-hidden="true" /> View {shortName} scholarship criteria
      </AppLink>
    </div>
  );
}

/* ------------------------ PART 5 — degree & certificate ------------------ */

export function UniversityDegreeFacts({ slug }: { slug: string }) {
  const u = getUniversityBySlug(slug);
  if (!u) return null;
  const rows: Array<[string, string]> = [];
  const degrees = Array.from(new Set(u.programmes.map((p) => p.degree).filter((d): d is string => !!d)));
  rows.push(["Awarded by", u.university_name]);
  if (degrees.length) rows.push(["Credentials awarded", `${degrees.length} degree types including ${degrees.slice(0, 3).join(", ")}`]);
  if (u.mode) rows.push(["Study mode", u.mode === "Both" ? "Online / Distance" : u.mode]);
  const rec = recognitionLabels(u);
  if (rec.length) rows.push(["Recognition published", rec.join(" · ")]);

  return (
    <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-2">
      {rows.map(([label, value]) => (
        <div key={label} className="box-hover rounded-xl border border-border bg-card p-3">
          <dt className="text-[0.66rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">{label}</dt>
          <dd className="mt-1 text-sm font-semibold leading-snug">{value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* --------------------------- PART 6 — specialisations -------------------- */

export function UniversitySpecialisations({ slug }: { slug: string }) {
  const programmes = programmesOf(slug).filter((p) => p.specializations.length > 0);
  if (!programmes.length) return null;
  const top = programmes.slice(0, 4);

  return (
    <div className="space-y-3">
      {top.map((p) => (
        <div key={p.slug} className="box-hover rounded-xl border border-border bg-card p-3.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-bold">{p.programme_name}</h3>
            <AppLink
              to={`/universities/${slug}/courses/${p.slug}`}
              className="text-xs font-bold text-brand hover:underline"
            >
              View all {p.specializations.length} specialisations ›
            </AppLink>
          </div>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {p.specializations.slice(0, 6).map((s) => (
              <span key={s.specialisation_name} className="rounded-md bg-secondary px-2 py-1 text-[0.72rem] font-semibold">
                {s.specialisation_name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------- PART 7 — why consider ---------------------- */

export function UniversityAdvantages({ slug, shortName }: { slug: string; shortName: string }) {
  const u = getUniversityBySlug(slug);
  if (!u) return null;

  const points: Array<{ icon: typeof Award; title: string; body: string }> = [];
  const rec = recognitionLabels(u);
  if (rec.length) points.push({ icon: ShieldCheck, title: "Published recognition", body: rec.join(" · ") });
  if (u.programmes.length)
    points.push({
      icon: BookOpenCheck,
      title: "Programme choice",
      body: `${u.programmes.length} programmes are listed for the current session across ${levelSet(u).join(", ")} levels.`,
    });
  const specCount = u.programmes.reduce((n, p) => n + p.specializations.length, 0);
  if (specCount)
    points.push({ icon: Layers, title: "Specialisation options", body: `${specCount} specialisations published across programmes.` });
  if (u.mode)
    points.push({
      icon: Laptop,
      title: "Flexible study mode",
      body: u.mode === "Both" ? "Both online and distance/ODL delivery are published." : `${u.mode} delivery for working learners.`,
    });
  const fees = feeRangeLabel(slug);
  if (fees !== "Fee pending verification")
    points.push({ icon: Wallet, title: "Published fee range", body: `Programme fees listed between ${fees}.` });
  if ((u.scholarships?.length ?? 0) > 0 || (getScholarshipInfo(slug)?.data?.criteria?.length ?? 0) > 0)
    points.push({ icon: Sparkles, title: "Scholarship options", body: `${shortName} publishes scholarship criteria for eligible applicants.` });
  if (u.admissions.admission_steps.length)
    points.push({ icon: ClipboardCheck, title: "Documented admission process", body: `${u.admissions.admission_steps.length}-step official application process.` });

  if (!points.length) return null;

  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
      {points.slice(0, 7).map((p) => (
        <div key={p.title} className="box-hover rounded-xl border border-border bg-card p-3.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-brand-soft text-brand">
            <p.icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className="mt-2.5 text-sm font-bold">{p.title}</h3>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.body}</p>
        </div>
      ))}
    </div>
  );
}

/* ------------------------- PART 8 — things to consider ------------------- */

export function UniversityConsiderations({ slug, shortName }: { slug: string; shortName: string }) {
  const u = getUniversityBySlug(slug);
  if (!u) return null;

  const points: string[] = [
    "Eligibility differs by programme — check the course page before applying.",
    "Fees differ by programme and may change between admission cycles.",
    "Placement assistance does not guarantee employment.",
  ];
  if (u.admissions.admission_cycle || u.admissions.next_expected_intake)
    points.push("Admission cycles and intake dates can change; confirm the current cycle on the official portal.");
  if ((getScholarshipInfo(slug)?.data?.criteria?.length ?? 0) > 0)
    points.push("Scholarship eligibility varies by programme and by the current scholarship notice.");
  if (u.programmes.some((p) => !(p.fees.fee_verification_status ?? "").startsWith("verified_official")))
    points.push("Some fee figures are pending official verification and are marked accordingly on this page.");
  points.push(`Verify current fee, recognition and admission details on the official ${shortName} website before paying.`);

  return (
    <div className="rounded-2xl border border-dashed border-border bg-secondary p-4">
      <ul className="space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
            <Info className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
            {p}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* --------------------------- PART 9 — suitability ------------------------ */

export function UniversitySuitability({ slug }: { slug: string }) {
  const u = getUniversityBySlug(slug);
  if (!u) return null;
  const levels = levelSet(u);

  const suits = [
    "Working professionals who need to study alongside a job",
    "Learners who want a flexible, non-classroom schedule",
    ...(levels.includes("PG") ? ["Graduates looking for a PG programme"] : []),
    ...(levels.includes("UG") ? ["Students looking for a UG degree without relocating"] : []),
    ...(u.programmes.some((p) => p.specializations.length) ? ["Learners who want a specialised programme"] : []),
  ];
  const notSuits = [
    "Students who specifically want daily on-campus life",
    "Learners who prefer classroom-based teaching",
    "Applicants who need a programme this university does not offer online",
  ];

  return (
    <div className="grid gap-3 lg:grid-cols-2">
      <div className="box-hover rounded-2xl border border-border bg-card p-4">
        <h3 className="text-sm font-bold text-success">May suit</h3>
        <ul className="mt-2.5 space-y-2">
          {suits.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-success" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </div>
      <div className="box-hover rounded-2xl border border-border bg-card p-4">
        <h3 className="text-sm font-bold">May not suit</h3>
        <ul className="mt-2.5 space-y-2">
          {notSuits.map((s) => (
            <li key={s} className="flex items-start gap-2 text-sm text-muted-foreground">
              <X className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" aria-hidden="true" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------------------- PART 10 — reviews -------------------------- */

export function UniversityReviews({
  rating,
  reviewCount,
  shortName,
}: {
  rating?: number | undefined;
  reviewCount?: number | undefined;
  shortName: string;
}) {
  if (!rating || !reviewCount) {
    return (
      <EmptyNote>
        {`Verified student reviews for ${shortName} are not published yet. This section will show real ratings once collected — we do not publish sample or generated testimonials.`}
      </EmptyNote>
    );
  }
  return (
    <div className="box-hover flex items-center gap-3 rounded-2xl border border-border bg-card p-4">
      <Star className="h-6 w-6 text-brand" aria-hidden="true" />
      <p className="text-sm font-bold">
        {rating}/5 <span className="font-medium text-muted-foreground">based on {reviewCount} reviews</span>
      </p>
    </div>
  );
}

/* --------------------------- PART 11 — comparison ------------------------ */

export function UniversityComparison({ slug, shortName }: { slug: string; shortName: string }) {
  const peers = relatedUniversities(slug, 5);
  if (!peers.length) return null;

  return (
    <div className="-mx-4 flex snap-x gap-3 overflow-x-auto px-4 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
      {peers.map((p) => {
        const logo = universityLogo(p.slug);
        const rec = recognitionLabels(p).slice(0, 2).join(" · ");
        const compareSlug = slug < p.slug ? `${slug}-vs-${p.slug}` : `${p.slug}-vs-${slug}`;
        return (
          <article
            key={p.slug}
            className="box-hover flex w-[80vw] shrink-0 snap-start flex-col rounded-2xl border border-border bg-card p-3.5 sm:w-auto"
          >
            <div className="flex items-center gap-2.5">
              {logo ? (
                <img src={logo} alt="" aria-hidden="true" loading="lazy" className="h-9 w-9 shrink-0 object-contain" />
              ) : (
                <Building2 className="h-9 w-9 shrink-0 text-brand" aria-hidden="true" />
              )}
              <h3 className="min-w-0 text-sm font-bold leading-snug">{p.university_name}</h3>
            </div>
            <p className="mt-2 text-xs text-muted-foreground">
              {levelSet(p).join(" · ") || "Programme levels not published"}
            </p>
            <p className="mt-1 text-xs font-semibold">{feeRangeLabel(p.slug)}</p>
            {rec && <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{rec}</p>}
            <div className="mt-auto flex items-center gap-2 pt-3">
              <AppLink to={`/universities/${p.slug}`} className="text-xs font-bold text-brand hover:underline">
                View university ›
              </AppLink>
              <AppLink
                to={`/compare/${compareSlug}`}
                className="ml-auto rounded-lg bg-secondary px-2.5 py-1.5 text-xs font-bold text-brand"
                aria-label={`Compare ${shortName} with ${p.short_name}`}
              >
                Compare
              </AppLink>
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* ----------------------------- PART 13 — sources ------------------------- */

export function LastUpdatedLine({ date }: { date: string }) {
  if (!date) return null;
  return (
    <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
      <ScrollText className="h-3.5 w-3.5" aria-hidden="true" /> Last updated: {date}
    </p>
  );
}

export const hubIcons = { FileBadge, Users, Award };

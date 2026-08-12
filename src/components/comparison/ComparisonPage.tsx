import { AppLink } from "@/components/common/AppLink";
import { ContentSection, DetailLayout } from "@/components/templates/DetailLayout";
import { DataTable, LinkCluster, References, RelatedLinkGrid, UpdatedStamp } from "@/components/common/Blocks";
import type { FaqItem } from "@/components/common/Faq";
import {
  ACADEMIC_SESSION,
  UNVERIFIED,
  coursePairPath,
  courseSlug,
  feeLabel,
  pairPath,
  pairUniversities,
  recognitionRows,
  relatedPairs,
  text,
  type MasterPair,
  type MasterProgramme,
  type MasterUniversity,
} from "@/lib/comparisonMaster";

/** Ordered section headings — mirrors `page_structure.sections` in the dataset. */
const SECTIONS = [
  "Overview",
  "Quick comparison",
  "Courses offered",
  "Recognition and mode",
  "Fees",
  "Eligibility",
  "Specialisations",
  "Curriculum",
  "Admission process",
  "Examination pattern",
  "Scholarships",
  "Learning experience",
  "Degree and academic value",
  "Career support",
  "Strengths and limitations",
  "Which may suit you",
  "Sources and last verified",
];

function specLabel(p: MasterProgramme | undefined) {
  const list = p?.specialisations ?? [];
  return list.length ? list.join(", ") : "No university-specific specialisations verified";
}

function faqAnswer(q: string, ctx: {
  course: string;
  aName: string;
  bName: string;
  a: MasterProgramme | undefined;
  b: MasterProgramme | undefined;
}) {
  const { course, aName, bName, a, b } = ctx;
  const low = q.toLowerCase();
  if (low.includes("fee")) {
    return `Published total fee for the online ${course}: ${aName} — ${feeLabel(a)}; ${bName} — ${feeLabel(b)}. Where a figure is not verified we link the official source instead of estimating it.`;
  }
  if (low.includes("eligib")) {
    return `${aName}: ${text(a?.eligibility)}. ${bName}: ${text(b?.eligibility)}.`;
  }
  if (low.includes("specialis")) {
    return `${aName}: ${specLabel(a)}. ${bName}: ${specLabel(b)}.`;
  }
  if (low.includes("how long") || low.includes("duration") || low.includes("take at")) {
    return `${aName}: ${text(a?.duration)}${a?.semesters ? ` (${a.semesters} semesters)` : ""}. ${bName}: ${text(b?.duration)}${b?.semesters ? ` (${b.semesters} semesters)` : ""}.`;
  }
  if (low.includes("exam")) {
    return `Entrance requirement — ${aName}: ${text(a?.entrance_exam, "No entrance exam published")}; ${bName}: ${text(b?.entrance_exam, "No entrance exam published")}. Semester assessment method should be confirmed on the official university page linked in Sources.`;
  }
  if (low.includes("scholar")) {
    return `Scholarship and fee-concession rules change every cycle and are not verified for this pair in the current dataset. Check the official ${aName} and ${bName} pages listed under Sources before applying.`;
  }
  if (low.includes("working professional")) {
    return `Both options are delivered in ${text(a?.mode, "online")} / ${text(b?.mode, "online")} mode, so weigh verified fee, duration and assessment flexibility for the ${course} rather than reputation alone.`;
  }
  return `Compare the verified ${course} data on this page — mode, duration, eligibility, published fee and specialisations — and confirm anything volatile on the official sources listed at the end of the page.`;
}

export function ComparisonPage({
  pair,
  course,
}: {
  pair: MasterPair;
  /** Present on `/compare/{course}/{a}-vs-{b}` pages. */
  course?: string | undefined;
}) {
  const { a: uniA, b: uniB } = pairUniversities(pair);
  if (!uniA || !uniB) return null;

  const snapshot = course ? pair.course_snapshots[course] : undefined;
  const progA = snapshot?.university_a ?? (course ? uniA.programme_map?.[course] : undefined);
  const progB = snapshot?.university_b ?? (course ? uniB.programme_map?.[course] : undefined);

  const aName = pair.university_a;
  const bName = pair.university_b;
  const path = course ? coursePairPath(pair, course) : pairPath(pair);

  const title = course
    ? pair.seo.course_title_template.replace("{Course}", course)
    : pair.seo.title_template;

  const faqs: FaqItem[] = (snapshot?.faq ?? []).map((q) => ({
    question: q,
    answer: faqAnswer(q, { course: course ?? pair.default_course, aName, bName, a: progA, b: progB }),
  }));

  const twoCol = (label: string, av: string, bv: string) => [label, av, bv];

  const sources = [uniA, uniB].flatMap((u) =>
    (u.official_sources ?? []).map((href) => ({ label: `${u.short_name} — official source`, href })),
  );
  const progSources = [
    progA?.official_source?.programme_url
      ? { label: `${aName} — ${text(progA.official_source?.source_title, "official programme page")}`, href: progA.official_source!.programme_url! }
      : undefined,
    progB?.official_source?.programme_url
      ? { label: `${bName} — ${text(progB.official_source?.source_title, "official programme page")}`, href: progB.official_source!.programme_url! }
      : undefined,
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <DetailLayout
      crumbs={[
        { name: "Compare", href: "/compare" },
        ...(course ? [{ name: `${aName} vs ${bName}`, href: pairPath(pair) }] : []),
        { name: course ? `${course} comparison` : `${aName} vs ${bName}`, href: path },
      ]}
      eyebrow={course ? `Online ${course} comparison ${ACADEMIC_SESSION}` : `University comparison ${ACADEMIC_SESSION}`}
      title={
        course
          ? `${aName} vs ${bName} Online ${course}: Fees, Eligibility & Full Comparison`
          : `${aName} vs ${bName}: Online University Comparison`
      }
      subtitle={pair.content.intro}
      meta={<UpdatedStamp date={uniA.last_verified ?? ""} verified={false} />}
      tocSections={SECTIONS}
      faqs={faqs.length ? faqs : undefined}
      sidebarExtras={
        <>
          <CourseSelector pair={pair} active={course} />
          <LinkCluster
            title="Related comparisons"
            links={relatedPairs(pair).map((p) => ({
              label: `${p.university_a} vs ${p.university_b}`,
              href: pairPath(p),
            }))}
          />
        </>
      }
      related={
        <RelatedLinkGrid
          groups={[
            {
              title: "University hubs",
              links: [
                { label: `${aName} overview`, href: `/universities/${uniA.slug}` },
                { label: `${bName} overview`, href: `/universities/${uniB.slug}` },
              ],
            },
            {
              title: "Course comparisons for this pair",
              links: pair.common_courses.map((c) => ({
                label: `${aName} vs ${bName} online ${c}`,
                href: coursePairPath(pair, c),
              })),
            },
            {
              title: "Other comparisons",
              links: relatedPairs(pair, 8).map((p) => ({
                label: `${p.university_a} vs ${p.university_b}`,
                href: pairPath(p),
              })),
            },
          ]}
        />
      }
    >
      <ContentSection title="Overview">
        <p>{pair.content.angle}</p>
        <p>{pair.content.decision_framework}</p>
        <div className="grid gap-4 sm:grid-cols-2">
          {[uniA, uniB].map((u) => (
            <div key={u.slug} className="surface-card p-4">
              <p className="font-display text-base font-bold">{u.university_name}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {u.location} · {u.mode} mode · {u.programme_count ?? "—"} programmes tracked
              </p>
              <AppLink to={`/universities/${u.slug}`} className="mt-3 inline-block text-sm font-semibold text-brand hover:underline">
                {u.short_name} details →
              </AppLink>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Quick comparison">
        <DataTable
          caption={`${aName} vs ${bName} quick comparison`}
          head={["Parameter", aName, bName]}
          rows={[
            twoCol("Location", uniA.location, uniB.location),
            twoCol("Mode", uniA.mode, uniB.mode),
            twoCol("Programmes tracked", String(uniA.programme_count ?? "—"), String(uniB.programme_count ?? "—")),
            twoCol("Data status", text(uniA.data_status), text(uniB.data_status)),
            ...(course
              ? [
                  twoCol("Programme", text(progA?.programme_name), text(progB?.programme_name)),
                  twoCol("Duration", text(progA?.duration), text(progB?.duration)),
                  twoCol("Total fee", feeLabel(progA), feeLabel(progB)),
                  twoCol("Eligibility", text(progA?.eligibility), text(progB?.eligibility)),
                ]
              : []),
          ]}
        />
      </ContentSection>

      <ContentSection title="Courses offered">
        <p>
          Only like-for-like programmes are compared. These degrees are published by both universities:
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {pair.common_courses.map((c) => (
            <li key={c} className="rounded-lg bg-secondary px-3 py-2 text-sm">
              <AppLink
                to={coursePairPath(pair, c)}
                className={`font-semibold hover:underline ${courseSlug(c) === courseSlug(course ?? "") ? "text-foreground" : "text-brand"}`}
              >
                {aName} vs {bName} online {c}
              </AppLink>
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Recognition and mode">
        <DataTable
          caption="Recognition and accreditation"
          head={["Parameter", aName, bName]}
          rows={recognitionRows(uniA).map((r, i) => twoCol(r.label, r.value, recognitionRows(uniB)[i]!.value))}
        />
        <p className="text-sm text-muted-foreground">
          Recognition is reproduced from the university/regulator source only. Anything not published there shows as
          “{UNVERIFIED}”.
        </p>
      </ContentSection>

      <ContentSection title="Fees">
        {course ? (
          <DataTable
            caption={`Online ${course} fee comparison`}
            head={["Parameter", aName, bName]}
            rows={[
              twoCol("Total programme fee", feeLabel(progA), feeLabel(progB)),
              twoCol("Fee verification", text(progA?.fee_status), text(progB?.fee_status)),
              twoCol("Semesters", String(progA?.semesters ?? "—"), String(progB?.semesters ?? "—")),
              twoCol("Last verified", text(progA?.last_verified), text(progB?.last_verified)),
            ]}
          />
        ) : (
          <DataTable
            caption="Fee comparison by common course"
            head={["Course", aName, bName]}
            rows={pair.common_courses.map((c) => {
              const snap = pair.course_snapshots[c];
              return [
                <AppLink key={c} to={coursePairPath(pair, c)} className="font-semibold text-brand hover:underline">
                  {c}
                </AppLink>,
                feeLabel(snap?.university_a),
                feeLabel(snap?.university_b),
              ];
            })}
          />
        )}
        <p className="text-sm text-muted-foreground">
          Fees are shown only when a current official figure is verified; otherwise the page says so and links the
          official source.
        </p>
      </ContentSection>

      <ContentSection title="Eligibility">
        <DataTable
          caption="Eligibility and entry requirements"
          head={["Parameter", aName, bName]}
          rows={[
            twoCol("Eligibility", text(progA?.eligibility), text(progB?.eligibility)),
            twoCol("Entrance exam", text(progA?.entrance_exam, "Not published"), text(progB?.entrance_exam, "Not published")),
            twoCol("Mode of study", text(progA?.mode ?? uniA.mode), text(progB?.mode ?? uniB.mode)),
          ]}
        />
      </ContentSection>

      <ContentSection title="Specialisations">
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { u: uniA, p: progA, name: aName },
            { u: uniB, p: progB, name: bName },
          ].map(({ u, p, name }) => (
            <div key={u.slug} className="surface-card p-4">
              <p className="text-sm font-bold">{name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{specLabel(p)}</p>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Curriculum">
        <p>
          {course
            ? `The ${course} is structured over ${progA?.semesters ?? "—"} semesters at ${aName} and ${progB?.semesters ?? "—"} semesters at ${bName}.`
            : "Curriculum depth is compared per course — open a course comparison above to see the semester structure."}
        </p>
        <p className="text-sm text-muted-foreground">
          {text(progA?.curriculum_note ?? progB?.curriculum_note,
            "Where a university-specific syllabus is not verified, treat the standard degree structure as a reference curriculum only and confirm on the official source.")}
        </p>
      </ContentSection>

      <ContentSection title="Admission process" tone="admission">
        <p>
          Both universities run a fully online application for the {ACADEMIC_SESSION} session: register, submit
          academic documents, complete eligibility verification and pay the semester or programme fee.
        </p>
        <ul className="grid gap-2 sm:grid-cols-2">
          {[
            { name: aName, url: progA?.official_source?.admission_url ?? uniA.official_sources?.[0] },
            { name: bName, url: progB?.official_source?.admission_url ?? uniB.official_sources?.[0] },
          ].map((s) => (
            <li key={s.name} className="rounded-lg bg-card px-3 py-2 text-sm">
              {s.name}:{" "}
              {s.url ? (
                <a href={s.url} target="_blank" rel="nofollow noopener noreferrer" className="font-semibold text-brand hover:underline">
                  official admission page
                </a>
              ) : (
                UNVERIFIED
              )}
            </li>
          ))}
        </ul>
      </ContentSection>

      <ContentSection title="Examination pattern" tone="exam">
        <DataTable
          caption="Assessment"
          head={["Parameter", aName, bName]}
          rows={[
            twoCol("Entrance exam", text(progA?.entrance_exam, "Not published"), text(progB?.entrance_exam, "Not published")),
            twoCol("Semesters assessed", String(progA?.semesters ?? "—"), String(progB?.semesters ?? "—")),
            twoCol("Assessment detail", UNVERIFIED, UNVERIFIED),
          ]}
        />
      </ContentSection>

      <ContentSection title="Scholarships">
        <p>
          Scholarship and instalment rules are cycle-specific and are not verified for this pair in the current
          dataset. Confirm current concessions on each university's official fee page before paying.
        </p>
      </ContentSection>

      <ContentSection title="Learning experience">
        <p>
          {aName} delivers in {text(uniA.mode)} mode and {bName} in {text(uniB.mode)} mode. Learner support features
          beyond the mode of delivery are shown only when the university publishes them.
        </p>
      </ContentSection>

      <ContentSection title="Degree and academic value">
        <p>
          Both awards are the university's own degree, subject to the recognition status listed above. Recognition —
          not the delivery mode — is what employers and higher-study admissions check, so read the recognition table
          before deciding.
        </p>
      </ContentSection>

      <ContentSection title="Career support">
        <p>
          Career and placement <strong>assistance</strong> is not a placement guarantee. Recruiter lists, salary
          figures and placement percentages are published here only when the university documents them; for this pair
          they are {UNVERIFIED.toLowerCase()}.
        </p>
      </ContentSection>

      <ContentSection title="Strengths and limitations">
        <div className="grid gap-4 sm:grid-cols-2">
          {[uniA, uniB].map((u) => (
            <div key={u.slug} className="surface-card p-4">
              <p className="text-sm font-bold">{u.short_name}</p>
              <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                <li>Data status: {text(u.data_status)}</li>
                <li>Programmes tracked: {u.programme_count ?? "—"}</li>
                {(u.notes ?? []).map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ContentSection>

      <ContentSection title="Which may suit you">
        <p>{pair.content.fit_statement}</p>
      </ContentSection>

      <ContentSection title="Sources and last verified">
        <References
          items={[...progSources, ...sources].filter(
            (item, i, all) => all.findIndex((x) => x.href === item.href) === i,
          )}
        />
        <p className="text-sm text-muted-foreground">
          Session: {ACADEMIC_SESSION}. Last verified: {text(uniA.last_verified)} ({uniA.short_name}),{" "}
          {text(uniB.last_verified)} ({uniB.short_name}).
        </p>
      </ContentSection>
    </DetailLayout>
  );
}

function CourseSelector({ pair, active }: { pair: MasterPair; active?: string | undefined }) {
  return (
    <div className="surface-card p-4">
      <p className="text-sm font-bold">Compare a specific course</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {pair.common_courses.map((c) => {
          const isActive = courseSlug(c) === courseSlug(active ?? "");
          return (
            <li key={c}>
              <AppLink
                to={coursePairPath(pair, c)}
                className={`inline-block rounded-lg px-3 py-1.5 text-xs font-bold ${
                  isActive ? "bg-[#7f1813] text-white" : "bg-secondary text-brand hover:bg-brand-soft"
                }`}
              >
                {c}
              </AppLink>
            </li>
          );
        })}
      </ul>
      {active && (
        <AppLink to={pairPath(pair)} className="mt-3 inline-block text-xs font-semibold text-brand hover:underline">
          ← Full university comparison
        </AppLink>
      )}
    </div>
  );
}

export type { MasterUniversity };

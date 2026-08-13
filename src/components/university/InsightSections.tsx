import type { ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  ClipboardCheck,
  ExternalLink,
  FileCheck2,
  GraduationCap,
  Info,
  Layers,
  MonitorCheck,
  ScrollText,
  ShieldQuestion,
  Sparkles,
} from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { Chip } from "@/components/common/Primitives";
import {
  getAdmissionInfo,
  getCareerInfo,
  getExamPattern,
  getScholarshipInfo,
  hasSectionPage,
  insightSources,
  isOfficialStatus,
  isUnsafeStatus,
  type ExamPatternInfo,
  type ScholarshipInfo,
  type SectionKey,
} from "@/lib/insightsData";

/**
 * Presentational blocks for the admission / examination / career / scholarship
 * data layer. Every block hides fields the dataset does not publish and never
 * upgrades an unverified value into an official claim.
 */

/* ------------------------------ small pieces ------------------------------ */

export function DataSourceBadge({ status }: { status?: string | null | undefined }) {
  if (!status) return null;
  if (isOfficialStatus(status)) {
    return (
      <Chip tone="success">
        <BadgeCheck className="mr-1 h-3 w-3" aria-hidden="true" /> Official university source
      </Chip>
    );
  }
  if (isUnsafeStatus(status)) {
    return (
      <Chip tone="highlight">
        <ShieldQuestion className="mr-1 h-3 w-3" aria-hidden="true" /> Pending official verification
      </Chip>
    );
  }
  return (
    <Chip>
      <Info className="mr-1 h-3 w-3" aria-hidden="true" /> Verified against published reference
    </Chip>
  );
}

export function ScopeBadge({ inherited, label }: { inherited: boolean; label: string }) {
  return (
    <Chip tone={inherited ? "default" : "brand"}>
      <Layers className="mr-1 h-3 w-3" aria-hidden="true" />
      {label}
    </Chip>
  );
}

export function OfficialSourceLink({ href, label = "View source" }: { href?: string | null | undefined; label?: string }) {
  if (!href) return null;
  // Aggregator references are not cited as sources.
  if (/collegevidya/i.test(href)) return null;
  let host = "";
  try {
    host = new URL(href).hostname.replace(/^www\./, "");
  } catch {
    host = "";
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline"
    >
      {label}
      {host && <span className="font-normal text-muted-foreground">· {host}</span>}
      <ExternalLink className="h-3 w-3" aria-hidden="true" />
    </a>
  );
}

function InsightPanel({
  icon,
  title,
  badges,
  banner,
  children,
  footer,
}: {
  icon: ReactNode;
  title: string;
  badges?: ReactNode;
  banner?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="surface-card overflow-hidden">
      <div className="flex flex-wrap items-center gap-3 border-b border-border bg-secondary/50 px-4 py-3 sm:px-5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
          {icon}
        </span>
        <p className="min-w-0 flex-1 font-display text-sm font-bold text-foreground sm:text-base">{title}</p>
        {badges && <div className="flex flex-wrap items-center gap-2">{badges}</div>}
      </div>
      {banner}
      <div className="space-y-5 p-4 sm:p-5">{children}</div>
      {footer && <div className="border-t border-border bg-secondary/30 px-4 py-3 sm:px-5">{footer}</div>}
    </div>
  );
}

function FactGrid({ items }: { items: Array<{ label: string; value: string }> }) {
  if (!items.length) return null;
  return (
    <dl className="grid grid-cols-2 gap-3 sm:grid-cols-2">
      {items.map((f) => (
        <div key={f.label} className="box-hover rounded-xl border border-border bg-card px-3.5 py-3">
          <dt className="text-[0.72rem] font-extrabold uppercase tracking-[0.12em] text-foreground">{f.label}</dt>
          <dd className="mt-1 text-sm leading-relaxed text-foreground">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function TimelineSteps({ steps }: { steps: string[] }) {
  return (
    <ol className="relative space-y-3 border-l border-dashed border-border pl-6">
      {steps.map((s, i) => (
        <li key={s} className="relative">
          <span className="absolute -left-[1.9rem] flex h-6 w-6 items-center justify-center rounded-full bg-brand text-[0.7rem] font-bold text-brand-foreground">
            {i + 1}
          </span>
          <p className="text-sm leading-relaxed text-foreground">{s}</p>
        </li>
      ))}
    </ol>
  );
}

function NoteLine({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-start gap-2 rounded-xl border border-dashed border-border bg-secondary px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
      <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

function ChipRow({ label, items }: { label: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div>
      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">{label}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((i) => (
          <Chip key={i}>{i}</Chip>
        ))}
      </div>
    </div>
  );
}

function PillarLink({
  universitySlug,
  universityShort,
  section,
  label,
}: {
  universitySlug: string;
  universityShort: string;
  section: SectionKey;
  label: string;
}) {
  if (!hasSectionPage(universitySlug, section)) return null;
  return (
    <AppLink
      to={`/universities/${universitySlug}/${section}`}
      className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
    >
      {label.replace("{u}", universityShort)}
      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
    </AppLink>
  );
}

/* ------------------------------- admission -------------------------------- */

export function AdmissionInsightSection({
  universitySlug,
  universityShort,
  courseSlug,
  courseName,
  banner,
}: {
  universitySlug: string;
  universityShort: string;
  courseSlug?: string;
  courseName?: string;
  banner?: ReactNode;
}) {
  const resolved = getAdmissionInfo(universitySlug, courseSlug);
  if (!resolved) return null;
  const a = resolved.data;
  const facts: Array<{ label: string; value: string }> = [];
  if (resolved.intake) facts.push({ label: "Intake", value: resolved.intake });
  if (a.mode) facts.push({ label: "Application mode", value: a.mode.replace(/_/g, " ") });
  if (a.cycles) facts.push({ label: "Admission cycles", value: a.cycles });
  if (a.entrance_exam) facts.push({ label: "Entrance requirement", value: a.entrance_exam });

  const steps = a.steps ?? [];
  if (!facts.length && !steps.length) return null;

  return (
    <InsightPanel
      icon={<ClipboardCheck className="h-4 w-4" aria-hidden="true" />}
      title={courseSlug ? `${courseName ?? "Programme"} admission` : `${universityShort} admission process`}
      banner={banner}
      badges={
        <>
          <ScopeBadge
            inherited={resolved.inherited}
            label={resolved.inherited ? "University admission process" : "Programme admission"}
          />
          <DataSourceBadge status={a.status} />
        </>
      }
      footer={
        <div className="flex flex-wrap items-center justify-between gap-3">
          <OfficialSourceLink href={insightSources(universitySlug)?.admission} label="Admission source" />
          {courseSlug && (
            <PillarLink
              universitySlug={universitySlug}
              universityShort={universityShort}
              section="admission"
              label="View {u}'s complete admission process"
            />
          )}
        </div>
      }
    >
      {courseSlug && resolved.inherited && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          Admission to this programme follows {universityShort}&apos;s standard online admission process. Programme-level
          eligibility still applies.
        </p>
      )}
      <FactGrid items={facts} />
      {steps.length > 0 && (
        <div>
          <p className="mb-3 text-sm font-bold text-foreground">How to apply</p>
          <TimelineSteps steps={steps} />
        </div>
      )}
    </InsightPanel>
  );
}

/* --------------------------- examination pattern --------------------------- */

const examFields: Array<[keyof ExamPatternInfo, string]> = [
  ["mode", "Examination mode"],
  ["proctoring", "Proctoring"],
  ["assessment", "Assessment structure"],
  ["weightage", "Weightage"],
  ["sections", "Paper sections"],
];

export function ExaminationPatternSection({
  universitySlug,
  universityShort,
  courseSlug,
  courseName,
  banner,
}: {
  universitySlug: string;
  universityShort: string;
  courseSlug?: string;
  courseName?: string;
  banner?: ReactNode;
}) {
  const resolved = getExamPattern(universitySlug, courseSlug);
  if (!resolved) return null;
  const e = resolved.data;
  const facts = examFields
    .map(([key, label]) => ({ label, value: (e[key] ?? "") as string }))
    .filter((f) => typeof f.value === "string" && f.value.trim())
    .map((f) => ({ ...f, value: f.value.replace(/_/g, " ") }));
  if (!facts.length) return null;

  return (
    <InsightPanel
      icon={<MonitorCheck className="h-4 w-4" aria-hidden="true" />}
      title={courseSlug ? `${courseName ?? "Programme"} examination pattern` : `${universityShort} examination pattern`}
      banner={banner}
      badges={
        <>
          <ScopeBadge
            inherited={resolved.inherited}
            label={resolved.inherited ? "University-level examination pattern" : "Programme examination pattern"}
          />
          <DataSourceBadge status={e.status} />
        </>
      }
      footer={
        <div className="flex flex-wrap items-center justify-between gap-3">
          <OfficialSourceLink href={insightSources(universitySlug)?.exam} label="Examination source" />
          {courseSlug && (
            <PillarLink
              universitySlug={universitySlug}
              universityShort={universityShort}
              section="examination-pattern"
              label="View {u}'s full examination pattern"
            />
          )}
        </div>
      }
    >
      <FactGrid items={facts} />
      {e.note && <NoteLine>{e.note}</NoteLine>}
    </InsightPanel>
  );
}

/* ---------------------------- career opportunities ------------------------- */

export function CareerOpportunitiesSection({
  universitySlug,
  universityShort,
  courseSlug,
  courseName,
}: {
  universitySlug: string;
  universityShort: string;
  courseSlug?: string;
  courseName?: string;
}) {
  const resolved = getCareerInfo(universitySlug, courseSlug);
  if (!resolved) return null;
  const c = resolved.data;
  const roles = c.roles ?? [];
  const industries = c.industries ?? [];
  const skills = c.skills ?? [];
  const hasBody = roles.length || industries.length || skills.length || c.placement_support_reference;
  if (!hasBody) return null;

  return (
    <InsightPanel
      icon={<GraduationCap className="h-4 w-4" aria-hidden="true" />}
      title={courseSlug ? `${courseName ?? "Programme"} career opportunities` : `${universityShort} career support`}
      badges={
        <ScopeBadge
          inherited={resolved.inherited}
          label={resolved.inherited ? "University career support" : "Programme career outcomes"}
        />
      }
      footer={
        <div className="flex flex-wrap items-center justify-between gap-3">
          <OfficialSourceLink href={c.placement_support_reference} label="Placement support reference" />
          {courseSlug && (
            <PillarLink
              universitySlug={universitySlug}
              universityShort={universityShort}
              section="placement"
              label="View {u}'s placement support"
            />
          )}
        </div>
      }
    >
      {c.university_level_summary && (
        <p className="text-sm leading-relaxed text-muted-foreground">{c.university_level_summary}</p>
      )}
      <CareerRoles roles={roles} />
      <ChipRow label="Industries" items={industries} />
      <ChipRow label="Relevant skills" items={skills} />
    </InsightPanel>
  );
}

export function CareerRoles({ roles }: { roles: string[] }) {
  if (!roles.length) return null;
  return (
    <div>
      <p className="mb-2 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">Job roles</p>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-2">
        {roles.map((r) => (
          <li
            key={r}
            className="box-hover flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm text-foreground"
          >
            <Sparkles className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
            {r}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------- scholarships ------------------------------ */

export function ScholarshipCard({
  name,
  criterion,
  scope,
}: {
  name: string;
  criterion?: string | null | undefined;
  scope: string;
}) {
  return (
    <article className="box-hover rounded-2xl border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-soft text-brand">
          <ScrollText className="h-4 w-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="font-display text-sm font-bold text-foreground">{name}</h3>
          <Chip>{scope}</Chip>
        </div>
      </div>
      {criterion && <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{criterion}</p>}
    </article>
  );
}

export function ScholarshipInsightSection({
  universitySlug,
  universityShort,
  courseSlug,
  courseName,
}: {
  universitySlug: string;
  universityShort: string;
  courseSlug?: string;
  courseName?: string;
}) {
  const resolved = getScholarshipInfo(universitySlug, courseSlug);
  if (!resolved) return null;
  const s: ScholarshipInfo = resolved.data;
  const criteria = (s.criteria ?? []).filter((c) => c.name || c.criterion);
  if (!criteria.length && !s.note) return null;
  const scope = resolved.origin === "course" ? "Programme scholarship" : "University scholarship";

  return (
    <InsightPanel
      icon={<FileCheck2 className="h-4 w-4" aria-hidden="true" />}
      title={courseSlug ? `${courseName ?? "Programme"} scholarships` : `${universityShort} scholarships`}
      badges={
        <>
          <ScopeBadge inherited={resolved.inherited} label={scope} />
          <DataSourceBadge status={s.status} />
        </>
      }
      footer={
        <div className="flex flex-wrap items-center justify-between gap-3">
          <OfficialSourceLink href={insightSources(universitySlug)?.scholarship} label="Scholarship source" />
          {courseSlug && (
            <PillarLink
              universitySlug={universitySlug}
              universityShort={universityShort}
              section="scholarships"
              label="View all {u} scholarships"
            />
          )}
        </div>
      }
    >
      {courseSlug && resolved.inherited && criteria.length > 0 && (
        <p className="text-sm leading-relaxed text-muted-foreground">
          These are {universityShort} scholarship categories. Applicability to this programme depends on the current
          scholarship notice.
        </p>
      )}
      {criteria.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-2">
          {criteria.map((c, i) => (
            <ScholarshipCard
              key={`${c.name ?? "scholarship"}-${i}`}
              name={c.name ?? "Scholarship"}
              criterion={c.criterion}
              scope={scope}
            />
          ))}
        </div>
      )}
      {s.note && <NoteLine>{s.note}</NoteLine>}
    </InsightPanel>
  );
}

/* ------------------------------ related links ------------------------------ */

export function RelatedPageLinks({ title, links }: { title: string; links: Array<{ label: string; href: string }> }) {
  if (!links.length) return null;
  return (
    <div className="surface-card p-4 sm:p-5">
      <p className="flex items-center gap-2 text-sm font-bold">
        <Building2 className="h-4 w-4 text-brand" aria-hidden="true" /> {title}
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        {links.map((l) => (
          <AppLink
            key={l.href}
            to={l.href}
            className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-brand/40 hover:bg-brand-soft hover:text-brand"
          >
            {l.label}
            <ArrowRight className="h-3 w-3" aria-hidden="true" />
          </AppLink>
        ))}
      </div>
    </div>
  );
}

export function SessionStamp({ session }: { session: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
      <CalendarClock className="h-3.5 w-3.5" aria-hidden="true" /> Academic session {session}
    </span>
  );
}

/**
 * Reusable course-page sections.
 *
 * Every component here takes data only — nothing about Online MBA (or any
 * other course) is hardcoded, so the same components render MCA, BBA, BCA,
 * M.Com, MA and specialisation pages.
 */
import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  GraduationCap,
  IndianRupee,
  Minus,
  Sparkles,
  ShieldCheck,
  X,
} from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { formatFee } from "@/lib/universityData";
import type { CourseFamily, FamilyOffer } from "@/lib/courseFamily";
import type { Labelled, SyllabusSemester } from "@/data/course-pages/types";

export const NOT_SPECIFIED = "Not specified";

export const fee = (n: number | null | undefined) =>
  n ? (formatFee(n) ?? NOT_SPECIFIED) : NOT_SPECIFIED;

export const sectionId = (title: string) =>
  title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Section wrapper with an anchor id matching the table of contents. */
export function Section({
  title,
  intro,
  tone = "plain",
  children,
}: {
  title: string;
  intro?: string | undefined;
  tone?: "plain" | "cream" | undefined;
  children: ReactNode;
}) {
  return (
    <section
      id={sectionId(title)}
      className={
        tone === "cream"
          ? "scroll-mt-36 rounded-3xl border border-border bg-cream p-5 sm:p-7"
          : "scroll-mt-36"
      }
    >
      <h2 className="font-display text-xl font-bold tracking-tight sm:text-2xl">{title}</h2>
      {intro && (
        <p className="mt-3 text-[0.95rem] leading-relaxed text-muted-foreground">{intro}</p>
      )}
      <div className="mt-5">{children}</div>
    </section>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  );
}

export function Note({ children }: { children: ReactNode }) {
  return (
    <p className="mt-5 rounded-xl border-l-4 border-brand bg-brand-soft/60 px-4 py-3 text-[0.85rem] leading-relaxed text-foreground">
      {children}
    </p>
  );
}

/* ------------------------------- quick facts ------------------------------ */

export function QuickFactGrid({ items }: { items: { label: string; value: string }[] }) {
  return (
    <dl className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {items.map((f) => (
        <div key={f.label} className="rounded-xl border border-border bg-card px-3.5 py-3">
          <dt className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
            {f.label}
          </dt>
          <dd className="mt-1 text-sm font-bold leading-snug text-foreground">{f.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/** "At a glance" parameter/detail table — stacks into rows on mobile. */
export function GlanceTable({ rows }: { rows: { parameter: string; detail: string }[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">Course at a glance</caption>
        <tbody className="divide-y divide-border">
          {rows.map((r) => (
            <tr key={r.parameter} className="align-top">
              <th
                scope="row"
                className="w-2/5 bg-secondary/60 px-4 py-3 text-[0.82rem] font-semibold text-foreground sm:w-1/3"
              >
                {r.parameter}
              </th>
              <td className="px-4 py-3 text-[0.88rem] text-muted-foreground">{r.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* --------------------------------- lists --------------------------------- */

export function StepFlow({ steps }: { steps: Labelled[] }) {
  return (
    <ol className="grid gap-3 sm:grid-cols-2">
      {steps.map((s, i) => (
        <li key={s.title} className="relative rounded-2xl border border-border bg-card p-4">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-brand text-xs font-bold text-brand-foreground">
            {i + 1}
          </span>
          <p className="mt-2.5 font-display text-sm font-bold">{s.title}</p>
          <p className="mt-1 text-[0.83rem] leading-relaxed text-muted-foreground">{s.detail}</p>
        </li>
      ))}
    </ol>
  );
}

export function CardGrid({ items, columns = 2 }: { items: Labelled[]; columns?: 2 | 3 }) {
  return (
    <div
      className={`grid gap-3 ${columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"}`}
    >
      {items.map((item) => (
        <div key={item.title} className="rounded-2xl border border-border bg-card p-4">
          <p className="font-display text-sm font-bold text-foreground">{item.title}</p>
          <p className="mt-1.5 text-[0.83rem] leading-relaxed text-muted-foreground">
            {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

export function TickList({
  items,
  tone = "positive",
}: {
  items: string[];
  tone?: "positive" | "negative";
}) {
  const Icon = tone === "positive" ? Check : Minus;
  return (
    <ul className="space-y-2">
      {items.map((i) => (
        <li key={i} className="flex gap-2.5 text-[0.88rem] leading-relaxed text-muted-foreground">
          <Icon
            className={`mt-0.5 h-4 w-4 shrink-0 ${tone === "positive" ? "text-success" : "text-brand"}`}
            aria-hidden="true"
          />
          <span>{i}</span>
        </li>
      ))}
    </ul>
  );
}

export function TwoColumnLists({
  left,
  right,
}: {
  left: { title: string; items: string[] };
  right: { title: string; items: string[] };
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="font-display text-sm font-bold">{left.title}</p>
        <div className="mt-3">
          <TickList items={left.items} />
        </div>
      </div>
      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="font-display text-sm font-bold">{right.title}</p>
        <div className="mt-3">
          <TickList items={right.items} tone="negative" />
        </div>
      </div>
    </div>
  );
}

export function ChipList({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li
          key={i}
          className="rounded-lg bg-secondary px-3 py-1.5 text-[0.8rem] font-semibold text-secondary-foreground"
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------- tables --------------------------------- */

/** Responsive comparison table: real table on desktop, cards on mobile. */
export function ResponsiveTable({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-border bg-card sm:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-brand text-brand-foreground">
              {head.map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="px-4 py-3 text-[0.78rem] font-semibold uppercase tracking-wide"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((r, i) => (
              <tr key={i} className="align-top even:bg-secondary/40">
                {r.map((cell, j) => (
                  <td key={j} className="px-4 py-3 text-[0.86rem] text-muted-foreground">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-3 sm:hidden">
        {rows.map((r, i) => (
          <li key={i} className="rounded-2xl border border-border bg-card p-4">
            <p className="font-display text-sm font-bold text-foreground">{r[0]}</p>
            <dl className="mt-2 divide-y divide-border">
              {r.slice(1).map((cell, j) => (
                <div key={j} className="flex justify-between gap-3 py-1.5">
                  <dt className="text-[0.78rem] font-semibold text-muted-foreground">
                    {head[j + 1]}
                  </dt>
                  <dd className="text-right text-[0.82rem] text-foreground">{cell}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </>
  );
}

export function SyllabusGrid({ semesters }: { semesters: SyllabusSemester[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {semesters.map((s) => (
        <div key={s.semester} className="overflow-hidden rounded-2xl border border-border bg-card">
          <p className="bg-brand px-4 py-2.5 font-display text-sm font-bold text-brand-foreground">
            {s.semester}
          </p>
          <ul className="divide-y divide-border">
            {s.subjects.map((sub) => (
              <li key={sub.name} className="flex items-center justify-between gap-3 px-4 py-2.5">
                <span className="text-[0.85rem] text-foreground">{sub.name}</span>
                <span className="shrink-0 rounded-md bg-secondary px-2 py-0.5 text-[0.7rem] font-semibold text-secondary-foreground">
                  {sub.type}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

/* ---------------------------- university cards ---------------------------- */

export function UniversityOfferCard({ offer }: { offer: FamilyOffer }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-card p-4">
      <div className="flex items-start gap-3">
        {offer.logo ? (
          <img
            src={offer.logo}
            alt={`${offer.universityName} logo`}
            loading="lazy"
            className="h-11 w-11 shrink-0 rounded-lg object-contain"
          />
        ) : (
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand">
            <GraduationCap className="h-5 w-5" aria-hidden="true" />
          </span>
        )}
        <div className="min-w-0">
          <h3 className="font-display text-[0.95rem] font-bold leading-snug">
            {offer.universityShortName}
          </h3>
          <p className="truncate text-[0.75rem] text-muted-foreground">
            {offer.location ?? offer.universityName}
          </p>
        </div>
      </div>

      <ul className="mt-3 flex flex-wrap gap-1.5">
        {[
          offer.ugcStatus && `UGC: ${offer.ugcStatus}`,
          offer.naac && `NAAC ${offer.naac}`,
          offer.nirf,
        ]
          .filter((v): v is string => Boolean(v))
          .slice(0, 3)
          .map((v) => (
            <li
              key={v}
              className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[0.68rem] font-semibold text-secondary-foreground"
            >
              <ShieldCheck className="h-3 w-3 text-brand" aria-hidden="true" />
              <span className="line-clamp-1">{v}</span>
            </li>
          ))}
      </ul>

      <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 border-t border-border pt-3 text-[0.78rem]">
        <div>
          <dt className="text-muted-foreground">Duration</dt>
          <dd className="font-semibold">{offer.duration ?? NOT_SPECIFIED}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Total fee</dt>
          <dd className="inline-flex items-center font-semibold">
            {offer.fees.total ? (
              <IndianRupee className="mr-0.5 h-3 w-3" aria-hidden="true" />
            ) : null}
            {offer.fees.total ? offer.fees.total.toLocaleString("en-IN") : NOT_SPECIFIED}
          </dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Specialisations</dt>
          <dd className="font-semibold">{offer.specialisations.length || NOT_SPECIFIED}</dd>
        </div>
        <div>
          <dt className="text-muted-foreground">Mode</dt>
          <dd className="font-semibold">{offer.mode}</dd>
        </div>
      </dl>

      <div className="mt-4 flex gap-2">
        <AppLink
          to={offer.path}
          className="flex-1 rounded-lg bg-brand px-3 py-2 text-center text-[0.78rem] font-semibold text-brand-foreground"
        >
          View course
        </AppLink>
        <AppLink
          to={offer.universityPath}
          className="flex-1 rounded-lg border border-border px-3 py-2 text-center text-[0.78rem] font-semibold text-brand"
        >
          University
        </AppLink>
      </div>
    </article>
  );
}

/* ------------------------------ related links ----------------------------- */

export function LinkTiles({
  links,
}: {
  links: { label: string; href: string; note?: string | undefined }[];
}) {
  if (!links.length) return null;
  return (
    <ul className="grid gap-2.5 sm:grid-cols-2">
      {links.map((l) => (
        <li key={l.href}>
          <AppLink
            to={l.href}
            className="flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-[0.85rem] font-semibold text-foreground hover:border-brand"
          >
            <span className="min-w-0">
              <span className="block truncate">{l.label}</span>
              {l.note && (
                <span className="block text-[0.72rem] font-normal text-muted-foreground">
                  {l.note}
                </span>
              )}
            </span>
            <ArrowRight className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
          </AppLink>
        </li>
      ))}
    </ul>
  );
}

/* -------------------------------- reviews -------------------------------- */

export interface CourseReview {
  student: string;
  course: string;
  university: string;
  rating: number;
  body: string;
  date: string;
  verified: boolean;
}

export function ReviewList({ reviews }: { reviews: CourseReview[] }) {
  if (!reviews.length) {
    return (
      <p className="rounded-2xl border border-dashed border-border bg-card px-5 py-8 text-center text-sm text-muted-foreground">
        Student reviews will appear here as verified feedback becomes available. We do not publish
        unverified testimonials.
      </p>
    );
  }
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {reviews.map((r) => (
        <li key={`${r.student}-${r.date}`} className="rounded-2xl border border-border bg-card p-4">
          <p className="font-display text-sm font-bold">{r.student}</p>
          <p className="text-[0.75rem] text-muted-foreground">
            {r.course} · {r.university}
          </p>
          <p className="mt-2 text-[0.85rem] leading-relaxed text-muted-foreground">{r.body}</p>
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------ trust section ----------------------------- */

export function PlatformTrust({ family }: { family: CourseFamily }) {
  const items = [
    {
      title: "University comparison",
      detail: `Side-by-side comparison of every ${family.name} programme in our dataset.`,
    },
    {
      title: "Transparent fees",
      detail: "Published figures only. Anything unverified is labelled, never estimated.",
    },
    {
      title: "Official sources",
      detail: "Fee and approval data is linked back to the university's own pages.",
    },
    {
      title: "Admission guidance",
      detail: "Free counselling to shortlist a university that fits your goal and budget.",
    },
  ];
  return <CardGrid items={items} />;
}

export function FinalCta({ family }: { family: CourseFamily }) {
  return (
    <section className="rounded-3xl bg-brand px-5 py-8 text-brand-foreground sm:px-8 sm:py-10">
      <h2 className="font-display text-xl font-bold sm:text-2xl">
        Not sure which {family.name} to pick?
      </h2>
      <p className="mt-2 max-w-2xl text-[0.9rem] opacity-90">
        Compare the universities above on fee, entitlement status and specialisation, or talk to a
        counsellor who will walk you through the shortlist. No cost, no obligation.
      </p>
      <div className="mt-5 flex flex-wrap gap-3">
        <a
          href="#compare-universities"
          className="rounded-lg bg-brand-foreground px-5 py-2.5 text-sm font-bold text-brand"
        >
          Compare universities
        </a>
        <AppLink
          to="/contact"
          className="rounded-lg border border-brand-foreground/40 px-5 py-2.5 text-sm font-bold text-brand-foreground"
        >
          Get free counselling
        </AppLink>
      </div>
    </section>
  );
}

export { X as CrossIcon };

/* ------------------------------- accordions ------------------------------- */

const accordionTones = [
  { closed: "bg-brand-soft text-brand", open: "bg-brand text-brand-foreground" },
  {
    closed: "bg-highlight/25 text-highlight-foreground",
    open: "bg-highlight text-highlight-foreground",
  },
  { closed: "bg-success/15 text-success", open: "bg-success text-white" },
  { closed: "bg-accent text-accent-foreground", open: "bg-accent-foreground text-accent" },
];

export interface AccordionItem {
  title: string;
  content: ReactNode;
}

/**
 * Colour-cycled accordion. First panel open by default; opening another closes
 * the previous one, which keeps long course pages short on mobile.
 */
export function AccordionList({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  return (
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        const tone = accordionTones[i % accordionTones.length]!;
        return (
          <div
            key={item.title}
            className="overflow-hidden rounded-2xl border border-border bg-card"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left font-display text-[0.92rem] font-bold transition-colors sm:text-base ${
                  isOpen ? tone.open : tone.closed
                }`}
              >
                <span className="min-w-0">{item.title}</span>
                <ChevronDown
                  className={`h-4.5 w-4.5 shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>
            </h3>
            {isOpen && (
              <div className="px-4 py-4 text-[0.88rem] leading-relaxed text-muted-foreground">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/** Labelled[] rendered as an accordion (heading = title, body = detail). */
export function LabelledAccordion({
  items,
  defaultOpen = 0,
}: {
  items: Labelled[];
  defaultOpen?: number;
}) {
  return (
    <AccordionList
      defaultOpen={defaultOpen}
      items={items.map((i) => ({ title: i.title, content: <p>{i.detail}</p> }))}
    />
  );
}

/* --------------------------- audience highlight --------------------------- */

export function AudienceCards({ items }: { items: Labelled[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item, i) => (
        <div
          key={item.title}
          className="relative overflow-hidden rounded-2xl border border-brand/15 bg-gradient-to-br from-brand-soft/70 to-card p-4 pl-5 shadow-[0_14px_30px_-26px_oklch(0_0_0/0.6)]"
        >
          <span aria-hidden="true" className="absolute inset-y-0 left-0 w-1.5 bg-brand" />
          <div className="flex items-center gap-2.5">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand text-[0.78rem] font-bold text-brand-foreground">
              {i + 1}
            </span>
            <p className="font-display text-[0.95rem] font-bold leading-snug text-foreground">
              {item.title}
            </p>
          </div>
          <p className="mt-2.5 text-[0.86rem] leading-relaxed text-foreground/75">{item.detail}</p>
        </div>
      ))}
    </div>
  );
}

/* ----------------------------- fee summary -------------------------------- */

export function FeeSummaryTable({ offers }: { offers: FamilyOffer[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <table className="w-full text-left">
        <caption className="sr-only">University-wise total fee and duration</caption>
        <thead>
          <tr className="bg-brand text-brand-foreground">
            <th
              scope="col"
              className="px-3 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide sm:px-4 sm:text-[0.78rem]"
            >
              University
            </th>
            <th
              scope="col"
              className="px-3 py-2.5 text-[0.7rem] font-semibold uppercase tracking-wide sm:px-4 sm:text-[0.78rem]"
            >
              Duration
            </th>
            <th
              scope="col"
              className="px-3 py-2.5 text-right text-[0.7rem] font-semibold uppercase tracking-wide sm:px-4 sm:text-[0.78rem]"
            >
              Total fee
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {offers.map((o) => (
            <tr key={o.key} className="even:bg-secondary/40">
              <td className="px-3 py-3 sm:px-4">
                <AppLink
                  to={o.path}
                  className="text-[0.83rem] font-semibold text-brand hover:underline sm:text-[0.9rem]"
                >
                  {o.universityShortName}
                </AppLink>
              </td>
              <td className="px-3 py-3 text-[0.8rem] text-muted-foreground sm:px-4 sm:text-[0.86rem]">
                {o.duration ?? NOT_SPECIFIED}
              </td>
              <td className="px-3 py-3 text-right text-[0.8rem] font-semibold text-foreground sm:px-4 sm:text-[0.88rem]">
                {fee(o.fees.total)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ------------------------- university card (2-up) -------------------------- */

export function UniversityTile({ offer }: { offer: FamilyOffer }) {
  return (
    <article className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-4 text-center transition-all hover:-translate-y-0.5 hover:border-brand/40 sm:px-4 sm:py-5">
      <span className="flex h-11 w-full items-center justify-center overflow-hidden sm:h-14">
        {offer.logo ? (
          <img
            src={offer.logo}
            alt={`${offer.universityName} logo`}
            loading="lazy"
            decoding="async"
            className="h-full w-auto max-w-[85%] object-contain"
          />
        ) : (
          <span className="font-display text-sm font-extrabold text-brand">
            {offer.universityShortName}
          </span>
        )}
      </span>
      <h3 className="text-[0.82rem] font-extrabold leading-snug sm:text-[0.95rem]">
        {offer.universityShortName}
      </h3>
      <p className="text-[0.72rem] leading-snug text-muted-foreground sm:text-[0.8rem]">
        {offer.universityName}
      </p>
      <p className="text-[0.72rem] font-semibold text-foreground sm:text-[0.8rem]">
        {offer.fees.total ? `${fee(offer.fees.total)} total` : NOT_SPECIFIED}
      </p>
      <AppLink
        to={offer.path}
        className="mt-auto inline-flex w-full items-center justify-center gap-1 rounded-lg bg-brand px-3 py-2 pt-2 text-[0.75rem] font-bold text-brand-foreground sm:text-[0.82rem]"
      >
        View course <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
      </AppLink>
    </article>
  );
}

/* ----------------------------- specialisations ---------------------------- */

export function SpecialisationShowcase({
  items,
}: {
  items: {
    slug: string;
    name: string;
    universities: { name: string; slug: string; path: string }[];
  }[];
}) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? items : items.slice(0, 6);
  return (
    <div>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((s, i) => (
          <li
            key={s.slug}
            className={`group relative overflow-hidden rounded-2xl border p-4 transition-transform hover:-translate-y-0.5 ${
              i % 3 === 0
                ? "border-brand/20 bg-gradient-to-br from-brand-soft to-card"
                : i % 3 === 1
                  ? "border-highlight/30 bg-gradient-to-br from-highlight/20 to-card"
                  : "border-success/25 bg-gradient-to-br from-success/12 to-card"
            }`}
          >
            <span className="inline-flex items-center gap-1.5 rounded-full bg-card/80 px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-brand">
              <Sparkles className="h-3 w-3" aria-hidden="true" /> Specialisation
            </span>
            <p className="mt-2 font-display text-[0.95rem] font-bold leading-snug text-foreground">
              {s.name}
            </p>
            <p className="mt-1 text-[0.74rem] text-foreground/65">
              {s.universities.length} universit{s.universities.length === 1 ? "y" : "ies"} offer
              this
            </p>
            <ul className="mt-2.5 flex flex-wrap gap-1.5">
              {s.universities.slice(0, 3).map((u) => (
                <li key={u.slug}>
                  <AppLink
                    to={u.path}
                    className="rounded-md bg-card px-2 py-1 text-[0.68rem] font-semibold text-brand"
                  >
                    {u.name}
                  </AppLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      {items.length > 6 && (
        <div className="mt-5 text-center">
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-soft px-5 py-2.5 text-[0.82rem] font-bold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
          >
            {showAll ? "Show less" : `See more (${items.length - 6})`}
            <ChevronDown
              className={`h-4 w-4 transition-transform ${showAll ? "rotate-180" : ""}`}
              aria-hidden="true"
            />
          </button>
        </div>
      )}
    </div>
  );
}

/* --------------------------- side-by-side table --------------------------- */

/** Always a real table — no mobile stacking — so columns stay comparable. */
export function SideBySideTable({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border bg-card">
      <table className="w-full min-w-[22rem] text-left">
        <caption className="sr-only">{caption}</caption>
        <thead>
          <tr className="bg-brand text-brand-foreground">
            {head.map((h) => (
              <th
                key={h}
                scope="col"
                className="px-2.5 py-2.5 text-[0.68rem] font-semibold uppercase tracking-wide sm:px-4 sm:py-3 sm:text-[0.78rem]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {rows.map((r, i) => (
            <tr key={i} className="align-top even:bg-secondary/40">
              {r.map((cell, j) => (
                <td
                  key={j}
                  className={`px-2.5 py-2.5 text-[0.75rem] leading-snug sm:px-4 sm:py-3 sm:text-[0.86rem] ${
                    j === 0 ? "font-semibold text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

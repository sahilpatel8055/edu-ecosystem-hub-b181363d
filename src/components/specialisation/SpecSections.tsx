/**
 * Presentation blocks for specialisation pages.
 *
 * Every section is a bordered block with a coloured heading band so the page
 * reads as clearly separated chapters. Tone "brand" gives the maroon band used
 * for the high-attention sections (highlights, colleges, salary).
 */
import type { ReactNode } from "react";
import { ArrowRight, IndianRupee } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { sectionId } from "@/components/course/CourseSections";
import type { SpecHighlight, SpecRole } from "@/data/specialisation-content/types";
import type { FamilyOffer } from "@/lib/courseFamily";

type Tone = "plain" | "cream" | "brand" | "tint" | "exam";

const bodyTone: Record<Tone, string> = {
  plain: "bg-card",
  cream: "bg-cream",
  brand: "bg-brand-soft/45",
  tint: "bg-tint-admission",
  exam: "bg-tint-exam/35",
};

const headTone: Record<Tone, string> = {
  plain: "bg-secondary text-foreground",
  cream: "bg-brand-soft text-brand",
  brand: "bg-brand text-brand-foreground",
  tint: "bg-brand text-brand-foreground",
  exam: "bg-tint-exam text-foreground",
};

/** Bordered chapter block with a coloured heading band. */
export function SpecSection({
  title,
  tone = "plain",
  eyebrow,
  intro,
  children,
}: {
  title: string;
  tone?: Tone;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={sectionId(title)}
      className={`scroll-mt-36 overflow-hidden rounded-3xl border border-border shadow-sm ${bodyTone[tone]}`}
    >
      <header className={`flex flex-wrap items-baseline gap-x-3 gap-y-1 px-4 py-3.5 sm:px-6 ${headTone[tone]}`}>
        {eyebrow && (
          <span className="text-[0.62rem] font-bold uppercase tracking-[0.18em] opacity-80">{eyebrow}</span>
        )}
        <h2 className="font-display text-[1.05rem] font-bold leading-snug sm:text-[1.35rem]">{title}</h2>
      </header>
      <div className="px-4 py-5 sm:px-6 sm:py-6">
        {intro && <p className="mb-4 text-[0.95rem] leading-relaxed text-muted-foreground">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export function SpecProse({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className="space-y-4 text-[0.95rem] leading-relaxed text-foreground/80">
      {paragraphs.map((p) => (
        <p key={p.slice(0, 40)}>{p}</p>
      ))}
    </div>
  );
}

/** Two-column highlights table — the format searchers expect at the top. */
export function HighlightTable({ items }: { items: SpecHighlight[] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand/25 bg-card">
      <table className="w-full text-left">
        <caption className="sr-only">Programme highlights</caption>
        <tbody className="divide-y divide-border">
          {items.map((h) => (
            <tr key={h.label} className="align-top transition-colors hover:bg-brand-soft/40">
              <th
                scope="row"
                className="w-[42%] border-r border-border bg-secondary/70 px-3 py-2.5 text-[0.78rem] font-bold text-foreground sm:w-[34%] sm:px-4 sm:py-3 sm:text-[0.85rem]"
              >
                {h.label}
              </th>
              <td className="px-3 py-2.5 text-[0.8rem] leading-relaxed text-muted-foreground sm:px-4 sm:py-3 sm:text-[0.88rem]">
                {h.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** Numbered eligibility / checklist rows inside a bordered block. */
export function NumberedList({ items }: { items: string[] }) {
  return (
    <ol className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
      {items.map((item, i) => (
        <li key={item} className="flex gap-3 px-3.5 py-3 transition-colors hover:bg-secondary/50 sm:px-4">
          <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand text-[0.72rem] font-bold text-brand-foreground">
            {i + 1}
          </span>
          <p className="text-[0.85rem] leading-relaxed text-foreground/80 sm:text-[0.9rem]">{item}</p>
        </li>
      ))}
    </ol>
  );
}

/** Career roles + indicative salary — table on desktop, rows on mobile. */
export function SalaryTable({ roles }: { roles: SpecRole[] }) {
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-brand/25 bg-card sm:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Job roles and indicative salary</caption>
          <thead>
            <tr className="bg-brand text-brand-foreground">
              <th scope="col" className="px-4 py-3 text-[0.75rem] font-bold uppercase tracking-wide">
                Job role
              </th>
              <th scope="col" className="px-4 py-3 text-[0.75rem] font-bold uppercase tracking-wide">
                Average annual package
              </th>
              <th scope="col" className="px-4 py-3 text-[0.75rem] font-bold uppercase tracking-wide">
                What the role does
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {roles.map((r) => (
              <tr key={r.role} className="align-top transition-colors even:bg-secondary/40 hover:bg-brand-soft/40">
                <th scope="row" className="px-4 py-3 text-[0.86rem] font-bold text-foreground">
                  {r.role}
                </th>
                <td className="whitespace-nowrap px-4 py-3 text-[0.86rem] font-semibold text-brand">{r.salary}</td>
                <td className="px-4 py-3 text-[0.84rem] text-muted-foreground">{r.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-2.5 sm:hidden">
        {roles.map((r) => (
          <li key={r.role} className="rounded-2xl border border-border bg-card p-3.5">
            <div className="flex items-start justify-between gap-3">
              <p className="font-display text-[0.88rem] font-bold text-foreground">{r.role}</p>
              <span className="inline-flex shrink-0 items-center gap-0.5 rounded-lg bg-brand-soft px-2 py-1 text-[0.72rem] font-bold text-brand">
                <IndianRupee className="h-3 w-3" aria-hidden="true" />
                {r.salary.replace(/₹/g, "")}
              </span>
            </div>
            <p className="mt-1.5 text-[0.78rem] leading-relaxed text-muted-foreground">{r.detail}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

/** "Top colleges offering …" table with fee, duration and a link. */
export function CollegeTable({ offers, courseName }: { offers: FamilyOffer[]; courseName: string }) {
  const rows = offers.slice(0, 10);
  return (
    <>
      <div className="hidden overflow-hidden rounded-2xl border border-brand/25 bg-card lg:block">
        <table className="w-full text-left text-sm">
          <caption className="sr-only">Universities offering {courseName}</caption>
          <thead>
            <tr className="bg-brand text-brand-foreground">
              {["#", "University", "Total fee", "Duration", "Approvals", ""].map((h, i) => (
                <th key={i} scope="col" className="px-3 py-3 text-[0.72rem] font-bold uppercase tracking-wide">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((o, i) => (
              <tr key={o.key} className="align-middle transition-colors even:bg-secondary/40 hover:bg-brand-soft/40">
                <td className="px-3 py-3 text-[0.8rem] font-bold text-brand">{i + 1}</td>
                <th scope="row" className="px-3 py-3 text-[0.85rem] font-bold text-foreground">
                  {o.universityName}
                  {o.location && (
                    <span className="mt-0.5 block text-[0.72rem] font-medium text-muted-foreground">{o.location}</span>
                  )}
                </th>
                <td className="px-3 py-3 text-[0.84rem] font-semibold text-foreground">
                  {o.fees.total ? `₹${o.fees.total.toLocaleString("en-IN")}` : "Not specified"}
                </td>
                <td className="px-3 py-3 text-[0.82rem] text-muted-foreground">{o.duration ?? "—"}</td>
                <td className="px-3 py-3 text-[0.78rem] text-muted-foreground">
                  {[o.debStatus ? "UGC-DEB" : null, o.naac ? `NAAC ${o.naac}` : null].filter(Boolean).join(" · ") ||
                    "Check university page"}
                </td>
                <td className="px-3 py-3">
                  <AppLink
                    to={o.path}
                    className="inline-flex items-center gap-1 rounded-lg bg-brand px-2.5 py-1.5 text-[0.74rem] font-bold text-brand-foreground transition-colors hover:opacity-90"
                  >
                    View <ArrowRight className="h-3 w-3" aria-hidden="true" />
                  </AppLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="space-y-2.5 lg:hidden">
        {rows.map((o, i) => (
          <li key={o.key} className="rounded-2xl border border-border bg-card p-3.5">
            <div className="flex items-start gap-2.5">
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-brand text-[0.72rem] font-bold text-brand-foreground">
                {i + 1}
              </span>
              <div className="min-w-0">
                <p className="font-display text-[0.88rem] font-bold leading-snug text-foreground">{o.universityName}</p>
                {o.location && <p className="text-[0.72rem] text-muted-foreground">{o.location}</p>}
              </div>
            </div>
            <dl className="mt-2.5 divide-y divide-border border-y border-border">
              <div className="flex justify-between gap-3 py-1.5">
                <dt className="text-[0.75rem] font-semibold text-muted-foreground">Total fee</dt>
                <dd className="text-[0.8rem] font-bold text-foreground">
                  {o.fees.total ? `₹${o.fees.total.toLocaleString("en-IN")}` : "Not specified"}
                </dd>
              </div>
              <div className="flex justify-between gap-3 py-1.5">
                <dt className="text-[0.75rem] font-semibold text-muted-foreground">Duration</dt>
                <dd className="text-[0.8rem] text-foreground">{o.duration ?? "—"}</dd>
              </div>
            </dl>
            <AppLink
              to={o.path}
              className="mt-2.5 inline-flex w-full items-center justify-center gap-1.5 rounded-xl bg-brand px-3 py-2 text-[0.78rem] font-bold text-brand-foreground"
            >
              View fees &amp; admission <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </AppLink>
          </li>
        ))}
      </ul>
    </>
  );
}

export function ChipRow({ items, tone = "soft" }: { items: string[]; tone?: "soft" | "outline" }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((i) => (
        <li
          key={i}
          className={
            tone === "soft"
              ? "rounded-full bg-brand-soft px-3 py-1.5 text-[0.78rem] font-semibold text-brand"
              : "rounded-full border border-border bg-card px-3 py-1.5 text-[0.78rem] font-semibold text-foreground"
          }
        >
          {i}
        </li>
      ))}
    </ul>
  );
}

/** Full-width maroon band used to break the page rhythm. */
export function BrandBand({
  title,
  points,
  footnote,
}: {
  title: string;
  points: { title: string; detail: string }[];
  footnote?: string;
}) {
  return (
    <section className="overflow-hidden rounded-3xl bg-brand px-4 py-6 text-brand-foreground sm:px-7 sm:py-8">
      <h2 className="font-display text-[1.1rem] font-bold sm:text-[1.4rem]">{title}</h2>
      <div className="mt-4 grid grid-cols-2 gap-2.5 sm:gap-3.5 lg:grid-cols-3">
        {points.map((p) => (
          <div
            key={p.title}
            className="rounded-2xl border border-brand-foreground/20 bg-brand-foreground/10 p-3 transition-colors hover:bg-brand-foreground/20 sm:p-4"
          >
            <p className="font-display text-[0.82rem] font-bold sm:text-[0.95rem]">{p.title}</p>
            <p className="mt-1.5 text-[0.74rem] leading-relaxed opacity-90 sm:text-[0.84rem]">{p.detail}</p>
          </div>
        ))}
      </div>
      {footnote && <p className="mt-4 text-[0.75rem] opacity-80 sm:text-[0.82rem]">{footnote}</p>}
    </section>
  );
}

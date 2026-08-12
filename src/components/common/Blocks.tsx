import type { ReactNode } from "react";
import {
  BookOpen,
  Building2,
  CalendarClock,
  Check,
  ExternalLink,
  Home,
  Minus,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
} from "lucide-react";
import { AppLink } from "./AppLink";
import { Chip } from "./Primitives";
import type { LinkRef } from "@/lib/entities";

/* ------------------------------ Quick facts ------------------------------ */

export function QuickFacts({ items }: { items: { label: string; value: ReactNode }[] }) {
  return (
    <dl
      id="quick-facts"
      className="scroll-mt-36 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3 lg:grid-cols-4"
    >
      {items.map((i) => (
        <div key={i.label} className="bg-card p-3 sm:p-4">
          <dt className="text-[0.68rem] font-semibold uppercase tracking-wider text-muted-foreground">{i.label}</dt>
          <dd className="mt-1 text-sm font-bold leading-snug sm:text-base">{i.value}</dd>
        </div>
      ))}
    </dl>
  );
}

/* -------------------------------- Tables -------------------------------- */

export function DataTable({
  caption,
  head,
  rows,
}: {
  caption?: string;
  head: string[];
  rows: ReactNode[][];
}) {
  return (
    <>
      {/* Mobile: each row becomes a stacked card — no horizontal scrolling. */}
      <ul className="space-y-3 sm:hidden">
        {rows.map((r, i) => (
          <li key={i} className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="bg-brand px-3 py-2 text-sm font-bold text-brand-foreground">{r[0]}</div>
            <dl className="divide-y divide-border">
              {head.slice(1).map((h, j) => (
                <div key={h} className="grid grid-cols-[42%_minmax(0,1fr)] gap-2 px-3 py-2">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{h}</dt>
                  <dd className="min-w-0 text-sm font-medium">{r[j + 1]}</dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>

      <table className="hidden w-full border-collapse overflow-hidden rounded-xl border border-border text-sm sm:table">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead>
          <tr className="bg-brand text-left text-brand-foreground">
            {head.map((h) => (
              <th key={h} scope="col" className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i} className="border-t border-border align-top odd:bg-surface-2">
              {r.map((cell, j) => (
                <td key={j} className="px-3 py-2.5">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}


/* ------------------------------- Pros/cons ------------------------------- */

export function ProsCons({ pros, cons }: { pros: string[]; cons: string[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="surface-card p-4 sm:p-5">
        <p className="text-sm font-bold text-success">Strengths</p>
        <ul className="mt-3 space-y-2">
          {pros.map((p) => (
            <li key={p} className="flex gap-2 text-sm text-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" /> {p}
            </li>
          ))}
        </ul>
      </div>
      <div className="surface-card p-4 sm:p-5">
        <p className="text-sm font-bold text-highlight-foreground">Things to weigh</p>
        <ul className="mt-3 space-y-2">
          {cons.map((c) => (
            <li key={c} className="flex gap-2 text-sm text-foreground">
              <Minus className="mt-0.5 h-4 w-4 shrink-0 text-highlight-foreground" /> {c}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ------------------------------- Step list ------------------------------- */

export function StepList({ steps }: { steps: string[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li key={s} className="grid grid-cols-[auto_minmax(0,1fr)] gap-3">
          <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-soft text-xs font-bold text-brand">
            {i + 1}
          </span>
          <span className="min-w-0 pt-1 text-sm text-foreground">{s}</span>
        </li>
      ))}
    </ol>
  );
}

/* ---------------------------- Internal linking --------------------------- */

export function LinkCluster({ title, links }: { title: string; links: LinkRef[] }) {
  if (!links.length) return null;
  return (
    <div className="surface-card p-4 sm:p-5">
      <p className="text-sm font-bold">{title}</p>
      <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
        {links.map((l) => (
          <li key={l.href + l.label} className="min-w-0">
            <AppLink
              to={l.href}
              className="flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 text-sm transition-colors hover:bg-secondary"
            >
              <span className="truncate text-foreground">{l.label}</span>
              {l.note && <span className="shrink-0 text-xs text-muted-foreground">{l.note}</span>}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Dense related-links block placed at the bottom of every detail page. */
export function RelatedLinkGrid({ groups }: { groups: { title: string; links: LinkRef[] }[] }) {
  return (
    <section id="related-links" className="scroll-mt-36">
      <h2 className="text-xl font-bold sm:text-2xl">Explore next</h2>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        {groups.map((g) => (
          <LinkCluster key={g.title} title={g.title} links={g.links} />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------ Trust blocks ----------------------------- */

export function UpdatedStamp({ date, verified }: { date: string; verified?: boolean }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
      <span className="inline-flex items-center gap-1">
        <CalendarClock className="h-3.5 w-3.5" /> Last updated {date}
      </span>
      <Chip tone={verified ? "success" : "highlight"}>
        <ShieldCheck className="mr-1 h-3 w-3" />
        {verified ? "Officially verified" : "Awaiting official verification"}
      </Chip>
    </div>
  );
}

export function AuthorBox({
  name = "AVEDU Editorial Desk",
  role = "Education research team",
  slug = "",
}: {
  name?: string;
  role?: string;
  slug?: string;
}) {
  return (
    <section id="author" className="surface-card scroll-mt-36 grid grid-cols-[auto_minmax(0,1fr)] gap-4 p-4 sm:p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-soft font-display text-sm font-bold text-brand">
        {name
          .split(" ")
          .map((w) => w[0])
          .slice(0, 2)
          .join("")}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-bold">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Every fact on this page is checked against university and UGC-DEB sources before publication, and
          re-checked each admission cycle.
        </p>
        {slug && (
          <AppLink to={`/authors/${slug}`} className="mt-2 inline-block text-sm font-semibold text-brand hover:underline">
            View profile →
          </AppLink>
        )}
      </div>
    </section>
  );
}

export function References({ items }: { items: { label: string; href?: string | undefined }[] }) {
  return (
    <section id="references" className="scroll-mt-36">
      <h2 className="text-xl font-bold sm:text-2xl">References</h2>
      <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
        {items.map((r) => (
          <li key={r.label} className="flex gap-2">
            <ExternalLink className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            {r.href ? (
              <a href={r.href} rel="nofollow noopener noreferrer" target="_blank" className="hover:text-foreground">
                {r.label}
              </a>
            ) : (
              r.label
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

/* ---------------------------- Mobile sticky CTA --------------------------- */

export function StickyMobileCTA({
  label = "Get free guidance",
  href = "/contact",
}: {
  label?: string;
  href?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  const items = [
    { to: "/", icon: Home, label: "Home" },
    { to: "/universities", icon: Building2, label: "Universities" },
    { to: "/courses", icon: BookOpen, label: "Courses" },
    { to: "/compare", icon: Search, label: "Compare" },
  ];
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      <div className="border-t border-white/25 bg-[#7f1813]/45 pb-[env(safe-area-inset-bottom)] text-white shadow-[0_-10px_30px_-18px_oklch(0_0_0/0.55)] backdrop-blur-2xl backdrop-saturate-200 [background-image:linear-gradient(to_bottom,rgba(255,255,255,0.14),rgba(255,255,255,0))]">
        <nav className="grid grid-cols-5 items-end px-1 pt-2 pb-1.5">
          {items.slice(0, 2).map((i) => (
            <NavItem key={i.to} {...i} />
          ))}
          <AppLink
            to={href}
            aria-label={label}
            className="mx-auto -mt-7 grid h-16 w-16 shrink-0 place-items-center rounded-full border-4 border-white/40 bg-brand text-center text-[0.6rem] font-extrabold uppercase leading-tight tracking-wide text-brand-foreground shadow-lg backdrop-blur"
          >
            <span className="px-1">Apply now</span>
          </AppLink>
          {items.slice(2).map((i) => (
            <NavItem key={i.to} {...i} />
          ))}
        </nav>
      </div>
    </div>
  );
}

/**
 * Desktop counterpart: a slim, professional floating counselling dock in the
 * bottom-right corner instead of the mobile app-style bottom bar.
 */
export function DesktopStickyCTA({
  href = "/contact",
  phone = "+91 90000 00000",
}: {
  href?: string;
  phone?: string;
}) {
  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden lg:block">
      <div className="pointer-events-auto flex items-center gap-4 rounded-2xl border border-white/15 bg-[#7f1813]/85 px-5 py-3.5 text-white shadow-[0_24px_60px_-28px_oklch(0_0_0/0.75)] backdrop-blur-xl">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/15">
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
        </span>
        <span className="block leading-tight">
          <span className="block text-sm font-bold">Free admission counselling</span>
          <span className="mt-0.5 flex items-center gap-1.5 text-xs text-white/80">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" /> {phone}
          </span>
        </span>
        <AppLink
          to={href}
          className="ml-2 shrink-0 rounded-xl bg-white px-4 py-2.5 text-sm font-bold text-[#7f1813] transition-transform hover:-translate-y-0.5"
        >
          Talk to an expert
        </AppLink>
      </div>
    </div>
  );
}

function NavItem({
  to,
  icon: Icon,
  label,
}: {
  to: string;
  icon: typeof Home;
  label: string;
}) {
  return (
    <AppLink
      to={to}
      className="flex flex-col items-center gap-1 px-1 py-1 text-[0.62rem] font-extrabold uppercase tracking-wide text-white drop-shadow-[0_1px_3px_rgba(0,0,0,0.65)]"
    >
      <Icon className="h-[1.4rem] w-[1.4rem]" strokeWidth={2.4} aria-hidden="true" />
      <span className="truncate">{label}</span>
    </AppLink>
  );
}


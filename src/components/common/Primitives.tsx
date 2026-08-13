import type { ReactNode } from "react";
import { ArrowRight, Inbox, Loader2 } from "lucide-react";
import { AppLink } from "./AppLink";
import { AccentHeadline } from "./Headline";
import { cn } from "@/lib/utils";

/* ------------------------------- Section ------------------------------- */

export function Section({
  children,
  className,
  muted = false,
}: {
  children: ReactNode;
  className?: string;
  muted?: boolean;
}) {
  return (
    <section className={cn("py-14 sm:py-20", muted && "bg-surface-2", className)}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  href,
  linkLabel = "View all",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:flex-wrap sm:justify-between">
      <div className="min-w-0 max-w-2xl">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h2 className="font-display text-[1.6rem] font-extrabold leading-tight tracking-tight sm:text-[2rem]">
          <AccentHeadline text={title} />
        </h2>
        {description && (
          <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
        )}
      </div>
      {href && (
        <AppLink
          to={href}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand/25 bg-brand-soft px-4 py-2 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          {linkLabel} <ArrowRight className="h-4 w-4" />
        </AppLink>
      )}
    </div>

  );
}

/* -------------------------------- Chips -------------------------------- */

export function Chip({
  children,
  active = false,
  tone = "default",
}: {
  children: ReactNode;
  active?: boolean;
  tone?: "default" | "brand" | "highlight" | "success";
}) {
  const tones = {
    default: "border-border bg-secondary text-secondary-foreground",
    brand: "border-transparent bg-brand-soft text-brand",
    highlight: "border-transparent bg-highlight/20 text-highlight-foreground",
    success: "border-transparent bg-success/15 text-success",
  } as const;
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium",
        tones[tone],
        active && "border-brand bg-brand text-brand-foreground",
      )}
    >
      {children}
    </span>
  );
}

export function FilterBar({ groups }: { groups: { label: string; options: string[] }[] }) {
  return (
    <div className="surface-card mb-8 flex flex-col gap-4 p-5">
      {groups.map((g) => (
        <div key={g.label} className="grid gap-2 sm:grid-cols-[8rem_minmax(0,1fr)] sm:items-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{g.label}</p>
          <div className="flex flex-wrap gap-2">
            {g.options.map((o, i) => (
              <button
                key={o}
                type="button"
                aria-pressed={i === 0}
                className="inline-flex min-h-11 items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:min-h-0"
              >
                <Chip active={i === 0}>{o}</Chip>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* --------------------------- States & feedback -------------------------- */

export function EmptyState({
  title = "Nothing here yet",
  description = "Content for this section is being prepared by our editorial team.",
  actionLabel,
  actionHref,
}: {
  title?: string;
  description?: string;
  actionLabel?: string;
  actionHref?: string;
}) {
  return (
    <div className="surface-card flex flex-col items-center justify-center px-6 py-16 text-center">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-secondary text-muted-foreground">
        <Inbox className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 max-w-sm text-sm text-muted-foreground">{description}</p>
      {actionHref && actionLabel && (
        <AppLink
          to={actionHref}
          className="mt-6 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
        >
          {actionLabel}
        </AppLink>
      )}
    </div>
  );
}

export function LoadingState({ label = "Loading content…" }: { label?: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-20 text-sm text-muted-foreground">
      <Loader2 className="h-4 w-4 animate-spin" /> {label}
    </div>
  );
}

export function SkeletonGrid({ count = 6 }: { count?: number }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="surface-card animate-pulse space-y-3 p-6">
          <div className="h-4 w-1/3 rounded bg-secondary" />
          <div className="h-5 w-4/5 rounded bg-secondary" />
          <div className="h-3 w-full rounded bg-secondary" />
          <div className="h-3 w-2/3 rounded bg-secondary" />
        </div>
      ))}
    </div>
  );
}

/* ------------------------------ Pagination ------------------------------ */

export function SimplePagination({ page = 1, total = 8 }: { page?: number; total?: number }) {
  const pages = Array.from({ length: Math.min(total, 5) }, (_, i) => i + 1);
  return (
    <nav aria-label="Pagination" className="mt-12 flex items-center justify-center gap-1.5">
      <span className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground">Prev</span>
      {pages.map((p) => (
        <span
          key={p}
          aria-current={p === page ? "page" : undefined}
          className={cn(
            "grid h-10 w-10 place-items-center rounded-full border text-sm font-medium",
            p === page ? "border-brand bg-brand text-brand-foreground" : "border-border hover:bg-secondary",
          )}
        >
          {p}
        </span>
      ))}
      <span className="text-sm text-muted-foreground">…</span>
      <span className="rounded-full border border-border px-4 py-2 text-sm">Next</span>
    </nav>
  );
}

/* --------------------------------- CTA ---------------------------------- */

export function CTASection({
  title = "Talk to an AVEDU counsellor",
  description = "Get a shortlist matched to your budget, eligibility and career goal — free, and without sales pressure.",
  primaryLabel = "Get free guidance",
  primaryHref = "/contact",
  secondaryLabel = "Compare universities",
  secondaryHref = "/compare",
}: {
  title?: string;
  description?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}) {
  return (
    <div className="panel-crimson relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
      <span className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(currentColor_1px,transparent_1px)] [background-size:18px_18px]" />
      <div className="relative">
        <h2 className="mx-auto max-w-2xl font-display text-2xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm opacity-85 sm:text-base">{description}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <AppLink
            to={primaryHref}
            className="rounded-full bg-[oklch(0.99_0.01_70)] px-7 py-3 text-sm font-bold text-[oklch(0.32_0.12_28)] transition-transform hover:-translate-y-0.5"
          >
            {primaryLabel}
          </AppLink>
          <AppLink
            to={secondaryHref}
            className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold transition-colors hover:bg-white/10"
          >
            {secondaryLabel}
          </AppLink>
        </div>
      </div>
    </div>

  );
}
import { useState, type ReactNode } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { approvalIcon } from "@/lib/assets";
import { AppLink } from "./AppLink";

/**
 * Auto-scrolling ("marquee") strip of equal-size boxes.
 * The track is duplicated so the loop is seamless; it pauses on hover/focus
 * and stops entirely for users who prefer reduced motion.
 */
export function BoxMarquee({
  items,
  speed = 38,
  ariaLabel,
}: {
  items: ReactNode[];
  /** Seconds for one full loop. Larger = slower. */
  speed?: number;
  ariaLabel: string;
}) {
  if (!items.length) return null;
  // Short lists look broken when scrolled — render a plain grid instead.
  if (items.length < 4) {
    return (
      <ul aria-label={ariaLabel} className="grid gap-3 sm:grid-cols-3">
        {items.map((item, i) => (
          <li key={i} className="min-w-0">
            {item}
          </li>
        ))}
      </ul>
    );
  }

  const track = [...items, ...items];
  return (
    <div className="marquee" aria-label={ariaLabel} role="group">
      <ul className="marquee-track" style={{ animationDuration: `${speed}s` }}>
        {track.map((item, i) => (
          <li key={i} aria-hidden={i >= items.length} className="w-[13.5rem] shrink-0 sm:w-[15rem]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Card matching the approvals reference: framed logo above, label below. */
export function ApprovalBox({ body, status }: { body: string; status?: string | undefined }) {
  const icon = approvalIcon(body);
  return (
    <div className="box-hover flex h-full flex-col items-center gap-3 rounded-2xl border border-brand/35 bg-card p-4 text-center shadow-[0_12px_28px_-24px_oklch(0.39_0.139_28/0.7)]">
      <div className="grid h-14 w-full place-items-center rounded-xl bg-brand-soft/40 px-3">
        {icon ? (
          <img src={icon} alt={`${body} logo`} loading="lazy" decoding="async" className="max-h-10 object-contain" />
        ) : (
          <span className="font-display text-base font-extrabold text-brand">{body}</span>
        )}
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold text-card-foreground">{body}</p>
        {status && <p className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-muted-foreground">{status}</p>}
      </div>
    </div>
  );
}

/**
 * Approvals & recognition: every approval a university publishes, in one
 * manually scrollable horizontal strip (no auto-scroll).
 */
export function ApprovalMarquee({ approvals }: { approvals: Array<{ body: string; status?: string }> }) {
  if (!approvals.length) return null;
  return (
    <ul
      aria-label="Approvals and recognition"
      className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2"
    >
      {approvals.map((a) => (
        <li key={a.body} className="w-[12.5rem] shrink-0 snap-start sm:w-[14rem]">
          <ApprovalBox body={a.body} status={a.status} />
        </li>
      ))}
    </ul>
  );
}

export interface SpecialisationBoxItem {
  name: string;
  /** Future landing page for this specialisation, when one exists. */
  href?: string | undefined;
  meta?: string | undefined;
}

function SpecBoxInner({ item }: { item: SpecialisationBoxItem }) {
  const clickable = Boolean(item.href);
  return (
    <div
      className={`box-hover flex h-full min-h-[5.5rem] flex-col justify-center gap-1 rounded-2xl border p-4 text-center ${
        clickable ? "group border-brand/30 bg-card hover:border-brand" : "border-brand/30 bg-card"
      }`}
    >
      <p className="text-sm font-bold leading-snug text-card-foreground">{item.name}</p>
      {item.meta && <p className="text-[11px] text-muted-foreground">{item.meta}</p>}
      {clickable && (
        <span className="mt-1 inline-flex items-center justify-center gap-1 text-[11px] font-bold text-brand">
          Know more
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5"
            aria-hidden="true"
          />
        </span>
      )}
    </div>
  );
}

/** Every specialisation as its own box, ready to become a landing page. */
export function SpecialisationBoxes({
  items,
  scrolling = false,
  label = "Specialisations",
}: {
  items: SpecialisationBoxItem[];
  scrolling?: boolean;
  label?: string;
}) {
  if (!items.length) return null;
  const boxes = items.map((item) =>
    item.href ? (
      <AppLink key={item.name} to={item.href} className="block h-full" data-specialisation={item.name}>
        <SpecBoxInner item={item} />
      </AppLink>
    ) : (
      <div key={item.name} className="h-full" data-specialisation={item.name}>
        <SpecBoxInner item={item} />
      </div>
    ),
  );

  if (scrolling) return <SpecialisationPager label={label} boxes={boxes} />;

  return (
    <ul aria-label={label} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {boxes.map((box, i) => (
        <li key={i} className="min-w-0">
          {box}
        </li>
      ))}
    </ul>
  );
}

/** Manual pager: 3 boxes per row, 2 rows per page, arrows beside the label. */
function SpecialisationPager({ label, boxes }: { label: string; boxes: ReactNode[] }) {
  const perPage = 6;
  const pages = Math.max(1, Math.ceil(boxes.length / perPage));
  const [page, setPage] = useState(0);
  const current = boxes.slice(page * perPage, page * perPage + perPage);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
        <p className="min-w-0 truncate text-sm font-bold text-foreground">{label}</p>
        {pages > 1 && (
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-xs text-muted-foreground">
              {page + 1}/{pages}
            </span>
            <button
              type="button"
              aria-label="Previous specialisations"
              onClick={() => setPage((p) => (p - 1 + pages) % pages)}
              className="grid h-8 w-8 place-items-center rounded-full border border-brand/40 text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              aria-label="Next specialisations"
              onClick={() => setPage((p) => (p + 1) % pages)}
              className="grid h-8 w-8 place-items-center rounded-full border border-brand/40 text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <ul aria-label={label} className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {current.map((box, i) => (
          <li key={`${page}-${i}`} className="min-w-0">
            {box}
          </li>
        ))}
      </ul>
    </div>
  );
}

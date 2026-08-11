import type { ReactNode } from "react";
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
    <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-brand/35 bg-card p-4 text-center shadow-[0_12px_28px_-24px_oklch(0.39_0.139_28/0.7)]">
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

/** Approvals & recognition strip used across university and course pages. */
export function ApprovalMarquee({ approvals }: { approvals: Array<{ body: string; status?: string }> }) {
  if (!approvals.length) return null;
  return (
    <BoxMarquee
      ariaLabel="Approvals and recognition"
      items={approvals.map((a) => (
        <ApprovalBox key={a.body} body={a.body} status={a.status} />
      ))}
    />
  );
}

export interface SpecialisationBoxItem {
  name: string;
  /** Future landing page for this specialisation, when one exists. */
  href?: string | undefined;
  meta?: string | undefined;
}

function SpecBoxInner({ item }: { item: SpecialisationBoxItem }) {
  return (
    <div className="flex h-full min-h-[5.5rem] flex-col justify-center gap-1 rounded-2xl border border-brand/30 bg-card p-4 text-center transition-colors hover:border-brand/60 hover:bg-brand-soft/25">
      <p className="text-sm font-bold leading-snug text-card-foreground">{item.name}</p>
      {item.meta && <p className="text-[11px] text-muted-foreground">{item.meta}</p>}
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

  if (scrolling) return <BoxMarquee ariaLabel={label} items={boxes} speed={52} />;

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

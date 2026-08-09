import { AppLink } from "./AppLink";
import { universityLogo } from "@/lib/assets";

export interface LogoWallItem {
  slug: string;
  shortName: string;
  name: string;
}

/**
 * "Unlock excellence with top universities" style logo wall.
 * Pure logo cards that link to each university page — 3 per row on mobile.
 */
export function LogoWall({
  items,
  ctaLabel = "See All Universities",
  ctaHref = "/universities",
}: {
  items: LogoWallItem[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div>
      <ul className="grid grid-cols-3 gap-2.5 sm:gap-4 lg:grid-cols-6">
        {items.map((u) => {
          const logo = universityLogo(u.slug);
          return (
            <li key={u.slug}>
              <AppLink
                to={`/universities/${u.slug}`}
                aria-label={`${u.name} — fees, courses and admission`}
                className="grid h-[4.75rem] place-items-center rounded-xl border border-border bg-card p-2 shadow-[0_10px_26px_-22px_oklch(0_0_0/0.6)] transition-all hover:-translate-y-0.5 hover:border-brand/35 hover:shadow-[0_16px_34px_-20px_oklch(0.39_0.139_28/0.5)] sm:h-24 sm:rounded-2xl sm:p-4"
              >
                {logo ? (
                  <img
                    src={logo}
                    alt={`${u.name} logo`}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <span className="text-center font-display text-[0.72rem] font-extrabold leading-tight text-brand sm:text-sm">
                    {u.shortName}
                  </span>
                )}
              </AppLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-6 text-center">
        <AppLink
          to={ctaHref}
          className="inline-flex items-center rounded-full border border-brand/40 px-6 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          {ctaLabel}
        </AppLink>
      </div>
    </div>
  );
}

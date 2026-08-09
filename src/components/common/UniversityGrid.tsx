import { ArrowRight, MapPin } from "lucide-react";
import { AppLink } from "./AppLink";
import { universityLogo } from "@/lib/assets";
import { listOfferingsByUniversity } from "@/data";
import type { University } from "@/data";

/**
 * "100+ online universities" grid — logo, course count, name and location.
 * 2 columns on mobile, 4 on desktop.
 */
export function UniversityGrid({
  items,
  ctaLabel = "View more universities",
  ctaHref = "/universities",
}: {
  items: University[];
  ctaLabel?: string;
  ctaHref?: string;
}) {
  return (
    <div>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {items.map((u) => {
          const logo = universityLogo(u.slug);
          const count = listOfferingsByUniversity(u.slug).length;
          return (
            <li key={u.slug}>
              <AppLink
                to={`/universities/${u.slug}`}
                aria-label={`${u.name} — fees, courses and admission`}
                className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card px-3 py-5 text-center transition-all hover:-translate-y-0.5 hover:border-brand/40 hover:shadow-[0_18px_36px_-24px_oklch(0_0_0/0.55)] sm:px-4 sm:py-6"
              >
                <span className="grid h-12 w-full place-items-center sm:h-14">
                  {logo ? (
                    <img
                      src={logo}
                      alt={`${u.name} logo`}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-[85%] object-contain"
                    />
                  ) : (
                    <span className="font-display text-sm font-extrabold text-brand">{u.shortName}</span>
                  )}
                </span>
                <span className="mt-1 text-sm font-extrabold sm:text-base">
                  {count} {count === 1 ? "Course" : "Courses"}
                </span>
                <span className="text-[0.82rem] leading-snug text-muted-foreground sm:text-sm">{u.name}</span>
                <span className="mt-auto inline-flex items-center gap-1 pt-1 text-xs text-muted-foreground sm:text-[0.82rem]">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-brand" aria-hidden="true" />
                  {u.city}, {u.state}
                </span>
              </AppLink>
            </li>
          );
        })}
      </ul>
      <div className="mt-7 text-center">
        <AppLink
          to={ctaHref}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-soft px-6 py-3 text-sm font-bold uppercase tracking-wide text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          {ctaLabel} <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </AppLink>
      </div>
    </div>
  );
}
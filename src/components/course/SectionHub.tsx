import { AppLink } from "@/components/common/AppLink";
import {
  COURSE_SECTION_KEYS,
  courseSectionLabels,
  type CourseSectionKey,
} from "@/lib/courseSections";

/**
 * Link grid from a pillar page to each of its section sub-URLs, and the
 * sibling switcher shown on the section pages themselves.
 */
export function SectionUrlGrid({
  base,
  title = "Explore this course section by section",
  active,
}: {
  base: string;
  title?: string;
  active?: CourseSectionKey;
}) {
  return (
    <section className="rounded-3xl border border-brand/20 bg-brand-soft/40 p-5 sm:p-6">
      <h2 className="font-display text-lg font-bold sm:text-xl">{title}</h2>
      <p className="mt-2 text-[0.9rem] leading-relaxed text-muted-foreground">
        Each section below is a full page of its own — open the one you need.
      </p>
      <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {COURSE_SECTION_KEYS.map((key) => {
          const isActive = key === active;
          return isActive ? (
            <span
              key={key}
              aria-current="page"
              className="rounded-xl border border-brand bg-brand px-3.5 py-2.5 text-sm font-bold text-brand-foreground"
            >
              {courseSectionLabels[key]}
            </span>
          ) : (
            <AppLink
              key={key}
              to={`${base}/${key}`}
              className="box-hover rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm font-bold text-foreground"
            >
              {courseSectionLabels[key]}
            </AppLink>
          );
        })}
      </div>
    </section>
  );
}

/** Back-link strip shown at the top of every section page. */
export function BackToPillar({ href, label }: { href: string; label: string }) {
  return (
    <AppLink
      to={href}
      className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-bold text-brand"
    >
      ← {label}
    </AppLink>
  );
}
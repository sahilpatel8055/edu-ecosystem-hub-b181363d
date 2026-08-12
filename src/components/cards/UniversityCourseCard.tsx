import { Clock, GraduationCap, IndianRupee } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { getProgramme } from "@/data";
import { getCourse } from "@/lib/content";
import { specialisationsOf } from "@/lib/universityData";
import { courseImage } from "@/lib/course-images";
import { universityLogo } from "@/lib/assets";
import type { Offering } from "@/data";

/**
 * Programme card used in the "Courses & fees" section of a university page.
 * Photo header + university logo, duration/fee facts, a short specialisation
 * preview and two explicit actions. Every value comes from the dataset — a
 * missing figure is stated, never invented.
 */
export function UniversityCourseCard({
  offering,
  universitySlug,
  feeFallback = "Fee pending verification",
}: {
  offering: Offering;
  universitySlug: string;
  feeFallback?: string;
}) {
  const programme = getProgramme(offering.programmeSlug);
  const fullName = programme?.name ?? offering.programmeSlug;
  const name = getCourse(offering.programmeSlug)?.displayName ?? fullName;
  const href = `/universities/${universitySlug}/courses/${offering.programmeSlug}`;
  const logo = universityLogo(universitySlug);
  const specs = specialisationsOf(universitySlug, offering.programmeSlug).map((s) => s.specialisation_name);
  const shown = specs.slice(0, 4);
  const extra = specs.length - shown.length;

  return (
    <article className="hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-card-foreground">
      <AppLink to={href} aria-label={name} className="relative block aspect-[16/10] w-full overflow-hidden bg-secondary">
        <img
          src={courseImage(fullName)}
          alt={`${name} online programme`}
          loading="lazy"
          width={800}
          height={520}
          className="h-full w-full object-cover"
        />
        {logo && (
          <span className="absolute bottom-2 left-2 grid h-9 w-9 place-items-center rounded-lg bg-card/95 p-1 shadow-sm sm:h-10 sm:w-10">
            <img src={logo} alt="" aria-hidden="true" loading="lazy" className="h-full w-full object-contain" />
          </span>
        )}
      </AppLink>

      <div className="flex min-w-0 flex-1 flex-col p-3.5 sm:p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="min-w-0 font-display text-[0.95rem] font-bold leading-snug sm:text-lg">
            <AppLink to={href} className="hover:text-brand">
              {name}
            </AppLink>
          </h3>
          <GraduationCap className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
        </div>

        <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] text-muted-foreground sm:text-xs">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {offering.durationLabel || "Duration not published"}
          </span>
          <span className="inline-flex items-center gap-1 font-semibold text-foreground">
            <IndianRupee className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {offering.fee.total ? `${offering.fee.total.toLocaleString("en-IN")} total` : feeFallback}
          </span>
        </p>

        {shown.length > 0 && (
          <div className="mt-3">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Specialisations
            </p>
            <div className="mt-1.5 flex flex-wrap gap-1.5">
              {shown.map((s) => (
                <span
                  key={s}
                  className="rounded-md bg-brand-soft px-2 py-1 text-[0.68rem] font-semibold text-brand sm:text-[0.72rem]"
                >
                  {s}
                </span>
              ))}
              {extra > 0 && <span className="px-1 py-1 text-[0.68rem] font-semibold text-brand">+{extra} more</span>}
            </div>
          </div>
        )}

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          <AppLink to={href} className="text-xs font-bold text-foreground hover:text-brand sm:text-sm">
            View Details ›
          </AppLink>
          <AppLink
            to="/contact"
            className="rounded-lg bg-brand px-3 py-2 text-xs font-bold text-brand-foreground hover:opacity-90 sm:text-sm"
            aria-label={`Enquire about ${name} at this university`}
          >
            Enquire Now
          </AppLink>
        </div>
      </div>
    </article>
  );
}

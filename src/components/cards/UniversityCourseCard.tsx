import { Clock, IndianRupee, Layers } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { courseIcon } from "@/lib/course-icons";
import { getProgramme } from "@/data";
import { getCourse } from "@/lib/content";
import type { Offering } from "@/data";

/**
 * Programme card used in the "Courses & fees" section of a university page —
 * same visual language as the homepage programme tiles.
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
  const Icon = courseIcon(fullName, programme?.shortName);


  return (
    <AppLink
      to={`/universities/${universitySlug}/courses/${offering.programmeSlug}`}
      className="hover-lift flex flex-col rounded-2xl border border-border bg-card p-4 text-card-foreground"
    >
      <div className="flex items-start gap-3">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="truncate font-display text-base font-bold">{name}</h3>
          <p className="mt-0.5 flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" /> {offering.durationLabel || "Duration not published"}
            {programme?.level ? ` · ${programme.level}` : ""}
          </p>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {offering.specialisations.length > 0 && (
          <span className="inline-flex items-center gap-1 rounded-md bg-secondary px-2 py-1 text-[11px] font-semibold text-secondary-foreground">
            <Layers className="h-3 w-3" aria-hidden="true" /> {offering.specialisations.length}{" "}
            {offering.specialisations.length === 1 ? "specialisation" : "specialisations"}
          </span>
        )}
        {offering.admissionOpen && (
          <span className="rounded-md bg-success/15 px-2 py-1 text-[11px] font-semibold text-success">
            Admission open
          </span>
        )}
      </div>

      <div className="mt-3 flex items-end justify-between gap-3 border-t border-border pt-3">
        <span>
          <span className="block text-[11px] text-muted-foreground">Fee</span>
          {offering.fee.total ? (
            <span className="inline-flex items-center text-sm font-bold">
              <IndianRupee className="mr-0.5 h-3.5 w-3.5" aria-hidden="true" />
              {offering.fee.total.toLocaleString("en-IN")}
            </span>
          ) : (
            <span className="text-sm font-bold">{feeFallback}</span>
          )}
        </span>
        <span className="rounded-lg bg-brand px-3 py-1.5 text-xs font-semibold text-brand-foreground">Know more</span>
      </div>
    </AppLink>
  );
}
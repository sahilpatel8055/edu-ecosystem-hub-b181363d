import { InfoBoxGrid } from "@/components/course/CourseSections";
import { SectionBanner } from "@/components/common/SectionBanner";
import { HiringPartners } from "@/components/university/HiringPartners";
import { defaultPlacementServices } from "@/data/course-pages/types";

/**
 * Placement support block — the same service boxes used on the course pillar
 * pages, reused on university × course pages above career opportunities.
 */
export function PlacementSupportSection({
  universitySlug,
  universityShort,
}: {
  universitySlug: string;
  universityShort: string;
}) {
  return (
    <div className="space-y-4">
      <SectionBanner kind="placement" />
      <h3 className="font-display text-base font-bold text-foreground">
        Placement support at {universityShort}
      </h3>
      <InfoBoxGrid items={defaultPlacementServices()} />
      <p className="text-xs leading-relaxed text-muted-foreground">
        Placement assistance is not the same as guaranteed placement. Ask {universityShort} in writing what its career
        service actually includes for online learners.
      </p>
      <HiringPartners universitySlug={universitySlug} universityShort={universityShort} />
    </div>
  );
}

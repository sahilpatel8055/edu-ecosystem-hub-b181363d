import { createFileRoute, redirect } from "@tanstack/react-router";
import { listOfferingsByUniversity } from "@/data";
import { courseKeyForProgramme, siteSlugForMasterSlug } from "@/lib/courseMaster";

/**
 * Dataset-style URL `/university/{university}/{course}` kept as a permanent
 * alias of the site's canonical university × course URL, so no duplicate
 * page is indexed and existing rankings are preserved.
 */
export const Route = createFileRoute("/university/$slug/$course")({
  beforeLoad: ({ params }) => {
    const slug = siteSlugForMasterSlug(params.slug) ?? params.slug;
    const wanted = courseKeyForProgramme(params.course);
    const match = listOfferingsByUniversity(slug).find(
      (o) => o.programmeSlug === params.course || (wanted && courseKeyForProgramme(o.programmeSlug) === wanted),
    );
    throw redirect({
      to: "/universities/$slug/courses/$course",
      params: { slug, course: match?.programmeSlug ?? params.course },
      statusCode: 301,
    });
  },
  component: () => null,
});
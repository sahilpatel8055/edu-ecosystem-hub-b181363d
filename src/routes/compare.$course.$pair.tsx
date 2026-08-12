import { createFileRoute, notFound } from "@tanstack/react-router";
import { AppLink } from "@/components/common/AppLink";
import { ComparisonPage } from "@/components/comparison/ComparisonPage";
import { findCourseKey, getMasterPair } from "@/lib/comparisonMaster";
import { breadcrumbSchema, canonical, jsonLd, pageMeta } from "@/lib/seo";

/**
 * Course-level comparison: `/compare/{course-slug}/{university-a}-vs-{university-b}`.
 * All 91 pairs × their common courses are generated from the master dataset,
 * and a combination only exists when both universities publish that course.
 */
export const Route = createFileRoute("/compare/$course/$pair")({
  loader: ({ params }) => {
    const match = getMasterPair(params.pair);
    if (!match) throw notFound();
    const course = findCourseKey(match.pair, params.course);
    if (!course) throw notFound();
    return {
      course,
      pairId: match.pair.comparison_id,
      title: match.pair.seo.course_title_template.replace("{Course}", course),
      description: match.pair.seo.meta_description_template.replace("{Course}", course),
      a: match.pair.university_a,
      b: match.pair.university_b,
    };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Comparison not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/compare/${params.course}/${loaderData.pairId}`;
    return {
      meta: pageMeta({
        title: loaderData.title,
        description: loaderData.description,
        path,
        author: "AVEDU Editorial Desk",
        keywords: [
          `${loaderData.a} vs ${loaderData.b} ${loaderData.course}`,
          `${loaderData.a} vs ${loaderData.b} fees`,
        ],
      }),
      links: canonical(path),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
            { name: `${loaderData.a} vs ${loaderData.b}`, href: `/compare/${loaderData.pairId}` },
            { name: `Online ${loaderData.course}`, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">This comparison isn't available</h1>
      <p className="mt-3 text-sm text-muted-foreground">
        We only publish a course comparison when both universities offer that exact programme.
      </p>
      <AppLink to="/compare" className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">
        See all comparisons →
      </AppLink>
    </div>
  ),
});

function Page() {
  const { course, pair } = Route.useParams();
  const match = getMasterPair(pair);
  if (!match) return null;
  const courseKey = findCourseKey(match.pair, course);
  if (!courseKey) return null;
  return <ComparisonPage pair={match.pair} course={courseKey} />;
}

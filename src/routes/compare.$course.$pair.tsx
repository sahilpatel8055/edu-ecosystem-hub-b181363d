import { createFileRoute, notFound } from "@tanstack/react-router";
import { ComparisonPage } from "@/components/comparison/ComparisonPage";
import { AppLink } from "@/components/common/AppLink";
import { comparableCourses, courseFromSlug, masterPairBySlug } from "@/lib/comparisonMaster";
import { breadcrumbSchema, canonical, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/compare/$course/$pair")({
  loader: ({ params }) => {
    const pair = masterPairBySlug(params.pair);
    if (!pair) throw notFound();
    const course = courseFromSlug(pair, params.course);
    if (!course || !comparableCourses(pair).includes(course)) throw notFound();
    return { a: pair.university_a, b: pair.university_b, course, description: pair.seo.meta_description_template };
  },
  head: ({ params, loaderData }) => {
    const path = `/compare/${params.course}/${params.pair}`;
    if (!loaderData) {
      return { meta: [{ title: "Comparison not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.a} vs ${loaderData.b} Online ${loaderData.course} – Fees, Eligibility & Comparison 2026-27`;
    const description = loaderData.description.replace(/\{Course\}/g, loaderData.course);
    return {
      meta: pageMeta({ title, description, path, author: "AVEDU Editorial Desk" }),
      links: canonical(path),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
            { name: `${loaderData.a} vs ${loaderData.b}`, href: `/compare/${params.pair}` },
            { name: loaderData.course, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">Comparison not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This course is not published by both universities, so we don't create a comparison page for it.
      </p>
      <AppLink to="/compare" className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">
        See all comparisons →
      </AppLink>
    </div>
  ),
});

function Page() {
  const { course, pair } = Route.useParams();
  const record = masterPairBySlug(pair)!;
  const courseName = courseFromSlug(record, course)!;
  return <ComparisonPage pair={record} course={courseName} />;
}

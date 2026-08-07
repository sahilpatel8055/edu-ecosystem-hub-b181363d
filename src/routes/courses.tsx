import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { CourseCard } from "@/components/cards";
import { courses } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Online Degree Courses & Programmes";
const description = "Programme guides covering duration, fee range, specialisations, eligibility and the universities that offer them.";
const path = "/courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Courses", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Courses", href: path }]}
      eyebrow="Programmes"
      title="Online Degree Courses & Programmes"
      description={description}
    >
      <FilterBar groups={[{"label":"Level","options":["All","UG","PG","Diploma","Certificate"]},{"label":"Stream","options":["All","Management","Computing","Commerce"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((i) => (<CourseCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { CourseExplorer } from "@/components/common/Filters";
import { RelatedLinkGrid } from "@/components/common/Blocks";
import { courses } from "@/lib/content";
import { articleLinks, comparisonLinks, scholarshipLinks, universityLinks } from "@/lib/entities";
import {
  breadcrumbSchema,
  canonical,
  collectionSchema,
  itemListSchema,
  jsonLd,
  pageMeta,
  webPageSchema,
} from "@/lib/seo";

const title = "Online Degree Courses in India: UG & PG Programmes 2026";
const description =
  "Programme guides for online MBA, MCA, BBA, BCA, B.Com and M.Com — duration, fee range, specialisations, eligibility and every university that offers them.";
const path = "/courses";

export const Route = createFileRoute("/courses/")({
  head: () => ({
    meta: pageMeta({
      title,
      description,
      path,
      keywords: ["online courses India", "online MBA", "online BCA", "UG PG online degrees"],
    }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(webPageSchema({ name: title, description, path })),
      jsonLd(
        itemListSchema(
          courses.map((c) => ({ name: c.name, href: `/courses/${c.slug}` })),
          "Online degree programmes",
        ),
      ),
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
      <CourseExplorer items={courses} />
      <div className="mt-12">
        <RelatedLinkGrid
          groups={[
            { title: "Top universities", links: universityLinks() },
            { title: "Course comparisons", links: comparisonLinks() },
            { title: "Scholarships", links: scholarshipLinks() },
            { title: "Guides", links: articleLinks(4) },
          ]}
        />
      </div>
      <div className="mt-12">
        <CTASection />
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { UniversityExplorer } from "@/components/common/Filters";
import { RelatedLinkGrid } from "@/components/common/Blocks";
import { universities } from "@/lib/content";
import { comparisonLinks, programmeLinks, reviewLinks, scholarshipLinks } from "@/lib/entities";
import {
  breadcrumbSchema,
  canonical,
  collectionSchema,
  itemListSchema,
  jsonLd,
  pageMeta,
  webPageSchema,
} from "@/lib/seo";

const title = "Online & Distance Universities in India (2026 List)";
const description =
  "Every UGC-entitled online and DEB-approved distance university in one directory — approvals, fee range, ratings, programmes and side-by-side comparisons.";
const path = "/universities";

export const Route = createFileRoute("/universities/")({
  head: () => ({
    meta: pageMeta({
      title,
      description,
      path,
      keywords: ["online universities in India", "UGC entitled universities", "distance education universities"],
    }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(webPageSchema({ name: title, description, path })),
      jsonLd(
        itemListSchema(
          universities.map((u) => ({ name: u.name, href: `/universities/${u.slug}` })),
          "Online and distance universities",
        ),
      ),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Universities", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Universities", href: path }]}
      eyebrow="Directory"
      title="Online & Distance Universities in India"
      description={description}
    >
      <UniversityExplorer items={universities} />
      <div className="mt-12">
        <RelatedLinkGrid
          groups={[
            { title: "Popular programmes", links: programmeLinks() },
            { title: "Compare universities", links: comparisonLinks() },
            { title: "Student reviews", links: reviewLinks() },
            { title: "Scholarships", links: scholarshipLinks() },
          ]}
        />
      </div>
      <div className="mt-12">
        <CTASection />
      </div>
    </PageShell>
  );
}

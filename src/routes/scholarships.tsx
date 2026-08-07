import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { ScholarshipCard } from "@/components/cards";
import { scholarships } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Scholarships & Fee Waivers";
const description = "Merit, category and government scholarships available to online and distance education students.";
const path = "/scholarships";

export const Route = createFileRoute("/scholarships/")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Scholarships", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Scholarships", href: path }]}
      eyebrow="Funding"
      title="Scholarships & Fee Waivers"
      description={description}
    >
      <FilterBar groups={[{"label":"Type","options":["All","Merit","Category","Government"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {scholarships.map((i) => (<ScholarshipCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { ComparisonCard } from "@/components/cards";
import { comparisons } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "University & Course Comparisons";
const description = "Objective side-by-side comparisons of universities and programmes on fee, approvals, delivery and outcomes.";
const path = "/compare";

export const Route = createFileRoute("/compare")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Compare", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Compare", href: path }]}
      eyebrow="Side by side"
      title="University & Course Comparisons"
      description={description}
    >
      <FilterBar groups={[{"label":"Type","options":["All","University","Course"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {comparisons.map((i) => (<ComparisonCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

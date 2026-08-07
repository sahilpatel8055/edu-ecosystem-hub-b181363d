import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { ToolCard } from "@/components/cards";
import { tools } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Free Student Tools & Calculators";
const description = "Fee and EMI calculators, eligibility checks, university finders and comparison builders.";
const path = "/tools";

export const Route = createFileRoute("/tools")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Tools", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Tools", href: path }]}
      eyebrow="Utilities"
      title="Free Student Tools & Calculators"
      description={description}
    >
      <FilterBar groups={[{"label":"Status","options":["All","Live","Beta","Coming soon"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((i) => (<ToolCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

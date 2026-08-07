import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { NewsCard } from "@/components/cards";
import { news } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Education News & Regulatory Updates";
const description = "UGC notifications, admission deadline changes and programme launches, tracked as they happen.";
const path = "/news";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "News", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "News", href: path }]}
      eyebrow="Newsroom"
      title="Education News & Regulatory Updates"
      description={description}
    >
      <FilterBar groups={[{"label":"Topic","options":["All","Regulatory","Admissions","Programmes"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {news.map((i) => (<NewsCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

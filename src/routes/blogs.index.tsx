import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { ArticleCard } from "@/components/cards";
import { articles } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Articles, Guides & Research";
const description = "In-depth articles on choosing, funding and finishing an online or distance degree in India.";
const path = "/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blogs", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Blogs", href: path }]}
      eyebrow="Knowledge hub"
      title="Articles, Guides & Research"
      description={description}
    >
      <FilterBar groups={[{"label":"Category","options":["All","Admission Guidance","Career Growth","Fees & Scholarships","Study Guides"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((i) => (<ArticleCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

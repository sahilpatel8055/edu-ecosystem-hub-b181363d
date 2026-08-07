import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { AuthorCard } from "@/components/cards";
import { authors } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Our Authors & Reviewers";
const description = "The editors, analysts and subject experts behind every guide published on AVEDU Insights.";
const path = "/authors";

export const Route = createFileRoute("/authors/")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Authors", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Authors", href: path }]}
      eyebrow="Editorial team"
      title="Our Authors & Reviewers"
      description={description}
    >
      <FilterBar groups={[{"label":"Expertise","options":["All","Admissions","Career","Fees"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((i) => (<AuthorCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

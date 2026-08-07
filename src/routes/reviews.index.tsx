import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { ReviewCard } from "@/components/cards";
import { reviews } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Verified Student Reviews";
const description = "Honest, verified reviews from learners enrolled in online and distance programmes across India.";
const path = "/reviews";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Reviews", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[{ name: "Reviews", href: path }]}
      eyebrow="Student voices"
      title="Verified Student Reviews"
      description={description}
    >
      <FilterBar groups={[{"label":"Rating","options":["All","4.5+","4.0+","3.5+"]},{"label":"Status","options":["All","Verified only"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reviews.map((i) => (<ReviewCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

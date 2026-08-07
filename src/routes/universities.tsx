import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { FilterBar, SimplePagination, CTASection } from "@/components/common/Primitives";
import { UniversityCard } from "@/components/cards";
import { universities } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Online & Distance Universities in India";
const description = "Compare UGC-entitled online and DEB-approved distance universities by fee, approvals, ratings and programme catalogue.";
const path = "/universities";

export const Route = createFileRoute("/universities/")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
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
      <FilterBar groups={[{"label":"Mode","options":["All","Online","Distance","Hybrid"]},{"label":"Approval","options":["All","UGC Entitled","NAAC A++","AICTE"]},{"label":"Fee","options":["Any","Under ₹1L","₹1L–₹2L","Above ₹2L"]}]} />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {universities.map((i) => (<UniversityCard key={i.slug} item={i} />))}
      </div>
      <SimplePagination />
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

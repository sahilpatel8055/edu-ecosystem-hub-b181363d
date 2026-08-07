import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { AppLink } from "@/components/common/AppLink";
import { CTASection } from "@/components/common/Primitives";
import { tags } from "@/lib/content";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Browse Content Tags";
const description = "Granular tags that connect related guides, news and comparisons across the knowledge hub.";
const path = "/tags";

export const Route = createFileRoute("/tags/")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Tags", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell crumbs={[{ name: "Tags", href: path }]} eyebrow="Taxonomy" title={title} description={description}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tags.map((t) => (
          <AppLink key={t.slug} to={`${path}/${t.slug}`} className="surface-card hover-lift group p-6">
            <h2 className="font-display text-lg font-bold group-hover:text-brand">{t.name}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{t.description}</p>
            <p className="mt-4 border-t border-border pt-4 text-xs font-semibold text-brand">{t.count} articles</p>
          </AppLink>
        ))}
      </div>
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

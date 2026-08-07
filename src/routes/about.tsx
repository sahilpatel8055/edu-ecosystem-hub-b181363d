import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { AuthorCard } from "@/components/cards";
import { authors } from "@/lib/content";
import { canonical, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "About AVEDU Insights";
const description = "We research India’s online and distance education market so learners can choose a degree on evidence, not advertising.";
const path = "/about";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "About", href: path }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell crumbs={[{ name: "About", href: path }]} eyebrow="About" title={title} description={description}>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {authors.map((a) => (<AuthorCard key={a.slug} item={a} />))}
      </div>
      <div className="mx-auto mt-16 max-w-3xl space-y-8">
        {["Our mission", "Editorial policy", "How we research", "The AVEDU ecosystem"].map((h) => (
          <section key={h}>
            <h2 className="text-xl font-bold">{h}</h2>
            <div className="mt-3 space-y-3" data-cms-slot="rich-text">
              <div className="h-3 w-full rounded bg-secondary" />
              <div className="h-3 w-10/12 rounded bg-secondary" />
            </div>
          </section>
        ))}
      </div>
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

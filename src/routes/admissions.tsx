import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { Chip } from "@/components/common/Primitives";
import { ArticleCard } from "@/components/cards";
import { admissionUpdates, articles } from "@/lib/content";
import { canonical, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Admission Updates & Application Deadlines";
const description = "Live admission windows, document checklists and application timelines for online and distance universities.";
const path = "/admissions";

export const Route = createFileRoute("/admissions")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Admissions", href: path }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell crumbs={[{ name: "Admissions", href: path }]} eyebrow="Admissions" title={title} description={description}>
      <ul className="surface-card divide-y divide-border">
        {admissionUpdates.map((u) => (
          <li key={u.title} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4">
            <span className="min-w-0">
              <span className="block truncate text-sm font-semibold">{u.title}</span>
              <span className="text-xs text-muted-foreground">{u.date}</span>
            </span>
            <Chip tone={u.status === "Closing soon" ? "highlight" : "success"}>{u.status}</Chip>
          </li>
        ))}
      </ul>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {articles.filter((a) => a.kind === "admission" || a.kind === "blog").map((a) => (<ArticleCard key={a.slug} item={a} />))}
      </div>
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

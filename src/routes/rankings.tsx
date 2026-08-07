import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { Chip } from "@/components/common/Primitives";
import { rankings } from "@/lib/content";
import { canonical, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "University Rankings 2026";
const description = "Our transparent ranking of online and open universities, scored on approvals, learner outcomes and support quality.";
const path = "/rankings";

export const Route = createFileRoute("/rankings")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Rankings", href: path }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell crumbs={[{ name: "Rankings", href: path }]} eyebrow="Rankings" title={title} description={description}>
      <div className="surface-card overflow-x-auto">
        <table className="w-full min-w-[36rem] text-sm">
          <thead className="border-b border-border text-left text-xs uppercase tracking-widest text-muted-foreground">
            <tr><th className="px-5 py-4">Rank</th><th className="px-5 py-4">University</th><th className="px-5 py-4">Category</th><th className="px-5 py-4">Score</th><th className="px-5 py-4">Change</th></tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rankings.map((r) => (
              <tr key={r.rank} className="transition-colors hover:bg-secondary/50">
                <td className="px-5 py-4 font-bold">{r.rank}</td>
                <td className="px-5 py-4 font-semibold">{r.name}</td>
                <td className="px-5 py-4 text-muted-foreground">{r.category}</td>
                <td className="px-5 py-4 font-semibold">{r.score}</td>
                <td className="px-5 py-4"><Chip tone={r.change.startsWith("+") ? "success" : "default"}>{r.change}</Chip></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

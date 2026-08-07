import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";

import { canonical, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Terms and Conditions";
const description = "The terms that govern your use of the AVEDU Insights knowledge platform.";
const path = "/terms-and-conditions";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Terms & conditions", href: path }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell crumbs={[{ name: "Terms & conditions", href: path }]} eyebrow="Terms & conditions" title={title} description={description}>
      <div className="mx-auto max-w-3xl space-y-10">
        {["Acceptance of terms","Use of content","Accuracy and disclaimers","Third-party links","Intellectual property","Limitation of liability","Changes to these terms"].map((h) => (
          <section key={h}>
            <h2 className="text-xl font-bold">{h}</h2>
            <div className="mt-3 space-y-3" data-cms-slot="legal-text">
              <div className="h-3 w-full rounded bg-secondary" />
              <div className="h-3 w-11/12 rounded bg-secondary" />
              <div className="h-3 w-9/12 rounded bg-secondary" />
            </div>
          </section>
        ))}
      </div>
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";

import { canonical, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";

const title = "Privacy Policy";
const description = "How AVEDU Insights collects, uses and protects the information you share with us.";
const path = "/privacy-policy";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Privacy policy", href: path }]))],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell crumbs={[{ name: "Privacy policy", href: path }]} eyebrow="Privacy policy" title={title} description={description}>
      <div className="mx-auto max-w-3xl space-y-10">
        {["Information we collect","How we use your information","Cookies and analytics","Sharing with counselling partners","Your rights","Contact us"].map((h) => (
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

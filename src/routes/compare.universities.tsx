import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { UniversityCompareBoard } from "@/components/comparison/UniversityCompareBoard";
import { breadcrumbSchema, canonical, jsonLd, pageMeta, webPageSchema } from "@/lib/seo";

const title = "Compare Online Universities — Fees, Approvals & Specialisations";
const description =
  "Compare up to four online universities side by side on published fees, UGC approvals, programme range, specialisations, admission process and career support.";
const path = "/compare/universities";

/**
 * New canonical comparison tool. A single indexable URL — selection state is
 * client-side only, so no thin per-combination URLs are generated.
 */
export const Route = createFileRoute("/compare/universities")({
  head: () => ({
    meta: [
      ...pageMeta({
        title,
        description,
        path,
        keywords: ["compare online universities", "online university comparison tool"],
      }),
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonical(path),
    scripts: [
      jsonLd(webPageSchema({ name: title, description, path })),
      jsonLd(
        breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Compare", href: "/compare" },
          { name: "Compare universities", href: path },
        ]),
      ),
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <PageShell
      crumbs={[
        { name: "Compare", href: "/compare" },
        { name: "Compare universities", href: path },
      ]}
      eyebrow="Comparison tool"
      title="Compare Online Universities"
      description="Select up to 4 universities to compare. Every value is read from the published 2026-27 dataset — nothing is estimated."
    >
      <UniversityCompareBoard />
    </PageShell>
  );
}

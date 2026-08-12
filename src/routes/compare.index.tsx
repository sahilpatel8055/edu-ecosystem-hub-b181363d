import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { ComparisonCard } from "@/components/cards";
import { LinkCluster, RelatedLinkGrid } from "@/components/common/Blocks";
import { comparisons } from "@/lib/content";
import { comparisonLinks, programmeLinks, universityLinks, universityPairs } from "@/lib/entities";
import {
  breadcrumbSchema,
  canonical,
  collectionSchema,
  itemListSchema,
  jsonLd,
  pageMeta,
  webPageSchema,
} from "@/lib/seo";

const title = "University & Course Comparisons (Side by Side)";
const description =
  "Objective side-by-side comparisons of online universities and programmes on fee, approvals, delivery model, ratings and outcomes.";
const path = "/compare";

export const Route = createFileRoute("/compare/")({
  head: () => ({
    meta: pageMeta({
      title,
      description,
      path,
      keywords: ["university comparison", "online MBA comparison", "LPU vs Amity"],
    }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(webPageSchema({ name: title, description, path })),
      jsonLd(
        itemListSchema(
          universityPairs().map((p) => ({
            name: `${p.left.record.shortName} vs ${p.right.record.shortName}`,
            href: p.path,
          })),
          "University comparisons",
        ),
      ),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Compare", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  const pairs = universityPairs();
  return (
    <PageShell
      crumbs={[{ name: "Compare", href: path }]}
      eyebrow="Decision support"
      title="University & Course Comparisons"
      description={description}
    >
      <h2 className="mb-4 text-xl font-bold sm:text-2xl">University vs university</h2>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {pairs.map((p) => (
          <ComparisonCard
            key={p.slug}
            item={{
              slug: p.slug,
              title: `${p.left.record.shortName} vs ${p.right.record.shortName}`,
              left: p.left.record.shortName,
              right: p.right.record.shortName,
              category: "University",
              summary: `Fee, approvals, programme catalogue and learner ratings compared for ${p.left.record.name} and ${p.right.record.name}.`,
            }}
          />
        ))}
      </div>

      <h2 className="mb-2 mt-12 text-xl font-bold sm:text-2xl">All verified university pairs ({masterPairs.length})</h2>
      <p className="mb-4 text-sm text-muted-foreground">
        Every credible pair from our {ACADEMIC_SESSION} master dataset, with course-level comparisons inside each page.
      </p>
      <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {masterPairs.map((p) => (
          <li key={p.comparison_id} className="rounded-xl border border-border bg-card px-3 py-2.5">
            <AppLink
              to={`/compare/${p.comparison_id}`}
              className="text-sm font-semibold text-brand hover:underline"
            >
              {p.university_a} vs {p.university_b}
            </AppLink>
            <span className="mt-1 block text-xs text-muted-foreground">
              {p.common_courses.length} common courses · default {p.default_course}
            </span>
          </li>
        ))}
      </ul>

      <h2 className="mb-4 mt-12 text-xl font-bold sm:text-2xl">Editorial comparisons</h2>
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {comparisons.map((c) => (
          <ComparisonCard key={c.slug} item={c} />
        ))}
      </div>

      <div className="mt-12">
        <LinkCluster title="Popular comparisons" links={comparisonLinks(undefined, 12)} />
      </div>
      <div className="mt-8">
        <RelatedLinkGrid
          groups={[
            { title: "Universities", links: universityLinks(undefined, 8) },
            { title: "Programmes", links: programmeLinks() },
          ]}
        />
      </div>
      <div className="mt-12">
        <CTASection />
      </div>
    </PageShell>
  );
}

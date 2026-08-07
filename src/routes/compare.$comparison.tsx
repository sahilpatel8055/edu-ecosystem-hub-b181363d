import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentSection, DetailLayout } from "@/components/templates/DetailLayout";
import {
  AuthorBox,
  DataTable,
  LinkCluster,
  ProsCons,
  QuickFacts,
  References,
  RelatedLinkGrid,
  StickyMobileCTA,
  UpdatedStamp,
} from "@/components/common/Blocks";
import { AppLink } from "@/components/common/AppLink";
import { getProgramme } from "@/data";
import {
  approvalText,
  comparisonBySlug,
  comparisonLinks,
  editorialComparison,
  offeringLinks,
  universityLinks,
} from "@/lib/entities";
import { breadcrumbSchema, canonical, faqSchema, itemListSchema, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/compare/$comparison")({
  loader: ({ params }) => {
    const pair = comparisonBySlug(params.comparison);
    if (pair) {
      return {
        kind: "pair" as const,
        leftName: pair.left.record.name,
        leftShort: pair.left.record.shortName,
        rightName: pair.right.record.name,
        rightShort: pair.right.record.shortName,
      };
    }
    const editorial = editorialComparison(params.comparison);
    if (!editorial) throw notFound();
    return {
      kind: "editorial" as const,
      leftName: editorial.left,
      leftShort: editorial.left,
      rightName: editorial.right,
      rightShort: editorial.right,
      summary: editorial.summary,
    };
  },
  head: ({ params, loaderData }) => {
    const path = `/compare/${params.comparison}`;
    if (!loaderData) {
      return { meta: [{ title: "Comparison not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.leftShort} vs ${loaderData.rightShort}: Fees, Approvals & Which Is Better (2026)`;
    const description = `Side-by-side comparison of ${loaderData.leftName} and ${loaderData.rightName} on fees, UGC approvals, programmes, delivery model, placements and learner ratings.`;
    return {
      meta: pageMeta({
        title,
        description,
        path,
        author: "AVEDU Editorial Desk",
        keywords: [
          `${loaderData.leftShort} vs ${loaderData.rightShort}`,
          `${loaderData.leftShort} or ${loaderData.rightShort} which is better`,
        ],
      }),
      links: canonical(path),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Compare", href: "/compare" },
            { name: `${loaderData.leftShort} vs ${loaderData.rightShort}`, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">Comparison not found</h1>
      <AppLink to="/compare" className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">
        See all comparisons →
      </AppLink>
    </div>
  ),
});

function Page() {
  const { comparison } = Route.useParams();
  const pair = comparisonBySlug(comparison);

  if (!pair) {
    const editorial = editorialComparison(comparison)!;
    const faqs = [
      {
        question: `${editorial.left} vs ${editorial.right} — which should I pick?`,
        answer: editorial.summary,
      },
    ];
    return (
      <>
        <DetailLayout
          crumbs={[
            { name: "Compare", href: "/compare" },
            { name: editorial.title, href: `/compare/${editorial.slug}` },
          ]}
          eyebrow={`${editorial.category} comparison`}
          title={editorial.title}
          subtitle={editorial.summary}
          tocSections={["Quick verdict", "Side-by-side", "FAQs", "Related links"]}
          faqs={faqs}
          related={<RelatedLinkGrid groups={[{ title: "More comparisons", links: comparisonLinks(undefined, 8) }]} />}
        >
          <ContentSection title="Quick verdict">
            <p>{editorial.summary}</p>
          </ContentSection>
          <ContentSection title="Side-by-side">
            <DataTable
              caption={`${editorial.left} vs ${editorial.right}`}
              head={["Parameter", editorial.left, editorial.right]}
              rows={[["Best for", "See guide below", "See guide below"]]}
            />
          </ContentSection>
          <AuthorBox />
        </DetailLayout>
        <StickyMobileCTA label="Talk to a counsellor" />
      </>
    );
  }

  const a = pair.left.record;
  const b = pair.right.record;
  const shared = pair.left.offerings.filter((o) =>
    pair.right.offerings.some((p) => p.programmeSlug === o.programmeSlug),
  );

  const faqs = [
    {
      question: `${a.shortName} vs ${b.shortName}: which is better for an online degree?`,
      answer: `${a.shortName} suits ${a.bestFor.join(", ").toLowerCase()}, while ${b.shortName} works better for ${b.bestFor.join(", ").toLowerCase()}. Both are UGC-entitled, so the decision comes down to fee, specialisation depth and delivery style.`,
    },
    {
      question: `Which one is cheaper?`,
      answer: `${a.shortName} sits in the ${a.feeRangeLabel} band and ${b.shortName} in the ${b.feeRangeLabel} band for a full programme.`,
    },
    {
      question: `Are both degrees valid for jobs and higher study?`,
      answer: `Yes. ${a.shortName} holds ${approvalText(a)} and ${b.shortName} holds ${approvalText(b)}, so both awards are treated on par with regular degrees.`,
    },
  ];

  return (
    <>
      <DetailLayout
        crumbs={[
          { name: "Compare", href: "/compare" },
          { name: `${a.shortName} vs ${b.shortName}`, href: pair.path },
        ]}
        eyebrow="University comparison"
        title={`${a.shortName} vs ${b.shortName}: Fees, Approvals & Which Is Better`}
        subtitle={`An objective, parameter-by-parameter comparison of ${a.name} and ${b.name} for online learners.`}
        meta={<UpdatedStamp date={a.lastUpdated} verified={false} />}
        tocSections={[
          "Quick facts",
          "Side-by-side comparison",
          "Fee comparison",
          "Common programmes",
          "Strengths and trade-offs",
          "Which should you choose",
          "FAQs",
          "Related links",
        ]}
        faqs={faqs}
        sidebarExtras={<LinkCluster title="More comparisons" links={comparisonLinks(a.slug, 6)} />}
        related={
          <RelatedLinkGrid
            groups={[
              { title: `${a.shortName} programmes`, links: offeringLinks(a.slug) },
              { title: `${b.shortName} programmes`, links: offeringLinks(b.slug) },
              { title: "Other comparisons", links: comparisonLinks(undefined, 8) },
              { title: "All universities", links: universityLinks(undefined, 6) },
            ]}
          />
        }
      >
        <QuickFacts
          items={[
            { label: a.shortName, value: `${a.city}, ${a.state}` },
            { label: b.shortName, value: `${b.city}, ${b.state}` },
            { label: `${a.shortName} rating`, value: `${a.rating}/5` },
            { label: `${b.shortName} rating`, value: `${b.rating}/5` },
            { label: "Shared programmes", value: shared.length },
            { label: "Both UGC-entitled", value: "Yes" },
          ]}
        />

        <ContentSection title="Side-by-side comparison">
          <DataTable
            caption={`${a.name} vs ${b.name}`}
            head={["Parameter", a.shortName, b.shortName]}
            rows={[
              ["Established", a.established, b.established],
              ["Location", `${a.city}, ${a.state}`, `${b.city}, ${b.state}`],
              ["Approvals", approvalText(a), approvalText(b)],
              ["Fee band", a.feeRangeLabel, b.feeRangeLabel],
              ["Programmes tracked", pair.left.offerings.length, pair.right.offerings.length],
              ["Learner rating", `${a.rating}/5 (${a.reviewCount} reviews)`, `${b.rating}/5 (${b.reviewCount} reviews)`],
              ["Best for", a.bestFor.join(", "), b.bestFor.join(", ")],
            ]}
          />
        </ContentSection>

        <ContentSection title="Fee comparison">
          <DataTable
            caption="Fee bands by programme"
            head={["Programme", a.shortName, b.shortName]}
            rows={shared.map((o) => [
              <AppLink key={o.id} to={`/courses/${o.programmeSlug}`} className="font-semibold text-brand hover:underline">
                {getProgramme(o.programmeSlug)?.name ?? o.programmeSlug}
              </AppLink>,
              a.feeRangeLabel,
              b.feeRangeLabel,
            ])}
          />
        </ContentSection>

        <ContentSection title="Common programmes">
          <ul className="grid gap-2 sm:grid-cols-2">
            {shared.map((o) => (
              <li key={o.id} className="rounded-lg bg-secondary px-3 py-2 text-sm">
                <AppLink to={`/courses/${o.programmeSlug}`} className="font-semibold text-brand hover:underline">
                  {getProgramme(o.programmeSlug)?.name ?? o.programmeSlug}
                </AppLink>
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection title="Strengths and trade-offs">
          <div className="grid gap-6 lg:grid-cols-2">
            <div>
              <h3 className="mb-3 text-base font-bold text-foreground">{a.shortName}</h3>
              <ProsCons pros={a.pros} cons={a.cons} />
            </div>
            <div>
              <h3 className="mb-3 text-base font-bold text-foreground">{b.shortName}</h3>
              <ProsCons pros={b.pros} cons={b.cons} />
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Which should you choose">
          <p>
            <strong className="text-foreground">Choose {a.shortName}</strong> if you match: {a.bestFor.join(", ")}.{" "}
            {a.verdict}
          </p>
          <p>
            <strong className="text-foreground">Choose {b.shortName}</strong> if you match: {b.bestFor.join(", ")}.{" "}
            {b.verdict}
          </p>
        </ContentSection>

        <AuthorBox />
        <References
          items={[
            { label: `${a.name} official website`, href: a.websiteUrl },
            { label: `${b.name} official website`, href: b.websiteUrl },
            { label: "UGC-DEB entitled programme list", href: "https://deb.ugc.ac.in/" },
          ]}
        />
      </DetailLayout>
      <StickyMobileCTA label="Get a free comparison call" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              [
                { name: a.name, href: `/universities/${a.slug}` },
                { name: b.name, href: `/universities/${b.slug}` },
              ],
              `${a.shortName} vs ${b.shortName}`,
            ),
          ),
        }}
      />
    </>
  );
}

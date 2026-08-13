import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { NextStep } from "@/components/common/NextStep";
import { ScholarshipCard } from "@/components/cards";
import { scholarships } from "@/lib/content";
import { breadcrumbSchema, canonical, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/scholarships/$slug")({
  loader: ({ params }) => {
    const item = scholarships.find((s) => s.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Scholarship unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    const path = `/scholarships/${item.slug}`;
    const description = `${item.name} by ${item.provider}: ${item.amount}. Eligibility, deadline and how it applies to online degree fees.`;
    return {
      meta: pageMeta({ title: `${item.name} — Eligibility & Benefit`, description, path }),
      links: canonical(path),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Scholarships", href: "/scholarships" },
            { name: item.name, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
});

function Page() {
  const { item } = Route.useLoaderData();
  const related = scholarships.filter((s) => s.slug !== item.slug).slice(0, 3);

  return (
    <PageShell
      crumbs={[
        { name: "Scholarships", href: "/scholarships" },
        { name: item.name, href: `/scholarships/${item.slug}` },
      ]}
      eyebrow={item.provider}
      title={item.name}
      description={item.summary}
    >
      <div className="grid gap-3 sm:grid-cols-3">
        {[
          { label: "Benefit", value: item.amount },
          { label: "Deadline", value: item.deadline },
          { label: "Provider", value: item.provider },
        ].map((f) => (
          <div key={f.label} className="surface-card p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{f.label}</p>
            <p className="mt-1.5 text-base font-bold text-foreground">{f.value}</p>
          </div>
        ))}
      </div>

      <section className="surface-card mt-6 p-6">
        <h2 className="font-display text-lg font-bold">Who is eligible</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.eligibility}</p>
      </section>

      <div className="mt-6 grid gap-2">
        <NextStep
          question="Want to see which universities fit this budget after the waiver?"
          actionLabel="Compare fees"
          href="/compare/universities"
        />
        <NextStep
          question="Not sure which programme to apply for first?"
          actionLabel="Explore courses"
          href="/courses"
        />
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-xl font-bold">Other funding options</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ScholarshipCard key={r.slug} item={r} />
            ))}
          </div>
        </section>
      )}

      <div className="mt-16">
        <CTASection />
      </div>
    </PageShell>
  );
}

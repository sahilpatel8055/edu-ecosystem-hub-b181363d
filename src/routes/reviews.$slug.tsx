import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection, Chip } from "@/components/common/Primitives";
import { NextStep } from "@/components/common/NextStep";
import { ReviewCard } from "@/components/cards";
import { reviews, universities } from "@/lib/content";
import { breadcrumbSchema, canonical, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/reviews/$slug")({
  loader: ({ params }) => {
    const item = reviews.find((r) => r.slug === params.slug);
    if (!item) throw notFound();
    const university = universities.find((u) => u.name === item.entity);
    return { item, universitySlug: university?.slug ?? null };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Review unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    const path = `/reviews/${item.slug}`;
    const description = `${item.entity} ${item.programme} review rated ${item.rating}/5 by a ${item.batch} learner — study experience, support and value for money.`;
    return {
      meta: pageMeta({ title: `${item.entity} ${item.programme} Review (${item.rating}/5)`, description, path }),
      links: canonical(path),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Reviews", href: "/reviews" },
            { name: `${item.entity} review`, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
});

function Page() {
  const { item, universitySlug } = Route.useLoaderData();
  const related = reviews.filter((r) => r.slug !== item.slug).slice(0, 3);

  return (
    <PageShell
      crumbs={[
        { name: "Reviews", href: "/reviews" },
        { name: `${item.entity} review`, href: `/reviews/${item.slug}` },
      ]}
      eyebrow={`${item.programme} · ${item.batch}`}
      title={`${item.entity} review`}
      description={item.summary}
    >
      <div className="surface-card flex flex-wrap items-center gap-4 p-5">
        <span className="text-base font-bold text-foreground">{item.rating}/5</span>
        {item.verified && <Chip tone="success">Verified learner</Chip>}
        <span className="text-sm text-muted-foreground">
          Shared by {item.author} · batch {item.batch}
        </span>
      </div>

      <section className="surface-card mt-6 p-6">
        <h2 className="font-display text-lg font-bold">What the learner said</h2>
        <blockquote className="mt-2 text-sm leading-relaxed text-muted-foreground">“{item.summary}”</blockquote>
      </section>

      <div className="mt-6 grid gap-2">
        {universitySlug && (
          <NextStep
            question={`Want the full fee, approval and admission detail for ${item.entity}?`}
            actionLabel="View university"
            href={`/universities/${universitySlug}`}
          />
        )}
        <NextStep
          question="Weighing this university against another?"
          actionLabel="Compare universities"
          href="/compare/universities"
        />
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-xl font-bold">More learner reviews</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <ReviewCard key={r.slug} item={r} />
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

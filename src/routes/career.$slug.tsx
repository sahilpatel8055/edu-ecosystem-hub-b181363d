import { createFileRoute, notFound } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection, Chip } from "@/components/common/Primitives";
import { NextStep } from "@/components/common/NextStep";
import { CareerCard } from "@/components/cards";
import { careerGuides } from "@/lib/content";
import { breadcrumbSchema, canonical, jsonLd, pageMeta } from "@/lib/seo";

export const Route = createFileRoute("/career/$slug")({
  loader: ({ params }) => {
    const item = careerGuides.find((c) => c.slug === params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Career guide unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const { item } = loaderData;
    const path = `/career/${item.slug}`;
    const description = `${item.title}: salary range ${item.salaryRange}, core skills and the online degrees that map to this ${item.field} path.`;
    return {
      meta: pageMeta({ title: `${item.title} — Career Guide`, description, path }),
      links: canonical(path),
      scripts: [
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Career", href: "/career" },
            { name: item.title, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
});

function Page() {
  const { item } = Route.useLoaderData();
  const related = careerGuides.filter((c) => c.slug !== item.slug).slice(0, 3);

  return (
    <PageShell
      crumbs={[
        { name: "Career", href: "/career" },
        { name: item.title, href: `/career/${item.slug}` },
      ]}
      eyebrow={item.field}
      title={item.title}
      description={item.summary}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="surface-card p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Salary range</p>
          <p className="mt-1.5 text-base font-bold text-foreground">{item.salaryRange}</p>
        </div>
        <div className="surface-card p-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Field</p>
          <p className="mt-1.5 text-base font-bold text-foreground">{item.field}</p>
        </div>
      </div>

      <section className="surface-card mt-6 p-6">
        <h2 className="font-display text-lg font-bold">Skills that matter</h2>
        <div className="mt-3 flex flex-wrap gap-2">
          {item.skills.map((s) => (
            <Chip key={s}>{s}</Chip>
          ))}
        </div>
      </section>

      <div className="mt-6 grid gap-2">
        <NextStep
          question="Which online degree supports this career path?"
          actionLabel="Explore courses"
          href="/courses"
        />
        <NextStep
          question="Comparing universities on fees and approvals?"
          actionLabel="Compare universities"
          href="/compare/universities"
        />
      </div>

      {related.length > 0 && (
        <section className="mt-14">
          <h2 className="font-display text-xl font-bold">More career guides</h2>
          <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r) => (
              <CareerCard key={r.slug} item={r} />
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

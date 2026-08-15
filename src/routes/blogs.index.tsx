import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/templates/PageShell";
import { CTASection } from "@/components/common/Primitives";
import { ArticleCard } from "@/components/cards";
import { articles } from "@/lib/content";
import {
  universityBlogFilterOptions,
  universityLabelByBlogSlug,
} from "@/data/university-blogs";
import { canonical, collectionSchema, jsonLd, pageMeta, breadcrumbSchema } from "@/lib/seo";


const title = "Articles, Guides & Research";
const description = "In-depth articles on choosing, funding and finishing an online or distance degree in India.";
const path = "/blogs";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: pageMeta({ title, description, path }),
    links: canonical(path),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path })),
      jsonLd(breadcrumbSchema([{ name: "Home", href: "/" }, { name: "Blogs", href: path }])),
    ],
  }),
  component: Page,
});

function Page() {
  const [university, setUniversity] = useState("All");
  const list =
    university === "All"
      ? articles
      : articles.filter((a) => universityLabelByBlogSlug[a.slug] === university);

  return (
    <PageShell
      crumbs={[{ name: "Blogs", href: path }]}
      eyebrow="Knowledge hub"
      title="Articles, Guides & Research"
      description={description}
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {["All", ...universityBlogFilterOptions].map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => setUniversity(opt)}
            aria-pressed={university === opt}
            className={`rounded-full border px-4 py-2 text-[0.8rem] font-semibold transition-colors ${
              university === opt
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-card text-muted-foreground hover:bg-secondary"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((i) => (<ArticleCard key={i.slug} item={i} />))}
      </div>
      {!list.length && (
        <p className="text-sm text-muted-foreground">No articles for this university yet.</p>
      )}
      <div className="mt-16"><CTASection /></div>
    </PageShell>
  );
}


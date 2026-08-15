import { AppLink } from "@/components/common/AppLink";
import { campusImage } from "@/lib/assets";
import { blogBanners } from "@/lib/blogBanners";
import { universityByBlogSlug, universityLabelByBlogSlug } from "@/data/university-blogs";
import { formatDate, type Article } from "@/lib/content";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";

const fallbackBanners = Object.values(blogBanners);

/** Deterministic cover for a blog: campus photo of its university, else a stock banner. */
export function blogCover(article: Article): string | undefined {
  const uni = universityByBlogSlug[article.slug];
  const campus = uni ? campusImage(uni) : undefined;
  if (campus) return campus;
  const i = article.slug.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % fallbackBanners.length;
  return fallbackBanners[i];
}

/** Blog card with an image banner — used on university and course pages. */
export function BlogBannerCard({ item }: { item: Article }) {
  const cover = blogCover(item);
  const label = universityLabelByBlogSlug[item.slug];
  return (
    <AppLink
      to={`/blogs/${item.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_10px_30px_-24px_oklch(0_0_0/0.6)] transition-all hover:-translate-y-0.5 hover:border-brand/40"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-secondary">
        {cover && (
          <img
            src={cover}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <span className="absolute left-3 top-3 rounded-full bg-[#7f1813] px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wide text-white">
          {label ?? item.category}
        </span>
      </div>
      <div className="flex min-w-0 flex-1 flex-col p-4">
        <h3 className="font-display text-[0.95rem] font-bold leading-snug text-foreground group-hover:text-brand">
          {item.title}
        </h3>
        <p className="mt-2 line-clamp-2 text-[0.82rem] leading-relaxed text-muted-foreground">
          {item.excerpt}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.72rem] font-semibold text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5" /> {formatDate(item.date)}
          </span>
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {item.readingTime}
          </span>
        </div>
        <span className="mt-3 inline-flex items-center gap-1 text-[0.8rem] font-bold text-brand">
          Read guide <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </AppLink>
  );
}

/** Blog strip rendered on university and course pages. */
export function BlogStrip({
  items,
  title = "Guides & articles",
  intro,
  allHref = "/blogs",
}: {
  items: Article[];
  title?: string;
  intro?: string;
  allHref?: string;
}) {
  if (!items.length) return null;
  return (
    <div>
      {intro && <p className="mb-4 text-[0.88rem] leading-relaxed text-muted-foreground">{intro}</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <BlogBannerCard key={a.slug} item={a} />
        ))}
      </div>
      <div className="mt-5">
        <AppLink
          to={allHref}
          className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          Read all {title.toLowerCase()} <ArrowRight className="h-4 w-4" />
        </AppLink>
      </div>
    </div>
  );
}

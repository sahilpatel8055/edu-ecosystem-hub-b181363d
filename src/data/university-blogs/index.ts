/**
 * Aggregates the university-specific blog libraries.
 *
 * Each university file exports `<uni>Articles` (card metadata for
 * `src/lib/content.ts`) and `<uni>Posts` (long-form bodies for
 * `src/data/posts.ts`). This module joins them and keeps the
 * university -> blog mapping used by university and course pages.
 */

import type { PostContent } from "@/data/posts";
import type { Article } from "@/lib/content";

import { amityOnlineArticles, amityOnlinePosts } from "./amity-online";
import { chandigarhOnlineArticles, chandigarhOnlinePosts } from "./chandigarh-university-online";
import { duSolArticles, duSolPosts } from "./du-sol";
import { ignouArticles, ignouPosts } from "./ignou";
import { lpuOnlineArticles, lpuOnlinePosts } from "./lpu-online";
import { nsouArticles, nsouPosts } from "./nsou";
import { shooliniOnlineArticles, shooliniOnlinePosts } from "./shoolini-online";

export interface UniversityBlogGroup {
  /** University slug used by /universities/{slug}. */
  slug: string;
  /** Display label used in filters and section headings. */
  label: string;
  articles: Article[];
  posts: Record<string, PostContent>;
}

export const universityBlogGroups: UniversityBlogGroup[] = [
  {
    slug: "amity-online",
    label: "Amity Online",
    articles: amityOnlineArticles,
    posts: amityOnlinePosts,
  },
  {
    slug: "chandigarh-university-online",
    label: "Chandigarh University Online",
    articles: chandigarhOnlineArticles,
    posts: chandigarhOnlinePosts,
  },
  { slug: "lpu-online", label: "LPU Online", articles: lpuOnlineArticles, posts: lpuOnlinePosts },
  {
    slug: "shoolini-online",
    label: "Shoolini Online",
    articles: shooliniOnlineArticles,
    posts: shooliniOnlinePosts,
  },
  { slug: "ignou", label: "IGNOU", articles: ignouArticles, posts: ignouPosts },
  { slug: "du-sol", label: "DU SOL", articles: duSolArticles, posts: duSolPosts },
  { slug: "nsou", label: "NSOU", articles: nsouArticles, posts: nsouPosts },
];

/** Every university blog card, newest university group first. */
export const universityBlogArticles: Article[] = universityBlogGroups.flatMap((g) => g.articles);

/** Every university blog body, keyed by slug. */
export const universityBlogPosts: Record<string, PostContent> = Object.assign(
  {},
  ...universityBlogGroups.map((g) => g.posts),
);

/** blog slug -> university slug */
export const universityByBlogSlug: Record<string, string> = Object.fromEntries(
  universityBlogGroups.flatMap((g) => g.articles.map((a) => [a.slug, g.slug])),
);

/** blog slug -> university display label */
export const universityLabelByBlogSlug: Record<string, string> = Object.fromEntries(
  universityBlogGroups.flatMap((g) => g.articles.map((a) => [a.slug, g.label])),
);

export const universityBlogFilterOptions = universityBlogGroups.map((g) => g.label);

export const blogsForUniversity = (slug: string): Article[] =>
  universityBlogGroups.find((g) => g.slug === slug)?.articles ?? [];

/**
 * Blogs that mention a course keyword (e.g. "mba", "bba") in their slug, title
 * or tags — used to surface university blogs on course pillar pages.
 */
export const blogsForCourse = (shortName: string, limit = 6): Article[] => {
  const key = shortName.toLowerCase().replace(/[^a-z]/g, "");
  if (!key) return [];
  const matches = (a: Article) =>
    a.slug.includes(key) ||
    a.title.toLowerCase().replace(/[^a-z ]/g, "").split(" ").includes(key) ||
    a.tags.some((t) => t.toLowerCase().replace(/[^a-z]/g, "").includes(key));
  return universityBlogArticles.filter(matches).slice(0, limit);
};

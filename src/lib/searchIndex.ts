import { allArticles, courses, universities } from "@/lib/content";
import { specialisations } from "@/data";

export type SearchKind = "Course" | "University" | "Specialisation" | "Article";

export type SearchResult = {
  kind: SearchKind;
  title: string;
  subtitle: string;
  href: string;
};

/**
 * Small in-memory search index built from data the site already ships.
 * No search dependency: the dataset is a few hundred rows, so a scored
 * substring match is both faster and lighter than a library.
 */
let index: SearchResult[] | null = null;

function build(): SearchResult[] {
  const rows: SearchResult[] = [];

  for (const c of courses) {
    rows.push({
      kind: "Course",
      title: c.displayName ?? c.name,
      subtitle: [c.level, c.duration].filter(Boolean).join(" · "),
      href: `/courses/${c.slug}`,
    });
  }

  for (const u of universities) {
    rows.push({
      kind: "University",
      title: u.name,
      subtitle: [u.location, u.mode].filter(Boolean).join(" · "),
      href: `/universities/${u.slug}`,
    });
  }

  for (const s of specialisations) {
    rows.push({
      kind: "Specialisation",
      title: s.name,
      subtitle: "Specialisation",
      href: `/courses/${s.programme}/specialisation/${s.slug}`,
    });
  }

  for (const a of allArticles) {
    rows.push({
      kind: "Article",
      title: a.title,
      subtitle: a.category ?? "Guide",
      href: a.kind === "news" ? `/news/${a.slug}` : `/blogs/${a.slug}`,
    });
  }

  return rows;
}

export function searchAll(query: string, limit = 8): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  index ??= build();

  const kindRank: Record<SearchKind, number> = {
    Course: 0,
    University: 1,
    Specialisation: 2,
    Article: 3,
  };

  return index
    .map((r) => {
      const t = r.title.toLowerCase();
      const at = t.indexOf(q);
      if (at === -1) return null;
      // exact prefix beats mid-string; then course/university before articles
      const score = (at === 0 ? 0 : 10) + kindRank[r.kind] + Math.min(t.length / 100, 1);
      return { r, score };
    })
    .filter((x): x is { r: SearchResult; score: number } => x !== null)
    .sort((a, b) => a.score - b.score)
    .slice(0, limit)
    .map((x) => x.r);
}

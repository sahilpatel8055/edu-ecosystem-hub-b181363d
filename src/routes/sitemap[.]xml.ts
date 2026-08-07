import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { authors, categories, tags } from "@/lib/content";
import { offerings, programmes, universities as universityRecords } from "@/data";
import { universityPairs } from "@/lib/entities";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

interface SitemapEntry {
  path: string;
  changefreq?: "daily" | "weekly" | "monthly";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          "/",
          "/universities",
          "/courses",
          "/compare",
          "/reviews",
          "/career",
          "/scholarships",
          "/admissions",
          "/rankings",
          "/news",
          "/blogs",
          "/tools",
          "/authors",
          "/categories",
          "/tags",
          "/about",
          "/contact",
          "/privacy-policy",
          "/terms-and-conditions",
        ];

        const entries: SitemapEntry[] = [
          ...staticPaths.map((p) => ({
            path: p,
            changefreq: "weekly" as const,
            priority: p === "/" ? "1.0" : "0.8",
          })),
          ...universityRecords.map((u) => ({
            path: `/universities/${u.slug}`,
            changefreq: "weekly" as const,
            priority: "0.9",
          })),
          ...programmes.map((p) => ({
            path: `/courses/${p.slug}`,
            changefreq: "weekly" as const,
            priority: "0.9",
          })),
          ...offerings.map((o) => ({
            path: `/universities/${o.universitySlug}/courses/${o.programmeSlug}`,
            changefreq: "weekly" as const,
            priority: "0.9",
          })),
          ...universityPairs().map((p) => ({ path: p.path, changefreq: "monthly" as const, priority: "0.7" })),
          ...categories.map((c) => ({ path: `/categories/${c.slug}`, changefreq: "weekly" as const })),
          ...tags.map((t) => ({ path: `/tags/${t.slug}`, changefreq: "weekly" as const })),
          ...authors.map((a) => ({ path: `/authors/${a.slug}`, changefreq: "monthly" as const })),

        const urls = entries.map((e) =>
          [
            "  <url>",
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            "  </url>",
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" },
        });
      },
    },
  },
});
import { notFound } from "@tanstack/react-router";
import { sectionDescription, sectionTitle } from "@/components/university/SectionPage";
import { getUniversity } from "@/data";
import { hasSectionPage, type SectionKey } from "@/lib/insightsData";
import { breadcrumbSchema, canonical, jsonLd, pageMeta } from "@/lib/seo";

/**
 * Shared loader/head for `/universities/{slug}/{section}` pillar pages.
 * A section without enough unique content is not a page at all — it 404s
 * instead of shipping a thin, duplicate URL.
 */
export interface SectionLoaderData {
  name: string;
  shortName: string;
  lastUpdated: string;
}

export function sectionLoader(slug: string, section: SectionKey): SectionLoaderData {
  const u = getUniversity(slug);
  if (!u || !hasSectionPage(slug, section)) throw notFound();
  return { name: u.name, shortName: u.shortName, lastUpdated: u.lastUpdated };
}

export function sectionHead(slug: string, section: SectionKey, loaderData: SectionLoaderData | undefined) {
  const path = `/universities/${slug}/${section}`;
  if (!loaderData) {
    return { meta: [{ title: "Page not available" }, { name: "robots", content: "noindex" }] };
  }
  const title = sectionTitle(loaderData.shortName, section);
  const description = sectionDescription(loaderData.name, section);
  return {
    meta: pageMeta({
      title,
      description,
      path,
      modifiedTime: loaderData.lastUpdated,
      author: "AVEDU Editorial Desk",
    }),
    links: canonical(path),
    scripts: [
      jsonLd(
        breadcrumbSchema([
          { name: "Home", href: "/" },
          { name: "Universities", href: "/universities" },
          { name: loaderData.shortName, href: `/universities/${slug}` },
          { name: sectionCrumb(section), href: path },
        ]),
      ),
    ],
  };
}

function sectionCrumb(section: SectionKey): string {
  return {
    admission: "Admission",
    "examination-pattern": "Examination pattern",
    placement: "Placement & career",
    scholarships: "Scholarships",
  }[section];
}

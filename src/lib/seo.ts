/**
 * Central SEO layer.
 *
 * Every route builds its head() through `pageMeta` + `canonical` + `jsonLd`
 * so metadata stays unique, non-duplicated and consistent as the site scales
 * to programmatic (100k+) pages.
 */

export const SITE_NAME = "AVEDU Insights";
export const SITE_TAGLINE = "India's online & distance education knowledge platform";
export const SITE_LOCALE = "en_IN";
export const SITE_LANG = "en-IN";

/** No project domain is configured yet — relative URLs stay correct once it is. */
export const BASE_URL = "";

export const abs = (path: string) => `${BASE_URL}${path}`;

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noindex?: boolean;
  /** Keeps a page out of the index but lets link equity flow (e.g. thin filters). */
  noindexFollow?: boolean;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  tags?: string[];
}

type MetaEntry = Record<string, string>;

export function pageMeta(seo: PageSeo): MetaEntry[] {
  const fullTitle = seo.title.includes(SITE_NAME) ? seo.title : `${seo.title} | ${SITE_NAME}`;
  const meta: MetaEntry[] = [
    { title: fullTitle },
    { name: "description", content: seo.description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: seo.description },
    { property: "og:type", content: seo.type ?? "website" },
    { property: "og:url", content: abs(seo.path) },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: SITE_LOCALE },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: seo.description },
  ];
  if (seo.keywords?.length) meta.push({ name: "keywords", content: seo.keywords.join(", ") });
  if (seo.author) {
    meta.push({ name: "author", content: seo.author });
    meta.push({ property: "article:author", content: seo.author });
  }
  if (seo.image) {
    meta.push({ property: "og:image", content: seo.image });
    meta.push({ name: "twitter:image", content: seo.image });
  }
  if (seo.publishedTime) meta.push({ property: "article:published_time", content: seo.publishedTime });
  if (seo.modifiedTime) meta.push({ property: "article:modified_time", content: seo.modifiedTime });
  if (seo.section) meta.push({ property: "article:section", content: seo.section });
  seo.tags?.forEach((t) => meta.push({ property: "article:tag", content: t }));
  meta.push({
    name: "robots",
    content: seo.noindex
      ? "noindex, nofollow"
      : seo.noindexFollow
        ? "noindex, follow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  });
  return meta;
}

export function canonical(path: string) {
  return [
    { rel: "canonical", href: abs(path) },
    { rel: "alternate", href: abs(path), hrefLang: "en-in" },
    { rel: "alternate", href: abs(path), hrefLang: "x-default" },
  ];
}

export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

/* ------------------------------ Schema.org ------------------------------ */

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_NAME,
  url: BASE_URL || "/",
  description: SITE_TAGLINE,
  sameAs: [
    "https://avedu.in/",
    "https://dusol.avedu.in/",
    "https://lpuonline.avedu.in/",
    "https://amityonline.avedu.in/",
  ],
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: BASE_URL || "/",
  inLanguage: SITE_LANG,
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/blogs?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
});

export const webPageSchema = (p: {
  name: string;
  description: string;
  path: string;
  modified?: string | undefined;
  speakable?: string[] | undefined;
}) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: p.name,
  description: p.description,
  url: abs(p.path),
  inLanguage: SITE_LANG,
  isPartOf: { "@type": "WebSite", name: SITE_NAME, url: BASE_URL || "/" },
  ...(p.modified ? { dateModified: p.modified } : {}),
  ...(p.speakable
    ? { speakable: { "@type": "SpeakableSpecification", cssSelector: p.speakable } }
    : {}),
});

export const breadcrumbSchema = (items: { name: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: abs(item.href),
  })),
});

export const articleSchema = (a: {
  headline: string;
  description: string;
  path: string;
  author?: string | undefined;
  datePublished?: string | undefined;
  dateModified?: string | undefined;
  type?: "Article" | "BlogPosting" | "NewsArticle" | undefined;
}) => ({
  "@context": "https://schema.org",
  "@type": a.type ?? "Article",
  headline: a.headline,
  description: a.description,
  mainEntityOfPage: abs(a.path),
  inLanguage: SITE_LANG,
  author: { "@type": "Person", name: a.author ?? SITE_NAME },
  publisher: { "@type": "Organization", name: SITE_NAME },
  datePublished: a.datePublished,
  dateModified: a.dateModified ?? a.datePublished,
});

export const courseSchema = (c: {
  name: string;
  description: string;
  provider?: string | undefined;
  path?: string | undefined;
  mode?: string | undefined;
  durationISO?: string | undefined;
  level?: string | undefined;
}) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: c.name,
  description: c.description,
  ...(c.path ? { url: abs(c.path) } : {}),
  inLanguage: SITE_LANG,
  educationalLevel: c.level,
  provider: { "@type": "CollegeOrUniversity", name: c.provider ?? SITE_NAME },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: c.mode ?? "online",
    ...(c.durationISO ? { courseWorkload: c.durationISO } : {}),
  },
});

export const collegeSchema = (u: {
  name: string;
  description: string;
  path: string;
  city?: string | undefined;
  state?: string | undefined;
  url?: string | undefined;
  rating?: number | undefined;
  reviewCount?: number | undefined;
}) => ({
  "@context": "https://schema.org",
  "@type": "CollegeOrUniversity",
  name: u.name,
  description: u.description,
  url: u.url ?? abs(u.path),
  mainEntityOfPage: abs(u.path),
  ...(u.city
    ? {
        address: {
          "@type": "PostalAddress",
          addressLocality: u.city,
          addressRegion: u.state,
          addressCountry: "IN",
        },
      }
    : {}),
  ...(u.rating && u.reviewCount
    ? {
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: u.rating,
          reviewCount: u.reviewCount,
          bestRating: 5,
        },
      }
    : {}),
});

export const reviewSchema = (r: { itemName: string; rating: number; author: string; body: string }) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "CollegeOrUniversity", name: r.itemName },
  reviewRating: { "@type": "Rating", ratingValue: r.rating, bestRating: 5 },
  author: { "@type": "Person", name: r.author },
  reviewBody: r.body,
});

export const faqSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
});

export const collectionSchema = (c: { name: string; description: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: c.name,
  description: c.description,
  url: abs(c.path),
  inLanguage: SITE_LANG,
});

export const itemListSchema = (items: { name: string; href: string }[], name?: string) => ({
  "@context": "https://schema.org",
  "@type": "ItemList",
  ...(name ? { name } : {}),
  numberOfItems: items.length,
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    url: abs(item.href),
  })),
});

export const personSchema = (p: { name: string; role?: string; bio?: string; path: string }) => ({
  "@context": "https://schema.org",
  "@type": "Person",
  name: p.name,
  jobTitle: p.role,
  description: p.bio,
  url: abs(p.path),
});

export const howToSchema = (h: { name: string; steps: string[] }) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: h.name,
  step: h.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s, text: s })),
});

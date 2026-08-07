/**
 * Central SEO helpers. Every route builds its head() through `pageMeta`
 * so metadata stays consistent as the site scales to programmatic pages.
 */

export const SITE_NAME = "AVEDU Insights";
export const SITE_TAGLINE = "India's online & distance education knowledge platform";

/** No project domain is configured yet — relative URLs stay correct once it is. */
export const BASE_URL = "";

export interface PageSeo {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "profile";
  image?: string;
  noindex?: boolean;
  publishedTime?: string;
  author?: string;
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
    { property: "og:url", content: `${BASE_URL}${seo.path}` },
    { property: "og:site_name", content: SITE_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: seo.description },
  ];
  if (seo.image) {
    meta.push({ property: "og:image", content: seo.image });
    meta.push({ name: "twitter:image", content: seo.image });
  }
  if (seo.publishedTime) meta.push({ property: "article:published_time", content: seo.publishedTime });
  if (seo.author) meta.push({ property: "article:author", content: seo.author });
  meta.push({
    name: "robots",
    content: seo.noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large",
  });
  return meta;
}

export function canonical(path: string) {
  return [{ rel: "canonical", href: `${BASE_URL}${path}` }];
}

export function jsonLd(data: unknown) {
  return { type: "application/ld+json", children: JSON.stringify(data) };
}

/* ---------------- Schema.org builders (placeholders ready for CMS data) ------------- */

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

export const breadcrumbSchema = (items: { name: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.name,
    item: `${BASE_URL}${item.href}`,
  })),
});

export const articleSchema = (a: {
  headline: string;
  description: string;
  path: string;
  author?: string;
  datePublished?: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: a.headline,
  description: a.description,
  mainEntityOfPage: `${BASE_URL}${a.path}`,
  author: { "@type": "Person", name: a.author ?? SITE_NAME },
  publisher: { "@type": "Organization", name: SITE_NAME },
  datePublished: a.datePublished,
});

export const courseSchema = (c: { name: string; description: string; provider?: string }) => ({
  "@context": "https://schema.org",
  "@type": "Course",
  name: c.name,
  description: c.description,
  provider: { "@type": "Organization", name: c.provider ?? SITE_NAME },
});

export const reviewSchema = (r: { itemName: string; rating: number; author: string; body: string }) => ({
  "@context": "https://schema.org",
  "@type": "Review",
  itemReviewed: { "@type": "EducationalOrganization", name: r.itemName },
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
  url: `${BASE_URL}${c.path}`,
});
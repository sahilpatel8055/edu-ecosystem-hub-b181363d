import { createFileRoute, notFound } from "@tanstack/react-router";
import { CoursePageTemplate } from "@/components/templates/CoursePageTemplate";
import { courseContentBySlug } from "@/data/course-pages";
import { ADMISSION_YEAR } from "@/data/course-pages/types";
import { courseFamilyList } from "@/lib/courseFamily";
import { articleLinks } from "@/lib/entities";
import {
  breadcrumbSchema,
  canonical,
  courseSchema,
  faqSchema,
  itemListSchema,
  jsonLd,
  pageMeta,
  webPageSchema,
} from "@/lib/seo";

export const Route = createFileRoute("/online-courses/$level/$course")({
  loader: ({ params }) => {
    const found = courseContentBySlug(params.course);
    if (!found || found.family.level.toLowerCase() !== params.level) throw notFound();
    return { slug: params.course, level: params.level };
  },
  head: ({ params }) => {
    const found = courseContentBySlug(params.course);
    if (!found) return { meta: [{ title: "Course not found" }, { name: "robots", content: "noindex" }] };
    const { family, content } = found;
    const title = content.seo.title.replace("{year}", String(ADMISSION_YEAR));
    const description = content.seo.description.replace("{year}", String(ADMISSION_YEAR));
    const path = family.path;
    return {
      meta: pageMeta({ title, description, path, keywords: content.seo.keywords }),
      links: canonical(path),
      scripts: [
        jsonLd(webPageSchema({ name: title, description, path })),
        jsonLd(
          courseSchema({
            name: family.name,
            description,
            path,
            mode: "online",
            level: family.level === "PG" ? "Postgraduate" : "Undergraduate",
          }),
        ),
        jsonLd(faqSchema(content.faqs.map((f) => ({ question: f.question, answer: f.answer })))),
        jsonLd(
          itemListSchema(
            family.offers.map((o) => ({ name: `${o.universityShortName} ${family.name}`, href: o.path })),
            `Universities offering ${family.name}`,
          ),
        ),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Online Courses", href: "/online-courses" },
            { name: family.name, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
});

function Page() {
  const { slug } = Route.useLoaderData();
  const found = courseContentBySlug(slug);
  if (!found) return null;
  const { family, content } = found;

  const relatedCourses = courseFamilyList()
    .filter((f) => f.slug !== family.slug)
    .slice(0, 8)
    .map((f) => ({ label: f.name, href: f.path, note: f.feeRangeLabel }));

  return (
    <CoursePageTemplate
      family={family}
      content={content}
      year={ADMISSION_YEAR}
      relatedCourses={relatedCourses}
      relatedArticles={articleLinks(4).map((a) => ({ label: a.label, href: a.href }))}
    />
  );
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { Faq } from "@/components/common/Faq";
import { LeadCaptureCard, TrustCard } from "@/components/common/Sidebar";
import { CourseSectionBody } from "@/components/course/CourseSectionBody";
import { FinalCta, LinkTiles, Section, UniversityTileGrid } from "@/components/course/CourseSections";
import { BackToPillar, SectionUrlGrid } from "@/components/course/SectionHub";
import { courseContentBySlug } from "@/data/course-pages";
import { ADMISSION_YEAR } from "@/data/course-pages/types";
import { getCourseFamily } from "@/lib/courseFamily";
import {
  courseSectionDescription,
  courseSectionLabels,
  courseSectionTitle,
  isCourseSection,
  type CourseSectionKey,
} from "@/lib/courseSections";
import { breadcrumbSchema, canonical, faqSchema, jsonLd, pageMeta, webPageSchema } from "@/lib/seo";

/** Indexable section sub-page of a course pillar: /courses/{course}/{section} */
export const Route = createFileRoute("/courses/$course/$section")({
  loader: ({ params }) => {
    const found = courseContentBySlug(params.course);
    if (!found || !isCourseSection(params.section)) throw notFound();
    return { name: found.family.name };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData || !isCourseSection(params.section)) {
      return { meta: [{ title: "Section not available" }, { name: "robots", content: "noindex" }] };
    }
    const section = params.section;
    const path = `/courses/${params.course}/${section}`;
    const title = courseSectionTitle(loaderData.name, section, ADMISSION_YEAR);
    const description = courseSectionDescription(loaderData.name, section, ADMISSION_YEAR);
    return {
      meta: pageMeta({
        title,
        description,
        path,
        keywords: [
          `${loaderData.name} ${courseSectionLabels[section].toLowerCase()}`,
          `online ${loaderData.name} ${section}`,
        ],
      }),
      links: canonical(path),
      scripts: [
        jsonLd(webPageSchema({ name: title, description, path })),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Courses", href: "/courses" },
            { name: loaderData.name, href: `/courses/${params.course}` },
            { name: courseSectionLabels[section], href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">Section not found</h1>
    </div>
  ),
});

function Page() {
  const { course, section } = Route.useParams();
  const found = courseContentBySlug(course)!;
  const family = getCourseFamily(course) ?? found.family;
  const key = section as CourseSectionKey;
  const label = courseSectionLabels[key];
  const pillar = `/courses/${course}`;

  return (
    <>
      <div className="border-b border-border bg-cream">
        <div className="container-page py-6 sm:py-10">
          <Breadcrumbs
            items={[
              { name: "Courses", href: "/courses" },
              { name: family.name, href: pillar },
              { name: label, href: `${pillar}/${section}` },
            ]}
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {family.name} · {label}
          </p>
          <h1 className="mt-2 max-w-4xl font-display text-[1.6rem] font-bold leading-tight sm:text-4xl">
            {courseSectionTitle(family.name, key, ADMISSION_YEAR)}
          </h1>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
            {courseSectionDescription(family.name, key, ADMISSION_YEAR)}
          </p>
          <div className="mt-5">
            <BackToPillar href={pillar} label={`Back to ${family.name} overview`} />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <main className="min-w-0 space-y-10">
          <Section title={`${family.name} ${label.toLowerCase()}`} tone="cream">
            <CourseSectionBody section={key} family={family} content={found.content} />
          </Section>

          <Section title={`Universities offering ${family.name}`}>
            <UniversityTileGrid offers={family.offers} />
          </Section>

          <SectionUrlGrid base={pillar} active={key} title={`More on ${family.name}`} />

          {key !== "faq" && (
            <section id="faqs" className="scroll-mt-36">
              <Faq items={found.content.faqs.slice(0, 6)} title={`${family.name} FAQs`} />
            </section>
          )}

          <Section title="Related">
            <LinkTiles
              links={family.specialisations.slice(0, 8).map((s) => ({
                label: `${family.shortName} in ${s.name}`,
                href: `/courses/${course}/specialisation/${s.slug}`,
              }))}
            />
          </Section>

          <FinalCta family={family} />
        </main>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-28 lg:self-start">
          <LeadCaptureCard title={`Get free ${family.name} guidance`} />
          <TrustCard />
        </aside>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(found.content.faqs.slice(0, 6))) }}
      />
    </>
  );
}
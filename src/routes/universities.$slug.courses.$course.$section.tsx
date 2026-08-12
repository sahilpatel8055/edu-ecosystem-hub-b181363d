import { createFileRoute, notFound } from "@tanstack/react-router";
import { AuthorBox, LinkCluster, References UpdatedStamp } from "@/components/common/Blocks";
import { ContentSection, DetailLayout } from "@/components/templates/DetailLayout";
import { SectionUrlGrid } from "@/components/course/SectionHub";
import { UniCourseSectionBody } from "@/components/university/UniCourseSectionBody";
import { RelatedPageLinks } from "@/components/university/InsightSections";
import { getSpecialisation } from "@/data";
import { approvalText, offeringLinks, offeringProfile, providerLinks } from "@/lib/entities";
import {
  courseSectionLabels,
  isCourseSection,
  uniCourseSectionDescription,
  uniCourseSectionTitle,
  type CourseSectionKey,
} from "@/lib/courseSections";
import { ADMISSION_YEAR } from "@/data/course-pages/types";
import { breadcrumbSchema, canonical, faqSchema, jsonLd, pageMeta, webPageSchema } from "@/lib/seo";

/** /universities/{university}/courses/{course}/{section} */
export const Route = createFileRoute("/universities/$slug/courses/$course/$section")({
  loader: ({ params }) => {
    const profile = offeringProfile(params.slug, params.course);
    if (!profile || !isCourseSection(params.section)) throw notFound();
    return {
      universityName: profile.university.record.name,
      universityShort: profile.university.record.shortName,
      programmeName: profile.programme.record.name,
      lastUpdated: profile.offering.lastUpdated,
    };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData || !isCourseSection(params.section)) {
      return { meta: [{ title: "Section not available" }, { name: "robots", content: "noindex" }] };
    }
    const section = params.section;
    const path = `/universities/${params.slug}/courses/${params.course}/${section}`;
    const title = uniCourseSectionTitle(
      loaderData.universityShort,
      loaderData.programmeName,
      section,
      ADMISSION_YEAR,
    );
    const description = uniCourseSectionDescription(
      loaderData.universityName,
      loaderData.programmeName,
      section,
      ADMISSION_YEAR,
    );
    return {
      meta: pageMeta({
        title,
        description,
        path,
        modifiedTime: loaderData.lastUpdated,
        author: "AVEDU Editorial Desk",
        keywords: [
          `${loaderData.universityShort} ${loaderData.programmeName} ${section.replace("-", " ")}`,
        ],
      }),
      links: canonical(path),
      scripts: [
        jsonLd(webPageSchema({ name: title, description, path })),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Universities", href: "/universities" },
            { name: loaderData.universityShort, href: `/universities/${params.slug}` },
            {
              name: loaderData.programmeName,
              href: `/universities/${params.slug}/courses/${params.course}`,
            },
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
  const { slug, course, section } = Route.useParams();
  const profile = offeringProfile(slug, course)!;
  const { offering, university, programme } = profile;
  const u = university.record;
  const p = programme.record;
  const key = section as CourseSectionKey;
  const label = courseSectionLabels[key];
  const pillar = `/universities/${u.slug}/courses/${p.slug}`;

  const faqs = [
    {
      question: `What is the ${p.name} fee at ${u.shortName}?`,
      answer: `The ${p.name} at ${u.shortName} sits in the ${p.feeRangeLabel} band across the full ${offering.durationLabel} programme, verified against the university's official fee page.`,
    },
    { question: `What is the eligibility for ${p.name} at ${u.shortName}?`, answer: p.eligibility },
    {
      question: `Which specialisations are available?`,
      answer: offering.specialisations.map((s) => getSpecialisation(p.slug, s)?.name ?? s).join(", "),
    },
    {
      question: `Is this ${p.name} approved?`,
      answer: `${u.name} holds ${approvalText(u)}, so the degree carries the same recognition as the equivalent on-campus programme.`,
    },
  ];

  return (
    <>
      <DetailLayout
        crumbs={[
          { name: "Universities", href: "/universities" },
          { name: u.shortName, href: `/universities/${u.slug}` },
          { name: p.shortName, href: pillar },
          { name: label, href: `${pillar}/${section}` },
        ]}
        eyebrow={`${u.shortName} ${p.shortName} · ${label}`}
        title={uniCourseSectionTitle(u.shortName, p.name, key, ADMISSION_YEAR)}
        subtitle={uniCourseSectionDescription(u.name, p.name, key, ADMISSION_YEAR)}
        meta={<UpdatedStamp date={offering.lastUpdated} verified={offering.verified} />}
        tocSections={[]}
        faqs={faqs}
        sidebarExtras={
          <>
            <LinkCluster title={`Other ${u.shortName} programmes`} links={offeringLinks(u.slug)} />
            <LinkCluster title={`${p.name} at other universities`} links={providerLinks(p.slug)} />
          </>
        }
      >
        <ContentSection title={label}>
          <UniCourseSectionBody section={key} profile={profile} faqs={faqs} />
        </ContentSection>

        <SectionUrlGrid base={pillar} active={key} title={`More on ${u.shortName} ${p.shortName}`} />

        <RelatedPageLinks
          title="Back to the full programme page"
          links={[
            { label: `${u.shortName} ${p.name} — complete guide`, href: pillar },
            { label: `${u.shortName} overview`, href: `/universities/${u.slug}` },
            { label: `${p.name} across universities`, href: `/courses/${p.slug}` },
          ]}
        />

        <AuthorBox />
        <References items={[{ label: "UGC-DEB entitled programme list", href: "https://deb.ugc.ac.in/" }]} />
      </DetailLayout>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
    </>
  );
}
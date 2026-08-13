import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentSection, DetailLayout } from "@/components/templates/DetailLayout";
import {
  AuthorBox,
  ProsCons,
  References,
  RelatedLinkGrid,
  StepList,
  UpdatedStamp,
} from "@/components/common/Blocks";
import { LinkCluster } from "@/components/common/Blocks";
import { UniversityMasthead } from "@/components/common/UniversityMasthead";
import { AppLink } from "@/components/common/AppLink";
import { ApprovalsSection } from "@/components/university/ApprovalsSection";
import { CourseLevelTabs } from "@/components/university/CourseLevelTabs";
import {
  AdmissionSection,
  ScholarshipList,
  SourceInformation,
} from "@/components/university/DataSections";
import {
  AdmissionInsightSection,
  CareerOpportunitiesSection,
  ExaminationPatternSection,
  RelatedPageLinks,
  ScholarshipInsightSection,
} from "@/components/university/InsightSections";
import {
  UniversityAdvantages,
  UniversityCareerSupport,
  UniversityComparison,
  UniversityConsiderations,
  UniversityDegreeFacts,
  UniversityGlance,
  UniversityLearningExperience,
  UniversityReviews,
  UniversityScholarshipCTA,
  UniversitySpecialisations,
  UniversitySuitability,
} from "@/components/university/HubSections";
import { feeTableFor } from "@/data/university-fee-tables";
import { degreeSample } from "@/lib/assets";
import { FeeStructureTable } from "@/components/university/FeeStructureTable";
import { SampleDegreeSection } from "@/components/university/SampleDegreeSection";
import { SectionBanner } from "@/components/common/SectionBanner";
import { HiringPartners } from "@/components/university/HiringPartners";
import { sectionLabels, universitySectionPages } from "@/lib/insightsData";
import {
  admissionOf,
  getUniversityBySlug,
  scholarshipsOf,
  sourcesForUniversity,
} from "@/lib/universityData";

import {
  approvalText,
  articleLinks,
  comparisonLinks,
  offeringLinks,
  universityLinks,
  universityProfile,
} from "@/lib/entities";
import {
  breadcrumbSchema,
  canonical,
  collegeSchema,
  faqSchema,
  howToSchema,
  itemListSchema,
  jsonLd,
  pageMeta,
} from "@/lib/seo";

export const Route = createFileRoute("/universities/$slug/")({
  loader: ({ params }) => {
    const profile = universityProfile(params.slug);
    if (!profile) throw notFound();
    const u = profile.record;
    return {
      slug: u.slug,
      name: u.name,
      shortName: u.shortName,
      summary: u.summary,
      lastUpdated: u.lastUpdated,
      city: u.city,
      state: u.state,
      rating: u.rating,
      reviewCount: u.reviewCount,
      websiteUrl: u.websiteUrl,
      admissionProcess: u.admissionProcess,
    };
  },
  head: ({ params, loaderData }) => {
    const path = `/universities/${params.slug}`;
    if (!loaderData) {
      return { meta: [{ title: "University not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.shortName} — Fees, Courses, Approvals & Admission 2026`;
    const description = `${loaderData.name}: UGC approval status, programme-wise fees, eligibility, admission process, placements, pros and cons, and verified student ratings.`;
    return {
      meta: pageMeta({
        title,
        description,
        path,
        modifiedTime: loaderData.lastUpdated,
        author: "AVEDU Editorial Desk",
        keywords: [
          `${loaderData.shortName} fees`,
          `${loaderData.shortName} admission`,
          `${loaderData.shortName} review`,
          `${loaderData.shortName} courses`,
        ],
      }),
      links: canonical(path),
      scripts: [
        jsonLd(
          collegeSchema({
            name: loaderData.name,
            description: loaderData.summary,
            path,
            city: loaderData.city,
            state: loaderData.state,
            url: loaderData.websiteUrl,
            rating: loaderData.rating,
            reviewCount: loaderData.reviewCount,
          }),
        ),
        jsonLd(
          howToSchema({
            name: `How to apply to ${loaderData.shortName}`,
            steps: loaderData.admissionProcess,
          }),
        ),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Universities", href: "/universities" },
            { name: loaderData.shortName, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
  notFoundComponent: UniversityNotFound,
});

function UniversityNotFound() {
  return (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">University not found</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This profile is not published yet. Browse the full directory instead.
      </p>
      <AppLink
        to="/universities"
        className="mt-6 inline-block rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground"
      >
        All universities
      </AppLink>
    </div>
  );
}

function Page() {
  const { slug } = Route.useParams();
  const profile = universityProfile(slug)!;
  const u = profile.record;
  const path = profile.path;
  const json = getUniversityBySlug(slug);
  const hasFeeTable = Boolean(feeTableFor(slug));
  const hasDegreeSample = Boolean(degreeSample(slug));

  const faqs = [
    {
      question: `Is a degree from ${u.shortName} valid for jobs and higher studies?`,
      answer: `Yes. ${u.name} holds ${approvalText(u)}. Degrees from UGC-entitled online programmes carry the same recognition as the equivalent on-campus degree for employment and further study.`,
    },
    {
      question: `What is the fee range at ${u.shortName}?`,
      answer: `Programmes at ${u.shortName} fall in the ${u.feeRangeLabel} range. Programme-wise figures are published on each course page and updated every admission cycle.`,
    },
    {
      question: `What documents are required for ${u.shortName} admission?`,
      answer: u.documentsRequired.join(", ") + ".",
    },
    {
      question: `How do I apply to ${u.shortName}?`,
      answer: u.admissionProcess.join(" → ") + ".",
    },
  ];

  return (
    <>
      <DetailLayout
        crumbs={[
          { name: "Universities", href: "/universities" },
          { name: u.shortName, href: path },
        ]}
        hero={<UniversityMasthead university={u} />}
        eyebrow={`${u.type ? `${u.type} university · ` : ""}${u.modes.join(" / ")}`}
        title={`${u.name}: Fees, Courses, Approvals & Admission 2026`}
        subtitle={u.summary}
        meta={<UpdatedStamp date={u.lastUpdated} verified={u.verified} />}
        tocSections={[
          "At a glance",
          "Overview",
          "Approvals & recognition",
          "Courses & fees",
          ...(hasFeeTable ? ["Fee structure"] : []),
          "Specialisations",
          ...(hasDegreeSample ? ["Degree & certificate"] : []),
          "Admission process",
          "Examination pattern",
          "Learning experience",
          "Placement & career",
          "Scholarships",
          "Why consider",
          "Things to consider",
          "Who it suits",
          "Student reviews",
          "Compare universities",
          "FAQs",
          "Related links",
        ]}

        faqs={faqs}
        sidebarExtras={
          <>
            <LinkCluster title={`${u.shortName} programmes`} links={offeringLinks(u.slug)} />
            <LinkCluster title="Compare with" links={comparisonLinks(u.slug, 5)} />
          </>
        }
        related={
          <RelatedLinkGrid
            groups={[
              { title: `${u.shortName} courses`, links: offeringLinks(u.slug) },
              { title: "Similar universities", links: universityLinks(u.slug) },
              { title: "Comparisons", links: comparisonLinks(u.slug) },
              { title: "Related reading", links: articleLinks(4) },
            ]}
          />
        }
      >
        <ContentSection title="At a glance">
          <UniversityGlance slug={slug} />
        </ContentSection>


        <ContentSection title="Overview">
          {u.verdict && <p>{u.verdict}</p>}
          <ul className="grid gap-2 sm:grid-cols-2">
            {u.highlights.map((h) => (
              <li key={h} className="rounded-lg bg-secondary px-3 py-2 text-sm text-foreground">
                {h}
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection title="Approvals & recognition">
          <ApprovalsSection
            approvals={u.approvals}
            shortName={u.shortName}
            json={json ?? undefined}
            fallbackRows={u.approvals.map((a) => [a.body, a.status] as [string, string])}
          />
        </ContentSection>

        <ContentSection title="Courses & fees">
          <CourseLevelTabs
            offerings={profile.offerings}
            universitySlug={u.slug}
            feeFallback={u.feeRangeLabel}
          />
        </ContentSection>


        {hasFeeTable && (
          <ContentSection title="Fee structure">
            <FeeStructureTable universitySlug={slug} universityShort={u.shortName} />
          </ContentSection>
        )}

        <ContentSection title="Specialisations">
          <UniversitySpecialisations slug={slug} />
        </ContentSection>

        {hasDegreeSample && (
          <ContentSection title="Degree & certificate">
            <div className="space-y-5">
              <SampleDegreeSection universityName={u.name} universitySlug={slug} />
              <UniversityDegreeFacts slug={slug} />
            </div>
          </ContentSection>
        )}

        <ContentSection title="Admission process" tone="admission">
          <div className="space-y-5">
            <SectionBanner kind="admission" />
            <AdmissionInsightSection universitySlug={slug} universityShort={u.shortName} />
            <AdmissionSection admissions={admissionOf(slug)} />
          </div>
        </ContentSection>

        <ContentSection title="Examination pattern" tone="exam">
          <SectionBanner kind="examination" />
          <ExaminationPatternSection universitySlug={slug} universityShort={u.shortName} />
        </ContentSection>

        <ContentSection title="Learning experience">
          <UniversityLearningExperience slug={slug} shortName={u.shortName} />
        </ContentSection>

        <ContentSection title="Placement & career">
          <div className="space-y-5">
            <SectionBanner kind="placement" />
            <UniversityCareerSupport slug={slug} shortName={u.shortName} />
            <HiringPartners universitySlug={slug} universityShort={u.shortName} />
            <CareerOpportunitiesSection universitySlug={slug} universityShort={u.shortName} />
          </div>
        </ContentSection>

        <ContentSection title="Scholarships">
          <div className="space-y-5">
            <ScholarshipInsightSection universitySlug={slug} universityShort={u.shortName} />
            <ScholarshipList items={scholarshipsOf(slug)} />
            <UniversityScholarshipCTA slug={slug} shortName={u.shortName} />
          </div>
        </ContentSection>

        <ContentSection title="Why consider">
          <UniversityAdvantages slug={slug} shortName={u.shortName} />
        </ContentSection>

        <ContentSection title="Things to consider">
          <UniversityConsiderations slug={slug} shortName={u.shortName} />
        </ContentSection>

        <ContentSection title="Who it suits">
          <UniversitySuitability slug={slug} />
        </ContentSection>

        <ContentSection title="Student reviews">
          <UniversityReviews rating={u.rating} reviewCount={u.reviewCount} shortName={u.shortName} />
        </ContentSection>

        <ContentSection title="Compare universities">
          <UniversityComparison slug={slug} shortName={u.shortName} />
        </ContentSection>


        <RelatedPageLinks
          title={`${u.shortName} guides`}
          links={universitySectionPages(slug).map((sec) => ({
            label: `${u.shortName} ${sectionLabels[sec].toLowerCase()}`,
            href: `/universities/${slug}/${sec}`,
          }))}
        />

        {u.pros.length > 0 && u.cons.length > 0 && (
          <ContentSection title="Pros and cons">
            <ProsCons pros={u.pros} cons={u.cons} />
          </ContentSection>
        )}

        {json && <SourceInformation sources={sourcesForUniversity(json)} />}

        <AuthorBox />
        <References
          items={[
            { label: "UGC-DEB entitled institutions list", href: "https://deb.ugc.ac.in/" },
            { label: "NAAC accreditation status", href: "https://www.naac.gov.in/" },
          ]}
        />
      </DetailLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              offeringLinks(u.slug).map((l) => ({ name: l.label, href: l.href })),
              `${u.shortName} programmes`,
            ),
          ),
        }}
      />
    </>
  );
}

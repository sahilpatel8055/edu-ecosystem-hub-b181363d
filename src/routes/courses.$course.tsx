import { createFileRoute, notFound } from "@tanstack/react-router";
import { ContentSection, DetailLayout } from "@/components/templates/DetailLayout";
import {
  AuthorBox,
  DataTable,
  LinkCluster,
  QuickFacts,
  References,
  RelatedLinkGrid,
  StepList,
  StickyMobileCTA,
  UpdatedStamp,
} from "@/components/common/Blocks";
import { AppLink } from "@/components/common/AppLink";
import { getUniversity } from "@/data";
import { articleLinks, comparisonLinks, programmeLinks, programmeProfile, providerLinks, scholarshipLinks } from "@/lib/entities";
import {
  breadcrumbSchema,
  canonical,
  courseSchema,
  faqSchema,
  itemListSchema,
  jsonLd,
  pageMeta,
} from "@/lib/seo";

export const Route = createFileRoute("/courses/$course")({
  loader: ({ params }) => {
    const profile = programmeProfile(params.course);
    if (!profile) throw notFound();
    const p = profile.record;
    return {
      name: p.name,
      summary: p.summary,
      level: p.level,
      feeRangeLabel: p.feeRangeLabel,
      durationYears: p.durationYears,
      providers: profile.offerings.length,
    };
  },
  head: ({ params, loaderData }) => {
    const path = `/courses/${params.course}`;
    if (!loaderData) {
      return { meta: [{ title: "Course not found" }, { name: "robots", content: "noindex" }] };
    }
    const title = `${loaderData.name}: Fees, Eligibility, Specialisations & Best Universities 2026`;
    const description = `${loaderData.name} in India — ${loaderData.durationYears}-year ${loaderData.level} degree, ${loaderData.feeRangeLabel} fee range, ${loaderData.providers} universities compared, specialisations, eligibility and career scope.`;
    return {
      meta: pageMeta({
        title,
        description,
        path,
        keywords: [
          `${loaderData.name} fees`,
          `${loaderData.name} eligibility`,
          `best universities for ${loaderData.name}`,
          `${loaderData.name} specialisations`,
        ],
      }),
      links: canonical(path),
      scripts: [
        jsonLd(
          courseSchema({
            name: loaderData.name,
            description: loaderData.summary,
            path,
            level: loaderData.level,
            mode: "online",
          }),
        ),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Courses", href: "/courses" },
            { name: loaderData.name, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">Course not found</h1>
      <AppLink to="/courses" className="mt-6 inline-block text-sm font-semibold text-brand hover:underline">
        Browse all courses →
      </AppLink>
    </div>
  ),
});

function Page() {
  const { course } = Route.useParams();
  const profile = programmeProfile(course)!;
  const p = profile.record;

  const faqs = [
    { question: `What is the eligibility for ${p.name}?`, answer: p.eligibility },
    {
      question: `How much does ${p.name} cost in India?`,
      answer: `Across UGC-entitled universities, ${p.name} typically falls in the ${p.feeRangeLabel} band for the full ${p.durationYears}-year programme. University-wise figures are on each provider page.`,
    },
    {
      question: `Which universities offer ${p.name} online?`,
      answer: profile.offerings
        .map((o) => getUniversity(o.universitySlug)?.shortName ?? o.universitySlug)
        .join(", ") + ".",
    },
    {
      question: `Is an online ${p.shortName} valid for government jobs?`,
      answer: `Yes, provided the university is UGC-entitled or DEB-approved for that programme. The degree carries the same status as the on-campus equivalent.`,
    },
  ];

  return (
    <>
      <DetailLayout
        crumbs={[
          { name: "Courses", href: "/courses" },
          { name: p.name, href: profile.path },
        ]}
        eyebrow={`${p.level} · ${p.durationYears} years`}
        title={`${p.name}: Fees, Eligibility, Specialisations & Best Universities`}
        subtitle={p.summary}
        meta={<UpdatedStamp date="2026-08-07" verified={p.verified} />}
        tocSections={[
          "Quick facts",
          "Overview",
          "Who is it for",
          "Universities offering this course",
          "Specialisations",
          "Fee structure",
          "Eligibility",
          "Admission process",
          "Career scope",
          "FAQs",
          "Related links",
        ]}
        faqs={faqs}
        sidebarExtras={
          <>
            <LinkCluster title="Universities offering this" links={providerLinks(p.slug)} />
            <LinkCluster title="Other programmes" links={programmeLinks()} />
          </>
        }
        related={
          <RelatedLinkGrid
            groups={[
              { title: "Universities offering this course", links: providerLinks(p.slug) },
              { title: "Other programmes", links: programmeLinks() },
              { title: "Comparisons", links: comparisonLinks() },
              { title: "Scholarships", links: scholarshipLinks() },
            ]}
          />
        }
      >
        <QuickFacts
          items={[
            { label: "Level", value: p.level },
            { label: "Duration", value: `${p.durationYears} years` },
            { label: "Mode", value: p.mode.join(", ") },
            { label: "Fee range", value: p.feeRangeLabel },
            { label: "Universities", value: profile.offerings.length },
            { label: "Specialisations", value: profile.specialisations.length },
          ]}
        />

        <ContentSection title="Overview">
          <p>{p.summary}</p>
          <p>
            The programme runs {p.durationYears} years in {p.mode.join(" / ")} mode and is offered by{" "}
            {profile.offerings.length} universities tracked on this platform, all of them UGC-entitled or DEB-approved
            for the award.
          </p>
        </ContentSection>

        <ContentSection title="Who is it for">
          <ul className="grid gap-2 sm:grid-cols-2">
            {p.whoIsItFor.map((w) => (
              <li key={w} className="rounded-lg bg-secondary px-3 py-2 text-sm text-foreground">
                {w}
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection title="Universities offering this course">
          <DataTable
            caption={`Universities offering ${p.name}`}
            head={["University", "Duration", "Fee range", "Specialisations"]}
            rows={profile.offerings.map((o) => {
              const u = getUniversity(o.universitySlug);
              return [
                <AppLink
                  key={o.id}
                  to={`/universities/${o.universitySlug}/courses/${p.slug}`}
                  className="font-semibold text-brand hover:underline"
                >
                  {u?.shortName ?? o.universitySlug}
                </AppLink>,
                o.durationLabel,
                u?.feeRangeLabel ?? p.feeRangeLabel,
                o.specialisations.length,
              ];
            })}
          />
        </ContentSection>

        <ContentSection title="Specialisations">
          <DataTable
            caption={`${p.name} specialisations`}
            head={["Specialisation", "Core subjects", "Career paths"]}
            rows={profile.specialisations.map((s) => [
              s.name,
              s.coreSubjects.slice(0, 3).join(", "),
              s.careerPaths.slice(0, 3).join(", "),
            ])}
          />
        </ContentSection>

        <ContentSection title="Fee structure">
          <p>
            The {p.name} fee band across tracked universities is {p.feeRangeLabel} for the full programme. Most
            universities allow semester-wise payment and no-cost EMI. University-specific totals are published on the
            university-course pages once confirmed officially.
          </p>
        </ContentSection>

        <ContentSection title="Eligibility">
          <p>{p.eligibility}</p>
        </ContentSection>

        <ContentSection title="Admission process">
          <StepList
            steps={[
              "Shortlist a UGC-entitled university offering the specialisation you want",
              "Register on the university admission portal",
              "Submit academic documents and photo ID",
              "Complete document verification",
              "Pay the first instalment and confirm enrolment",
            ]}
          />
        </ContentSection>

        <ContentSection title="Career scope">
          <ul className="grid gap-2 sm:grid-cols-2">
            {profile.specialisations.flatMap((s) => s.careerPaths).slice(0, 8).map((c) => (
              <li key={c} className="rounded-lg bg-secondary px-3 py-2 text-sm text-foreground">
                {c}
              </li>
            ))}
          </ul>
        </ContentSection>

        <AuthorBox />
        <References
          items={[
            { label: "UGC-DEB entitled programme list", href: "https://deb.ugc.ac.in/" },
            { label: "University Grants Commission", href: "https://www.ugc.gov.in/" },
          ]}
        />
      </DetailLayout>
      <StickyMobileCTA label={`Get ${p.shortName} guidance`} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              providerLinks(p.slug).map((l) => ({ name: l.label, href: l.href })),
              `Universities offering ${p.name}`,
            ),
          ),
        }}
      />
      {articleLinks(0).length === 0 ? null : null}
    </>
  );
}

import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { CoursePageTemplate } from "@/components/templates/CoursePageTemplate";
import { courseContentBySlug } from "@/data/course-pages";
import { ADMISSION_YEAR } from "@/data/course-pages/types";
import { courseFamilyList, familyForProgrammeSlug } from "@/lib/courseFamily";
import { webPageSchema } from "@/lib/seo";
import { ContentSection, DetailLayout } from "@/components/templates/DetailLayout";
import { SectionUrlGrid } from "@/components/course/SectionHub";
import { PromoBanner } from "@/components/course/PromoBanner";
import {
  AuthorBox,
  DataTable,
  LinkCluster,
  QuickFacts,
  References,
  RelatedLinkGrid,
  StepList,
  UpdatedStamp,
} from "@/components/common/Blocks";
import { AppLink } from "@/components/common/AppLink";
import { getUniversity } from "@/data";
import {
  articleLinks,
  comparisonLinks,
  programmeLinks,
  programmeProfile,
  providerLinks,
  scholarshipLinks,
} from "@/lib/entities";
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
    const family = courseContentBySlug(params.course);
    if (family) return { kind: "family" as const, name: family.family.name };
    const profile = programmeProfile(params.course);
    if (!profile) {
      const rollup = familyForProgrammeSlug(params.course);
      if (rollup) throw redirect({ to: "/courses/$course", params: { course: rollup.slug } });
      throw notFound();
    }
    const p = profile.record;
    return {
      kind: "programme" as const,
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
    const found = courseContentBySlug(params.course);
    if (found) {
      const { family, content } = found;
      const title = content.seo.title.replace("{year}", String(ADMISSION_YEAR));
      const description = content.seo.description.replace("{year}", String(ADMISSION_YEAR));
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
              family.offers.map((o) => ({
                name: `${o.universityShortName} ${family.name}`,
                href: o.path,
              })),
              `Universities offering ${family.name}`,
            ),
          ),
          jsonLd(
            breadcrumbSchema([
              { name: "Home", href: "/" },
              { name: "Courses", href: "/courses" },
              { name: family.name, href: path },
            ]),
          ),
        ],
      };
    }
    if (!loaderData) {
      return { meta: [{ title: "Course not found" }, { name: "robots", content: "noindex" }] };
    }
    if (loaderData.kind !== "programme") {
      return { meta: [{ title: loaderData.name }] };
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
      <AppLink
        to="/courses"
        className="mt-6 inline-block text-sm font-semibold text-brand hover:underline"
      >
        Browse all courses →
      </AppLink>
    </div>
  ),
});

function Page() {
  const { course } = Route.useParams();
  const found = courseContentBySlug(course);
  if (found) {
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
  const profile = programmeProfile(course)!;
  const p = profile.record;
  const pillarBase = `/courses/${p.slug}`;

  const faqs = [
    { question: `What is the eligibility for ${p.name}?`, answer: p.eligibility },
    {
      question: `How much does ${p.name} cost in India?`,
      answer: `Across UGC-entitled universities, ${p.name} typically falls in the ${p.feeRangeLabel} band for the full ${p.durationYears}-year programme. University-wise figures are on each provider page.`,
    },
    {
      question: `Which universities offer ${p.name} online?`,
      answer:
        profile.offerings
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
            The programme runs {p.durationYears} years in {p.mode.join(" / ")} mode and is offered
            by {profile.offerings.length} universities tracked on this platform, all of them
            UGC-entitled or DEB-approved for the award.
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
            The {p.name} fee band across tracked universities is {p.feeRangeLabel} for the full
            programme. Most universities allow semester-wise payment and no-cost EMI.
            University-specific totals are published on the university-course pages once confirmed
            officially.
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
            {profile.specialisations
              .flatMap((s) => s.careerPaths)
              .slice(0, 8)
              .map((c) => (
                <li key={c} className="rounded-lg bg-secondary px-3 py-2 text-sm text-foreground">
                  {c}
                </li>
              ))}
          </ul>
        </ContentSection>

        <SectionUrlGrid base={pillarBase} title={`More on the ${p.name}`} />

        <PromoBanner
          variant="guidance"
          title={`Not sure which university fits your ${p.shortName}?`}
          subtitle="Talk to an AVEDU counsellor — free, unbiased and 15 minutes is all it takes."
          ctaLabel="Get free counselling"
        />

        <AuthorBox />
        <References
          items={[
            { label: "UGC-DEB entitled programme list", href: "https://deb.ugc.ac.in/" },
            { label: "University Grants Commission", href: "https://www.ugc.gov.in/" },
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

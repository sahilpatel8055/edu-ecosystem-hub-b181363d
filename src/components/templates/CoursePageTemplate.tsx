import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { SectionNav } from "@/components/common/SectionNav";
import { Faq } from "@/components/common/Faq";
import { LeadCaptureCard, TrustCard } from "@/components/common/Sidebar";
import { AppLink } from "@/components/common/AppLink";
import { CompareUniversities } from "@/components/course/CompareUniversities";
import {
  CardGrid,
  ChipList,
  FinalCta,
  GlanceTable,
  LinkTiles,
  Note,
  PlatformTrust,
  Prose,
  QuickFactGrid,
  ResponsiveTable,
  ReviewList,
  Section,
  StepFlow,
  SyllabusGrid,
  TickList,
  TwoColumnLists,
  UniversityOfferCard,
  type CourseReview,
} from "@/components/course/CourseSections";
import type { CourseContent } from "@/data/course-pages/types";
import type { CourseFamily } from "@/lib/courseFamily";

/**
 * The reusable course page. Everything is driven by `family` (dataset) and
 * `content` (editorial), so MBA, MCA, BBA, BCA, M.Com and MA all render from
 * this one template.
 */
export function CoursePageTemplate({
  family,
  content,
  year,
  reviews = [],
  relatedCourses,
  relatedArticles,
}: {
  family: CourseFamily;
  content: CourseContent;
  year: number;
  reviews?: CourseReview[];
  relatedCourses: { label: string; href: string; note?: string | undefined }[];
  relatedArticles: { label: string; href: string; note?: string | undefined }[];
}) {
  const h1 = content.seo.h1.replace("{year}", String(year)).replace("{course}", family.name);

  const sections = [
    "Overview",
    "How it works",
    "Eligibility",
    "Fees",
    "Universities",
    "Compare universities",
    "Specialisations",
    ...(content.syllabus.length ? ["Syllabus"] : []),
    "Admission",
    "Documents",
    "Learning & exams",
    "Career",
    "Salary",
    "Placement support",
    "Is it worth it",
    "Advantages & limitations",
    `${family.name} vs regular`,
    `${family.name} vs distance`,
    "Validity",
    "How to choose",
    "Reviews",
    "FAQs",
  ];

  return (
    <>
      {/* Hero */}
      <div className="border-b border-border bg-cream">
        <div className="container-page py-6 sm:py-10">
          <Breadcrumbs
            items={[
              { name: "Online Courses", href: "/online-courses" },
              { name: `${family.level} Courses`, href: `/online-courses/${family.level.toLowerCase()}` },
              { name: family.name, href: family.path },
            ]}
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {family.level === "PG" ? "Postgraduate" : "Undergraduate"} · {family.degreeName}
          </p>
          <h1 className="mt-2 max-w-4xl font-display text-[1.6rem] font-bold leading-tight sm:text-4xl">{h1}</h1>
          <p className="mt-3 max-w-2xl text-[0.92rem] leading-relaxed text-muted-foreground">{content.intro}</p>

          <div className="mt-5 flex flex-wrap gap-2.5">
            <a href="#compare-universities" className="rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-brand-foreground">
              Compare universities
            </a>
            <AppLink to="/contact" className="rounded-lg border border-brand/30 bg-card px-5 py-2.5 text-sm font-bold text-brand">
              Get free counselling
            </AppLink>
          </div>

          <div className="mt-6">
            <QuickFactGrid
              items={[
                { label: "Duration", value: family.durationLabel },
                { label: "Mode", value: "100% Online" },
                { label: "Eligibility", value: family.level === "PG" ? "Bachelor's degree" : "10+2 or equivalent" },
                { label: "Fee range", value: family.feeRangeLabel },
                { label: "Specialisations", value: family.specialisations.length ? `${family.specialisations.length} tracked` : "University dependent" },
                { label: "Learning", value: "Live + recorded" },
              ]}
            />
          </div>
        </div>
      </div>

      <SectionNav sections={sections} />

      <div className="container-page grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <main className="min-w-0 space-y-10">
          <Section title={`${family.name} at a glance`} tone="cream">
            <GlanceTable
              rows={[
                { parameter: "Course", detail: family.name },
                { parameter: "Level", detail: family.level === "PG" ? "Postgraduate" : "Undergraduate" },
                { parameter: "Duration", detail: family.durationLabel },
                { parameter: "Semesters", detail: family.semesters ? String(family.semesters) : "University dependent" },
                { parameter: "Mode", detail: "Online" },
                { parameter: "Eligibility", detail: family.level === "PG" ? "Bachelor's degree from a recognised institution" : "10+2 or equivalent" },
                { parameter: "Entrance exam", detail: family.entranceUniversities.length ? "University dependent" : "Not published by the universities tracked here" },
                { parameter: "Fee range", detail: family.feeRangeLabel },
                { parameter: "Learning", detail: "Live classes + recorded lectures" },
                { parameter: "Assessment", detail: "University dependent" },
                { parameter: "Specialisations", detail: family.specialisations.length ? `${family.specialisations.length} across ${family.offers.length} universities` : "University dependent" },
                { parameter: "Suitable for", detail: family.level === "PG" ? "Graduates and working professionals" : "Students and early-career learners" },
              ]}
            />
          </Section>

          <Section title="Overview">
            <Prose paragraphs={content.overview} />
          </Section>

          <Section title="How it works">
            <StepFlow steps={content.howItWorks} />
          </Section>

          <Section title="Who should consider it">
            <CardGrid items={content.audience} />
          </Section>

          <Section title="Eligibility">
            <CardGrid items={content.eligibility} />
            <Note>{content.eligibilityNote}</Note>
          </Section>

          <Section title="Fees" intro={content.feeNotes[0]} tone="cream">
            <ul className="mb-5 space-y-2">
              {content.feeNotes.slice(1).map((n) => (
                <li key={n} className="text-[0.86rem] leading-relaxed text-muted-foreground">
                  • {n}
                </li>
              ))}
            </ul>
            <ResponsiveTable
              caption={`${family.name} university-wise fee comparison`}
              head={["University", "Duration", "Total fee", "Semester fee", "EMI from", "Scholarships"]}
              rows={family.offers.map((o) => [
                <AppLink key={o.key} to={o.path} className="font-semibold text-brand hover:underline">
                  {o.universityShortName}
                </AppLink>,
                o.duration ?? "Not specified",
                o.fees.total ? `₹${o.fees.total.toLocaleString("en-IN")}` : "Not specified",
                o.fees.semester ? `₹${o.fees.semester.toLocaleString("en-IN")}` : "Not specified",
                o.fees.emi ? `₹${o.fees.emi.toLocaleString("en-IN")}/mo` : "Not specified",
                o.scholarships.length ? "Available" : "Not specified",
              ])}
            />
          </Section>

          <Section
            title="Universities"
            intro={`${family.offers.length} universities in our dataset publish ${family.name}. Figures below are what each university states officially — nothing is estimated.`}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {family.offers.map((o) => (
                <UniversityOfferCard key={o.key} offer={o} />
              ))}
            </div>
          </Section>

          <Section title="Compare universities" intro={`Pick the universities you are shortlisting and compare them field by field.`} tone="cream">
            <CompareUniversities family={family} />
          </Section>

          <Section
            title="Specialisations"
            intro={family.specialisations.length ? `Specialisations published by the universities offering ${family.name}. Each links to the universities that run it.` : undefined}
          >
            {family.specialisations.length ? (
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {family.specialisations.map((s) => (
                  <div key={s.slug} className="rounded-2xl border border-border bg-card p-4">
                    <p className="font-display text-sm font-bold">{s.name}</p>
                    <p className="mt-1 text-[0.75rem] text-muted-foreground">
                      Offered by {s.universities.length} universit{s.universities.length === 1 ? "y" : "ies"}
                    </p>
                    <ul className="mt-2.5 flex flex-wrap gap-1.5">
                      {s.universities.slice(0, 4).map((u) => (
                        <li key={u.slug}>
                          <AppLink
                            to={u.path}
                            className="rounded-md bg-secondary px-2 py-1 text-[0.7rem] font-semibold text-brand"
                          >
                            {u.name}
                          </AppLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-muted-foreground">
                No specialisation list has been published by the universities tracked for this course yet.
              </p>
            )}

            {content.specialisationGuide.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display text-base font-bold">Which specialisation should you choose?</h3>
                <div className="mt-3">
                  <ResponsiveTable
                    caption="Career goal to specialisation guide"
                    head={["Career goal", "Suggested specialisation"]}
                    rows={content.specialisationGuide.map((g) => [g.goal, g.specialisation])}
                  />
                </div>
                <Note>
                  This mapping is guidance for shortlisting, not a guarantee of any outcome. Confirm the specialisation is
                  actually running at the university you choose.
                </Note>
              </div>
            )}
          </Section>

          {content.syllabus.length > 0 && (
            <Section title="Syllabus">
              <SyllabusGrid semesters={content.syllabus} />
              <Note>{content.syllabusNote}</Note>
            </Section>
          )}

          <Section title="Admission" tone="cream">
            <StepFlow steps={content.admissionSteps} />
          </Section>

          <Section title="Documents">
            <TickList items={content.documents} />
            <Note>{content.documentsNote}</Note>
          </Section>

          <Section title="Learning & exams">
            <CardGrid items={content.learningFormat} columns={3} />
            <Note>{content.learningNote}</Note>
            <div className="mt-6">
              <h3 className="font-display text-base font-bold">Examination pattern</h3>
              <div className="mt-3">
                <CardGrid items={content.examPattern} />
              </div>
              <Note>{content.examNote}</Note>
            </div>
          </Section>

          <Section title="Career">
            {content.careers.length ? (
              <CardGrid items={content.careers} columns={3} />
            ) : (
              <ChipList items={[...new Set(family.offers.flatMap((o) => o.careerRoles))].slice(0, 12)} />
            )}
            <div className="mt-6">
              <h3 className="font-display text-base font-bold">Industries and career areas</h3>
              <div className="mt-3">
                <ChipList
                  items={content.industries.length ? content.industries : [...new Set(family.offers.flatMap((o) => o.industries))]}
                />
              </div>
            </div>
          </Section>

          <Section title="Salary">
            <TickList items={content.salaryFactors} />
            <Note>{content.salaryNote}</Note>
          </Section>

          <Section title="Placement support">
            <CardGrid items={content.placementServices} columns={3} />
            <Note>{content.placementNote}</Note>
          </Section>

          <Section title="Is it worth it" tone="cream">
            <TwoColumnLists
              left={{ title: "It can be worth it when", items: content.worthItYes }}
              right={{ title: "It may not suit you if", items: content.worthItNo }}
            />
          </Section>

          <Section title="Advantages & limitations">
            <TwoColumnLists
              left={{ title: "Advantages", items: content.advantages }}
              right={{ title: "Limitations", items: content.limitations }}
            />
          </Section>

          <Section title={`${family.name} vs regular`}>
            <ResponsiveTable
              caption={`${family.name} compared with a regular campus programme`}
              head={["Factor", family.name, `Regular ${family.shortName}`]}
              rows={content.vsRegular.map((r) => [r.factor, r.online, r.regular])}
            />
          </Section>

          <Section title={`${family.name} vs distance`}>
            <ResponsiveTable
              caption={`${family.name} compared with the distance mode`}
              head={["Factor", family.name, `Distance ${family.shortName}`]}
              rows={content.vsDistance.map((r) => [r.factor, r.online, r.distance])}
            />
          </Section>

          <Section title="Validity" tone="cream">
            <Prose paragraphs={content.recognition} />
            <div className="mt-5">
              <h3 className="font-display text-base font-bold">How to verify before you pay</h3>
              <div className="mt-3">
                <TickList items={content.verifyChecklist} />
              </div>
              <p className="mt-4 text-[0.82rem] text-muted-foreground">
                Official sources:{" "}
                <a href="https://deb.ugc.ac.in/" rel="nofollow noopener" target="_blank" className="font-semibold text-brand hover:underline">
                  UGC-DEB
                </a>{" "}
                ·{" "}
                <a href="https://www.ugc.gov.in/" rel="nofollow noopener" target="_blank" className="font-semibold text-brand hover:underline">
                  University Grants Commission
                </a>
              </p>
            </div>
          </Section>

          <Section title="How to choose">
            <CardGrid items={content.selectionGuide} />
          </Section>

          <Section title={`Why compare ${family.name} here`}>
            <PlatformTrust family={family} />
          </Section>

          <Section title="Reviews">
            <ReviewList reviews={reviews} />
          </Section>

          <section id="faqs" className="scroll-mt-36">
            <Faq items={content.faqs} title={`${family.name} FAQs`} />
          </section>

          <Section title="Related courses">
            <LinkTiles links={relatedCourses} />
            {relatedArticles.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display text-base font-bold">Related reading</h3>
                <div className="mt-3">
                  <LinkTiles links={relatedArticles} />
                </div>
              </div>
            )}
          </Section>

          <FinalCta family={family} />
        </main>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-28 lg:self-start">
          <LeadCaptureCard title={`Get free ${family.name} guidance`} />
          <TrustCard />
        </aside>
      </div>
    </>
  );
}

import { createFileRoute, notFound } from "@tanstack/react-router";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { LeadCaptureCard, TrustCard } from "@/components/common/Sidebar";
import {
  ChipList,
  FeeSummaryTable,
  FinalCta,
  LinkTiles,
  Note,
  Section,
  UniversityTileGrid,
} from "@/components/course/CourseSections";
import { BackToPillar, SectionUrlGrid } from "@/components/course/SectionHub";
import { courseContentBySlug } from "@/data/course-pages";
import { ADMISSION_YEAR } from "@/data/course-pages/types";
import { familySpecialisation } from "@/lib/courseFamily";
import { PubSpecialisationResearch } from "@/components/pub/PubBlocks";
import {
  breadcrumbSchema,
  canonical,
  courseSchema,
  itemListSchema,
  jsonLd,
  pageMeta,
  webPageSchema,
} from "@/lib/seo";

/** Specialisation page: /courses/{course}/specialisation/{spec} */
export const Route = createFileRoute("/courses/$course/specialisation/$spec")({
  loader: ({ params }) => {
    const match = familySpecialisation(params.course, params.spec);
    if (!match) throw notFound();
    return { courseName: match.family.name, specName: match.spec.name, providers: match.offers.length };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Specialisation not found" }, { name: "robots", content: "noindex" }] };
    }
    const path = `/courses/${params.course}/specialisation/${params.spec}`;
    const title = `${loaderData.courseName} in ${loaderData.specName} ${ADMISSION_YEAR}: Fees, Universities & Career`;
    const description = `Online ${loaderData.courseName} with a ${loaderData.specName} specialisation — ${loaderData.providers} universities offering it, fees, eligibility, subjects and career roles.`;
    return {
      meta: pageMeta({
        title,
        description,
        path,
        keywords: [
          `${loaderData.courseName} ${loaderData.specName}`,
          `online ${loaderData.specName} specialisation`,
        ],
      }),
      links: canonical(path),
      scripts: [
        jsonLd(webPageSchema({ name: title, description, path })),
        jsonLd(
          courseSchema({
            name: `${loaderData.courseName} (${loaderData.specName})`,
            description,
            path,
            mode: "online",
          }),
        ),
        jsonLd(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Courses", href: "/courses" },
            { name: loaderData.courseName, href: `/courses/${params.course}` },
            { name: loaderData.specName, href: path },
          ]),
        ),
      ],
    };
  },
  component: Page,
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl font-bold">Specialisation not found</h1>
    </div>
  ),
});

function Page() {
  const { course, spec } = Route.useParams();
  const { family, spec: specialisation, offers } = familySpecialisation(course, spec)!;
  const content = courseContentBySlug(course)?.content;
  const pillar = `/courses/${course}`;
  const roles = [...new Set(offers.flatMap((o) => o.careerRoles))].slice(0, 14);
  const industries = [...new Set(offers.flatMap((o) => o.industries))].slice(0, 14);

  return (
    <>
      <div className="border-b border-border bg-cream">
        <div className="container-page py-6 sm:py-10">
          <Breadcrumbs
            items={[
              { name: "Courses", href: "/courses" },
              { name: family.name, href: pillar },
              { name: specialisation.name, href: `${pillar}/specialisation/${spec}` },
            ]}
          />
          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
            {family.name} · Specialisation
          </p>
          <h1 className="mt-2 max-w-4xl font-display text-[1.6rem] font-bold leading-tight sm:text-4xl">
            {family.name} in {specialisation.name}
          </h1>
          <p className="mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
            {offers.length} universities in our dataset run the {specialisation.name} track of the{" "}
            {family.name}. Everything below is what those universities publish officially.
          </p>
          <div className="mt-5">
            <BackToPillar href={pillar} label={`Back to ${family.name} overview`} />
          </div>
        </div>
      </div>

      <div className="container-page grid gap-10 py-10 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14">
        <main className="min-w-0 space-y-10">
          <Section title="Researched specialisation record" tone="cream">
            <PubSpecialisationResearch slug={spec} familySlug={course} />
          </Section>

          <Section
            title={`Universities offering ${specialisation.name}`}
            intro="Each tile links to the university-course page with the full fee, eligibility and admission detail."
            tone="tint"
          >
            <UniversityTileGrid offers={offers.length ? offers : family.offers} />
          </Section>

          <Section title="Fees for this specialisation" tone="cream">
            <FeeSummaryTable offers={offers.length ? offers : family.offers} />
            <Note>
              Specialisation choice rarely changes the {family.name} fee — the figures above are the
              programme fees published by each university.
            </Note>
          </Section>

          <Section title="Career roles">
            {roles.length ? (
              <ChipList items={roles} />
            ) : (
              <p className="text-sm text-muted-foreground">
                The universities offering this track have not published a role list yet.
              </p>
            )}
            {industries.length > 0 && (
              <div className="mt-6">
                <h3 className="font-display text-base font-bold">Industries hiring</h3>
                <div className="mt-3">
                  <ChipList items={industries} />
                </div>
              </div>
            )}
          </Section>

          {content && content.eligibility.length > 0 && (
            <Section title="Eligibility">
              <ChipList items={content.eligibility.map((e) => e.title)} />
              <Note>{content.eligibilityNote}</Note>
            </Section>
          )}

          <SectionUrlGrid base={pillar} title={`More on the ${family.name}`} />

          <Section title={`Other ${family.shortName} specialisations`}>
            <LinkTiles
              links={family.specialisations
                .filter((s) => s.slug !== spec)
                .slice(0, 12)
                .map((s) => ({
                  label: `${family.shortName} in ${s.name}`,
                  href: `${pillar}/specialisation/${s.slug}`,
                  note: `${s.universities.length} universities`,
                }))}
            />
          </Section>

          <FinalCta family={family} />
        </main>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-28 lg:self-start">
          <LeadCaptureCard title={`Get ${specialisation.name} guidance`} />
          <TrustCard />
        </aside>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListSchema(
              offers.map((o) => ({ name: `${o.universityShortName} ${family.name}`, href: o.path })),
              `${family.name} in ${specialisation.name}`,
            ),
          ),
        }}
      />
    </>
  );
}
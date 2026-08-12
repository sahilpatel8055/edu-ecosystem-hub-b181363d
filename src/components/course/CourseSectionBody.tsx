import { Faq } from "@/components/common/Faq";
import {
  ChipList,
  FeeSummaryTable,
  InfoBoxGrid,
  Note,
  Prose,
  ResponsiveTable,
  SpecialisationShowcase,
  StepFlow,
  SyllabusGrid,
  TickList,
} from "@/components/course/CourseSections";
import type { CourseContent } from "@/data/course-pages/types";
import type { CourseFamily } from "@/lib/courseFamily";
import type { CourseSectionKey } from "@/lib/courseSections";

/**
 * Full body of a single course section, rendered both inside the pillar and
 * standalone on `/courses/{course}/{section}`. One source, so the section page
 * can never disagree with the pillar.
 */
export function CourseSectionBody({
  section,
  family,
  content,
}: {
  section: CourseSectionKey;
  family: CourseFamily;
  content: CourseContent;
}) {
  switch (section) {
    case "fees":
      return (
        <>
          <Prose paragraphs={content.feeNotes.slice(0, 1)} />
          <ul className="mb-5 space-y-2">
            {content.feeNotes.slice(1).map((n) => (
              <li key={n} className="text-[0.9rem] leading-relaxed text-muted-foreground">
                • {n}
              </li>
            ))}
          </ul>
          <FeeSummaryTable offers={family.offers} />
        </>
      );
    case "eligibility":
      return (
        <>
          <InfoBoxGrid items={content.eligibility} />
          <Note>{content.eligibilityNote}</Note>
        </>
      );
    case "admission":
      return (
        <>
          <StepFlow steps={content.admissionSteps} />
          <div className="mt-6">
            <h3 className="font-display text-base font-bold">Documents required</h3>
            <div className="mt-3">
              <TickList items={content.documents} />
            </div>
            <Note>{content.documentsNote}</Note>
          </div>
        </>
      );
    case "syllabus":
      return content.syllabus.length ? (
        <>
          <SyllabusGrid semesters={content.syllabus} />
          <Note>{content.syllabusNote}</Note>
        </>
      ) : (
        <p className="text-sm text-muted-foreground">
          The universities tracked for {family.name} have not published a common semester-wise
          syllabus. University-specific curricula are shown on each university-course page.
        </p>
      );
    case "specialisations":
      return (
        <>
          {family.specialisations.length ? (
            <SpecialisationShowcase items={family.specialisations} />
          ) : (
            <p className="text-sm text-muted-foreground">
              No specialisation list has been published for {family.name} yet.
            </p>
          )}
          {content.specialisationGuide.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-base font-bold">
                Which specialisation should you choose?
              </h3>
              <div className="mt-3">
                <ResponsiveTable
                  caption="Career goal to specialisation guide"
                  head={["Career goal", "Suggested specialisation"]}
                  rows={content.specialisationGuide.map((g) => [g.goal, g.specialisation])}
                />
              </div>
            </div>
          )}
        </>
      );
    case "exam-pattern":
      return (
        <>
          <InfoBoxGrid items={content.examPattern} />
          <Note>{content.examNote}</Note>
          <div className="mt-6">
            <h3 className="font-display text-base font-bold">Learning format</h3>
            <div className="mt-3">
              <InfoBoxGrid items={content.learningFormat} />
            </div>
            <Note>{content.learningNote}</Note>
          </div>
        </>
      );
    case "placement":
      return (
        <>
          {content.careers.length ? (
            <InfoBoxGrid items={content.careers} />
          ) : (
            <ChipList items={[...new Set(family.offers.flatMap((o) => o.careerRoles))].slice(0, 12)} />
          )}
          <div className="mt-6">
            <h3 className="font-display text-base font-bold">Industries hiring</h3>
            <div className="mt-3">
              <ChipList
                items={
                  content.industries.length
                    ? content.industries
                    : [...new Set(family.offers.flatMap((o) => o.industries))]
                }
              />
            </div>
          </div>
          <div className="mt-6">
            <h3 className="font-display text-base font-bold">Placement support</h3>
            <div className="mt-3">
              <InfoBoxGrid items={content.placementServices} />
            </div>
            <Note>{content.placementNote}</Note>
          </div>
          <div className="mt-6">
            <h3 className="font-display text-base font-bold">What drives the salary</h3>
            <div className="mt-3">
              <TickList items={content.salaryFactors} />
            </div>
            <Note>{content.salaryNote}</Note>
          </div>
        </>
      );
    case "scholarships": {
      const rows = family.offers
        .filter((o) => o.scholarships.length)
        .map((o) => [o.universityShortName, o.scholarships.join("; ")]);
      return rows.length ? (
        <>
          <ResponsiveTable
            caption={`${family.name} scholarships by university`}
            head={["University", "Scholarship categories published"]}
            rows={rows}
          />
          <Note>
            Scholarship percentages change every intake. Confirm the current waiver on the
            university's official admission page before paying the first instalment.
          </Note>
        </>
      ) : (
        <p className="text-sm text-muted-foreground">
          None of the universities tracked for {family.name} publish a standing scholarship list.
          Waivers are usually announced per intake.
        </p>
      );
    }
    case "faq":
      return <Faq items={content.faqs} title={`${family.name} FAQs`} />;
  }
}
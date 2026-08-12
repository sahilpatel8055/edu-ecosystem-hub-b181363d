/**
 * Section sub-URL map for course silos.
 *
 * Every course pillar (`/courses/{course}`) and university-course pillar
 * (`/universities/{u}/courses/{course}`) exposes each of its major sections as
 * its own indexable URL. Keeping the key list here means routes, the pillar
 * link grid and the sitemap never drift apart.
 */
export const COURSE_SECTION_KEYS = [
  "fees",
  "eligibility",
  "admission",
  "syllabus",
  "specialisations",
  "exam-pattern",
  "placement",
  "scholarships",
  "faq",
] as const;

export type CourseSectionKey = (typeof COURSE_SECTION_KEYS)[number];

export const courseSectionLabels: Record<CourseSectionKey, string> = {
  fees: "Fees",
  eligibility: "Eligibility",
  admission: "Admission process",
  syllabus: "Syllabus & curriculum",
  specialisations: "Specialisations",
  "exam-pattern": "Exam pattern",
  placement: "Placement & career",
  scholarships: "Scholarships",
  faq: "FAQs",
};

export function isCourseSection(value: string): value is CourseSectionKey {
  return (COURSE_SECTION_KEYS as readonly string[]).includes(value);
}

/** Search-intent title for a standalone course section page. */
export function courseSectionTitle(courseName: string, section: CourseSectionKey, year: number): string {
  const map: Record<CourseSectionKey, string> = {
    fees: `${courseName} Fees ${year}: University-wise Fee Structure & EMI`,
    eligibility: `${courseName} Eligibility ${year}: Criteria, Marks & Age Limit`,
    admission: `${courseName} Admission ${year}: Process, Dates & Documents`,
    syllabus: `${courseName} Syllabus ${year}: Semester-wise Subjects`,
    specialisations: `${courseName} Specialisations ${year}: Full List & How to Choose`,
    "exam-pattern": `${courseName} Exam Pattern ${year}: Assessment & Evaluation`,
    placement: `${courseName} Placement & Career Scope ${year}: Roles & Salary`,
    scholarships: `${courseName} Scholarships ${year}: Categories & Fee Waivers`,
    faq: `${courseName} FAQs ${year}: Every Common Question Answered`,
  };
  return map[section];
}

export function courseSectionDescription(courseName: string, section: CourseSectionKey, year: number): string {
  const map: Record<CourseSectionKey, string> = {
    fees: `Complete ${courseName} fee structure for ${year} — university-wise total fee, per-semester fee, EMI options and what is included.`,
    eligibility: `${courseName} eligibility for ${year}: minimum qualification, marks required, work-experience relaxations and entrance requirements.`,
    admission: `Step-by-step ${courseName} admission process for ${year} — registration, documents, verification, fee payment and intake cycles.`,
    syllabus: `${courseName} syllabus with semester-wise subjects, electives and the curriculum notes published by the universities offering it.`,
    specialisations: `Every ${courseName} specialisation offered online, the universities running each one, and how to pick the right track.`,
    "exam-pattern": `${courseName} exam pattern for ${year}: exam mode, proctoring, internal assessment weightage and paper structure.`,
    placement: `${courseName} placement and career scope — job roles, hiring industries, salary factors and the placement support universities provide.`,
    scholarships: `${courseName} scholarships and fee waivers for ${year} — categories, eligibility and how to claim them before paying fees.`,
    faq: `Answers to the most common ${courseName} questions on fees, eligibility, validity, admission and career outcomes.`,
  };
  return map[section];
}

/** University × course variants. */
export function uniCourseSectionTitle(
  uniShort: string,
  courseName: string,
  section: CourseSectionKey,
  year: number,
): string {
  const base = `${uniShort} ${courseName}`;
  const map: Record<CourseSectionKey, string> = {
    fees: `${base} Fees ${year}: Total Fee, Semester Fee & EMI`,
    eligibility: `${base} Eligibility ${year}: Criteria & Documents`,
    admission: `${base} Admission ${year}: Process & Important Steps`,
    syllabus: `${base} Syllabus: Semester-wise Curriculum`,
    specialisations: `${base} Specialisations: Full List & Electives`,
    "exam-pattern": `${base} Exam Pattern: Assessment & Evaluation`,
    placement: `${base} Placement: Job Roles, Packages & Recruiters`,
    scholarships: `${base} Scholarships ${year}: Categories & Eligibility`,
    faq: `${base} FAQs: Fees, Admission & Validity`,
  };
  return map[section];
}

export function uniCourseSectionDescription(
  uniName: string,
  courseName: string,
  section: CourseSectionKey,
  year: number,
): string {
  const map: Record<CourseSectionKey, string> = {
    fees: `${courseName} fee structure at ${uniName} for ${year} — full programme fee, per-semester fee and EMI options, verified against the university's own schedule.`,
    eligibility: `${courseName} eligibility at ${uniName}: qualification, marks, relaxations and the documents required at admission.`,
    admission: `${courseName} admission process at ${uniName} for ${year} — the official application route, verification and enrolment steps.`,
    syllabus: `${courseName} syllabus at ${uniName}: semester-wise subjects and specialisation electives.`,
    specialisations: `${courseName} specialisations available at ${uniName}, with the elective subjects mapped to each track.`,
    "exam-pattern": `${courseName} exam pattern at ${uniName}: exam mode, proctoring, internal assessment and end-term weightage.`,
    placement: `${courseName} placement and career support at ${uniName} — job roles, indicative packages and hiring partners.`,
    scholarships: `${courseName} scholarship categories at ${uniName} for ${year}, with eligibility published only where an official source exists.`,
    faq: `Common questions about the ${courseName} at ${uniName} — fees, eligibility, specialisations and degree validity.`,
  };
  return map[section];
}
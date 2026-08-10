/**
 * Admission / Examination / Career / Scholarship data layer.
 *
 * Source: `university-admission-exam-career-scholarship-2026-27.json`.
 * This is an ADDITIONAL layer on top of the master university dataset in
 * `@/lib/universityData` — it never replaces it.
 *
 * Resolution priority for a course page:
 *   course-specific verified data → university-level verified data → nothing.
 * Nothing here invents a value: a missing field stays undefined so the UI
 * can hide it.
 */
import dataset from "@/data/university-admission-exam-career-scholarship-2026-27.json";

/* --------------------------------- types --------------------------------- */

export interface UniversityAdmissionInfo {
  mode?: string | null;
  cycles?: string | null;
  steps?: string[] | null;
  entrance_exam?: string | null;
  status?: string | null;
  source?: string | null;
}

export interface ExamPatternInfo {
  mode?: string | null;
  proctoring?: string | null;
  assessment?: string | null;
  weightage?: string | null;
  sections?: string | null;
  status?: string | null;
  note?: string | null;
}

export interface ScholarshipCriterion {
  name?: string | null;
  criterion?: string | null;
}

export interface ScholarshipInfo {
  status?: string | null;
  criteria?: ScholarshipCriterion[] | null;
  note?: string | null;
}

export interface CareerInfo {
  university_level_summary?: string | null;
  roles?: string[] | null;
  industries?: string[] | null;
  skills?: string[] | null;
  placement_support_reference?: string | null;
  source_status?: string | null;
}

export interface InsightSources {
  collegevidya?: string | null;
  admission?: string | null;
  exam?: string | null;
  placement?: string | null;
  scholarship?: string | null;
}

export interface CourseInsightRecord {
  programme_name: string;
  programme_slug: string;
  page_data_mode?: string;
  admission: {
    inherit_university_common?: boolean;
    intake?: string | null;
    course_specific_override?: UniversityAdmissionInfo | null;
  };
  exam_pattern: {
    inherit_university_common?: boolean;
    course_specific_override?: ExamPatternInfo | null;
  };
  career_opportunities: {
    inherit_university_common?: boolean;
    roles?: string[] | null;
    industries?: string[] | null;
    relevant_skills?: string[] | null;
    description?: string | null;
  };
  scholarship: {
    inherit_university_common?: boolean;
    course_specific_override?: ScholarshipInfo | null;
  };
}

export interface UniversityInsightRecord {
  university_name: string;
  university_slug: string;
  admission: UniversityAdmissionInfo;
  exam: ExamPatternInfo;
  scholarship: ScholarshipInfo;
  career: CareerInfo;
  sources?: InsightSources;
  courses: CourseInsightRecord[];
}

/** Where a resolved block came from — drives the "inherited" labelling. */
export type ResolvedOrigin = "course" | "university";

export interface Resolved<T> {
  data: T;
  origin: ResolvedOrigin;
  inherited: boolean;
}

/* -------------------------------- indexes -------------------------------- */

const records = (dataset as unknown as { universities: UniversityInsightRecord[] }).universities;

export const insightsSession = (dataset as unknown as { academic_session: string }).academic_session;

const byUniversity = new Map<string, UniversityInsightRecord>();
const byCourse = new Map<string, CourseInsightRecord>();

for (const u of records) {
  byUniversity.set(u.university_slug, u);
  for (const c of u.courses ?? []) byCourse.set(`${u.university_slug}::${c.programme_slug}`, c);
}

export const allInsightUniversities = (): UniversityInsightRecord[] => records;

export function getUniversityInfo(universitySlug: string): UniversityInsightRecord | undefined {
  return byUniversity.get(universitySlug);
}

export function getCourseInfo(universitySlug: string, courseSlug: string): CourseInsightRecord | undefined {
  return byCourse.get(`${universitySlug}::${courseSlug}`);
}

/* ------------------------------- predicates ------------------------------- */

const nonEmpty = (v: unknown): boolean =>
  Array.isArray(v) ? v.length > 0 : typeof v === "string" ? v.trim().length > 0 : v != null;

/** True when at least one field other than a status marker carries content. */
function hasContent(obj: Record<string, unknown> | null | undefined, ignore: string[] = []): boolean {
  if (!obj) return false;
  return Object.entries(obj).some(([k, v]) => !ignore.includes(k) && nonEmpty(v));
}

export const hasAdmissionContent = (a: UniversityAdmissionInfo | undefined) =>
  hasContent(a as Record<string, unknown>, ["status", "source"]);
export const hasExamContent = (e: ExamPatternInfo | undefined) =>
  hasContent(e as Record<string, unknown>, ["status"]);
export const hasScholarshipContent = (s: ScholarshipInfo | undefined) => (s?.criteria?.length ?? 0) > 0;
export const hasCareerContent = (c: CareerInfo | undefined) =>
  (c?.roles?.length ?? 0) > 0 ||
  (c?.industries?.length ?? 0) > 0 ||
  (c?.skills?.length ?? 0) > 0 ||
  nonEmpty(c?.placement_support_reference);

/**
 * A verification status is "safe to present as an official claim" only when
 * the dataset says so. Everything else renders with a caution label.
 */
export function isOfficialStatus(status?: string | null): boolean {
  return typeof status === "string" && status.startsWith("verified_official");
}

export function isUnsafeStatus(status?: string | null): boolean {
  if (!status) return true;
  return /not_safely_verified|pending|reference_only|unresolved/.test(status);
}

/* -------------------------------- resolvers ------------------------------- */

export function getAdmissionInfo(
  universitySlug: string,
  courseSlug?: string,
): (Resolved<UniversityAdmissionInfo> & { intake?: string | null }) | undefined {
  const uni = getUniversityInfo(universitySlug);
  if (!uni) return undefined;
  const course = courseSlug ? getCourseInfo(universitySlug, courseSlug) : undefined;
  const override = course?.admission?.course_specific_override;
  if (override && hasAdmissionContent(override)) {
    return { data: { ...uni.admission, ...override }, origin: "course", inherited: false, ...(course?.admission?.intake ? { intake: course.admission.intake } : {}) };
  }
  if (!hasAdmissionContent(uni.admission)) return undefined;
  return {
    data: uni.admission,
    origin: "university",
    inherited: Boolean(courseSlug),
    ...(course?.admission?.intake ? { intake: course.admission.intake } : {}),
  };
}

export function getExamPattern(universitySlug: string, courseSlug?: string): Resolved<ExamPatternInfo> | undefined {
  const uni = getUniversityInfo(universitySlug);
  if (!uni) return undefined;
  const course = courseSlug ? getCourseInfo(universitySlug, courseSlug) : undefined;
  const override = course?.exam_pattern?.course_specific_override;
  if (override && hasExamContent(override)) {
    return { data: { ...uni.exam, ...override }, origin: "course", inherited: false };
  }
  if (!hasExamContent(uni.exam)) return undefined;
  return { data: uni.exam, origin: "university", inherited: Boolean(courseSlug) };
}

export function getCareerInfo(universitySlug: string, courseSlug?: string): Resolved<CareerInfo> | undefined {
  const uni = getUniversityInfo(universitySlug);
  if (!uni) return undefined;
  const course = courseSlug ? getCourseInfo(universitySlug, courseSlug) : undefined;
  if (course) {
    const c = course.career_opportunities ?? {};
    const courseData: CareerInfo = {
      ...(c.description ? { university_level_summary: c.description } : {}),
      ...(c.roles?.length ? { roles: c.roles } : {}),
      ...(c.industries?.length ? { industries: c.industries } : {}),
      ...(c.relevant_skills?.length ? { skills: c.relevant_skills } : {}),
    };
    if (hasCareerContent(courseData) || courseData.university_level_summary) {
      return { data: courseData, origin: "course", inherited: false };
    }
  }
  if (!hasCareerContent(uni.career)) return undefined;
  return { data: uni.career, origin: "university", inherited: Boolean(courseSlug) };
}

export function getScholarshipInfo(
  universitySlug: string,
  courseSlug?: string,
): Resolved<ScholarshipInfo> | undefined {
  const uni = getUniversityInfo(universitySlug);
  if (!uni) return undefined;
  const course = courseSlug ? getCourseInfo(universitySlug, courseSlug) : undefined;
  const override = course?.scholarship?.course_specific_override;
  if (override && hasScholarshipContent(override)) {
    return { data: override, origin: "course", inherited: false };
  }
  if (!hasScholarshipContent(uni.scholarship) && !uni.scholarship?.note) return undefined;
  return { data: uni.scholarship, origin: "university", inherited: Boolean(courseSlug) };
}

export function insightSources(universitySlug: string): InsightSources | undefined {
  return getUniversityInfo(universitySlug)?.sources;
}

/* ------------------------------ audit report ------------------------------ */

export interface InsightAudit {
  universities: number;
  programmes: number;
  universityAdmission: number;
  universityExam: number;
  universityCareer: number;
  universityScholarship: number;
  courseAdmissionOverrides: number;
  courseExamOverrides: number;
  courseCareerOverrides: number;
  courseScholarshipOverrides: number;
  inheritedCourseBlocks: number;
  missingBlocks: number;
  sectionPages: number;
}

/** Development-only architecture audit (used by /tools and the dev report). */
export function auditInsights(): InsightAudit {
  const a: InsightAudit = {
    universities: records.length,
    programmes: 0,
    universityAdmission: 0,
    universityExam: 0,
    universityCareer: 0,
    universityScholarship: 0,
    courseAdmissionOverrides: 0,
    courseExamOverrides: 0,
    courseCareerOverrides: 0,
    courseScholarshipOverrides: 0,
    inheritedCourseBlocks: 0,
    missingBlocks: 0,
    sectionPages: 0,
  };
  for (const u of records) {
    if (hasAdmissionContent(u.admission)) a.universityAdmission++;
    if (hasExamContent(u.exam)) a.universityExam++;
    if (hasCareerContent(u.career)) a.universityCareer++;
    if (hasScholarshipContent(u.scholarship)) a.universityScholarship++;
    a.sectionPages += universitySectionPages(u.university_slug).length;
    for (const c of u.courses ?? []) {
      a.programmes++;
      for (const [key, resolved] of [
        ["courseAdmissionOverrides", getAdmissionInfo(u.university_slug, c.programme_slug)],
        ["courseExamOverrides", getExamPattern(u.university_slug, c.programme_slug)],
        ["courseCareerOverrides", getCareerInfo(u.university_slug, c.programme_slug)],
        ["courseScholarshipOverrides", getScholarshipInfo(u.university_slug, c.programme_slug)],
      ] as const) {
        if (!resolved) a.missingBlocks++;
        else if (resolved.origin === "course") a[key]++;
        else a.inheritedCourseBlocks++;
      }
    }
  }
  return a;
}

/* --------------------------- section page routing -------------------------- */

export type SectionKey = "admission" | "examination-pattern" | "placement" | "scholarships";

export const sectionLabels: Record<SectionKey, string> = {
  admission: "Admission",
  "examination-pattern": "Examination pattern",
  placement: "Placement & career",
  scholarships: "Scholarships",
};

/** Only sections with enough unique content become indexable pages. */
export function universitySectionPages(universitySlug: string): SectionKey[] {
  const u = getUniversityInfo(universitySlug);
  if (!u) return [];
  const out: SectionKey[] = [];
  if (hasAdmissionContent(u.admission)) out.push("admission");
  if (hasExamContent(u.exam)) out.push("examination-pattern");
  if (hasCareerContent(u.career)) out.push("placement");
  if (hasScholarshipContent(u.scholarship)) out.push("scholarships");
  return out;
}

export function hasSectionPage(universitySlug: string, section: SectionKey): boolean {
  return universitySectionPages(universitySlug).includes(section);
}

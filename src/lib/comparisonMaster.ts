import master from "@/data/university-comparison-master-2026-27.json";
import { offerings } from "@/data/offerings";
import { courseKeyForProgramme, siteSlugForMasterSlug } from "@/lib/courseMaster";

export type OfficialSource = {
  programme_url: string | null;
  fee_url: string | null;
  admission_url: string | null;
  prospectus_url: string | null;
  source_type: string | null;
  source_title: string | null;
};

export type CourseSnapshotSide = {
  available: boolean;
  programme_name?: string | null;
  duration?: string | null;
  semesters?: number | null;
  fee_total?: number | null;
  fee_status?: string | null;
  specialisations?: string[];
  eligibility?: string | null;
  entrance_exam?: string | null;
  mode?: string | null;
  last_verified?: string | null;
  official_source?: OfficialSource | null;
};

export type MasterUniversity = {
  university_name: string;
  short_name: string;
  slug: string;
  mode: string | null;
  location: string | null;
  recognition: Record<string, string | null>;
  programme_count: number;
  degrees_available: string[];
  programme_map: Record<string, CourseSnapshotSide>;
};

export type PairComparison = {
  comparison_id: string;
  university_a: string;
  university_b: string;
  canonical_university_comparison_url: string;
  course_comparison_url_pattern: string;
  default_course: string;
  common_courses: string[];
  seo: {
    title_template: string;
    course_title_template: string;
    meta_description_template: string;
    primary_intent: string;
    secondary_intents: string[];
  };
  content: { intro: string; decision_framework: string; fit_statement: string; angle: string };
  comparison_sections: { id: string; heading: string }[];
  course_snapshots: Record<string, { university_a: CourseSnapshotSide; university_b: CourseSnapshotSide }>;
};

const dataset = master as unknown as {
  academic_session: string;
  generated_on: string;
  universities: MasterUniversity[];
  all_pair_comparisons: PairComparison[];
};

export const comparisonSession = dataset.academic_session;
export const masterUniversities = dataset.universities;
export const masterPairs = dataset.all_pair_comparisons;

const byShortName = new Map(masterUniversities.map((u) => [u.short_name, u]));
const bySlug = new Map(masterUniversities.map((u) => [u.slug, u]));

export const masterUniversityByShortName = (name: string) => byShortName.get(name);
export const masterUniversityBySlug = (slug: string) => bySlug.get(slug);

/** "/compare/a-vs-b/" -> "a-vs-b" */
export const pairSlug = (pair: PairComparison) => pair.comparison_id;

const pairIndex = new Map(masterPairs.map((p) => [p.comparison_id, p]));

export function masterPairBySlug(slug: string): PairComparison | undefined {
  const direct = pairIndex.get(slug);
  if (direct) return direct;
  // tolerate reversed order in the URL
  const parts = slug.split("-vs-");
  if (parts.length !== 2) return undefined;
  return pairIndex.get(`${parts[1]}-vs-${parts[0]}`);
}

export const courseSlug = (course: string) =>
  course
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function courseFromSlug(pair: PairComparison, slug: string): string | undefined {
  return pair.common_courses.find((c) => courseSlug(c) === slug.toLowerCase());
}

export function pairUniversities(pair: PairComparison) {
  return {
    a: masterUniversityByShortName(pair.university_a),
    b: masterUniversityByShortName(pair.university_b),
  };
}

/** Courses where a snapshot exists and both universities offer it. */
export function comparableCourses(pair: PairComparison): string[] {
  return pair.common_courses.filter((c) => {
    const snap = pair.course_snapshots?.[c];
    return !!snap && snap.university_a?.available && snap.university_b?.available;
  });
}

/**
 * Fee fallback: when the comparison snapshot has no figure, use the site's own
 * verified programme dataset (same numbers the university pages publish)
 * instead of telling the reader the fee is unverified.
 */
export function datasetFeeTotal(universitySlug: string | undefined, courseName: string | undefined) {
  if (!universitySlug || !courseName) return null;
  const siteSlug = siteSlugForMasterSlug(universitySlug) ?? universitySlug;
  const wanted = courseKeyForProgramme(courseSlug(courseName));
  if (!wanted) return null;
  const rows = offerings.filter(
    (o) => o.universitySlug === siteSlug && courseKeyForProgramme(o.programmeSlug) === wanted,
  );
  for (const r of rows) {
    if (typeof r.fee.total === "number" && r.fee.total > 0) return r.fee.total;
  }
  return null;
}

export const feeLabel = (
  side: CourseSnapshotSide | undefined,
  ctx?: { universitySlug?: string | undefined; course?: string | undefined },
) => {
  if (!side?.available) return "Not offered";
  if (typeof side.fee_total === "number" && side.fee_total > 0)
    return `₹${side.fee_total.toLocaleString("en-IN")}`;
  const fromDataset = datasetFeeTotal(ctx?.universitySlug, ctx?.course);
  if (fromDataset) return `₹${fromDataset.toLocaleString("en-IN")}`;
  return "Current fee not verified";
};

export const pairPath = (pair: PairComparison) => `/compare/${pair.comparison_id}`;
export const coursePairPath = (pair: PairComparison, course: string) =>
  `/compare/${courseSlug(course)}/${pair.comparison_id}`;

export function relatedPairs(pair: PairComparison, limit = 8) {
  return masterPairs
    .filter(
      (p) =>
        p.comparison_id !== pair.comparison_id &&
        (p.university_a === pair.university_a ||
          p.university_b === pair.university_a ||
          p.university_a === pair.university_b ||
          p.university_b === pair.university_b),
    )
    .slice(0, limit);
}

/** Every comparison URL this dataset produces (pairs + valid course pairs). */
export function allComparisonPaths(): string[] {
  const paths: string[] = [];
  for (const p of masterPairs) {
    paths.push(pairPath(p));
    for (const c of comparableCourses(p)) paths.push(coursePairPath(p, c));
  }
  return paths;
}

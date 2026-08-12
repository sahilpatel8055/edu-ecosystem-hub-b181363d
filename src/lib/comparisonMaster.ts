/**
 * Single source of truth for all university-vs-university comparison pages.
 *
 * Everything here is read straight from
 * `src/data/university-comparison-master-2026-27.json`. Nothing is invented:
 * missing or unverified fields surface as an explicit "not verified" state.
 */
import master from "@/data/university-comparison-master-2026-27.json";

export interface MasterOfficialSource {
  programme_url?: string | null;
  fee_url?: string | null;
  admission_url?: string | null;
  prospectus_url?: string | null;
  source_type?: string | null;
  source_title?: string | null;
}

export interface MasterProgramme {
  available?: boolean;
  programme_name?: string | null;
  duration?: string | null;
  semesters?: number | null;
  fee_total?: number | null;
  fee_status?: string | null;
  specialisations?: string[];
  eligibility?: string | null;
  entrance_exam?: string | null;
  mode?: string | null;
  curriculum_note?: string | null;
  last_verified?: string | null;
  official_source?: MasterOfficialSource | null;
}

export interface MasterUniversity {
  university_name: string;
  short_name: string;
  slug: string;
  mode: string;
  location: string;
  recognition: {
    UGC_status?: string | null;
    UGC_DEB_status?: string | null;
    NAAC_status?: string | null;
    NIRF_information?: string | null;
    accreditation?: string | null;
  };
  programme_count?: number;
  degrees_available?: string[];
  programme_map?: Record<string, MasterProgramme>;
  official_sources?: string[];
  data_status?: string;
  last_verified?: string;
  notes?: string[];
}

export interface MasterPair {
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
  content: {
    intro: string;
    decision_framework: string;
    fit_statement: string;
    angle: string;
  };
  comparison_sections: { id: string; heading: string }[];
  course_snapshots: Record<
    string,
    {
      university_a: MasterProgramme;
      university_b: MasterProgramme;
      faq?: string[];
    }
  >;
}

const data = master as unknown as {
  academic_session: string;
  universities: MasterUniversity[];
  all_pair_comparisons: MasterPair[];
  featured_course_comparisons: { course: string; a: string; b: string }[];
};

export const ACADEMIC_SESSION = data.academic_session;
export const UNVERIFIED = "Current data not verified";

export const masterUniversities = data.universities;
export const masterPairs = data.all_pair_comparisons;
export const featuredComparisons = data.featured_course_comparisons;

const uniBySlug = new Map(masterUniversities.map((u) => [u.slug, u]));
const pairById = new Map(masterPairs.map((p) => [p.comparison_id, p]));

/** "B.Com" → "b-com", "MBA" → "mba" */
export const courseSlug = (course: string) =>
  course
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export function getMasterUniversity(slug: string) {
  return uniBySlug.get(slug);
}

/** Pair slugs are stable; also accepts the reversed order. */
export function getMasterPair(slug: string): { pair: MasterPair; swapped: boolean } | undefined {
  const direct = pairById.get(slug);
  if (direct) return { pair: direct, swapped: false };
  const m = /^(.+)-vs-(.+)$/.exec(slug);
  if (!m) return undefined;
  const reversed = pairById.get(`${m[2]}-vs-${m[1]}`);
  return reversed ? { pair: reversed, swapped: true } : undefined;
}

export function pairUniversities(pair: MasterPair) {
  const [aSlug, bSlug] = pair.comparison_id.split("-vs-");
  return {
    a: getMasterUniversity(aSlug!),
    b: getMasterUniversity(bSlug!),
  };
}

export function findCourseKey(pair: MasterPair, slug: string) {
  return pair.common_courses.find((c) => courseSlug(c) === slug);
}

export function pairPath(pair: MasterPair) {
  return `/compare/${pair.comparison_id}`;
}

export function coursePairPath(pair: MasterPair, course: string) {
  return `/compare/${courseSlug(course)}/${pair.comparison_id}`;
}

/** Other credible pairs that involve either university in this comparison. */
export function relatedPairs(pair: MasterPair, limit = 8) {
  const [aSlug, bSlug] = pair.comparison_id.split("-vs-");
  return masterPairs
    .filter((p) => p.comparison_id !== pair.comparison_id)
    .filter((p) => p.comparison_id.includes(aSlug!) || p.comparison_id.includes(bSlug!))
    .slice(0, limit);
}

export function inr(value: number | null | undefined) {
  if (typeof value !== "number" || !Number.isFinite(value)) return UNVERIFIED;
  return `₹${value.toLocaleString("en-IN")}`;
}

export function text(value: string | null | undefined, fallback = UNVERIFIED) {
  return value && value.trim() ? value : fallback;
}

export function feeLabel(p: MasterProgramme | undefined) {
  if (!p) return UNVERIFIED;
  if (typeof p.fee_total !== "number") return "Current fee not verified";
  return inr(p.fee_total);
}

export function recognitionRows(u: MasterUniversity) {
  return [
    { label: "UGC status", value: text(u.recognition.UGC_status) },
    { label: "UGC-DEB", value: text(u.recognition.UGC_DEB_status) },
    { label: "NAAC", value: text(u.recognition.NAAC_status) },
    { label: "NIRF", value: text(u.recognition.NIRF_information) },
    { label: "Other accreditation", value: text(u.recognition.accreditation) },
  ];
}

/** "partial_verification" → "Partial verification" */
export function humanise(value: string | null | undefined) {
  if (!value) return UNVERIFIED;
  const t = value.replace(/_/g, " ").trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

export function pairLabel(pair: MasterPair) {
  return `${pair.university_a} vs ${pair.university_b}`;
}

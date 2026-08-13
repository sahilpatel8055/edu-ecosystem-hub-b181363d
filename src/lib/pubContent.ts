/**
 * Typed reader over the publication-ready researched content pack
 * (`src/data/pub/*.json`, Phases 1–7, session 2026-27).
 *
 * This pack is the CONTENT SOURCE OF TRUTH for researched facts. Nothing here
 * invents or rewrites values: every getter returns `undefined` when the pack
 * has no record, so pages fall back to existing content instead of guessing.
 */
import universitiesJson from "@/data/pub/universities.json";
import coursePagesJson from "@/data/pub/course-pages.json";
import pillarsJson from "@/data/pub/pillars.json";
import comparisonsJson from "@/data/pub/comparisons.json";
import specialisationsJson from "@/data/pub/specialisations.json";
import guidesJson from "@/data/pub/guides.json";
import rulesJson from "@/data/pub/rules.json";

export const PUB_SESSION = "2026-27";

/** Label required by the pack wherever a value is unavailable. */
export const NOT_PUBLISHED_LABEL =
  "Not published by the university / current fee not independently verified";

/* ---------- Phase 2: universities ---------- */

export interface PubUniversity {
  university_name: string;
  slug: string;
  page_url: string;
  mode: string;
  location: string | null;
  hero: {
    title: string;
    subtitle: string;
    description: string;
    official_website: string | null;
    official_online_portal: string | null;
    official_admission_portal: string | null;
  };
  recognition: Record<string, string | null>;
  admission: {
    mode?: string | null;
    cycles?: string | null;
    steps?: string[] | null;
    entrance_exam?: string | null;
    status?: string | null;
    source?: string | null;
  };
  scholarship: {
    status?: string | null;
    criteria?: Array<{ name: string; criterion: string }> | null;
    note?: string | null;
  };
  career: {
    university_level_summary?: string | null;
    roles?: string[] | null;
    industries?: string[] | null;
    skills?: string[] | null;
    placement_support_reference?: string | null;
    source_status?: string | null;
  };
  sources: Record<string, string | null>;
  last_verified: string;
}

const pubUniversities = universitiesJson as unknown as PubUniversity[];

export function pubUniversity(slug: string): PubUniversity | undefined {
  return pubUniversities.find((u) => u.slug === slug);
}

/* ---------- Phase 3: university × course ---------- */

export interface PubCurriculum {
  status: string;
  intro: string;
  semesters: Array<{ semester: string; subjects: string[] }>;
}

export interface PubCourseSpecialisation {
  specialisation_name: string;
  official_name?: string | null;
  programme?: string;
  official_source_url?: string | null;
}

export interface PubCoursePage {
  university_name: string;
  university_slug: string;
  programme: string;
  programme_slug: string;
  course_family: string;
  canonical_url: string;
  publication_content: {
    seo: { title: string; h1: string; meta: string; canonical: string };
    hero: string;
    overview: string;
    quick_facts: Record<string, string | number | null>;
    fees: string;
    eligibility: string;
    admission: string;
    curriculum: PubCurriculum;
    specialisations: PubCourseSpecialisation[];
    examination: string;
    scholarships: string;
    career: string;
    who_should_choose: string;
    who_should_reconsider: string;
    sources: Record<string, string | null>;
    last_verified: string;
    data_status: Record<string, unknown>;
  };
}

const pubCourses = coursePagesJson as unknown as PubCoursePage[];

export function pubCoursePage(universitySlug: string, programmeSlug: string): PubCoursePage | undefined {
  return pubCourses.find(
    (c) => c.university_slug === universitySlug && c.programme_slug === programmeSlug,
  );
}

export function pubCoursesForUniversity(universitySlug: string): PubCoursePage[] {
  return pubCourses.filter((c) => c.university_slug === universitySlug);
}

export function pubCoursesForFamily(family: string): PubCoursePage[] {
  return pubCourses.filter((c) => c.course_family === family);
}

export const allPubCoursePages = pubCourses;

/* ---------- Phase 4: course pillars ---------- */

export interface PubPillar {
  seo: { title: string; h1: string; meta: string };
  intro: string;
  what_to_compare: string[];
  fees_guidance: string;
  curriculum_guidance: string;
  admission_guidance: string;
  exam_guidance: string;
  career_guidance: string;
  universities_count: number;
  universities: string[];
  linked_programmes: Array<{ university?: string; programme?: string; url?: string } | string>;
}

const pubPillars = pillarsJson as unknown as Record<string, PubPillar>;

export function pubPillar(familySlug: string): PubPillar | undefined {
  return pubPillars[familySlug];
}

/* ---------- Phase 5: comparisons ---------- */

export interface PubComparisonRow {
  university: string;
  programme: string;
  mode: string | null;
  duration: string | null;
  eligibility: string | null;
  fee: string;
  specialisations: string[];
  curriculum_url?: string | null;
  course_url: string;
  last_verified: string;
  fee_status?: string | null;
}

export interface PubComparison {
  seo: { title: string; h1: string; meta: string };
  intro: string;
  rows: PubComparisonRow[];
  [key: string]: unknown;
}

const pubComparisons = comparisonsJson as unknown as Record<string, PubComparison>;

export function pubComparison(familySlug: string): PubComparison | undefined {
  return pubComparisons[familySlug];
}

/* ---------- Phase 6: specialisations ---------- */

export interface PubSpecialisation {
  name: string;
  slug: string;
  course_families: string[];
  universities: string[];
  programmes: Array<{ university: string; programme: string; url: string }>;
  content: {
    seo: { title: string; h1: string; meta: string };
    definition: string;
    who_should_choose: string;
    subjects_rule: string;
    university_availability: string;
    career: string;
    decision_checklist: string[];
    sources: string[];
  };
  indexation_recommendation: string;
}

const pubSpecialisations = specialisationsJson as unknown as PubSpecialisation[];

export const allPubSpecialisations = pubSpecialisations;

export function pubSpecialisation(slug: string, familySlug?: string): PubSpecialisation | undefined {
  const matches = pubSpecialisations.filter((s) => s.slug === slug);
  if (!matches.length) return undefined;
  if (familySlug) {
    const scoped = matches.find((s) => s.course_families.includes(familySlug));
    if (scoped) return scoped;
  }
  return matches[0];
}

/* ---------- Phase 7: supporting guides ---------- */

export interface PubGuide {
  title: string;
  slug: string;
  type: string;
  primary_intent: string;
  parent_course: string;
  seo: { title: string; h1: string; meta: string };
  content: {
    opening: string;
    main_answer: string;
    decision_framework: string[];
    next_step: string;
  };
  sources_policy: string;
}

export const pubGuides = guidesJson as unknown as PubGuide[];

export function pubGuide(slug: string): PubGuide | undefined {
  return pubGuides.find((g) => g.slug === slug);
}

export function pubGuidesForCourse(familySlug: string): PubGuide[] {
  return pubGuides.filter((g) => g.parent_course === familySlug);
}

/* ---------- Phase 1 + global rules ---------- */

export const pubRules = rulesJson as unknown as {
  meta: Record<string, unknown>;
  governance: Record<string, unknown>;
  global: {
    missing_value_label: string;
    source_priority: string[];
    anti_duplication: string[];
    editorial_voice: string;
    last_verified_basis: string;
  };
  validation: Array<{ claim: string; source: string; status: string }>;
  content_strategy: Record<string, unknown>;
};

/** True when the pack marks a value as unavailable / unverified. */
export function isUnpublished(value?: string | null): boolean {
  if (!value) return true;
  return /not (published|provided)|not independently verified|has not provided/i.test(value);
}

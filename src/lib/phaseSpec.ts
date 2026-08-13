/**
 * Typed reader over the Phase 1–7 specification files in `src/data/spec/`.
 *
 * The spec files are the content contract: they say what each page type must
 * contain, which facts must never be invented, and what editorial material has
 * been researched per university. Pages read rules from here so the contract
 * lives with the code instead of in a chat message.
 */
import phase1 from "@/data/spec/phase-1-content-gap-audit-and-research-db.json";
import phase2 from "@/data/spec/phase-2-14-university-content-research-and-implementation.json";
import phase3 from "@/data/spec/phase-3-university-course-pages.json";
import phase4 from "@/data/spec/phase-4-main-course-pillar-pages.json";
import phase5 from "@/data/spec/phase-5-comparison-pages.json";
import phase67 from "@/data/spec/phase-6-7-specialisation-and-content-cluster-pages.json";

export const academicSessionLabel = "2026-27";

/** Text used everywhere a fact exists but has no published value. */
export const NOT_PUBLISHED = "Not published";

export type VerificationStatus =
  | "verified_official"
  | "verified_regulatory"
  | "partial_verification"
  | "conflicting"
  | "outdated"
  | "not_published"
  | "needs_review";

export interface UniversitySpecContent {
  intro: string;
  student_guidance: string;
  source_note?: string;
}

export interface UniversitySpec {
  slug: string;
  name: string;
  content: UniversitySpecContent;
  must_research_next: string[];
  safe_sections: string[];
  source?: string;
}

const universitySpecs = (phase2 as { university_content: UniversitySpec[] }).university_content;

/** Researched editorial block for a university, when Phase 2 supplies one. */
export function universitySpec(slug: string): UniversitySpec | undefined {
  return universitySpecs.find((u) => u.slug === slug);
}

export const universityPageSections = (
  phase2 as { new_sections_to_add_to_every_university_page: Array<{ section: string; purpose?: string; content?: string; fields?: string[] }> }
).new_sections_to_add_to_every_university_page;

export function universitySection(name: string) {
  return universityPageSections.find((s) => s.section === name);
}

/** Fields Phase 1 flagged as missing/empty for a university. */
export function universityGaps(slug: string): string[] {
  const rows = (phase1 as { university_missing_content: Array<{ slug: string; missing_or_empty_fields: string[] }> })
    .university_missing_content;
  return rows.find((r) => r.slug === slug)?.missing_or_empty_fields ?? [];
}

/** Official source registry entries for a university. */
export function universitySources(slug: string) {
  const rows = (
    phase1 as { research_source_registry: Array<{ university: string; source_type: string; url: string; research_note?: string }> }
  ).research_source_registry;
  return rows.filter((r) => r.university === slug || r.university.toLowerCase().includes(slug.split("-")[0] ?? ""));
}

/* ---------- course family / pillar ---------- */

export const courseHubSlugs = (phase4 as { meta: { course_hubs: string[] } }).meta.course_hubs;

export interface CourseHubSpec {
  intent: string;
  audience: string;
  core_sections: string[];
}

export function courseHubSpec(slug: string): CourseHubSpec | undefined {
  return (phase4 as { course_hubs: Record<string, CourseHubSpec> }).course_hubs[slug];
}

export const pillarContract = phase4 as unknown as {
  universal_pillar_content: Record<string, unknown>;
  university_directory_contract: Record<string, unknown>;
  internal_linking: Record<string, string>;
  seo_contract: Record<string, unknown>;
  next_step_pattern: { examples: Array<{ after: string; next_step: string }>; rule: string };
};

/* ---------- university × course ---------- */

export interface CourseFamilySpec {
  audience: string;
  original_overview: string;
}

export function courseFamilySpec(slug: string): CourseFamilySpec | undefined {
  return (phase3 as { course_family_content: Record<string, CourseFamilySpec> }).course_family_content[slug];
}

export const universalCourseBlocks = (phase3 as { universal_content_blocks: Record<string, string> })
  .universal_content_blocks;

export const universityCourseSections = (phase3 as { required_sections: string[] }).required_sections;

/* ---------- comparison ---------- */

export const comparisonSpec = phase5 as unknown as {
  constraints: string[];
  page_types: Record<string, { purpose: string; recommended_urls?: string[]; indexation?: string }>;
  comparison_fields: Record<string, string[]>;
  priority_rows: string[];
  summary_logic: { do_not_rank: boolean; allowed_factual_highlights: string[]; rule: string };
  methodology: string[];
  seo: Record<string, unknown>;
};

/* ---------- specialisation + content cluster ---------- */

export const specialisationSpec = phase67 as unknown as {
  phase_6_specialisation_pages: {
    purpose: string;
    core_rule: string;
    recommended_url: string;
    examples: string[];
    do_not_create: string[];
    specialisation_data_contract: Record<string, string[]>;
  };
} & Record<string, unknown>;

export const specs = { phase1, phase2, phase3, phase4, phase5, phase67 };

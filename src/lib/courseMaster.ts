/**
 * Access layer for `src/data/university-course-master-content.json`.
 *
 * That JSON is the single source of truth for university × course content:
 * common curriculum per course family, specialisation electives, and the
 * verified per-university research (fee, exam pattern, eligibility,
 * scholarships). Nothing here invents data — every getter returns
 * `undefined`/`null` when the dataset has no verified value so the UI can
 * show a neutral fallback instead.
 */
import master from "@/data/university-course-master-content.json";

interface CourseCurriculumJson {
  title: string;
  duration: string;
  common_semesters: Record<string, string[]>;
  specialisation_electives?: Record<string, string[]>;
  notes?: string;
}

interface UniversityResearchJson {
  verified_programs?: string[];
  mba_fee?: string | string[];
  mba_specialisations?: string[];
  mba_curriculum_note?: string | string[];
  exam_pattern?: string | string[];
  eligibility?: string | string[];
  scholarships?: string[] | string;
  university_notes?: string | string[];
}

const curriculumData = master.course_curriculum as unknown as Record<string, CourseCurriculumJson>;

/**
 * Keeps third-party aggregator names out of published copy. The dataset stores
 * some of these fields as an array of notes, so accept both shapes.
 */
function neutral(text: unknown): string {
  const raw = Array.isArray(text) ? text.filter(Boolean).join(" ") : typeof text === "string" ? text : "";
  return raw
    .replace(/CollegeSathi[’']?s?/gi, "the referenced programme source")
    .replace(/CollegeVidya[’']?s?/gi, "the referenced programme source")
    .replace(/\bCited page\b/gi, "The referenced source")
    .replace(/\bthe cited\b/gi, "the referenced");
}
const researchData = master.university_research as unknown as Record<string, UniversityResearchJson>;
const masterUniversities = master.universities as Array<{ id: string; name: string; slug: string }>;
export const masterResearchDate: string = master.meta.research_date;
export const masterSources: string[] = (master.sources as unknown as Array<string | { url?: string }>)
  .map((s) => (typeof s === "string" ? s : (s.url ?? "")))
  .filter(Boolean);

/**
 * The dataset's own ids map onto the site's university slugs.
 * Universities the site does not publish yet are intentionally absent.
 */
const researchIdToSiteSlug: Record<string, string> = {
  "amity-online": "amity-online",
  "manipal-online": "manipal-university-jaipur",
  "jain-online": "jain-online",
  "nmims-online": "nmims-online",
  "lpu-online": "lpu-online",
  "chandigarh-online": "chandigarh-university-online",
  "dy-patil-online": "dpu-online",
  "vgu-online": "vgu",
};

const siteSlugToResearchId: Record<string, string> = Object.fromEntries(
  Object.entries(researchIdToSiteSlug).map(([id, slug]) => [slug, id]),
);

/** Public (dataset) university slug -> the slug this site already uses. */
export function siteSlugForMasterSlug(publicSlug: string): string | undefined {
  const entry = masterUniversities.find((u) => u.slug === publicSlug || u.id === publicSlug);
  if (!entry) return undefined;
  return researchIdToSiteSlug[entry.id];
}

/** Map any programme slug used on the site to a course family in the dataset. */
export function courseKeyForProgramme(programmeSlug: string): string | undefined {
  const s = programmeSlug.toLowerCase();
  const has = (...needles: string[]) => needles.some((n) => s.includes(n));
  if (has("mca", "master-of-computer-application")) return "online-mca";
  if (has("bca", "bachelor-of-computer-application")) return "online-bca";
  if (has("mba", "master-of-business-administration")) return "online-mba";
  if (has("bba", "bachelor-of-business-administration", "management-studies")) return "online-bba";
  if (has("m-com", "mcom", "master-of-commerce")) return "online-mcom";
  if (has("b-com", "bcom", "bachelor-of-commerce")) return "online-bcom";
  if (has("m-sc", "msc", "master-of-science")) return "online-msc";
  if (has("master-of-arts", "m-a-", "online-ma", "/ma")) return "online-ma";
  if (s === "ma" || s.startsWith("ma-")) return "online-ma";
  if (has("bachelor-of-arts", "b-a-", "online-ba")) return "online-ba";
  if (s === "ba" || s.startsWith("ba-")) return "online-ba";
  // Fallback for spaced-out slugs like "online-m-a" / "online-b-a".
  const flat = s.replace(/[^a-z]/g, "");
  if (flat.includes("ma")) return "online-ma";
  if (flat.includes("ba")) return "online-ba";
  return undefined;

}

export interface Semester {
  label: string;
  subjects: string[];
}

export interface CourseMaster {
  key: string;
  title: string;
  duration: string;
  semesters: Semester[];
  /** Specialisation name -> elective subjects. Electives, never core. */
  electives: Record<string, string[]>;
  notes?: string;
}

export function getCourseMaster(programmeSlug: string): CourseMaster | undefined {
  const key = courseKeyForProgramme(programmeSlug);
  if (!key) return undefined;
  const c = curriculumData[key];
  if (!c) return undefined;
  const semesters = Object.entries(c.common_semesters).map(([k, subjects]) => ({
    label: `Semester ${k.replace(/[^0-9]/g, "")}`,
    subjects,
  }));
  const result: CourseMaster = {
    key,
    title: c.title,
    duration: c.duration,
    semesters,
    electives: c.specialisation_electives ?? {},
  };
  if (c.notes) result.notes = c.notes;
  return result;
}

export interface UniversityResearch {
  verifiedPrograms: string[];
  feeNote?: string;
  specialisations?: string[];
  curriculumNote?: string;
  examPattern?: string;
  eligibility?: string;
  scholarships?: string[];
  scholarshipNote?: string;
  universityNote?: string;
  universityNotes?: string[];
}

/** Verified research for a university, keyed by the site's own slug. */
export function getUniversityResearch(siteSlug: string): UniversityResearch | undefined {
  const id = siteSlugToResearchId[siteSlug] ?? (researchData[siteSlug] ? siteSlug : undefined);
  if (!id) return undefined;
  const r = researchData[id];
  if (!r) return undefined;
  const out: UniversityResearch = { verifiedPrograms: r.verified_programs ?? [] };
  if (r.mba_fee) out.feeNote = neutral(r.mba_fee);
  if (r.mba_specialisations) out.specialisations = r.mba_specialisations;
  if (r.mba_curriculum_note) out.curriculumNote = neutral(r.mba_curriculum_note);
  if (r.exam_pattern) out.examPattern = neutral(r.exam_pattern);
  if (r.eligibility) out.eligibility = neutral(r.eligibility);
  if (Array.isArray(r.scholarships)) out.scholarships = r.scholarships;
  else if (typeof r.scholarships === "string") out.scholarshipNote = neutral(r.scholarships);
  if (Array.isArray(r.university_notes) && r.university_notes.length) {
    out.universityNotes = r.university_notes.map((n) => neutral(n)).filter(Boolean);
    out.universityNote = out.universityNotes[0];
  } else if (typeof r.university_notes === "string" && r.university_notes.trim()) {
    out.universityNote = neutral(r.university_notes);
  }
  return out;
}

/**
 * Combined lookup used by the university × course page.
 * MBA-specific research fields only apply to the MBA family — never reused
 * for another course of the same university.
 */
export function getUniversityCourse(siteSlug: string, programmeSlug: string) {
  const course = getCourseMaster(programmeSlug);
  const research = getUniversityResearch(siteSlug);
  const isMba = course?.key === "online-mba";
  return {
    course,
    research,
    feeNote: isMba ? research?.feeNote : undefined,
    specialisations: isMba ? research?.specialisations : undefined,
    curriculumNote: isMba ? research?.curriculumNote : undefined,
    examPattern: isMba ? research?.examPattern : undefined,
    eligibility: isMba ? research?.eligibility : undefined,
    scholarships: research?.scholarships,
    scholarshipNote: research?.scholarshipNote,
    universityNote: research?.universityNote,
    universityNotes: research?.universityNotes,
  };
}

export type UniversityCourseMaster = ReturnType<typeof getUniversityCourse>;
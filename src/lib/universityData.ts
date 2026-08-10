/**
 * Single source of truth for university + programme information.
 *
 * Everything below is read from the three JSON datasets in `src/data/`:
 *   - university-master-data-2026-27.json   (universities, programmes, fees…)
 *   - university-course-index-2026-27.json  (flat course discovery index)
 *   - university-data-sources-2026-27.json  (source / verification metadata)
 *
 * Rules encoded here (do not relax them):
 *   - Never invent a value. `null` stays `null` and the UI hides the field.
 *   - Never mix Online and ODL/Distance data — always carry `mode` through.
 *   - Verification status is passed through verbatim.
 *
 * To move to the next session, drop in `university-master-data-2027-28.json`
 * and change the three imports below. Nothing else in the app hardcodes it.
 */
import rawMaster from "@/data/university-master-data-2026-27.json";
import rawIndex from "@/data/university-course-index-2026-27.json";
import rawSources from "@/data/university-data-sources-2026-27.json";

/* ------------------------------- types ---------------------------------- */

export type ProgrammeLevel = "UG" | "PG" | "Diploma" | "Certificate";
export type DataMode = "Online" | "Distance" | "ODL" | "Both" | string;

export interface Eligibility {
  summary: string | null;
  minimum_marks: string | null;
  required_subjects: string[];
  age_requirement: string | null;
  entrance_exam: string | null;
}

export interface SpecialisationRecord {
  specialisation_name: string;
  official_name: string | null;
  programme: string | null;
  official_source_url: string | null;
}

export interface FeeRecord {
  normal: number | null;
  discounted: number | null;
  annual: number | null;
  semester: number | null;
  monthly: number | null;
  emi: number | null;
  application_fee: number | null;
  registration_fee: number | null;
  admission_fee: number | null;
  examination_fee: number | null;
  project_fee: number | null;
  study_material_fee: number | null;
  technology_fee: number | null;
  total_programme_fee: number | null;
  discount: { amount: number | null; percentage: number | null; valid_until: string | null };
  scholarship: { available: boolean | null; details: unknown[] };
  fee_verification_status: string | null;
  source_url: string | null;
  source_type: string | null;
  source_title: string | null;
  last_verified: string | null;
  verification_status: string | null;
}

export interface ProgrammeAdmission {
  intake: string | null;
  application_status: string | null;
  application_url: string | null;
  steps: string[];
  documents: string[];
}

export interface ProgrammeRecord {
  programme_name: string;
  official_programme_name: string | null;
  slug: string;
  degree: string | null;
  level: ProgrammeLevel | string;
  mode: DataMode;
  duration: string | null;
  minimum_duration: string | null;
  maximum_duration: string | null;
  semesters: number | null;
  eligibility: Eligibility;
  specializations: SpecialisationRecord[];
  fees: FeeRecord;
  admission: ProgrammeAdmission;
  career: { roles: string[]; industries: string[]; higher_study: string[] };
  official_source: {
    programme_url: string | null;
    fee_url: string | null;
    admission_url: string | null;
    prospectus_url: string | null;
    source_type: string | null;
    source_title: string | null;
  };
  data_status: string | null;
  last_verified: string | null;
  notes: string[];
}

export interface ScholarshipRecord {
  scholarship_name?: string | null;
  name?: string | null;
  amount?: number | string | null;
  percentage?: number | null;
  eligibility?: string | null;
  category?: string | null;
  documents?: string[];
  deadline?: string | null;
  applicable_programmes?: string[];
  official_url?: string | null;
  verification_status?: string | null;
}

export interface UniversityRecordJson {
  university_name: string;
  short_name: string;
  slug: string;
  mode: DataMode;
  basic_information: {
    official_website: string | null;
    official_online_portal: string | null;
    official_admission_portal: string | null;
    location: string | null;
    state: string | null;
    established_year: number | null;
    official_contact: string | null;
    official_prospectus_url: string | null;
    official_admission_notification_url: string | null;
  };
  recognition: {
    UGC_status: string | null;
    UGC_DEB_status: string | null;
    NAAC_status: string | null;
    NIRF_information: string | null;
    accreditation: string | null;
  };
  admissions: {
    admission_start_date: string | null;
    admission_end_date: string | null;
    next_expected_intake: string | null;
    admission_cycle: string | null;
    application_fee: number | null;
    application_url: string | null;
    admission_steps: string[];
    required_documents: string[];
    selection_process: string | null;
    entrance_exam: string | null;
    direct_admission: string | null;
    official_admission_notification: string | null;
  };
  scholarships: ScholarshipRecord[];
  programmes: ProgrammeRecord[];
  seo?: Record<string, string[]>;
  url_architecture?: Record<string, string>;
  data_status: string | null;
  last_verified: string | null;
  notes: string[];
}

export interface MasterDataset {
  schema_version: string;
  dataset_name: string;
  academic_session: string;
  last_master_verification: string;
  currency: string;
  universities: UniversityRecordJson[];
  audit?: Record<string, unknown>;
}

export interface CourseIndexEntry {
  university_name: string;
  university_slug: string;
  programme_name: string;
  programme_slug: string;
  level: string;
  mode: string;
  canonical_url: string;
}

export interface SourceEntry {
  university: string;
  programme: string;
  source_type: string;
  source_url: string;
  source_title: string;
  verification_status: string;
  last_verified: string;
}

/* ------------------------------ dataset --------------------------------- */

const master = rawMaster as unknown as MasterDataset;
const courseIndex = rawIndex as unknown as CourseIndexEntry[];
const sourceList = (rawSources as unknown as { sources: SourceEntry[] }).sources;

/** e.g. "2026-27" — never hardcode the session in the UI, read it from here. */
export const academicSession = master.academic_session;
export const datasetVerifiedOn = master.last_master_verification;
export const datasetCurrency = master.currency;

export const universitiesJson: UniversityRecordJson[] = master.universities;
export const courseIndexJson: CourseIndexEntry[] = courseIndex;
export const sourcesJson: SourceEntry[] = sourceList;

const bySlug = new Map(universitiesJson.map((u) => [u.slug, u]));

/* ----------------------------- selectors -------------------------------- */

export const allUniversities = (): UniversityRecordJson[] => universitiesJson;

export const getUniversityBySlug = (slug: string): UniversityRecordJson | undefined => bySlug.get(slug);

export const getUniversityByName = (name: string): UniversityRecordJson | undefined => {
  const n = name.trim().toLowerCase();
  return universitiesJson.find(
    (u) => u.university_name.toLowerCase() === n || u.short_name.toLowerCase() === n,
  );
};

export const programmesOf = (universitySlug: string): ProgrammeRecord[] =>
  getUniversityBySlug(universitySlug)?.programmes ?? [];

export const getProgramme = (universitySlug: string, programmeSlug: string): ProgrammeRecord | undefined =>
  programmesOf(universitySlug).find((p) => p.slug === programmeSlug);

export const programmesByLevel = (level: string): Array<{ university: UniversityRecordJson; programme: ProgrammeRecord }> =>
  allProgrammePairs().filter((x) => x.programme.level === level);

export const programmesByMode = (mode: string): Array<{ university: UniversityRecordJson; programme: ProgrammeRecord }> =>
  allProgrammePairs().filter((x) => matchesMode(x.programme.mode, mode));

/** Every university × programme pair in the dataset. */
export function allProgrammePairs(): Array<{ university: UniversityRecordJson; programme: ProgrammeRecord }> {
  return universitiesJson.flatMap((university) =>
    university.programmes.map((programme) => ({ university, programme })),
  );
}

/** "Both" covers Online and Distance/ODL; never treat them as the same programme. */
export function matchesMode(recordMode: string, wanted: string): boolean {
  const r = recordMode.toLowerCase();
  const w = wanted.toLowerCase();
  if (r === w) return true;
  if (r === "both") return w === "online" || w === "distance" || w === "odl";
  if (r === "odl" && w === "distance") return true;
  if (r === "distance" && w === "odl") return true;
  return false;
}

export const specialisationsOf = (universitySlug: string, programmeSlug: string): SpecialisationRecord[] =>
  getProgramme(universitySlug, programmeSlug)?.specializations ?? [];

export const feesOf = (universitySlug: string, programmeSlug: string): FeeRecord | undefined =>
  getProgramme(universitySlug, programmeSlug)?.fees;

export const scholarshipsOf = (universitySlug: string): ScholarshipRecord[] =>
  getUniversityBySlug(universitySlug)?.scholarships ?? [];

export const admissionOf = (universitySlug: string): UniversityRecordJson["admissions"] | undefined =>
  getUniversityBySlug(universitySlug)?.admissions;

export const sourcesFor = (universityName: string): SourceEntry[] =>
  sourcesJson.filter((s) => s.university.toLowerCase() === universityName.toLowerCase());

/** Source rows matched to a university record (name or short name). */
export const sourcesForUniversity = (u: UniversityRecordJson): SourceEntry[] =>
  sourcesJson.filter(
    (s) =>
      s.university.toLowerCase() === u.short_name.toLowerCase() ||
      s.university.toLowerCase() === u.university_name.toLowerCase(),
  );

/* --------------------------- course discovery ---------------------------- */

export const courseIndexFor = (universitySlug: string): CourseIndexEntry[] =>
  courseIndexJson.filter((c) => c.university_slug === universitySlug);

export const courseIndexByProgramme = (programmeSlug: string): CourseIndexEntry[] =>
  courseIndexJson.filter((c) => c.programme_slug === programmeSlug);

export const canonicalCourseUrl = (universitySlug: string, programmeSlug: string): string =>
  courseIndexJson.find((c) => c.university_slug === universitySlug && c.programme_slug === programmeSlug)
    ?.canonical_url ?? `/universities/${universitySlug}/courses/${programmeSlug}`;

/** Same programme at other universities. */
export const relatedCourses = (universitySlug: string, programmeSlug: string, limit = 6): CourseIndexEntry[] =>
  courseIndexByProgramme(programmeSlug)
    .filter((c) => c.university_slug !== universitySlug)
    .slice(0, limit);

/** Universities that share at least one programme with this one. */
export function relatedUniversities(universitySlug: string, limit = 6): UniversityRecordJson[] {
  const mine = new Set(programmesOf(universitySlug).map((p) => p.slug));
  return universitiesJson
    .filter((u) => u.slug !== universitySlug && u.programmes.some((p) => mine.has(p.slug)))
    .slice(0, limit);
}

/* ------------------------------ comparison ------------------------------- */

export interface ComparisonRow {
  label: string;
  left: string | null;
  right: string | null;
}

/** Factual side-by-side rows only — no rankings, no "winner". */
export function comparisonData(leftSlug: string, rightSlug: string): {
  left: UniversityRecordJson;
  right: UniversityRecordJson;
  rows: ComparisonRow[];
  sharedProgrammes: Array<{ slug: string; name: string; left: ProgrammeRecord; right: ProgrammeRecord }>;
} | undefined {
  const left = getUniversityBySlug(leftSlug);
  const right = getUniversityBySlug(rightSlug);
  if (!left || !right) return undefined;

  const rows: ComparisonRow[] = [
    { label: "Mode", left: left.mode, right: right.mode },
    { label: "Location", left: left.basic_information.location, right: right.basic_information.location },
    {
      label: "Established",
      left: left.basic_information.established_year ? String(left.basic_information.established_year) : null,
      right: right.basic_information.established_year ? String(right.basic_information.established_year) : null,
    },
    { label: "UGC status", left: left.recognition.UGC_status, right: right.recognition.UGC_status },
    { label: "UGC-DEB status", left: left.recognition.UGC_DEB_status, right: right.recognition.UGC_DEB_status },
    { label: "NAAC", left: left.recognition.NAAC_status, right: right.recognition.NAAC_status },
    { label: "NIRF", left: left.recognition.NIRF_information, right: right.recognition.NIRF_information },
    { label: "Accreditation", left: left.recognition.accreditation, right: right.recognition.accreditation },
    { label: "Programmes in dataset", left: String(left.programmes.length), right: String(right.programmes.length) },
    {
      label: "Next expected intake",
      left: left.admissions.next_expected_intake,
      right: right.admissions.next_expected_intake,
    },
    { label: "Admission cycle", left: left.admissions.admission_cycle, right: right.admissions.admission_cycle },
    { label: "Selection process", left: left.admissions.selection_process, right: right.admissions.selection_process },
    { label: "Entrance exam", left: left.admissions.entrance_exam, right: right.admissions.entrance_exam },
    {
      label: "Scholarships published",
      left: left.scholarships.length ? String(left.scholarships.length) : null,
      right: right.scholarships.length ? String(right.scholarships.length) : null,
    },
    { label: "Data status", left: left.data_status, right: right.data_status },
  ];

  const rightBySlug = new Map(right.programmes.map((p) => [p.slug, p]));
  const sharedProgrammes = left.programmes.flatMap((p) => {
    const match = rightBySlug.get(p.slug);
    return match ? [{ slug: p.slug, name: p.programme_name, left: p, right: match }] : [];
  });

  return { left, right, rows, sharedProgrammes };
}

/* -------------------------------- search --------------------------------- */

export interface SearchHit {
  kind: "university" | "programme" | "specialisation";
  label: string;
  sublabel: string;
  href: string;
}

export function searchDataset(query: string, limit = 12): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const hits: SearchHit[] = [];

  for (const u of universitiesJson) {
    if (u.university_name.toLowerCase().includes(q) || u.short_name.toLowerCase().includes(q)) {
      hits.push({
        kind: "university",
        label: u.university_name,
        sublabel: [u.basic_information.location, u.mode].filter(Boolean).join(" · "),
        href: `/universities/${u.slug}`,
      });
    }
  }

  for (const { university, programme } of allProgrammePairs()) {
    const haystack = `${programme.programme_name} ${programme.degree ?? ""}`.toLowerCase();
    if (haystack.includes(q)) {
      hits.push({
        kind: "programme",
        label: `${programme.programme_name} — ${university.short_name}`,
        sublabel: [programme.level, programme.mode, programme.duration].filter(Boolean).join(" · "),
        href: canonicalCourseUrl(university.slug, programme.slug),
      });
    }
    for (const s of programme.specializations) {
      if (s.specialisation_name.toLowerCase().includes(q)) {
        hits.push({
          kind: "specialisation",
          label: `${s.specialisation_name} — ${programme.programme_name}`,
          sublabel: university.short_name,
          href: canonicalCourseUrl(university.slug, programme.slug),
        });
      }
    }
  }

  const seen = new Set<string>();
  return hits.filter((h) => (seen.has(h.href + h.label) ? false : (seen.add(h.href + h.label), true))).slice(0, limit);
}

/* ------------------------------ formatting ------------------------------- */

/** Returns null when the dataset has no figure — callers must hide the row. */
export function formatFee(value: number | null | undefined): string | null {
  if (value == null || Number.isNaN(value)) return null;
  return `₹${value.toLocaleString("en-IN")}`;
}

export function isVerifiedFee(fees: FeeRecord | undefined): boolean {
  const status = fees?.fee_verification_status ?? fees?.verification_status ?? "";
  return status.startsWith("verified_official");
}

export function feePending(fees: FeeRecord | undefined): boolean {
  return (fees?.fee_verification_status ?? "") === "fee_pending_verification" || fees?.total_programme_fee == null;
}

/** Lowest / highest published total fee across a university's programmes. */
export function feeRangeLabel(universitySlug: string): string {
  const totals = programmesOf(universitySlug)
    .map((p) => p.fees.total_programme_fee)
    .filter((v): v is number => typeof v === "number" && v > 0);
  if (!totals.length) return "Fee pending verification";
  const min = Math.min(...totals);
  const max = Math.max(...totals);
  return min === max ? `₹${min.toLocaleString("en-IN")}` : `₹${min.toLocaleString("en-IN")} – ₹${max.toLocaleString("en-IN")}`;
}

export function programmeFeeRangeLabel(programmeSlug: string): string {
  const totals = courseIndexByProgramme(programmeSlug)
    .map((c) => getProgramme(c.university_slug, c.programme_slug)?.fees.total_programme_fee)
    .filter((v): v is number => typeof v === "number" && v > 0);
  if (!totals.length) return "Fee pending verification";
  const min = Math.min(...totals);
  const max = Math.max(...totals);
  return min === max ? `₹${min.toLocaleString("en-IN")}` : `₹${min.toLocaleString("en-IN")} – ₹${max.toLocaleString("en-IN")}`;
}

/** Recognition strings a university actually publishes — never invented. */
export function recognitionLabels(u: UniversityRecordJson): string[] {
  const r = u.recognition;
  return [r.UGC_status, r.UGC_DEB_status, r.NAAC_status, r.NIRF_information, r.accreditation].filter(
    (v): v is string => typeof v === "string" && v.trim().length > 0,
  );
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
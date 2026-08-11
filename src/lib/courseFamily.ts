/**
 * Course-family layer.
 *
 * The master dataset stores one programme record per university, so "MBA"
 * exists dozens of times under different slugs. A *family* is the course as a
 * searcher thinks about it — "Online MBA" — with every university that offers
 * it attached. Every reusable course page (Online MBA, MCA, BBA, BCA, M.Com,
 * MA …) is rendered from one of these objects, so nothing about a single
 * course is hardcoded in a component.
 *
 * Rule inherited from the dataset: never invent a value. `null` stays `null`
 * and the UI hides or labels the field as "Not specified".
 */
import {
  allUniversities,
  formatFee,
  type ProgrammeRecord,
  type UniversityRecordJson,
} from "@/lib/universityData";
import { universityLogo } from "@/lib/assets";

export type FamilyLevel = "UG" | "PG";

export interface FamilyDef {
  slug: string;
  /** Display name used in H1 templates and cards, e.g. "Online MBA". */
  name: string;
  /** Degree abbreviation, e.g. "MBA". */
  shortName: string;
  /** Expanded degree name, e.g. "Master of Business Administration". */
  degreeName: string;
  level: FamilyLevel;
  /** Ordered matchers run against the uppercased programme name. */
  match: RegExp[];
}

/** Order matters: the first match wins (MBA before MA, BBA before BA …). */
export const familyDefs: FamilyDef[] = [
  {
    slug: "online-mba",
    name: "Online MBA",
    shortName: "MBA",
    degreeName: "Master of Business Administration",
    level: "PG",
    match: [/\bMBA\b/, /MASTER OF BUSINESS ADMIN/],
  },
  {
    slug: "online-mca",
    name: "Online MCA",
    shortName: "MCA",
    degreeName: "Master of Computer Applications",
    level: "PG",
    match: [/\bMCA\b/, /MASTER OF COMPUTER APPLICATION/],
  },
  {
    slug: "online-mcom",
    name: "Online M.Com",
    shortName: "M.Com",
    degreeName: "Master of Commerce",
    level: "PG",
    match: [/\bM\.?\s?COM\b/, /MASTER OF COMMERCE/],
  },
  {
    slug: "online-msc",
    name: "Online M.Sc",
    shortName: "M.Sc",
    degreeName: "Master of Science",
    level: "PG",
    match: [/\bM\.?\s?SC\b/, /MASTER OF SCIENCE/],
  },
  {
    slug: "online-ma",
    name: "Online MA",
    shortName: "MA",
    degreeName: "Master of Arts",
    level: "PG",
    match: [/\bM\.?\s?A\b/, /MASTER OF ARTS/],
  },
  {
    slug: "online-bba",
    name: "Online BBA",
    shortName: "BBA",
    degreeName: "Bachelor of Business Administration",
    level: "UG",
    match: [/\bBBA\b/, /BACHELOR OF BUSINESS ADMIN/, /BACHELOR OF MANAGEMENT STUDIES/],
  },
  {
    slug: "online-bca",
    name: "Online BCA",
    shortName: "BCA",
    degreeName: "Bachelor of Computer Applications",
    level: "UG",
    match: [/\bBCA\b/, /BACHELOR OF COMPUTER APPLICATION/],
  },
  {
    slug: "online-bcom",
    name: "Online B.Com",
    shortName: "B.Com",
    degreeName: "Bachelor of Commerce",
    level: "UG",
    match: [/\bB\.?\s?COM\b/, /BACHELOR OF COMMERCE/],
  },
  {
    slug: "online-ba",
    name: "Online BA",
    shortName: "BA",
    degreeName: "Bachelor of Arts",
    level: "UG",
    match: [/\bB\.?\s?A\b/, /BACHELOR OF ARTS/],
  },
];

export interface FamilyFees {
  total: number | null;
  semester: number | null;
  annual: number | null;
  emi: number | null;
  application: number | null;
  examination: number | null;
  registration: number | null;
  verified: boolean;
  sourceUrl: string | null;
}

export interface FamilyOffer {
  key: string;
  universitySlug: string;
  universityName: string;
  universityShortName: string;
  logo: string | undefined;
  location: string | null;
  website: string | null;
  ugcStatus: string | null;
  debStatus: string | null;
  naac: string | null;
  nirf: string | null;
  accreditation: string | null;
  programmeSlug: string;
  programmeName: string;
  mode: string;
  duration: string | null;
  semesters: number | null;
  eligibility: string | null;
  minimumMarks: string | null;
  entranceExam: string | null;
  specialisations: string[];
  fees: FamilyFees;
  scholarships: string[];
  admissionSteps: string[];
  documents: string[];
  intake: string | null;
  applicationUrl: string | null;
  careerRoles: string[];
  industries: string[];
  lastVerified: string | null;
  path: string;
  universityPath: string;
}

export interface FamilySpecialisation {
  slug: string;
  name: string;
  universities: { name: string; slug: string; path: string }[];
}

export interface CourseFamily extends FamilyDef {
  offers: FamilyOffer[];
  specialisations: FamilySpecialisation[];
  durationLabel: string;
  semesters: number | null;
  feeMin: number | null;
  feeMax: number | null;
  feeRangeLabel: string;
  path: string;
  /** Universities that publish an entrance requirement for this course. */
  entranceUniversities: string[];
  lastVerified: string | null;
}

const upper = (s: string) => s.toUpperCase();

export function familyForProgramme(programme: ProgrammeRecord): FamilyDef | undefined {
  const name = upper(`${programme.programme_name} ${programme.degree ?? ""}`);
  return familyDefs.find((f) => f.match.some((re) => re.test(name)));
}

export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

function mostCommon(values: (string | null)[]): string | null {
  const counts = new Map<string, number>();
  for (const v of values) if (v) counts.set(v, (counts.get(v) ?? 0) + 1);
  const sorted = [...counts.entries()].sort((a, b) => b[1] - a[1]);
  return sorted[0]?.[0] ?? null;
}

function buildOffer(u: UniversityRecordJson, p: ProgrammeRecord): FamilyOffer {
  return {
    key: `${u.slug}--${p.slug}`,
    universitySlug: u.slug,
    universityName: u.university_name,
    universityShortName: u.short_name,
    logo: universityLogo(u.slug),
    location: u.basic_information.location ?? u.basic_information.state,
    website: u.basic_information.official_online_portal ?? u.basic_information.official_website,
    ugcStatus: u.recognition.UGC_status,
    debStatus: u.recognition.UGC_DEB_status,
    naac: u.recognition.NAAC_status,
    nirf: u.recognition.NIRF_information,
    accreditation: u.recognition.accreditation,
    programmeSlug: p.slug,
    programmeName: p.programme_name,
    mode: p.mode,
    duration: p.duration,
    semesters: p.semesters,
    eligibility: p.eligibility.summary,
    minimumMarks: p.eligibility.minimum_marks,
    entranceExam: p.eligibility.entrance_exam,
    specialisations: p.specializations.map((s) => s.official_name ?? s.specialisation_name),
    fees: {
      total: p.fees.total_programme_fee ?? p.fees.normal,
      semester: p.fees.semester,
      annual: p.fees.annual,
      emi: p.fees.emi ?? p.fees.monthly,
      application: p.fees.application_fee ?? u.admissions.application_fee,
      examination: p.fees.examination_fee,
      registration: p.fees.registration_fee ?? p.fees.admission_fee,
      verified: (p.fees.fee_verification_status ?? "").startsWith("verified"),
      sourceUrl: p.fees.source_url ?? p.official_source.fee_url,
    },
    scholarships: u.scholarships
      .map((s) => s.scholarship_name ?? s.name ?? "")
      .filter((s): s is string => Boolean(s)),
    admissionSteps: p.admission.steps.length ? p.admission.steps : u.admissions.admission_steps,
    documents: p.admission.documents.length ? p.admission.documents : u.admissions.required_documents,
    intake: p.admission.intake ?? u.admissions.next_expected_intake,
    applicationUrl: p.admission.application_url ?? u.admissions.application_url,
    careerRoles: p.career.roles,
    industries: p.career.industries,
    lastVerified: p.last_verified ?? u.last_verified,
    path: `/universities/${u.slug}/courses/${p.slug}`,
    universityPath: `/universities/${u.slug}`,
  };
}

function buildFamily(def: FamilyDef, offers: FamilyOffer[]): CourseFamily {
  const specMap = new Map<string, FamilySpecialisation>();
  for (const o of offers) {
    for (const name of o.specialisations) {
      const slug = slugify(name);
      if (!slug) continue;
      const entry = specMap.get(slug) ?? { slug, name, universities: [] };
      if (!entry.universities.some((u) => u.slug === o.universitySlug)) {
        entry.universities.push({ name: o.universityShortName, slug: o.universitySlug, path: o.path });
      }
      specMap.set(slug, entry);
    }
  }

  const totals = offers.map((o) => o.fees.total).filter((n): n is number => typeof n === "number" && n > 0);
  const feeMin = totals.length ? Math.min(...totals) : null;
  const feeMax = totals.length ? Math.max(...totals) : null;

  return {
    ...def,
    offers,
    specialisations: [...specMap.values()].sort((a, b) => b.universities.length - a.universities.length),
    durationLabel: mostCommon(offers.map((o) => o.duration)) ?? (def.level === "PG" ? "2 years" : "3 years"),
    semesters: mostCommon(offers.map((o) => (o.semesters ? String(o.semesters) : null)))
      ? Number(mostCommon(offers.map((o) => (o.semesters ? String(o.semesters) : null))))
      : null,
    feeMin,
    feeMax,
    feeRangeLabel:
      feeMin && feeMax
        ? feeMin === feeMax
          ? (formatFee(feeMin) ?? "Not specified")
          : `${formatFee(feeMin)} – ${formatFee(feeMax)}`
        : "University dependent",
    path: `/online-courses/${def.level.toLowerCase()}/${def.slug}`,
    entranceUniversities: offers.filter((o) => o.entranceExam).map((o) => o.universityShortName),
    lastVerified: mostCommon(offers.map((o) => o.lastVerified)),
  };
}

const familyIndex: Map<string, CourseFamily> = (() => {
  const buckets = new Map<string, FamilyOffer[]>();
  for (const u of allUniversities()) {
    for (const p of u.programmes) {
      const def = familyForProgramme(p);
      if (!def) continue;
      const list = buckets.get(def.slug) ?? [];
      list.push(buildOffer(u, p));
      buckets.set(def.slug, list);
    }
  }
  const map = new Map<string, CourseFamily>();
  for (const def of familyDefs) {
    const offers = buckets.get(def.slug);
    if (!offers?.length) continue;
    map.set(def.slug, buildFamily(def, offers));
  }
  return map;
})();

export const courseFamilyList = (): CourseFamily[] => [...familyIndex.values()];

export const getCourseFamily = (slug: string): CourseFamily | undefined => familyIndex.get(slug);

export const courseFamiliesByLevel = (level: FamilyLevel): CourseFamily[] =>
  courseFamilyList().filter((f) => f.level === level);

/** Family that a raw programme slug rolls up to — used for canonical links. */
export function familyForProgrammeSlug(programmeSlug: string): CourseFamily | undefined {
  return courseFamilyList().find((f) => f.offers.some((o) => o.programmeSlug === programmeSlug));
}

export function familySpecialisation(familySlug: string, specSlug: string) {
  const family = getCourseFamily(familySlug);
  const spec = family?.specialisations.find((s) => s.slug === specSlug);
  if (!family || !spec) return undefined;
  const offers = family.offers.filter((o) => o.specialisations.some((n) => slugify(n) === specSlug));
  return { family, spec, offers };
}

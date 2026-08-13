/**
 * Entity resolution layer.
 *
 * Merges the structured dataset in `@/data` (approvals, pros/cons, offerings)
 * with the presentation collections in `@/lib/content` (cards, ratings,
 * editorial articles) so page templates read from one place. Swapping either
 * source later only changes this file.
 */
import {
  getOffering,
  getProgramme,
  getUniversity as getUniversityRecord,
  listOfferingsByProgramme,
  listOfferingsByUniversity,
  listSpecialisations,
  programmes,
  universities as universityRecords,
} from "@/data";
import type { Offering, Programme, University as UniversityRecord } from "@/data";
import {
  allArticles,
  comparisons,
  courses as courseCards,
  reviews as reviewList,
  scholarships,
  universities as universityCards,
} from "@/lib/content";
import type { Article, Course as CourseCard, University as UniversityCard } from "@/lib/content";

export interface UniversityProfile {
  record: UniversityRecord;
  card: UniversityCard | undefined;
  offerings: Offering[];
  path: string;
}

export interface ProgrammeProfile {
  record: Programme;
  card: CourseCard | undefined;
  offerings: Offering[];
  specialisations: ReturnType<typeof listSpecialisations>;
  path: string;
}

export function universityProfile(slug: string): UniversityProfile | undefined {
  const record = getUniversityRecord(slug);
  if (!record) return undefined;
  return {
    record,
    card: universityCards.find((u) => u.slug === slug),
    offerings: listOfferingsByUniversity(slug),
    path: `/universities/${slug}`,
  };
}

export function programmeProfile(slug: string): ProgrammeProfile | undefined {
  const record = getProgramme(slug);
  if (!record) return undefined;
  return {
    record,
    card: courseCards.find((c) => c.slug === slug),
    offerings: listOfferingsByProgramme(slug),
    specialisations: listSpecialisations(slug),
    path: `/courses/${slug}`,
  };
}

export interface OfferingProfile {
  offering: Offering;
  university: UniversityProfile;
  programme: ProgrammeProfile;
  path: string;
}

export function offeringProfile(universitySlug: string, programmeSlug: string): OfferingProfile | undefined {
  const offering = getOffering(universitySlug, programmeSlug);
  const university = universityProfile(universitySlug);
  const programme = programmeProfile(programmeSlug);
  if (!offering || !university || !programme) return undefined;
  return {
    offering,
    university,
    programme,
    path: `/universities/${universitySlug}/courses/${programmeSlug}`,
  };
}

/* ------------------------- comparison resolution ------------------------- */

export interface ComparisonPair {
  slug: string;
  left: UniversityProfile;
  right: UniversityProfile;
  path: string;
}

/** Every university pair sharing at least one programme — the pSEO surface. */
export function universityPairs(): ComparisonPair[] {
  const pairs: ComparisonPair[] = [];
  for (let i = 0; i < universityRecords.length; i++) {
    for (let j = 0; j < universityRecords.length; j++) {
      if (i === j) continue;
      const a = universityRecords[i]!;
      const b = universityRecords[j]!;
      const left = universityProfile(a.slug)!;
      const right = universityProfile(b.slug)!;
      const shares = left.offerings.some((o) =>
        right.offerings.some((p) => p.programmeSlug === o.programmeSlug),
      );
      // Only one canonical direction per pair (alphabetical) — no duplicate URLs.
      if (shares && a.slug < b.slug) {
        pairs.push({ slug: `${a.slug}-vs-${b.slug}`, left, right, path: `/compare/${a.slug}-vs-${b.slug}` });
      }
    }
  }
  return pairs;
}

export function comparisonBySlug(slug: string): ComparisonPair | undefined {
  return universityPairs().find((p) => p.slug === slug);
}

/** Editorial comparisons that are not university-vs-university (course pairs). */
export function editorialComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}

/* --------------------------- internal linking --------------------------- */

export interface LinkRef {
  label: string;
  href: string;
  note?: string | undefined;
}

export const programmeLinks = (limit = 8): LinkRef[] =>
  programmes.slice(0, limit).map((p) => ({ label: p.name, href: `/courses/${p.slug}`, note: p.feeRangeLabel }));

export const universityLinks = (exclude?: string, limit = 8): LinkRef[] =>
  universityRecords
    .filter((u) => u.slug !== exclude)
    .slice(0, limit)
    .map((u) => ({ label: u.shortName, href: `/universities/${u.slug}`, note: u.feeRangeLabel }));

export const offeringLinks = (universitySlug: string): LinkRef[] =>
  listOfferingsByUniversity(universitySlug).map((o) => ({
    label: getProgramme(o.programmeSlug)?.name ?? o.programmeSlug,
    href: `/universities/${universitySlug}/courses/${o.programmeSlug}`,
    note: o.durationLabel,
  }));

export const providerLinks = (programmeSlug: string): LinkRef[] =>
  listOfferingsByProgramme(programmeSlug).map((o) => ({
    label: getUniversityRecord(o.universitySlug)?.shortName ?? o.universitySlug,
    href: `/universities/${o.universitySlug}/courses/${programmeSlug}`,
    note: o.durationLabel,
  }));

export const comparisonLinks = (universitySlug?: string, limit = 6): LinkRef[] =>
  universityPairs()
    .filter((p) => !universitySlug || p.left.record.slug === universitySlug || p.right.record.slug === universitySlug)
    .slice(0, limit)
    .map((p) => ({
      label: `${p.left.record.shortName} vs ${p.right.record.shortName}`,
      href: p.path,
    }));

export const reviewLinks = (limit = 4): LinkRef[] =>
  reviewList.slice(0, limit).map((r) => ({ label: `${r.entity} review`, href: `/reviews/${r.slug}`, note: `${r.rating}/5` }));

export const scholarshipLinks = (limit = 4): LinkRef[] =>
  scholarships.slice(0, limit).map((s) => ({ label: s.name, href: `/scholarships/${s.slug}`, note: s.amount }));

export const articleLinks = (limit = 4, filter?: (a: Article) => boolean): LinkRef[] =>
  allArticles
    .filter((a) => (filter ? filter(a) : true))
    .slice(0, limit)
    .map((a) => ({ label: a.title, href: a.kind === "news" ? `/news/${a.slug}` : `/blogs/${a.slug}`, note: a.readingTime }));

/* ------------------------------ formatting ------------------------------ */

export const approvalText = (u: UniversityRecord) =>
  u.approvals.map((a) => (a.status ? `${a.body} ${a.status}` : a.body)).join(" · ");

/** Breadcrumb-friendly course label: always prefixed with "Online". */
export const onlineName = (name: string) =>
  /^online\b/i.test(name.trim()) ? name.trim() : `Online ${name.trim()}`;

export const feeText = (o: Offering, fallback: string) =>
  o.fee.total ? `₹${o.fee.total.toLocaleString("en-IN")}` : fallback;

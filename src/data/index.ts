/**
 * Single entry point for the file-based dataset.
 * Pages should import from `@/data` only — never from the individual files —
 * so the storage mechanism can change without touching any page.
 */
import { universities } from "./universities";
import { programmes, specialisations } from "./programmes";
import { offerings } from "./offerings";
import type { Offering, Programme, Specialisation, University } from "./types";

export * from "./types";
export { universities, programmes, specialisations, offerings };

/* ---------- universities ---------- */

export function getUniversity(slug: string): University | undefined {
  return universities.find((u) => u.slug === slug);
}

export function listUniversities(filter?: {
  mode?: University["modes"][number];
  state?: string;
  approvalBody?: string;
  programmeSlug?: string;
}): University[] {
  let list = universities;
  if (filter?.mode) list = list.filter((u) => u.modes.includes(filter.mode!));
  if (filter?.state) list = list.filter((u) => u.state === filter.state);
  if (filter?.approvalBody) list = list.filter((u) => u.approvals.some((a) => a.body === filter.approvalBody));
  if (filter?.programmeSlug) {
    const slugs = new Set(offerings.filter((o) => o.programmeSlug === filter.programmeSlug).map((o) => o.universitySlug));
    list = list.filter((u) => slugs.has(u.slug));
  }
  return list;
}

/* ---------- programmes & specialisations ---------- */

export function getProgramme(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}

export function listProgrammes(level?: Programme["level"]): Programme[] {
  return level ? programmes.filter((p) => p.level === level) : programmes;
}

export function getSpecialisation(programmeSlug: string, slug: string): Specialisation | undefined {
  return specialisations.find((s) => s.programme === programmeSlug && s.slug === slug);
}

export function listSpecialisations(programmeSlug: string): Specialisation[] {
  return specialisations.filter((s) => s.programme === programmeSlug);
}

/* ---------- offerings ---------- */

export function getOffering(universitySlug: string, programmeSlug: string): Offering | undefined {
  return offerings.find((o) => o.universitySlug === universitySlug && o.programmeSlug === programmeSlug);
}

export function listOfferingsByUniversity(universitySlug: string): Offering[] {
  return offerings.filter((o) => o.universitySlug === universitySlug);
}

export function listOfferingsByProgramme(programmeSlug: string): Offering[] {
  return offerings.filter((o) => o.programmeSlug === programmeSlug);
}

export function listOfferingsBySpecialisation(programmeSlug: string, specialisationSlug: string): Offering[] {
  return offerings.filter((o) => o.programmeSlug === programmeSlug && o.specialisations.includes(specialisationSlug));
}

/* ---------- comparisons ---------- */

/** Every credible university pair, used to generate /compare/$a-vs-$b routes. */
export function comparisonPairs(): Array<{ slug: string; left: University; right: University }> {
  const pairs: Array<{ slug: string; left: University; right: University }> = [];
  for (let i = 0; i < universities.length; i++) {
    for (let j = i + 1; j < universities.length; j++) {
      const left = universities[i]!;
      const right = universities[j]!;
      // Only pair universities that share at least one programme.
      const shared = listOfferingsByUniversity(left.slug).some((o) =>
        listOfferingsByUniversity(right.slug).some((p) => p.programmeSlug === o.programmeSlug),
      );
      if (shared) pairs.push({ slug: `${left.slug}-vs-${right.slug}`, left, right });
    }
  }
  return pairs;
}

/* ---------- formatting helpers ---------- */

export function formatINR(value: number | null | undefined): string {
  if (value == null) return "Not published";
  if (value >= 10000000) return `₹${(value / 10000000).toFixed(2)} Cr`;
  if (value >= 100000) return `₹${(value / 100000).toFixed(2)} L`;
  if (value >= 1000) return `₹${Math.round(value / 1000)}K`;
  return `₹${value}`;
}

export function approvalLabels(university: University): string[] {
  return university.approvals.map((a) => (a.status ? `${a.body} ${a.status}` : a.body));
}

/** Data-quality signal used by the admin/QA view and page badges. */
export function unverifiedCount(): { universities: number; programmes: number; offerings: number } {
  return {
    universities: universities.filter((u) => !u.verified).length,
    programmes: programmes.filter((p) => !p.verified).length,
    offerings: offerings.filter((o) => !o.verified).length,
  };
}

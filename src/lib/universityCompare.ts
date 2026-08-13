/**
 * Data layer for the NEW university comparison experience (/compare/universities).
 *
 * Read-only: it reshapes the existing master dataset + existing University
 * records. It never invents a value — anything missing becomes `null` and the
 * UI prints "Not available".
 */
import { universities as universityRecords } from "@/data";
import type { University } from "@/data";
import {
  formatFee,
  getUniversityBySlug,
  programmesOf,
  scholarshipsOf,
  type UniversityRecordJson,
} from "@/lib/universityData";

export const NOT_AVAILABLE = "Not available";

export interface CompareUniversity {
  slug: string;
  name: string;
  shortName: string;
  record: University;
  json: UniversityRecordJson | undefined;
  /** Lowest published total programme fee, INR. */
  lowestFee: number | null;
  specialisationCount: number;
  programmeCount: number;
  rating: number | undefined;
  path: string;
}

export interface CompareRow {
  label: string;
  /** Cell text per university, in the same order as the selection. */
  value: (u: CompareUniversity) => string | null;
  /** "lower" / "higher" numeric highlight, when a meaningful winner exists. */
  better?: "lower" | "higher";
  /** Numeric basis for the highlight. */
  numeric?: (u: CompareUniversity) => number | null;
  /** Label shown on the winning cell. */
  hint?: string;
}

export interface CompareGroup {
  id: string;
  title: string;
  rows: CompareRow[];
}

const uniqueSpecialisations = (slug: string) => {
  const names = new Set<string>();
  for (const p of programmesOf(slug)) {
    for (const s of p.specializations) names.add(s.specialisation_name);
  }
  return names.size;
};

const lowestTotalFee = (slug: string): number | null => {
  const totals = programmesOf(slug)
    .map((p) => p.fees.total_programme_fee ?? p.fees.normal)
    .filter((v): v is number => typeof v === "number" && v > 0);
  return totals.length ? Math.min(...totals) : null;
};

export function compareUniverse(): CompareUniversity[] {
  return universityRecords
    .map((record) => {
      const json = getUniversityBySlug(record.slug);
      const entry: CompareUniversity = {
        slug: record.slug,
        name: record.name,
        shortName: record.shortName,
        record,
        json,
        lowestFee: lowestTotalFee(record.slug),
        specialisationCount: uniqueSpecialisations(record.slug),
        programmeCount: json?.programmes.length ?? 0,
        rating: record.rating,
        path: `/universities/${record.slug}`,
      };
      return entry;
    })
    .sort((a, b) => a.shortName.localeCompare(b.shortName));
}

const durations = (u: CompareUniversity) => {
  const list = [...new Set((u.json?.programmes ?? []).map((p) => p.duration).filter(Boolean))] as string[];
  return list.length ? list.slice(0, 3).join(", ") : null;
};

const eligibility = (u: CompareUniversity) => {
  const first = (u.json?.programmes ?? []).find((p) => p.eligibility.summary);
  return first?.eligibility.summary ?? null;
};

const entranceExam = (u: CompareUniversity) =>
  u.json?.admissions.entrance_exam ??
  (u.json?.programmes ?? []).find((p) => p.eligibility.entrance_exam)?.eligibility.entrance_exam ??
  null;

export const compareGroups: CompareGroup[] = [
  {
    id: "identity",
    title: "Basics",
    rows: [
      { label: "Rating", value: (u) => (u.rating ? `${u.rating}/5` : null) },
      { label: "Location", value: (u) => [u.record.city, u.record.state].filter(Boolean).join(", ") || null },
      { label: "Established", value: (u) => (u.record.establishedYear ? String(u.record.establishedYear) : null) },
      { label: "Type", value: (u) => u.record.type ?? null },
      { label: "Learning mode", value: (u) => u.record.modes.join(" / ") || null },
    ],
  },
  {
    id: "recognition",
    title: "Recognition",
    rows: [
      { label: "UGC status", value: (u) => u.json?.recognition.UGC_status ?? null },
      { label: "UGC-DEB", value: (u) => u.json?.recognition.UGC_DEB_status ?? null },
      { label: "NAAC", value: (u) => u.json?.recognition.NAAC_status ?? null },
      { label: "NIRF", value: (u) => u.json?.recognition.NIRF_information ?? null },
      { label: "Accreditation", value: (u) => u.json?.recognition.accreditation ?? null },
    ],
  },
  {
    id: "academics",
    title: "Academics",
    rows: [
      { label: "Duration", value: durations },
      {
        label: "Programmes",
        value: (u) => (u.programmeCount ? String(u.programmeCount) : null),
        better: "higher",
        numeric: (u) => u.programmeCount || null,
        hint: "More choice",
      },
      {
        label: "Specialisations",
        value: (u) => (u.specialisationCount ? String(u.specialisationCount) : null),
        better: "higher",
        numeric: (u) => u.specialisationCount || null,
        hint: "More options",
      },
      { label: "Eligibility", value: eligibility },
    ],
  },
  {
    id: "fees",
    title: "Fees",
    rows: [
      {
        label: "Lowest total fee",
        value: (u) => formatFee(u.lowestFee),
        better: "lower",
        numeric: (u) => u.lowestFee,
        hint: "Lower fee",
      },
      { label: "Fee band", value: (u) => u.record.feeRangeLabel || null },
      {
        label: "Application fee",
        value: (u) => formatFee(u.json?.admissions.application_fee ?? null),
      },
      {
        label: "Scholarships",
        value: (u) => {
          const n = scholarshipsOf(u.slug).length;
          return n ? `${n} published` : null;
        },
        better: "higher",
        numeric: (u) => scholarshipsOf(u.slug).length || null,
        hint: "More schemes",
      },
    ],
  },
  {
    id: "admission",
    title: "Admission",
    rows: [
      { label: "Next intake", value: (u) => u.json?.admissions.next_expected_intake ?? null },
      { label: "Admission cycle", value: (u) => u.json?.admissions.admission_cycle ?? null },
      { label: "Selection process", value: (u) => u.json?.admissions.selection_process ?? null },
      { label: "Entrance exam", value: entranceExam },
      {
        label: "Admission steps",
        value: (u) => (u.record.admissionProcess.length ? `${u.record.admissionProcess.length} steps` : null),
      },
    ],
  },
  {
    id: "career",
    title: "Career",
    rows: [
      {
        label: "Career roles listed",
        value: (u) => {
          const roles = new Set<string>();
          for (const p of u.json?.programmes ?? []) for (const r of p.career.roles) roles.add(r);
          return roles.size ? String(roles.size) : null;
        },
      },
      {
        label: "Higher study paths",
        value: (u) => {
          const paths = new Set<string>();
          for (const p of u.json?.programmes ?? []) for (const r of p.career.higher_study) paths.add(r);
          return paths.size ? String(paths.size) : null;
        },
      },
    ],
  },
];

export interface Verdict {
  label: string;
  winner: string;
  detail: string;
}

/** Factual "best for" lines — only emitted when the data supports them. */
export function quickVerdicts(selected: CompareUniversity[]): Verdict[] {
  if (selected.length < 2) return [];
  const out: Verdict[] = [];

  const feeRanked = selected.filter((u) => typeof u.lowestFee === "number");
  if (feeRanked.length >= 2) {
    const best = feeRanked.reduce((a, b) => (a.lowestFee! <= b.lowestFee! ? a : b));
    if (feeRanked.some((u) => u.lowestFee !== best.lowestFee)) {
      out.push({
        label: "Lower published fee",
        winner: best.shortName,
        detail: formatFee(best.lowestFee) ?? "",
      });
    }
  }

  const specRanked = selected.filter((u) => u.specialisationCount > 0);
  if (specRanked.length >= 2) {
    const best = specRanked.reduce((a, b) => (a.specialisationCount >= b.specialisationCount ? a : b));
    if (specRanked.some((u) => u.specialisationCount !== best.specialisationCount)) {
      out.push({
        label: "More specialisations",
        winner: best.shortName,
        detail: `${best.specialisationCount} listed`,
      });
    }
  }

  const progRanked = selected.filter((u) => u.programmeCount > 0);
  if (progRanked.length >= 2) {
    const best = progRanked.reduce((a, b) => (a.programmeCount >= b.programmeCount ? a : b));
    if (progRanked.some((u) => u.programmeCount !== best.programmeCount)) {
      out.push({
        label: "Wider programme range",
        winner: best.shortName,
        detail: `${best.programmeCount} programmes`,
      });
    }
  }

  return out.slice(0, 3);
}

/** Slugs whose cells win a highlighted row. */
export function winnersFor(row: CompareRow, selected: CompareUniversity[]): Set<string> {
  if (!row.better || !row.numeric) return new Set();
  const pairs = selected
    .map((u) => ({ slug: u.slug, n: row.numeric!(u) }))
    .filter((p): p is { slug: string; n: number } => typeof p.n === "number");
  if (pairs.length < 2) return new Set();
  const target =
    row.better === "lower"
      ? Math.min(...pairs.map((p) => p.n))
      : Math.max(...pairs.map((p) => p.n));
  if (pairs.every((p) => p.n === target)) return new Set();
  return new Set(pairs.filter((p) => p.n === target).map((p) => p.slug));
}

import type { Level, Mode, Programme, Specialisation } from "./types";
import {
  academicSession,
  allProgrammePairs,
  courseIndexByProgramme,
  programmeFeeRangeLabel,
  slugify,
} from "@/lib/universityData";

/**
 * Derived view of the master JSON dataset: the union of every programme any
 * university in the dataset offers. No programme facts are authored here.
 */

function toLevel(level: string): Level {
  if (level === "UG" || level === "PG" || level === "Diploma" || level === "Certificate") return level;
  return "Certificate";
}

function toModes(mode: string): Mode[] {
  const m = mode.toLowerCase();
  if (m === "both") return ["Online", "Distance"];
  if (m === "distance" || m === "odl") return ["Distance"];
  if (m === "hybrid") return ["Hybrid"];
  return ["Online"];
}

function durationYears(duration: string | null): number {
  const match = duration?.match(/(\d+(?:\.\d+)?)\s*year/i);
  return match ? Number(match[1]) : 0;
}

const map = new Map<string, Programme>();
const specMap = new Map<string, Specialisation>();

for (const { programme } of allProgrammePairs()) {
  const existing = map.get(programme.slug);
  const providers = courseIndexByProgramme(programme.slug).length;
  if (!existing) {
    map.set(programme.slug, {
      slug: programme.slug,
      name: programme.programme_name,
      shortName: programme.degree ?? programme.programme_name,
      level: toLevel(String(programme.level)),
      durationYears: durationYears(programme.duration),
      mode: toModes(programme.mode),
      eligibility: programme.eligibility.summary ?? "",
      summary: `${programme.programme_name} is listed by ${providers} universit${
        providers === 1 ? "y" : "ies"
      } in the ${academicSession} dataset.`,
      whoIsItFor: [],
      feeRangeLabel: programmeFeeRangeLabel(programme.slug),
      verified: (programme.data_status ?? "").startsWith("verified_official"),
    });
  } else {
    // Merge modes and fill an eligibility summary if the first record lacked one.
    for (const m of toModes(programme.mode)) if (!existing.mode.includes(m)) existing.mode.push(m);
    if (!existing.eligibility && programme.eligibility.summary) existing.eligibility = programme.eligibility.summary;
    if (!existing.durationYears) existing.durationYears = durationYears(programme.duration);
  }

  for (const s of programme.specializations) {
    const slug = slugify(s.specialisation_name);
    const key = `${programme.slug}::${slug}`;
    if (!specMap.has(key)) {
      specMap.set(key, {
        slug,
        name: s.official_name ?? s.specialisation_name,
        programme: programme.slug,
        summary: "",
        careerPaths: [],
        coreSubjects: [],
      });
    }
  }
}

export const programmes: Programme[] = [...map.values()];
export const specialisations: Specialisation[] = [...specMap.values()];

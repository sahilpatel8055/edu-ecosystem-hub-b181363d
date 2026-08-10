import type { Approval, Mode, University } from "./types";
import {
  academicSession,
  allUniversities,
  feeRangeLabel,
  recognitionLabels,
  type UniversityRecordJson,
} from "@/lib/universityData";

/**
 * Derived view of the master JSON dataset.
 *
 * This file contains NO university facts of its own — it only reshapes
 * `university-master-data-2026-27.json` into the `University` shape the
 * existing templates already consume. Update the JSON, not this file.
 */

function modes(mode: string): Mode[] {
  const m = mode.toLowerCase();
  if (m === "both") return ["Online", "Distance"];
  if (m === "distance" || m === "odl") return ["Distance"];
  if (m === "hybrid") return ["Hybrid"];
  return ["Online"];
}

function approvals(u: UniversityRecordJson): Approval[] {
  const r = u.recognition;
  const rows: Array<[string, string | null]> = [
    ["UGC", r.UGC_status],
    ["UGC-DEB", r.UGC_DEB_status],
    ["NAAC", r.NAAC_status],
    ["NIRF", r.NIRF_information],
    ["Accreditation", r.accreditation],
  ];
  return rows
    .filter(([, status]) => typeof status === "string" && status.trim().length > 0)
    .map(([body, status]) => ({ body, status: status as string }));
}

function locationParts(location: string | null): { city: string; state: string } {
  if (!location) return { city: "", state: "" };
  const [city, ...rest] = location.split(",").map((s) => s.trim());
  return { city: city ?? "", state: rest.join(", ") };
}

function toUniversity(u: UniversityRecordJson): University {
  const { city, state } = locationParts(u.basic_information.location);
  const record: University = {
    slug: u.slug,
    name: u.university_name,
    shortName: u.short_name,
    city,
    state: state || u.basic_information.state || "",
    modes: modes(u.mode),
    approvals: approvals(u),
    feeRangeLabel: feeRangeLabel(u.slug),
    summary:
      u.notes[0] ??
      `${u.university_name} lists ${u.programmes.length} ${u.mode.toLowerCase()} programme${
        u.programmes.length === 1 ? "" : "s"
      } for the ${academicSession} session.`,
    highlights: recognitionLabels(u),
    // Editorial fields are intentionally empty: the dataset publishes facts only.
    pros: [],
    cons: [],
    admissionProcess: u.admissions.admission_steps ?? [],
    documentsRequired: u.admissions.required_documents ?? [],
    verified: (u.data_status ?? "").startsWith("verified_official"),
    lastUpdated: u.last_verified ?? "",
  };
  if (u.basic_information.established_year) record.establishedYear = u.basic_information.established_year;
  const site = u.basic_information.official_online_portal ?? u.basic_information.official_website;
  if (site) record.websiteUrl = site;
  const apply = u.admissions.application_url ?? u.basic_information.official_admission_portal;
  if (apply) record.applyUrl = apply;
  return record;
}

export const universities: University[] = allUniversities().map(toUniversity);

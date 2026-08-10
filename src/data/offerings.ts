import type { Offering } from "./types";
import { allProgrammePairs, slugify } from "@/lib/universityData";

/**
 * Derived view of the master JSON dataset: one row per university × programme.
 * Fees are passed through verbatim — a `null` stays `null` so the UI can hide
 * the row rather than display an invented number.
 */
export const offerings: Offering[] = allProgrammePairs().map(({ university, programme }) => {
  const row: Offering = {
    id: `${university.slug}--${programme.slug}`,
    universitySlug: university.slug,
    programmeSlug: programme.slug,
    specialisations: programme.specializations.map((s) => slugify(s.specialisation_name)),
    durationLabel: programme.duration ?? "",
    fee: {
      total: programme.fees.total_programme_fee,
      perSemester: programme.fees.semester,
      perYear: programme.fees.annual,
      emiFrom: programme.fees.emi,
      registrationFee: programme.fees.registration_fee,
      examFee: programme.fees.examination_fee,
      currency: "INR",
    },
    verified: (programme.fees.fee_verification_status ?? "").startsWith("verified_official"),
    lastUpdated: programme.last_verified ?? "",
  };
  const status = programme.admission.application_status;
  if (typeof status === "string" && status.trim()) {
    row.admissionOpen = /open/i.test(status);
  }
  if (programme.admission.intake) row.nextSessionLabel = programme.admission.intake;
  return row;
});

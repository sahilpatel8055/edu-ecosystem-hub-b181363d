import type { Offering } from "./types";
import { allProgrammePairs, slugify } from "@/lib/universityData";
import { sheetFee } from "@/lib/feeSheet";
import { openUniversityFee } from "@/lib/openUniversityFees";

/**
 * Derived view of the master JSON dataset: one row per university × programme.
 * Fees are passed through verbatim — a `null` stays `null` so the UI can hide
 * the row rather than display an invented number.
 *
 * Precedence: official open-university fee documents > AVEDU fee sheet >
 * the value already in the master dataset.
 */
export const offerings: Offering[] = allProgrammePairs().map(({ university, programme }) => {
  const official = openUniversityFee(university.slug, programme.slug);
  const corrected = official ? undefined : sheetFee(university.slug, programme.slug, programme.duration);
  const row: Offering = {
    id: `${university.slug}--${programme.slug}`,
    universitySlug: university.slug,
    programmeSlug: programme.slug,
    specialisations: programme.specializations.map((s) => slugify(s.specialisation_name)),
    durationLabel: programme.duration ?? "",
    fee: {
      total: official ? official.total : (corrected?.total ?? programme.fees.total_programme_fee),
      perSemester: official ? official.perSemester : (corrected?.perSemester ?? programme.fees.semester),
      perYear: official ? official.perYear : (corrected?.perYear ?? programme.fees.annual),
      emiFrom: official ? null : (corrected?.emiFrom ?? programme.fees.emi),
      listTotal: official ? null : (corrected?.listTotal ?? null),
      discountPercent: official ? null : (corrected?.discountPercent ?? null),
      registrationFee: official?.registrationFee ?? programme.fees.registration_fee,
      examFee: official?.examFee ?? programme.fees.examination_fee,
      currency: "INR",
    },
    verified:
      official != null ||
      corrected != null ||
      (programme.fees.fee_verification_status ?? "").startsWith("verified_official"),
    lastUpdated: official ? "2026-08-14" : (programme.last_verified ?? ""),
  };
  const status = programme.admission.application_status;
  if (typeof status === "string" && status.trim()) {
    row.admissionOpen = /open/i.test(status);
  }
  if (programme.admission.intake) row.nextSessionLabel = programme.admission.intake;
  return row;
});


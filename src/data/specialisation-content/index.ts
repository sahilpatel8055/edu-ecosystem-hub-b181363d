/** Resolver: authored specialisation record where it exists, derived otherwise. */
import { averagePackageFor } from "@/lib/careerSalaries";
import type { CourseFamily, FamilyOffer, FamilySpecialisation } from "@/lib/courseFamily";
import { findAuthoredSpec } from "./authored";
import {
  baseAdmissionSteps,
  baseEligibility,
  baseHighlights,
  baseWhyOnline,
  buildSyllabus,
  deriveSpecContent,
  feeRangeFor,
  type SpecContent,
  type SpecCtx,
} from "./types";

export function specContentFor(
  family: CourseFamily,
  spec: FamilySpecialisation,
  offers: FamilyOffer[],
): SpecContent {
  const authored = findAuthoredSpec(spec.slug);
  const list = offers.length ? offers : family.offers;
  if (!authored) return deriveSpecContent(family, spec, offers);

  const ctx: SpecCtx = {
    family,
    specName: spec.name,
    providers: list.length,
    feeRange: feeRangeFor(list, family),
    duration: family.durationLabel,
    level: family.level,
  };
  const groups = (ctx.level === "UG" ? authored.subjects.ug : undefined) ?? authored.subjects.pg;

  return {
    what: authored.what(ctx),
    highlights: baseHighlights(ctx, list),
    scope: authored.scope(ctx),
    scopeAreas: authored.scopeAreas,
    eligibility: baseEligibility(ctx),
    eligibilityNote:
      "Eligibility is set by each university, not by the specialisation. Confirm the exact percentage rule on the university's own admission page before you pay.",
    admissionSteps: baseAdmissionSteps(ctx),
    whyOnline: authored.whyOnline ?? baseWhyOnline(ctx),
    syllabus: buildSyllabus(groups, spec.name),
    syllabusNote:
      "Indicative structure compiled from the papers universities publish for this track. The exact paper list and credits are decided by your university.",
    careers: authored.roles.map((r) => ({
      role: r.role,
      salary: r.salary ?? averagePackageFor(r.role),
      detail: r.detail,
    })),
    salaryNote:
      "Salary bands are indicative ranges for Indian hiring, not university placement promises. Your package depends on prior experience, city and interview performance.",
    recruiters: authored.recruiters,
    industries: authored.industries.length
      ? authored.industries
      : [...new Set(list.flatMap((o) => o.industries))].slice(0, 12),
    faqs: [
      ...(authored.extraFaqs ?? []),
      ...deriveSpecContent(family, spec, offers).faqs,
    ].slice(0, 8),
    researched: true,
  };
}

export * from "./types";
export { findAuthoredSpec } from "./authored";

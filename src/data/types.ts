/**
 * Phase 1 — file-based data foundation.
 *
 * Everything the site renders comes from plain TypeScript files in `src/data/`.
 * No database, no external account: the whole dataset moves with the project.
 *
 * Rule: `verified: false` means the numbers are placeholders you must replace
 * with the official figure before publishing that page.
 */

export type Level = "UG" | "PG" | "Diploma" | "Certificate";
export type Mode = "Online" | "Distance" | "Hybrid";

/** A regulatory approval / accreditation held by a university. */
export interface Approval {
  /** e.g. "UGC-DEB", "AICTE", "NAAC", "WES", "AIU" */
  body: string;
  /** e.g. "A++", "Entitled", "Recognised" */
  status: string;
  /** Academic years the entitlement covers, e.g. "2024-25 to 2028-29" */
  validity?: string;
  /** Public URL that proves it. Leave empty until you have one. */
  sourceUrl?: string;
}

export interface FeeBreakdown {
  /** Total programme fee in INR. */
  total: number | null;
  perSemester?: number | null;
  perYear?: number | null;
  /** Lowest advertised no-cost EMI, INR/month. */
  emiFrom?: number | null;
  /** Published list price before the current discount, when one applies. */
  listTotal?: number | null;
  /** Discount applied to the list price, in percent. */
  discountPercent?: number | null;
  registrationFee?: number | null;
  examFee?: number | null;
  currency: "INR";
}

export interface PlacementData {
  supportAvailable: boolean;
  /** INR per annum. */
  averagePackage?: number | null;
  highestPackage?: number | null;
  recruiters?: string[];
  note?: string;
}

export interface University {
  slug: string;
  name: string;
  shortName: string;
  city: string;
  state: string;
  establishedYear?: number;
  /** Only set when the dataset publishes it — never inferred. */
  type?: "Private" | "State" | "Central" | "Deemed" | "Open";
  modes: Mode[];
  approvals: Approval[];
  /** 0–5, only present once real reviews exist. */
  rating?: number;
  reviewCount?: number;
  feeRangeLabel: string;
  summary: string;
  highlights: string[];
  pros: string[];
  cons: string[];
  /** One-paragraph editorial verdict — omitted when not written yet. */
  verdict?: string;
  admissionProcess: string[];
  documentsRequired: string[];
  examPattern?: string;
  websiteUrl?: string;
  logoUrl?: string;
  /** Deep link used to hand the lead over to the AVEDU application flow. */
  applyUrl?: string;
  verified: boolean;
  lastUpdated: string;
}

export interface Specialisation {
  slug: string;
  name: string;
  /** Programme slug this specialisation belongs to. */
  programme: string;
  summary: string;
  careerPaths: string[];
  coreSubjects: string[];
}

export interface Programme {
  slug: string;
  name: string;
  shortName: string;
  level: Level;
  durationYears: number;
  mode: Mode[];
  eligibility: string;
  summary: string;
  whoIsItFor: string[];
  feeRangeLabel: string;
  verified: boolean;
}

/** A programme actually offered by a university — the highest-intent page type. */
export interface Offering {
  /** `${universitySlug}--${programmeSlug}` */
  id: string;
  universitySlug: string;
  programmeSlug: string;
  specialisations: string[];
  durationLabel: string;
  fee: FeeBreakdown;
  placement?: PlacementData;
  approvalNote?: string;
  /** Only set when the dataset publishes an application status. */
  admissionOpen?: boolean;
  nextSessionLabel?: string;
  verified: boolean;
  lastUpdated: string;
}

/** A lead captured anywhere on the site (Phase 6 persists these). */
export interface Lead {
  name: string;
  phone: string;
  email?: string;
  city?: string;
  programmeSlug?: string;
  universitySlug?: string;
  sourcePath: string;
  createdAt: string;
}

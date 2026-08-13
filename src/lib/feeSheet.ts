/**
 * Verified fee sheet (2026-27) supplied by the AVEDU fee desk.
 *
 * Some universities publish list prices; the discount rules below turn the
 * published figure into the fee a student actually pays. EMI is left at the
 * published no-cost EMI unless the university explicitly discounts it.
 */

export type FeeCourseKey =
  | "mba"
  | "mca"
  | "bba"
  | "bca"
  | "bcom"
  | "mcom"
  | "ba"
  | "ma"
  | "msc";

const UG_KEYS: FeeCourseKey[] = ["bba", "bca", "bcom", "ba"];

interface SheetRow {
  emi: number;
  full: number;
}

const sheet: Record<string, Partial<Record<FeeCourseKey, SheetRow>>> = {
  "amity-online": {
    mba: { emi: 8906, full: 225000 },
    mca: { emi: 7877, full: 199000 },
    bba: { emi: 7877, full: 199000 },
    bca: { emi: 6927, full: 175000 },
    bcom: { emi: 4552, full: 115000 },
    mcom: { emi: 5938, full: 150000 },
    ba: { emi: 4552, full: 115000 },
    ma: { emi: 5938, full: 150000 },
    msc: { emi: 10885, full: 275000 },
  },
  "manipal-university-jaipur": {
    mba: { emi: 7500, full: 180000 },
    bba: { emi: 3875, full: 139500 },
    mca: { emi: 6583, full: 158000 },
    bca: { emi: 3875, full: 139500 },
    mcom: { emi: 4500, full: 108000 },
    bcom: { emi: 2750, full: 99000 },
    ma: { emi: 3333, full: 80000 },
  },
  "chandigarh-university-online": {
    mba: { emi: 6875, full: 165000 },
    mca: { emi: 4843, full: 116250 },
    msc: { emi: 3125, full: 75000 },
    ma: { emi: 3125, full: 75000 },
    bba: { emi: 5468, full: 131250 },
    bca: { emi: 5531, full: 132750 },
    ba: { emi: 5510, full: 131250 },
  },
  "nmims-online": {
    mba: { emi: 9565, full: 220000 },
    bba: { emi: 5695, full: 150000 },
    bcom: { emi: 4695, full: 108000 },
  },
  vgu: {
    mba: { emi: 6250, full: 150000 },
    ba: { emi: 3000, full: 72000 },
    bba: { emi: 5500, full: 132000 },
    bca: { emi: 5500, full: 132000 },
    ma: { emi: 3000, full: 72000 },
    mca: { emi: 6250, full: 150000 },
    msc: { emi: 3000, full: 72000 },
  },
  "lpu-online": {
    mba: { emi: 6733, full: 161600 },
    bba: { emi: 5100, full: 122400 },
    mca: { emi: 5400, full: 129600 },
    msc: { emi: 3743, full: 81600 },
    mcom: { emi: 3400, full: 81600 },
    ma: { emi: 3644, full: 65600 },
    bca: { emi: 5100, full: 122400 },
    ba: { emi: 4100, full: 98400 },
  },
  "jain-online": {
    mcom: { emi: 5458, full: 125000 },
    mca: { emi: 5667, full: 130000 },
    mba: { emi: 6917, full: 160000 },
    ma: { emi: 6156, full: 90000 },
    bcom: { emi: 5375, full: 120000 },
    bca: { emi: 5375, full: 120000 },
  },
  "dpu-online": {
    mba: { emi: 7891, full: 189400 },
    bba: { emi: 6058, full: 145400 },
    mca: { emi: 5833, full: 140000 },
  },
};

interface DiscountRule {
  /** Fraction taken off the published full programme fee. */
  total: number;
  /** Fraction taken off the per-year figure. */
  annual: number;
  /** Fraction taken off the per-semester figure. */
  semester: number;
  /** Fraction taken off the published no-cost EMI. */
  emi: number;
}

const none: DiscountRule = { total: 0, annual: 0, semester: 0, emi: 0 };

function discountFor(universitySlug: string, key: FeeCourseKey): DiscountRule {
  const isUg = UG_KEYS.includes(key);
  switch (universitySlug) {
    case "amity-online":
      return isUg
        ? { total: 0.12, annual: 0.05, semester: 0.12, emi: 0.05 }
        : { total: 0.08, annual: 0.05, semester: 0.08, emi: 0.05 };
    case "manipal-university-jaipur":
      if (key === "mba") return { total: 0.15, annual: 0.15, semester: 0.15, emi: 0 };
      if (key === "mca") return { total: 0.1, annual: 0.1, semester: 0.1, emi: 0 };
      if (isUg) return { total: 0.1, annual: 0.05, semester: 0, emi: 0 };
      return none;
    case "vgu":
      return { total: 0.15, annual: 0.1, semester: 0, emi: 0 };
    default:
      return none;
  }
}

/** Maps a programme slug to the fee-sheet course key. */
export function feeCourseKey(programmeSlug: string): FeeCourseKey | undefined {
  const s = programmeSlug.toLowerCase();
  if (/(^|-)(mba|master-of-business-administration)(-|$)/.test(s)) return "mba";
  if (/(mca|master-of-computer-applications?)/.test(s)) return "mca";
  if (/(bba|bachelor-of-business-administration)/.test(s)) return "bba";
  if (/(bca|bachelor-of-computer-applications?)/.test(s)) return "bca";
  if (/(b-?com|bachelor-of-commerce)/.test(s)) return "bcom";
  if (/(m-?com|master-of-commerce)/.test(s)) return "mcom";
  if (/(m-?sc|master-of-science)/.test(s)) return "msc";
  if (/(^|-)(m-?a|ma)(-|$)|master-of-arts/.test(s)) return "ma";
  if (/(^|-)(b-?a|ba)(-|$)|bachelor-of-arts/.test(s)) return "ba";
  return undefined;
}

function yearsFrom(duration: string | null | undefined, key: FeeCourseKey): number {
  const m = /(\d+(?:\.\d+)?)\s*year/i.exec(duration ?? "");
  if (m) return Number(m[1]);
  return UG_KEYS.includes(key) ? 3 : 2;
}

export interface SheetFee {
  total: number;
  listTotal: number | null;
  perYear: number;
  perSemester: number;
  emiFrom: number;
  discountPercent: number;
}

/** Corrected fee block for a university × programme, or undefined when not on the sheet. */
export function sheetFee(
  universitySlug: string,
  programmeSlug: string,
  duration?: string | null,
): SheetFee | undefined {
  const key = feeCourseKey(programmeSlug);
  if (!key) return undefined;
  const row = sheet[universitySlug]?.[key];
  if (!row) return undefined;

  const rule = discountFor(universitySlug, key);
  const years = yearsFrom(duration, key);
  const r = (n: number) => Math.round(n);

  return {
    total: r(row.full * (1 - rule.total)),
    listTotal: rule.total > 0 ? row.full : null,
    perYear: r((row.full / years) * (1 - rule.annual)),
    perSemester: r((row.full / (years * 2)) * (1 - rule.semester)),
    emiFrom: r(row.emi * (1 - rule.emi)),
    discountPercent: Math.round(rule.total * 100),
  };
}
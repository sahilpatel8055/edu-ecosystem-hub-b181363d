/**
 * Verified fee overrides for the state / national open universities.
 *
 * Every row below is transcribed literally from a document supplied by the
 * AVEDU fee desk (see `source` on each row). Nothing is derived or estimated:
 * where a document does not state a programme-total, `total` stays `null` so
 * the UI shows the "not published" label instead of an invented number.
 *
 * Documents used (verified 2026-08-14):
 *  - IGNOU / DU SOL / BAOU  -> supplied fee spreadsheet
 *  - NSOU                   -> "Fee Structure for the different courses run by
 *                              the University", Netaji Subhas Open University
 *  - KSOU                   -> "KSOU Fee Structure", Karnataka State Open
 *                              University, Mysuru
 */

export type FeeBasis = "total" | "year" | "semester";

export interface OpenUniFee {
  /** Programme total in INR, or null when the document does not state one. */
  total: number | null;
  perYear: number | null;
  perSemester: number | null;
  registrationFee: number | null;
  examFee: number | null;
  prospectusFee: number | null;
  /** What the published amount actually represents. */
  basis: FeeBasis;
  source: string;
  note: string;
}

const IGNOU_SRC = "IGNOU programme fee sheet (supplied fee desk document)";
const SOL_SRC = "DU SOL programme fee sheet (supplied fee desk document)";
const BAOU_SRC = "BAOU programme fee sheet (supplied fee desk document)";
const NSOU_SRC = "NSOU official fee structure (wbnsou.ac.in fee structure PDF)";
const KSOU_SRC = "KSOU official fee structure PDF (Karnataka State Open University, Mysuru)";

type Row = Partial<OpenUniFee> & { source: string };

function row(r: Row): OpenUniFee {
  return {
    total: r.total ?? null,
    perYear: r.perYear ?? null,
    perSemester: r.perSemester ?? null,
    registrationFee: r.registrationFee ?? null,
    examFee: r.examFee ?? null,
    prospectusFee: r.prospectusFee ?? null,
    basis: r.basis ?? "total",
    source: r.source,
    note: r.note ?? "",
  };
}

/** Total published per year across `years`. */
function yearly(perYear: number, years: number, source: string, note = ""): OpenUniFee {
  return row({
    total: perYear * years,
    perYear,
    perSemester: Math.round(perYear / 2),
    basis: "year",
    source,
    note: note || `Published as ₹${perYear.toLocaleString("en-IN")} per year for ${years} years.`,
  });
}

/** Published programme total, split evenly for display only. */
function programme(total: number, years: number, source: string, note = ""): OpenUniFee {
  return row({
    total,
    perYear: Math.round(total / years),
    perSemester: Math.round(total / (years * 2)),
    basis: "total",
    source,
    note: note || "Published as a full programme fee; yearly split shown for guidance only.",
  });
}

/* ------------------------------------------------------------------ IGNOU */

const ignou: Record<string, OpenUniFee> = {
  "master-of-commerce": yearly(9300, 2, IGNOU_SRC),
  "master-of-business-administration": yearly(31000, 2, IGNOU_SRC),
  "master-of-computer-applications": yearly(25000, 2, IGNOU_SRC),
  "bachelor-of-arts": programme(13200, 3, IGNOU_SRC),
  "bachelor-of-commerce": programme(17600, 3, IGNOU_SRC),
  "bachelor-of-computer-applications": programme(23700, 3, IGNOU_SRC),
};

/* ----------------------------------------------------------------- DU SOL */

const solUgBase = 30360;
const solUgHons = 31860;
const solUgApplied = 39360;
const solManagement = 63360;

const duSol: Record<string, OpenUniFee> = {
  "b-com": programme(solUgBase, 3, SOL_SRC),
  "b-com-hons": programme(solUgHons, 3, SOL_SRC),
  "b-a-hons-english": programme(solUgHons, 3, SOL_SRC),
  "b-a-hons-political-science": programme(solUgHons, 3, SOL_SRC),
  "b-a-hons-economics": programme(solUgHons, 3, SOL_SRC),
  "b-a-programme-with-english": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-hindi": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-history": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-political-science": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-economics": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-mathematics": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-education": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-sanskrit": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-urdu": programme(solUgBase, 3, SOL_SRC),
  "b-a-programme-with-computer-applications": programme(solUgApplied, 3, SOL_SRC),
  "bachelor-of-management-studies": programme(solManagement, 3, SOL_SRC),
  "bachelor-of-business-administration-fia": programme(solManagement, 3, SOL_SRC),
  "m-a-political-science": programme(10870, 2, SOL_SRC),
  "m-a-history": programme(10870, 2, SOL_SRC),
  "m-a-sanskrit": programme(10870, 2, SOL_SRC),
  "m-a-hindi": programme(11170, 2, SOL_SRC),
  "m-com": programme(11170, 2, SOL_SRC),
  "master-of-business-administration-mba": programme(110440, 2, SOL_SRC),
};

/* ------------------------------------------------------------------- BAOU */

const baouNote =
  "Published in the supplied BAOU fee sheet as the annual programme fee; the programme total is the annual fee across the standard programme duration.";

const baou: Record<string, OpenUniFee> = {
  "master-of-arts-in-english-meg": yearly(5300, 2, BAOU_SRC, baouNote),
  "master-of-arts-in-hindi-mhd": yearly(5300, 2, BAOU_SRC, baouNote),
  "master-of-arts-in-sociology-mso": yearly(5300, 2, BAOU_SRC, baouNote),
  "master-of-arts-in-journalism-and-mass-communication-majmc": yearly(7800, 2, BAOU_SRC, baouNote),
  "master-of-library-and-information-science-mlis": yearly(10300, 1, BAOU_SRC, baouNote),
  "bachelor-of-commerce-b-com-hons": yearly(3200, 3, BAOU_SRC, baouNote),
};

/* ------------------------------------------------------------------- NSOU */

const nsou: Record<string, OpenUniFee> = {
  "b-a-in-bengali-hons": yearly(3300, 3, NSOU_SRC),
  "b-a-in-english-hons": yearly(3300, 3, NSOU_SRC),
  "b-a-in-history-hons": yearly(3300, 3, NSOU_SRC),
  "b-a-in-political-science-hons": yearly(3300, 3, NSOU_SRC),
  "b-a-in-public-administration-hons": yearly(3300, 3, NSOU_SRC),
  "b-a-in-sociology-hons": yearly(3300, 3, NSOU_SRC),
  "b-a-in-education-hons": yearly(3300, 3, NSOU_SRC),
  "b-a-in-economics-hons": yearly(3300, 3, NSOU_SRC),
};

/* ------------------------------------------------------------------- KSOU */

const ksouNote =
  "The KSOU fee structure publishes a per-cycle course fee (yearly or semester, as marked against the course) and does not publish a consolidated programme total, so no total is shown.";

function ksou_(
  amount: number,
  basis: Exclude<FeeBasis, "total">,
  exam: number,
): OpenUniFee {
  return row({
    total: null,
    perYear: basis === "year" ? amount : null,
    perSemester: basis === "semester" ? amount : null,
    registrationFee: 500,
    prospectusFee: 200,
    examFee: exam,
    basis,
    source: KSOU_SRC,
    note: ksouNote,
  });
}

const ksou: Record<string, OpenUniFee> = {
  ba: ksou_(4000, "year", 1100),
  "b-com": ksou_(4500, "year", 1200),
  "b-sc-general": ksou_(6000, "semester", 1500),
  bca: ksou_(8000, "semester", 1500),
  "b-lib-i-sc": ksou_(5100, "year", 1500),
  ma: ksou_(5000, "year", 1500),
  "m-com": ksou_(5000, "year", 1500),
  mba: ksou_(10000, "semester", 2000),
  "m-sc": ksou_(5000, "semester", 1500),
  msw: ksou_(5000, "year", 2000),
  mca: ksou_(9000, "semester", 2000),
};

const table: Record<string, Record<string, OpenUniFee>> = {
  ignou,
  "du-sol": duSol,
  baou,
  nsou,
  "ksou-mysuru": ksou,
};

/** Verified open-university fee for a university × programme, if documented. */
export function openUniversityFee(
  universitySlug: string,
  programmeSlug: string,
): OpenUniFee | undefined {
  return table[universitySlug]?.[programmeSlug];
}

/** True when the university's fees come from a supplied official document. */
export function hasOpenUniversityFeeSheet(universitySlug: string): boolean {
  return universitySlug in table;
}

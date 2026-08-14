/**
 * Specialisation page content model.
 *
 * A specialisation page ("Online MBA in Marketing") is rendered from one typed
 * object. Authored records exist for the researched subject areas; every other
 * specialisation is derived from the dataset so the page is still unique and
 * honest without inventing facts.
 */
import type { CourseFaq, Labelled, SyllabusSemester } from "@/data/course-pages/types";
import type { CourseFamily, FamilyOffer, FamilySpecialisation } from "@/lib/courseFamily";
import { averagePackageFor } from "@/lib/careerSalaries";
import { formatFee } from "@/lib/universityData";

export interface SpecHighlight {
  label: string;
  value: string;
}

export interface SpecRole {
  role: string;
  salary: string;
  detail: string;
}

export interface SpecContent {
  /** "What is …" — 2 to 3 paragraphs. */
  what: string[];
  highlights: SpecHighlight[];
  scope: string[];
  scopeAreas: Labelled[];
  eligibility: string[];
  eligibilityNote: string;
  admissionSteps: Labelled[];
  whyOnline: Labelled[];
  syllabus: SyllabusSemester[];
  syllabusNote: string;
  careers: SpecRole[];
  salaryNote: string;
  recruiters: string[];
  industries: string[];
  faqs: CourseFaq[];
  /** True when the copy comes from an authored, researched record. */
  researched: boolean;
}

/** Raw authored record — level-neutral, adapted per family at build time. */
export interface AuthoredSpec {
  /** Slug patterns this record answers to. */
  match: RegExp[];
  /** One-line description used on hub pages and cards. */
  oneLiner: string;
  what: (ctx: SpecCtx) => string[];
  scope: (ctx: SpecCtx) => string[];
  scopeAreas: Labelled[];
  subjects: { pg: string[][]; ug?: string[][] };
  roles: { role: string; detail: string; salary?: string }[];

  recruiters: string[];
  industries: string[];
  whyOnline?: Labelled[];
  extraFaqs?: CourseFaq[];
}

export interface SpecCtx {
  family: CourseFamily;
  specName: string;
  providers: number;
  feeRange: string;
  duration: string;
  level: "UG" | "PG";
}

export const SPEC_YEAR = 2026;

export const feeRangeFor = (offers: FamilyOffer[], family: CourseFamily): string => {
  const totals = offers.map((o) => o.fees.total).filter((n): n is number => !!n && n > 0);
  if (!totals.length) return family.feeRangeLabel;
  const min = Math.min(...totals);
  const max = Math.max(...totals);
  return min === max ? (formatFee(min) ?? family.feeRangeLabel) : `${formatFee(min)} – ${formatFee(max)}`;
};

export function baseHighlights(ctx: SpecCtx, offers: FamilyOffer[]): SpecHighlight[] {
  const modes = [...new Set(offers.flatMap((o) => (o.mode ? [o.mode] : [])))];
  return [
    { label: "Programme", value: `${ctx.family.name} in ${ctx.specName}` },
    { label: "Level", value: ctx.level === "PG" ? "Postgraduate degree" : "Undergraduate degree" },
    { label: "Duration", value: ctx.duration },
    { label: "Mode", value: modes.length ? modes.join(" / ") : "Online" },
    { label: "Fee range", value: ctx.feeRange },
    { label: "Universities offering it", value: `${ctx.providers} in our dataset` },
    { label: "Approvals to check", value: "UGC entitlement + UGC-DEB, NAAC grade, AICTE where applicable" },
    {
      label: "Typical entry salary",
      value: ctx.level === "PG" ? "₹4 – ₹9 LPA (role dependent)" : "₹2.5 – ₹6 LPA (role dependent)",
    },
  ];
}

export function baseEligibility(ctx: SpecCtx): string[] {
  return ctx.level === "PG"
    ? [
        "A bachelor's degree of at least three years from a UGC-recognised university.",
        "Most universities ask for 50% aggregate (45% for reserved categories) — always confirm on the university page.",
        "No entrance exam at most online universities; a few run an internal aptitude test or interview.",
        "Working professionals can apply without a break in employment — attendance is not physical.",
        `Graduates from any stream are usually eligible, though a ${ctx.specName.toLowerCase()} background helps.`,
      ]
    : [
        "10+2 (or an equivalent qualification) from a recognised board.",
        "Minimum aggregate is typically 45–50%; some universities have no cut-off at all.",
        "Open-school and gap-year candidates are accepted by most online universities.",
        "No entrance exam in the majority of programmes.",
        "Applicants must be able to produce their Class 10 and 12 marksheets at verification.",
      ];
}

export function baseAdmissionSteps(ctx: SpecCtx): Labelled[] {
  return [
    {
      title: "Shortlist the university, not just the specialisation",
      detail: `Compare the ${ctx.providers} universities that run ${ctx.specName} on approvals, fee and semester structure before you register.`,
    },
    {
      title: "Register on the online-learning portal",
      detail: "Create an account with your mobile number and email, then verify the OTP to open the application form.",
    },
    {
      title: "Fill the application and pick the specialisation",
      detail: `Choose ${ctx.family.shortName} and then ${ctx.specName} as the elective track — the choice is usually recorded at admission or by semester 2.`,
    },
    {
      title: "Upload documents",
      detail:
        ctx.level === "PG"
          ? "Degree certificate, consolidated marksheets, photo ID, passport photo and category certificate where applicable."
          : "Class 10 and 12 marksheets, photo ID, passport photo and category certificate where applicable.",
    },
    {
      title: "Pay the fee (full, semester or EMI)",
      detail: "Most universities allow semester-wise payment and no-cost EMI; keep the receipt and the fee-structure page.",
    },
    {
      title: "Get the enrolment number and LMS access",
      detail: "Verification takes a few working days, after which recorded lectures, e-books and live-class links open up.",
    },
  ];
}

export function baseWhyOnline(ctx: SpecCtx): Labelled[] {
  return [
    {
      title: "Same degree, UGC-entitled",
      detail: `An online ${ctx.family.shortName} from a UGC-entitled university carries the same academic value as the on-campus degree.`,
    },
    {
      title: "Earn while you learn",
      detail: "Recorded lectures and weekend live classes mean you never have to resign to upskill.",
    },
    {
      title: "Lower total cost",
      detail: `${ctx.feeRange} covers the whole programme — no relocation, hostel or commute spend.`,
    },
    {
      title: "Specialisation depth from semester 2",
      detail: `Core management or subject papers come first, then ${ctx.specName} electives, projects and a capstone.`,
    },
    {
      title: "Portfolio you can show",
      detail: "Case work, live projects and the capstone become interview evidence, which matters more than the mode of study.",
    },
    {
      title: "Placement support included",
      detail: "Most universities give resume reviews, mock interviews and access to a recruiter portal — assistance, not a guarantee.",
    },
  ];
}

const semLabel = (i: number) => `Semester ${i + 1}`;

export function buildSyllabus(groups: string[][], specName: string): SyllabusSemester[] {
  return groups.map((subjects, i) => ({
    semester: semLabel(i),
    subjects: subjects.map((name) => ({
      name,
      type: /project|capstone|dissertation|internship/i.test(name)
        ? ("Project" as const)
        : new RegExp(specName.split(/\s+/)[0] ?? "zzz", "i").test(name)
          ? ("Specialisation" as const)
          : i >= groups.length - 2
            ? ("Elective" as const)
            : ("Core" as const),
    })),
  }));
}

/** Generic, dataset-backed content for specialisations with no authored record. */
export function deriveSpecContent(
  family: CourseFamily,
  spec: FamilySpecialisation,
  offers: FamilyOffer[],
): SpecContent {
  const list = offers.length ? offers : family.offers;
  const ctx: SpecCtx = {
    family,
    specName: spec.name,
    providers: list.length,
    feeRange: feeRangeFor(list, family),
    duration: family.durationLabel,
    level: family.level,
  };
  const roles = [...new Set(list.flatMap((o) => o.careerRoles))].slice(0, 8);
  const subjectPool = [...new Set(list.flatMap((o) => o.specialisations))];

  return {
    what: [
      `The ${family.name} in ${spec.name} is the ${spec.name} elective track of the ${family.degreeName}. You study the same UGC-entitled ${family.shortName} core that every student takes, then specialise through ${spec.name} papers, case work and a final-semester project.`,
      `${ctx.providers} ${ctx.providers === 1 ? "university" : "universities"} in our dataset publish this track, with a total programme fee of ${ctx.feeRange} over ${ctx.duration}. Because the specialisation sits inside the parent degree, your marksheet reads ${family.shortName} with the ${spec.name} electives listed — which is what employers and higher-study admissions look at.`,
    ],
    highlights: baseHighlights(ctx, list),
    scope: [
      `${spec.name} keeps appearing in hiring plans because the work is measurable, and online study lets you apply each module at your current job while you finish the degree.`,
      `Roles reported by the universities offering this track include ${roles.slice(0, 5).join(", ") || "generalist entry roles in the domain"}.`,
    ],
    scopeAreas: roles.slice(0, 6).map((r) => ({
      title: r,
      detail: `Typical package band: ${averagePackageFor(r)}.`,
    })),
    eligibility: baseEligibility(ctx),
    eligibilityNote:
      "Eligibility is set by each university, not by the specialisation. Confirm the exact percentage rule on the university's own admission page before you pay.",
    admissionSteps: baseAdmissionSteps(ctx),
    whyOnline: baseWhyOnline(ctx),
    syllabus: [],
    syllabusNote: subjectPool.length
      ? `Universities running this track list electives such as ${subjectPool.slice(0, 6).join(", ")}. The semester-wise paper list is published by each university and is on its course page.`
      : "The semester-wise paper list is published by each university on its own course page.",
    careers: roles.map((r) => ({
      role: r,
      salary: averagePackageFor(r),
      detail: `Reported by universities offering the ${spec.name} track.`,
    })),
    salaryNote:
      "Salary bands are indicative ranges for Indian hiring, not university placement promises. Your package depends on prior experience, city and interview performance.",
    recruiters: [],
    industries: [...new Set(list.flatMap((o) => o.industries))].slice(0, 12),
    faqs: [
      {
        question: `Is an online ${family.shortName} in ${spec.name} valid for jobs and further study?`,
        answer: `Yes, when the university is UGC-entitled for online programmes and listed on UGC-DEB. The degree does not say "online" differently in terms of validity — it is treated at par with the on-campus ${family.shortName}.`,
      },
      {
        question: `What does the ${spec.name} track cost?`,
        answer: `${ctx.feeRange} for the full programme across the ${ctx.providers} ${ctx.providers === 1 ? "university" : "universities"} we track. Semester-wise payment and EMI options are common.`,
      },
      {
        question: "Does the specialisation change the fee?",
        answer: `No. Universities price the ${family.shortName} as one programme; the ${spec.name} choice changes your electives, not the fee.`,
      },
      {
        question: "Can I switch my specialisation later?",
        answer:
          "Some universities let you change the elective track before semester 2 closes. Ask the admission counsellor in writing — it is not guaranteed everywhere.",
      },
      {
        question: "Are there placements?",
        answer:
          "Universities offer placement assistance: resume help, mock interviews and recruiter portals. That is different from guaranteed placement, so ask what exactly is included for online learners.",
      },
    ],
    researched: false,
  };
}

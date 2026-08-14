/**
 * Authored content for the Online M.Com course page.
 *
 * Original editorial copy. University-specific facts (fees, specialisations,
 * eligibility, approvals) are never written here — they come from the dataset
 * through `CourseFamily`, so this file stays true for every admission cycle.
 */
import {
  defaultAdvantages,
  defaultAdmissionSteps,
  defaultExamPattern,
  defaultFeeNotes,
  defaultHowItWorks,
  defaultLearningFormat,
  defaultLimitations,
  defaultPlacementServices,
  defaultRecognition,
  defaultSalaryFactors,
  defaultSelectionGuide,
  defaultVerifyChecklist,
  defaultVsDistance,
  defaultVsRegular,
  type CourseContent,
} from "./types";

export const onlineMcomContent: CourseContent = {
  seo: {
    title: "Online M.Com: Fees, Eligibility, Admission & Top Universities {year}",
    description:
      "Compare Online M.Com programmes in India — fees, eligibility, syllabus, specialisations, admission process and career paths for {year}.",
    h1: "Online M.Com: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online M.Com",
      "online M.Com fees",
      "online M.Com eligibility",
      "online M.Com admission",
      "best online M.Com universities in India",
      "online M.Com specialisations",
    ],
  },

  intro:
    "An Online M.Com is a two-year postgraduate commerce degree delivered through a university's online learning platform. This page compares the universities in our dataset that publish an Online M.Com — their fees, specialisations, eligibility, examination structure and approvals — so you can shortlist on evidence rather than advertising.",

  overview: [
    "An Online M.Com is the Master of Commerce studied through a university's online mode. Classes, reading material, assessment and student support are delivered digitally, and the degree itself is awarded by the university under the same nomenclature it uses on campus, subject to the entitlement that applies to that university and programme for your admission year.",
    "The degree deepens the commerce foundation laid at the bachelor's stage. Most curricula build from advanced financial accounting and managerial economics into corporate finance, direct and indirect taxation, and research methods, before narrowing into a specialisation and a project or dissertation in the closing semesters. The intent is to prepare graduates for analytical, advisory and decision-support roles in finance, accounts and taxation functions, and to give a foundation for further academic or professional study.",
    "Delivery typically combines live weekend or evening sessions with recorded lectures, a learning management system that holds the semester schedule and submissions, continuous assignments, and university-specified term-end examinations. Several programmes end with a dissertation or research project, particularly where the specialisation leans toward finance or analytics.",
    "The format suits people who cannot pause work or family responsibilities to study full time: B.Com graduates who want a postgraduate qualification without a career break, working accountants and finance executives building formal credentials, candidates preparing for teaching-eligibility examinations such as UGC-NET, and learners pursuing the M.Com alongside CA, CS or CMA preparation.",
    "What differs between universities is substantial — total cost, the specialisation list, whether a dissertation is compulsory, examination mode and proctoring rules, and how much career support is offered to online learners. Treat any single number you see elsewhere as indicative only, and use the university comparison on this page to check the actual published position for your shortlist.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "B.Com and BBA graduates",
      detail:
        "Build postgraduate depth in accounting, finance and taxation immediately after graduation, without pausing to take up full-time study.",
    },
    {
      title: "Working accountants and finance executives",
      detail:
        "Formalise practical experience with a recognised postgraduate qualification that can support internal movement into analysis, planning or advisory roles.",
    },
    {
      title: "Candidates preparing for CA, CS or CMA",
      detail:
        "Study the M.Com alongside professional-body preparation, since the subject overlap in accounting, tax and finance can reinforce both tracks.",
    },
    {
      title: "Aspiring teachers and researchers",
      detail:
        "Use the postgraduate commerce qualification as the base requirement for UGC-NET, assistant professorship eligibility, or further research at the doctoral level.",
    },
  ],

  eligibility: [
    {
      title: "Educational qualification",
      detail:
        "A B.Com degree, or a bachelor's degree with commerce as a significant component (such as BBA or B.A. Economics), from a recognised institution, subject to the individual university's requirement.",
    },
    {
      title: "Minimum marks",
      detail:
        "University-specific. Many universities publish a minimum aggregate at graduation, sometimes with a relaxation for reserved categories; a few admit on qualification alone.",
    },
    {
      title: "Non-commerce graduates",
      detail:
        "Some universities admit graduates from other streams with bridge coursework or a stated additional condition. Confirm this directly with the university before applying if your bachelor's degree was not in commerce.",
    },
    {
      title: "Entrance examination",
      detail:
        "Not a general requirement for this course. Most universities in our dataset admit directly on the qualifying degree; verify the position for the specific university you are considering.",
    },
  ],
  eligibilityNote:
    "Eligibility criteria vary between universities and can change between admission cycles. Verify the current requirement for the specific university and admission year before you apply, particularly if your bachelor's degree was outside commerce.",

  feeNotes: defaultFeeNotes("Online M.Com"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Advanced Financial Accounting", type: "Core" },
        { name: "Managerial Economics", type: "Core" },
        { name: "Business Statistics", type: "Core" },
        { name: "Organisational Behaviour and Management", type: "Core" },
        { name: "Business Environment", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Corporate Finance", type: "Core" },
        { name: "Cost and Management Accounting", type: "Core" },
        { name: "Direct Tax Laws", type: "Core" },
        { name: "Business Research Methods", type: "Core" },
        { name: "Elective", type: "Elective" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Indirect Tax Laws (GST and Customs)", type: "Core" },
        { name: "Strategic Management Accounting", type: "Core" },
        { name: "Specialisation Paper I", type: "Specialisation" },
        { name: "Specialisation Paper II", type: "Specialisation" },
        { name: "Elective", type: "Elective" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "International Business and Finance", type: "Core" },
        { name: "Corporate Governance and Business Ethics", type: "Core" },
        { name: "Specialisation Paper III", type: "Specialisation" },
        { name: "Specialisation Paper IV", type: "Specialisation" },
        { name: "Dissertation / Research Project", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure of how most two-year Online M.Com curricula are organised. The actual subject list, credits, sequence and whether a dissertation is compulsory are set by each university and vary with specialisation — check the syllabus published by the university you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Graduation marksheets (all years or semesters)",
    "Degree or provisional passing certificate",
    "Class 10 and 12 marksheets, where the university asks for them",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Category certificate, where a category benefit is claimed",
    "Work-experience letter, where relevant to a specialisation or fee concession",
  ],
  documentsNote:
    "Universities add their own requirements — a migration certificate, a bridge-course declaration for non-commerce graduates, or an employer NOC, for example. The exact checklist for each university is published on its admission page and on the university-course pages linked below.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "Not every university runs the same mix of live sessions, recordings and reading material. Ask how quickly recordings are released and how much direct faculty contact the programme actually offers before you enrol.",

  examPattern: defaultExamPattern(),
  examNote:
    "Assessment weighting between internal work and the term-end examination, the proctoring method, and the dissertation evaluation process are all university-specific and can change between sessions.",

  specialisationGuide: [
    { goal: "Corporate accounting, audit support and financial reporting roles", specialisation: "Accounting and Finance" },
    { goal: "Tax practice, compliance and advisory work", specialisation: "Taxation" },
    { goal: "Retail and corporate banking, treasury and lending", specialisation: "Banking and Finance" },
    { goal: "Data-led financial planning, reporting and analytics roles", specialisation: "Financial Analytics" },
    { goal: "Cross-border trade, export documentation and global accounts", specialisation: "International Business" },
  ],

  careers: [
    { title: "Accountant", detail: "Maintains books of accounts, prepares statements and supports statutory filings." },
    { title: "Tax Consultant", detail: "Advises on direct and indirect tax compliance, filings and planning for individuals or businesses." },
    { title: "Financial Analyst", detail: "Builds forecasts, evaluates investments and prepares reports that support business decisions." },
    { title: "Auditor (Internal or Assistant)", detail: "Reviews financial records and controls for accuracy and compliance, typically supporting a qualified auditor." },
    { title: "Banking Executive", detail: "Handles lending, operations or relationship roles in retail or corporate banking." },
    { title: "Cost and Budget Analyst", detail: "Tracks cost centres, variance and budget performance for a business unit." },
    { title: "Business Consultant", detail: "Supports client engagements on financial planning, compliance or process improvement." },
    { title: "Investment or Equity Research Associate", detail: "Assists in analysing companies, sectors and markets for research or advisory teams." },
    { title: "Academic or Research Assistant", detail: "Supports teaching or research work, often while pursuing UGC-NET or a doctoral programme." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online M.Com salary figures we cannot attribute to a credible, dated source. Pay depends heavily on prior experience, professional certifications such as CA, CS or CMA, role, employer and location — treat any single quoted \"average salary\" with caution.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance is not guaranteed placement. Ask each university, in writing, which services are available to online learners specifically, and whether recruiter access differs from the campus programme.",

  worthItYes: [
    "You want a postgraduate commerce qualification without leaving your current job or practice",
    "You are preparing for UGC-NET, an assistant professorship, or further research and need the postgraduate base qualification",
    "You are studying alongside CA, CS or CMA and the subject overlap will reinforce both",
    "The specialisation matches a function you are already working in or targeting",
    "You can commit consistent weekly study hours across two years",
  ],
  worthItNo: [
    "You expect the degree by itself to produce a job offer or a promotion",
    "You are choosing the university purely on the lowest advertised fee",
    "Your career objective is still undefined, so the specialisation choice would be arbitrary",
    "You need a campus cohort and in-person routine to stay consistent with study",
    "Your target employer or examination body specifically requires a full-time campus degree",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online M.Com"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Banking and financial services",
    "Accounting and audit firms",
    "Taxation and compliance advisory",
    "Insurance",
    "Investment and asset management",
    "Corporate finance and treasury",
    "E-commerce and retail",
    "Education and research",
    "Consulting",
    "Manufacturing",
  ],

  faqs: [
    {
      question: "What is an Online M.Com?",
      answer:
        "It is the Master of Commerce studied through a university's online mode, with digital classes, study material, assignments and university-specified examinations. The degree is awarded by the university itself.",
    },
    {
      question: "Is an Online M.Com valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme for your admission period. Verify the status for the exact university, programme and academic year before enrolling.",
    },
    {
      question: "Does an Online M.Com carry the same UGC entitlement as a regular M.Com?",
      answer:
        "Only where the specific university and programme hold the applicable UGC entitlement for the online mode for your admission year. This is programme-specific, not a blanket rule for all universities, so check it individually before you pay any fee.",
    },
    {
      question: "What is the duration of an Online M.Com?",
      answer:
        "Two years across four semesters in most programmes. Some universities publish a maximum permissible duration that allows completion over a longer period.",
    },
    {
      question: "What is the eligibility for an Online M.Com?",
      answer:
        "A B.Com degree, or a bachelor's degree with a substantial commerce component, from a recognised institution is the common requirement. Minimum marks and any bridge-course condition for non-commerce graduates are set by each university.",
    },
    {
      question: "Can a non-commerce graduate pursue an Online M.Com?",
      answer:
        "Some universities admit graduates from other streams, sometimes with bridge coursework or an additional condition. This is not universal, so confirm directly with the university before applying.",
    },
    {
      question: "How much does an Online M.Com cost?",
      answer:
        "Fees are set by each university, so the range is wide. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "Is an entrance examination required for an Online M.Com?",
      answer:
        "Not usually. Most universities in our dataset admit directly on the qualifying bachelor's degree, though this can vary — verify with the specific university.",
    },
    {
      question: "Which is better — Online M.Com or Online MBA?",
      answer:
        "They serve different goals. M.Com builds specialist depth in accounting, finance and taxation and can suit teaching, research or specialist finance roles; MBA builds broader general-management capability across functions. Choose based on the role or examination you are targeting, not on which sounds more prestigious.",
    },
    {
      question: "Is an Online M.Com useful for UGC-NET or an assistant professorship?",
      answer:
        "A postgraduate degree such as M.Com is typically the base educational qualification for UGC-NET in commerce and for assistant professorship eligibility. The specific eligibility rules, including any recognition condition on the online mode, are set by the conducting body and should be checked directly with it before you rely on this route.",
    },
    {
      question: "Can I pursue a PhD after an Online M.Com?",
      answer:
        "Yes, in principle — a postgraduate degree is the standard entry qualification for doctoral admission in commerce or management. Acceptance of the specific online M.Com is decided by the admitting university under its own research-admission rules, so confirm this with the university you plan to apply to.",
    },
    {
      question: "Can I pursue an Online M.Com alongside CA, CS or CMA?",
      answer:
        "Yes, many candidates study the two together because of the subject overlap in accounting, tax and finance. Plan your weekly schedule carefully, since both tracks carry independent assessment calendars.",
    },
    {
      question: "Is a dissertation or project compulsory in an Online M.Com?",
      answer:
        "It depends on the university and specialisation. Several programmes include a dissertation or research project in the final semester; others use a shorter applied project. Check the specific curriculum before you enrol if this matters to you.",
    },
    {
      question: "How are Online M.Com examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations alongside internal assessment such as assignments and quizzes. A few use designated examination centres. Confirm the mode with the university.",
    },
    {
      question: "Can I pursue an Online M.Com while working?",
      answer:
        "Yes — the format is built for it, with recorded lectures and a semester-based assessment schedule. Plan for consistent weekly study hours rather than assuming flexibility alone will be enough.",
    },
    {
      question: "Which specialisation should I choose in an Online M.Com?",
      answer:
        "Choose based on the role or examination you are targeting rather than the specialisation's popularity. The specialisation guide on this page maps common goals — accounting, taxation, banking, analytics or international business — to the matching choice.",
    },
    {
      question: "What jobs can I get after an Online M.Com?",
      answer:
        "Common paths include accounting, tax consultancy, financial analysis, auditing support, banking operations and academic or research roles. Outcomes depend on your prior experience, any professional certification and demonstrable skills, as well as the degree.",
    },
    {
      question: "Is placement guaranteed after an Online M.Com?",
      answer:
        "No. Universities offer placement assistance — job boards, resume help, mock interviews, recruiter sessions — which is different from a placement guarantee. Be sceptical of any guarantee claim.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Graduation marksheets and certificate, identity proof, a photograph and a signature specimen at minimum, plus any university-specific documents listed on its admission page.",
    },
  ],
};

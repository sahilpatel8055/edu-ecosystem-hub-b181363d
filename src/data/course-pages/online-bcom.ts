/**
 * Authored content for the Online B.Com course page.
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

export const onlineBcomContent: CourseContent = {
  seo: {
    title: "Online B.Com: Fees, Eligibility, Admission & Top Universities {year}",
    description:
      "Compare Online B.Com programmes in India — university fees, eligibility, syllabus, specialisations, admission process and careers for {year}.",
    h1: "Online B.Com: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online B.Com",
      "online B.Com fees",
      "online B.Com eligibility",
      "online B.Com admission",
      "best online B.Com universities in India",
      "online B.Com specialisations",
    ],
  },

  intro:
    "An Online B.Com is a three-year undergraduate commerce degree delivered through a university's online learning platform. This page compares the universities in our dataset that publish this course — their fees, specialisations, eligibility, examination structure and approvals — so you can shortlist on evidence rather than advertising.",

  overview: [
    "An Online B.Com is the Bachelor of Commerce degree studied through a university's online mode, where lectures, study material, assignments and assessments are delivered digitally while the degree itself is awarded by the university under the same nomenclature it uses for its campus programme, subject to the entitlement that applies to that university and programme for your admission year.",
    "The curriculum builds a foundation in accounting, business economics, business law, taxation and quantitative methods, and then layers in corporate accounting, cost and management accounting, auditing and indirect taxation as the programme progresses. Many universities also weave in computer applications, business communication and entrepreneurship papers so the degree reads as a rounded commerce qualification rather than a narrow bookkeeping course.",
    "Online delivery typically combines live evening or weekend classes with recorded lectures, a learning management system holding the semester's schedule and submissions, continuous assignments, and university-specified term-end examinations across six semesters. Some programmes end with a project or applied study in the final year.",
    "The format suits school leavers who want to keep studying while gaining early work experience, working professionals in accounts, finance or back-office roles who need a formal degree to progress, and candidates preparing for CA, CS or CMA who want a parallel undergraduate qualification without attending a full-time campus programme. It also reaches learners in towns where a preferred university has no local college.",
    "What differs between universities is significant: total cost, specialisation options in the later semesters, examination mode and proctoring, whether a value-added certification is bundled in, and the depth of student support. Those differences are why this page leads with a university-by-university comparison instead of a single set of figures.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "School leavers",
      detail:
        "Start a recognised commerce degree flexibly, whether you are also preparing for a professional course or want to work part-time alongside your studies.",
    },
    {
      title: "CA, CS and CMA aspirants",
      detail:
        "Pursue the graduation requirement for these professional qualifications while studying around articleship, training or coaching-class schedules.",
    },
    {
      title: "Working accounts and finance staff",
      detail:
        "Formalise years of practical bookkeeping, billing or accounts-payable experience into a recognised degree without leaving your job.",
    },
    {
      title: "Career switchers into commerce roles",
      detail:
        "Build a foundation in accounting, taxation and business law to move from an unrelated field into finance, banking or compliance functions.",
    },
    {
      title: "Learners outside metro cities",
      detail:
        "Access a university in another state without relocating, provided the programme carries the applicable entitlement for your admission year.",
    },
  ],

  eligibility: [
    {
      title: "Educational qualification",
      detail:
        "A pass in 10+2 (or an equivalent qualification) from a recognised board, in any stream, subject to the individual university's requirement.",
    },
    {
      title: "Minimum marks",
      detail:
        "University-specific. Several universities publish a minimum aggregate at Class 12; others admit on the qualification alone, sometimes with a relaxation for reserved categories.",
    },
    {
      title: "Commerce background",
      detail:
        "Not a general requirement. Most universities admit students from commerce, science and arts streams alike, though a commerce or mathematics background can make the early semesters easier.",
    },
    {
      title: "Entrance examination",
      detail:
        "Not published by most universities for this course. Admission is generally on the basis of the qualifying marksheet; verify with the specific university before applying.",
    },
  ],
  eligibilityNote:
    "Eligibility criteria vary between universities and can change between admission cycles. Verify the current requirement for the specific university and admission year before you apply.",

  feeNotes: defaultFeeNotes("Online B.Com"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Financial Accounting", type: "Core" },
        { name: "Business Economics", type: "Core" },
        { name: "Business Organisation & Management", type: "Core" },
        { name: "Business Communication", type: "Core" },
        { name: "Business Mathematics & Statistics", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Corporate Accounting", type: "Core" },
        { name: "Business Law", type: "Core" },
        { name: "Micro and Macro Economics", type: "Core" },
        { name: "Environmental Studies", type: "Core" },
        { name: "Computer Applications in Business", type: "Core" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Cost Accounting", type: "Core" },
        { name: "Company Law", type: "Core" },
        { name: "Income Tax Law & Practice", type: "Core" },
        { name: "Banking and Insurance", type: "Core" },
        { name: "Entrepreneurship Development", type: "Elective" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "Management Accounting", type: "Core" },
        { name: "GST and Indirect Tax", type: "Core" },
        { name: "Auditing and Corporate Governance", type: "Core" },
        { name: "Financial Markets & Services", type: "Core" },
        { name: "Elective Paper I", type: "Elective" },
      ],
    },
    {
      semester: "Semester 5",
      subjects: [
        { name: "Specialisation Paper I", type: "Specialisation" },
        { name: "Specialisation Paper II", type: "Specialisation" },
        { name: "Financial Management", type: "Core" },
        { name: "E-Commerce and Digital Business", type: "Elective" },
        { name: "Elective Paper II", type: "Elective" },
      ],
    },
    {
      semester: "Semester 6",
      subjects: [
        { name: "Specialisation Paper III", type: "Specialisation" },
        { name: "Specialisation Paper IV", type: "Specialisation" },
        { name: "International Business", type: "Core" },
        { name: "Elective Paper III", type: "Elective" },
        { name: "Project Work / Viva Voce", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure of how most three-year, six-semester Online B.Com curricula are organised. The actual subject list, credits and sequence are set by each university and change with the specialisation — check the syllabus published by the university you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Class 10 marksheet and certificate",
    "Class 12 marksheet and certificate",
    "Transfer or migration certificate, where the university asks for it",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Category certificate, where a category benefit is claimed",
  ],
  documentsNote:
    "Universities add their own requirements — a gap-certificate, an employer NOC for working candidates, or a declaration form, for example. The exact checklist for each university is published on its admission page and on the university-course pages linked below.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "Not every university runs the same mix. Class frequency, whether recordings are released immediately, and how much faculty contact you get differ between programmes — ask before you enrol.",

  examPattern: defaultExamPattern(),
  examNote:
    "Assessment weighting between internal work and the term-end examination, the proctoring method, and re-attempt rules are university-specific and can change between sessions.",

  specialisationGuide: [
    { goal: "Financial reporting, book-keeping or controllership roles", specialisation: "Accounting & Finance" },
    { goal: "Tax practice, compliance or working toward CA/CMA", specialisation: "Taxation" },
    { goal: "Retail banking, credit or insurance operations", specialisation: "Banking & Insurance" },
    { goal: "Data-led financial reporting and dashboards", specialisation: "Financial Analytics" },
    { goal: "Cross-border trade, forex and export-import operations", specialisation: "International Finance" },
    { goal: "Online retail, digital payments and platform business roles", specialisation: "E-commerce / Digital Business" },
  ],

  careers: [
    { title: "Accountant", detail: "Maintains books of account, ledgers and financial statements for a business or client portfolio." },
    { title: "Tax Consultant / Tax Assistant", detail: "Prepares returns, supports compliance filings and assists with GST and income-tax work." },
    { title: "Auditing Assistant", detail: "Supports statutory or internal audit teams with vouching, verification and documentation." },
    { title: "Accounts Executive", detail: "Manages accounts payable, receivable, reconciliations and vendor payments." },
    { title: "Banking Associate", detail: "Handles retail banking operations, loan processing or customer accounts at a bank branch or back office." },
    { title: "Financial Analyst", detail: "Reads financial statements, builds basic models and supports budgeting and forecasting work." },
    { title: "Insurance Advisor / Operations Executive", detail: "Supports policy issuance, claims processing or advisory work in an insurance business." },
    { title: "GST Practitioner", detail: "Assists businesses with indirect-tax registration, return filing and reconciliation." },
    { title: "Business Development Executive", detail: "Supports client acquisition and account management in a finance-adjacent business." },
    { title: "Further study toward CA, CS, CMA or an M.Com/MBA", detail: "Uses the degree as the graduation requirement while continuing a professional qualification." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online B.Com salary figures we cannot attribute to a credible, dated source. Pay for commerce graduates is driven heavily by the specific role, employer, city and any professional qualification (CA, CS, CMA) alongside the degree, not by the study mode alone.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance is not guaranteed placement. Ask each university, in writing, which services are available to online learners specifically, and whether entry-level finance and accounts roles are actually part of its recruiter outreach.",

  worthItYes: [
    "You want a recognised commerce degree while continuing school, a job or professional-course preparation",
    "You are pursuing CA, CS or CMA and need the graduation requirement alongside your training",
    "You are already working in accounts or finance and want a formal qualification to support progression",
    "The specialisation on offer matches a role you are targeting, such as taxation or banking",
    "You can commit consistent weekly study hours across three years",
  ],
  worthItNo: [
    "You expect the degree by itself to produce a job offer without any practical skill-building",
    "You are choosing the university purely on the lowest advertised fee",
    "You have no plan for what you want to do with a commerce degree",
    "You need a physical classroom and daily peer interaction to stay motivated",
    "Your target employer specifically screens for full-time, on-campus commerce degrees",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online B.Com"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Banking and financial services",
    "Insurance",
    "Accounting and audit firms",
    "Taxation and compliance",
    "E-commerce and retail",
    "Information technology and IT-enabled services",
    "FinTech",
    "Manufacturing",
    "Government and public-sector undertakings",
    "Consulting",
  ],

  faqs: [
    {
      question: "What is an Online B.Com?",
      answer:
        "It is the Bachelor of Commerce degree studied through a university's online mode, with digital classes, study material, assignments and university-specified examinations across six semesters. The degree is awarded by the university itself.",
    },
    {
      question: "Is an Online B.Com valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme for your admission period. Verify the status for the exact university, programme and academic year before enrolling.",
    },
    {
      question: "Is an Online B.Com UGC recognised?",
      answer:
        "Recognition is programme-specific, not universal. Check the university's UGC entitlement status for the online mode, for the B.Com specifically, and for your admission year, rather than assuming online study in general is or is not recognised.",
    },
    {
      question: "What is the duration of an Online B.Com?",
      answer:
        "Three years across six semesters in most programmes. Some universities publish a maximum permissible duration that allows you to complete over a longer period if needed.",
    },
    {
      question: "What is the eligibility for an Online B.Com?",
      answer:
        "A pass in 10+2 from a recognised board, generally in any stream, is the common requirement. Minimum marks and any additional conditions are set by each university.",
    },
    {
      question: "How much does an Online B.Com cost?",
      answer:
        "Fees are set by each university, so the range is wide. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "How do I get admission to an Online B.Com?",
      answer:
        "Most universities admit directly on the basis of your Class 12 marksheet through their online admission portal — register, upload documents, pay the applicable instalment and receive LMS access. A few universities may set additional conditions.",
    },
    {
      question: "How are Online B.Com examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations alongside internal assessment through assignments and quizzes. A few use designated centres. Confirm the mode with the university.",
    },
    {
      question: "Can I pursue an Online B.Com alongside CA, CS or CMA?",
      answer:
        "Yes, and it is one of the more common reasons students choose this format. Recorded lectures and a flexible semester calendar make it easier to balance with articleship, training or coaching-class schedules than a full-time campus degree.",
    },
    {
      question: "Can working professionals in accounts or finance pursue an Online B.Com?",
      answer:
        "Yes. The format is designed for people who are already employed, letting you study around your job while working toward a formal qualification that can support progression or a role change.",
    },
    {
      question: "Can I do an M.Com or an MBA after an Online B.Com?",
      answer:
        "Yes, subject to the admitting institution's own eligibility rules. A B.Com is a standard qualifying degree for both an M.Com and most MBA programmes, including specialisations in finance.",
    },
    {
      question: "Can I get a government job after an Online B.Com?",
      answer:
        "Many government and public-sector recruitment exams accept any bachelor's degree, including a B.Com, as the minimum qualification. Check the specific eligibility notice for the post you are targeting, since some recruiters do scrutinise the mode of study.",
    },
    {
      question: "What is the difference between an Online B.Com and an Online BBA?",
      answer:
        "A B.Com focuses on accounting, taxation, auditing and commerce law, and is a common route into finance, accounts and tax roles or professional courses like CA and CMA. A BBA is broader management education covering marketing, HR and operations alongside finance, and suits students aiming more generally at management roles.",
    },
    {
      question: "Which Online B.Com specialisation should I choose?",
      answer:
        "Choose from the role or professional course you are targeting, not from the trend. The specialisation guide on this page maps common goals — such as taxation practice or banking operations — to the specialisation that supports them.",
    },
    {
      question: "Is an Online B.Com equivalent to a regular B.Com?",
      answer:
        "The degree nomenclature is the same when the programme carries the applicable entitlement. The experience differs: campus programmes offer in-person classes and a college environment, online programmes offer flexibility and continuity of work or other commitments.",
    },
    {
      question: "What jobs can I get after an Online B.Com?",
      answer:
        "Common entry points include accounting, tax assistance, auditing support, banking operations and accounts-executive roles. Outcomes depend heavily on any professional qualification, internship experience and demonstrable skills alongside the degree.",
    },
    {
      question: "What is the salary after an Online B.Com?",
      answer:
        "It varies widely by role, employer, city and any additional qualification such as CA, CS or CMA. We deliberately do not publish a single national average, because such figures are rarely sourced or comparable.",
    },
    {
      question: "Is placement guaranteed after an Online B.Com?",
      answer:
        "No. Universities offer placement assistance — job boards, resume help, mock interviews — which is different from a placement guarantee. Be sceptical of any guarantee claim, and ask what support actually applies to online learners.",
    },
  ],
};

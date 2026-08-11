/**
 * Authored content for the Online MBA course page.
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

export const onlineMbaContent: CourseContent = {
  seo: {
    title: "Online MBA: Fees, Eligibility, Admission & Top Universities {year}",
    description:
      "Explore Online MBA programmes in India. Compare university fees, eligibility, syllabus, specializations, admission process, approvals and career opportunities for {year}.",
    h1: "Online MBA: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online MBA",
      "online MBA fees",
      "online MBA eligibility",
      "online MBA admission",
      "best online MBA universities in India",
      "online MBA specializations",
    ],
  },

  intro:
    "An Online MBA is a two-year postgraduate management degree delivered through a university's online learning platform. This page compares the universities in our dataset that publish an Online MBA — their fees, specialisations, eligibility, examination structure and approvals — so you can shortlist on evidence rather than advertising.",

  overview: [
    "An Online MBA is the Master of Business Administration studied through a university's online mode. Teaching, study material, assessment and student support are delivered digitally, while the degree itself is awarded by the university under the same nomenclature it uses for its campus programme, subject to the entitlement that applies to that university and programme for your admission year.",
    "The purpose of the degree is to build general management capability: reading financial statements, understanding customers and markets, structuring operations, working with data, and leading teams through change. Most curricula start with a common core across accounting, economics, marketing, operations, organisational behaviour and strategy, and then narrow into a specialisation in the later semesters.",
    "Online delivery usually combines live weekend or evening classes with recorded lectures, a learning management system that holds the semester plan and submissions, graded assignments through the term, and university-specified term-end examinations. Many programmes finish with a capstone project or dissertation where the curriculum requires one.",
    "The format is chosen most often by people who cannot pause employment: mid-career professionals moving from a specialist role into management, graduates working while they study, founders who need finance and operations depth, and learners in cities where the university they want has no campus. It suits self-directed study, because attendance pressure is replaced by personal scheduling.",
    "What varies between universities is significant: total cost, specialisation list, whether a specialisation can be changed later, examination mode and proctoring, project requirements, and the extent of career support. Those differences are the reason this page leads with a university comparison rather than a single set of numbers.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "Working professionals",
      detail:
        "Recorded sessions and semester-based assessment let you continue full-time employment while you study, so you avoid a salary gap and can apply coursework to a live role.",
    },
    {
      title: "Fresh graduates",
      detail:
        "A structured management foundation across finance, marketing, operations and analytics, taken while you gain early work experience rather than after a break from it.",
    },
    {
      title: "Entrepreneurs",
      detail:
        "Practical grounding in unit economics, cash flow, pricing, go-to-market and operations — the areas that most often decide whether an early-stage business survives.",
    },
    {
      title: "Career switchers",
      detail:
        "A recognised qualification plus a specialisation in your target function, which can support a move toward management-oriented roles when combined with relevant experience.",
    },
  ],

  eligibility: [
    {
      title: "Educational qualification",
      detail:
        "A bachelor's degree in any discipline from a recognised institution, subject to the individual university's requirement.",
    },
    {
      title: "Minimum marks",
      detail:
        "University-specific. Several universities publish a minimum aggregate at graduation; others admit on the qualification alone, sometimes with a relaxation for reserved categories.",
    },
    {
      title: "Work experience",
      detail:
        "Not required by most Online MBA programmes. It is usually asked for only on executive or working-professional variants of the degree.",
    },
    {
      title: "Entrance examination",
      detail:
        "University-specific. Many universities admit directly; some run their own entrance or aptitude test, and a few waive it for candidates with a valid national test score or qualifying experience.",
    },
  ],
  eligibilityNote:
    "Eligibility criteria vary between universities and can change between admission cycles. Verify the current requirement for the specific university and admission year before you apply.",

  feeNotes: defaultFeeNotes("Online MBA"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Principles of Management", type: "Core" },
        { name: "Managerial Economics", type: "Core" },
        { name: "Financial Accounting", type: "Core" },
        { name: "Organisational Behaviour", type: "Core" },
        { name: "Business Communication", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Marketing Management", type: "Core" },
        { name: "Financial Management", type: "Core" },
        { name: "Human Resource Management", type: "Core" },
        { name: "Operations Management", type: "Core" },
        { name: "Business Research Methods", type: "Core" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Strategic Management", type: "Core" },
        { name: "Business Analytics", type: "Core" },
        { name: "Specialisation Paper I", type: "Specialisation" },
        { name: "Specialisation Paper II", type: "Specialisation" },
        { name: "Elective", type: "Elective" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "Corporate Governance & Business Ethics", type: "Core" },
        { name: "International Business", type: "Core" },
        { name: "Specialisation Paper III", type: "Specialisation" },
        { name: "Specialisation Paper IV", type: "Specialisation" },
        { name: "Capstone Project / Dissertation", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure of how most two-year Online MBA curricula are organised. The actual subject list, credits and sequence are set by each university and change with the specialisation — check the syllabus published by the university you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Graduation marksheets (all years or semesters)",
    "Degree or provisional passing certificate",
    "Class 10 and 12 marksheets, where the university asks for them",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Category certificate, where a category benefit is claimed",
    "Work-experience letter, for executive variants that require it",
  ],
  documentsNote:
    "Universities add their own requirements — a migration certificate, an employer NOC or a declaration form, for example. The exact checklist for each university is published on its admission page and on the university-course pages linked below.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "Not every university runs the same mix. Class frequency, whether recordings are released immediately, and how much faculty contact you get differ noticeably between programmes — ask before you enrol.",

  examPattern: defaultExamPattern(),
  examNote:
    "Assessment weighting between internal work and the term-end examination, the proctoring method, and re-attempt rules are all university-specific and can change between sessions.",

  specialisationGuide: [
    { goal: "Banking, treasury or corporate finance", specialisation: "Finance" },
    { goal: "Brand, sales or growth roles", specialisation: "Marketing" },
    { goal: "Talent, L&D or HR business partnering", specialisation: "Human Resource Management" },
    { goal: "Technology and product management", specialisation: "IT / Systems Management" },
    { goal: "Data-led decision and reporting roles", specialisation: "Business Analytics" },
    { goal: "Manufacturing, service delivery, quality", specialisation: "Operations Management" },
    { goal: "Logistics, procurement, distribution", specialisation: "Supply Chain Management" },
    { goal: "Hospitals, health-tech, insurance", specialisation: "Healthcare Management" },
    { goal: "Cross-border trade and global accounts", specialisation: "International Business" },
    { goal: "Payments, lending and financial products", specialisation: "FinTech" },
  ],

  careers: [
    { title: "Marketing Manager", detail: "Owns positioning, campaigns and channel performance for a product or region." },
    { title: "Business Analyst", detail: "Translates business questions into data and requirements that teams can act on." },
    { title: "Financial Analyst", detail: "Builds forecasts, evaluates investments and supports budget decisions." },
    { title: "HR Manager", detail: "Runs hiring, performance, retention and employee relations for a business unit." },
    { title: "Operations Manager", detail: "Improves throughput, cost and quality across a process or site." },
    { title: "Project Manager", detail: "Plans scope, budget and timelines, and keeps cross-functional delivery on track." },
    { title: "Product Manager", detail: "Defines the problem, prioritises the roadmap and works with engineering and design." },
    { title: "Sales Manager", detail: "Owns a target, a territory and a team, and manages the pipeline against it." },
    { title: "Business Development Manager", detail: "Opens new accounts, partnerships and market segments." },
    { title: "Supply Chain Manager", detail: "Coordinates sourcing, inventory and distribution against service levels." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online MBA salary figures we cannot attribute to a credible, dated source. Pay is driven by prior experience, role, industry and location far more than by the study mode — treat any portal quoting a single national \"average MBA salary\" with caution.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance is not guaranteed placement. Ask each university, in writing, which services are available to online learners specifically, and whether the job board and recruiter events are shared with the campus programme.",

  worthItYes: [
    "The university and programme hold the recognition your employer or next qualification requires",
    "The curriculum and specialisation match the role you are actually targeting",
    "You will use the coursework in a current or imminent job, not only in an exam",
    "You can protect eight to ten study hours a week for two years",
    "A postgraduate qualification is a stated condition for your next promotion or transition",
  ],
  worthItNo: [
    "You expect the degree by itself to produce job offers",
    "You are selecting the university only because it is the cheapest",
    "Your career goal is still undefined, so the specialisation would be arbitrary",
    "You need a campus cohort and in-person routine to stay consistent",
    "Your target employers explicitly screen for full-time campus MBA programmes",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online MBA"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Information technology",
    "Banking and financial services",
    "Consulting",
    "E-commerce and retail",
    "FMCG",
    "Healthcare",
    "Logistics and supply chain",
    "Telecom",
    "FinTech",
    "Manufacturing",
  ],

  faqs: [
    {
      question: "What is an Online MBA?",
      answer:
        "It is the Master of Business Administration studied through a university's online mode, with digital classes, study material, assignments and university-specified examinations. The degree is awarded by the university itself.",
    },
    {
      question: "Is an Online MBA valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme for your admission period. Verify the status for the exact university, programme and academic year before enrolling.",
    },
    {
      question: "What is the duration of an Online MBA?",
      answer:
        "Two years across four semesters in most programmes. Some universities publish a maximum permissible duration that allows you to complete over a longer period.",
    },
    {
      question: "What is the eligibility for an Online MBA?",
      answer:
        "A bachelor's degree from a recognised institution is the common requirement. Minimum marks, entrance tests and any work-experience condition are set by each university.",
    },
    {
      question: "How much does an Online MBA cost?",
      answer:
        "Fees are set by each university, so the range is wide. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "Is CAT required for an Online MBA?",
      answer:
        "Usually not. Many universities admit directly on graduation; a few run their own entrance test, and some accept or waive requirements based on a national test score or work experience.",
    },
    {
      question: "Can I pursue an Online MBA while working?",
      answer:
        "Yes — the format is built for it, with recorded lectures and scheduled assessments. Plan for consistent weekly study hours rather than assuming flexibility alone will be enough.",
    },
    {
      question: "Which university is best for an Online MBA?",
      answer:
        "There is no single best university. Compare entitlement status, total cost, the specialisation you need, examination format and support quality — the comparison tool on this page is built for exactly that.",
    },
    {
      question: "Which Online MBA specialisation should I choose?",
      answer:
        "Choose from the role you want next, not from the trend. The specialisation guide on this page maps common career goals to the specialisations that support them.",
    },
    {
      question: "Is an Online MBA equivalent to a regular MBA?",
      answer:
        "The degree nomenclature is the same when the programme carries the applicable entitlement. The experience differs: campus programmes offer in-person cohorts and structured placement cycles, online programmes offer flexibility and continuity of employment.",
    },
    {
      question: "Is an Online MBA UGC recognised?",
      answer:
        "Recognition is programme-specific, not universal. Check the university's UGC entitlement status for the online mode, for the MBA specifically, and for your admission year.",
    },
    {
      question: "How are Online MBA examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations alongside internal assessment. A few use designated centres. Confirm the mode with the university.",
    },
    {
      question: "Is attendance compulsory in an Online MBA?",
      answer:
        "Live-session attendance requirements vary. Some universities recommend it, others set a minimum for eligibility to sit examinations. Read the academic regulations before enrolling.",
    },
    {
      question: "Can I change my specialisation later?",
      answer:
        "It depends on the university. Several allow a change before the specialisation papers begin, sometimes with a fee; others lock the choice at admission.",
    },
    {
      question: "What jobs can I get after an Online MBA?",
      answer:
        "Common paths include marketing, finance, human resources, operations, analytics, project and product roles. Outcomes depend on your prior experience and demonstrable skills as well as the degree.",
    },
    {
      question: "What is the salary after an Online MBA?",
      answer:
        "It varies by experience, role, industry, employer and location. We deliberately do not publish a single national average, because such figures are rarely sourced or comparable.",
    },
    {
      question: "Is placement guaranteed after an Online MBA?",
      answer:
        "No. Universities offer placement assistance — job boards, resume help, mock interviews, recruiter sessions — which is different from a placement guarantee. Be sceptical of any guarantee claim.",
    },
    {
      question: "Can I pursue an Online MBA after B.Com or BCA?",
      answer:
        "Yes. Most Online MBA programmes accept a bachelor's degree in any discipline, subject to the university's minimum-marks requirement.",
    },
    {
      question: "Can engineering graduates pursue an Online MBA?",
      answer:
        "Yes, and it is a common route into product, operations and technology-management roles. The qualifying-degree rule applies the same way.",
    },
    {
      question: "Can freshers pursue an Online MBA?",
      answer:
        "Yes, unless the university's programme is specifically an executive variant that requires work experience.",
    },
    {
      question: "What documents are required for admission?",
      answer:
        "Graduation marksheets and certificate, identity proof, a photograph and a signature specimen at minimum, plus any university-specific documents listed on its admission page.",
    },
    {
      question: "Can I get an education loan for an Online MBA?",
      answer:
        "Loan and no-cost EMI options exist through university financing partners and lenders, but approval and eligibility are decided by the lender, not the university.",
    },
    {
      question: "Can I study further after an Online MBA?",
      answer:
        "Yes — doctoral programmes and professional certifications commonly accept the degree, subject to the admitting institution's own recognition rules.",
    },
  ],
};

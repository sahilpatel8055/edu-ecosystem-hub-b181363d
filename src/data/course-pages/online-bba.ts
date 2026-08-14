/**
 * Authored content for the Online BBA course page.
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

export const onlineBbaContent: CourseContent = {
  seo: {
    title: "Online BBA: Fees, Eligibility, Admission & Top Universities {year}",
    description:
      "Compare Online BBA programmes in India — fees, eligibility, syllabus, specialisations, admission process and career paths for {year}.",
    h1: "Online BBA: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online BBA",
      "online BBA fees",
      "online BBA eligibility",
      "online BBA admission",
      "best online BBA universities in India",
      "online BBA specialisations",
    ],
  },

  intro:
    "An Online BBA is a three-year undergraduate management degree delivered through a university's online learning platform. This page compares the universities in our dataset that publish an Online BBA — their fees, specialisations, eligibility, examination structure and approvals — so you can shortlist a programme on evidence rather than advertising.",

  overview: [
    "An Online BBA is the Bachelor of Business Administration studied through a university's online mode. Lectures, reading material, assignments and assessment are conducted digitally, while the degree itself is awarded by the university under the same nomenclature it uses for its on-campus programme, subject to the entitlement that applies to that university and programme for your admission year.",
    "The degree is built to introduce learners to how a business actually functions before they specialise anywhere. Early semesters typically cover the foundations — management principles, business communication, accounting, economics and quantitative methods — and later semesters add marketing, human resources, operations, business law and a chosen specialisation stream.",
    "Because it is a first degree rather than a professional add-on, an Online BBA is usually taken straight after Class 12, though working learners, gap-year candidates and those switching from another undergraduate stream also enrol. The online format removes the need to relocate to a campus city and lets a learner combine study with a part-time job, an internship or family responsibilities.",
    "Delivery normally combines live classes on a fixed weekly timetable with recorded lectures for revision, a learning management system that holds the syllabus and submissions, continuous assignments through the semester, and term-end examinations set by the university. Many programmes close with a final-year project or dissertation that applies classroom concepts to a real or simulated business problem.",
    "What differs meaningfully between universities is the specialisation list, whether a specialisation can be changed after admission, the examination mode and proctoring approach, the total cost once all charges are added, and the extent of academic and career support. Those differences are why this page opens with a university comparison instead of a single generic answer.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "Recent Class 12 graduates",
      detail:
        "Start an undergraduate management degree without relocating, and keep the option to prepare for entrance examinations or take up part-time work alongside the course.",
    },
    {
      title: "Working learners and interns",
      detail:
        "Complete a first degree while already earning through an internship, family business or entry-level job, since sessions are recorded and assessments follow a semester calendar.",
    },
    {
      title: "Learners switching streams",
      detail:
        "Move from a science or arts background into a business-focused undergraduate qualification without starting a campus programme from scratch.",
    },
    {
      title: "Learners outside metro cities",
      detail:
        "Access a university's BBA programme from another state or city without the cost and disruption of relocating for a campus seat.",
    },
    {
      title: "Family-business aspirants",
      detail:
        "Build a working grasp of accounting, marketing, operations and business law while remaining involved in a family enterprise.",
    },
  ],

  eligibility: [
    {
      title: "Educational qualification",
      detail:
        "A Class 12 (10+2) pass from a recognised board, in any stream, subject to the individual university's own requirement.",
    },
    {
      title: "Minimum marks",
      detail:
        "University-specific. Several universities publish a minimum aggregate at Class 12; others admit on the qualification alone, sometimes with a relaxation for reserved categories.",
    },
    {
      title: "Subject requirement",
      detail:
        "Most universities do not insist on a specific Class 12 stream or subject combination for a BBA, unlike some specialised professional courses.",
    },
    {
      title: "Entrance examination",
      detail:
        "Not a general requirement for this course. Most universities in our dataset admit directly on Class 12 marks; verify with the specific university before applying.",
    },
    {
      title: "Age",
      detail:
        "Rarely a formal condition for an Online BBA, since it is usually taken as a first degree straight after school.",
    },
  ],
  eligibilityNote:
    "Eligibility criteria vary between universities and can change between admission cycles. Verify the current requirement for the specific university and admission year before you apply.",

  feeNotes: defaultFeeNotes("Online BBA"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Principles of Management", type: "Core" },
        { name: "Business Communication", type: "Core" },
        { name: "Financial Accounting", type: "Core" },
        { name: "Business Economics", type: "Core" },
        { name: "Business Mathematics & Statistics", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Organisational Behaviour", type: "Core" },
        { name: "Cost & Management Accounting", type: "Core" },
        { name: "Business Environment", type: "Core" },
        { name: "Business Law", type: "Core" },
        { name: "Computer Applications in Business", type: "Core" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Marketing Management", type: "Core" },
        { name: "Human Resource Management", type: "Core" },
        { name: "Financial Management", type: "Core" },
        { name: "Business Research Methods", type: "Core" },
        { name: "Elective", type: "Elective" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "Operations Management", type: "Core" },
        { name: "Management Information Systems", type: "Core" },
        { name: "Entrepreneurship Development", type: "Core" },
        { name: "Corporate Governance & Business Ethics", type: "Core" },
        { name: "Elective", type: "Elective" },
      ],
    },
    {
      semester: "Semester 5",
      subjects: [
        { name: "Strategic Management", type: "Core" },
        { name: "International Business", type: "Core" },
        { name: "Specialisation Paper I", type: "Specialisation" },
        { name: "Specialisation Paper II", type: "Specialisation" },
        { name: "Summer Internship Report", type: "Project" },
      ],
    },
    {
      semester: "Semester 6",
      subjects: [
        { name: "Project Management", type: "Core" },
        { name: "Specialisation Paper III", type: "Specialisation" },
        { name: "Specialisation Paper IV", type: "Specialisation" },
        { name: "Elective", type: "Elective" },
        { name: "Final Project / Dissertation", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure of how most three-year, six-semester Online BBA curricula are organised. The actual subject list, credits and sequence are set by each university and change with the specialisation — check the syllabus published by the university you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Class 10 marksheet and certificate",
    "Class 12 marksheet and certificate",
    "Transfer or migration certificate, where required",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Category certificate, where a category benefit is claimed",
    "Gap-year affidavit, where applicable",
  ],
  documentsNote:
    "Universities add their own requirements — a character certificate or a domicile certificate, for example. The exact checklist for each university is published on its admission page and on the university-course pages linked below.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "Not every university runs the same mix. Class frequency, whether recordings are released immediately, and how much faculty contact you get differ between programmes — ask before you enrol.",

  examPattern: defaultExamPattern(),
  examNote:
    "Assessment weighting between internal work and the term-end examination, the proctoring method, and re-attempt rules are all university-specific and can change between sessions.",

  specialisationGuide: [
    { goal: "Accounts, treasury or investment-support roles", specialisation: "Finance" },
    { goal: "Brand, sales and customer-facing roles", specialisation: "Marketing" },
    { goal: "Recruitment, training and HR administration", specialisation: "Human Resource Management (HRM)" },
    { goal: "Production, logistics and quality-support roles", specialisation: "Operations Management" },
    { goal: "Reporting, dashboards and data-led decisions", specialisation: "Business Analytics" },
    { goal: "Export-import, global accounts and trade", specialisation: "International Business" },
    { goal: "Social media, SEO and online campaigns", specialisation: "Digital Marketing" },
    { goal: "Starting or scaling a small business", specialisation: "Entrepreneurship" },
  ],

  careers: [
    { title: "Management Trainee", detail: "Rotates across functions in a structured early-career induction programme." },
    { title: "Sales Executive", detail: "Builds and manages a pipeline of accounts against a monthly or quarterly target." },
    { title: "Marketing Executive", detail: "Supports campaigns, content and channel performance for a product or brand." },
    { title: "HR Executive", detail: "Assists with recruitment, onboarding, records and employee engagement activities." },
    { title: "Operations Executive", detail: "Coordinates day-to-day process, vendor and scheduling tasks at a unit or site." },
    { title: "Accounts / Finance Executive", detail: "Handles bookkeeping, reconciliations and basic reporting under a finance team." },
    { title: "Business Development Associate", detail: "Identifies leads, sets up meetings and supports new-account acquisition." },
    { title: "Junior Business Analyst", detail: "Compiles and interprets data to support decisions made by senior managers." },
    { title: "Customer Relationship Executive", detail: "Manages client queries, renewals and satisfaction for an assigned account base." },
    { title: "Entrepreneur / Family-business role", detail: "Applies coursework directly to running or supporting a small enterprise." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online BBA salary figures we cannot attribute to a credible, dated source. Starting pay is driven far more by the specific role, employer, city and demonstrable skills than by the study mode — treat any portal quoting a single national \"average BBA salary\" with caution.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance is not guaranteed placement. Ask each university, in writing, which services are available to online learners specifically, and whether internships and recruiter events are shared with the campus programme.",

  worthItYes: [
    "You want a recognised undergraduate management qualification without relocating for a campus seat",
    "You can commit consistent weekly study hours across three years alongside school-leaving-age responsibilities or a part-time role",
    "The university and programme carry the recognition your target employer or postgraduate course requires",
    "The specialisation on offer matches a function you are genuinely curious about, not just a popular label",
    "The total cost of the Online BBA is proportionate to the outcome you expect from it",
  ],
  worthItNo: [
    "You expect the degree alone to guarantee a management-level job on graduation",
    "You are choosing purely on the lowest advertised fee without checking recognition",
    "You need a campus environment, hostel life and in-person peer group to stay engaged",
    "Your career objective is still completely undefined and any specialisation would be arbitrary",
    "Your target employer or course specifically screens for full-time campus undergraduate programmes",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online BBA"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Banking and financial services",
    "Retail and e-commerce",
    "Information technology and IT-enabled services",
    "FMCG",
    "Hospitality and travel",
    "Telecom",
    "Logistics and supply chain",
    "Real estate",
    "Media and advertising",
    "Start-ups and small enterprises",
  ],

  faqs: [
    {
      question: "What is an Online BBA?",
      answer:
        "It is the Bachelor of Business Administration studied through a university's online mode, with digital classes, study material, assignments and university-specified examinations. The degree is awarded by the university itself.",
    },
    {
      question: "Is an Online BBA valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme for your admission period. Verify the status for the exact university, programme and academic year before enrolling.",
    },
    {
      question: "Is an Online BBA UGC recognised?",
      answer:
        "Recognition is programme-specific, not universal. Check the university's UGC entitlement status for the online mode, for the BBA specifically, and for your admission year, rather than assuming it applies across the board.",
    },
    {
      question: "What is the duration of an Online BBA?",
      answer:
        "Three years across six semesters in most programmes. Some universities publish a maximum permissible duration that allows completion over a longer period if needed.",
    },
    {
      question: "What is the eligibility for an Online BBA?",
      answer:
        "A Class 12 (10+2) pass from a recognised board, in any stream, is the common requirement. Minimum marks and any entrance condition are set by each university.",
    },
    {
      question: "How much does an Online BBA cost?",
      answer:
        "Fees are set by each university, so the range is wide. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "Is an entrance examination required for an Online BBA?",
      answer:
        "Usually not. Most universities in our dataset admit directly on Class 12 marks. A small number may run their own aptitude or admission test — confirm with the specific university.",
    },
    {
      question: "Can I pursue an Online BBA while working part-time?",
      answer:
        "Yes — the format is built for it, with recorded lectures and scheduled assessments. Plan for consistent weekly study hours rather than assuming flexibility alone will be enough for three years.",
    },
    {
      question: "Which university is best for an Online BBA?",
      answer:
        "There is no single best university. Compare entitlement status, total cost, the specialisation you need, examination format and support quality — the comparison tool on this page is built for exactly that.",
    },
    {
      question: "Which Online BBA specialisation should I choose?",
      answer:
        "Choose based on the type of role you find genuinely interesting, not the most advertised option. The specialisation guide on this page maps common career interests to the specialisations that support them.",
    },
    {
      question: "When do I choose a specialisation in an Online BBA?",
      answer:
        "Most curricula introduce specialisation papers from the fifth semester onward, after two years of common foundational subjects. Some universities ask you to indicate a preference earlier, so check the specific programme structure.",
    },
    {
      question: "Can I do an MBA after an Online BBA?",
      answer:
        "Yes. A BBA is a standard qualifying degree for MBA admission, subject to the postgraduate programme's own minimum-marks and, where applicable, entrance-test requirements.",
    },
    {
      question: "Is an Online BBA equivalent to a regular BBA?",
      answer:
        "The degree nomenclature is the same when the programme carries the applicable entitlement. The experience differs: campus programmes offer in-person cohorts, hostel life and structured placement drives, while online programmes offer flexibility and lower relocation cost.",
    },
    {
      question: "What is the difference between BBA and B.Com?",
      answer:
        "A BBA is broader and management-oriented, covering marketing, HR and operations alongside finance, while a B.Com focuses more heavily on accounting, taxation and commerce fundamentals. Choose based on whether you want general management exposure or a deeper accounting-and-commerce grounding.",
    },
    {
      question: "How are Online BBA examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations alongside internal assessment such as assignments and quizzes. A few use designated centres. Confirm the mode with the university.",
    },
    {
      question: "Is attendance compulsory in an Online BBA?",
      answer:
        "Live-session attendance requirements vary. Some universities recommend it, others set a minimum for eligibility to sit examinations. Read the academic regulations before enrolling.",
    },
    {
      question: "What jobs can I get after an Online BBA?",
      answer:
        "Common entry paths include sales, marketing, HR, operations, accounts and business-development executive roles. Outcomes depend on internships, demonstrable skills and the specific employer, as well as the degree.",
    },
    {
      question: "Is placement guaranteed after an Online BBA?",
      answer:
        "No. Universities offer placement assistance — job boards, resume help, mock interviews, recruiter sessions — which is different from a placement guarantee. Be sceptical of any guarantee claim.",
    },
    {
      question: "Can I get an education loan for an Online BBA?",
      answer:
        "Loan and no-cost EMI options exist through university financing partners and lenders, but approval and eligibility are decided by the lender, not the university.",
    },
  ],
};

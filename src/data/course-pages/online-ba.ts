/**
 * Authored content for the Online BA course page.
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

export const onlineBaContent: CourseContent = {
  seo: {
    title: "Online BA: Fees, Eligibility, Admission & Top Universities {year}",
    description:
      "Compare Online BA programmes in India — fees, eligibility, subjects, specialisations, admission process and career paths for {year}.",
    h1: "Online BA: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online BA",
      "online BA fees",
      "online BA eligibility",
      "online BA admission",
      "best online BA universities in India",
      "online BA specialisations",
    ],
  },

  intro:
    "An Online BA is a three-year undergraduate arts degree delivered through a university's online learning platform. This page compares the universities in our dataset that publish an Online BA — their fees, subject choices, eligibility, examination pattern and approvals — so you can shortlist a programme on evidence rather than advertising.",

  overview: [
    "An Online BA is the Bachelor of Arts degree studied through a university's online mode. Lectures, reading material, assignments and assessment are conducted digitally, while the degree awarded carries the same nomenclature as the university's campus BA, subject to the entitlement that applies to that university and programme for your admission year.",
    "The degree builds a broad humanities and social-science foundation. Learners typically study a mix of language and communication papers, an ability-enhancement or value-added component, and a set of core papers in a chosen discipline such as English, History, Political Science, Sociology, Psychology or Economics. The later semesters usually let students choose electives and, in many curricula, complete a small project or dissertation.",
    "Delivery is generally a combination of live classes on a fixed weekly timetable, recorded lectures for revision, a learning management system that hosts notes and submissions, periodic assignments, and university-conducted term-end examinations. Because the pace is set by the university rather than a daily classroom routine, the format suits learners who need to fit study around other commitments.",
    "The Online BA is chosen by a wide mix of learners: school leavers who want a degree without relocating away from home, working adults completing a first degree while employed, aspirants preparing for civil-service or other government examinations that require a bachelor's degree, and diploma holders or dropouts finishing an interrupted undergraduate education.",
    "What differs between universities is meaningful: the list of specialisations on offer, whether a subject combination can be changed after the first year, the examination and proctoring method, project or dissertation requirements, and the total cost once all charges are added. This page leads with a university-by-university comparison for exactly that reason, rather than quoting one figure that would not hold for every institution.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "School leavers (12th pass)",
      detail:
        "Complete a recognised undergraduate arts degree without relocating for a campus seat, while keeping the option to work part-time or prepare for competitive examinations alongside it.",
    },
    {
      title: "Working adults",
      detail:
        "Finish or begin a bachelor's degree while continuing employment, using recorded lectures and a flexible weekly schedule instead of fixed classroom hours.",
    },
    {
      title: "Government-exam aspirants",
      detail:
        "Many civil-service, banking, defence and state-level government examinations require a bachelor's degree as a base qualification; an Online BA satisfies that requirement while leaving time for exam preparation.",
    },
    {
      title: "Degree completers",
      detail:
        "Learners who left an earlier undergraduate programme incomplete, or hold a diploma, can use an Online BA to complete a full bachelor's qualification on a timeline that suits them.",
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
        "University-specific. Some universities publish a minimum aggregate in Classes 10 and 12; others admit on the qualification alone, sometimes with a relaxation for reserved categories.",
    },
    {
      title: "Subject background",
      detail:
        "Not usually required for the general BA. A few universities ask for a specific subject, such as English, to have been studied at the school level for particular specialisations.",
    },
    {
      title: "Entrance examination",
      detail:
        "Most universities in this dataset admit directly on the qualifying marksheet, without a separate entrance test, though this can vary by institution and specialisation.",
    },
  ],
  eligibilityNote:
    "Eligibility criteria vary between universities and can change between admission cycles. Verify the current requirement for the specific university and admission year before you apply.",

  feeNotes: defaultFeeNotes("Online BA"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Core Paper I (Chosen Discipline)", type: "Core" },
        { name: "Language / Communication Skills", type: "Core" },
        { name: "Ability Enhancement Compulsory Course (AECC)", type: "Core" },
        { name: "Environmental Studies", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Core Paper II (Chosen Discipline)", type: "Core" },
        { name: "Language / Communication Skills II", type: "Core" },
        { name: "Skill Enhancement Course (SEC)", type: "Core" },
        { name: "Generic Elective I", type: "Elective" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Core Paper III (Chosen Discipline)", type: "Core" },
        { name: "Core Paper IV (Chosen Discipline)", type: "Core" },
        { name: "Skill Enhancement Course (SEC)", type: "Core" },
        { name: "Generic Elective II", type: "Elective" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "Core Paper V (Chosen Discipline)", type: "Core" },
        { name: "Core Paper VI (Chosen Discipline)", type: "Core" },
        { name: "Value-Added Course", type: "Core" },
        { name: "Generic Elective III", type: "Elective" },
      ],
    },
    {
      semester: "Semester 5",
      subjects: [
        { name: "Discipline-Specific Elective I", type: "Specialisation" },
        { name: "Discipline-Specific Elective II", type: "Specialisation" },
        { name: "Generic Elective IV", type: "Elective" },
      ],
    },
    {
      semester: "Semester 6",
      subjects: [
        { name: "Discipline-Specific Elective III", type: "Specialisation" },
        { name: "Discipline-Specific Elective IV", type: "Specialisation" },
        { name: "Project Work / Dissertation", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure of how most six-semester Online BA curricula are organised under a choice-based or NEP-aligned credit framework. The actual subject list, credit weightage and paper names are set by each university and vary by the discipline you choose — check the syllabus published by the university you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Class 10 marksheet and certificate",
    "Class 12 marksheet and certificate",
    "Transfer or migration certificate, where the university asks for it",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Category certificate, where a category benefit is claimed",
    "Gap-year affidavit, where applicable",
  ],
  documentsNote:
    "Universities add their own requirements — an income certificate for fee concessions, or a declaration form, for example. The exact checklist for each university is published on its admission page and on the university-course pages linked below.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "Class frequency, whether recordings are released the same day, and how discussion forums are used differ noticeably between universities — ask before you enrol.",

  examPattern: defaultExamPattern(),
  examNote:
    "Assessment weighting between internal assignments and the term-end examination, the proctoring method, and re-attempt or improvement-exam rules are university-specific and can change between sessions.",

  specialisationGuide: [
    { goal: "Writing, editing, publishing and content roles", specialisation: "English" },
    { goal: "Civil services, policy and public-sector careers", specialisation: "Political Science" },
    { goal: "Social work, NGOs and community development", specialisation: "Sociology" },
    { goal: "Counselling, HR and behavioural-research roles", specialisation: "Psychology" },
    { goal: "Research, archives, teaching and heritage work", specialisation: "History" },
    { goal: "Banking, finance and policy-analysis roles", specialisation: "Economics" },
    { goal: "Government administration and public-sector management", specialisation: "Public Administration" },
    { goal: "Media, reporting and digital-content careers", specialisation: "Journalism & Mass Communication" },
  ],

  careers: [
    { title: "Content Writer / Editor", detail: "Produces and refines written material for publications, brands or digital platforms." },
    { title: "Social Worker", detail: "Works with communities and organisations on welfare, outreach and rehabilitation programmes." },
    { title: "Teacher / Tutor", detail: "Teaches at the school level or coaches learners, often after a further teaching qualification." },
    { title: "Journalist", detail: "Reports, researches and writes for print, broadcast or digital news outlets." },
    { title: "HR / Administrative Assistant", detail: "Supports recruitment, onboarding, records and day-to-day office administration." },
    { title: "Public Relations Executive", detail: "Manages an organisation's messaging, media relations and public image." },
    { title: "Research Assistant", detail: "Supports data collection, literature review and documentation for academic or policy research." },
    { title: "Government Job Aspirant Roles", detail: "Satisfies the bachelor's-degree eligibility for civil-service, banking, defence and state-level examinations." },
    { title: "Customer Relationship Executive", detail: "Handles client communication, service queries and account coordination." },
    { title: "Counsellor (with further training)", detail: "Provides guidance and support, typically after an additional diploma or PG qualification in counselling." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online BA salary figures we cannot attribute to a credible, dated source. Entry-level pay for arts graduates depends heavily on the specific role, sector, city and any additional skills or certifications, not on the degree alone.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance is not guaranteed placement, and not every university offers it for an undergraduate arts degree in the same way it does for professional courses. Ask each university, in writing, what career support it actually provides to online BA learners.",

  worthItYes: [
    "You need a recognised bachelor's degree for a government job, a further postgraduate course, or a professional examination",
    "You want to study a humanities or social-science discipline in depth while continuing school-leaving-age commitments or a job",
    "You can commit to regular weekly study over three years without a campus routine to enforce it",
    "The specific specialisation on offer genuinely interests you or supports your next step",
    "The total cost is proportionate to what a first degree is worth to your plans",
  ],
  worthItNo: [
    "You expect the degree alone to guarantee a specific job or salary",
    "You are choosing the university purely on the lowest advertised fee",
    "You have no clear reason for choosing an arts discipline over another stream",
    "You need a campus cohort, library access and in-person mentoring to stay motivated",
    "Your target role specifically requires a professional or technical degree instead",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online BA"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Education and ed-tech",
    "Media and publishing",
    "Government and public administration",
    "Non-profits and social work",
    "Banking and financial services",
    "Retail and customer service",
    "Human resources and administration",
    "Public relations and communications",
  ],

  faqs: [
    {
      question: "What is an Online BA?",
      answer:
        "It is the Bachelor of Arts degree studied through a university's online mode, with digital classes, study material, assignments and university-specified examinations. The degree is awarded by the university itself.",
    },
    {
      question: "Is an Online BA valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme for your admission period. Verify the status for the exact university, programme and academic year before enrolling.",
    },
    {
      question: "Is an Online BA UGC recognised?",
      answer:
        "Recognition is programme-specific, not universal. Check the university's UGC entitlement status for the online mode, for the BA specifically, and for your admission year, rather than assuming it from the university's overall reputation.",
    },
    {
      question: "What is the duration of an Online BA?",
      answer:
        "Three years across six semesters in most programmes. Some universities publish a maximum permissible duration that allows completion over a longer period under a credit-based system.",
    },
    {
      question: "What is the eligibility for an Online BA?",
      answer:
        "A pass in 10+2 from a recognised board, in any stream, is the common requirement. Minimum marks and any subject-specific condition are set by each university.",
    },
    {
      question: "How much does an Online BA cost?",
      answer:
        "Fees are set by each university, so the range is wide. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "Do I need an entrance exam for an Online BA?",
      answer:
        "Usually not. Most universities in our dataset admit directly on the Class 12 marksheet, though a few may set additional requirements for specific specialisations.",
    },
    {
      question: "Can I pursue an Online BA while working?",
      answer:
        "Yes — the format is built for it, with recorded lectures and a semester-based assessment calendar. Plan for consistent weekly study hours rather than assuming flexibility alone will be enough.",
    },
    {
      question: "Which specialisation should I choose in an Online BA?",
      answer:
        "Choose based on the career or further course you are aiming for, not from the shortest paper list. The specialisation guide on this page maps common goals to the disciplines that support them.",
    },
    {
      question: "Is an Online BA equivalent to a regular BA?",
      answer:
        "The degree nomenclature is the same when the programme carries the applicable entitlement. The experience differs: campus programmes offer in-person classes, library access and a fixed timetable, online programmes offer flexibility and continuity of other commitments.",
    },
    {
      question: "Am I eligible for government jobs with an Online BA?",
      answer:
        "Where a government post or examination requires \"any bachelor's degree\", a recognised Online BA generally satisfies that condition, subject to the specific recruiting body's own rule. Always check the exact eligibility notification for the post or exam you are targeting.",
    },
    {
      question: "Can I pursue an MA after an Online BA?",
      answer:
        "Yes. An Online BA is a standard entry qualification for postgraduate arts and social-science programmes, subject to the admitting university's own eligibility and minimum-marks requirement.",
    },
    {
      question: "How are Online BA examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations alongside internal assessment through assignments. A few use designated examination centres. Confirm the mode with the university.",
    },
    {
      question: "What is the difference between Online BA, BBA and B.Com?",
      answer:
        "A BA covers humanities and social-science disciplines such as English, History, Political Science, Sociology, Psychology and Economics. A BBA focuses on business administration and management, and a B.Com focuses on commerce, accounting and finance. Choose based on the discipline and career direction you want, not the perceived difficulty of any one degree.",
    },
    {
      question: "Can I change my specialisation later in an Online BA?",
      answer:
        "It depends on the university. Some allow a change of the discipline-specific electives in later semesters, while the core discipline chosen at admission is usually fixed. Check the academic regulations before enrolling.",
    },
    {
      question: "What jobs can I get after an Online BA?",
      answer:
        "Common paths include content and editorial roles, teaching, social work, journalism, administrative and HR-support roles, and eligibility for government examinations. Outcomes depend on additional skills, certifications and the specific role as well as the degree.",
    },
    {
      question: "Is placement support available for an Online BA?",
      answer:
        "Some universities offer placement assistance for online undergraduate learners, but this is not standard across the board and is never a guarantee of a job. Ask the university in writing what support it provides.",
    },
    {
      question: "Can I get an education loan or EMI option for an Online BA?",
      answer:
        "No-cost EMI and loan options exist through university financing partners and lenders for many programmes, but approval and eligibility are decided by the lender, not the university.",
    },
  ],
};

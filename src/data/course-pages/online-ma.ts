/**
 * Authored content for the Online MA course page.
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

export const onlineMaContent: CourseContent = {
  seo: {
    title: "Online MA: Fees, Eligibility, Admission & Top Universities {year}",
    description:
      "Compare Online MA programmes in India — university fees, eligibility, specialisations, syllabus, admission process and career paths for {year}.",
    h1: "Online MA: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online MA",
      "online MA fees",
      "online MA eligibility",
      "online MA admission",
      "best online MA universities in India",
      "online MA specialisations",
    ],
  },

  intro:
    "An Online MA is a two-year postgraduate degree in a humanities or social-science discipline, delivered through a university's online learning platform. This page compares the universities in our dataset that publish an Online MA — their fees, specialisations, eligibility, examination structure and approvals — so you can shortlist on evidence rather than advertising.",

  overview: [
    "An Online MA, or Master of Arts, is a postgraduate qualification awarded in a discipline such as English, Political Science, Public Administration, Psychology, Sociology, Economics, History, Journalism & Mass Communication or Education. The subject is studied through a university's online mode, with lectures, reading material, assignments and assessment delivered digitally, while the degree itself carries the same nomenclature the university uses for its on-campus programme, subject to the entitlement that applies to that university and programme for your admission year.",
    "The purpose of the degree differs by discipline, but the underlying skill set is shared: close reading and argument, research design, data or textual analysis, and the ability to write a sustained, evidence-based piece of work. Most curricula open with foundational and theory papers in the first two semesters, move into methodology and specialised electives in the third, and close with an elective cluster plus a dissertation or research project in the fourth.",
    "Online delivery typically combines recorded and live sessions with a learning management system that holds the reading list, assignment schedule and submissions, continuous assessment through essays and presentations, and university-specified term-end examinations. Where the discipline supports it — for instance Public Administration, Sociology or Journalism — some programmes also build in applied components such as case studies, fieldwork-style projects or media assignments, though the extent of this depends entirely on the university.",
    "The Online MA is chosen by a wide range of learners: graduates preparing for competitive examinations such as UPSC or state public-service commissions, school and college teachers building the postgraduate qualification that UGC eligibility rules for teaching require, working professionals in media, social-sector or government roles who want formal grounding in their field, and learners who intend to pursue a PhD and need a recognised master's degree with a research component behind them.",
    "What varies between universities is significant: the discipline and specialisation list on offer, whether a dissertation is compulsory or optional, examination mode and proctoring, minimum attendance for live sessions, and the extent of career or research support. Those differences are the reason this page leads with a university comparison rather than a single set of numbers.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "Aspiring teachers and academics",
      detail:
        "A postgraduate degree in the discipline you intend to teach, which most school and college teaching roles require as a base qualification alongside the relevant eligibility test.",
    },
    {
      title: "Competitive-exam aspirants",
      detail:
        "Subjects such as Political Science, Public Administration, History, Sociology and Economics build directly on UPSC and state public-service-commission syllabi, so the coursework and the exam preparation reinforce each other.",
    },
    {
      title: "Working professionals",
      detail:
        "Recorded sessions and semester-based assessment let you continue full-time employment — in media, the social sector, government or education — while completing the degree.",
    },
    {
      title: "Aspiring researchers",
      detail:
        "Research-methodology papers and a dissertation component give you the grounding and, for many universities, the eligibility route toward MPhil or PhD admission.",
    },
  ],

  eligibility: [
    {
      title: "Educational qualification",
      detail:
        "A bachelor's degree in any discipline, or in a related discipline where the university specifies one, from a recognised institution — subject to the individual university's requirement.",
    },
    {
      title: "Minimum marks",
      detail:
        "University-specific. Several universities publish a minimum aggregate at graduation; others admit on the qualification alone, sometimes with a relaxation for reserved categories.",
    },
    {
      title: "Subject background",
      detail:
        "Not usually mandatory for a general MA, though some universities prefer or require a related undergraduate subject for disciplines such as Psychology or Economics — check the specific programme's rule.",
    },
    {
      title: "Entrance examination",
      detail:
        "University-specific. Most universities admit directly on the qualifying degree; a few run their own entrance or aptitude screening for specific specialisations.",
    },
  ],
  eligibilityNote:
    "Eligibility criteria vary between universities and can change between admission cycles. Verify the current requirement for the specific university, discipline and admission year before you apply.",

  feeNotes: defaultFeeNotes("Online MA"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Foundations of the Discipline (Core Theory I)", type: "Core" },
        { name: "History and Development of the Subject", type: "Core" },
        { name: "Research Methodology I", type: "Core" },
        { name: "Core Paper II", type: "Core" },
        { name: "Communication and Academic Writing", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Core Theory II", type: "Core" },
        { name: "Contemporary Issues and Debates", type: "Core" },
        { name: "Research Methodology II", type: "Core" },
        { name: "Core Paper IV", type: "Core" },
        { name: "Elective I", type: "Elective" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Advanced Theory / Applied Paper", type: "Core" },
        { name: "Specialisation Paper I", type: "Specialisation" },
        { name: "Specialisation Paper II", type: "Specialisation" },
        { name: "Elective II", type: "Elective" },
        { name: "Dissertation Proposal / Fieldwork Preparation", type: "Project" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "Specialisation Paper III", type: "Specialisation" },
        { name: "Specialisation Paper IV", type: "Specialisation" },
        { name: "Elective III", type: "Elective" },
        { name: "Dissertation / Research Project", type: "Project" },
        { name: "Viva Voce", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure of how most two-year Online MA curricula are organised across disciplines. The actual paper titles, credits, elective basket and whether the dissertation is compulsory are set by each university and vary by subject — check the syllabus published by the university and discipline you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Graduation marksheets (all years or semesters)",
    "Degree or provisional passing certificate",
    "Class 10 and 12 marksheets, where the university asks for them",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Category certificate, where a category benefit is claimed",
    "Subject-eligibility or equivalence proof, where the university requires a related undergraduate subject",
  ],
  documentsNote:
    "Universities add their own requirements — a migration certificate, a gap-year affidavit or a declaration form, for example. The exact checklist for each university is published on its admission page and on the university-course pages linked below.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "Not every university runs the same mix. Class frequency, whether recordings are released immediately, and how much faculty contact and dissertation guidance you get differ noticeably between programmes and disciplines — ask before you enrol.",

  examPattern: defaultExamPattern(),
  examNote:
    "Assessment weighting between internal essays or presentations and the term-end examination, the proctoring method, and dissertation evaluation and viva rules are university-specific and can change between sessions.",

  specialisationGuide: [
    { goal: "Teaching, editing, content and language careers", specialisation: "English" },
    { goal: "Civil services, policy analysis, political consulting", specialisation: "Political Science" },
    { goal: "Government administration, public policy, NGO leadership", specialisation: "Public Administration" },
    { goal: "Counselling, HR, clinical support roles (with further licensure)", specialisation: "Psychology" },
    { goal: "Social research, development sector, CSR", specialisation: "Sociology" },
    { goal: "Banking, research analysis, policy economics", specialisation: "Economics" },
    { goal: "Archival work, teaching, civil-services general studies", specialisation: "History" },
    { goal: "Journalism, media production, corporate communication", specialisation: "Journalism & Mass Communication" },
    { goal: "School leadership, curriculum design, ed-tech", specialisation: "Education" },
  ],

  careers: [
    { title: "School or College Teacher", detail: "Subject-specialist teaching role, typically alongside the eligibility test the school board or UGC framework requires." },
    { title: "Content Writer / Editor", detail: "Writing, editing and quality-checking content for publishers, media houses or corporate teams." },
    { title: "Civil Services Aspirant / Officer", detail: "Uses the discipline's syllabus overlap with UPSC or state PSC examinations, on qualifying the exam." },
    { title: "Policy or Research Analyst", detail: "Supports government bodies, think tanks or NGOs with research briefs, data analysis and policy notes." },
    { title: "HR Executive", detail: "Applies sociology, psychology or public-administration training to recruitment, engagement and employee relations." },
    { title: "Social Worker / Programme Officer", detail: "Plans and runs community or development-sector programmes for NGOs and government schemes." },
    { title: "Journalist / Media Professional", detail: "Reports, edits or produces content across print, broadcast or digital newsrooms." },
    { title: "Counsellor (with further licensure)", detail: "Psychology postgraduates who complete the additional clinical training and registration required can move into counselling or therapy roles." },
    { title: "Public Relations / Corporate Communications Executive", detail: "Manages messaging, media relations and internal communication for an organisation." },
    { title: "Academic Researcher / PhD Scholar", detail: "Progresses into MPhil or PhD study using the dissertation and methodology grounding built during the MA." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online MA salary figures we cannot attribute to a credible, dated source. Pay is driven heavily by the sector — teaching, government, media, corporate or the social sector pay on very different scales — as well as by experience and location, far more than by the study mode alone.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance for an Online MA is typically lighter than for professional degrees, since many learners are already employed, preparing for competitive examinations, or targeting sector-specific roles a generic job board does not cover. Ask each university, in writing, what its career service actually offers for your discipline.",

  worthItYes: [
    "The discipline and specialisation genuinely match the role, examination or research path you are targeting",
    "The university and programme hold the recognition your employer, school board or next course requires",
    "You need the postgraduate qualification specifically for teaching eligibility or PhD admission",
    "You can protect consistent weekly study hours across the two years, including for the dissertation",
    "You are already working in, or preparing for, a field where the subject matter is directly useful",
  ],
  worthItNo: [
    "You expect the degree by itself to produce a job offer",
    "You are choosing the discipline only because the fee is lowest, without matching it to a goal",
    "You need laboratory, fieldwork or in-person clinical training that the online format cannot provide for your specialisation",
    "You need a campus cohort, library access and in-person mentorship to stay consistent",
    "Your target role or licensure specifically requires a full-time, on-campus qualification",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online MA"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Education and academia",
    "Government and public administration",
    "Media and journalism",
    "Publishing and content",
    "Social sector and NGOs",
    "Market and policy research",
    "Human resources",
    "Banking and financial services",
    "Corporate communications and PR",
    "Healthcare and counselling support",
  ],

  faqs: [
    {
      question: "What is an Online MA?",
      answer:
        "It is a Master of Arts studied through a university's online mode, in a discipline such as English, Political Science, Public Administration, Psychology, Sociology, Economics, History, Journalism & Mass Communication or Education. Classes, study material and assessment are delivered digitally, and the degree is awarded by the university itself.",
    },
    {
      question: "Is an Online MA valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme for your admission period. Verify the status for the exact university, discipline and academic year before enrolling.",
    },
    {
      question: "Is an Online MA UGC recognised?",
      answer:
        "Recognition is programme-specific, not universal. Check the university's UGC entitlement status for the online mode, for the MA and discipline you want, and for your admission year, on the university's official page.",
    },
    {
      question: "What is the duration of an Online MA?",
      answer:
        "Two years across four semesters in most programmes. Some universities publish a maximum permissible duration that allows completion over a longer period.",
    },
    {
      question: "What is the eligibility for an Online MA?",
      answer:
        "A bachelor's degree from a recognised institution is the common requirement, in any discipline for most specialisations. A few universities prefer a related undergraduate subject for disciplines such as Psychology or Economics — check the specific programme's rule.",
    },
    {
      question: "How much does an Online MA cost?",
      answer:
        "Fees are set by each university, so the range is wide and also varies by discipline. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "Is an Online MA sufficient for a teaching job?",
      answer:
        "The MA is usually the base postgraduate qualification, but most teaching roles also require the applicable eligibility test — for example a state or national teacher-eligibility test for school posts, or NET/SET for college-level teaching. Check the requirement of the specific role and board.",
    },
    {
      question: "Is UGC-NET required after an Online MA?",
      answer:
        "NET (or an equivalent state-level test) is generally required for assistant-professor eligibility and for many JRF-linked research positions, regardless of whether the MA was completed online or on campus. The MA itself is the qualifying degree; NET is a separate examination you take afterward.",
    },
    {
      question: "Can I pursue a PhD after an Online MA?",
      answer:
        "In principle, yes — most universities accept a recognised MA as the qualifying degree for MPhil or PhD admission, subject to the admitting institution's own entrance test, interview and recognition rules for the specific online programme you completed.",
    },
    {
      question: "Can I practise as a counsellor or psychologist after an Online MA in Psychology?",
      answer:
        "An MA in Psychology builds theoretical and research grounding, but clinical practice, therapy and using a protected professional title generally require additional supervised clinical training and registration with the applicable professional body. Check the specific licensure route before assuming the MA alone qualifies you to practise.",
    },
    {
      question: "Is a dissertation compulsory in an Online MA?",
      answer:
        "It depends on the university and discipline. Many programmes make a dissertation or research project compulsory in the final semester; others offer it as one option among several electives. Confirm this before choosing a university if research experience matters to your plans.",
    },
    {
      question: "How are Online MA examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations alongside internal assessment such as essays and presentations. A few use designated centres, and dissertation semesters typically add a viva voce. Confirm the mode with the university.",
    },
    {
      question: "Can working professionals pursue an Online MA?",
      answer:
        "Yes — the format is built for it, with recorded lectures and semester-based assessment. Teachers, government employees, media professionals and social-sector staff commonly use it to add or upgrade a postgraduate qualification alongside their job.",
    },
    {
      question: "What is the difference between an Online MA and an Online MBA?",
      answer:
        "An MA is a discipline-specific humanities or social-science degree aimed at teaching, research, public service, media or social-sector careers, while an MBA is a general management degree aimed at business and administrative roles across industries. Choose based on the subject matter and career path you want, not on which sounds more employable in the abstract.",
    },
    {
      question: "Which Online MA specialisation should I choose?",
      answer:
        "Choose based on the career, examination or research path you are targeting, not on which discipline is trending. The specialisation guide on this page maps common goals — teaching, civil services, counselling, journalism, research — to the disciplines that support them.",
    },
    {
      question: "Which university is best for an Online MA?",
      answer:
        "There is no single best university for every discipline. Compare entitlement status, total cost, the specific discipline and specialisation on offer, dissertation requirement, examination format and support quality — the comparison tool on this page is built for exactly that.",
    },
    {
      question: "What documents are required for admission to an Online MA?",
      answer:
        "Graduation marksheets and certificate, identity proof, a photograph and a signature specimen at minimum, plus any subject-eligibility proof or university-specific documents listed on its admission page.",
    },
    {
      question: "Can I get an education loan for an Online MA?",
      answer:
        "Loan and no-cost EMI options exist through university financing partners and lenders for many programmes, but approval and eligibility are decided by the lender, not the university.",
    },
  ],
};

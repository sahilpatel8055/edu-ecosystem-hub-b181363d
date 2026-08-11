/**
 * Course page content model.
 *
 * One typed object drives the whole course page template. Online MBA is the
 * first fully authored implementation; every other family falls back to
 * `defaultCourseContent()`, which derives an honest, data-backed page from the
 * dataset. Adding a new authored course = adding one file here.
 */
import type { CourseFamily } from "@/lib/courseFamily";

export interface Labelled {
  title: string;
  detail: string;
}

export interface SyllabusSemester {
  semester: string;
  subjects: { name: string; type: "Core" | "Elective" | "Specialisation" | "Project" }[];
}

export interface CourseFaq {
  question: string;
  answer: string;
}

export interface CourseSeo {
  /** Overridable. `{course}` and `{year}` are replaced at render time. */
  title: string;
  description: string;
  h1: string;
  keywords: string[];
}

export interface CourseContent {
  seo: CourseSeo;
  intro: string;
  overview: string[];
  howItWorks: Labelled[];
  audience: Labelled[];
  eligibility: Labelled[];
  eligibilityNote: string;
  feeNotes: string[];
  syllabus: SyllabusSemester[];
  syllabusNote: string;
  admissionSteps: Labelled[];
  documents: string[];
  documentsNote: string;
  learningFormat: Labelled[];
  learningNote: string;
  examPattern: Labelled[];
  examNote: string;
  specialisationGuide: { goal: string; specialisation: string }[];
  careers: Labelled[];
  salaryFactors: string[];
  salaryNote: string;
  placementServices: Labelled[];
  placementNote: string;
  worthItYes: string[];
  worthItNo: string[];
  advantages: string[];
  limitations: string[];
  vsRegular: { factor: string; online: string; regular: string }[];
  vsDistance: { factor: string; online: string; distance: string }[];
  recognition: string[];
  verifyChecklist: string[];
  selectionGuide: Labelled[];
  industries: string[];
  faqs: CourseFaq[];
}

export const ADMISSION_YEAR = 2026;

/**
 * Generic, data-backed content used by every family that has no authored file
 * yet. It never states a fact the dataset does not support.
 */
export function defaultCourseContent(family: CourseFamily): CourseContent {
  const { name, shortName, degreeName, level, durationLabel } = family;
  const stage = level === "PG" ? "postgraduate" : "undergraduate";
  const entry = level === "PG" ? "a bachelor's degree" : "10+2 (or an equivalent qualification)";

  return {
    seo: {
      title: `${name}: Fees, Eligibility, Admission & Top Universities {year}`,
      description: `Compare ${name} programmes in India — university-wise fees, eligibility, syllabus structure, specialisations, admission process, approvals and career paths for {year}.`,
      h1: `${name}: Fees, Eligibility, Admission & Top Universities {year}`,
      keywords: [`${name} fees`, `${name} eligibility`, `${name} admission`, `best universities for ${name}`],
    },
    intro: `${name} is a ${durationLabel} ${stage} ${degreeName} programme delivered through a university's online learning platform. This page compares the universities in our dataset that publish this course, with their fees, specialisations, eligibility and admission requirements.`,
    overview: [
      `${name} refers to the ${degreeName} degree studied through a university's online mode, where classes, study material, assessments and student support are delivered digitally. The award is the same degree the university confers, subject to the entitlement or approval that applies to that university and programme for your admission year.`,
      `Coursework is normally organised semester-wise. Learners study through live sessions and recorded lectures, work through assignments, and appear for university-specified examinations. Because the schedule is flexible, the format is commonly chosen by people who are working, relocating, or studying alongside other commitments.`,
      `Programme design varies between universities: duration, specialisation list, examination format and fee structure are all set by the institution. Use the university comparison below rather than assuming one universal structure.`,
    ],
    howItWorks: defaultHowItWorks(),
    audience: [
      { title: "Working professionals", detail: `Study alongside a job, since sessions are recorded and assessments are scheduled around a semester calendar.` },
      { title: "Fresh graduates", detail: `Add a recognised ${shortName} qualification while gaining early work experience or preparing for other examinations.` },
      { title: "Career switchers", detail: `Build subject knowledge in a new domain without leaving current employment.` },
      { title: "Learners outside metro cities", detail: `Access programmes from universities in other states without relocating.` },
    ],
    eligibility: [
      { title: "Educational qualification", detail: `${entry} from a recognised institution, subject to the university's own requirement.` },
      { title: "Minimum marks", detail: "University-specific. Several universities publish a minimum aggregate; others admit on qualification alone." },
      { title: "Entrance examination", detail: family.entranceUniversities.length ? `Published by ${family.entranceUniversities.join(", ")} in our dataset. Most other listed universities admit directly.` : "Not published by the universities in our dataset for this course. Verify with the university before applying." },
      { title: "Work experience", detail: "Not a general requirement for this course. Some universities ask for it only on executive or specialised variants." },
    ],
    eligibilityNote:
      "Eligibility criteria vary between universities and can change between admission cycles. Verify the current requirement on the university's official page for your admission year.",
    feeNotes: defaultFeeNotes(name),
    syllabus: [],
    syllabusNote:
      "Curriculum is set by each university and varies by specialisation. Semester-wise subject lists are published on the individual university-course pages where the university makes them available.",
    admissionSteps: defaultAdmissionSteps(),
    documents: [
      "Previous qualifying marksheet",
      "Degree or passing certificate",
      "Government photo identity proof",
      "Passport-size photograph",
      "Signature specimen",
      "Category certificate, where a category benefit is claimed",
    ],
    documentsNote:
      "Universities add their own requirements — for example a migration certificate, a work-experience letter or an employer NOC. The exact list for each university is on its admission page.",
    learningFormat: defaultLearningFormat(),
    learningNote: "Not every university uses the same platform or session mix. Check the delivery model of the university you shortlist.",
    examPattern: defaultExamPattern(),
    examNote: "Assessment patterns, weightings and proctoring rules vary by university and can change between sessions.",
    specialisationGuide: [],
    careers: [],
    salaryFactors: defaultSalaryFactors(),
    salaryNote:
      "We do not publish salary figures we cannot source. Compensation depends on prior experience, role, industry, location and skills, not on the study mode alone.",
    placementServices: defaultPlacementServices(),
    placementNote:
      "Placement assistance is not the same as guaranteed placement. Ask each university in writing what its career service actually includes for online learners.",
    worthItYes: defaultWorthItYes(name),
    worthItNo: defaultWorthItNo(),
    advantages: defaultAdvantages(),
    limitations: defaultLimitations(),
    vsRegular: defaultVsRegular(),
    vsDistance: defaultVsDistance(),
    recognition: defaultRecognition(name),
    verifyChecklist: defaultVerifyChecklist(),
    selectionGuide: defaultSelectionGuide(),
    industries: [],
    faqs: [],
  };
}

/* --- shared building blocks, reused by authored and generated content --- */

export const defaultHowItWorks = (): Labelled[] => [
  { title: "Admission", detail: "You apply on the university's online admission portal, upload documents, and pay the first instalment once eligibility is confirmed." },
  { title: "Learning platform (LMS)", detail: "The university issues login credentials to its learning platform, where the semester's content, schedule and submissions live." },
  { title: "Live classes", detail: "Scheduled sessions with faculty, usually in the evening or on weekends, with doubt-clearing built in." },
  { title: "Recorded lectures", detail: "Every session is normally recorded so you can study around work hours and revise before assessments." },
  { title: "Assignments", detail: "Continuous assessment through assignments, quizzes and case work that counts toward internal marks." },
  { title: "Examinations", detail: "Term-end examinations in the format the university specifies — commonly online and proctored." },
  { title: "Project or capstone", detail: "Applied work in the final semesters, where the curriculum includes it." },
  { title: "Degree award", detail: "The university awards the degree on completion, with the same nomenclature it uses for the on-campus programme." },
];

export const defaultAdmissionSteps = (): Labelled[] => [
  { title: "Check eligibility", detail: "Confirm you meet the qualifying-degree and marks requirement for the specific university and admission year." },
  { title: "Compare universities", detail: "Weigh entitlement status, total cost, specialisation availability and examination format side by side." },
  { title: "Select the programme", detail: "Choose the course and specialisation; some universities lock the specialisation at admission." },
  { title: "Submit the application", detail: "Register on the university's official admission portal and complete the application form." },
  { title: "Upload documents", detail: "Provide marksheets, certificates, identity proof and photographs for verification." },
  { title: "Complete admission", detail: "Pay the applicable instalment, receive the enrolment confirmation and LMS access." },
];

export const defaultLearningFormat = (): Labelled[] => [
  { title: "Live classes", detail: "Interactive sessions with faculty on a published timetable." },
  { title: "Recorded lectures", detail: "On-demand access to every session for revision and schedule conflicts." },
  { title: "Digital LMS", detail: "One place for the syllabus, schedule, submissions, results and announcements." },
  { title: "Study material", detail: "E-books, reading lists, slides and case material issued by the university." },
  { title: "Discussion forums", detail: "Peer and faculty discussion threads, where the university enables them." },
  { title: "Assignments", detail: "Graded submissions spread across the semester." },
  { title: "Examinations", detail: "Term-end examinations in the mode the university specifies." },
];

export const defaultExamPattern = (): Labelled[] => [
  { title: "Internal assessment", detail: "Assignments, quizzes and participation contribute to the internal component." },
  { title: "Term-end examination", detail: "End-of-semester examination covering the semester's subjects." },
  { title: "Examination mode", detail: "Commonly online and remotely proctored; a few universities use designated centres." },
  { title: "Projects and viva", detail: "Applied projects, and a viva where the curriculum includes one." },
  { title: "Passing criteria", detail: "Set by the university, usually as a minimum aggregate across internal and term-end components." },
];

export const defaultSalaryFactors = (): string[] => [
  "Years and relevance of prior work experience",
  "The university and programme you complete",
  "Specialisation and the skills you can demonstrate",
  "City and cost-of-living band of the role",
  "Industry and company size",
  "Whether you are switching function or progressing in the same one",
];

export const defaultPlacementServices = (): Labelled[] => [
  { title: "Placement assistance", detail: "Access to a job board or referrals, where the university operates one for online learners." },
  { title: "Resume support", detail: "Guidance on positioning experience and coursework for target roles." },
  { title: "Mock interviews", detail: "Practice interviews and feedback, where offered." },
  { title: "Career counselling", detail: "One-to-one guidance on role and specialisation choices." },
  { title: "Industry sessions", detail: "Guest lectures, webinars and networking events." },
  { title: "Internship support", detail: "Assistance for learners without work experience, where the university runs it." },
];

export const defaultWorthItYes = (name: string): string[] => [
  `The university and programme carry the recognition your employer or next course requires`,
  "The curriculum genuinely matches the role you are targeting",
  "You can commit consistent weekly study hours alongside work",
  `The total cost of the ${name} is proportionate to the outcome you expect`,
  "A formal qualification is a stated requirement for your promotion or transition",
];

export const defaultWorthItNo = (): string[] => [
  "You expect the degree by itself to produce a job offer",
  "You are choosing purely on the lowest advertised fee",
  "Your career objective is still undefined",
  "You need a campus environment, cohort and in-person routine to stay consistent",
  "Your target industry specifically screens for full-time campus programmes",
];

export const defaultAdvantages = (): string[] => [
  "Study on a flexible schedule with recorded sessions",
  "Continue earning while you study, avoiding a career break",
  "Lower opportunity cost than leaving a job for a campus programme",
  "Access to universities in other states without relocating",
  "Multiple specialisations available in a single degree structure",
  "Course material, submissions and results in one digital platform",
];

export const defaultLimitations = (): string[] => [
  "Limited in-person campus interaction",
  "Requires self-discipline and consistent weekly time",
  "Networking works differently from a full-time campus cohort",
  "Programme quality and student support vary widely between universities",
  "Placement support is assistance, not a guarantee",
  "A few employers still evaluate campus and online programmes differently",
];

export const defaultVsRegular = () => [
  { factor: "Mode", online: "Online delivery", regular: "On-campus" },
  { factor: "Flexibility", online: "High — recorded sessions", regular: "Lower — fixed timetable" },
  { factor: "Working while studying", online: "Designed for it", regular: "Difficult in full-time programmes" },
  { factor: "Campus experience", online: "Limited", regular: "Central to the programme" },
  { factor: "Networking", online: "Largely digital", regular: "In-person cohort and clubs" },
  { factor: "Cost", online: "University dependent", regular: "University dependent" },
  { factor: "Admission", online: "University specific", regular: "University specific, often entrance-led" },
  { factor: "Best suited to", online: "Professionals needing flexibility", regular: "Learners wanting a full-time campus experience" },
];

export const defaultVsDistance = () => [
  { factor: "Learning mode", online: "Structured digital delivery through an LMS", distance: "Self-study with printed or downloadable material" },
  { factor: "Live classes", online: "Scheduled live sessions in most programmes", distance: "Limited; contact sessions where offered" },
  { factor: "Recorded content", online: "Generally available", distance: "Not standard" },
  { factor: "Interaction", online: "Faculty and peer interaction online", distance: "Mostly independent" },
  { factor: "Examinations", online: "Often online and proctored", distance: "Frequently centre-based" },
  { factor: "Flexibility", online: "High, with a semester rhythm", distance: "Highest, with least structure" },
  { factor: "Student support", online: "Dedicated online support in most programmes", distance: "Varies widely" },
  { factor: "Rules", online: "University and programme specific", distance: "University and programme specific" },
];

export const defaultRecognition = (name: string): string[] => [
  `Whether a specific ${name} is valid depends on the university and on the regulatory entitlement or approval that applies to that programme for your admission period. It is not a property of "online study" in general.`,
  "Check the status for the exact programme, the exact university and the exact academic year you are joining — entitlements are granted for defined periods and can change between cycles.",
  "Where a professional body or an employer sets its own recognition rule, verify against that rule as well before you pay any fee.",
];

export const defaultVerifyChecklist = (): string[] => [
  "UGC entitlement or status for the online programme",
  "Any other regulatory approval applicable to the course",
  "Accreditation held by the university",
  "University identity — full legal name, not a study-centre brand",
  "The programme is actually listed for the current session",
  "Status covers the academic year you are joining",
  "Every claim confirmed on the official university website",
  "Complete, written fee structure including all additional charges",
  "Published examination and assessment structure",
];

export const defaultSelectionGuide = (): Labelled[] => [
  { title: "Verify recognition first", detail: "Confirm entitlement and approval status for the exact programme and year before comparing anything else." },
  { title: "Compare total cost, not the headline fee", detail: "Add registration, examination, study material and technology charges to the tuition figure." },
  { title: "Read the syllabus", detail: "Check that the subject list matches the role you are targeting, not just the degree name." },
  { title: "Check specialisation availability", detail: "Confirm the specialisation you want is running this session, and whether you can change it later." },
  { title: "Test the learning platform", detail: "Ask for a demo of the LMS, session schedule and how recordings are released." },
  { title: "Understand the examination structure", detail: "Know the mode, proctoring rules, re-attempt policy and passing criteria." },
  { title: "Ask about student support", detail: "Response times, academic mentors and escalation paths matter over a two- or three-year programme." },
  { title: "Check career support in writing", detail: "Ask what the career service actually provides for online learners." },
  { title: "Review refund and cancellation terms", detail: "Know what happens if you withdraw after the session starts." },
  { title: "Confirm on the official source", detail: "Take the final decision from the university's own website and admission notification." },
];

export const defaultFeeNotes = (name: string): string[] => [
  `${name} fees are set by each university, so there is no single national price. The comparison below shows the figures each university publishes.`,
  "Most universities allow semester-wise payment, and many offer no-cost EMI through a financing partner.",
  "Registration, examination, study-material and technology charges may sit outside the advertised tuition fee — always ask for the all-inclusive total.",
  "Scholarships and category concessions, where available, apply to the tuition component and are subject to the university's own conditions.",
  "Where we have not verified a figure from an official source, the table shows \"Not specified\" instead of an estimate.",
];

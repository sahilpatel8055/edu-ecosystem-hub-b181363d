/**
 * Phase 4 — course pillar content for the eight families beyond Online MBA.
 *
 * Everything here is *course-level* education: what the degree is, who it
 * suits, how the curriculum is normally organised, and which career directions
 * it opens. It deliberately contains no university-specific fee, eligibility,
 * recognition, curriculum or placement claim — those live on the university ×
 * course pages, so the pillar cannot cannibalise them.
 */
import type { CourseFamily } from "@/lib/courseFamily";
import { defaultCourseContent, type CourseContent, type CourseFaq, type Labelled } from "./types";

interface FamilyAuthored {
  intent: string;
  overview: string[];
  audience: Labelled[];
  careers: Labelled[];
  industries: string[];
  specialisationGuide: { goal: string; specialisation: string }[];
  worthItYes: string[];
  worthItNo: string[];
  faqs: CourseFaq[];
}

const authoredFamilies: Record<string, FamilyAuthored> = {
  "online-mca": {
    intent: "advanced computing education, programming depth, projects and technology careers",
    overview: [
      "An Online MCA is a postgraduate computing degree studied through a university's online mode. It builds on an undergraduate computing or mathematics background and goes deeper into software engineering, data structures, databases, networks and application development than a bachelor's programme does.",
      "Most universities organise the programme semester-wise around a core of programming, systems and software-engineering subjects, followed by elective or specialisation areas in the later semesters and a capstone project or dissertation. The exact subject list, elective set and project requirement are set by each university.",
      "Because assessment in computing programmes usually combines assignments, lab or project submissions and term-end examinations, check how a university handles practical work online before you apply — this varies more in MCA than in non-technical courses.",
    ],
    audience: [
      { title: "BCA and B.Sc computing graduates", detail: "The most common entry route, where the MCA is used to move from application-level work into engineering roles." },
      { title: "Working software professionals", detail: "Formalise experience with a postgraduate qualification without leaving a full-time job." },
      { title: "Graduates from other streams", detail: "Where the university's published eligibility permits it, often with a mathematics requirement at 10+2 or degree level." },
      { title: "Candidates targeting eligibility-gated roles", detail: "Some public-sector and teaching roles specify a postgraduate computing degree." },
    ],
    careers: [
      { title: "Software development", detail: "Application, backend and full-stack development roles built on the programming and software-engineering core." },
      { title: "Data and database roles", detail: "Database development, data engineering and analytics-support work." },
      { title: "Systems and cloud", detail: "Systems administration, DevOps and cloud-operations directions, usually combined with vendor certifications." },
      { title: "Quality engineering", detail: "Manual and automation testing roles that draw on the software-engineering and project modules." },
      { title: "Technical teaching", detail: "Where a postgraduate computing qualification is the stated requirement." },
    ],
    industries: ["IT services", "Product engineering", "BFSI technology", "E-commerce", "Government IT", "EdTech", "Telecom"],
    specialisationGuide: [
      { goal: "Work with data at scale", specialisation: "Data Science / Data Analytics" },
      { goal: "Build machine-learning systems", specialisation: "Artificial Intelligence / Machine Learning" },
      { goal: "Move into infrastructure", specialisation: "Cloud Computing" },
      { goal: "Protect systems and data", specialisation: "Cyber Security" },
      { goal: "Stay in application delivery", specialisation: "Software Engineering / Full-Stack Development" },
    ],
    worthItYes: [
      "You already work in technology and need a postgraduate qualification on record.",
      "You want structured depth in computing rather than a short certification.",
      "Your target role or employer specifies a postgraduate computing degree.",
    ],
    worthItNo: [
      "You want hands-on lab or hardware work that an online format cannot provide.",
      "You expect the degree alone to produce a development job without a portfolio.",
      "You have not checked whether the university publishes the specialisation you need.",
    ],
    faqs: [
      { question: "Is an online MCA treated the same as a regular MCA?", answer: "A degree awarded through a university's entitled online programme carries the same nomenclature as its on-campus equivalent. Check the specific university's entitlement for your admission year on the university page rather than assuming it." },
      { question: "Do I need a mathematics background for an online MCA?", answer: "Several universities require mathematics at 10+2 or degree level, and several do not. This is a university-specific rule — the requirement for each university is on its programme page." },
      { question: "How is practical work assessed online?", answer: "Universities typically assess practical work through assignments, project submissions and a capstone or dissertation. The exact model differs by university and is published on the programme's examination section." },
    ],
  },
  "online-bba": {
    intent: "undergraduate business education, subjects, specialisations and early-career direction",
    overview: [
      "An Online BBA is a three-year undergraduate management degree studied through a university's online platform. It introduces the functional areas of business — management, accounting, economics, marketing, human resources and business communication — before allowing a specialisation in the later semesters.",
      "The programme is commonly taken straight after 10+2, or by people already working in sales, operations or family businesses who want a formal business qualification without pausing work.",
      "A BBA is frequently used as the entry step toward an MBA or a professional finance qualification, so check how the university's curriculum and examination record will be viewed by the postgraduate programmes you may apply to later.",
    ],
    audience: [
      { title: "12th-pass students", detail: "A flexible route into business education, often taken alongside a job, internship or competitive-exam preparation." },
      { title: "Working juniors", detail: "People already in sales, retail, operations or administration who need a degree to progress." },
      { title: "Family-business entrants", detail: "Learners who want management fundamentals while working in the business." },
      { title: "Future MBA applicants", detail: "Those planning a postgraduate management degree after graduation." },
    ],
    careers: [
      { title: "Sales and business development", detail: "The most common entry direction for BBA graduates across sectors." },
      { title: "Marketing and digital marketing", detail: "Campaign, content and performance-marketing support roles." },
      { title: "Human resources", detail: "Recruitment coordination and HR operations roles." },
      { title: "Operations and supply chain", detail: "Process, logistics and vendor-coordination roles." },
      { title: "Banking and financial services", detail: "Entry roles in retail banking, insurance and financial operations." },
    ],
    industries: ["Retail", "BFSI", "FMCG", "IT services", "Logistics", "Hospitality", "Startups"],
    specialisationGuide: [
      { goal: "Work with numbers and money", specialisation: "Finance" },
      { goal: "Build brands and campaigns", specialisation: "Marketing" },
      { goal: "Work with people and hiring", specialisation: "Human Resource Management" },
      { goal: "Run processes and delivery", specialisation: "Operations Management" },
      { goal: "Move toward analytics", specialisation: "Business Analytics" },
    ],
    worthItYes: [
      "You need a recognised undergraduate degree while working or preparing for other examinations.",
      "You want a business foundation before an MBA or a professional qualification.",
      "You cannot attend a campus programme for cost, location or schedule reasons.",
    ],
    worthItNo: [
      "You want a campus-based peer network and on-campus recruitment as the main outcome.",
      "You are unsure about business as a direction and would benefit from a broader UG degree.",
    ],
    faqs: [
      { question: "Can I do an MBA after an online BBA?", answer: "Yes, provided the BBA is from a university whose online programme is entitled for your admission year and the postgraduate institution accepts the qualification. Confirm the entitlement on the university page before enrolling." },
      { question: "Is an online BBA suitable straight after 12th?", answer: "It suits learners who need flexibility — a job, relocation, caregiving or exam preparation. Students who want campus placement and in-person peer learning are usually better served by a regular programme." },
      { question: "When is the specialisation chosen?", answer: "Most universities introduce specialisation subjects in the later semesters, but some fix the specialisation at admission. The rule for each university is on its programme page." },
    ],
  },
  "online-bca": {
    intent: "undergraduate computing education, programming subjects, specialisations and IT careers",
    overview: [
      "An Online BCA is a three-year undergraduate computing degree delivered through a university's online mode. It covers programming fundamentals, data structures, databases, operating systems, computer networks and web or application development.",
      "The curriculum is usually organised semester-wise, mixing theory subjects with practical or project components. Later semesters commonly allow an elective or specialisation track and a project submission.",
      "Because the technical stack taught varies significantly between universities, compare published subject lists rather than assuming a common syllabus — this is one of the largest differences between BCA programmes.",
    ],
    audience: [
      { title: "12th-pass students", detail: "An entry route into computing that can be studied alongside self-taught practical work." },
      { title: "Working IT support staff", detail: "People in support, operations or QA roles who need a formal computing degree." },
      { title: "Self-taught developers", detail: "Learners with practical skills who need a recognised undergraduate qualification." },
      { title: "Future MCA applicants", detail: "Students planning a postgraduate computing degree." },
    ],
    careers: [
      { title: "Software development", detail: "Junior developer and web-development roles, usually alongside a project portfolio." },
      { title: "Software testing", detail: "Manual and automation testing entry roles." },
      { title: "IT support and systems", detail: "Technical support, systems and network-operations roles." },
      { title: "Data roles", detail: "Data-entry-to-analyst progression, database support and reporting work." },
      { title: "Web and UI work", detail: "Front-end development and web-maintenance roles." },
    ],
    industries: ["IT services", "Startups", "E-commerce", "BFSI technology", "EdTech", "Government IT"],
    specialisationGuide: [
      { goal: "Build websites and apps", specialisation: "Web / Full-Stack Development" },
      { goal: "Work with data", specialisation: "Data Analytics" },
      { goal: "Work in security", specialisation: "Cyber Security" },
      { goal: "Work with cloud platforms", specialisation: "Cloud Computing" },
      { goal: "Move toward AI", specialisation: "Artificial Intelligence" },
    ],
    worthItYes: [
      "You want a recognised computing degree with a flexible schedule.",
      "You are building practical skills independently and need the formal qualification.",
      "You plan to continue to an MCA or a postgraduate computing programme.",
    ],
    worthItNo: [
      "You need supervised laboratory access as part of your learning.",
      "You expect the degree alone, without a portfolio, to secure a developer role.",
    ],
    faqs: [
      { question: "Does an online BCA include practical subjects?", answer: "Universities generally include practical or project components assessed through submissions. How each university runs and grades practical work is published in its examination section." },
      { question: "Is an online BCA enough for a developer job?", answer: "The degree establishes eligibility. Hiring for development roles also depends on demonstrable coding ability, so build a project portfolio alongside the programme." },
      { question: "Can I do an MCA after an online BCA?", answer: "Yes, subject to the postgraduate university's published eligibility, which may include a mathematics requirement." },
    ],
  },
  "online-bcom": {
    intent: "undergraduate commerce education, subjects, examinations and finance/accounting careers",
    overview: [
      "An Online B.Com is a three-year undergraduate commerce degree studied through a university's online platform. It covers financial accounting, business economics, business law, taxation, corporate accounting, auditing and business management.",
      "It is one of the most common online undergraduate choices in India because it pairs well with professional qualifications such as CA, CS or CMA, which many learners study in parallel.",
      "Programmes differ mainly in specialisation availability — accounting and finance, taxation, banking, or a general track — and in how heavily the examination is weighted against internal assessment.",
    ],
    audience: [
      { title: "Commerce students after 12th", detail: "A flexible degree that can be studied alongside CA, CS or CMA preparation." },
      { title: "Working accounts staff", detail: "People in bookkeeping, billing or accounts roles who need a graduate qualification." },
      { title: "Family-business learners", detail: "Those handling accounts and compliance in a family business." },
      { title: "Future M.Com or MBA applicants", detail: "Learners planning postgraduate commerce or management study." },
    ],
    careers: [
      { title: "Accounting and bookkeeping", detail: "Accounts executive, payables and receivables roles." },
      { title: "Taxation and compliance", detail: "GST, TDS and filing-support roles, often in practice firms." },
      { title: "Banking and financial services", detail: "Retail banking, operations and financial-support roles." },
      { title: "Audit support", detail: "Audit assistant roles in practice, typically alongside a professional qualification." },
      { title: "Business operations", detail: "Finance operations and MIS-reporting roles." },
    ],
    industries: ["Accounting practices", "BFSI", "Retail", "Manufacturing finance", "Consulting", "Startups"],
    specialisationGuide: [
      { goal: "Work in accounting practice", specialisation: "Accounting and Finance" },
      { goal: "Work in tax", specialisation: "Taxation" },
      { goal: "Enter banking", specialisation: "Banking and Insurance" },
      { goal: "Move toward analysis", specialisation: "Financial Analytics" },
    ],
    worthItYes: [
      "You are preparing for CA, CS or CMA and need a parallel degree.",
      "You already work in accounts and need the graduate qualification to progress.",
      "You want a commerce base before an M.Com or MBA.",
    ],
    worthItNo: [
      "You want campus placement as the primary outcome.",
      "You need in-person tutoring to work through accounting problems.",
    ],
    faqs: [
      { question: "Can I study CA along with an online B.Com?", answer: "Yes — the flexible schedule is one of the main reasons learners choose the online mode. Check the university's examination calendar against your professional-exam dates." },
      { question: "Is an online B.Com accepted for government jobs?", answer: "Degrees from universities whose online programmes are entitled for the relevant year are generally accepted where the recruiting body accepts distance or online qualifications. Verify the specific notification's wording." },
      { question: "What is the difference between B.Com and B.Com (Hons)?", answer: "Honours programmes carry additional depth and, at some universities, a different credit structure. Availability is university-specific." },
    ],
  },
  "online-ba": {
    intent: "humanities and social-science undergraduate study, subject choice and progression",
    overview: [
      "An Online BA is a three-year undergraduate degree in humanities, social sciences or languages, delivered through a university's online mode. Common subject areas include English, political science, psychology, sociology, economics, history and journalism.",
      "The degree is heavily subject-dependent: what you study, and where it leads, depends on the discipline you choose rather than on the BA label. Compare the subject list of each university before comparing anything else.",
      "It is widely used as a qualifying degree for competitive examinations, teaching routes and postgraduate humanities study, as well as by working learners completing an interrupted education.",
    ],
    audience: [
      { title: "Competitive-exam aspirants", detail: "Learners preparing for civil services, state services or banking examinations who need a graduate qualification." },
      { title: "Working learners", detail: "People completing a degree alongside employment or family responsibilities." },
      { title: "Future teachers", detail: "Those planning a B.Ed or a postgraduate humanities qualification." },
      { title: "Career changers", detail: "Learners moving into content, communication, social-sector or administrative work." },
    ],
    careers: [
      { title: "Content and communication", detail: "Writing, editing, content-operations and communications roles." },
      { title: "Public administration route", detail: "Eligibility for civil-services and state-service examinations." },
      { title: "Teaching route", detail: "A step toward B.Ed and school teaching, subject to the relevant regulatory requirements." },
      { title: "Social sector", detail: "Programme and field roles in NGOs and development organisations." },
      { title: "Business support roles", detail: "HR, operations and customer-experience roles that accept any graduate degree." },
    ],
    industries: ["Media", "Education", "Government and public sector", "Development sector", "BPO and services", "Publishing"],
    specialisationGuide: [
      { goal: "Prepare for civil services", specialisation: "Political Science / Public Administration / History" },
      { goal: "Work with people and behaviour", specialisation: "Psychology" },
      { goal: "Work in media and writing", specialisation: "English / Journalism and Mass Communication" },
      { goal: "Work with data and policy", specialisation: "Economics" },
      { goal: "Work in the social sector", specialisation: "Sociology / Social Work" },
    ],
    worthItYes: [
      "You need a recognised graduate degree while preparing for examinations or working.",
      "The discipline you want is genuinely offered by the university you shortlist.",
      "You plan postgraduate humanities study or a teaching route.",
    ],
    worthItNo: [
      "Your target discipline needs laboratory, studio or fieldwork the online mode cannot deliver.",
      "You want the campus experience and in-person seminar discussion.",
    ],
    faqs: [
      { question: "Which BA subject should I choose?", answer: "Choose by the direction you want afterwards — examinations, teaching, media, psychology practice or postgraduate study — and then check which universities actually publish that subject in the online mode." },
      { question: "Is an online BA valid for UPSC and state examinations?", answer: "Recruitment bodies generally require a graduate degree from a recognised university. Verify the specific notification's wording and the university's entitlement for your admission year." },
      { question: "Can I do an MA after an online BA?", answer: "Yes, subject to the postgraduate university's published eligibility for the discipline you choose." },
    ],
  },
  "online-ma": {
    intent: "postgraduate humanities and social-science study by subject, with progression and teaching routes",
    overview: [
      "An Online MA is a two-year postgraduate degree in a humanities, social-science or language discipline studied through a university's online platform. Subject areas commonly offered online include English, political science, psychology, sociology, economics, history and public administration.",
      "Programmes are subject-led: the core papers, elective options and dissertation requirement all follow the discipline, so two MA programmes at the same university can differ substantially.",
      "The degree is chosen for teaching and academic progression, for competitive-examination depth in a chosen optional subject, and by working professionals formalising domain expertise.",
    ],
    audience: [
      { title: "Graduates continuing their discipline", detail: "Learners taking a subject from BA level to postgraduate depth." },
      { title: "Teaching aspirants", detail: "Those working toward eligibility routes that require a postgraduate degree in the subject." },
      { title: "Competitive-exam candidates", detail: "Learners building depth in an optional subject alongside preparation." },
      { title: "Working professionals", detail: "People in content, HR, policy or social-sector work adding a formal postgraduate qualification." },
    ],
    careers: [
      { title: "Teaching and academia", detail: "School and, with further qualifications, higher-education teaching routes." },
      { title: "Content and editorial", detail: "Senior writing, editing and research-communication roles." },
      { title: "Research and policy support", detail: "Research-assistant and policy-support roles in institutes and NGOs." },
      { title: "HR and organisational roles", detail: "Where psychology or sociology backgrounds are relevant." },
      { title: "Public-service examinations", detail: "Subject depth for optional papers, alongside the qualifying degree requirement." },
    ],
    industries: ["Education", "Research institutes", "Development sector", "Media", "Government", "Corporate communications"],
    specialisationGuide: [
      { goal: "Teach language and literature", specialisation: "English" },
      { goal: "Work in policy and governance", specialisation: "Political Science / Public Administration" },
      { goal: "Work with behaviour and counselling routes", specialisation: "Psychology" },
      { goal: "Work in the development sector", specialisation: "Sociology / Social Work" },
      { goal: "Work with economic data", specialisation: "Economics" },
    ],
    worthItYes: [
      "Your target role or examination specifies a postgraduate degree in the subject.",
      "You need subject depth without leaving employment.",
      "The university publishes the discipline and dissertation model you need.",
    ],
    worthItNo: [
      "You need supervised clinical or practicum hours — for example for counselling practice — that the online programme does not include.",
      "You want a research-intensive campus environment with in-person supervision.",
    ],
    faqs: [
      { question: "Is an online MA accepted for NET or teaching eligibility?", answer: "Eligibility bodies set their own conditions on the mode and recognition of the qualifying degree. Check the current notification and the university's entitlement for your admission year before enrolling." },
      { question: "Does an online MA in psychology allow clinical practice?", answer: "No postgraduate degree alone confers clinical practice rights; regulated practice requires the specific qualifications and supervised training the regulator prescribes." },
      { question: "Is a dissertation required?", answer: "This is university- and discipline-specific. The requirement is published in the programme's curriculum section." },
    ],
  },
  "online-msc": {
    intent: "postgraduate science, computing and applied-science study, curriculum and career direction",
    overview: [
      "An Online M.Sc is a two-year postgraduate science degree delivered through a university's online mode. Online availability concentrates in non-laboratory disciplines — data science, computer science, mathematics, statistics and some applied or management-oriented science subjects.",
      "The curriculum is normally quantitative and project-led, combining core theory papers with electives and a dissertation or capstone in the final semesters.",
      "Because laboratory-heavy sciences cannot be delivered fully online, always confirm that the specific discipline you want is genuinely offered in the online mode by the university, rather than assuming an M.Sc covers every science subject.",
    ],
    audience: [
      { title: "B.Sc and BCA graduates", detail: "Learners taking a quantitative or computing subject to postgraduate level." },
      { title: "Working analysts and engineers", detail: "Professionals formalising data, statistics or computing expertise." },
      { title: "Teaching aspirants", detail: "Those needing a postgraduate science degree for teaching eligibility routes." },
      { title: "Career switchers into data", detail: "Graduates moving into analytics and data-science roles with a structured qualification." },
    ],
    careers: [
      { title: "Data analysis and data science", detail: "Analyst and data-scientist directions, built on the statistics and programming core." },
      { title: "Software and engineering roles", detail: "Where the discipline is computer science or applied computing." },
      { title: "Research support", detail: "Quantitative research roles in institutes and industry." },
      { title: "Teaching", detail: "School and, with further qualifications, higher-education teaching." },
      { title: "Actuarial and risk directions", detail: "For statistics and mathematics disciplines, usually alongside professional examinations." },
    ],
    industries: ["Analytics", "IT services", "BFSI", "Research", "Education", "Healthcare analytics"],
    specialisationGuide: [
      { goal: "Work with data end to end", specialisation: "Data Science" },
      { goal: "Go deeper into computing", specialisation: "Computer Science" },
      { goal: "Work with quantitative models", specialisation: "Mathematics / Statistics" },
      { goal: "Move into AI systems", specialisation: "Artificial Intelligence and Machine Learning" },
    ],
    worthItYes: [
      "Your discipline is genuinely delivered online by the university you shortlist.",
      "You need a postgraduate quantitative qualification while working.",
      "You will use the dissertation or capstone to build demonstrable work.",
    ],
    worthItNo: [
      "Your subject requires wet-lab or instrumentation work.",
      "You need in-person research supervision as part of your goal.",
    ],
    faqs: [
      { question: "Which M.Sc subjects are available online?", answer: "Online availability is concentrated in non-laboratory disciplines such as data science, computer science, mathematics and statistics. The subjects each university publishes are listed on its programme pages." },
      { question: "Is an online M.Sc accepted for a Ph.D.?", answer: "Doctoral admission depends on the admitting university's rules for the mode and recognition of the qualifying degree. Confirm with the target institution before enrolling." },
      { question: "How are practical components handled?", answer: "Universities typically use project work, assignments and a dissertation. The exact model is published in the programme's curriculum and examination sections." },
    ],
  },
  "online-mcom": {
    intent: "postgraduate commerce study, syllabus, specialisations and finance/accounting progression",
    overview: [
      "An Online M.Com is a two-year postgraduate commerce degree studied through a university's online platform. It builds on B.Com foundations with advanced accounting, corporate finance, taxation, business research and, at many universities, a dissertation or project.",
      "It is commonly chosen for teaching eligibility routes, for progression within accounting and finance functions, and by learners studying alongside professional qualifications.",
      "Universities differ mainly in specialisation availability — accounting and finance, taxation, banking or a general track — and in the weight given to project work.",
    ],
    audience: [
      { title: "B.Com graduates", detail: "The standard route, used to deepen accounting and finance knowledge." },
      { title: "Working finance staff", detail: "Accounts and finance professionals seeking a postgraduate qualification to progress." },
      { title: "Teaching aspirants", detail: "Learners working toward commerce-teaching eligibility routes." },
      { title: "Professional-exam candidates", detail: "CA, CS and CMA candidates adding an academic postgraduate degree." },
    ],
    careers: [
      { title: "Accounting and finance", detail: "Senior accounts, financial reporting and controlling roles." },
      { title: "Taxation", detail: "Direct and indirect tax roles in practice and industry." },
      { title: "Audit and assurance support", detail: "Internal audit and compliance roles." },
      { title: "Banking and financial services", detail: "Credit, operations and financial-analysis roles." },
      { title: "Commerce teaching", detail: "Where a postgraduate commerce degree is the stated requirement." },
    ],
    industries: ["Accounting practices", "BFSI", "Manufacturing finance", "Consulting", "Education", "Shared-services centres"],
    specialisationGuide: [
      { goal: "Deepen accounting practice", specialisation: "Accounting and Finance" },
      { goal: "Work in tax", specialisation: "Taxation" },
      { goal: "Enter banking and financial services", specialisation: "Banking and Finance" },
      { goal: "Work with financial data", specialisation: "Financial Analytics" },
    ],
    worthItYes: [
      "You need a postgraduate commerce qualification for progression or teaching eligibility.",
      "You are studying a professional qualification in parallel.",
      "You want depth in accounting or taxation without pausing work.",
    ],
    worthItNo: [
      "You want a general management qualification — an MBA may fit better.",
      "You expect the degree alone to change your role without applied experience.",
    ],
    faqs: [
      { question: "M.Com or MBA — which should I choose?", answer: "An M.Com deepens commerce and accounting subject knowledge; an MBA broadens into general management. Choose by the role you are targeting rather than by perceived prestige." },
      { question: "Is an online M.Com accepted for teaching eligibility?", answer: "Eligibility bodies set conditions on the mode and recognition of the qualifying degree. Check the current notification and the university's entitlement for your admission year." },
      { question: "Is a dissertation compulsory?", answer: "It is university-specific and published in the programme's curriculum section." },
    ],
  },
};

/** Merge authored pillar content over the data-backed default for a family. */
export function authoredFamilyContent(family: CourseFamily): CourseContent | undefined {
  const a = authoredFamilies[family.slug];
  if (!a) return undefined;
  const base = defaultCourseContent(family);
  const name = family.name;
  return {
    ...base,
    seo: {
      title: `${name} {year}: Fees, Eligibility, Syllabus, Admission & Universities`,
      description: `${name} explained for {year}: eligibility, fee structure, syllabus, specialisations, admission process, examinations, career options and a university-wise directory.`,
      h1: `${name}: Course, Fees, Eligibility, Syllabus & Universities {year}`,
      keywords: [
        `${name}`,
        `${name} fees`,
        `${name} eligibility`,
        `${name} syllabus`,
        `${name} admission`,
        `${name} universities`,
      ],
    },
    intro: `${name} covers ${a.intent}. This hub explains the course itself — eligibility, fee structure, curriculum, specialisations, examinations and careers — and then points you to the exact university programme pages and comparisons for the numbers.`,
    overview: a.overview,
    audience: a.audience,
    careers: a.careers,
    industries: a.industries,
    specialisationGuide: a.specialisationGuide,
    worthItYes: a.worthItYes,
    worthItNo: a.worthItNo,
    faqs: a.faqs,
  };
}

export const authoredFamilySlugs = Object.keys(authoredFamilies);

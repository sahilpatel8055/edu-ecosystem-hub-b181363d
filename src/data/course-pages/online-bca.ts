/**
 * Authored content for the Online BCA course page.
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

export const onlineBcaContent: CourseContent = {
  seo: {
    title: "Online BCA: Fees, Eligibility, Admission & Top Universities {year}",
    description:
      "Compare Online BCA programmes in India — fees, eligibility, syllabus, specialisations, admission steps and career paths for {year}.",
    h1: "Online BCA: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online BCA",
      "online BCA fees",
      "online BCA eligibility",
      "online BCA admission",
      "best online BCA universities in India",
      "online BCA syllabus",
    ],
  },

  intro:
    "An Online BCA (Bachelor of Computer Applications) is a three-year undergraduate degree in computing and software fundamentals, delivered through a university's online learning platform. This page compares universities in our dataset that offer an Online BCA — their fees, specialisations, eligibility, examination pattern and approvals — so you can shortlist a programme on evidence rather than marketing claims.",

  overview: [
    "An Online BCA is the Bachelor of Computer Applications studied through a university's online mode, with lectures, study material, assignments and assessments delivered digitally. The degree awarded is the same one the university confers on its campus learners, subject to the entitlement or approval that applies to that university and programme for your admission year.",
    "The programme builds a foundation in programming, mathematics for computing, data structures, database systems, operating systems, computer networks and software engineering, before letting students go deeper into an applied area such as web or app development in the later semesters. It is designed as an entry point into IT roles as well as a stepping stone toward postgraduate study such as an MCA or an M.Sc in computer science.",
    "Because the subject is inherently practical, most curricula pair theory papers with lab-based practical papers in the same semester — for example, a programming-language paper alongside a corresponding lab, or a database-theory paper alongside a hands-on DBMS lab. In the online mode, these labs are usually delivered through cloud-based coding environments, recorded demonstrations and remotely evaluated practical examinations rather than a physical computer lab.",
    "Delivery is typically a mix of live sessions with faculty, recorded lectures for revision, a learning management system holding the semester's material and deadlines, continuous assignments, and university-specified term-end examinations. Most programmes end with a project in the final semester, where learners build and document a working application.",
    "The format suits school leavers who want flexibility around other commitments, working individuals in IT-adjacent roles who want a formal computing qualification, and career switchers building a base before specialising further. What differs sharply between universities is the specialisation list, the technology stack taught, the examination and proctoring method, and the depth of practical assessment — which is why this page leads with a side-by-side university comparison rather than one generic description.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "School leavers (10+2 pass-outs)",
      detail: "Start a computing degree flexibly while preparing for other examinations, internships or part-time work, without being tied to a fixed campus timetable.",
    },
    {
      title: "IT support and helpdesk staff",
      detail: "Formalise practical computer knowledge already gained on the job into a recognised bachelor's degree that can support a move into development or analyst roles.",
    },
    {
      title: "Career switchers from non-IT backgrounds",
      detail: "Build programming, database and networking fundamentals from the ground up, at a pace that fits around current work.",
    },
    {
      title: "Aspiring MCA or M.Sc (CS) candidates",
      detail: "Complete a computing-focused bachelor's degree as the natural qualifying route into postgraduate computer-science programmes.",
    },
  ],

  eligibility: [
    {
      title: "Educational qualification",
      detail: "10+2 (or an equivalent qualification) from a recognised board, in any stream, subject to the individual university's requirement.",
    },
    {
      title: "Mathematics at 10+2",
      detail: "Requirement varies by university. Several ask for Mathematics or Computer Science as a 10+2 subject; others admit students from any stream, sometimes with a bridge or foundation paper.",
    },
    {
      title: "Minimum marks",
      detail: "University-specific. Some publish a minimum aggregate at 10+2; others admit on the qualification alone, occasionally with a relaxation for reserved categories.",
    },
    {
      title: "Entrance examination",
      detail: "Not a general requirement for this course. Most universities in our dataset admit directly on 10+2 marks; verify with the specific university before applying.",
    },
  ],
  eligibilityNote:
    "Eligibility rules, especially around 10+2 mathematics, differ noticeably between universities and can change between admission cycles. Confirm the current requirement on the official page of the university and admission year you are applying for.",

  feeNotes: defaultFeeNotes("Online BCA"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Programming Fundamentals (C Language)", type: "Core" },
        { name: "Mathematics for Computing", type: "Core" },
        { name: "Digital Electronics & Computer Organisation", type: "Core" },
        { name: "Communication Skills", type: "Core" },
        { name: "Programming Lab", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Object-Oriented Programming (C++ / Python)", type: "Core" },
        { name: "Data Structures", type: "Core" },
        { name: "Discrete Mathematics", type: "Core" },
        { name: "Operating Systems", type: "Core" },
        { name: "Data Structures Lab", type: "Core" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Database Management Systems", type: "Core" },
        { name: "Computer Networks", type: "Core" },
        { name: "Java Programming", type: "Core" },
        { name: "Web Technologies (HTML, CSS, JavaScript)", type: "Core" },
        { name: "DBMS Lab", type: "Core" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "Software Engineering", type: "Core" },
        { name: "Design and Analysis of Algorithms", type: "Core" },
        { name: "Server-Side Web Development", type: "Core" },
        { name: "Elective", type: "Elective" },
        { name: "Web Development Lab", type: "Core" },
      ],
    },
    {
      semester: "Semester 5",
      subjects: [
        { name: "Specialisation Paper I", type: "Specialisation" },
        { name: "Specialisation Paper II", type: "Specialisation" },
        { name: "Mobile Application Development", type: "Core" },
        { name: "Cloud Computing Fundamentals", type: "Core" },
        { name: "Mini Project", type: "Project" },
      ],
    },
    {
      semester: "Semester 6",
      subjects: [
        { name: "Specialisation Paper III", type: "Specialisation" },
        { name: "Cyber Security Fundamentals", type: "Core" },
        { name: "Elective", type: "Elective" },
        { name: "Final-Semester Project / Internship", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure of how most three-year, six-semester Online BCA curricula are organised, from programming fundamentals through to a final-semester project. The actual subject names, credit weightage and sequence are set by each university and vary further by specialisation — check the syllabus published by the university you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Class 10 and 12 marksheets and passing certificates",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Transfer or migration certificate, where the university asks for it",
    "Category certificate, where a category benefit is claimed",
  ],
  documentsNote:
    "Universities add their own requirements on top of this list — for example a gap-year affidavit or an equivalence certificate for a non-standard board. Check the exact checklist on the admission page of the university you are applying to.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "Practical papers are handled differently across universities: some provide access to cloud-based coding and database environments so you can run programs from any device, others release recorded lab demonstrations followed by an assessed take-home exercise, and a few require you to appear for a proctored practical examination. Ask specifically how labs and viva assessments work before enrolling.",

  examPattern: defaultExamPattern(),
  examNote:
    "For BCA specifically, theory and practical papers are usually assessed separately, with the practical component evaluated through a coding assignment, a proctored lab test or a viva depending on the university. Weightings and formats can change between sessions, so confirm the current pattern with the university.",

  specialisationGuide: [
    { goal: "Building predictive models and working with data pipelines", specialisation: "Data Science" },
    { goal: "Machine-learning engineering and intelligent applications", specialisation: "Artificial Intelligence & Machine Learning" },
    { goal: "Managing infrastructure, deployment and DevOps", specialisation: "Cloud Computing" },
    { goal: "Security operations, ethical hacking and network defence", specialisation: "Cyber Security" },
    { goal: "Building websites and web applications end-to-end", specialisation: "Full-Stack Development" },
    { goal: "Business reporting, dashboards and data-driven decisions", specialisation: "Data Analytics" },
  ],

  careers: [
    { title: "Software Developer", detail: "Writes, tests and maintains application code as part of a development team." },
    { title: "Web Developer", detail: "Builds and maintains websites and web applications, front-end, back-end or both." },
    { title: "Junior Data Analyst", detail: "Cleans data and builds reports and dashboards that support business decisions." },
    { title: "System Administrator", detail: "Maintains servers, networks and access controls for an organisation's IT setup." },
    { title: "Quality Assurance / Test Engineer", detail: "Designs and runs test cases to catch defects before software ships." },
    { title: "Database Administrator (entry-level)", detail: "Supports database performance, backups and access under senior guidance." },
    { title: "Technical Support Engineer", detail: "Diagnoses and resolves software or infrastructure issues for end users." },
    { title: "Mobile App Developer", detail: "Builds applications for Android or iOS, often starting on a single platform." },
    { title: "IT Business Analyst", detail: "Bridges business requirements and technical teams for software projects." },
    { title: "Cyber Security Analyst (entry-level)", detail: "Monitors systems for threats and supports incident response under a senior analyst." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online BCA salary figures we cannot attribute to a credible, dated source. Starting pay depends heavily on demonstrable coding skills, internships, the specific role and city, and the hiring company — not on the study mode alone.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance is not the same as guaranteed placement. For a technical degree like BCA, ask specifically whether the university's career support includes coding-interview preparation and whether recruiters hiring for the online programme are IT-focused.",

  worthItYes: [
    "You want a formal computing degree while building real coding practice through labs and projects",
    "The university and programme carry the recognition your employer or a postgraduate course requires",
    "The specialisation on offer matches the IT role you are targeting",
    "You can commit consistent weekly hours to both theory and hands-on practice",
    "You plan to pursue an MCA or a related postgraduate qualification afterwards",
  ],
  worthItNo: [
    "You expect the degree alone, without a coding portfolio, to secure a developer role",
    "You are choosing purely on the lowest advertised fee without checking how labs are run",
    "You need in-person mentorship and pair-programming to learn effectively",
    "Your target employers specifically prefer full-time, on-campus computer-science graduates",
    "You cannot access a reasonably capable computer and stable internet for coding practice",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online BCA"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Information technology",
    "IT-enabled services (ITES) and BPM",
    "E-commerce and retail technology",
    "Banking and financial services",
    "EdTech",
    "Telecom",
    "Healthcare technology",
    "Government and public-sector IT",
    "Start-ups and product companies",
    "Consulting",
  ],

  faqs: [
    {
      question: "What is an Online BCA?",
      answer:
        "It is the Bachelor of Computer Applications studied through a university's online mode, with digital classes, study material, lab work and university-specified examinations. The degree is awarded by the university itself.",
    },
    {
      question: "Is an Online BCA valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme for your admission period. Verify the status for the exact university, programme and academic year before enrolling.",
    },
    {
      question: "Is an Online BCA UGC recognised?",
      answer:
        "Recognition is programme-specific, not universal. Check the university's UGC entitlement status for the online mode, for the BCA specifically, and for your admission year, on the official source.",
    },
    {
      question: "What is the duration of an Online BCA?",
      answer:
        "Three years across six semesters in most programmes. Some universities publish a maximum permissible duration that allows you to complete over a longer period.",
    },
    {
      question: "What is the eligibility for an Online BCA?",
      answer:
        "A pass in 10+2 from a recognised board is the common requirement. Whether Mathematics or Computer Science must have been studied at 10+2 varies by university, so check this specifically before applying.",
    },
    {
      question: "Is Mathematics compulsory at 10+2 for an Online BCA?",
      answer:
        "It depends on the university. Some require Mathematics or Computer Science as a 10+2 subject, while others accept any stream, sometimes with a bridge paper in the early semesters.",
    },
    {
      question: "How much does an Online BCA cost?",
      answer:
        "Fees are set by each university, so the range is wide. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "How are practical labs conducted in an Online BCA?",
      answer:
        "Approaches vary: cloud-based coding or database environments accessible from any device, recorded lab demonstrations followed by an assessed exercise, or a proctored practical examination and viva. Confirm the exact method with the university before enrolling.",
    },
    {
      question: "How are Online BCA examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations for theory papers, with practical papers assessed separately through a coding test, lab exercise or viva. A few universities use designated centres. Confirm the mode with the university.",
    },
    {
      question: "Can I pursue an Online BCA while working?",
      answer:
        "Yes — the format is built for it, with recorded lectures and semester-based assessment. Set aside consistent time each week for coding practice, since this subject is learned by doing, not only by reading.",
    },
    {
      question: "Which specialisation should I choose in an Online BCA?",
      answer:
        "Choose based on the role you want next rather than the trend. The specialisation guide on this page maps common goals — such as data roles, cloud, security or full-stack development — to the specialisations that support them.",
    },
    {
      question: "Can I do an MCA or M.Sc after an Online BCA?",
      answer:
        "Yes, a BCA is a common and directly relevant qualifying degree for an MCA or an M.Sc in computer science, subject to the admitting institution's own eligibility and minimum-marks rules.",
    },
    {
      question: "Can I get a government job after an Online BCA?",
      answer:
        "Yes, a BCA can meet the graduate-level eligibility for many government and public-sector-undertaking positions, and for IT-specific government roles where a computing background is asked for. Always check the specific notification's eligibility clause.",
    },
    {
      question: "What jobs can I get after an Online BCA?",
      answer:
        "Common entry points include software development, web development, technical support, quality assurance, database administration and junior data or business analyst roles. Outcomes depend on demonstrable coding skills as well as the degree.",
    },
    {
      question: "Is a portfolio important after an Online BCA?",
      answer:
        "Yes. For technical hiring, employers commonly look at projects, code samples or a GitHub profile alongside the degree. Building a small portfolio during the programme, especially around the final-semester project, materially helps your job search.",
    },
    {
      question: "What is the salary after an Online BCA?",
      answer:
        "It varies by role, city, company and — most of all — demonstrable coding ability and any internship experience. We deliberately do not publish a single national average, since such figures are rarely sourced or comparable.",
    },
    {
      question: "Is an Online BCA equivalent to a regular BCA?",
      answer:
        "The degree nomenclature is the same when the programme carries the applicable entitlement. The experience differs: campus programmes offer in-person labs and a resident cohort, online programmes offer flexibility and continuity of work or other commitments.",
    },
    {
      question: "Is placement guaranteed after an Online BCA?",
      answer:
        "No. Universities offer placement assistance — job boards, resume help, mock interviews, recruiter sessions — which is different from a placement guarantee. Be sceptical of any guarantee claim.",
    },
    {
      question: "Can I pursue an Online BCA after a diploma?",
      answer:
        "Some universities accept an equivalent diploma in place of 10+2 for BCA admission, subject to their own equivalence rules. Confirm this directly with the university before applying.",
    },
  ],
};

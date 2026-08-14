/**
 * Authored content for the Online M.Sc course page.
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

export const onlineMscContent: CourseContent = {
  seo: {
    title: "Online M.Sc {year}: Fees, Eligibility, Syllabus & Top Universities",
    description:
      "Compare Online M.Sc programmes in India across Data Science, Computer Science, Mathematics and more — fees, eligibility, syllabus and careers for {year}.",
    h1: "Online M.Sc: Fees, Eligibility, Admission & Top Universities {year}",
    keywords: [
      "online MSc",
      "online MSc degree",
      "online MSc data science",
      "online MSc computer science",
      "online MSc fees",
      "online MSc eligibility",
      "best online MSc universities in India",
    ],
  },

  intro:
    "An Online M.Sc is a two-year postgraduate science degree delivered through a university's online learning platform, commonly offered in Data Science, Computer Science, Mathematics, Statistics, Environmental Science, Biotechnology and Psychology. This page compares the universities in our dataset that publish an Online M.Sc — their fees, specialisations, eligibility, examination structure and approvals — so you can shortlist on evidence rather than advertising.",

  overview: [
    "An Online M.Sc is the Master of Science degree studied through a university's online mode. Lectures, study material, assessment and student support are delivered digitally, while the degree itself carries the same nomenclature the university awards for its campus programme, subject to the entitlement or approval that applies to that university and programme for your admission year.",
    "Unlike an Online MBA, which builds general management capability, an Online M.Sc deepens subject-matter expertise in a specific scientific or technical discipline. In India, the discipline that draws the most enrolment online is Data Science, followed by Computer Science, Mathematics, Statistics, Environmental Science, Biotechnology and Psychology. Each discipline has its own core sequence: a Data Science or Computer Science M.Sc leans on programming, statistics, databases and machine learning, while a Mathematics or Statistics M.Sc leans on analysis, algebra, probability theory and applied modelling.",
    "Curricula are typically organised across four semesters. Early semesters build foundational theory and quantitative method; later semesters introduce electives and specialised modules, and the final semester usually carries a dissertation, research project or applied capstone. Because the subject is science rather than management, a genuine M.Sc curriculum expects rigorous problem sets, coding assignments or laboratory-adjacent practical work, not only case discussions — universities that teach a lab-dependent discipline online typically substitute virtual labs, simulation software, take-home kits or affiliated-centre practicals for physical laboratory sessions, and the extent of this varies significantly between institutions.",
    "Online delivery generally combines live evening or weekend sessions with recorded lectures, a learning management system holding the semester's schedule and submissions, continuous assignments, and university-specified term-end examinations. Learners who choose this format are usually working professionals in IT, analytics, healthcare or education who want a research-oriented postgraduate qualification without leaving employment, along with graduates preparing for further doctoral study, and candidates targeting eligibility for the UGC-NET or other research-track examinations.",
    "What varies most between universities is the specialisation on offer, the depth of practical or lab component, examination mode and proctoring, dissertation requirements, and whether the university's approvals extend to the specific discipline you want. Because these differences materially affect both learning quality and recognised outcomes, this page leads with a university comparison rather than a single set of figures.",
  ],

  howItWorks: defaultHowItWorks(),

  audience: [
    {
      title: "Working professionals in IT and analytics",
      detail:
        "Deepen technical grounding in statistics, programming and machine learning while continuing full-time employment, applying coursework directly to a current data or engineering role.",
    },
    {
      title: "Science graduates",
      detail:
        "Progress from a B.Sc into specialised postgraduate study in the same or an adjacent discipline, building the subject depth that a bachelor's degree alone does not provide.",
    },
    {
      title: "Aspiring researchers and NET/JRF candidates",
      detail:
        "Build the subject foundation that UGC-NET, JRF and doctoral admission tests expect, while studying at a pace that fits alongside coaching or a job.",
    },
    {
      title: "Teachers and lecturers",
      detail:
        "Add a postgraduate science qualification that supports eligibility for teaching posts and career progression, without pausing current employment.",
    },
    {
      title: "Career switchers into data and technology",
      detail:
        "Move from a non-technical background into data science, analytics or computer science by building formal subject knowledge alongside a recognised degree.",
    },
  ],

  eligibility: [
    {
      title: "Educational qualification",
      detail:
        "A bachelor's degree, typically a B.Sc in a related discipline, from a recognised institution. Some universities also admit B.Com, BCA or B.Tech graduates into Data Science or Computer Science variants, subject to the individual university's rule.",
    },
    {
      title: "Minimum marks",
      detail:
        "University-specific. Several universities publish a minimum aggregate at graduation, commonly in the 45-50% range, with a relaxation for reserved categories; others admit on the qualification alone.",
    },
    {
      title: "Subject background",
      detail:
        "Disciplines such as Mathematics, Statistics or Computer Science M.Sc often expect a related subject at graduation; Data Science and Environmental Science variants are sometimes open to a wider set of bachelor's backgrounds. Confirm the exact rule for your target specialisation.",
    },
    {
      title: "Entrance examination",
      detail:
        "Not a general requirement. Most universities admit directly on the qualifying degree; a few run their own aptitude or subject-screening test for specific specialisations.",
    },
  ],
  eligibilityNote:
    "Eligibility criteria vary between universities and specialisations, and can change between admission cycles. Verify the current requirement for the specific university, discipline and admission year before you apply.",

  feeNotes: defaultFeeNotes("Online M.Sc"),

  syllabus: [
    {
      semester: "Semester 1",
      subjects: [
        { name: "Mathematical Foundations for Data Science", type: "Core" },
        { name: "Programming for Data Analysis (Python/R)", type: "Core" },
        { name: "Probability and Statistical Methods", type: "Core" },
        { name: "Database Management Systems", type: "Core" },
        { name: "Research Methodology", type: "Core" },
      ],
    },
    {
      semester: "Semester 2",
      subjects: [
        { name: "Data Structures and Algorithms", type: "Core" },
        { name: "Applied Regression and Multivariate Analysis", type: "Core" },
        { name: "Data Visualisation and Exploratory Analysis", type: "Core" },
        { name: "Operating Systems and Computer Networks", type: "Core" },
        { name: "Elective I", type: "Elective" },
      ],
    },
    {
      semester: "Semester 3",
      subjects: [
        { name: "Machine Learning", type: "Core" },
        { name: "Big Data Technologies", type: "Core" },
        { name: "Specialisation Paper I", type: "Specialisation" },
        { name: "Specialisation Paper II", type: "Specialisation" },
        { name: "Elective II", type: "Elective" },
      ],
    },
    {
      semester: "Semester 4",
      subjects: [
        { name: "Deep Learning and Artificial Intelligence", type: "Core" },
        { name: "Cloud Computing and Data Engineering", type: "Core" },
        { name: "Specialisation Paper III", type: "Specialisation" },
        { name: "Seminar / Research Paper", type: "Project" },
        { name: "Dissertation / Capstone Project", type: "Project" },
      ],
    },
  ],
  syllabusNote:
    "This is a representative structure for a Data Science / Computer Science-leaning Online M.Sc. Universities offering Mathematics, Statistics, Biotechnology, Environmental Science or Psychology specialisations replace the technical core with subjects appropriate to that discipline — the actual subject list, credits and sequence are set by each university and change with the specialisation you choose. Check the syllabus published by the university you shortlist.",

  admissionSteps: defaultAdmissionSteps(),

  documents: [
    "Graduation marksheets (all years or semesters)",
    "Degree or provisional passing certificate",
    "Class 10 and 12 marksheets, where the university asks for them",
    "Government photo identity proof",
    "Passport-size photograph",
    "Signature specimen",
    "Category certificate, where a category benefit is claimed",
    "Subject-eligibility proof, for specialisations that require a related bachelor's discipline",
  ],
  documentsNote:
    "Universities add their own requirements — a migration certificate, a gap-year affidavit or a declaration form, for example. The exact checklist for each university is published on its admission page and on the university-course pages linked below.",

  learningFormat: defaultLearningFormat(),
  learningNote:
    "For disciplines that normally involve laboratory or hands-on practical work, ask specifically how the university handles this online — through virtual labs, simulation software, take-home kits, coding sandboxes or affiliated-centre practicals. The approach differs significantly between universities and materially affects learning quality.",

  examPattern: defaultExamPattern(),
  examNote:
    "Assessment weighting between internal work and the term-end examination, the proctoring method, coding-assessment format and re-attempt rules are all university-specific and can change between sessions.",

  specialisationGuide: [
    { goal: "Data analytics, machine learning and AI roles", specialisation: "Data Science" },
    { goal: "Software development and systems roles", specialisation: "Computer Science" },
    { goal: "Actuarial science, research and quantitative analysis", specialisation: "Statistics" },
    { goal: "Teaching, academia and competitive-exam preparation", specialisation: "Mathematics" },
    { goal: "Pharma, agri-tech and life-sciences research", specialisation: "Biotechnology" },
    { goal: "Sustainability, ESG and environmental consulting", specialisation: "Environmental Science" },
    { goal: "Counselling, HR and behavioural-research roles", specialisation: "Psychology" },
    { goal: "Laboratory and diagnostic-sciences careers", specialisation: "Chemistry / Biochemistry" },
    { goal: "IT infrastructure and cybersecurity roles", specialisation: "Information Technology" },
  ],

  careers: [
    { title: "Data Analyst", detail: "Cleans, explores and interprets data to support business or research decisions." },
    { title: "Data Scientist", detail: "Builds statistical and machine-learning models to solve prediction and optimisation problems." },
    { title: "Machine Learning Engineer", detail: "Deploys and maintains ML models in production systems." },
    { title: "Software Developer", detail: "Designs, builds and maintains applications and backend systems." },
    { title: "Research Associate", detail: "Supports academic or industry research projects, often as a step toward a doctoral programme." },
    { title: "Statistician / Biostatistician", detail: "Applies statistical methods to clinical trials, surveys or quality-control data." },
    { title: "Environmental Consultant", detail: "Assesses environmental impact and compliance for projects and organisations." },
    { title: "Lecturer / Subject Teacher", detail: "Teaches the subject at the school or college level, subject to the recruiting institution's own eligibility rules." },
    { title: "Business Intelligence Analyst", detail: "Builds dashboards and reporting pipelines that track business performance." },
    { title: "Clinical Research Associate", detail: "Coordinates and monitors clinical studies for pharmaceutical or healthcare organisations." },
  ],

  salaryFactors: defaultSalaryFactors(),
  salaryNote:
    "We do not publish Online M.Sc salary figures we cannot attribute to a credible, dated source. Pay is driven by specialisation, prior experience, role, industry and location far more than by the study mode — treat any portal quoting a single national \"average M.Sc salary\" with caution.",

  placementServices: defaultPlacementServices(),
  placementNote:
    "Placement assistance is not guaranteed placement. Ask each university, in writing, which services are available to online learners specifically, and whether the job board and recruiter events are shared with the campus programme.",

  worthItYes: [
    "The university and programme hold the recognition your employer, PhD programme or the next examination requires",
    "The specialisation and syllabus genuinely match the technical role or research path you are targeting",
    "You are prepared for the quantitative and, where applicable, practical rigour a genuine M.Sc demands",
    "You can protect consistent weekly study hours across two years alongside work",
    "A postgraduate science qualification is a stated requirement for NET/JRF eligibility, a teaching post or your next role",
  ],
  worthItNo: [
    "You expect the degree by itself to produce job offers without demonstrable technical skill",
    "You are choosing the university only because it is the cheapest",
    "Your target discipline genuinely requires physical laboratory work the online programme cannot substitute adequately",
    "You need a campus cohort and in-person routine to stay consistent with rigorous coursework",
    "Your target employer or admitting institution specifically screens for full-time campus M.Sc programmes",
  ],

  advantages: defaultAdvantages(),
  limitations: defaultLimitations(),

  vsRegular: defaultVsRegular(),
  vsDistance: defaultVsDistance(),

  recognition: defaultRecognition("Online M.Sc"),
  verifyChecklist: defaultVerifyChecklist(),
  selectionGuide: defaultSelectionGuide(),

  industries: [
    "Information technology",
    "Data analytics and consulting",
    "Banking and financial services",
    "Pharmaceuticals and biotechnology",
    "Healthcare and diagnostics",
    "Education and academia",
    "Environmental and sustainability consulting",
    "E-commerce and retail technology",
    "Government research bodies",
    "Telecom",
  ],

  faqs: [
    {
      question: "What is an Online M.Sc?",
      answer:
        "It is the Master of Science degree studied through a university's online mode, with digital classes, study material, assignments and university-specified examinations. The degree is awarded by the university itself, in disciplines such as Data Science, Computer Science, Mathematics, Statistics or Biotechnology.",
    },
    {
      question: "Is an Online M.Sc valid in India?",
      answer:
        "Validity depends on the university and on the regulatory entitlement or approval that applies to that specific programme and discipline for your admission period. Verify the status for the exact university, specialisation and academic year before enrolling.",
    },
    {
      question: "Is an Online M.Sc UGC recognised?",
      answer:
        "Recognition is programme-specific, not universal. Check the university's UGC entitlement status for the online mode, for the M.Sc specifically, and for your admission year — do not assume it from the university's general reputation.",
    },
    {
      question: "What is the duration of an Online M.Sc?",
      answer:
        "Two years across four semesters in most programmes. Some universities publish a maximum permissible duration that allows completion over a longer period.",
    },
    {
      question: "What is the eligibility for an Online M.Sc?",
      answer:
        "A bachelor's degree, usually a B.Sc in a related discipline, from a recognised institution. Minimum marks and any subject-background requirement are set by each university and can vary by specialisation.",
    },
    {
      question: "Can I do an Online M.Sc after B.Com or BCA?",
      answer:
        "Depends on the specialisation. Data Science and Computer Science variants at some universities accept BCA, B.Com or B.Tech graduates; Mathematics, Physics or Chemistry variants generally expect the equivalent subject at graduation. Confirm with the specific university.",
    },
    {
      question: "How much does an Online M.Sc cost?",
      answer:
        "Fees are set by each university and vary by specialisation, so the range is wide. The university comparison on this page shows the published figure for each programme in our dataset, and marks anything we could not verify as \"Not specified\".",
    },
    {
      question: "How are lab or practical components handled in an Online M.Sc?",
      answer:
        "Universities use virtual labs, simulation software, coding sandboxes, take-home kits or affiliated-centre practicals depending on the discipline. The extent and quality of this varies significantly — ask the university for specifics before enrolling in a lab-dependent specialisation.",
    },
    {
      question: "Which specialisation should I choose in an Online M.Sc?",
      answer:
        "Choose from the role or research path you want next, not from the trend. Data Science and Computer Science suit technology and analytics roles; Mathematics and Statistics suit research, teaching and quantitative careers; Biotechnology and Environmental Science suit life-sciences and sustainability paths.",
    },
    {
      question: "Is an Online M.Sc equivalent to a regular M.Sc?",
      answer:
        "The degree nomenclature is the same when the programme carries the applicable entitlement. The experience differs: campus programmes offer in-person laboratory access and structured placement cycles, while online programmes offer flexibility and continuity of employment.",
    },
    {
      question: "Can I pursue an Online M.Sc while working?",
      answer:
        "Yes — the format is built for it, with recorded lectures and scheduled assessments. Plan for consistent weekly study hours, since a genuine M.Sc curriculum expects quantitative and, in some disciplines, coding or practical rigour.",
    },
    {
      question: "Am I eligible for UGC-NET or JRF after an Online M.Sc?",
      answer:
        "Eligibility for UGC-NET, JRF and similar examinations depends on the subject and on the recognition status of the specific degree, not on the study mode alone. Verify the current eligibility notification and the university's recognition status before relying on this pathway.",
    },
    {
      question: "Can I pursue a PhD after an Online M.Sc?",
      answer:
        "Generally yes, subject to the admitting university's own recognition rules for the online M.Sc and its entrance requirements for doctoral admission. Check the specific institution's policy before applying.",
    },
    {
      question: "How does an Online M.Sc compare with an MCA?",
      answer:
        "An M.Sc in Computer Science or Data Science covers applied mathematics, statistics and computing theory alongside programming; an MCA is more concentrated on software development, systems and application engineering. Choose based on whether you want research-oriented depth or software-engineering breadth.",
    },
    {
      question: "How does an Online M.Sc compare with an Online MBA?",
      answer:
        "An M.Sc builds deep subject-matter expertise in a scientific or technical discipline; an MBA builds general management capability across finance, marketing and operations. Choose the M.Sc for technical or research roles, and the MBA for management-track roles.",
    },
    {
      question: "How are Online M.Sc examinations conducted?",
      answer:
        "Most universities use online, remotely proctored term-end examinations alongside internal assessment and, in technical specialisations, coding or lab-based evaluation. A few use designated centres. Confirm the mode with the university.",
    },
    {
      question: "Is a dissertation compulsory in an Online M.Sc?",
      answer:
        "Most programmes include a dissertation, research paper or capstone project in the final semester. The exact requirement, word count and evaluation method are set by each university.",
    },
    {
      question: "What jobs can I get after an Online M.Sc?",
      answer:
        "Common paths include data analyst, data scientist, machine learning engineer, software developer, research associate, statistician, environmental consultant and teaching roles. Outcomes depend on demonstrable technical skill and prior experience as well as the degree.",
    },
    {
      question: "What documents are required for admission to an Online M.Sc?",
      answer:
        "Graduation marksheets and certificate, identity proof, a photograph and a signature specimen at minimum, plus any specialisation-specific or university-specific documents listed on its admission page.",
    },
    {
      question: "Can I get an education loan for an Online M.Sc?",
      answer:
        "Loan and no-cost EMI options exist through university financing partners and lenders, but approval and eligibility are decided by the lender, not the university.",
    },
  ],
};

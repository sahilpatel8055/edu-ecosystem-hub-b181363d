/**
 * Data layer. Every page reads from these typed collections, so swapping in a
 * CMS / database later only means replacing the getters below.
 */

import { courseFamilyList } from "@/lib/courseFamily";
import { universityBlogArticles } from "@/data/university-blogs";
import { programmes as programmeRecords, specialisations as specialisationRecords } from "@/data";
import {
  academicSession,
  allUniversities,
  courseIndexByProgramme,
  feeRangeLabel,
  recognitionLabels,
} from "@/lib/universityData";

export interface University {
  slug: string;
  name: string;
  shortName: string;
  location: string;
  mode: "Online" | "Distance" | "Hybrid";
  approvals: string[];
  rating?: number;
  reviews?: number;
  feeRange: string;
  courses: number;
  summary: string;
  highlights: string[];
}

export interface Course {
  slug: string;
  name: string;
  /** Degree abbreviation, e.g. "MBA", "B.Com". */
  shortName: string;
  /** Short display label used on every card, e.g. "Online MBA". */
  displayName: string;
  level: "UG" | "PG" | "Diploma" | "Certificate";
  duration: string;
  feeRange: string;
  mode: string;
  universities: number;
  summary: string;
  specialisations: string[];
}

export interface Article {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  tags: string[];
  author: string;
  authorSlug: string;
  date: string;
  readingTime: string;
  kind: "blog" | "news" | "admission" | "career" | "scholarship";
  featured?: boolean;
  trending?: boolean;
  editorsPick?: boolean;
}

export interface Review {
  slug: string;
  entity: string;
  programme: string;
  rating: number;
  author: string;
  batch: string;
  summary: string;
  verified: boolean;
}

export interface Comparison {
  slug: string;
  title: string;
  left: string;
  right: string;
  category: string;
  summary: string;
}

export interface Scholarship {
  slug: string;
  name: string;
  provider: string;
  amount: string;
  deadline: string;
  eligibility: string;
  summary: string;
}

export interface CareerGuide {
  slug: string;
  title: string;
  field: string;
  salaryRange: string;
  summary: string;
  skills: string[];
}

export interface Author {
  slug: string;
  name: string;
  role: string;
  initials: string;
  bio: string;
  articles: number;
  expertise: string[];
}

export interface Taxonomy {
  slug: string;
  name: string;
  description: string;
  count: number;
}

export interface Tool {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: "Live" | "Beta" | "Coming soon";
}

/**
 * Universities and courses are derived from the master JSON dataset — the
 * single source of truth. Nothing about a university is authored here.
 */
export const universities: University[] = allUniversities().map((u) => ({
  slug: u.slug,
  name: u.university_name,
  shortName: u.short_name,
  location: u.basic_information.location ?? u.basic_information.state ?? "",
  mode: (u.mode === "Distance" || u.mode === "ODL" ? "Distance" : u.mode === "Both" ? "Hybrid" : "Online") as University["mode"],
  approvals: recognitionLabels(u),
  feeRange: feeRangeLabel(u.slug),
  courses: u.programmes.length,
  summary:
    u.notes[0] ??
    `${u.university_name} lists ${u.programmes.length} ${u.mode.toLowerCase()} programme${u.programmes.length === 1 ? "" : "s"} for the ${academicSession} session.`,
  highlights: recognitionLabels(u).slice(0, 3),
}));

/** Degrees whose "short name" is not a real abbreviation — keep the full name. */
const genericDegreeWords = new Set(["BACHELOR", "MASTER", "POST", "DIPLOMA", "B", "M", "ONLINE", ""]);

const normaliseDegree = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, "");

/** Best available abbreviation for a programme: "(MLISc)" > degree > name. */
function courseAbbrev(shortName: string, name: string): string {
  const paren = name.match(/\(([A-Za-z.&\s]{2,14})\)\s*$/);
  if (paren?.[1]) return paren[1].trim();
  const clean = (shortName ?? "").trim();
  if (clean && !genericDegreeWords.has(normaliseDegree(clean))) return clean;
  return name.replace(/^Online\s+/i, "").trim();
}

/** "MBA" -> "Online MBA"; falls back to the full programme name when needed. */
function courseDisplayName(shortName: string, name: string): string {
  const abbrev = courseAbbrev(shortName, name);
  return abbrev.length <= 14 ? `Online ${abbrev}` : name.replace(/^Online\s+/i, "Online ");
}

export const courses: Course[] = programmeRecords.map((p) => ({
  slug: p.slug,
  name: p.name,
  shortName: p.shortName,
  displayName: courseDisplayName(p.shortName, p.name),
  level: p.level,
  duration: p.durationYears ? `${p.durationYears} years` : "",
  feeRange: p.feeRangeLabel,
  mode: p.mode.join(" / "),
  universities: courseIndexByProgramme(p.slug).length,
  summary: p.summary,
  specialisations: specialisationRecords
    .filter((s) => s.programme === p.slug)
    .map((s) => s.name)
    .slice(0, 6),
}));

/** Editorial ordering: MBA, MCA, MCom, MA first for PG; BBA, BCA, BCom, BA for UG. */
const preferredOrder = ["MBA", "MCA", "MCOM", "MSC", "MA", "BBA", "BCA", "BCOM", "BA"];

/**
 * One card per online course pillar page. Cards always use the "Online X"
 * name and link to `/courses/online-x`, matching the page H1 and breadcrumb.
 * Individual university programmes are never surfaced as separate cards.
 */
export const courseFamilies: Course[] = courseFamilyList()
  .map((f) => ({
    slug: f.slug,
    name: f.name,
    shortName: f.shortName,
    displayName: f.name,
    level: f.level as Course["level"],
    duration: f.durationLabel,
    feeRange: f.feeRangeLabel,
    mode: "Online",
    universities: f.offers.length,
    summary: `${f.name} (${f.degreeName}) — ${f.durationLabel}, offered online by ${f.offers.length} UGC-entitled universit${f.offers.length === 1 ? "y" : "ies"} with ${f.specialisations.length} specialisations.`,
    specialisations: f.specialisations.slice(0, 6).map((s) => s.name),
  }))
  .sort(
    (a, b) =>
      preferredOrder.indexOf(normaliseDegree(a.shortName)) - preferredOrder.indexOf(normaliseDegree(b.shortName)) ||
      b.universities - a.universities,
  );



export const articles: Article[] = [
  {
    slug: "online-mba-fees-2026",
    title: "Online MBA fees in India 2026: full cost breakdown",
    excerpt:
      "Fee bands by university type, what the sticker price hides, and the legitimate ways to bring your total outgo down.",
    category: "Fees & Scholarships",
    categorySlug: "fees-scholarships",
    tags: ["mba", "fees", "online-degree"],
    author: "Arjun Mehta",
    authorSlug: "arjun-mehta",
    date: "2026-08-16",
    readingTime: "10 min",
    kind: "blog",
    featured: true,
  },
  {
    slug: "online-mba-specialisations-guide",
    title: "Online MBA specialisations: how to pick the right track",
    excerpt: "What actually changes between finance, marketing, HR, operations, IT and analytics tracks.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["mba", "specialisation", "career"],
    author: "Arjun Mehta",
    authorSlug: "arjun-mehta",
    date: "2026-08-16",
    readingTime: "9 min",
    kind: "blog",
    trending: true,
  },
  {
    slug: "online-mca-guide-2026",
    title: "Online MCA in 2026: eligibility, syllabus, fees and careers",
    excerpt: "A complete guide to the online MCA for working IT professionals and BCA graduates.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["mca", "online-degree", "it"],
    author: "Neha Verma",
    authorSlug: "neha-verma",
    date: "2026-08-16",
    readingTime: "11 min",
    kind: "blog",
    featured: true,
  },
  {
    slug: "online-mca-vs-mtech-vs-pgdca",
    title: "Online MCA vs M.Tech vs PGDCA: which one should you do?",
    excerpt: "Three very different credentials — here is which problem each one actually solves.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["mca", "comparison", "it"],
    author: "Neha Verma",
    authorSlug: "neha-verma",
    date: "2026-08-16",
    readingTime: "7 min",
    kind: "blog",
  },
  {
    slug: "online-bba-admission-guide",
    title: "Online BBA admission 2026: eligibility, steps and documents",
    excerpt: "The full admission path for an online BBA, from shortlisting universities to LMS access.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["bba", "admission", "online-degree"],
    author: "Ritika Sharma",
    authorSlug: "ritika-sharma",
    date: "2026-08-16",
    readingTime: "9 min",
    kind: "blog",
    editorsPick: true,
  },
  {
    slug: "online-bba-vs-bcom",
    title: "Online BBA vs online B.Com: which degree fits your goal?",
    excerpt: "Curriculum, career entry points and PG routes compared for the two most popular online UG degrees.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["bba", "bcom", "comparison"],
    author: "Ritika Sharma",
    authorSlug: "ritika-sharma",
    date: "2026-08-16",
    readingTime: "8 min",
    kind: "blog",
    trending: true,
  },
  {
    slug: "online-bca-career-guide",
    title: "Online BCA career guide 2026: roles, skills and next steps",
    excerpt: "What an online BCA opens up, and the portfolio habits that turn the degree into interviews.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["bca", "career", "it"],
    author: "Neha Verma",
    authorSlug: "neha-verma",
    date: "2026-08-16",
    readingTime: "9 min",
    kind: "blog",
  },
  {
    slug: "online-bcom-guide-2026",
    title: "Online B.Com in 2026: fees, syllabus and career paths",
    excerpt: "Why online B.Com works so well alongside CA, CS and CMA preparation — and what it costs.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["bcom", "fees", "online-degree"],
    author: "Arjun Mehta",
    authorSlug: "arjun-mehta",
    date: "2026-08-16",
    readingTime: "10 min",
    kind: "blog",
  },

  {
    slug: "ugc-entitled-vs-deb-approved",
    title: "UGC entitled vs DEB approved: what actually matters in 2026",
    excerpt:
      "A plain-language breakdown of the approvals that decide whether your online degree is valid for jobs and higher study.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["ugc", "approvals", "online-degree"],
    author: "Ritika Sharma",
    authorSlug: "ritika-sharma",
    date: "2026-07-28",
    readingTime: "8 min",
    kind: "blog",
    featured: true,
    editorsPick: true,
  },
  {
    slug: "online-mba-worth-it",
    title: "Is an online MBA worth it for working professionals?",
    excerpt: "We look at fee, ROI, employer perception and the profiles where an online MBA genuinely pays back.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["mba", "roi", "career"],
    author: "Arjun Mehta",
    authorSlug: "arjun-mehta",
    date: "2026-07-22",
    readingTime: "11 min",
    kind: "blog",
    featured: true,
    trending: true,
  },
  {
    slug: "du-sol-admission-process",
    title: "DU SOL admission process explained step by step",
    excerpt: "Documents, timelines, fee payment and the common mistakes that delay DU SOL enrolment.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["du-sol", "admission"],
    author: "Ritika Sharma",
    authorSlug: "ritika-sharma",
    date: "2026-07-18",
    readingTime: "9 min",
    kind: "admission",
    trending: true,
  },
  {
    slug: "online-degree-government-jobs",
    title: "Are online degrees accepted for government jobs?",
    excerpt: "What UGC notifications say about equivalence for UPSC, SSC, banking and state services.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["government-jobs", "validity"],
    author: "Neha Verma",
    authorSlug: "neha-verma",
    date: "2026-07-14",
    readingTime: "7 min",
    kind: "career",
    editorsPick: true,
  },
  {
    slug: "scholarships-online-learners",
    title: "Scholarships every online learner should apply for",
    excerpt: "Merit, need-based and defence-category scholarships that apply to online and distance programmes.",
    category: "Fees & Scholarships",
    categorySlug: "fees-scholarships",
    tags: ["scholarship", "fees"],
    author: "Neha Verma",
    authorSlug: "neha-verma",
    date: "2026-07-09",
    readingTime: "6 min",
    kind: "scholarship",
    trending: true,
  },
  {
    slug: "choosing-specialisation",
    title: "How to choose the right specialisation for your degree",
    excerpt: "A decision framework that maps your current role, target role and market demand to a specialisation.",
    category: "Study Guides",
    categorySlug: "study-guides",
    tags: ["specialisation", "planning"],
    author: "Arjun Mehta",
    authorSlug: "arjun-mehta",
    date: "2026-07-02",
    readingTime: "10 min",
    kind: "blog",
    featured: true,
  },
  ...universityBlogArticles,
];


export const news: Article[] = [
  {
    slug: "ugc-online-programme-list-update",
    title: "UGC updates the list of entitled online programmes for 2026-27",
    excerpt: "The regulator has refreshed institution-wise entitlement, adding new specialisations across 40+ universities.",
    category: "Regulatory",
    categorySlug: "regulatory",
    tags: ["ugc", "policy"],
    author: "Neha Verma",
    authorSlug: "neha-verma",
    date: "2026-08-04",
    readingTime: "4 min",
    kind: "news",
  },
  {
    slug: "july-session-deadline-extended",
    title: "July session admission deadline extended for several universities",
    excerpt: "Multiple online universities have moved their last date, giving applicants an extra fortnight.",
    category: "Admissions",
    categorySlug: "admissions",
    tags: ["deadline", "admission"],
    author: "Ritika Sharma",
    authorSlug: "ritika-sharma",
    date: "2026-08-01",
    readingTime: "3 min",
    kind: "news",
  },
  {
    slug: "new-analytics-specialisations",
    title: "Universities add AI and analytics specialisations to online MBA",
    excerpt: "Curriculum refreshes reflect hiring demand in analytics, product and applied AI roles.",
    category: "Programmes",
    categorySlug: "programmes",
    tags: ["mba", "ai"],
    author: "Arjun Mehta",
    authorSlug: "arjun-mehta",
    date: "2026-07-26",
    readingTime: "5 min",
    kind: "news",
  },
];

export const admissionUpdates = [
  { title: "LPU Online — July session closes", date: "15 Aug 2026", status: "Closing soon", href: "/admissions" },
  { title: "Amity Online — August cycle opens", date: "05 Aug 2026", status: "Open", href: "/admissions" },
  { title: "DU SOL — UG re-registration window", date: "22 Aug 2026", status: "Open", href: "/admissions" },
  { title: "Manipal Online — scholarship round 2", date: "30 Aug 2026", status: "Upcoming", href: "/admissions" },
];

export const reviews: Review[] = [
  {
    slug: "lpu-online",
    entity: "LPU Online",
    programme: "Online MBA — Business Analytics",
    rating: 4.5,
    author: "Sandeep K.",
    batch: "Batch of 2025",
    summary: "Recorded lectures were genuinely usable alongside a full-time job, and the placement cell responded fast.",
    verified: true,
  },
  {
    slug: "amity-online",
    entity: "Amity Online",
    programme: "Online MCA",
    rating: 4.3,
    author: "Priya R.",
    batch: "Batch of 2024",
    summary: "Strong curriculum and a smooth exam process. Fee is on the higher side but the brand helped in interviews.",
    verified: true,
  },
  {
    slug: "du-sol",
    entity: "DU SOL",
    programme: "B.Com (Hons)",
    rating: 4.0,
    author: "Aman T.",
    batch: "Batch of 2025",
    summary: "Unbeatable value for a DU degree. Self-study discipline matters more here than in online universities.",
    verified: true,
  },
  {
    slug: "manipal-online",
    entity: "Manipal Online",
    programme: "Online BCA",
    rating: 4.2,
    author: "Kritika S.",
    batch: "Batch of 2026",
    summary: "The digital campus is well built and mentors actually reply. Assignments are practical.",
    verified: false,
  },
];

export const comparisons: Comparison[] = [
  {
    slug: "lpu-online-vs-amity-online",
    title: "LPU Online vs Amity Online",
    left: "LPU Online",
    right: "Amity Online",
    category: "University",
    summary: "Fee, accreditation, placement support and learner experience compared side by side.",
  },
  {
    slug: "du-sol-vs-ignou",
    title: "DU SOL vs IGNOU",
    left: "DU SOL",
    right: "IGNOU",
    category: "University",
    summary: "Two of India's most affordable routes to a recognised degree — which suits which learner.",
  },
  {
    slug: "online-mba-vs-distance-mba",
    title: "Online MBA vs Distance MBA",
    left: "Online MBA",
    right: "Distance MBA",
    category: "Course",
    summary: "Delivery model, approvals, employer perception and total cost of ownership.",
  },
  {
    slug: "online-mca-vs-online-mba",
    title: "Online MCA vs Online MBA",
    left: "Online MCA",
    right: "Online MBA",
    category: "Course",
    summary: "Which postgraduate route fits a technical profile aiming for leadership roles.",
  },
];

export const scholarships: Scholarship[] = [
  {
    slug: "merit-excellence-grant",
    name: "Merit Excellence Grant",
    provider: "Participating online universities",
    amount: "Up to 30% fee waiver",
    deadline: "30 Sep 2026",
    eligibility: "60%+ in qualifying exam",
    summary: "Academic-merit waiver applied at the time of first semester fee payment.",
  },
  {
    slug: "defence-personnel-waiver",
    name: "Defence Personnel Waiver",
    provider: "Multiple universities",
    amount: "Up to 20% fee waiver",
    deadline: "Rolling",
    eligibility: "Serving/retired defence personnel & dependents",
    summary: "Category waiver available across most UGC-entitled online programmes.",
  },
  {
    slug: "women-in-tech-scholarship",
    name: "Women in Tech Scholarship",
    provider: "Selected universities",
    amount: "₹25,000 – ₹50,000",
    deadline: "15 Oct 2026",
    eligibility: "Women applicants to BCA/MCA/Analytics",
    summary: "Targeted support for women enrolling into computing and analytics programmes.",
  },
  {
    slug: "government-post-matric",
    name: "Government Post-Matric Scholarship",
    provider: "National Scholarship Portal",
    amount: "Varies by state",
    deadline: "31 Oct 2026",
    eligibility: "SC/ST/OBC category, income criteria",
    summary: "Central and state scholarships that also cover recognised distance and online programmes.",
  },
];

export const careerGuides: CareerGuide[] = [
  {
    slug: "after-online-mba",
    title: "Career paths after an online MBA",
    field: "Management",
    salaryRange: "₹6L – ₹18L",
    summary: "Role ladders, hiring signals and the switch strategies that work for online MBA graduates.",
    skills: ["Stakeholder management", "Financial modelling", "Analytics"],
  },
  {
    slug: "data-analyst-roadmap",
    title: "Data analyst roadmap for online learners",
    field: "Data & Analytics",
    salaryRange: "₹5L – ₹16L",
    summary: "A month-by-month plan combining coursework, tooling practice and portfolio projects.",
    skills: ["SQL", "Python", "Power BI", "Statistics"],
  },
  {
    slug: "government-jobs-validity",
    title: "Government jobs with an online degree",
    field: "Public Sector",
    salaryRange: "₹4L – ₹12L",
    summary: "Exam-wise eligibility notes and the documentation to keep ready for verification.",
    skills: ["Exam planning", "Documentation", "Aptitude"],
  },
];

export const authors: Author[] = [
  {
    slug: "ritika-sharma",
    name: "Ritika Sharma",
    role: "Admissions Editor",
    initials: "RS",
    bio: "Tracks admission cycles, regulatory notifications and university documentation requirements.",
    articles: 84,
    expertise: ["Admissions", "UGC policy", "Documentation"],
  },
  {
    slug: "arjun-mehta",
    name: "Arjun Mehta",
    role: "Career & Programmes Lead",
    initials: "AM",
    bio: "Writes on programme design, specialisation demand and career outcomes for working learners.",
    articles: 62,
    expertise: ["MBA", "Analytics", "Career strategy"],
  },
  {
    slug: "neha-verma",
    name: "Neha Verma",
    role: "Research Analyst",
    initials: "NV",
    bio: "Covers fee structures, scholarships and comparative analysis across Indian universities.",
    articles: 47,
    expertise: ["Fees", "Scholarships", "Rankings"],
  },
];

export const categories: Taxonomy[] = [
  { slug: "admission-guidance", name: "Admission Guidance", description: "Step-by-step help with applications, documents and deadlines.", count: 128 },
  { slug: "career-growth", name: "Career Growth", description: "Role transitions, salary benchmarks and hiring trends.", count: 96 },
  { slug: "fees-scholarships", name: "Fees & Scholarships", description: "Fee structures, EMI options and funding routes.", count: 74 },
  { slug: "study-guides", name: "Study Guides", description: "Learning plans, exam prep and study techniques.", count: 61 },
  { slug: "university-insights", name: "University Insights", description: "Deep dives into individual universities and programmes.", count: 143 },
  { slug: "regulatory", name: "Regulatory", description: "UGC, DEB and AICTE updates that affect learners.", count: 38 },
];

export const tags: Taxonomy[] = [
  { slug: "ugc", name: "UGC", description: "University Grants Commission entitlement and notices.", count: 52 },
  { slug: "mba", name: "MBA", description: "Everything about online and distance MBA.", count: 88 },
  { slug: "admission", name: "Admission", description: "Application cycles and enrolment.", count: 110 },
  { slug: "scholarship", name: "Scholarship", description: "Fee waivers and funding.", count: 43 },
  { slug: "du-sol", name: "DU SOL", description: "Delhi University School of Open Learning.", count: 36 },
  { slug: "career", name: "Career", description: "Jobs, salaries and progression.", count: 71 },
  { slug: "online-degree", name: "Online Degree", description: "Validity, delivery and outcomes.", count: 134 },
  { slug: "approvals", name: "Approvals", description: "NAAC, AICTE, DEB and entitlement.", count: 29 },
];

export const tools: Tool[] = [
  { slug: "fee-calculator", name: "Fee & EMI calculator", description: "Estimate total programme cost and monthly EMI across universities.", icon: "calculator", status: "Live" },
  { slug: "university-finder", name: "University finder", description: "Filter UGC-entitled universities by budget, mode and specialisation.", icon: "search", status: "Live" },
  { slug: "eligibility-checker", name: "Eligibility checker", description: "Check whether your academic profile qualifies for a programme.", icon: "check", status: "Beta" },
  { slug: "compare-builder", name: "Comparison builder", description: "Build a side-by-side comparison of any two universities.", icon: "columns", status: "Beta" },
  { slug: "roi-estimator", name: "Degree ROI estimator", description: "Model payback period from fee, salary and time-to-promotion.", icon: "trending", status: "Coming soon" },
  { slug: "deadline-tracker", name: "Deadline tracker", description: "Track admission windows for your shortlisted universities.", icon: "calendar", status: "Coming soon" },
];

export const rankings = [
  { rank: 1, name: "Amity Online", score: 92.4, category: "Online University", change: "+1" },
  { rank: 2, name: "LPU Online", score: 91.1, category: "Online University", change: "-1" },
  { rank: 3, name: "Manipal Online", score: 88.7, category: "Online University", change: "0" },
  { rank: 4, name: "Jain Online", score: 86.2, category: "Online University", change: "+2" },
  { rank: 5, name: "IGNOU", score: 85.5, category: "Open University", change: "0" },
  { rank: 6, name: "DU SOL", score: 83.9, category: "Open Learning", change: "+1" },
];

export const homeFaqs = [
  {
    question: "Is an online degree valid in India?",
    answer:
      "Yes. Degrees from UGC-entitled online programmes and DEB-approved distance programmes hold the same academic value as on-campus degrees for employment and higher education.",
  },
  {
    question: "How do I verify a university's approval status?",
    answer:
      "Check the university's entitlement letter on the UGC-DEB portal and confirm the specific programme is listed. Our university pages summarise approvals for every institution we cover.",
  },
  {
    question: "Which is better: online or distance learning?",
    answer:
      "Online programmes offer live and recorded classes with digital assessment, while distance programmes are self-study led and usually cheaper. Choose based on your budget and how much structure you need.",
  },
  {
    question: "Do you charge students for guidance?",
    answer:
      "No. Our editorial content and comparison tools are free. University admissions are handled through the AVEDU counselling ecosystem.",
  },
];

/* -------------------------------- getters -------------------------------- */

const bySlug = <T extends { slug: string }>(list: T[], slug: string) => list.find((i) => i.slug === slug);

export const getUniversity = (slug: string) => bySlug(universities, slug);
export const getCourse = (slug: string) => bySlug(courses, slug);
export const getArticle = (slug: string) => bySlug(articles, slug) ?? bySlug(news, slug);
export const getReview = (slug: string) => bySlug(reviews, slug);
export const getComparison = (slug: string) => bySlug(comparisons, slug);
export const getScholarship = (slug: string) => bySlug(scholarships, slug);
export const getCareerGuide = (slug: string) => bySlug(careerGuides, slug);
export const getAuthor = (slug: string) => bySlug(authors, slug);
export const getCategory = (slug: string) => bySlug(categories, slug);
export const getTag = (slug: string) => bySlug(tags, slug);
export const getNews = (slug: string) => bySlug(news, slug);

export const allArticles = [...articles, ...news];

export const articlesByAuthor = (slug: string) => allArticles.filter((a) => a.authorSlug === slug);
export const articlesByCategory = (slug: string) => allArticles.filter((a) => a.categorySlug === slug);
export const articlesByTag = (slug: string) => allArticles.filter((a) => a.tags.includes(slug));

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
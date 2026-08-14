/**
 * Course-family editorial guides (Online MBA, MCA, BBA, BCA, BCom).
 *
 * Written conservatively: fee bands are stated as published ranges across
 * UGC-entitled universities, never as a promise for a specific applicant.
 */
import type { PostContent } from "./posts";

const base = { reviewer: "Kartik Ahuja", reviewerRole: "Education Research Lead, AVEDU" };
const UPDATED = "2026-08-16";

const sources = [
  { label: "UGC Distance Education Bureau — recognised HEIs", href: "https://deb.ugc.gov.in/" },
  { label: "UGC ODL & Online Programmes Regulations, 2020", href: "https://www.ugc.gov.in/" },
];

export const courseGuidePosts: Record<string, PostContent> = {
  /* ------------------------------ Online MBA ------------------------------ */

  "online-mba-fees-2026": {
    ...base,
    updated: UPDATED,
    banner: "online-mba",
    intro:
      "Online MBA fees in India for the 2026-27 session sit roughly between ₹50,000 and ₹4,00,000 for the full two-year programme, depending on whether you pick a state open university, a private deemed university or a premium brand. What changes your real outgo is not the sticker price but the semester split, the EMI plan, the exam and re-registration charges, and the scholarship band you qualify for.",
    keyTakeaways: [
      "Total programme fee across UGC-entitled online MBAs typically ranges from about ₹50,000 to ₹4,00,000.",
      "Compare total programme fee, not per-semester fee — semester counts and inclusions differ.",
      "Most private universities publish a no-cost EMI option; open universities are cheaper but usually pay-per-year.",
      "Scholarship bands (merit, defence, women, alumni, corporate) commonly reduce 10-30% of the published fee.",
      "Always confirm the current fee on the university's own fee page before paying.",
    ],
    sections: [
      {
        heading: "What the fee actually covers",
        blocks: [
          {
            kind: "p",
            text: "A published online MBA fee normally covers tuition, the learning management system, recorded and live sessions, e-library access and standard examination attempts. Convocation, re-attempt exams, ID re-issue and optional certification add-ons are usually charged separately.",
          },
          {
            kind: "list",
            items: [
              "Tuition and academic delivery — always included.",
              "LMS, e-library and recorded lectures — almost always included.",
              "First-attempt examination fee — included in most private universities, extra in several open universities.",
              "Backlog or re-attempt exams, convocation and transcripts — nearly always extra.",
            ],
          },
        ],
      },
      {
        heading: "Fee bands across university types",
        blocks: [
          {
            kind: "chart",
            title: "Typical total programme fee band — Online MBA (2 years)",
            unit: "Indicative published ranges, INR",
            data: [
              { label: "State open universities", value: 80000, display: "₹50,000 – ₹80,000" },
              { label: "Mid-tier private universities", value: 175000, display: "₹1,20,000 – ₹1,75,000" },
              { label: "Established private brands", value: 280000, display: "₹1,75,000 – ₹2,80,000" },
              { label: "Premium / institute-of-eminence tier", value: 400000, display: "₹2,80,000 – ₹4,00,000" },
            ],
            note: "Bands are compiled from publicly listed fee pages and change every session. Verify before you pay.",
          },
          {
            kind: "table",
            caption: "How to read a fee page correctly",
            head: ["Line item", "What to check", "Common trap"],
            rows: [
              ["Semester fee", "Multiply by the number of semesters", "4 vs 6 semester structures look identical per semester"],
              ["Registration fee", "One-time or per-year", "Per-year registration quietly adds a year's cost"],
              ["Exam fee", "Included or per subject", "Per-subject exam fees scale with backlogs"],
              ["EMI plan", "Interest-free or bank interest", "'No cost EMI' may need a specific card"],
            ],
          },
        ],
      },
      {
        heading: "Reducing the fee legitimately",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Apply in the main intake window — early-bird concessions are usually largest there.",
              "Check merit bands based on your graduation percentage.",
              "Ask about defence, differently-abled, women-in-management and government-employee waivers.",
              "Check whether your employer has a corporate tie-up with the university.",
              "Pay in the largest instalment you can afford — full-payment discounts are common.",
            ],
          },
          {
            kind: "note",
            text: "A fee that looks far below the band for a well-known brand is a signal to re-verify the programme on the DEB portal before paying anything.",
          },
          {
            kind: "links",
            title: "Compare before you commit",
            items: [
              { label: "Online MBA pillar page", href: "/courses/online-mba" },
              { label: "Compare universities side by side", href: "/compare/universities" },
              { label: "Is an online MBA worth it?", href: "/blogs/online-mba-worth-it" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a cheaper online MBA less valuable?",
        answer:
          "Not automatically. Recognition comes from UGC entitlement and DEB listing, which state open universities also hold. Price differences mostly reflect brand, placement support and learning production quality.",
      },
      {
        question: "Can I pay an online MBA fee in EMIs?",
        answer:
          "Most private universities offer semester-wise payment plus a no-cost EMI route through partner lenders. Open universities usually expect year-wise payment upfront.",
      },
      {
        question: "Are there hidden charges?",
        answer:
          "Examination re-attempts, convocation, transcripts and duplicate documents are the usual extras. Ask for the complete schedule of charges in writing before enrolling.",
      },
    ],
    sources,
    related: [
      { label: "Online MBA specialisations explained", href: "/blogs/online-mba-specialisations-guide" },
      { label: "Scholarships for online learners", href: "/blogs/scholarships-online-learners" },
    ],
  },

  "online-mba-specialisations-guide": {
    ...base,
    updated: UPDATED,
    banner: "online-mba",
    intro:
      "Every online MBA sells the same core — accounting, marketing, operations, strategy — and then differentiates on the specialisation you pick in the second year. The specialisation decides your electives, your capstone and, in practice, the first job title recruiters map you to. Choosing it around the work you already do beats chasing whichever track sounds most futuristic.",
    keyTakeaways: [
      "Roughly 70% of an online MBA is a common core; the specialisation shapes the remaining electives.",
      "Finance, marketing, HR, operations, IT and business analytics are the tracks offered almost everywhere.",
      "Newer tracks (analytics, product, healthcare, fintech, logistics) vary sharply in depth between universities.",
      "Confirm the specialisation is listed on the DEB entry for your session, not just in the brochure.",
    ],
    sections: [
      {
        heading: "The tracks you will actually find",
        blocks: [
          {
            kind: "table",
            caption: "Common online MBA specialisations and who they suit",
            head: ["Specialisation", "Best suited to", "Typical first roles"],
            rows: [
              ["Finance", "Commerce graduates, banking and accounts staff", "Financial analyst, credit analyst, FP&A associate"],
              ["Marketing", "Sales, content, brand and agency professionals", "Brand executive, growth marketer, key account manager"],
              ["Human Resource Management", "Recruiters, HR generalists, admin leads", "HR business partner, talent acquisition lead"],
              ["Operations", "Manufacturing, supply chain, service delivery", "Operations manager, supply chain analyst"],
              ["Business Analytics", "Reporting, MIS, engineering backgrounds", "Business analyst, insights analyst"],
              ["Information Technology", "IT services, support and delivery staff", "IT project manager, delivery lead"],
            ],
          },
        ],
      },
      {
        heading: "How much the specialisation changes the syllabus",
        blocks: [
          {
            kind: "chart",
            title: "Typical credit split in a two-year online MBA",
            unit: "Share of total credits",
            data: [
              { label: "Core management subjects", value: 60, display: "≈60%" },
              { label: "Specialisation electives", value: 25, display: "≈25%" },
              { label: "Projects, capstone, viva", value: 10, display: "≈10%" },
              { label: "Open / general electives", value: 5, display: "≈5%" },
            ],
            note: "Exact credit distribution varies by university; check the programme structure PDF.",
          },
          {
            kind: "p",
            text: "Because the core dominates, switching specialisation between similar tracks after graduation is easier than most applicants fear. What is hard to fix later is a track your university teaches thinly — a two-elective 'analytics' badge does not read like an analytics degree to a hiring manager.",
          },
        ],
      },
      {
        heading: "A four-question test before you pick",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Does this track match a job title I can realistically hold within 18 months?",
              "How many electives does this university actually teach in it?",
              "Is the specialisation named on my final degree and marksheet?",
              "Is it listed for my session on the DEB portal?",
            ],
          },
          {
            kind: "note",
            text: "Ask the admission counsellor for the elective list in writing. If the specialisation cannot be evidenced in the programme structure document, treat it as marketing.",
          },
          {
            kind: "links",
            title: "Go deeper",
            items: [
              { label: "All Online MBA specialisations", href: "/courses/online-mba" },
              { label: "How to choose a specialisation", href: "/blogs/choosing-specialisation" },
              { label: "Career paths after an online MBA", href: "/career/after-online-mba" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does the specialisation appear on the degree certificate?",
        answer:
          "At most universities yes, printed as 'MBA (Finance)' or similar. A few print only 'MBA' and record the specialisation on the transcript — confirm before enrolling.",
      },
      {
        question: "Can I change specialisation mid-programme?",
        answer:
          "Usually only before the elective phase begins, and often with a fee. Policies differ, so ask for the change window in writing.",
      },
      {
        question: "Is dual specialisation worth it?",
        answer:
          "It helps if the two tracks are adjacent, such as finance and analytics. Two unrelated tracks dilute both and rarely improve shortlisting.",
      },
    ],
    sources,
    related: [
      { label: "Online MBA fees in 2026", href: "/blogs/online-mba-fees-2026" },
      { label: "Online MBA vs distance MBA", href: "/compare/online-mba-vs-distance-mba" },
    ],
  },

  /* ------------------------------ Online MCA ------------------------------ */

  "online-mca-guide-2026": {
    ...base,
    updated: UPDATED,
    banner: "online-mca",
    intro:
      "An online MCA is a two-year postgraduate computing degree delivered through a UGC-entitled online mode. It suits working IT professionals and BCA/B.Sc. IT graduates who need a recognised PG qualification for promotions, government eligibility or a shift from support into development, data or cloud roles.",
    keyTakeaways: [
      "Online MCA is a 2-year, 4-semester programme, open to graduates with mathematics or computing background at most universities.",
      "Published total fees generally sit between ₹60,000 and ₹2,50,000.",
      "The degree is equivalent to a regular MCA when the university and programme are UGC-entitled and DEB-listed.",
      "Practical value depends on how much project and lab work the university actually assesses.",
    ],
    sections: [
      {
        heading: "Eligibility and admission",
        blocks: [
          {
            kind: "list",
            items: [
              "A bachelor's degree of minimum three years, usually with 50% aggregate (45% for reserved categories at many universities).",
              "Mathematics at 10+2 or graduation level — required by many universities, waived by some through a bridge course.",
              "BCA, B.Sc. (CS/IT) and B.Tech graduates are typically direct-eligible.",
              "Admission is largely merit-based on graduation marks; national entrance tests are not usually required for online mode.",
            ],
          },
          {
            kind: "note",
            text: "If you lack mathematics, ask specifically whether the bridge course is mandatory, credited and chargeable.",
          },
        ],
      },
      {
        heading: "What you study",
        blocks: [
          {
            kind: "table",
            caption: "Representative online MCA structure",
            head: ["Semester", "Core focus", "Typical subjects"],
            rows: [
              ["I", "Foundations", "Programming, discrete mathematics, computer organisation, DBMS"],
              ["II", "Systems", "Data structures, operating systems, software engineering, networks"],
              ["III", "Applied computing", "Web technologies, cloud computing, machine learning basics, electives"],
              ["IV", "Specialisation & project", "Advanced elective track, major project and viva"],
            ],
          },
          {
            kind: "chart",
            title: "Where online MCA graduates typically head first",
            unit: "Relative frequency of first-role categories reported in university placement pages",
            data: [
              { label: "Software / application development", value: 35, display: "High" },
              { label: "Data and analytics roles", value: 25, display: "Growing" },
              { label: "Cloud, DevOps and infrastructure", value: 20, display: "Growing" },
              { label: "IT support to delivery-lead progression", value: 20, display: "Steady" },
            ],
            note: "Indicative distribution only — outcomes depend heavily on prior experience and portfolio.",
          },
        ],
      },
      {
        heading: "Is it worth it for you?",
        blocks: [
          {
            kind: "p",
            text: "An online MCA pays back fastest for people already inside IT who are blocked by a missing PG qualification, and for graduates targeting government or PSU roles where a recognised master's degree is an eligibility line. It pays back slowest for career-changers who expect the degree alone to substitute for a shipped project portfolio.",
          },
          {
            kind: "links",
            title: "Related reading",
            items: [
              { label: "Online MCA course page", href: "/courses/online-mca" },
              { label: "Online MCA vs online MBA", href: "/compare/online-mca-vs-online-mba" },
              { label: "Are online degrees valid for government jobs?", href: "/blogs/online-degree-government-jobs" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online MCA valid for government jobs?",
        answer:
          "Yes, when the university holds UGC entitlement and the programme is listed by the Distance Education Bureau for your admission session, under the 2020 equivalence notification.",
      },
      {
        question: "Do online MCA programmes include labs?",
        answer:
          "Practical work is delivered through virtual labs, assignments and a major project. Verify how labs are assessed before enrolling.",
      },
      {
        question: "Can a B.Com graduate do an online MCA?",
        answer:
          "Often yes, if mathematics was studied at 10+2 or graduation, or if the university offers a bridge course. Confirm with the specific university.",
      },
    ],
    sources,
    related: [
      { label: "Online BCA career guide", href: "/blogs/online-bca-career-guide" },
      { label: "Data analyst roadmap", href: "/career/data-analyst-roadmap" },
    ],
  },

  "online-mca-vs-mtech-vs-pgdca": {
    ...base,
    updated: UPDATED,
    banner: "online-mca",
    intro:
      "Online MCA, M.Tech and PGDCA solve three different problems. MCA is a full computing master's for graduates from any stream with a maths background, M.Tech is an engineering master's restricted to B.E./B.Tech holders and largely unavailable in online mode, and PGDCA is a one-year diploma that upgrades computer literacy rather than degree level.",
    keyTakeaways: [
      "M.Tech is not offered in UGC online mode — technical/engineering degrees are outside online entitlement.",
      "MCA is the practical online route to a PG computing degree for non-engineering graduates.",
      "PGDCA is a one-year diploma, not degree-equivalent, but is a fast eligibility bridge in some state jobs.",
      "For promotion eligibility, check whether your employer's policy says 'PG degree' or 'PG qualification'.",
    ],
    sections: [
      {
        heading: "Side-by-side",
        blocks: [
          {
            kind: "table",
            caption: "Comparing the three routes",
            head: ["Factor", "Online MCA", "M.Tech", "PGDCA"],
            rows: [
              ["Level", "Postgraduate degree", "Postgraduate degree", "Postgraduate diploma"],
              ["Duration", "2 years", "2 years", "1 year"],
              ["Online availability", "Widely available", "Not available in UGC online mode", "Available"],
              ["Who can apply", "Any graduate with maths/computing background", "B.E./B.Tech holders", "Any graduate"],
              ["Typical purpose", "PG degree for IT careers and eligibility", "Deep engineering specialisation", "Quick skills and eligibility bridge"],
            ],
          },
        ],
      },
      {
        heading: "Time and cost trade-off",
        blocks: [
          {
            kind: "chart",
            title: "Commitment comparison",
            unit: "Months of study",
            data: [
              { label: "PGDCA", value: 12, display: "12 months" },
              { label: "Online MCA", value: 24, display: "24 months" },
              { label: "M.Tech (regular)", value: 24, display: "24 months, on-campus" },
            ],
          },
          {
            kind: "p",
            text: "If the goal is a recognised master's degree while continuing to work, online MCA is the only one of the three that fits without leaving your job. PGDCA is the sensible choice only when you need a short, cheap credential quickly and do not need degree-level recognition.",
          },
          {
            kind: "note",
            text: "Some universities allow PGDCA credits to count towards an MCA. Ask about lateral entry before paying for a standalone diploma.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I do an online M.Tech?",
        answer:
          "No. Engineering and technology degrees are outside the scope of UGC online-mode entitlement, so any offer of an 'online M.Tech' from an Indian university needs very careful verification.",
      },
      {
        question: "Is PGDCA equal to MCA?",
        answer:
          "No. PGDCA is a one-year postgraduate diploma; MCA is a two-year master's degree. Only the degree satisfies eligibility conditions that specify a PG degree.",
      },
    ],
    sources,
    related: [
      { label: "Online MCA guide 2026", href: "/blogs/online-mca-guide-2026" },
      { label: "Compare universities", href: "/compare/universities" },
    ],
  },

  /* ------------------------------ Online BBA ------------------------------ */

  "online-bba-admission-guide": {
    ...base,
    updated: UPDATED,
    banner: "online-bba",
    intro:
      "An online BBA is a three-year undergraduate management degree that 10+2 pass-outs and working professionals can complete without attending campus. Admission is open to any stream at most universities, is merit-based on your 12th marks, and runs in two intakes — the January cycle and the July cycle.",
    keyTakeaways: [
      "Eligibility is 10+2 from a recognised board in any stream, commonly with 45-50% aggregate.",
      "Published total fees generally sit between ₹45,000 and ₹1,80,000 for three years.",
      "There are two admission cycles a year; documents and fee must be complete before the cut-off date.",
      "A UGC-entitled online BBA is accepted for PG admission, including MBA entrance routes.",
    ],
    sections: [
      {
        heading: "Step-by-step admission",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Shortlist two or three DEB-listed universities and compare total fee and specialisation lists.",
              "Register on the university's online admission portal with a working email and mobile number.",
              "Upload 10th and 12th marksheets, photo, signature and photo ID.",
              "Pay the application fee, then the first semester or year instalment.",
              "Complete document verification and collect your enrolment number and LMS credentials.",
            ],
          },
          {
            kind: "table",
            caption: "Documents checklist",
            head: ["Document", "Why it is needed"],
            rows: [
              ["10th marksheet", "Date of birth proof"],
              ["12th marksheet and certificate", "Eligibility proof"],
              ["Photo ID (Aadhaar / passport)", "Identity verification"],
              ["Passport photograph and signature", "Enrolment record and ID card"],
              ["Category or defence certificate", "Fee concession, if applicable"],
            ],
          },
        ],
      },
      {
        heading: "Choosing between universities",
        blocks: [
          {
            kind: "chart",
            title: "What matters most when comparing online BBA options",
            unit: "Weight we recommend applying",
            data: [
              { label: "UGC entitlement and DEB listing", value: 35, display: "Non-negotiable" },
              { label: "Total fee and payment flexibility", value: 25, display: "High" },
              { label: "Specialisation depth", value: 20, display: "High" },
              { label: "Placement and internship support", value: 12, display: "Medium" },
              { label: "Brand recall with employers", value: 8, display: "Medium" },
            ],
          },
          {
            kind: "note",
            text: "An unapproved programme cannot be fixed later by good marks. Verify the university and programme on the DEB portal for your session before paying.",
          },
          {
            kind: "links",
            title: "Useful next steps",
            items: [
              { label: "Online BBA course page", href: "/courses/online-bba" },
              { label: "Compare universities", href: "/compare/universities" },
              { label: "UGC entitled vs DEB approved", href: "/blogs/ugc-entitled-vs-deb-approved" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can a science or arts student take an online BBA?",
        answer: "Yes. Most universities accept 10+2 in any stream; commerce is not a requirement.",
      },
      {
        question: "Is an online BBA accepted for MBA admission?",
        answer:
          "Yes, when the BBA is from a UGC-entitled university and DEB-listed for your session. It is treated as equivalent to a regular BBA.",
      },
      {
        question: "How long does admission take?",
        answer:
          "Typically three to ten working days from application to LMS access, provided documents are complete and the fee is paid.",
      },
    ],
    sources,
    related: [
      { label: "Online BBA vs online BCom", href: "/blogs/online-bba-vs-bcom" },
      { label: "Scholarships for online learners", href: "/blogs/scholarships-online-learners" },
    ],
  },

  "online-bba-vs-bcom": {
    ...base,
    updated: UPDATED,
    banner: "online-bba",
    intro:
      "BBA and B.Com both take three years online and both feed into an MBA, but they train different instincts. BBA is a management degree built around people, marketing and operations decisions; B.Com is an accounting and finance degree built around numbers, tax and compliance. Pick by the work you want in year one after graduation, not by prestige.",
    keyTakeaways: [
      "BBA leans management and generalist business; B.Com leans accounting, taxation and finance.",
      "B.Com is the stronger base for CA, CS, CMA and accounting roles.",
      "BBA is the stronger base for sales, marketing, HR and operations entry roles.",
      "Both are equally valid for MBA admission when UGC-entitled and DEB-listed.",
    ],
    sections: [
      {
        heading: "Curriculum difference in one table",
        blocks: [
          {
            kind: "table",
            caption: "Online BBA vs online B.Com",
            head: ["Factor", "Online BBA", "Online B.Com"],
            rows: [
              ["Core subjects", "Management, marketing, HR, operations, strategy", "Financial accounting, cost accounting, taxation, audit, business law"],
              ["Maths intensity", "Moderate — business statistics", "Higher — accounting and quantitative subjects throughout"],
              ["Best professional add-on", "Digital marketing, analytics certifications", "CA / CS / CMA / GST practitioner"],
              ["Typical first roles", "Sales executive, HR associate, operations trainee", "Accounts executive, audit assistant, tax associate"],
              ["Natural PG route", "MBA", "M.Com, MBA (Finance), professional qualifications"],
            ],
          },
        ],
      },
      {
        heading: "Which one fits your profile",
        blocks: [
          {
            kind: "chart",
            title: "Fit score by goal",
            unit: "Higher bar = stronger fit",
            data: [
              { label: "Goal: accounting / CA-CS-CMA", value: 90, display: "B.Com" },
              { label: "Goal: sales, marketing, HR", value: 85, display: "BBA" },
              { label: "Goal: family business management", value: 80, display: "BBA" },
              { label: "Goal: banking and finance operations", value: 75, display: "B.Com" },
              { label: "Goal: MBA after graduation", value: 70, display: "Either" },
            ],
          },
          {
            kind: "p",
            text: "If you are already working in an accounts or billing role, B.Com compounds with your job. If you are in a customer-facing or coordination role, BBA compounds with yours. That compounding matters more than the two-letter difference on the certificate.",
          },
          {
            kind: "links",
            title: "Explore both",
            items: [
              { label: "Online BBA", href: "/courses/online-bba" },
              { label: "Online BCom", href: "/courses/online-bcom" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Which has higher salary potential?",
        answer:
          "Neither degree sets the salary on its own. Early salaries track the role and city; the degree determines which roles you are shortlisted for.",
      },
      {
        question: "Can I do CA with a BBA?",
        answer:
          "Yes, CA eligibility is not restricted to B.Com, but B.Com's accounting core overlaps far more with the CA syllabus and reduces duplicate study.",
      },
    ],
    sources,
    related: [
      { label: "Online BBA admission guide", href: "/blogs/online-bba-admission-guide" },
      { label: "Online BCom guide 2026", href: "/blogs/online-bcom-guide-2026" },
    ],
  },

  /* ------------------------------ Online BCA ------------------------------ */

  "online-bca-career-guide": {
    ...base,
    updated: UPDATED,
    banner: "online-bca",
    intro:
      "An online BCA is a three-year undergraduate computing degree for 10+2 pass-outs who want a software career without a four-year engineering commitment. Its value is real but conditional: the degree opens eligibility, while a portfolio of built projects decides which interviews you actually reach.",
    keyTakeaways: [
      "Eligibility is 10+2 in any stream at most universities; mathematics is required by some.",
      "Published total fees generally sit between ₹45,000 and ₹1,60,000 for three years.",
      "Common first roles: junior developer, QA engineer, support engineer, data associate.",
      "Pair each semester with one shipped project — that is what converts the degree into interviews.",
    ],
    sections: [
      {
        heading: "The three-year arc",
        blocks: [
          {
            kind: "table",
            caption: "What a well-designed online BCA covers",
            head: ["Year", "Focus", "What you should be able to build by the end"],
            rows: [
              ["1", "Programming fundamentals, maths, computer organisation", "Console applications and small scripts"],
              ["2", "Data structures, DBMS, web technologies, OS", "A database-backed web application"],
              ["3", "Software engineering, cloud, electives, major project", "A deployed full-stack project with version control"],
            ],
          },
          {
            kind: "chart",
            title: "Where online BCA graduates commonly start",
            unit: "Relative frequency of entry roles",
            data: [
              { label: "Software / web development", value: 30, display: "Common" },
              { label: "Quality assurance and testing", value: 25, display: "Common" },
              { label: "Technical support and IT operations", value: 25, display: "Common" },
              { label: "Data / reporting associate", value: 20, display: "Growing" },
            ],
            note: "Directional summary of entry-level role categories; individual outcomes vary widely.",
          },
        ],
      },
      {
        heading: "Making the degree employable",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Keep a public code repository from semester one.",
              "Turn every major assignment into a deployed, linkable project.",
              "Add one job-relevant certification per year alongside the syllabus.",
              "Do at least one internship or freelance engagement before final year.",
              "Plan your PG route — MCA or a master's in data — before the last semester.",
            ],
          },
          {
            kind: "note",
            text: "Employers rarely ask whether a BCA was online or on-campus. They do ask what you have built and whether the university is recognised.",
          },
          {
            kind: "links",
            title: "Plan the next step",
            items: [
              { label: "Online BCA course page", href: "/courses/online-bca" },
              { label: "Online MCA guide 2026", href: "/blogs/online-mca-guide-2026" },
              { label: "Data analyst roadmap", href: "/career/data-analyst-roadmap" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Do IT companies hire online BCA graduates?",
        answer:
          "Yes, where the university is UGC-entitled and DEB-listed. Screening is driven by skills tests and projects, so build a portfolio alongside the degree.",
      },
      {
        question: "Is mathematics compulsory for online BCA?",
        answer:
          "It depends on the university. Several accept any 10+2 stream, others require mathematics or offer a bridge course.",
      },
      {
        question: "BCA or B.Sc. IT?",
        answer:
          "The two overlap heavily. BCA is typically more application and software-development oriented; B.Sc. IT is often more systems and science oriented.",
      },
    ],
    sources,
    related: [
      { label: "Online MCA vs M.Tech vs PGDCA", href: "/blogs/online-mca-vs-mtech-vs-pgdca" },
      { label: "Compare universities", href: "/compare/universities" },
    ],
  },

  /* ----------------------------- Online BCom ------------------------------ */

  "online-bcom-guide-2026": {
    ...base,
    updated: UPDATED,
    banner: "online-bcom",
    intro:
      "An online B.Com is a three-year commerce degree that works particularly well for people already in accounts, billing, banking or family business, and for CA/CS/CMA aspirants who need a degree running in parallel with their professional exams. It is one of the cheapest recognised degrees available online in India.",
    keyTakeaways: [
      "Eligibility is 10+2 in any stream at most universities, though commerce background eases the syllabus.",
      "Published total fees generally sit between ₹30,000 and ₹1,50,000 for three years.",
      "It pairs unusually well with CA, CS and CMA preparation because of syllabus overlap.",
      "Specialisation tracks — accounting and finance, taxation, banking, international business — differ by university.",
    ],
    sections: [
      {
        heading: "Programme structure",
        blocks: [
          {
            kind: "table",
            caption: "Typical online B.Com structure",
            head: ["Year", "Core subjects", "Practical outcome"],
            rows: [
              ["1", "Financial accounting, business organisation, business economics", "Read and prepare basic financial statements"],
              ["2", "Corporate accounting, cost accounting, business law, taxation", "Handle cost sheets, GST basics and statutory concepts"],
              ["3", "Auditing, management accounting, specialisation electives, project", "Interpret accounts for decisions and audit readiness"],
            ],
          },
          {
            kind: "chart",
            title: "Typical published total fee band — Online B.Com (3 years)",
            unit: "Indicative published ranges, INR",
            data: [
              { label: "State open universities", value: 45000, display: "₹30,000 – ₹45,000" },
              { label: "Mid-tier private universities", value: 95000, display: "₹60,000 – ₹95,000" },
              { label: "Established private brands", value: 150000, display: "₹95,000 – ₹1,50,000" },
            ],
            note: "Verify the current session fee on the university's own fee page before paying.",
          },
        ],
      },
      {
        heading: "Careers and next qualifications",
        blocks: [
          {
            kind: "list",
            items: [
              "Accounts executive, accounts payable/receivable associate, billing executive.",
              "Tax and GST assistant, audit assistant in practice firms.",
              "Banking operations, loan processing and back-office roles.",
              "Higher study: M.Com, MBA (Finance), CA / CS / CMA, or a PG diploma in banking.",
            ],
          },
          {
            kind: "note",
            text: "If your target is a professional qualification, sequence it deliberately: start the professional foundation early and treat the B.Com semesters as reinforcement rather than a separate workload.",
          },
          {
            kind: "links",
            title: "Related pages",
            items: [
              { label: "Online BCom course page", href: "/courses/online-bcom" },
              { label: "Online BBA vs online BCom", href: "/blogs/online-bba-vs-bcom" },
              { label: "Compare universities", href: "/compare/universities" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online B.Com valid for M.Com and MBA admission?",
        answer:
          "Yes, when the university is UGC-entitled and the programme is DEB-listed for your admission session.",
      },
      {
        question: "Can I do an online B.Com with a job?",
        answer:
          "Yes. Sessions are recorded, assessments are largely assignment and online-exam based, and examination windows are published in advance.",
      },
      {
        question: "Which specialisation should I pick?",
        answer:
          "Accounting and finance is the safest default. Choose taxation or banking only if you already work in, or are targeting, that function.",
      },
    ],
    sources,
    related: [
      { label: "Online BBA admission guide", href: "/blogs/online-bba-admission-guide" },
      { label: "Online MBA fees in 2026", href: "/blogs/online-mba-fees-2026" },
    ],
  },
};

import type { PostContent } from "@/data/posts";
import type { Article } from "@/lib/content";

const base = { reviewer: "Kartik Ahuja", reviewerRole: "Education Research Lead, AVEDU" };
const UPDATED = "2026-08-14";

export const shooliniOnlineArticles: Article[] = [
  {
    slug: "shoolini-online-courses-fees-2026-27",
    title: "Shoolini University Online: Courses & Fees 2026-27 Guide",
    excerpt:
      "Complete guide to Shoolini University Online MBA, MCA, BBA and BCom fees, specialisations and scholarships for 2026-27.",
    category: "Fees & Scholarships",
    categorySlug: "fees-scholarships",
    tags: ["shoolini-university-online", "online-mba-fees", "online-mca-fees", "online-degree-fees"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "15 min",
    kind: "blog",
  },
  {
    slug: "shoolini-online-admission-process-eligibility",
    title: "Shoolini University Online Admission Process & Eligibility",
    excerpt:
      "Step-by-step Shoolini University Online admission process, eligibility criteria and documents for MBA, MCA, BBA and BCom 2026.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["shoolini-university-online", "admission-process", "online-degree-eligibility"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "13 min",
    kind: "blog",
  },
  {
    slug: "shoolini-online-placements-pay-after-placement",
    title: "Shoolini Online Placements: Pay After Placement Explained",
    excerpt:
      "How Shoolini University Online's pay-after-placement model, hiring partners and average salaries work for MBA, MCA and BBA graduates.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["shoolini-university-online", "pay-after-placement", "online-mba-placements"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "14 min",
    kind: "blog",
  },
  {
    slug: "is-shoolini-university-online-worth-it",
    title: "Is Shoolini University Online Worth It in 2026?",
    excerpt:
      "An honest review of Shoolini University Online's degree value, scholarships and how it compares with other UGC-entitled online universities.",
    category: "Study Guides",
    categorySlug: "study-guides",
    tags: ["shoolini-university-online", "online-degree-review", "university-comparison"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "13 min",
    kind: "blog",
  },
];

export const shooliniOnlinePosts: Record<string, PostContent> = {
  /* ============================ POST 1: Courses & Fees ============================ */
  "shoolini-online-courses-fees-2026-27": {
    ...base,
    updated: UPDATED,
    intro:
      "Shoolini University Online offers UGC-DEB entitled online MBA, MCA, BBA and BCom degrees, with total programme fees typically between INR 1,00,000 and INR 2,00,000 depending on the course and payment route. This guide breaks down the 2026-27 fee structure, semester-wise cost, specialisations and scholarship options for every major Shoolini Online programme so you can budget accurately before you apply.",
    keyTakeaways: [
      "Shoolini Online MBA total fee is INR 2,00,000 (standard), with a limited-period offer at INR 1,60,000 or a pay-after-placement route where 80 percent is paid upfront and 20 percent after you secure a job.",
      "Online MCA semester fee is INR 20,500 with an INR 500 application fee; international fees are quoted separately in USD.",
      "Online BBA fee is INR 1,00,000 (standard) or INR 1,20,000 under the pay-after-placement option, spread across six semesters.",
      "Online BCom fee is INR 1,20,000 before scholarship, reducing to about INR 90,000 after the standard INR 30,000 scholarship.",
      "A 10 percent discount applies on lumpsum payment and 5 percent on annual payment across most programmes, along with no-interest EMI options.",
      "MBA specialisations span Marketing, Finance, HR and Data Science; MCA specialisations cover AI, Cloud Computing, DevOps and Full Stack Development.",
    ],
    sections: [
      {
        heading: "Shoolini University Online at a glance",
        blocks: [
          {
            kind: "p",
            text: "Shoolini University was established in 2009 in Himachal Pradesh and has grown into a research-focused, NAAC A+ accredited private university. Its online degrees are UGC-entitled and DEB-listed, which is the first thing every applicant should verify before paying any fee.",
          },
          {
            kind: "table",
            caption: "Shoolini University Online snapshot",
            head: ["Parameter", "Detail"],
            rows: [
              ["Founded", "2009, Himachal Pradesh"],
              ["Accreditation", "NAAC A+"],
              ["NIRF rank", "Around 70-73 in the university category (varies by year)"],
              ["Approval", "UGC-entitled, DEB-listed for online programmes"],
            ],
          },
          {
            kind: "note",
            text: "Confirm the current session's DEB listing for your exact programme on the official UGC portal before paying any fee.",
          },
        ],
      },
      {
        heading: "Online MBA fees and specialisations",
        blocks: [
          {
            kind: "p",
            text: "The Shoolini Online MBA, marketed as the Power Programme, is available in a standard format or with a pay-after-placement option that shifts part of the financial risk from you to the university.",
          },
          {
            kind: "table",
            caption: "Online MBA fee — pay-after-placement route",
            head: ["Particulars", "Amount"],
            rows: [
              ["Total fee", "INR 2,00,000"],
              ["Semester fee", "INR 30,000"],
              ["Scholarship amount", "INR 50,000"],
              ["Payable before placement", "INR 1,20,000"],
            ],
          },
          {
            kind: "table",
            caption: "Online MBA fee — standard route",
            head: ["Particulars", "Amount"],
            rows: [
              ["Total fee", "INR 2,00,000"],
              ["Semester fee", "INR 32,500"],
              ["Scholarship amount", "INR 70,000"],
              ["Fee after scholarship", "INR 1,30,000"],
            ],
          },
          {
            kind: "p",
            text: "A separate limited-period offer lists the MBA at INR 1,60,000 total with a special semester fee of INR 40,000. A 10 percent discount applies on lumpsum payment and a 5 percent discount on annual payment. MBA specialisations include Marketing Management, Human Resource Management, Financial Management, Digital Marketing, Retail Management, Operations Management, Banking & Insurance, Logistics & Supply Chain Management, Data Science & Business Analytics, Agri-Business Management and Pharma & Healthcare Management, among others.",
          },
        ],
      },
      {
        heading: "Online MCA fees and specialisations",
        blocks: [
          {
            kind: "table",
            caption: "Online MCA fee structure",
            head: ["Category", "Semester fee", "Application fee"],
            rows: [
              ["Indian students", "INR 20,500", "INR 500"],
              ["International students", "USD 300", "USD 50"],
              ["SAARC students", "USD 200", "USD 50"],
            ],
          },
          {
            kind: "p",
            text: "The two-year MCA covers programming, data structures, databases and web technologies in the first year and lets students choose a specialisation from semester three — Artificial Intelligence, Cloud Computing, DevOps, Data Science or Full Stack Development — alongside a final-semester project.",
          },
          {
            kind: "note",
            text: "Students without a Mathematics background at the +2 or bachelor's level must complete a compulsory bridge course before starting the MCA.",
          },
        ],
      },
      {
        heading: "Online BBA fees and eligibility",
        blocks: [
          {
            kind: "cta",
            title: "Get a personalised Shoolini Online fee estimate",
            body: "Tell us your programme of interest and we will map the exact fee, scholarship and EMI plan that applies to you.",
            buttonLabel: "Get my fee breakdown",
          },
          {
            kind: "table",
            caption: "Online BBA fee — pay-after-placement vs standard",
            head: ["Particulars", "Pay after placement", "Standard"],
            rows: [
              ["Regular fee", "INR 1,20,000", "INR 1,00,000"],
              ["Per semester", "INR 10,500", "INR 12,500"],
              ["Payable before placement", "INR 63,000", "NA"],
              ["Payable after placement", "INR 27,000", "NA"],
            ],
          },
          {
            kind: "p",
            text: "The three-year BBA requires only 10+2 in any discipline with at least 40 percent marks (60 percent for international students). A 25 percent scholarship on tuition fee is available for deserving students, along with the standard lumpsum and annual payment discounts.",
          },
        ],
      },
      {
        heading: "Online BCom fees and structure",
        blocks: [
          {
            kind: "table",
            caption: "Online BCom fee structure (Indian students)",
            head: ["Particulars", "Amount"],
            rows: [
              ["Application fee", "INR 500"],
              ["Regular fee (total)", "INR 1,20,000"],
              ["Scholarship amount", "INR 30,000"],
              ["Fee after scholarship", "INR 90,000"],
            ],
          },
          {
            kind: "p",
            text: "The six-semester BCom fee works out to roughly INR 15,000 per semester after scholarship. A merit scholarship of 10 percent is available for students scoring 90 percent or above in Class 12 (for UG entry) or in their UG degree (for PG entry).",
          },
        ],
      },
      {
        heading: "Fee comparison across Shoolini Online programmes",
        blocks: [
          {
            kind: "chart",
            title: "Indicative total programme fee after standard scholarship (INR)",
            unit: "INR",
            data: [
              { label: "BCom (3 yrs)", value: 90000, display: "INR 90,000" },
              { label: "BBA (3 yrs)", value: 100000, display: "INR 1,00,000" },
              { label: "MCA (2 yrs)", value: 164000, display: "~INR 1,64,000" },
              { label: "MBA (2 yrs)", value: 130000, display: "INR 1,30,000" },
            ],
            note: "Figures are indicative totals based on published semester fees; confirm current-session fees on the official Shoolini Online page.",
          },
          {
            kind: "promo",
            title: "Compare Shoolini Online fees with other universities",
            body: "See how Shoolini's MBA, MCA and BBA fees stack up against other UGC-entitled online universities before you commit.",
            ctaLabel: "Compare universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "Payment options and EMI",
        blocks: [
          {
            kind: "list",
            items: [
              "10 percent discount on the total fee if paid in one lumpsum.",
              "5 percent discount on the total fee if paid annually.",
              "No-interest EMI and education loan options are available, typically on the full programme fee.",
              "Semester-wise payment is the default and lowest-commitment option for most students.",
            ],
          },
        ],
      },
      {
        heading: "How the pay-after-placement option changes your fee",
        blocks: [
          {
            kind: "p",
            text: "Under pay-after-placement, you pay a smaller amount upfront — around 80 percent of the fee after scholarship — and the remaining roughly 20 percent only after you accept a job through the university's placement process. This is currently offered on the MBA and BBA programmes.",
          },
          {
            kind: "note",
            text: "Eligibility conditions apply, including a minimum salary threshold and a cap on the number of job offers you can decline. See our detailed placement guide for the full terms.",
          },
          {
            kind: "links",
            title: "Related reading",
            items: [
              { label: "Shoolini Online admission process and eligibility", href: "/blogs/shoolini-online-admission-process-eligibility" },
              { label: "How pay-after-placement works at Shoolini", href: "/blogs/shoolini-online-placements-pay-after-placement" },
              { label: "Online MBA fees and specialisations", href: "/courses/online-mba" },
            ],
          },
        ],
      },
      {
        heading: "Documents and charges beyond tuition",
        blocks: [
          {
            kind: "list",
            items: [
              "Application fee of INR 500 is charged separately and is non-refundable across programmes.",
              "Keep scanned copies of marksheets, ID proof, migration certificate, photograph and signature ready before applying.",
              "Exam and convocation charges, where applicable, are published separately by the university and are not part of the semester fee.",
            ],
          },
          {
            kind: "promo",
            title: "Explore the Shoolini Online programme pages",
            body: "See detailed curriculum, faculty and outcomes for each Shoolini Online degree on AVEDU.",
            ctaLabel: "View Shoolini University Online",
            href: "/universities/shoolini-online",
          },
        ],
      },
      {
        heading: "Is the fee worth it",
        blocks: [
          {
            kind: "p",
            text: "Shoolini Online sits at the affordable end of UGC-entitled online degrees, and the pay-after-placement model is a genuine differentiator for risk-averse students. Whether it is worth it for you depends on your career stage and target role — our dedicated worth-it guide walks through that decision in detail.",
          },
          {
            kind: "cta",
            title: "Talk to an AVEDU counsellor before you pay",
            body: "Share your target programme and budget and we will verify the current fee, scholarship and EMI terms for you.",
            buttonLabel: "Talk to a counsellor",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the total fee for Shoolini Online MBA in 2026-27?",
        answer:
          "The standard Shoolini Online MBA fee is INR 2,00,000, reducing to INR 1,30,000 after the standard scholarship. A limited-period offer brings the total to INR 1,60,000, and a pay-after-placement route lets you pay roughly 80 percent upfront and the remaining 20 percent after you secure a job.",
      },
      {
        question: "How much does the Shoolini Online MCA cost?",
        answer:
          "The MCA semester fee for Indian students is INR 20,500 plus an INR 500 application fee, working out to roughly INR 1,64,000 across four semesters. International students pay USD 300 per semester and SAARC students pay USD 200 per semester.",
      },
      {
        question: "Is there a scholarship on the Shoolini Online BBA?",
        answer:
          "Yes. Deserving students can get up to 25 percent scholarship on the tuition fee, in addition to the 10 percent lumpsum and 5 percent annual-payment discounts available across programmes.",
      },
      {
        question: "What is the Shoolini Online BCom fee after scholarship?",
        answer:
          "The BCom total fee is INR 1,20,000, reducing to about INR 90,000 after the standard INR 30,000 scholarship, paid as roughly INR 15,000 per semester across six semesters.",
      },
      {
        question: "Are EMI options available for Shoolini Online programmes?",
        answer:
          "Yes, no-interest EMI and education loan options are available on the full programme fee for most Shoolini Online degrees, in addition to semester-wise and annual payment plans.",
      },
      {
        question: "Does the fee include exam and convocation charges?",
        answer:
          "No. Exam and convocation charges are typically published separately by the university and are not bundled into the semester tuition fee.",
      },
      {
        question: "Is the application fee refundable?",
        answer:
          "No, the application fee of INR 500 charged across Shoolini Online programmes is non-refundable.",
      },
      {
        question: "Which Shoolini Online programme is the cheapest?",
        answer:
          "Among the flagship programmes, the online BCom and BBA are the most affordable, with total fees after scholarship in the range of INR 90,000 to INR 1,00,000 over three years.",
      },
    ],
    sources: [
      { label: "UGC DEB online education portal", href: "https://deb.ugc.ac.in/" },
      { label: "Shoolini University official website", href: "https://shooliniuniversity.com/" },
    ],
    related: [
      { label: "Shoolini Online admission process", href: "/universities/shoolini-online/admission" },
      { label: "Shoolini Online scholarships", href: "/universities/shoolini-online/scholarships" },
    ],
    cta: "Want the exact fee for your chosen Shoolini Online programme and intake? Share your details and we will confirm it against the official fee page.",
  },

  /* ============================ POST 2: Admission Process ============================ */
  "shoolini-online-admission-process-eligibility": {
    ...base,
    updated: UPDATED,
    intro:
      "Shoolini University Online admission runs entirely on the official website: register, fill the application form, upload documents, pay the application fee and pay the tuition fee once your candidature is confirmed. Eligibility is modest across programmes — a bachelor's degree with 50 percent marks for the MBA and MCA, and 10+2 with 40 percent marks for the BBA and BCom — with relaxations for reserved categories. This guide walks through the exact steps, documents and eligibility criteria for every major Shoolini Online programme.",
    keyTakeaways: [
      "Admission is fully online: register, fill the form, upload documents, pay the application fee, then pay tuition after confirmation.",
      "MBA and MCA require a bachelor's degree with at least 50 percent marks (45 percent for reserved categories, 5 percent relaxation for SC/ST/OBC).",
      "BBA and BCom require 10+2 in any discipline with at least 40 percent marks.",
      "International students generally need 60 percent aggregate marks in the qualifying examination.",
      "The application fee is INR 500 across programmes and is paid online at the time of form submission.",
      "There is no entrance test for these UG and PG programmes; admission is on the basis of eligibility, not merit rank.",
    ],
    sections: [
      {
        heading: "Overview of the admission process",
        blocks: [
          {
            kind: "p",
            text: "Shoolini University Online keeps its admission process deliberately simple because it is designed for working professionals and students who cannot visit a campus. Every step, from registration to fee payment, happens on the official website.",
          },
          {
            kind: "list",
            ordered: true,
            items: [
              "Register on the official Shoolini University website to generate your application ID.",
              "Fill out the application form with personal details, educational qualifications and, where relevant, professional details.",
              "Upload scanned copies of the required documents, your photograph and signature.",
              "Pay the application fee of INR 500 online and submit the form.",
              "Wait for document verification and confirmation from the university.",
              "Pay the tuition fee as per your chosen payment plan to complete enrolment and begin classes.",
            ],
          },
        ],
      },
      {
        heading: "Eligibility criteria by programme",
        blocks: [
          {
            kind: "table",
            caption: "Eligibility at a glance",
            head: ["Programme", "Minimum qualification", "Minimum marks"],
            rows: [
              ["Online MBA", "Bachelor's degree, any discipline, min. 3 years", "50 percent (45 percent reserved category)"],
              ["Online MCA", "Bachelor's degree, any stream", "50 percent"],
              ["Online BBA", "10+2, any discipline", "40 percent"],
              ["Online BCom", "10+2, any discipline", "40 percent"],
            ],
          },
          {
            kind: "note",
            text: "International students typically need 60 percent aggregate marks in the qualifying examination across programmes, and a 5 percent relaxation applies for SC/ST and OBC candidates on postgraduate programmes.",
          },
        ],
      },
      {
        heading: "Documents you need before you start",
        blocks: [
          {
            kind: "list",
            items: [
              "Class 10 and Class 12 marksheets (and bachelor's degree marksheets and certificate for PG programmes).",
              "Government-issued ID proof such as Aadhaar or passport.",
              "Passport-size photograph and scanned signature in the specified format and size.",
              "Migration certificate, where applicable.",
              "Category certificate, if claiming a reservation relaxation.",
            ],
          },
          {
            kind: "note",
            text: "Most delays happen because of name mismatches across documents or unreadable scanned uploads — check both before you submit the form.",
          },
        ],
      },
      {
        heading: "Programme-specific notes: MCA bridge course",
        blocks: [
          {
            kind: "p",
            text: "Candidates applying for the online MCA who have no Mathematics background at the 10+2 or bachelor's level must complete a compulsory bridge course in computer science subjects as per university norms, alongside the regular eligibility requirement of a bachelor's degree with 50 percent marks.",
          },
          {
            kind: "cta",
            title: "Not sure which programme you are eligible for",
            body: "Share your last qualification and marks and we will confirm which Shoolini Online programmes you qualify for.",
            buttonLabel: "Check my eligibility",
          },
        ],
      },
      {
        heading: "How admission differs for the pay-after-placement route",
        blocks: [
          {
            kind: "p",
            text: "If you want the pay-after-placement option on the MBA or BBA, the application and eligibility steps are identical to the standard route. The difference appears only at the fee-payment stage, where you choose the pay-after-placement plan instead of the standard one, subject to conditions such as a minimum expected salary and a cap on declined job offers.",
          },
          {
            kind: "list",
            items: [
              "Minimum monthly salary threshold applies to qualify for the pay-after-placement facility.",
              "You may decline a maximum of two shortlisted job opportunities under this scheme.",
              "You can opt out of the pay-after-placement model before the end of the third semester if your plans change.",
            ],
          },
        ],
      },
      {
        heading: "Application timeline and intakes",
        blocks: [
          {
            kind: "p",
            text: "Shoolini University Online typically runs multiple intakes across the year rather than a single annual admission cycle, which suits working professionals who cannot wait for a fixed academic calendar. Confirm the next open intake and its document-submission deadline directly on the official admission page before you start your application.",
          },
          {
            kind: "promo",
            title: "See the full Shoolini Online admission page",
            body: "Check current intake dates, required documents and the online application link.",
            ctaLabel: "View admission details",
            href: "/universities/shoolini-online/admission",
          },
        ],
      },
      {
        heading: "Common admission mistakes to avoid",
        blocks: [
          {
            kind: "list",
            items: [
              "Submitting a mismatched name across the marksheet, ID proof and application form.",
              "Uploading blurry or oversized scans that fail automatic verification.",
              "Paying the tuition fee before candidature is formally confirmed by the university.",
              "Choosing a specialisation without checking whether it maps to your target job role.",
              "Not saving the payment receipt and confirmation page for future reference.",
            ],
          },
        ],
      },
      {
        heading: "Verifying UGC-DEB entitlement before you apply",
        blocks: [
          {
            kind: "p",
            text: "Before submitting any fee, search Shoolini University's legal name on the UGC / DEB online education portal and confirm that your exact programme, mode and academic session are listed. This takes a few minutes and protects you from enrolling in a programme that is not currently entitled.",
          },
          {
            kind: "links",
            title: "Continue your research",
            items: [
              { label: "Shoolini Online courses and fees 2026-27", href: "/blogs/shoolini-online-courses-fees-2026-27" },
              { label: "Shoolini Online placement outcomes", href: "/blogs/shoolini-online-placements-pay-after-placement" },
              { label: "Compare online MBA programmes", href: "/courses/online-mba" },
            ],
          },
        ],
      },
      {
        heading: "What happens after you submit the application",
        blocks: [
          {
            kind: "p",
            text: "Once the form and documents are submitted with the application fee, the admission office verifies your eligibility and documents. On confirmation, you receive instructions to pay the tuition fee as per your chosen plan — semester-wise, annual, lumpsum or pay-after-placement where applicable — after which you get access to the learning management system and your first-semester schedule.",
          },
          {
            kind: "cta",
            title: "Get help completing your Shoolini Online application",
            body: "If you are stuck on a document requirement or payment step, tell us where and we will point you to the right resource.",
            buttonLabel: "Get application help",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is there an entrance exam for Shoolini University Online admission?",
        answer:
          "No. Admission to Shoolini Online's UG and PG programmes is based on eligibility criteria rather than an entrance test or merit rank.",
      },
      {
        question: "What is the minimum eligibility for the Shoolini Online MBA?",
        answer:
          "A bachelor's degree of at least three years' duration in any discipline with a minimum of 50 percent marks, with a 5 percent relaxation for SC/ST/OBC candidates and a 60 percent requirement for international applicants.",
      },
      {
        question: "Can I apply for the Shoolini Online BBA right after Class 12?",
        answer:
          "Yes. The BBA requires 10+2 in any discipline with at least 40 percent marks, with 60 percent required for international students.",
      },
      {
        question: "Do I need a Mathematics background for the online MCA?",
        answer:
          "Not necessarily, but candidates without Mathematics at the 10+2 or bachelor's level must complete a compulsory bridge course in computer science subjects as per university norms.",
      },
      {
        question: "How long does Shoolini Online admission confirmation take?",
        answer:
          "Confirmation timelines depend on how quickly your documents pass verification; submitting clear, correctly named scans on the first attempt is the fastest way through the process.",
      },
      {
        question: "Can I choose the pay-after-placement option during admission?",
        answer:
          "Yes, on the MBA and BBA the pay-after-placement route is selected at the fee-payment stage, subject to eligibility conditions such as a minimum salary threshold.",
      },
      {
        question: "What documents are compulsory for Shoolini Online admission?",
        answer:
          "Class 10 and 12 marksheets, your highest qualifying degree marksheet and certificate where applicable, government ID proof, a passport-size photograph, signature and migration certificate where required.",
      },
      {
        question: "Is the application fee the same across all programmes?",
        answer:
          "Yes, the application fee is INR 500 across the MBA, MCA, BBA and BCom programmes and is non-refundable.",
      },
    ],
    sources: [
      { label: "UGC DEB online education portal", href: "https://deb.ugc.ac.in/" },
      { label: "Shoolini University official website", href: "https://shooliniuniversity.com/" },
    ],
    related: [
      { label: "Shoolini Online courses and fees", href: "/blogs/shoolini-online-courses-fees-2026-27" },
      { label: "Compare universities side by side", href: "/compare/universities" },
    ],
    cta: "Want a document checklist tailored to your programme before you start the Shoolini Online application? Ask us and we will send it across.",
  },

  /* ============================ POST 3: Placements ============================ */
  "shoolini-online-placements-pay-after-placement": {
    ...base,
    updated: UPDATED,
    intro:
      "Shoolini University Online is India's first university to offer a pay-after-placement online MBA, where you pay 80 percent of the fee upfront and the remaining 20 percent only after you accept a job through the university. Beyond this model, Shoolini reports 250-plus hiring partners across its MBA, MCA and BBA programmes, with average salaries ranging from roughly INR 3 lakh for entry-level BCA and BBA roles to over INR 20 lakh for senior MBA-track profiles. This guide explains how the model works, who qualifies, and what graduates actually earn.",
    keyTakeaways: [
      "Under pay-after-placement, you pay roughly 80 percent of the fee upfront and 20 percent only after accepting a job offer through the university's placement process.",
      "Minimum salary of INR 27,500 per month (varies by programme) is required to qualify for the facility, and it must include all employment benefits.",
      "You can decline a maximum of two shortlisted job opportunities and can opt out of the scheme before the end of the third semester.",
      "Shoolini reports 250-plus hiring partners including Accenture, Deloitte, KPMG, ICICI Bank, Nestle, Genpact and American Express.",
      "MBA-track roles such as Management Consultant and Strategy Consultant report the highest average salary bands; MCA and BCA roles are entry-level but scale quickly with skills like cloud and AI.",
      "Pay-after-placement is currently offered on the MBA and BBA; it is not a guarantee of placement, and eligibility conditions apply.",
    ],
    sections: [
      {
        heading: "What the pay-after-placement model actually is",
        blocks: [
          {
            kind: "p",
            text: "Under this model you pay a nominal registration and 80 percent of the programme fee upfront; the remaining 20 percent becomes due only after you secure a job through the university's placement process. The university carries part of the outcome risk instead of you carrying all of it upfront.",
          },
          {
            kind: "table",
            caption: "Pay-after-placement vs standard MBA fee",
            head: ["Particulars", "Pay after placement", "Standard"],
            rows: [
              ["Total fee", "INR 2,00,000", "INR 2,00,000"],
              ["Fee after scholarship", "INR 1,50,000", "INR 1,30,000"],
              ["Payable before placement", "INR 1,20,000", "Full amount per plan"],
              ["Payable after placement", "INR 30,000", "NA"],
            ],
          },
        ],
      },
      {
        heading: "Eligibility for pay-after-placement",
        blocks: [
          {
            kind: "list",
            items: [
              "Minimum salary to avail the facility should be INR 27,500 per month or more, and it varies by chosen course.",
              "The minimum salary figure includes all employment benefits, not just base pay.",
              "You may decline a maximum of two job opportunities for which the placement cell shortlists you.",
              "You can opt out of the pay-after-placement model before the end of the third semester.",
            ],
          },
          {
            kind: "note",
            text: "Pay-after-placement is currently available on the online MBA and BBA. It reduces upfront financial pressure but is not a placement guarantee — read the terms carefully before opting in.",
          },
        ],
      },
      {
        heading: "Hiring partners and recruiter network",
        blocks: [
          {
            kind: "p",
            text: "Shoolini University reports partnerships with 250-plus hiring organisations across its online programmes, spanning consulting, banking, FMCG and IT services.",
          },
          {
            kind: "table",
            caption: "Sample of reported hiring partners",
            head: ["Partner", "Partner"],
            rows: [
              ["Accenture", "Deloitte"],
              ["KPMG", "Ericsson"],
              ["ICICI Bank", "Nestle"],
              ["Adani", "L'Oreal"],
              ["Genpact", "American Express"],
              ["Aditya Birla Group", "Bank of America"],
            ],
          },
          {
            kind: "cta",
            title: "Want to know which recruiters hire for your target role",
            body: "Tell us your target job role and we will check which Shoolini Online hiring partners typically recruit for it.",
            buttonLabel: "Check hiring partners",
          },
        ],
      },
      {
        heading: "Average salaries after the online MBA",
        blocks: [
          {
            kind: "table",
            caption: "Reported average salary by MBA-track job role",
            head: ["Job role", "Average salary (INR LPA)"],
            rows: [
              ["Strategy Consultant", "25 - 27.7"],
              ["Management Consultant", "25.9 - 28.6"],
              ["Investment Banker", "18.3 - 22.4"],
              ["Business Development Manager", "17.8 - 19.7"],
              ["Product Manager", "21.5 - 23.7"],
            ],
          },
          {
            kind: "chart",
            title: "MBA role salary range midpoint (INR LPA)",
            unit: "LPA",
            data: [
              { label: "Financial Analyst", value: 6.5, display: "6.1-6.8" },
              { label: "Marketing Manager", value: 13.3, display: "12.6-13.9" },
              { label: "Project Manager", value: 17.9, display: "17-18.8" },
              { label: "Management Consultant", value: 27.3, display: "25.9-28.6" },
            ],
            note: "Figures are the university-reported average salary ranges for select MBA-track job roles; actual outcomes vary by candidate profile.",
          },
        ],
      },
      {
        heading: "Average salaries after the online MCA",
        blocks: [
          {
            kind: "table",
            caption: "Reported average salary by MCA job role",
            head: ["Job role", "Average salary (INR)"],
            rows: [
              ["IT Architect", "21,00,000"],
              ["Cloud Architect", "20,00,000"],
              ["Data Scientist", "13,00,000"],
              ["Business Analyst", "9,00,000"],
              ["Database Engineer", "7,00,000"],
            ],
          },
          {
            kind: "p",
            text: "MCA graduates are also recruited by IT and manufacturing-linked firms such as Onida, MyFM, Gabriel, Anand, Xcelris, Havells, SBI Card, Eicher, Microtek, Reliance Jio, Accenture and Deloitte, in addition to the consulting and BFSI names common to the MBA track.",
          },
        ],
      },
      {
        heading: "Average salaries after the online BBA",
        blocks: [
          {
            kind: "table",
            caption: "Reported average salary by BBA job role",
            head: ["Job role", "Average salary (INR LPA)"],
            rows: [
              ["Business Consultant", "14.5 - 27.5"],
              ["Operations Manager", "11.1 - 22.2"],
              ["Human Resource Manager", "11.4 - 19.7"],
              ["Business Analyst", "9.8 - 17.6"],
              ["Marketing Executive", "3.6 - 7"],
            ],
          },
          {
            kind: "promo",
            title: "See the full BBA specialisation list",
            body: "Match your BBA specialisation to the career track you actually want before you enrol.",
            ctaLabel: "Explore online BBA",
            href: "/courses/online-bba",
          },
        ],
      },
      {
        heading: "What placement support actually includes",
        blocks: [
          {
            kind: "list",
            items: [
              "Personal placement guidance and resume workshops aligned to current market needs.",
              "AI-driven interview preparation and one-on-one mentorship sessions.",
              "Access to masterclasses with senior industry leaders from firms such as McKinsey, HSBC and Citibank.",
              "Live industry projects from day one, intended to strengthen your profile before you interview.",
            ],
          },
          {
            kind: "note",
            text: "Placement assistance is a support service, not a guaranteed job offer. The pay-after-placement scheme is the university's own way of putting a financial commitment behind that support for eligible students.",
          },
        ],
      },
      {
        heading: "How pay-after-placement affects your career decision",
        blocks: [
          {
            kind: "p",
            text: "If your biggest hesitation about an online MBA or BBA is the uncertainty of getting placed, the pay-after-placement structure reduces your downside because the bulk of the fee becomes due only after you are earning. It does not, however, remove the need to actively engage with the placement process, attend the interviews you are shortlisted for and maintain the minimum eligibility salary once employed.",
          },
          {
            kind: "cta",
            title: "See if you qualify for pay-after-placement",
            body: "Share your target programme and expected salary range and we will check the eligibility conditions for you.",
            buttonLabel: "Check my eligibility",
          },
        ],
      },
      {
        heading: "Where to verify placement claims",
        blocks: [
          {
            kind: "p",
            text: "Treat university-published average salary figures as directional rather than guaranteed. Ask the admission team for the placement percentage and salary range specific to the batch and specialisation you are joining, not just the headline company logos.",
          },
          {
            kind: "links",
            title: "Continue your research",
            items: [
              { label: "Shoolini Online courses and fees 2026-27", href: "/blogs/shoolini-online-courses-fees-2026-27" },
              { label: "Is Shoolini University Online worth it", href: "/blogs/is-shoolini-university-online-worth-it" },
              { label: "Shoolini Online placement page", href: "/universities/shoolini-online/placement" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is pay-after-placement at Shoolini University Online?",
        answer:
          "It is a fee model on the online MBA and BBA where you pay roughly 80 percent of the fee upfront and the remaining 20 percent only after you accept a job offer through the university's placement process, subject to a minimum salary and other eligibility conditions.",
      },
      {
        question: "What is the minimum salary required to qualify for pay-after-placement?",
        answer:
          "A minimum salary of INR 27,500 per month or more, inclusive of all employment benefits, though the exact threshold can vary by the course chosen.",
      },
      {
        question: "Can I opt out of pay-after-placement later?",
        answer:
          "Yes, you can opt out of the pay-after-placement model before the end of the third semester if your circumstances change.",
      },
      {
        question: "Is pay-after-placement a guaranteed job offer?",
        answer:
          "No. It restructures when you pay the fee; it does not guarantee a specific job or salary. You are expected to actively participate in the placement process and can decline at most two shortlisted opportunities under the scheme.",
      },
      {
        question: "Which companies hire from Shoolini University Online?",
        answer:
          "Reported hiring partners include Accenture, Deloitte, KPMG, Ericsson, ICICI Bank, Nestle, Genpact, Aditya Birla Group, Bank of America and American Express, among 250-plus partners across programmes.",
      },
      {
        question: "What is the average salary after a Shoolini Online MBA?",
        answer:
          "University-reported averages range widely by role, from about INR 6 lakh for financial analyst roles to over INR 25 lakh for management and strategy consulting roles.",
      },
      {
        question: "Is pay-after-placement available for the MCA or BCom?",
        answer:
          "Based on published information, pay-after-placement is currently offered on the MBA and BBA programmes, not the MCA or BCom.",
      },
    ],
    sources: [
      { label: "Shoolini University official website", href: "https://shooliniuniversity.com/" },
    ],
    related: [
      { label: "Shoolini Online courses and fees", href: "/blogs/shoolini-online-courses-fees-2026-27" },
      { label: "Careers after an online MBA", href: "/career" },
    ],
    cta: "Want us to check whether you meet the pay-after-placement eligibility for your target Shoolini Online programme? Share your details and we will verify it.",
  },

  /* ============================ POST 4: Is it worth it ============================ */
  "is-shoolini-university-online-worth-it": {
    ...base,
    updated: UPDATED,
    intro:
      "Shoolini University Online is worth it for students who want an affordable, UGC-DEB entitled degree with genuine scholarship support and a placement-linked fee option, and less worth it if you expect a top-tier campus-style brand premium. This review weighs the accreditation, fee-to-scholarship ratio, curriculum depth and pay-after-placement model against alternatives so you can decide with the actual facts rather than marketing claims.",
    keyTakeaways: [
      "Shoolini University is NAAC A+ accredited, UGC-entitled and DEB-listed for its online programmes, with a NIRF rank in the 70s among Indian universities.",
      "Fees are on the affordable side of the market, especially after scholarships — BCom and BBA both land near or under INR 1,00,000 for the full programme.",
      "The pay-after-placement option on the MBA and BBA is a genuine, unusual differentiator versus most other online universities.",
      "Curriculum reviews note strong coverage of current topics like GST and digital business but flag limited hands-on tool training (for example, advanced Excel, Tally) in some programmes.",
      "Faculty interaction is primarily asynchronous online, which suits self-directed learners more than those who need frequent live contact.",
      "It is a strong fit for cost-conscious students and working professionals; it is a weaker fit if your goal is a brand-name campus MBA experience.",
    ],
    sections: [
      {
        heading: "Accreditation and recognition check",
        blocks: [
          {
            kind: "p",
            text: "Before judging value, confirm the basics: Shoolini University is NAAC A+ accredited and its online programmes are UGC-entitled and DEB-listed, which is what makes the resulting degree valid for jobs and higher study.",
          },
          {
            kind: "table",
            caption: "Accreditation and ranking snapshot",
            head: ["Parameter", "Detail"],
            rows: [
              ["NAAC grade", "A+"],
              ["Online programme approval", "UGC-entitled, DEB-listed"],
              ["NIRF rank", "Roughly 70-73 among Indian universities (varies by year)"],
              ["Founded", "2009, Himachal Pradesh"],
            ],
          },
          {
            kind: "note",
            text: "Always re-verify the DEB listing for your exact programme and session before paying — entitlement is renewed per session, not permanent.",
          },
        ],
      },
      {
        heading: "Fee-to-value comparison across programmes",
        blocks: [
          {
            kind: "table",
            caption: "Approximate total fee after standard scholarship",
            head: ["Programme", "Duration", "Fee after scholarship"],
            rows: [
              ["BCom", "3 years", "~INR 90,000"],
              ["BBA", "3 years", "~INR 1,00,000"],
              ["MBA", "2 years", "~INR 1,30,000 - 1,60,000"],
              ["MCA", "2 years", "~INR 1,64,000"],
            ],
          },
          {
            kind: "p",
            text: "These figures sit below many private online universities' comparable programmes, which is the strongest part of Shoolini Online's value case. The trade-off to weigh is brand recognition versus lower cost.",
          },
        ],
      },
      {
        heading: "What genuinely stands out",
        blocks: [
          {
            kind: "list",
            items: [
              "India's first pay-after-placement online MBA, which shifts real financial risk to the university.",
              "250-plus reported hiring partners spanning consulting, banking and FMCG.",
              "AI-based interview preparation and a live-project component from day one in select programmes.",
              "Option to pursue exchange or transfer arrangements with international university partners.",
              "Merit scholarships of up to 25 percent on select programmes for high-scoring students.",
            ],
          },
        ],
      },
      {
        heading: "Where independent reviews flag gaps",
        blocks: [
          {
            kind: "p",
            text: "A detailed review of the online BCom notes the curriculum is current on taxation and digital business topics but recommends more hands-on training in tools like advanced Excel, Tally and Zoho Books, along with more real-world case studies. Faculty interaction online is described as primarily asynchronous, with live Q&A available but not daily.",
          },
          {
            kind: "table",
            caption: "Curriculum strengths and gaps (BCom review)",
            head: ["Aspect", "Assessment"],
            rows: [
              ["Tax and GST content", "Updated to current law"],
              ["Digital business coverage", "Modern and relevant"],
              ["Hands-on tool training", "Limited — needs more Tally/Excel practice"],
              ["Faculty interaction", "Mostly asynchronous, live Q&A not daily"],
            ],
          },
          {
            kind: "cta",
            title: "Want a syllabus deep-dive before you enrol",
            body: "Ask us for the detailed semester-wise syllabus of your shortlisted Shoolini Online programme.",
            buttonLabel: "Request syllabus details",
          },
        ],
      },
      {
        heading: "Who Shoolini Online is a good fit for",
        blocks: [
          {
            kind: "list",
            items: [
              "Cost-conscious students who still want a UGC-entitled, NAAC A+ accredited degree.",
              "Working professionals who value the pay-after-placement safety net over a lower headline fee elsewhere.",
              "Students targeting entry to mid-level roles in consulting-adjacent, IT services or BFSI functions where the recruiter list overlaps with Shoolini's hiring partners.",
              "Self-directed learners comfortable with asynchronous content and periodic live sessions rather than daily live contact.",
            ],
          },
        ],
      },
      {
        heading: "Who should look elsewhere",
        blocks: [
          {
            kind: "list",
            items: [
              "Students chasing a specific campus brand premium for consulting or investment banking recruitment.",
              "Learners who need daily live faculty interaction to stay engaged.",
              "Candidates whose target roles specifically require advanced tool certifications (like Tally or SAP) not yet deeply embedded in the curriculum — plan to supplement with external certifications.",
            ],
          },
          {
            kind: "promo",
            title: "Compare Shoolini Online against other universities",
            body: "Line up Shoolini's fees, scholarships and placement model against other UGC-entitled online universities before deciding.",
            ctaLabel: "Compare universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "Scholarship and cost-reduction options recap",
        blocks: [
          {
            kind: "list",
            items: [
              "10 percent discount for lumpsum fee payment across most programmes.",
              "5 percent discount for annual fee payment.",
              "Merit scholarships up to 25 percent on select programmes for high scorers.",
              "No-interest EMI and education loan options on the full programme fee.",
              "Pay-after-placement route on the MBA and BBA, subject to eligibility conditions.",
            ],
          },
        ],
      },
      {
        heading: "A five-point decision checklist",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Verify the DEB listing for your exact programme and current academic session.",
              "Compare the post-scholarship fee against at least two other UGC-entitled universities offering the same programme.",
              "Check whether the pay-after-placement eligibility salary threshold matches roles you would realistically target.",
              "List any tool-specific certifications (Excel, Tally, cloud platforms) you may need to add yourself alongside the coursework.",
              "Confirm live-session frequency and career-support specifics directly with the admission team in writing.",
            ],
          },
          {
            kind: "cta",
            title: "Get a side-by-side comparison for your shortlist",
            body: "Tell us the universities you are considering alongside Shoolini Online and we will lay out fees, scholarships and placement support together.",
            buttonLabel: "Compare my shortlist",
          },
        ],
      },
      {
        heading: "Bottom line",
        blocks: [
          {
            kind: "p",
            text: "Shoolini University Online earns its value proposition through accreditation, affordability and a real pay-after-placement commitment rather than brand prestige. For most working professionals and cost-conscious students targeting mid-level roles, that combination is genuinely worth it — provided you verify the current DEB listing and go in with realistic expectations about the level of live faculty interaction and tool-specific training you will need to supplement on your own.",
          },
          {
            kind: "links",
            title: "Continue your research",
            items: [
              { label: "Shoolini Online courses and fees 2026-27", href: "/blogs/shoolini-online-courses-fees-2026-27" },
              { label: "Shoolini Online admission process", href: "/blogs/shoolini-online-admission-process-eligibility" },
              { label: "Shoolini Online placements and pay after placement", href: "/blogs/shoolini-online-placements-pay-after-placement" },
              { label: "Online MBA fees and specialisations", href: "/courses/online-mba" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is Shoolini University Online UGC recognised?",
        answer:
          "Yes. Shoolini University is NAAC A+ accredited and its online programmes are UGC-entitled and DEB-listed, which is the basis for the degree's validity for jobs and higher study.",
      },
      {
        question: "Is Shoolini Online good for a BCom degree?",
        answer:
          "Independent reviews rate it above average for an online commerce degree, with current tax and digital-business content, though they recommend supplementing it with hands-on tool practice in Excel and Tally.",
      },
      {
        question: "Is the Shoolini Online MBA better than other online MBAs?",
        answer:
          "It stands out mainly for its pay-after-placement option and affordable fee after scholarship. Whether it is 'better' depends on your target specialisation, hiring-partner overlap with your desired industry, and how much live faculty interaction you need.",
      },
      {
        question: "How does Shoolini Online compare on fees with other universities?",
        answer:
          "Shoolini Online's post-scholarship fees for BCom, BBA and MBA are generally on the lower end of the market for UGC-entitled online degrees, though you should compare against your specific shortlist before deciding.",
      },
      {
        question: "Does Shoolini Online have good placement support?",
        answer:
          "It reports 250-plus hiring partners and offers resume workshops, AI-driven interview preparation and mentorship. As with any university, treat published average salaries as directional and confirm batch-specific outcomes with the admission team.",
      },
      {
        question: "What is the biggest downside of Shoolini University Online?",
        answer:
          "Reviews point to primarily asynchronous faculty interaction and, in some programmes, limited hands-on training in specific professional tools, which motivated students may need to supplement independently.",
      },
      {
        question: "Should I choose Shoolini Online or a more expensive, well-known university?",
        answer:
          "If your priority is minimising cost and financial risk while still getting a valid, UGC-entitled degree, Shoolini Online is a reasonable choice. If your target role specifically screens for a particular university brand, compare that requirement against Shoolini's hiring-partner list before committing.",
      },
    ],
    sources: [
      { label: "UGC DEB online education portal", href: "https://deb.ugc.ac.in/" },
      { label: "Shoolini University official website", href: "https://shooliniuniversity.com/" },
    ],
    related: [
      { label: "Shoolini Online examination pattern", href: "/universities/shoolini-online/examination-pattern" },
      { label: "Online MBA vs distance MBA", href: "/compare/online-mba-vs-distance-mba" },
    ],
    cta: "Still deciding between Shoolini Online and another university? Send us your shortlist and target role and we will help you compare them fairly.",
  },
};

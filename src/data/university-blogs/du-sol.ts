import type { PostContent } from "@/data/posts";
import type { Article } from "@/lib/content";

const base = { reviewer: "Kartik Ahuja", reviewerRole: "Education Research Lead, AVEDU" };
const UPDATED = "2026-08-14";

export const duSolArticles: Article[] = [
  {
    slug: "du-sol-courses-fees-2026-27-guide",
    title: "DU SOL Courses & Fees 2026-27: Complete Guide",
    excerpt:
      "DU SOL UG, PG, BBA FIA, BMS and MBA fees for 2026-27, category-wise, with the exact fee break-up published by the School of Open Learning.",
    category: "Fees & Scholarships",
    categorySlug: "fees-scholarships",
    tags: ["du-sol", "fees", "distance-learning", "delhi-university"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: UPDATED,
    readingTime: "15 min",
    kind: "blog",
  },
  {
    slug: "du-sol-admission-2026-eligibility-process",
    title: "DU SOL Admission 2026: Eligibility, Dates & Process",
    excerpt:
      "Step-by-step DU SOL UG and PG admission process for 2026-27, eligibility rules, documents needed and the UG last date of 15 September 2026.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["du-sol", "admission", "eligibility", "delhi-university"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: UPDATED,
    readingTime: "14 min",
    kind: "blog",
  },
  {
    slug: "du-sol-degree-value-career-outcomes",
    title: "DU SOL Degree Value: Careers After BA, BBA & MBA",
    excerpt:
      "What a DU SOL degree is actually worth for jobs, higher study and government exams, and which programmes suit which career goal.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["du-sol", "career", "degree-value", "delhi-university"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: UPDATED,
    readingTime: "13 min",
    kind: "blog",
  },
  {
    slug: "du-sol-vs-other-distance-universities",
    title: "Is DU SOL Worth It? Fee Categories, Refunds & Comparison",
    excerpt:
      "DU SOL fee categories, refund rules and how its cost compares with other ODL options, so you can decide if it fits your budget and goals.",
    category: "Study Guides",
    categorySlug: "study-guides",
    tags: ["du-sol", "comparison", "fee-categories", "delhi-university"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: UPDATED,
    readingTime: "14 min",
    kind: "blog",
  },
];

export const duSolPosts: Record<string, PostContent> = {
  "du-sol-courses-fees-2026-27-guide": {
    ...base,
    updated: UPDATED,
    intro:
      "DU SOL fees structure for 2026-27 depends on the course you pick, ranging from Rs 12,070 a year for a plain BA Programme or B.Com to Rs 57,920 a year for the MBA. Delhi University's School of Open Learning publishes a separate prospectus and fee table for UG, PG, MBA, MBA HCA and library-science programmes, and the amount payable also depends on your student category. This guide lays out every published fee head so you can budget accurately before you start the online admission form.",
    keyTakeaways: [
      "BA Programme and B.Com cost Rs 12,070 in the first year for Category A (UR/OBC/SC/ST) students.",
      "BA Programme with Computer Application costs more (Rs 15,570) because it carries a practical fee component.",
      "BMS and BBA FIA are the costliest general UG options at Rs 21,120 a year; B.Sc Hons Computer Science is the highest UG fee at Rs 24,570.",
      "PG fees are lower than most UG professional courses: MA and M.Com sit between Rs 12,820 and Rs 13,120 a year.",
      "The MBA annual fee for Category A is Rs 57,920, well below most private-university online MBAs.",
      "Fees differ by category (A to G) and by whether you belong to PwBD, orphan, armed-forces or transgender categories — always confirm the exact figure on the portal before paying.",
    ],
    sections: [
      {
        heading: "How DU SOL structures its fees",
        blocks: [
          {
            kind: "p",
            text: "DU SOL operates under the Department of Distance and Continuing Education at the University of Delhi and publishes a separate prospectus for UG, PG, MBA, MBA HCA (Healthcare Administration) and library-science programmes for 2026-27.",
          },
          {
            kind: "p",
            text: "Fees are charged annually rather than per semester, and the published total already bundles tuition, welfare funds, development funds, facilities charges and the examination fee for that year.",
          },
          {
            kind: "table",
            caption: "DU SOL at a glance",
            head: ["Aspect", "Detail"],
            rows: [
              ["University", "University of Delhi"],
              ["Institution", "School of Open Learning (SOL)"],
              ["Course mode", "Open and Distance Learning (ODL)"],
              ["Admission mode", "Online, through the official SOL portal"],
            ],
          },
        ],
      },
      {
        heading: "DU SOL UG fees 2026-27 (Category A)",
        blocks: [
          {
            kind: "p",
            text: "Undergraduate fees vary by whether the programme is a general BA/B.Com, an honours course, or a professional/technical programme with a practical component.",
          },
          {
            kind: "table",
            caption: "UG fee table for Category A (UR/OBC/SC/ST), first year",
            head: ["Course", "First-Year Fee", "Note"],
            rows: [
              ["BA Programme / B.Com", "Rs 12,070", "Most affordable UG option"],
              ["BA Programme with Computer Application", "Rs 15,570", "Includes practical fee component"],
              ["BA Hons (English/Pol. Sci/Economics), B.Com Hons", "Rs 12,570", "Subject-focused honours"],
              ["BMS / BBA FIA", "Rs 21,120", "Professional management courses"],
              ["B.Sc Hons Computer Science", "Rs 24,570", "Highest UG fee; technical + practical"],
            ],
          },
          {
            kind: "note",
            text: "These are first-year, Category A figures from the official 2026-27 prospectus. Later years may carry different heads (re-registration, exam fee only) — check the year-wise schedule on the portal.",
          },
        ],
      },
      {
        heading: "DU SOL PG and MBA fees 2026-27",
        blocks: [
          {
            kind: "table",
            caption: "PG fee table for Category A",
            head: ["Course", "Category A Fee"],
            rows: [
              ["MA Political Science / History / Sanskrit", "Rs 12,820"],
              ["MA Hindi / M.Com", "Rs 13,120"],
              ["MBA (annual)", "Rs 57,920"],
              ["BLISc", "Rs 13,770"],
              ["MLISc", "Rs 14,770"],
            ],
          },
          {
            kind: "p",
            text: "The MBA is DU SOL's costliest programme, but it is still markedly cheaper than most private-university online MBAs, which commonly run into lakhs. Independent fee estimates for a management programme under the DU system also cite a tuition band of roughly Rs 15,000-30,000 a year plus exam and material charges — always cross-check the exact figure on the current MBA prospectus before paying.",
          },
        ],
      },
      {
        heading: "Get personalised guidance",
        blocks: [
          {
            kind: "cta",
            title: "Confused about which DU SOL course fits your budget?",
            body: "Share your target course and category and we will help you plan the exact fee outlay.",
            buttonLabel: "Get a fee estimate",
          },
        ],
      },
      {
        heading: "BBA FIA: a detailed fee break-up example",
        blocks: [
          {
            kind: "p",
            text: "The BBA in Financial Investment Analysis is a 3-year, 6-semester programme covering microeconomics, macroeconomics, digital marketing, corporate finance and econometrics basics. Its fee structure shows exactly what a Category A student pays for, head by head.",
          },
          {
            kind: "table",
            caption: "DU SOL BBA FIA fee break-up, Category A, Year 1",
            head: ["Fee Head", "Amount"],
            rows: [
              ["Tuition Fee", "Rs 2,000"],
              ["College + University Welfare Funds", "Rs 450"],
              ["College + University Development Funds", "Rs 2,500"],
              ["College Facilities & Services Charges", "Rs 12,600"],
              ["University Facilities Charges + EWS Fund", "Rs 1,750"],
              ["Examination Fees", "Rs 1,820"],
              ["Total (Category A)", "Rs 21,120"],
            ],
          },
          {
            kind: "p",
            text: "Over three years, the total BBA FIA cost for Category A students works out to roughly Rs 63,360 (Rs 21,120 annually), making it one of the more affordable specialised business degrees available through ODL mode.",
          },
        ],
      },
      {
        heading: "Fees by student category",
        blocks: [
          {
            kind: "table",
            caption: "DU SOL student categories",
            head: ["Category", "Who it covers"],
            rows: [
              ["Category A", "UR, OBC, SC, ST — Indian residents"],
              ["Category B", "Foreign Students Registry (FSR) and NRI"],
              ["Category C", "Persons with Benchmark Disability (PwBD)"],
              ["Category D", "Orphan students"],
            ],
          },
          {
            kind: "p",
            text: "For BBA FIA specifically, an FSR student pays Rs 28,620 and an NRI student pays Rs 22,620 in the first year, against Rs 21,120 for Category A. PwBD candidates pay only Rs 130 (facilities charges only, with tuition, admission and exam fees waived), and orphan-category students pay a token Rs 20 total.",
          },
          {
            kind: "note",
            text: "Categories E (Armed Forces/CAPF), F (transgender) and G (staff wards) also carry concessional structures. Confirm your exact category fee on the admission portal, since waivers require valid supporting certificates.",
          },
        ],
      },
      {
        heading: "Miscellaneous and post-course charges",
        blocks: [
          {
            kind: "table",
            caption: "Common post-admission charges",
            head: ["Purpose", "Fee"],
            rows: [
              ["Document verification (within 6 years)", "Rs 500"],
              ["Document verification (after 6 years)", "Rs 1,000"],
              ["Passing/LOR/CLC/other certificates (each)", "Rs 500"],
              ["Fee refund administrative deduction", "Rs 500"],
            ],
          },
        ],
      },
      {
        heading: "Explore more options",
        blocks: [
          {
            kind: "promo",
            title: "Compare DU SOL with other UGC-entitled universities",
            body: "See fees, placements and specialisations side by side before you apply.",
            ctaLabel: "Compare universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "How to pay DU SOL fees",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Log in to the official DU SOL admission portal and select your programme.",
              "Fill in the admission form and upload the required documents.",
              "Check the final fee amount displayed on the portal — it reflects your category automatically.",
              "Pay through debit card, credit card or net banking using your own or a parent's account.",
              "Download the payment receipt and save it along with the admission confirmation.",
            ],
          },
          {
            kind: "note",
            text: "DU SOL advises against cash payments to agents or unofficial payment links. Only pay through the university's own portal.",
          },
        ],
      },
      {
        heading: "Comparing UG fee tiers at a glance",
        blocks: [
          {
            kind: "chart",
            title: "First-year UG fee by programme (Category A, Rs)",
            unit: "Rs",
            data: [
              { label: "BA / B.Com", value: 12070, display: "Rs 12,070" },
              { label: "BA Hons / B.Com Hons", value: 12570, display: "Rs 12,570" },
              { label: "BA with Comp. Application", value: 15570, display: "Rs 15,570" },
              { label: "BMS / BBA FIA", value: 21120, display: "Rs 21,120" },
              { label: "B.Sc Hons Computer Science", value: 24570, display: "Rs 24,570" },
            ],
          },
        ],
      },
      {
        heading: "Refund policy if you withdraw",
        blocks: [
          {
            kind: "p",
            text: "DU SOL allows fee refunds only if you cancel or withdraw admission before the official last date, and only through an offline, duly attested application at your regional centre. Rs 500 is deducted from the refund as an administrative charge, and the balance follows UGC/DEB/university refund guidelines applicable at the time of cancellation.",
          },
          {
            kind: "list",
            items: [
              "Handwritten application",
              "DU SOL ID card",
              "Original fee receipt",
              "Bank passbook copy",
              "Valid government ID proof",
            ],
          },
        ],
      },
      {
        heading: "Explore further",
        blocks: [
          {
            kind: "links",
            title: "Plan your DU SOL admission",
            items: [
              { label: "DU SOL admission process", href: "/universities/du-sol/admission" },
              { label: "DU SOL scholarships and concessions", href: "/universities/du-sol/scholarships" },
              { label: "Compare DU SOL with other universities", href: "/compare/universities" },
              { label: "Explore online BBA programmes", href: "/courses/online-bba" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the DU SOL BA Programme fee for 2026-27?",
        answer:
          "The first-year fee for the BA Programme (Category A: UR/OBC/SC/ST) is Rs 12,070, the same as B.Com for that category, as per the 2026-27 UG prospectus.",
      },
      {
        question: "How much does DU SOL MBA cost?",
        answer:
          "The published Category A annual fee for the DU SOL MBA is Rs 57,920, with examination fees included but subject to university rules.",
      },
      {
        question: "Are DU SOL fees different for foreign or NRI students?",
        answer:
          "Yes. Category B covers Foreign Students Registry (FSR) and NRI applicants. For BBA FIA, for example, FSR students pay Rs 28,620 and NRI students pay Rs 22,620 in the first year, against Rs 21,120 for Category A.",
      },
      {
        question: "Is there a fee waiver for PwBD or orphan students?",
        answer:
          "Yes. PwBD (Category C) candidates pay only a token facilities charge (Rs 130 for BBA FIA) with tuition, admission and exam fees waived. Orphan-category (Category D) students pay a nominal total of about Rs 20.",
      },
      {
        question: "Can I get a refund if I cancel my DU SOL admission?",
        answer:
          "Refunds are allowed only if you withdraw before the admission last date, through an offline attested application at your regional centre, with Rs 500 deducted as an administrative charge.",
      },
      {
        question: "Does the DU SOL fee include examination charges?",
        answer:
          "Yes, the published annual fee for most UG and PG programmes bundles the examination fee for that year along with tuition, welfare and development fund charges.",
      },
      {
        question: "Is DU SOL cheaper than private online universities?",
        answer:
          "Generally yes. Even the costliest DU SOL programme (the MBA at Rs 57,920 a year) remains well below the multi-lakh fees charged by many private online MBA providers.",
      },
      {
        question: "Where do I pay my DU SOL fees?",
        answer:
          "Only on the official DU SOL admission portal, using debit card, credit card or net banking. The university explicitly advises against paying agents or unofficial links.",
      },
    ],
    sources: [
      { label: "DU SOL official website", href: "https://sol.du.ac.in/" },
      { label: "UGC DEB online education portal", href: "https://deb.ugc.ac.in/" },
    ],
  },

  "du-sol-admission-2026-eligibility-process": {
    ...base,
    updated: UPDATED,
    intro:
      "DU SOL admission for 2026-27 is fully online, with the UG last date fixed at 15 September 2026 by UGC-DEB while the PG last date is yet to be notified. There is no entrance test for most UG programmes — admission is based on meeting the published eligibility for your chosen course. This guide walks through eligibility, documents and the exact steps so you do not lose time near the deadline.",
    keyTakeaways: [
      "DU SOL UG admission 2026 last date is 15 September 2026, as decided by UGC-DEB.",
      "The DU SOL PG admission 2026 last date has not been announced yet; register early rather than waiting.",
      "UG eligibility is a pass in Class 12 or equivalent from a recognised board; specific programmes add subject conditions.",
      "PG eligibility is a bachelor's degree from a recognised university, with programme-specific minimum marks in some cases.",
      "Keep photograph, signature, Class 10/12 or degree marksheets and category certificates ready in the prescribed format before you start.",
      "Complete the entire process — form, upload, payment, receipt — before the deadline; account creation alone does not count as admission.",
    ],
    sections: [
      {
        heading: "DU SOL admission 2026-27 at a glance",
        blocks: [
          {
            kind: "table",
            caption: "Key admission details",
            head: ["Detail", "Information"],
            rows: [
              ["Academic session", "2026-27"],
              ["Mode of study", "Open and Distance Learning"],
              ["UG admission last date", "15 September 2026"],
              ["PG admission last date", "To be notified"],
              ["Foreign-language certificate deadline", "10 August 2026"],
              ["Foreign-language diploma deadline", "23 August 2026"],
            ],
          },
          {
            kind: "note",
            text: "Do not wait until the last day. Uploading documents, verifying applications and completing fee payment all take time, and correcting mistakes close to the deadline is harder.",
          },
        ],
      },
      {
        heading: "UG programmes available",
        blocks: [
          {
            kind: "p",
            text: "The 2026-27 UG prospectus follows the NEP 2020 Undergraduate Curriculum Framework of the University of Delhi and includes structured study material, video lectures and counselling support for distance learners.",
          },
          {
            kind: "list",
            items: [
              "Bachelor of Arts Programme",
              "BA (Hons.) English, Political Science, Economics",
              "Bachelor of Commerce and B.Com (Hons.)",
              "Bachelor of Business Administration, Financial Investment Analysis (BBA FIA)",
              "Bachelor of Management Studies (BMS)",
              "Bachelor of Library and Information Science (BLISc)",
            ],
          },
        ],
      },
      {
        heading: "PG programmes available",
        blocks: [
          {
            kind: "p",
            text: "PG admissions run through the Department of Distance and Continuing Education, with separate prospectuses for MA/M.Com, MBA, MBA Executive (Healthcare Administration), and Library and Information Science programmes.",
          },
          {
            kind: "list",
            items: [
              "Master of Arts (various subjects)",
              "Master of Commerce",
              "Master of Business Administration",
              "MBA Executive in Healthcare Administration",
              "Master of Library and Information Science (MLISc)",
              "Postgraduate Diploma in Automated and Digital Library Management (PGDADLM)",
            ],
          },
        ],
      },
      {
        heading: "Get personalised guidance",
        blocks: [
          {
            kind: "cta",
            title: "Confused about which DU SOL course fits your budget?",
            body: "Share your target course and category and we will help you plan the exact fee outlay.",
            buttonLabel: "Get a fee estimate",
          },
        ],
      },
      {
        heading: "Eligibility criteria",
        blocks: [
          {
            kind: "table",
            caption: "UG vs PG eligibility",
            head: ["Level", "Eligibility"],
            rows: [
              ["Undergraduate", "Pass in Class 12 or equivalent from a recognised board; specific subject/marks conditions vary by programme"],
              ["Postgraduate", "Bachelor's degree from a recognised university; some programmes add minimum marks or a relevant academic background"],
            ],
          },
          {
            kind: "p",
            text: "For BBA FIA specifically, applicants need at least 45% marks in Class 12 in any stream from a recognised board, and must have studied Mathematics or Applied Mathematics at the 10+2 level.",
          },
          {
            kind: "note",
            text: "General eligibility does not guarantee eligibility for every course. Always check the programme-specific prospectus before applying.",
          },
        ],
      },
      {
        heading: "Documents required",
        blocks: [
          {
            kind: "table",
            caption: "Documents to keep ready",
            head: ["Document", "Purpose"],
            rows: [
              ["Passport-size photograph and signature", "Application profile and verification"],
              ["Class 10 certificate/marksheet", "Date-of-birth and identity proof"],
              ["Class 12 certificate/marksheet", "UG eligibility proof"],
              ["Bachelor's degree/marksheets", "PG eligibility proof"],
              ["Category certificate, migration certificate, valid ID", "Reservation claim and identity, where applicable"],
            ],
          },
          {
            kind: "note",
            text: "Candidates from boards other than CBSE may need to upload additional qualifying certificates. Documents must be clear and match the details entered in the form exactly.",
          },
        ],
      },
      {
        heading: "Step-by-step application process",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Open the official UG or PG admission portal and choose new registration.",
              "Enter an active email address and mobile number you will keep for the whole programme.",
              "Fill in personal and academic details carefully.",
              "Select your programme, checking eligibility once more before confirming.",
              "Upload photograph, signature and required certificates.",
              "Review every field before submission — name mismatches are the most common cause of delay.",
              "Pay the admission fee through the portal using card or net banking.",
              "Download the submitted application and payment confirmation for your records.",
            ],
          },
        ],
      },
      {
        heading: "Explore more options",
        blocks: [
          {
            kind: "promo",
            title: "Compare DU SOL with other UGC-entitled universities",
            body: "See fees, placements and specialisations side by side before you apply.",
            ctaLabel: "Compare universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "Common mistakes that delay admission",
        blocks: [
          {
            kind: "list",
            items: [
              "Name spelling differing between Class 10, Class 12 and the application form.",
              "Blurry or oversized document uploads that fail portal verification.",
              "Waiting until the last week to register, leaving no time to fix rejected documents.",
              "Paying through unofficial links or agents instead of the university's own payment gateway.",
            ],
          },
          {
            kind: "note",
            text: "The admission last date applies to full admission completion, not just account creation. Finish every step — including payment — before the deadline.",
          },
        ],
      },
      {
        heading: "After you apply",
        blocks: [
          {
            kind: "p",
            text: "Once your application and fee payment are verified, DU SOL confirms admission and provides access to study material, video lectures and counselling schedules. Keep your application number and payment receipt safe — they are needed for every future query, re-registration and examination form.",
          },
          {
            kind: "links",
            title: "Next steps after admission",
            items: [
              { label: "DU SOL fees for 2026-27", href: "/universities/du-sol" },
              { label: "DU SOL examination pattern", href: "/universities/du-sol/examination-pattern" },
              { label: "Explore online BBA and BCA options", href: "/courses/online-bca" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the DU SOL UG admission last date for 2026-27?",
        answer:
          "15 September 2026, as fixed by UGC-DEB. Candidates should complete the entire admission process, including fee payment, before this date.",
      },
      {
        question: "Has the DU SOL PG admission last date been announced?",
        answer:
          "Not yet. As of the current PG portal listing, the deadline will be notified as per the decision of UGC-DEB. Applicants should register early rather than waiting for a fixed date.",
      },
      {
        question: "Is there an entrance exam for DU SOL UG admission?",
        answer:
          "Most UG programmes admit on the basis of eligibility rather than an entrance test. Some specific programmes may have their own conditions, so check the relevant prospectus.",
      },
      {
        question: "What documents do I need for DU SOL PG admission?",
        answer:
          "A bachelor's degree and marksheets, Class 10 and 12 certificates, photograph, signature, valid ID proof, and a category certificate if claiming reservation.",
      },
      {
        question: "Can final-year graduates apply for DU SOL PG programmes?",
        answer:
          "Some programmes allow final-year students to apply subject to conditions specified in that programme's prospectus; this is not universal across all PG courses.",
      },
      {
        question: "What happens if my documents do not match my application?",
        answer:
          "Name or detail mismatches between your documents and the application are the most common cause of verification delay, so review every field before submitting.",
      },
      {
        question: "Should I use an agent to complete my DU SOL admission?",
        answer:
          "No. DU SOL advises applicants to use the official portal directly and avoid private agents or unofficial payment links.",
      },
    ],
    sources: [
      { label: "DU SOL UG admission portal", href: "https://sol.du.ac.in/" },
      { label: "UGC DEB", href: "https://deb.ugc.ac.in/" },
    ],
  },

  "du-sol-degree-value-career-outcomes": {
    ...base,
    updated: UPDATED,
    intro:
      "A DU SOL degree carries the University of Delhi name at a fraction of private-college cost, which is exactly why working learners, homemakers and competitive-exam aspirants choose it over regular colleges. The real value depends on which programme you pick: a plain BA or B.Com suits government-exam preparation and general eligibility, while BBA FIA, BMS and the MBA are built for management, finance and administrative career paths. This guide maps DU SOL programmes to realistic career outcomes.",
    keyTakeaways: [
      "DU SOL degrees carry the University of Delhi name, which is widely recognised for government exams, banking and general employment eligibility.",
      "BA Programme and B.Com are the most affordable route to a recognised graduation degree for further study or competitive exams.",
      "BBA FIA and BMS are built for management, finance, sales and corporate career paths, with subjects like corporate finance and digital marketing.",
      "B.Sc Hons Computer Science targets IT, programming and technical career tracks with a practical, higher-fee curriculum.",
      "The MBA and MBA HCA suit working professionals seeking a management or healthcare-administration credential without leaving their job.",
      "Career outcomes depend heavily on your own work history and specialisation choice, not on the degree mode alone.",
    ],
    sections: [
      {
        heading: "Why students choose DU SOL",
        blocks: [
          {
            kind: "p",
            text: "DU SOL is chosen for the flexibility of open and distance learning, recognition of University of Delhi degrees, low fees relative to private colleges, and structured study material and counselling support.",
          },
          {
            kind: "p",
            text: "It particularly suits working learners, homemakers, government-exam aspirants and students who cannot attend a regular college due to work, family responsibilities or location constraints.",
          },
        ],
      },
      {
        heading: "Matching programmes to career goals",
        blocks: [
          {
            kind: "table",
            caption: "Programme-to-career mapping",
            head: ["Programme", "Best suited for"],
            rows: [
              ["BA Programme / B.Com", "General graduation for govt exams, banking, teaching pathways, further study"],
              ["BA Hons (English/Pol. Sci/Economics), B.Com Hons", "Subject-focused study, competitive exams needing a specific discipline"],
              ["BMS / BBA FIA", "Management, finance, sales, operations, entrepreneurship careers"],
              ["B.Sc Hons Computer Science", "IT, programming and technical career tracks"],
              ["MBA / MBA HCA", "Working professionals seeking management or healthcare-administration roles"],
            ],
          },
        ],
      },
      {
        heading: "What BBA FIA actually teaches",
        blocks: [
          {
            kind: "p",
            text: "The BBA in Financial Investment Analysis is a 6-semester, 3-year programme focused on economics, finance, corporate law and basic IT tools, with minor specialisations in commerce and English.",
          },
          {
            kind: "list",
            items: [
              "Microeconomics and macroeconomics",
              "Digital marketing",
              "Corporate finance",
              "Basics of econometrics",
            ],
          },
          {
            kind: "p",
            text: "This subject mix is designed for students aiming at business, finance, investment-analysis or corporate roles, or planning further study such as an MBA later.",
          },
        ],
      },
      {
        heading: "Get personalised guidance",
        blocks: [
          {
            kind: "cta",
            title: "Confused about which DU SOL course fits your budget?",
            body: "Share your target course and category and we will help you plan the exact fee outlay.",
            buttonLabel: "Get a fee estimate",
          },
        ],
      },
      {
        heading: "MBA and MBA HCA for working professionals",
        blocks: [
          {
            kind: "p",
            text: "The DU system offers MBA and MBA Executive (Healthcare Administration) options aimed at working professionals, entrepreneurs and career transitioners who want a management credential without leaving their job. Learning is self-paced, supported by study material and periodic assessments.",
          },
          {
            kind: "table",
            caption: "MBA-related specialisation areas mentioned in the prospectus",
            head: ["Specialisation area", "Typical career direction"],
            rows: [
              ["Marketing Management", "Brand, sales, marketing roles"],
              ["Financial Management", "Finance, investment, accounts roles"],
              ["Human Resource Management", "HR and people-operations roles"],
              ["Operations Management", "Supply chain, operations, process roles"],
            ],
          },
          {
            kind: "note",
            text: "DU SOL itself is primarily a UG/PG institution; management programmes under the University of Delhi system are run through recognised departments and affiliated structures. Always confirm the exact department and current fee on the official DU website before applying to an MBA-labelled programme.",
          },
        ],
      },
      {
        heading: "How employers and recruiters view the degree",
        blocks: [
          {
            kind: "p",
            text: "A degree from the University of Delhi carries strong brand recognition across India, which supports credibility during hiring and further-education applications. Recruiters weigh the university's name, your specialisation and your work history together, rather than rejecting a distance-mode degree outright.",
          },
          {
            kind: "list",
            items: [
              "Government and PSU eligibility criteria generally accept a recognised university degree regardless of mode, subject to programme-specific listing rules.",
              "Banking and competitive exams typically require only a bachelor's degree, which BA Programme or B.Com satisfies at low cost.",
              "Corporate recruiters in finance, marketing and operations look for BBA/BMS/MBA specialisation alignment with the role.",
            ],
          },
        ],
      },
      {
        heading: "Explore more options",
        blocks: [
          {
            kind: "promo",
            title: "Compare DU SOL with other UGC-entitled universities",
            body: "See fees, placements and specialisations side by side before you apply.",
            ctaLabel: "Compare universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "Library and information science pathway",
        blocks: [
          {
            kind: "p",
            text: "BLISc and MLISc programmes prepare students for library, documentation, archive, academic and information-service roles. These are lower-fee, focused programmes for a specific career track rather than a general degree.",
          },
          {
            kind: "table",
            caption: "Library science programmes",
            head: ["Course", "Career direction"],
            rows: [
              ["BLISc", "Entry-level library and documentation roles"],
              ["MLISc", "Academic, archival and senior information-service roles"],
              ["PGDADLM", "Digital and automated library management roles"],
            ],
          },
        ],
      },
      {
        heading: "A decision checklist before you enrol",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Write down the exact role or exam you are targeting.",
              "Check whether that role/exam needs a specific subject background or just any bachelor's degree.",
              "If targeting management or finance roles, prefer BBA FIA, BMS or the MBA over a general BA.",
              "If targeting government exams, a low-cost BA Programme or B.Com is usually sufficient.",
              "Confirm the programme's DEB listing and current fee on the official portal before paying.",
            ],
          },
          {
            kind: "links",
            title: "Plan your path",
            items: [
              { label: "DU SOL fees and courses 2026-27", href: "/universities/du-sol" },
              { label: "DU SOL admission process", href: "/universities/du-sol/admission" },
              { label: "Online MBA programmes", href: "/courses/online-mba" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a DU SOL degree valid for government jobs?",
        answer:
          "A recognised University of Delhi degree earned through DU SOL is generally accepted for eligibility purposes in government and banking recruitment, which is one reason it is popular with competitive-exam aspirants.",
      },
      {
        question: "Which DU SOL course is best for a finance career?",
        answer:
          "BBA in Financial Investment Analysis is specifically built for this, covering corporate finance, economics and investment-related subjects across six semesters.",
      },
      {
        question: "Can I pursue DU SOL BA Programme while working?",
        answer:
          "Yes, the open and distance learning mode with study material, video lectures and counselling support is designed for working learners, homemakers and students who cannot attend regular college.",
      },
      {
        question: "Does DU SOL offer a full MBA directly?",
        answer:
          "DU SOL itself traditionally focuses on UG and PG courses; management programmes under the University of Delhi system are offered through recognised departments and affiliated structures. Confirm the department and current details officially before applying.",
      },
      {
        question: "What can I do after BLISc or MLISc from DU SOL?",
        answer:
          "These programmes lead to library, documentation, archive and information-service roles in academic institutions, government bodies and corporate libraries.",
      },
      {
        question: "Is B.Sc Hons Computer Science from DU SOL good for an IT career?",
        answer:
          "It is designed for students interested in computer science, IT and programming, with a technical and practical-based curriculum, though it is priced higher than other UG options due to practical components.",
      },
    ],
    sources: [
      { label: "DU SOL official website", href: "https://sol.du.ac.in/" },
    ],
  },

  "du-sol-vs-other-distance-universities": {
    ...base,
    updated: UPDATED,
    intro:
      "DU SOL fees structure is built around student categories, so the same course can cost anywhere from a nominal Rs 20-130 for orphan or PwBD students to Rs 20,000-plus for general Category A students. Weighed against the University of Delhi's brand recognition, that pricing makes DU SOL one of the most cost-effective distance-learning options in India, but it is worth understanding the category rules, refund policy and how it compares to alternatives before committing.",
    keyTakeaways: [
      "DU SOL uses seven fee categories (A to G) plus a sports quota, each with different waiver levels.",
      "Category A (UR/OBC/SC/ST) pays the standard published fee; PwBD and orphan categories pay only a token amount.",
      "Foreign students (FSR) and NRI applicants pay a higher Category B fee than Category A.",
      "Refunds are possible only before the admission last date, via an offline attested application, with a Rs 500 administrative deduction.",
      "Compared with private online universities charging Rs 2-10 lakh for an MBA, DU SOL's Rs 57,920 annual MBA fee is markedly cheaper.",
      "The trade-off for the low cost is less individualised support and a more exam-driven, self-study format than some private ODL universities.",
    ],
    sections: [
      {
        heading: "Understanding DU SOL's fee categories",
        blocks: [
          {
            kind: "table",
            caption: "DU SOL fee categories explained",
            head: ["Category", "Who it covers"],
            rows: [
              ["Category A", "UR, OBC, SC, ST — Indian residents"],
              ["Category B", "Foreign students (FSR) and NRI"],
              ["Category C", "Persons with Benchmark Disability (PwBD)"],
              ["Category D", "Orphan students"],
              ["Category E, F, G", "Armed Forces/CAPF, transgender, staff-ward categories"],
            ],
          },
          {
            kind: "p",
            text: "Most Delhi-based applicants fall under Category A unless they qualify for a special category. Students claiming a concession must submit valid supporting documents at the time of admission.",
          },
        ],
      },
      {
        heading: "Fee difference across categories: BBA FIA example",
        blocks: [
          {
            kind: "table",
            caption: "First-year BBA FIA fee by category",
            head: ["Category", "First-Year Fee"],
            rows: [
              ["Category A (UR/OBC/SC/ST)", "Rs 21,120"],
              ["Category B — NRI", "Rs 22,620"],
              ["Category B — FSR (foreign)", "Rs 28,620"],
              ["Category C — PwBD", "Rs 130"],
              ["Category D — Orphan", "Rs 20"],
            ],
          },
          {
            kind: "note",
            text: "The gap between categories is large by design — PwBD and orphan students are exempted from tuition, admission and exam fees, paying only token administrative charges.",
          },
        ],
      },
      {
        heading: "DU SOL cost versus private online universities",
        blocks: [
          {
            kind: "chart",
            title: "Annual MBA fee comparison (approximate, Rs)",
            unit: "Rs",
            data: [
              { label: "DU SOL MBA (Category A)", value: 57920, display: "Rs 57,920" },
              { label: "Typical private online MBA (low end)", value: 200000, display: "Rs 2,00,000+" },
            ],
          },
          {
            kind: "p",
            text: "Even at the top of its fee range, DU SOL remains dramatically cheaper than private online MBAs, which commonly run from Rs 2 lakh to Rs 10 lakh for the full programme. The trade-off is that DU SOL's own MBA-related offerings are run through the wider Delhi University departmental system rather than as a single, heavily-marketed online MBA brand.",
          },
        ],
      },
      {
        heading: "Get personalised guidance",
        blocks: [
          {
            kind: "cta",
            title: "Confused about which DU SOL course fits your budget?",
            body: "Share your target course and category and we will help you plan the exact fee outlay.",
            buttonLabel: "Get a fee estimate",
          },
        ],
      },
      {
        heading: "Refund policy if plans change",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Submit a handwritten, attested refund application offline at your DU SOL regional centre.",
              "Attach your DU SOL ID card, fee receipt, bank passbook copy and valid government ID.",
              "Applications are accepted only before the official admission last date for that session.",
              "Rs 500 is deducted from the refund amount as an administrative charge.",
              "The remaining amount follows UGC/DEB/university refund guidelines applicable at the time of cancellation.",
            ],
          },
          {
            kind: "note",
            text: "There is no online refund process — it must be done in person or by post at the regional centre, so factor in that extra effort if you are unsure about a programme.",
          },
        ],
      },
      {
        heading: "Miscellaneous costs to budget for",
        blocks: [
          {
            kind: "table",
            caption: "Additional charges after enrolment",
            head: ["Item", "Fee"],
            rows: [
              ["Document verification (within 6 years)", "Rs 500"],
              ["Document verification (after 6 years)", "Rs 1,000"],
              ["Passing certificate / LOR / CLC (each)", "Rs 500"],
            ],
          },
        ],
      },
      {
        heading: "Explore more options",
        blocks: [
          {
            kind: "promo",
            title: "Compare DU SOL with other UGC-entitled universities",
            body: "See fees, placements and specialisations side by side before you apply.",
            ctaLabel: "Compare universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "When DU SOL is the right fit",
        blocks: [
          {
            kind: "list",
            items: [
              "You want a recognised University of Delhi degree at the lowest possible cost.",
              "You are a Delhi-based working learner, homemaker or competitive-exam aspirant who values brand recognition over intensive one-on-one support.",
              "Your target career or exam only requires a recognised bachelor's/master's degree, not a specific accredited private-university brand.",
              "You can manage a largely self-study format with periodic counselling rather than frequent live mentoring.",
            ],
          },
          {
            kind: "p",
            text: "If you instead need dedicated placement assistance, frequent live faculty interaction, or a management degree with an established corporate-recruiter pipeline, compare DU SOL against private UGC-entitled universities before deciding.",
          },
        ],
      },
      {
        heading: "Final checklist before you commit",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Confirm your fee category and required supporting documents.",
              "Check the current fee table on the official portal — do not rely on old screenshots.",
              "Decide whether you need a general degree (BA/B.Com) or a specialised one (BBA FIA/BMS/MBA/B.Sc CS).",
              "Read the refund policy in case your plans change after admission.",
              "Compare against at least one private ODL alternative if you need stronger placement support.",
            ],
          },
          {
            kind: "links",
            title: "Compare and plan",
            items: [
              { label: "Compare universities side by side", href: "/compare/universities" },
              { label: "DU SOL scholarships and fee categories", href: "/universities/du-sol/scholarships" },
              { label: "Explore online B.Com options", href: "/courses/online-bcom" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What are the DU SOL fee categories?",
        answer:
          "Category A covers UR/OBC/SC/ST Indian residents, Category B covers foreign (FSR) and NRI students, Category C is for PwBD candidates, Category D is for orphan students, and Categories E, F and G cover armed forces, transgender and staff-ward applicants respectively.",
      },
      {
        question: "Is DU SOL cheaper than private online universities?",
        answer:
          "Yes, generally. Even DU SOL's costliest programme, the MBA at Rs 57,920 a year, is well below the Rs 2-10 lakh range charged by many private online MBA providers.",
      },
      {
        question: "Can I get a refund after paying DU SOL fees?",
        answer:
          "Only if you withdraw before the admission last date, via an offline attested application at your regional centre, with a Rs 500 administrative deduction from the refund.",
      },
      {
        question: "Do NRI students pay more than Category A students?",
        answer:
          "Yes. For example, in BBA FIA, NRI students pay Rs 22,620 in the first year against Rs 21,120 for Category A, and FSR (foreign) students pay Rs 28,620.",
      },
      {
        question: "Do PwBD students get a full fee waiver?",
        answer:
          "Close to it. PwBD candidates pay only a token facilities charge (Rs 130 for BBA FIA), with tuition, admission and examination fees waived entirely.",
      },
      {
        question: "What is missing compared to private ODL universities?",
        answer:
          "DU SOL's cost advantage comes with a more self-study, exam-driven format and less individualised placement support than some marketed private online universities, so students needing dedicated career services should compare both options.",
      },
      {
        question: "Can I pay DU SOL fees offline?",
        answer:
          "No, fee payment is done online through the admission portal using debit card, credit card or net banking; cash payments to agents are explicitly discouraged.",
      },
    ],
    sources: [
      { label: "DU SOL official website", href: "https://sol.du.ac.in/" },
      { label: "UGC DEB", href: "https://deb.ugc.ac.in/" },
    ],
  },
};

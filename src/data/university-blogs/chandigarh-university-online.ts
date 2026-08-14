import type { PostContent } from "@/data/posts";
import type { Article } from "@/lib/content";

const base = { reviewer: "Kartik Ahuja", reviewerRole: "Education Research Lead, AVEDU" };
const UPDATED = "2026-08-14";

export const chandigarhOnlineArticles: Article[] = [
  {
    slug: "chandigarh-university-online-courses-fees-2026-27",
    title: "Chandigarh University Online Courses & Fees 2026-27 Guide",
    excerpt:
      "Complete breakdown of Chandigarh University Online BBA, BCA, MBA and MCA fees, specialisations, EMI and scholarships for 2026-27.",
    category: "Fees & Scholarships",
    categorySlug: "fees-scholarships",
    tags: ["chandigarh-university-online", "fees", "bba", "bca", "mba", "mca"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "15 min",
    kind: "blog",
  },
  {
    slug: "chandigarh-university-online-admission-process-eligibility",
    title: "Chandigarh University Online Admission 2026: Step-by-Step",
    excerpt:
      "How to apply to Chandigarh University Online: eligibility, documents, registration steps and common mistakes to avoid.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["chandigarh-university-online", "admission", "eligibility", "application-process"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "14 min",
    kind: "blog",
  },
  {
    slug: "chandigarh-university-online-placements-career-outcomes",
    title: "Chandigarh University Online Placements & Career Scope",
    excerpt:
      "Placement support, hiring partners and salary ranges after a Chandigarh University Online BBA, BCA, MBA or MCA.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["chandigarh-university-online", "placements", "career", "salary"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "14 min",
    kind: "blog",
  },
  {
    slug: "is-chandigarh-university-online-worth-it",
    title: "Is Chandigarh University Online Worth It in 2026?",
    excerpt:
      "Scholarships, EMI options, degree recognition and how Chandigarh University Online compares with regular and other online degrees.",
    category: "Study Guides",
    categorySlug: "study-guides",
    tags: ["chandigarh-university-online", "worth-it", "scholarships", "comparison"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "13 min",
    kind: "blog",
  },
];

export const chandigarhOnlinePosts: Record<string, PostContent> = {
  "chandigarh-university-online-courses-fees-2026-27": {
    ...base,
    updated: UPDATED,
    intro:
      "Chandigarh University Online offers four undergraduate programmes (BBA, BBA Business Analytics, BCA, BA JMC) and postgraduate options including an MBA and MCA, all UGC-entitled and delivered through live and recorded lectures. Total programme fees range from roughly INR 1,55,000 to INR 1,77,000 for most courses, with an early bird scholarship of up to 25 percent and no-cost EMI available. This guide breaks down course-wise fees, specialisations and payment options for the 2026-27 admission cycle.",
    keyTakeaways: [
      "Online BBA total programme fee is INR 1,68,000-1,75,000, reducing to around INR 1,26,000-1,31,250 after the 25 percent early bird scholarship.",
      "Online BCA total fee is INR 1,77,000, dropping to about INR 1,41,600 after a 20-25 percent early bird discount.",
      "Online MBA is charged per semester at INR 41,250, with dual specialisation across 23 options.",
      "Online MCA total fee is INR 1,55,000 with a similar early bird discount and no-cost EMI.",
      "All programmes allow annual, semester-wise or no-cost EMI payment plans.",
      "BBA offers 15 specialisations with a dual-specialisation structure; BCA offers 5 specialisations including Data Science and Agentic AI.",
    ],
    sections: [
      {
        heading: "Chandigarh University Online: courses at a glance",
        blocks: [
          {
            kind: "p",
            text: "Chandigarh University Online, run through the Centre for Distance and Online Learning (CDOE), currently offers undergraduate and postgraduate degrees entirely online. All programmes are UGC-DEB entitled, and the university carries NAAC A+ accreditation.",
          },
          {
            kind: "table",
            caption: "Programmes offered online",
            head: ["Course", "Duration", "Total Fee (approx.)"],
            rows: [
              ["Online BBA", "3 Years", "INR 1,68,000 - 1,75,000"],
              ["Online BBA (Business Analytics)", "3 Years", "Similar to BBA, varies"],
              ["Online BCA", "3 Years", "INR 1,77,000"],
              ["Online BA (Journalism & Mass Comm.)", "3 Years", "INR 1,75,000"],
              ["Online MBA", "2 Years", "INR 41,250 / semester"],
              ["Online MCA", "2 Years", "INR 1,55,000"],
            ],
          },
          {
            kind: "links",
            title: "Explore the university and its courses",
            items: [
              { label: "Chandigarh University Online overview", href: "/universities/chandigarh-university-online" },
              { label: "Online MBA course details", href: "/courses/online-mba" },
              { label: "Online BCA course details", href: "/courses/online-bca" },
            ],
          },
        ],
      },
      {
        heading: "Online BBA fee structure and specialisations",
        blocks: [
          {
            kind: "p",
            text: "The Online BBA is a 3-year, 6-semester programme open to any 10+2 stream, with no entrance exam. Students can choose two specialisations out of 15 offered, giving cross-functional expertise.",
          },
          {
            kind: "table",
            caption: "BBA fee breakdown",
            head: ["Fee Component", "Amount (INR)"],
            rows: [
              ["Total Programme Fee (before discount)", "1,68,000 - 1,75,000"],
              ["Programme Fee (after 25% early bird)", "1,26,000 - 1,31,250"],
              ["Semester payment (after scholarship)", "Approx. 21,000 - 21,875"],
              ["Registration/prospectus fee (one-time)", "1,000"],
            ],
          },
          {
            kind: "list",
            items: [
              "Specialisations include Marketing, Digital Marketing, Human Resource Management, Banking and Finance, Fin-Tech, International Business, Entrepreneurship, Family Business, Artificial Intelligence, Business Analytics and General BBA.",
              "Students can pair specialisations such as Marketing with Digital Marketing, or Banking and Finance with Business Analytics.",
              "Curriculum includes case studies, capstone projects and internship exposure.",
            ],
          },
        ],
      },
      {
        heading: "Online BCA fee structure and specialisations",
        blocks: [
          {
            kind: "p",
            text: "The Online BCA is a 3-year, 6-semester, 120-credit programme, AICTE-approved and NAAC A+ accredited. Mathematics in class 12 is preferred but not mandatory.",
          },
          {
            kind: "table",
            caption: "BCA fee breakdown",
            head: ["Fee Detail", "Amount (INR)"],
            rows: [
              ["Admission fee", "500"],
              ["Total course fee", "1,77,000"],
              ["Total fee (after early bird scholarship)", "1,41,600"],
              ["Semester payment (after scholarship)", "Approx. 23,600"],
            ],
          },
          {
            kind: "list",
            items: [
              "Specialisations: Data Science, Agentic AI, AR & VR (Meta), Cloud Computing & Cyber Security, UI/UX Design.",
              "Learning includes live and recorded lectures, TA sessions, on-demand exams and career assistance.",
            ],
          },
        ],
      },
      {
        heading: "Get a personalised fee estimate",
        blocks: [
          {
            kind: "cta",
            title: "Confused between BBA and BCA fee plans?",
            body: "Share your budget and preferred specialisation and we will map out the exact semester-wise cost after scholarships.",
            buttonLabel: "Get Free Guidance",
          },
        ],
      },
      {
        heading: "Online MBA fee structure and specialisations",
        blocks: [
          {
            kind: "p",
            text: "The Online MBA is a 2-year postgraduate programme billed per semester rather than as one lump total, and is marketed as India's first online MBA with triple industry certification from PwC India, PMI and Harvard Business Publishing.",
          },
          {
            kind: "table",
            caption: "MBA fee and format",
            head: ["Item", "Detail"],
            rows: [
              ["Fee per semester", "INR 41,250"],
              ["Duration", "2 Years (4 semesters)"],
              ["Specialisations", "Dual specialisation, 23 options"],
              ["Payment modes", "Cards, net banking, RTGS/NEFT, no-cost EMI"],
            ],
          },
          {
            kind: "note",
            text: "Specialisation options include Marketing, Finance, HR Management, Business Analytics, IT Management, International Business, Banking and Insurance, Logistics and Supply Chain, and General Management.",
          },
        ],
      },
      {
        heading: "Online MCA fee structure",
        blocks: [
          {
            kind: "p",
            text: "The Online MCA is a 2-year, 4-semester programme for graduates in BCA, B.Sc. (Computer Science/IT), B.E./B.Tech. (CSE/IT), or any graduate with Mathematics, Business Mathematics, Programming or Statistics at 10+2 or UG level.",
          },
          {
            kind: "table",
            caption: "MCA fee breakdown",
            head: ["Fee Detail", "Amount (INR)"],
            rows: [
              ["Total course fee", "1,55,000"],
              ["After early bird discount (up to 25%)", "Reduced accordingly"],
              ["Payment options", "Yearly, semester-wise, no-cost EMI"],
            ],
          },
        ],
      },
      {
        heading: "Payment options across all programmes",
        blocks: [
          {
            kind: "list",
            items: [
              "One-time lump sum payment of the total programme fee.",
              "Annual payment split across the programme duration.",
              "Semester-wise payment aligned with each academic term.",
              "No-cost EMI plans, typically INR 3,800-3,900 per month for UG programmes.",
            ],
          },
          {
            kind: "promo",
            title: "Compare Chandigarh University Online fees with other universities",
            body: "See how BBA, BCA and MBA fees stack up against other UGC-entitled online universities before you commit.",
            ctaLabel: "Compare Universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "Scholarships that reduce your fee",
        blocks: [
          {
            kind: "p",
            text: "The most widely available scholarship is the early bird scholarship, offering up to 25 percent off the total programme fee for early admission. Additional scholarships are available for defence personnel and their dependents.",
          },
          {
            kind: "links",
            title: "Read more about scholarships and admission",
            items: [
              { label: "Scholarships at Chandigarh University Online", href: "/universities/chandigarh-university-online/scholarships" },
              { label: "Admission process guide", href: "/universities/chandigarh-university-online/admission" },
            ],
          },
        ],
      },
      {
        heading: "Registration fee and hidden costs to check",
        blocks: [
          {
            kind: "list",
            items: [
              "One-time registration/prospectus fee of roughly INR 500-1,000 charged along with the programme fee.",
              "Exam-related charges may apply separately depending on the on-demand examination schedule chosen.",
              "Always confirm the latest fee circular on the official portal before paying, since fee structures are revised across admission cycles.",
            ],
          },
          {
            kind: "note",
            text: "Fee figures in this guide are drawn from official Chandigarh University Online publications and may be revised for later intakes; verify on onlinecu.in before payment.",
          },
        ],
      },
      {
        heading: "Which course fits your budget and goals",
        blocks: [
          {
            kind: "table",
            caption: "Course choice by goal",
            head: ["Your Goal", "Suggested Course", "Approx. Fee After Scholarship"],
            rows: [
              ["Business/management career", "Online BBA", "INR 1,26,000 - 1,31,250"],
              ["IT/software career", "Online BCA", "INR 1,41,600"],
              ["Management upskilling with work-ex", "Online MBA", "INR 41,250 x 4 semesters"],
              ["Tech postgraduate upskilling", "Online MCA", "Approx. discounted from 1,55,000"],
            ],
          },
          {
            kind: "cta",
            title: "Still unsure which programme suits your career goal?",
            body: "Talk to our counsellors for a free, no-obligation comparison of course fit, fees and outcomes.",
            buttonLabel: "Talk to a Counsellor",
          },
        ],
      },
      {
        heading: "Next steps",
        blocks: [
          {
            kind: "p",
            text: "Once you have shortlisted a programme, the next step is understanding the eligibility criteria and admission workflow in detail, covered in our companion admission guide.",
          },
          {
            kind: "links",
            title: "Continue reading",
            items: [
              { label: "Chandigarh University Online admission process", href: "/blogs/chandigarh-university-online-admission-process-eligibility" },
              { label: "Placement outcomes", href: "/universities/chandigarh-university-online/placement" },
              { label: "Explore online BBA", href: "/courses/online-bba" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What is the total fee for Chandigarh University Online BBA?",
        answer:
          "The total programme fee is INR 1,68,000-1,75,000 before discount, reducing to approximately INR 1,26,000-1,31,250 after the 25 percent early bird scholarship.",
      },
      {
        question: "What is the total fee for Chandigarh University Online BCA?",
        answer:
          "The total course fee is INR 1,77,000, which comes down to about INR 1,41,600 after the 20-25 percent early bird discount.",
      },
      {
        question: "How is the Online MBA fee charged?",
        answer:
          "The Online MBA fee is charged per semester at INR 41,250 across four semesters, rather than as one upfront total.",
      },
      {
        question: "What is the Online MCA fee?",
        answer:
          "The total Online MCA fee is INR 1,55,000, payable yearly or semester-wise, with an early bird discount of up to 25 percent and a no-cost EMI option.",
      },
      {
        question: "Is EMI available for Chandigarh University Online courses?",
        answer:
          "Yes, a no-cost EMI plan is available across programmes, typically around INR 3,800-3,900 per month for undergraduate courses.",
      },
      {
        question: "Are there scholarships beyond the early bird discount?",
        answer:
          "Yes, additional scholarships are available for defence personnel and their dependents, alongside the standard early bird scholarship.",
      },
      {
        question: "Is there a registration fee separate from the programme fee?",
        answer:
          "Yes, a one-time registration or prospectus fee of roughly INR 500-1,000 is charged in addition to the programme fee.",
      },
      {
        question: "How many BBA specialisations does Chandigarh University Online offer?",
        answer:
          "It offers 15 specialisations with a dual-specialisation structure, allowing students to combine two specialisations such as Marketing and Digital Marketing.",
      },
    ],
    sources: [
      { label: "Chandigarh University Online official portal", href: "https://onlinecu.in" },
      { label: "CU Online MBA eligibility page", href: "https://onlinecu.in/blog/cu/eligibility-criteria-for-online-mba.php" },
    ],
    cta: "Want a semester-by-semester fee estimate for your chosen course? Share your details and we will send a personalised breakdown.",
  },

  "chandigarh-university-online-admission-process-eligibility": {
    ...base,
    updated: UPDATED,
    intro:
      "Admission to Chandigarh University Online for BBA, BCA, BA JMC, MBA and MCA runs entirely through the official onlinecu.in portal, with no entrance exam for most programmes and merit-based selection on the qualifying degree. This guide walks through registration, document upload, fee payment and the mistakes that most commonly delay applications. Eligibility varies by programme, from a plain 10+2 pass for undergraduate courses to a relevant bachelor's degree for the MBA and MCA.",
    keyTakeaways: [
      "No entrance exam is required for any Chandigarh University Online programme; admission is merit-based on the qualifying degree.",
      "The process has four core stages: register online, fill the application form, pay the fee, upload documents and submit.",
      "Document upload activates only after fee payment is completed, a step many applicants miss.",
      "UG eligibility is 10+2 from a recognised board in any stream; Mathematics is preferred but not mandatory for BCA.",
      "MBA eligibility is any bachelor's degree; MCA needs a BCA/B.Sc./B.E./B.Tech in a computing-related field or Maths/Statistics background.",
    ],
    sections: [
      {
        heading: "Who can apply: eligibility by programme",
        blocks: [
          {
            kind: "table",
            caption: "Eligibility snapshot",
            head: ["Programme", "Minimum Eligibility", "Entrance Exam"],
            rows: [
              ["Online BBA / BCA / BA JMC", "10+2 from a recognised board, any stream", "Not required"],
              ["Online MBA", "Bachelor's degree from a recognised university (or CA/ICWA)", "Not required"],
              ["Online MCA", "BCA/B.Sc.(CS/IT)/B.E./B.Tech.(CSE/IT), or any graduate with Maths/Stats/Programming background", "Not required"],
            ],
          },
          {
            kind: "note",
            text: "There is generally no minimum or maximum age limit for these online programmes, though applicants should confirm current guidelines before applying.",
          },
        ],
      },
      {
        heading: "Is Mathematics mandatory for the Online BCA?",
        blocks: [
          {
            kind: "p",
            text: "No. Students from Commerce, Arts, or Biology streams can enrol in the Online BCA as long as they meet the minimum aggregate marks, generally 45-50 percent as per university guidelines. Mathematics in class 12 is preferred because it makes programming and logic easier to grasp, but it is not a mandatory subject.",
          },
          {
            kind: "list",
            items: [
              "Commerce students often adapt quickly to database and business-computing modules.",
              "Arts students bring strong communication skills useful for documentation and UI/UX work.",
              "Biology-stream students typically transfer scientific-method thinking to technical logic.",
            ],
          },
        ],
      },
      {
        heading: "Step-by-step admission process",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Visit the official portal at onlinecu.in and click Apply Now.",
              "Register with your full name, email ID, mobile number, chosen programme and date of birth.",
              "Receive your login credentials (user ID and password) via SMS and email.",
              "Log in and fill the application form: personal details, contact details and qualification details.",
              "Pay the programme or semester fee online through cards, net banking, or RTGS/NEFT.",
              "Upload scanned documents — this step activates only after fee payment succeeds.",
              "Submit the form and wait for the university's verification and admission confirmation.",
            ],
          },
          {
            kind: "table",
            caption: "Fee payment and confirmation flow",
            head: ["Stage", "What You Do", "What The University Does"],
            rows: [
              ["Form filling", "Enter personal and academic details", "Receives application"],
              ["Fee payment", "Pay programme fee online", "Activates document upload"],
              ["Document upload", "Upload required documents", "Checks document clarity"],
              ["Confirmation", "Receive update by email/SMS", "Confirms admission status"],
            ],
          },
        ],
      },
      {
        heading: "Documents you need ready",
        blocks: [
          {
            kind: "list",
            items: [
              "Scanned passport-size colour photograph.",
              "Scanned original qualifying examination certificate/marksheet (10+2 for UG, graduation for MBA/MCA).",
              "Proof of date of birth: 10th marksheet, school leaving certificate, or transfer/character certificate.",
              "Government ID proof such as Aadhaar, PAN or passport.",
              "For MBA/MCA: graduation marksheet and degree/provisional certificate.",
            ],
          },
          {
            kind: "note",
            text: "Ensure every detail entered in the application form matches your uploaded documents exactly — mismatches are the most common cause of delayed admissions.",
          },
        ],
      },
      {
        heading: "Get help with your application",
        blocks: [
          {
            kind: "cta",
            title: "Need help filling your application correctly the first time?",
            body: "Our counsellors can review your documents and eligibility before you submit.",
            buttonLabel: "Get Free Guidance",
          },
        ],
      },
      {
        heading: "Common mistakes that delay applications",
        blocks: [
          {
            kind: "list",
            items: [
              "Uploading blurred, cropped, or incomplete documents.",
              "Entering an incorrect email ID or mobile number at registration.",
              "Selecting the wrong programme during registration.",
              "Leaving qualification details incomplete in the form.",
              "Forgetting to upload documents after fee payment — a step that confuses many applicants.",
            ],
          },
        ],
      },
      {
        heading: "Is work experience mandatory for the MBA?",
        blocks: [
          {
            kind: "p",
            text: "No. The standard Chandigarh University Online MBA is open to both fresh graduates and working professionals; there is no work-experience requirement and no upper age limit.",
          },
        ],
      },
      {
        heading: "MCA eligibility in detail",
        blocks: [
          {
            kind: "table",
            caption: "MCA eligibility routes",
            head: ["Background", "Requirement"],
            rows: [
              ["Computing graduates", "BCA / B.Sc. (CS or IT) / B.E. or B.Tech. (CSE or IT)"],
              ["Any other graduate", "Mathematics, Business Mathematics, Programming or Statistics at 10+2 or graduation level"],
              ["Selection process", "100% online, merit-based"],
            ],
          },
        ],
      },
      {
        heading: "Compare before you commit",
        blocks: [
          {
            kind: "promo",
            title: "Compare Chandigarh University Online with other universities",
            body: "Check eligibility, fees and placement support side-by-side before finalising your admission.",
            ctaLabel: "Compare Universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "After you submit: what happens next",
        blocks: [
          {
            kind: "p",
            text: "After document upload and submission, a confirmation is sent to your registered mobile number and email. The university then reviews eligibility and document accuracy before confirming admission and issuing LMS login credentials.",
          },
          {
            kind: "list",
            items: [
              "Save your application confirmation page and payment receipt for future reference.",
              "Check your email and SMS regularly during the verification period.",
              "Once confirmed, you receive LMS access to begin live and recorded classes.",
            ],
          },
        ],
      },
      {
        heading: "Related reading",
        blocks: [
          {
            kind: "links",
            title: "Plan your next steps",
            items: [
              { label: "Courses and fees 2026-27", href: "/blogs/chandigarh-university-online-courses-fees-2026-27" },
              { label: "Placement and career outcomes", href: "/blogs/chandigarh-university-online-placements-career-outcomes" },
              { label: "Examination pattern", href: "/universities/chandigarh-university-online/examination-pattern" },
              { label: "Explore online MCA", href: "/courses/online-mca" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is there an entrance exam for Chandigarh University Online admission?",
        answer:
          "No. Admission to all Chandigarh University Online programmes, including BBA, BCA, MBA and MCA, is merit-based on the qualifying degree without any entrance exam.",
      },
      {
        question: "Is Mathematics compulsory for Online BCA admission?",
        answer:
          "No. Students from Commerce, Arts or Biology streams can apply as long as they meet the minimum aggregate marks; Mathematics is preferred but not mandatory.",
      },
      {
        question: "When do I pay the fee during the application process?",
        answer:
          "Fee payment happens after the application form is filled and before document upload — document upload activates only once payment is successful.",
      },
      {
        question: "What documents are needed for admission?",
        answer:
          "A passport-size photograph, qualifying examination marksheet, proof of date of birth, and a government ID proof are required, along with graduation certificates for PG programmes.",
      },
      {
        question: "Is work experience required for the Online MBA?",
        answer:
          "No, the standard Online MBA is open to both fresh graduates and working professionals with no work-experience requirement.",
      },
      {
        question: "What is the eligibility for Online MCA without a computing degree?",
        answer:
          "Graduates in any discipline can apply if they studied Mathematics, Business Mathematics, Programming or Statistics at either the 10+2 or graduation level.",
      },
      {
        question: "How long does admission confirmation take?",
        answer:
          "After document upload and submission, the university verifies eligibility and documents before sending confirmation by email and SMS; exact timelines vary by intake.",
      },
      {
        question: "Can I apply without a specific age limit?",
        answer:
          "Yes, there is generally no specific minimum or maximum age limit for these online programmes, though applicants should verify current guidelines before applying.",
      },
    ],
    sources: [
      { label: "Chandigarh University Online admission portal", href: "https://onlinecu.in" },
      { label: "CU Online MBA eligibility page", href: "https://onlinecu.in/blog/cu/eligibility-criteria-for-online-mba.php" },
    ],
    cta: "Ready to start your application? Get a free document and eligibility check before you submit.",
  },

  "chandigarh-university-online-placements-career-outcomes": {
    ...base,
    updated: UPDATED,
    intro:
      "Chandigarh University Online runs a dedicated placement cell offering resume workshops, mock interviews, LinkedIn masterclasses and internship support across its BBA, BCA, MBA and MCA programmes. The university reports over 300 hiring partners for its BBA and MBA cohorts and connects BCA graduates to recruiters such as Amazon, Dell, Cognizant and HCL. This guide covers the career services on offer and realistic salary ranges by role.",
    keyTakeaways: [
      "Placement support includes resume workshops, LinkedIn optimisation, mock interviews, career coaching and internship assistance.",
      "The BBA and MBA programmes report over 300 hiring partners connected to career services.",
      "Reported BCA hiring partners include Amazon, Dell, Cognizant, HCL, Hewlett Packard, Google, John Deere and Zomato.",
      "Software Developer, Business Analyst and Financial Analyst roles show among the widest salary ranges reported.",
      "Placement outcomes still depend on specialisation, individual performance and internships completed during the course.",
    ],
    sections: [
      {
        heading: "Career services offered to online students",
        blocks: [
          {
            kind: "p",
            text: "Chandigarh University Online positions its placement cell as a core part of the programme rather than an add-on, aiming to bridge academics and employability for a fully online cohort.",
          },
          {
            kind: "list",
            items: [
              "Resume-writing workshops tailored to the chosen specialisation.",
              "LinkedIn masterclasses to optimise professional profiles.",
              "Mock interview practice with feedback.",
              "Career coaching sessions from industry experts.",
              "Job and internship support connected to recruiting partners.",
            ],
          },
        ],
      },
      {
        heading: "BCA hiring partners and roles",
        blocks: [
          {
            kind: "table",
            caption: "Reported BCA hiring partners",
            head: ["Partner", "Partner"],
            rows: [
              ["Amazon", "Hitachi"],
              ["Dell", "Cognizant"],
              ["John Deere", "HCL"],
              ["Schindler", "Hewlett Packard"],
              ["Zomato", "Google"],
            ],
          },
          {
            kind: "table",
            caption: "BCA career outcomes and salary ranges",
            head: ["Job Role", "Salary Package (INR)"],
            rows: [
              ["Software Developer", "4.0 LPA - 9.0 LPA"],
              ["Web Developer", "3.0 LPA - 6.0 LPA"],
              ["System Analyst", "5.0 LPA - 13.4 LPA"],
              ["Database Administrator", "4.0 LPA - 10.0 LPA"],
              ["Project Manager", "5.0 LPA - 12.5 LPA"],
            ],
          },
          {
            kind: "note",
            text: "Salary figures are reported market ranges (source: Glassdoor) and are not guaranteed placement outcomes from the university.",
          },
        ],
      },
      {
        heading: "BBA career outcomes",
        blocks: [
          {
            kind: "p",
            text: "The Online BBA cites a network of over 300 hiring partners across sectors such as BFSI, FMCG, e-commerce and IT-enabled services, with placement outcomes influenced by specialisation choice and internship performance.",
          },
          {
            kind: "table",
            caption: "BBA career outcomes and salary ranges",
            head: ["Job Role", "Salary Range (INR)"],
            rows: [
              ["Business Analyst", "4 LPA - 19 LPA"],
              ["Marketing Manager", "4.5 LPA - 18 LPA"],
              ["Human Resources Specialist", "3 LPA - 21 LPA"],
              ["Financial Analyst", "3 LPA - 21.4 LPA"],
              ["Operations Manager", "4.5 LPA - 18.8 LPA"],
              ["Management Consultant", "5.5 LPA - 23.8 LPA"],
            ],
          },
        ],
      },
      {
        heading: "Talk to a career counsellor",
        blocks: [
          {
            kind: "cta",
            title: "Not sure which specialisation offers the best career fit?",
            body: "Get a free consultation matched to your target role and current background.",
            buttonLabel: "Talk to a Counsellor",
          },
        ],
      },
      {
        heading: "BBA specialisation to job-role mapping",
        blocks: [
          {
            kind: "table",
            caption: "Specialisation and popular roles",
            head: ["Specialisation", "Popular Job Roles"],
            rows: [
              ["Marketing / Digital Marketing", "Marketing Executive, Digital Marketing Associate"],
              ["Human Resource Management", "HR Executive, Recruitment Associate"],
              ["Banking and Finance / Fin-Tech", "Financial Analyst, Banking Associate"],
              ["Entrepreneurship", "Startup Founder, Business Consultant"],
            ],
          },
        ],
      },
      {
        heading: "MBA and MCA career support",
        blocks: [
          {
            kind: "p",
            text: "The Online MBA integrates certification content from PwC India, PMI and Harvard Business Publishing directly into the curriculum, alongside resume preparation, interview readiness coaching, internship opportunities and career counselling backed by over 300 hiring partners.",
          },
          {
            kind: "p",
            text: "Beyond entry-level IT roles, an Online MCA also serves as groundwork for further specialisation in Data Science, Cyber Security or Cloud Computing, expanding long-term career options.",
          },
        ],
      },
      {
        heading: "Explore related courses",
        blocks: [
          {
            kind: "promo",
            title: "See detailed placement records by university",
            body: "Compare hiring partners and average packages across UGC-entitled online universities.",
            ctaLabel: "View Placement Data",
            href: "/universities/chandigarh-university-online/placement",
          },
        ],
      },
      {
        heading: "Skill-building built into the curriculum",
        blocks: [
          {
            kind: "list",
            items: [
              "Case studies and project-based learning across every semester.",
              "Capstone projects in the final semester applying classroom theory to real business scenarios.",
              "Internship opportunities to strengthen the resume before graduation.",
              "80+ Teaching Assistant sessions per MBA semester for academic support.",
            ],
          },
        ],
      },
      {
        heading: "What determines your actual placement outcome",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "The specialisation chosen and its current industry demand.",
              "Internships and projects completed during the programme.",
              "Individual performance in interviews and assessments.",
              "How actively you use career services such as resume workshops and mock interviews.",
            ],
          },
          {
            kind: "links",
            title: "Keep exploring",
            items: [
              { label: "Courses and fees 2026-27", href: "/blogs/chandigarh-university-online-courses-fees-2026-27" },
              { label: "Admission process", href: "/blogs/chandigarh-university-online-admission-process-eligibility" },
              { label: "Explore online MBA", href: "/courses/online-mba" },
              { label: "Explore online BBA", href: "/courses/online-bba" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does Chandigarh University Online guarantee placements?",
        answer:
          "No university can guarantee placement. Chandigarh University Online provides placement assistance, resume support, mock interviews and hiring-partner connections, but outcomes depend on specialisation, performance and internships.",
      },
      {
        question: "Which companies hire Chandigarh University Online BCA graduates?",
        answer:
          "Reported hiring partners include Amazon, Dell, Cognizant, HCL, Hewlett Packard, Google, John Deere, Schindler, Zomato and Hitachi, among others.",
      },
      {
        question: "What is the salary range for a Software Developer role after BCA?",
        answer:
          "Reported market salary ranges span roughly INR 4.0 LPA to INR 9.0 LPA for entry-level Software Developer roles.",
      },
      {
        question: "How many hiring partners does the BBA/MBA programme have?",
        answer:
          "The university cites over 300 hiring partners connected to its BBA and MBA career services.",
      },
      {
        question: "Does the MBA include industry certifications?",
        answer:
          "Yes, the Online MBA integrates certification content from PwC India, PMI and Harvard Business Publishing into the curriculum.",
      },
      {
        question: "Is an internship compulsory during the programme?",
        answer:
          "Internship opportunities are provided as part of career support and strongly encouraged, though specific mandatory requirements should be verified with the university for your programme.",
      },
      {
        question: "Which specialisation has the widest salary range in BBA?",
        answer:
          "Management Consultant and Business Analyst roles show among the widest reported ranges, up to roughly INR 23.8 LPA and INR 19 LPA respectively at the senior end.",
      },
    ],
    sources: [
      { label: "Chandigarh University Online official portal", href: "https://onlinecu.in" },
      { label: "Salary data reference: Glassdoor", href: "https://www.glassdoor.co.in" },
    ],
    cta: "Want a realistic placement outlook for your chosen specialisation? Talk to our counsellors for a personalised assessment.",
  },

  "is-chandigarh-university-online-worth-it": {
    ...base,
    updated: UPDATED,
    intro:
      "Chandigarh University Online is worth considering if you want a UGC-entitled, NAAC A+ accredited degree with flexible fees, early bird scholarships and no-cost EMI, without the cost of hostel and travel that a regular on-campus programme carries. It is a strong fit for working professionals and career changers, though the flexibility trade-off means less in-person campus interaction. This guide compares scholarships, fee savings and the online-versus-regular decision to help you judge fit.",
    keyTakeaways: [
      "Chandigarh University Online is UGC-DEB entitled, NAAC A+ accredited, and holds AICTE approval for its technical programmes.",
      "The early bird scholarship offers up to 25 percent off, with additional support for defence personnel and dependents.",
      "Online BBA saves on hostel and travel costs entirely compared with the regular on-campus BBA.",
      "No-cost EMI is available across programmes, easing the pressure of upfront lump-sum payment.",
      "The right fit depends on your goal: working professionals and flexible learners benefit most; those wanting an intensive campus experience may prefer on-campus options.",
    ],
    sections: [
      {
        heading: "Recognition and accreditation check",
        blocks: [
          {
            kind: "p",
            text: "Before evaluating cost, the recognition status matters most. Chandigarh University Online programmes are UGC-entitled, NAAC A+ graded, and technical programmes such as BCA and MCA additionally carry AICTE approval.",
          },
          {
            kind: "list",
            items: [
              "Entitled by UGC for online degree delivery.",
              "Approved by AICTE for technical programmes such as BCA and MCA.",
              "Graded A+ by NAAC.",
              "Recognised by WES for international credential evaluation.",
              "Ranked by NIRF (university NIRF ranking around 20 as per available data).",
            ],
          },
        ],
      },
      {
        heading: "Online BBA vs regular on-campus BBA",
        blocks: [
          {
            kind: "table",
            caption: "Online vs regular BBA comparison",
            head: ["Feature", "Online BBA", "Regular BBA"],
            rows: [
              ["Learning mode", "Online", "Classroom"],
              ["Flexibility", "High", "Limited"],
              ["Tuition cost", "Lower", "Higher"],
              ["Travel & hostel expenses", "Not required", "Required"],
            ],
          },
          {
            kind: "p",
            text: "The fee difference is largely explained by infrastructure and on-campus facility costs bundled into the regular programme, along with hostel and travel expenses that the online mode eliminates entirely.",
          },
        ],
      },
      {
        heading: "Scholarships and cost savings",
        blocks: [
          {
            kind: "table",
            caption: "Scholarship snapshot",
            head: ["Scholarship", "Benefit"],
            rows: [
              ["Early Bird Scholarship", "Up to 25% off total programme fee"],
              ["Defence personnel/dependents", "Additional scholarship support"],
              ["No-cost EMI", "Spreads fee over the programme with no added interest"],
            ],
          },
          {
            kind: "chart",
            title: "Illustrative BBA fee before vs after early bird scholarship",
            unit: "INR",
            note: "Based on published Chandigarh University Online BBA fee figures.",
            data: [
              { label: "Before scholarship", value: 175000, display: "INR 1,75,000" },
              { label: "After 25% scholarship", value: 131250, display: "INR 1,31,250" },
            ],
          },
        ],
      },
      {
        heading: "See if you qualify for a scholarship",
        blocks: [
          {
            kind: "cta",
            title: "Check your scholarship eligibility",
            body: "Early bird windows are time-limited — find out how much you can save before applying.",
            buttonLabel: "Check Eligibility",
          },
        ],
      },
      {
        heading: "Where the online mode genuinely helps",
        blocks: [
          {
            kind: "list",
            items: [
              "Working professionals who cannot leave their job for a full-time degree.",
              "Students who want to save on hostel, mess and travel costs.",
              "Learners who prefer revisiting recorded lectures at their own pace.",
              "Career changers wanting industry-aligned specialisations like Data Science, Agentic AI or Fin-Tech without relocating.",
            ],
          },
        ],
      },
      {
        heading: "Where it may fall short",
        blocks: [
          {
            kind: "list",
            items: [
              "Less immersive campus life and peer interaction compared with a residential programme.",
              "Live-session attendance still requires discipline alongside a job or other commitments.",
              "Placement outcomes vary by specialisation and individual initiative, as with any online programme.",
            ],
          },
          {
            kind: "note",
            text: "None of this makes the degree less valid — UGC-entitled online degrees carry the same recognition as their on-campus equivalent for employment and further study.",
          },
        ],
      },
      {
        heading: "How it compares with other online options",
        blocks: [
          {
            kind: "p",
            text: "Many students comparing Chandigarh University Online also check other UGC-entitled online universities for BBA and MBA programmes, since fee structures and specialisation depth differ from one institution to another.",
          },
          {
            kind: "promo",
            title: "Compare fees, specialisations and placement support",
            body: "See a side-by-side view of Chandigarh University Online against other leading online universities.",
            ctaLabel: "Compare Universities",
            href: "/compare/universities",
          },
        ],
      },
      {
        heading: "A quick checklist before you enrol",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Confirm the exact programme and specialisation appear in the current UGC/DEB listing.",
              "Check the latest fee circular and applicable scholarships for your intake.",
              "Match the specialisation to your career goal, not just what sounds trending.",
              "Verify placement support specifics for your chosen programme, not just university-wide numbers.",
              "Decide whether you can realistically commit the required weekly study hours alongside work.",
            ],
          },
        ],
      },
      {
        heading: "Final take and further reading",
        blocks: [
          {
            kind: "p",
            text: "Chandigarh University Online is worth it for students prioritising flexibility, verified accreditation and lower total cost, and less suited to those who specifically want a residential campus experience. Compare your shortlisted specialisation, fee plan and career goal before enrolling.",
          },
          {
            kind: "links",
            title: "Related guides",
            items: [
              { label: "Courses and fees 2026-27", href: "/blogs/chandigarh-university-online-courses-fees-2026-27" },
              { label: "Admission process and eligibility", href: "/blogs/chandigarh-university-online-admission-process-eligibility" },
              { label: "Placement and career outcomes", href: "/blogs/chandigarh-university-online-placements-career-outcomes" },
              { label: "Explore online BCA", href: "/courses/online-bca" },
              { label: "Browse all blogs", href: "/blogs" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a Chandigarh University Online degree UGC-recognised?",
        answer:
          "Yes, Chandigarh University Online programmes are UGC-entitled, and technical programmes such as BCA and MCA additionally carry AICTE approval, with NAAC A+ accreditation for the university.",
      },
      {
        question: "How much can I save with the early bird scholarship?",
        answer:
          "The early bird scholarship offers up to 25 percent off the total programme fee, for example reducing the BBA fee from around INR 1,75,000 to approximately INR 1,31,250.",
      },
      {
        question: "Is Chandigarh University Online cheaper than the regular on-campus programme?",
        answer:
          "Yes, tuition is generally lower and there are no hostel or travel costs, since infrastructure and on-campus facility charges that inflate the regular programme fee do not apply to the online mode.",
      },
      {
        question: "Does the online degree carry the same value as a regular degree for jobs?",
        answer:
          "A UGC-entitled online degree is treated as equivalent to the corresponding on-campus degree for employment and further study, per UGC's equivalence framework, provided the programme is correctly entitled.",
      },
      {
        question: "Are there scholarships beyond the early bird discount?",
        answer:
          "Yes, additional scholarship support is available for defence personnel and their dependents, apart from the standard early bird scholarship.",
      },
      {
        question: "Is no-cost EMI genuinely interest-free?",
        answer:
          "The university markets its EMI plan as no-cost, meaning the total amount paid via EMI installments equals the fee itself without added interest; confirm exact terms on the official portal before opting in.",
      },
      {
        question: "Who should avoid the online mode?",
        answer:
          "Students specifically seeking an intensive, in-person campus experience with daily classroom interaction may find the online mode less suited to their expectations.",
      },
      {
        question: "How does it compare with LPU Online for BBA?",
        answer:
          "Both universities are established names offering online BBA programmes with UGC entitlement, but their fee structures and specialisation lists differ — compare both before deciding.",
      },
    ],
    sources: [
      { label: "Chandigarh University Online official portal", href: "https://onlinecu.in" },
    ],
    cta: "Weighing Chandigarh University Online against another university? Send us your shortlist and we will help you compare fees and outcomes side by side.",
  },
};

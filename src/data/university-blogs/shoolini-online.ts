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
  /* ============================ POST 1 ============================ */
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
        kind: "cta_placeholder",
      },
    ],
    faqs: [],
    sources: [],
  } as unknown as PostContent,
};

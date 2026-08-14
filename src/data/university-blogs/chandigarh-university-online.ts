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
              ["Online BBA (Business Analytics)", "3 Years", "Similar to BBA, varies by specialisation"],
              ["Online BCA", "3 Years", "INR 1,77,000"],
              ["Online BA (Journalism & Mass Comm.)", "3 Years", "INR 1,75,000"],
              ["Online MBA", "2 Years", "INR 41,250 per semester"],
              ["Online MCA", "2 Years", "INR 1,55,000"],
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
              ["Total Programme Fee (Before Discount)", "1,68,000 - 1,75,000"],
              ["Programme Fee (After 25% Early Bird Discount)", "1,26,000 - 1,31,250"],
              ["Semester Payment (6 semesters)", "Approx. 21,000 - 21,875"],
              ["Registration/Prospectus Fee (one-time)", "1,000"],
            ],
          },
          {
            kind: "list",
            items: [
              "Core specialisations: Marketing, Digital Marketing, Human Resource Management, Banking and Finance, Fin-Tech, International Business, Entrepreneurship, Family Business, Artificial Intelligence, Business Analytics, and General BBA.",
              "Students can pair specialisations such as Marketing with Digital Marketing, or Banking and Finance with Business Analytics.",
              "Curriculum includes case studies, capstone projects and an internship component.",
            ],
          },
        ],
      },
      {
        heading: "Online BCA fee structure and specialisations",
        blocks: [
          {
            kind: "p",
            text: "The Online BCA is also a 3-year, 6-semester, 120-credit programme. Mathematics in class 12 is preferred but not mandatory for admission.",
          },
          {
            kind: "table",
            caption: "BCA fee breakdown",
            head: ["Fee Detail", "Amount (INR)"],
            rows: [
              ["Admission Fee", "500"],
              ["Total Course Fee", "1,77,000"],
              ["Total Fee (After Early Bird Scholarship)", "1,41,600"],
              ["Semester Payment (After Scholarship)", "Approx. 23,600"],
            ],
          },
          {
            kind: "list",
            items: [
              "BCA specialisations: Data Science, Agentic AI, AR & VR (Meta), Cloud Computing & Cyber Security, UI/UX Design.",
              "Learning methodology includes live and recorded lectures, TA sessions, on-demand exams and career assistance.",
            ],
          },
        ],
      },
      {
        kind: undefined as unknown as never,
        heading: "placeholder",
        blocks: [],
      } as unknown as { heading: string; blocks: never[] },
    ].filter((s) => (s as { heading: string }).heading !== "placeholder") as never as {
      heading: string;
      blocks: unknown[];
    }[],
    faqs: [],
  } as unknown as PostContent,
};

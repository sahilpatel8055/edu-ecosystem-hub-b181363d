import type { PostContent } from "@/data/posts";
import type { Article } from "@/lib/content";

const base = { reviewer: "Kartik Ahuja", reviewerRole: "Education Research Lead, AVEDU" };
const UPDATED = "2026-08-14";

export const ignouArticles: Article[] = [
  {
    slug: "ignou-online-courses-fees-2026-27",
    title: "IGNOU Online Courses & Fees 2026-27: Complete Guide",
    excerpt:
      "IGNOU UG, PG, diploma and certificate fees for 2026-27, the revised fee hike, and how the online admission cycle works.",
    category: "Fees & Scholarships",
    categorySlug: "fees-scholarships",
    tags: ["ignou", "ignou-fees", "ignou-online-courses", "fees-2026-27"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "15 min",
    kind: "blog",
  },
  {
    slug: "ignou-admission-process-eligibility-2026",
    title: "IGNOU Admission Process & Eligibility 2026: Step by Step",
    excerpt:
      "How to apply for IGNOU online and ODL courses in 2026 -- eligibility for UG, PG, diploma and certificate programmes, documents and DEB-ID.",
    category: "Admission Guidance",
    categorySlug: "admission-guidance",
    tags: ["ignou", "ignou-admission", "ignou-eligibility", "deb-id"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "14 min",
    kind: "blog",
  },
  {
    slug: "ignou-online-mba-career-placement",
    title: "IGNOU Online MBA: Career Scope, Salary & Placement Support",
    excerpt:
      "What the IGNOU Online MBA (MBAOL) offers -- fees, specialisations, career paths, salary ranges and how placement support actually works.",
    category: "Career Growth",
    categorySlug: "career-growth",
    tags: ["ignou-mba", "ignou-online-mba", "ignou-placement", "mbaol"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "14 min",
    kind: "blog",
  },
  {
    slug: "is-ignou-worth-it-scholarships-comparison",
    title: "Is IGNOU Worth It in 2026? Fee Concessions & Comparison",
    excerpt:
      "IGNOU's affordability, SC/ST fee concession, recognition (UGC-DEB, NAAC A++, AICTE) and how it compares with other options in 2026.",
    category: "Study Guides",
    categorySlug: "study-guides",
    tags: ["ignou", "is-ignou-worth-it", "ignou-scholarship", "ignou-recognition"],
    author: "Kartik Ahuja",
    authorSlug: "kartik-ahuja",
    date: "2026-08-14",
    readingTime: "13 min",
    kind: "blog",
  },
];

export const ignouPosts: Record<string, PostContent> = {
  /* ---------------------------------------------------------------- */
  "ignou-online-courses-fees-2026-27": {
    ...base,
    updated: UPDATED,
    intro:
      "IGNOU online courses and fees for 2026-27 were revised by the Planning and Development Division in a notification dated 25 May 2026, applicable from the July 2026 admission cycle and carried forward to January 2027. The hike is mostly between Rs 200 and Rs 500 per programme, though a handful of specialised postgraduate programmes rose by Rs 1,000 or more. This guide sets out the updated UG, PG, diploma and certificate fee tables so you know what to budget before you register.",
    keyTakeaways: [
      "IGNOU revised UG, PG, Diploma, Certificate and Appreciation programme fees effective July 2026, valid through January 2027.",
      "Most fee increases fall between Rs 200 and Rs 500; a few specialised PG programmes rose by Rs 1,000 or more.",
      "The Online MBA (MBAOL) is charged per semester: Rs 14,000 each for semesters 1, 2 and 4, and Rs 16,000 for semester 3, a total of Rs 58,000.",
      "The non-refundable application/registration fee for most UG programmes such as BCom is Rs 300.",
      "IGNOU gives a 50% fee concession to eligible SC/ST students on programme fees.",
      "Always confirm the exact figure on the official IGNOU admission portal before paying -- fee codes vary by specialisation.",
    ],
    sections: [
      {
        heading: "IGNOU fee update 2026: what changed",
        blocks: [
          {
            kind: "p",
            text: "IGNOU's Planning and Development Division announced revised programme fees for the July 2026 and January 2027 admission cycles in a notification dated 25 May 2026. The revision covers undergraduate, postgraduate, PG diploma, diploma, certificate and appreciation programmes.",
          },
          {
            kind: "list",
            items: [
              "New fees apply from the July 2026 admission cycle.",
              "The same revised fees carry over to the January 2027 session.",
              "Most programmes see a hike of Rs 200 to Rs 500.",
              "Some specialised PG and PG Diploma programmes increase by Rs 1,000 or more.",
              "UG, PG, Diploma, Certificate and Appreciation programmes are all included in the revision.",
            ],
          },
        ],
      },
      {
        heading: "Why students are searching IGNOU fees in 2026",
        blocks: [
          {
            kind: "p",
            text: "IGNOU is widely chosen for low-cost distance and online learning in India, so any fee revision draws attention. After the May 2026 notice, students are commonly asking how much fees increased, which course stays cheapest, and whether IGNOU is still affordable for 2026-27 admission.",
          },
          {
            kind: "note",
            text: "Even after the revision, IGNOU remains one of the most cost-effective universities in India for UG and PG study.",
          },
        ],
      },
      {
        heading: "Updated IGNOU postgraduate programme fees 2026-27",
        blocks: [
          {
            kind: "p",
            text: "Postgraduate fees below reflect the revised 2026-27 structure for selected programme codes. Figures marked LER (larger effective revision) were among the programmes with a bigger jump.",
          },
          {
            kind: "table",
            caption: "Selected IGNOU PG programme fees, existing vs revised",
            head: ["Programme code", "Existing fee", "Revised fee 2026-27", "Increase"],
            rows: [
              ["MCOM / MCOMOL", "Rs 10,000", "Rs 10,200", "Rs 200"],
              ["MAEG / MEG / MEGOL", "Rs 8,000", "Rs 8,200", "Rs 200"],
              ["MAJEM", "Rs 12,500", "Rs 13,500", "Rs 1,000 (LER)"],
              ["MAMIDI", "Rs 6,000", "Rs 7,000", "Rs 1,000 (LER)"],
              ["MAPFHS", "Rs 6,000", "Rs 7,000", "Rs 1,000 (LER)"],
              ["MSCGI", "Rs 15,700", "Rs 16,000", "Rs 300"],
              ["MARD / MARDOL", "Rs 7,500", "Rs 8,000", "Rs 500"],
              ["MATS / MATSOL", "Rs 7,000", "Rs 7,500", "Rs 500"],
            ],
          },
          {
            kind: "note",
            text: "This is a representative extract, not the full list. Match your exact programme code on the official IGNOU admission portal before paying.",
          },
        ],
      },
      {
        heading: "Updated IGNOU undergraduate programme fees 2026-27",
        blocks: [
          {
            kind: "p",
            text: "Undergraduate fees mostly rose by Rs 200 per programme in the 2026-27 revision, with a smaller set of programmes rising by Rs 500.",
          },
          {
            kind: "table",
            caption: "Selected IGNOU UG programme fees, existing vs revised",
            head: ["Programme code", "Existing fee", "Revised fee 2026-27", "Increase"],
            rows: [
              ["BAM / BAG", "Rs 4,800", "Rs 5,000", "Rs 200"],
              ["BCOMF / BCOMG / BCOMFOL", "Rs 4,800", "Rs 5,000", "Rs 200"],
              ["BBA", "Rs 10,300", "Rs 10,500", "Rs 200"],
              ["BSCM / BSCG", "Rs 6,300", "Rs 6,500", "Rs 200"],
              ["BSWG / BFSW / BSWGOL", "Rs 6,500", "Rs 6,700", "Rs 200"],
              ["BAFEDU", "Rs 5,000", "Rs 5,500", "Rs 500"],
              ["BFTTM / BFTTMOL", "Rs 5,000", "Rs 5,500", "Rs 500"],
            ],
          },
          {
            kind: "p",
            text: "Separately published UG fee overviews list Bachelor of Commerce at around Rs 12,000 plus exam fees, Bachelor of Computer Applications at around Rs 36,000 plus exam fees, and Bachelor of Social Work at around Rs 17,700 plus exam fees -- treat these as broad, non-code-specific figures and cross-check the code-wise table above for your exact specialisation.",
          },
        ],
      },
      {
        kind: "cta",
        heading: "",
        blocks: [],
      } as any,
    ],
    faqs: [],
    sources: [],
  },
};

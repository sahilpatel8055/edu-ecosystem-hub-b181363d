/**
 * Long-form editorial content for every /blogs/{slug} and /news/{slug} page.
 *
 * This is the single source of truth for post bodies. Card metadata (title,
 * excerpt, author, date) still lives in `src/lib/content.ts`; this file adds the
 * on-page content blueprint: intro, sections, tables, FAQs, sources and links.
 *
 * Facts are written conservatively: nothing here states a fee, cut-off or
 * placement number that is not published by the university or the regulator.
 */

export type PostBlock =
  | { kind: "p"; text: string }
  | { kind: "list"; items: string[]; ordered?: boolean }
  | { kind: "table"; caption?: string; head: string[]; rows: string[][] }
  | { kind: "note"; text: string }
  | {
      /** Simple horizontal bar chart rendered inline — no chart library needed. */
      kind: "chart";
      title: string;
      unit?: string;
      note?: string;
      data: { label: string; value: number; display?: string }[];
    }
  | { kind: "links"; title: string; items: { label: string; href: string }[] }
  /** Inline lead-capture card with a short form. */
  | { kind: "cta"; title: string; body?: string; buttonLabel?: string }
  /** Promotional banner strip with a link button. */
  | { kind: "promo"; title: string; body?: string; ctaLabel?: string; href?: string };

export interface PostSection {
  heading: string;
  blocks: PostBlock[];
}

export interface PostContent {
  /** Answers the query in the first screenful — kept above the fold. */
  intro: string;
  keyTakeaways: string[];
  updated: string;
  reviewer: string;
  reviewerRole: string;
  /** Key into `blogBanners` for the editorial cover artwork. */
  banner?: string;
  sections: PostSection[];
  faqs: { question: string; answer: string }[];
  sources?: { label: string; href: string }[];
  related?: { label: string; href: string }[];
  cta?: string;
}


const REVIEWER = "Kartik Ahuja";
const REVIEWER_ROLE = "Education Research Lead, AVEDU";

const base = { reviewer: REVIEWER, reviewerRole: REVIEWER_ROLE };

import { courseGuidePosts } from "./posts-course-guides";

export const postContent: Record<string, PostContent> = {
  ...courseGuidePosts,

  /* ------------------------------- blogs -------------------------------- */

  "ugc-entitled-vs-deb-approved": {
    ...base,
    updated: "2026-08-07",
    intro:
      "UGC entitlement and DEB approval are two stages of the same permission. A university first needs UGC (Open and Distance Learning & Online Programmes) Regulations entitlement for a mode, and the Distance Education Bureau then lists the specific programmes it may run. For a learner the practical test is simple: your exact programme, at your exact university, must appear in the DEB / UGC list for the session you are joining.",
    keyTakeaways: [
      "Entitlement is granted per mode (online or ODL), per programme and per academic session — not once and forever.",
      "A UGC-entitled online degree carries the same recognition as an on-campus degree under the 2020 equivalence notification.",
      "Engineering, medicine, law and other regulated professional degrees are largely outside online/ODL entitlement.",
      "Always verify on the DEB portal before paying a fee — an aggregator listing is not proof.",
    ],
    sections: [
      {
        heading: "What UGC entitlement actually means",
        blocks: [
          {
            kind: "p",
            text: "Entitlement is the University Grants Commission's permission for a Higher Educational Institution to offer degrees in online or open and distance learning mode. It is issued against the institution for a stated academic session and lists the qualification levels it may award. Without entitlement for the mode, a programme is not a recognised degree even if the university itself is well known.",
          },
          {
            kind: "p",
            text: "Entitlement also travels with the session. A university entitled for 2025-26 must be re-verified for 2026-27; renewals are routine for established institutions but they are not automatic, which is why the check has to be done at the time you apply.",
          },
        ],
      },
      {
        heading: "How DEB approval differs",
        blocks: [
          {
            kind: "p",
            text: "The Distance Education Bureau operates within UGC and maintains the programme-level record: which university, which mode, which programme, which session. Entitlement is the door; the DEB listing is the room number. A university can be entitled for online PG programmes and still not be listed for the one specialisation you want.",
          },
          {
            kind: "table",
            caption: "Entitlement vs DEB listing at a glance",
            head: ["Aspect", "UGC entitlement", "DEB programme listing"],
            rows: [
              ["Level", "Institution and mode", "Individual programme"],
              ["Validity", "Stated academic session", "Same session, programme-wise"],
              ["What it proves", "The university may run online / ODL degrees", "Your specific degree is permitted"],
              ["Where to check", "UGC online education portal", "DEB / UGC programme list"],
            ],
          },
        ],
      },
      {
        heading: "Which programmes cannot be offered online",
        blocks: [
          {
            kind: "p",
            text: "The regulations exclude programmes with a mandatory laboratory, clinical or practice component. In practice that keeps engineering, medicine, nursing, pharmacy, architecture, physiotherapy, law and similar professional degrees out of online mode. Management, commerce, computer applications, arts, journalism and most science-theory programmes are the ones you will actually find.",
          },
          {
            kind: "note",
            text: "If a counsellor offers you an online B.Tech, B.Ed or LLB as a regular first degree, treat it as a red flag and ask for the DEB listing in writing.",
          },
        ],
      },
      {
        heading: "How to verify a programme in five minutes",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Open the UGC online education / DEB portal and search the university by its legal name, not its brand name.",
              "Confirm the mode — online and ODL are listed separately.",
              "Find your exact programme and level, including the specialisation where one is listed.",
              "Check that the academic session matches the one you are joining.",
              "Save a dated screenshot or PDF of the listing along with your fee receipt.",
            ],
          },
        ],
      },
      {
        heading: "What this means for jobs and higher study",
        blocks: [
          {
            kind: "p",
            text: "The 2020 UGC notification treats degrees earned in online and ODL mode as equivalent to the corresponding conventional degree, provided the programme was entitled. That equivalence is what employers, PSU recruiters and foreign admission offices rely on. Where a specific recruiter still asks for a full-time degree, that is the recruiter's own hiring criterion — it does not change the degree's legal validity.",
          },
          {
            kind: "links",
            title: "Verify before you apply",
            items: [
              { label: "Compare UGC-entitled universities", href: "/universities" },
              { label: "Are online degrees accepted for government jobs?", href: "/blogs/online-degree-government-jobs" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a UGC-entitled online degree valid for government jobs?",
        answer:
          "Yes. Under the UGC's 2020 equivalence notification, a degree earned in online or ODL mode from an entitled university is treated as equivalent to the same degree earned on campus, which is the basis on which recruitment bodies accept it. Individual recruiters may still add their own eligibility conditions.",
      },
      {
        question: "How do I check DEB approval for a university?",
        answer:
          "Search the university's legal name on the UGC / DEB online education portal, open the entry for the relevant academic session, and confirm your exact programme and mode appear in the listed programmes.",
      },
      {
        question: "Does entitlement expire?",
        answer:
          "Entitlement is granted for stated academic sessions and is reviewed on renewal, so a university listed for one session must be re-verified for the next.",
      },
      {
        question: "Is an online MBA from a private university a real degree?",
        answer:
          "It is, provided the university is UGC-entitled for online mode and the MBA appears in its DEB programme listing for your session. Ownership of the university is not what decides validity.",
      },
      {
        question: "Do the marksheets mention online mode?",
        answer:
          "Universities usually mention the mode of study on the transcript. That is normal and does not reduce the degree's equivalence.",
      },
    ],
    sources: [
      { label: "UGC (ODL and Online Programmes) Regulations", href: "https://www.ugc.gov.in/" },
      { label: "UGC DEB online education portal", href: "https://deb.ugc.ac.in/" },
    ],
    related: [
      { label: "Online MBA universities and fees", href: "/courses/online-mba" },
      { label: "Compare universities side by side", href: "/compare" },
    ],
    cta: "Not sure whether a programme you shortlisted is entitled for 2026-27? Send us the university and programme name and we will point you to the official listing.",
  },

  "online-mba-worth-it": {
    ...base,
    updated: "2026-08-06",
    intro:
      "An online MBA is worth it when you already have work experience, want a structured management credential without leaving your job, and are optimising for promotion eligibility rather than a campus placement. It is usually not worth it if you are a fresher hoping the degree alone will produce a consulting or investment banking role — that market still recruits from full-time campuses.",
    keyTakeaways: [
      "The realistic return is internal promotion, role change within the same employer, or eligibility for jobs that specify a PG degree.",
      "Total cost is far lower than a residential MBA, and there is no salary foregone — that is where most of the ROI comes from.",
      "Employer perception depends more on the university's recognition and your work record than on the mode.",
      "Placement assistance is not the same as guaranteed placement; check what the career service actually delivers for online cohorts.",
    ],
    sections: [
      {
        heading: "Who genuinely benefits",
        blocks: [
          {
            kind: "list",
            items: [
              "Professionals with 3-10 years of experience who are blocked from a managerial band because they lack a PG qualification.",
              "Specialists moving into general management who need finance, operations and strategy fundamentals.",
              "Family-business owners who want structure without relocating.",
              "Government and PSU employees whose promotion matrices award weight to a recognised PG degree.",
            ],
          },
          {
            kind: "p",
            text: "The common thread is that the degree unlocks something the person is already close to. When the degree is expected to create the opportunity from scratch, satisfaction drops sharply.",
          },
        ],
      },
      {
        heading: "The cost side of the equation",
        blocks: [
          {
            kind: "p",
            text: "Online MBA fees in India span a wide band depending on the university, and most institutions allow semester-wise or EMI payment. Because you keep earning, the honest comparison is not fee versus fee: it is fee versus fee plus two years of foregone salary for a residential programme.",
          },
          {
            kind: "table",
            caption: "What to add up before deciding",
            head: ["Cost head", "Online MBA", "Full-time MBA"],
            rows: [
              ["Tuition", "Paid per semester while earning", "Paid upfront or via education loan"],
              ["Salary foregone", "None", "Typically two years"],
              ["Relocation and living", "None", "Significant"],
              ["Exam / convocation charges", "Usually extra, published by the university", "Usually bundled"],
            ],
          },
          {
            kind: "note",
            text: "We do not publish a single national fee figure because it changes per university and per session. Use the university fee tables on this site and confirm on the official page before paying.",
          },
        ],
      },
      {
        heading: "How employers read an online MBA",
        blocks: [
          {
            kind: "p",
            text: "Recruiters look for three things: whether the university is UGC-entitled for online mode, whether the specialisation matches the role, and whether your work history shows the responsibility the degree is meant to support. Hiring managers rarely reject an online MBA on principle; they reject a thin profile that happens to include one.",
          },
        ],
      },
      {
        heading: "Where an online MBA falls short",
        blocks: [
          {
            kind: "list",
            items: [
              "No day-zero campus placement process comparable to a top residential school.",
              "Peer network is real but looser — you have to work at it through cohort groups and alumni chapters.",
              "Case-heavy, discussion-led learning depends on live-session attendance, which is hard alongside a demanding job.",
              "Roles that recruit exclusively from a defined campus list stay out of reach.",
            ],
          },
        ],
      },
      {
        heading: "A decision checklist",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Write the exact role you want next and check ten live job posts for it — does any of them require a PG degree?",
              "Confirm the university's online entitlement for your session.",
              "Match the specialisation to that role, not to what sounds impressive.",
              "Ask the university, in writing, what career services online learners receive.",
              "Plan 10-12 hours a week; if you cannot protect that, defer the intake.",
            ],
          },
          {
            kind: "links",
            title: "Continue your research",
            items: [
              { label: "Online MBA: universities, fees and specialisations", href: "/courses/online-mba" },
              { label: "How to choose the right specialisation", href: "/blogs/choosing-specialisation" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online MBA valued by employers in India?",
        answer:
          "It is accepted when the university is UGC-entitled for online mode. Employers weigh the institution's recognition and your work record more than the delivery mode, though a small number of recruiters still specify full-time programmes.",
      },
      {
        question: "Can I get a salary hike after an online MBA?",
        answer:
          "Increments most often come through internal promotion or a role change where the degree makes you eligible. Treat a large automatic hike from an external switch as the exception rather than the plan.",
      },
      {
        question: "How many hours a week does an online MBA need?",
        answer:
          "Most working students report 10-12 hours a week across recorded lectures, live sessions, assignments and exam preparation, rising near assessment periods.",
      },
      {
        question: "Is an online MBA good for freshers?",
        answer:
          "It is a weaker fit. Without work experience you miss both the campus recruitment route of a full-time MBA and the on-the-job context that makes online coursework useful.",
      },
      {
        question: "Online MBA or executive MBA?",
        answer:
          "An executive MBA usually assumes senior experience and involves campus immersion; an online MBA is more flexible and less expensive. Choose by how much in-person time you can realistically commit.",
      },
    ],
    related: [
      { label: "Online MBA vs distance MBA", href: "/compare/online-mba-vs-distance-mba" },
      { label: "Careers after an online MBA", href: "/career" },
    ],
    cta: "Want a shortlist matched to your experience and budget? Share your current role and target role and we will map three universities to it.",
  },

  "du-sol-admission-process": {
    ...base,
    updated: "2026-08-05",
    intro:
      "DU SOL admission for undergraduate programmes runs online through the School of Open Learning's own admission portal. You register, fill the form, upload documents, pay the fee and download the confirmation — there is no entrance test for most UG programmes, and admission is on the basis of eligibility rather than a merit rank.",
    keyTakeaways: [
      "Registration, document upload and fee payment all happen on the official SOL portal.",
      "Keep Class 10 and 12 marksheets, ID proof, photograph and signature ready in the specified sizes before you start.",
      "Most delays are caused by name mismatches between documents and by unreadable uploads.",
      "Save the confirmation page and payment receipt — they are the reference for every later query.",
    ],
    sections: [
      {
        heading: "Step-by-step admission process",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Register on the SOL admission portal with a working mobile number and email that you will keep for the whole programme.",
              "Complete the application form with details exactly as printed on your Class 12 marksheet.",
              "Select your programme and, where applicable, the study centre or medium of instruction.",
              "Upload scanned documents in the file type and size the portal specifies.",
              "Pay the fee online and wait for the payment status to update before retrying.",
              "Download the confirmation page and fee receipt, and keep both as PDF and print.",
            ],
          },
        ],
      },
      {
        heading: "Documents you need",
        blocks: [
          {
            kind: "list",
            items: [
              "Class 10 certificate (used for date of birth verification)",
              "Class 12 marksheet and passing certificate",
              "Recent passport-size photograph and scanned signature",
              "Government photo ID such as Aadhaar",
              "Category or EWS certificate where you are claiming a reservation",
              "Migration or transfer certificate where the last board or university requires it",
            ],
          },
          {
            kind: "note",
            text: "Scan in colour at a readable resolution. Rejections at verification are far more often about a blurred upload than about eligibility.",
          },
        ],
      },
      {
        heading: "Mistakes that delay enrolment",
        blocks: [
          {
            kind: "table",
            caption: "Common issues and how to avoid them",
            head: ["Issue", "Why it happens", "Fix"],
            rows: [
              ["Name mismatch", "Marksheet spelling differs from Aadhaar", "Use the Class 12 spelling everywhere and carry an affidavit if they differ"],
              ["Payment shows pending", "Gateway timeout or duplicate attempt", "Wait for the status to refresh before paying again; check your bank statement first"],
              ["Document rejected", "Cropped, dark or oversized scan", "Rescan in colour within the portal's size limit"],
              ["No confirmation email", "Typo in the email address", "Log back into the portal and download the confirmation from your dashboard"],
            ],
          },
        ],
      },
      {
        heading: "After you are admitted",
        blocks: [
          {
            kind: "p",
            text: "You get access to the learning portal for study material and recorded sessions, and your enrolment number becomes the reference for examination forms and re-registration in later years. Diarise the annual re-registration window — missing it is the single most common reason students lose a year.",
          },
          {
            kind: "links",
            title: "Related pages",
            items: [
              { label: "DU SOL university profile", href: "/universities/du-sol" },
              { label: "Admission updates and deadlines", href: "/admissions" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is there an entrance exam for DU SOL UG admission?",
        answer:
          "Most SOL undergraduate programmes admit on the basis of eligibility rather than an entrance test. Check the programme page for the current session, since eligibility conditions can differ by programme.",
      },
      {
        question: "Can I take DU SOL admission offline?",
        answer:
          "The admission process is conducted online through the official SOL portal. Physical help desks may assist you, but the application itself is submitted online.",
      },
      {
        question: "What if my payment fails but money is debited?",
        answer:
          "Do not pay again immediately. Wait for the portal status to update, check your bank statement, and raise a ticket with the transaction reference if the amount is not reversed within the bank's stated window.",
      },
      {
        question: "Is a DU SOL degree the same as a regular DU degree?",
        answer:
          "SOL degrees are awarded by the University of Delhi. The mode of study is recorded on the transcript, and the degree carries the recognition that applies to UGC-entitled ODL programmes.",
      },
      {
        question: "When does re-registration open for later years?",
        answer:
          "Re-registration windows are announced by SOL each academic year. Track the official notice board and the admission updates page rather than relying on informal groups.",
      },
    ],
    sources: [{ label: "University of Delhi — School of Open Learning", href: "https://sol.du.ac.in/" }],
    related: [
      { label: "DU SOL vs IGNOU", href: "/compare/du-sol-vs-ignou" },
      { label: "All universities", href: "/universities" },
    ],
    cta: "Stuck on a document or a failed payment? Tell us where the form stopped and we will walk you through the next step.",
  },

  "online-degree-government-jobs": {
    ...base,
    updated: "2026-08-07",
    intro:
      "Yes — an online or distance degree from a UGC-entitled university is accepted for government recruitment, because UGC's 2020 notification treats it as equivalent to the corresponding conventional degree. The conditions that actually matter are that the university held entitlement for your mode and session, and that the recruiting body's own notification does not add a separate restriction.",
    keyTakeaways: [
      "Equivalence comes from UGC's notification, not from the university's marketing claim.",
      "Verify entitlement for your session on the DEB portal and keep a dated copy.",
      "Some technical and professional posts require a specific full-time or accredited qualification — read the recruitment notification.",
      "Degrees from institutions running unapproved online programmes are the real risk, not online mode itself.",
    ],
    sections: [
      {
        heading: "What the regulation says",
        blocks: [
          {
            kind: "p",
            text: "UGC's 2020 notification on equivalence states that degrees awarded through open and distance learning and online modes by recognised, entitled institutions are equivalent to degrees awarded in conventional mode. Recruitment boards rely on this when they accept your qualification at document verification.",
          },
        ],
      },
      {
        heading: "Where it is normally accepted",
        blocks: [
          {
            kind: "table",
            caption: "Typical acceptance by recruitment stream",
            head: ["Stream", "Position on ODL / online degrees"],
            rows: [
              ["Civil services and state PSC", "Accepted where a recognised bachelor's degree is the eligibility"],
              ["Banking (IBPS, SBI)", "Accepted where the notification asks for a graduate degree"],
              ["SSC posts", "Accepted for graduate-level posts on the same basis"],
              ["PSU technical roles", "Often require a specific full-time engineering degree — check the notification"],
              ["Teaching posts", "Depend on the professional qualification rules for that post"],
            ],
          },
          {
            kind: "note",
            text: "This table describes the general pattern. The recruitment notification for the specific post is always the deciding document.",
          },
        ],
      },
      {
        heading: "What can get your candidature rejected",
        blocks: [
          {
            kind: "list",
            items: [
              "The university was not entitled for your mode in the session you studied.",
              "The programme itself was never listed by DEB, even though the university was entitled for other programmes.",
              "The post explicitly requires a full-time or professionally accredited degree.",
              "Documents do not match — name, date of birth or duration discrepancies at verification.",
            ],
          },
        ],
      },
      {
        heading: "How to protect yourself before enrolling",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Verify the programme on the DEB portal for your session and save a dated PDF.",
              "Ask the university for the entitlement reference in writing.",
              "Check two or three recruitment notifications you intend to target for any mode restriction.",
              "Keep every marksheet, the degree certificate and the enrolment record together for verification.",
            ],
          },
          {
            kind: "links",
            title: "Related reading",
            items: [
              { label: "UGC entitled vs DEB approved", href: "/blogs/ugc-entitled-vs-deb-approved" },
              { label: "Career guides", href: "/career" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is a distance BA valid for UPSC?",
        answer:
          "A bachelor's degree from a recognised university, including one earned in ODL mode from an entitled institution, meets the graduation eligibility for the civil services examination. Always read the current notification.",
      },
      {
        question: "Are online degrees accepted for bank PO exams?",
        answer:
          "Yes, where the notification requires a degree from a recognised university and the programme was UGC-entitled for the session you studied.",
      },
      {
        question: "Will the certificate mention distance or online mode?",
        answer:
          "Universities commonly record the mode of study on the transcript. This does not affect equivalence.",
      },
      {
        question: "Is an online B.Tech accepted for government engineering posts?",
        answer:
          "Engineering degrees are generally not permitted in online or ODL mode, so a genuine online B.Tech offer should be treated as a warning sign.",
      },
      {
        question: "What if the recruiter refuses my degree?",
        answer:
          "Produce the DEB listing and the UGC equivalence notification at verification. If the post's own notification restricts the mode, that restriction stands.",
      },
    ],
    sources: [
      { label: "UGC equivalence notification", href: "https://www.ugc.gov.in/" },
      { label: "UGC DEB", href: "https://deb.ugc.ac.in/" },
    ],
    related: [{ label: "Compare online universities", href: "/compare" }],
    cta: "Targeting a specific exam? Send us the notification and we will tell you whether your programme meets its eligibility clause.",
  },

  "scholarships-online-learners": {
    ...base,
    updated: "2026-08-04",
    intro:
      "Online and distance learners can access three broad categories of financial support: university-run merit and category waivers, central or state government post-matric schemes, and employer or industry sponsorships. University waivers are the fastest to obtain because they are applied at the time of admission; government schemes need documentation and follow an annual calendar.",
    keyTakeaways: [
      "Apply for university waivers during admission — most cannot be claimed retrospectively.",
      "Defence, differently-abled and government-employee categories are the most widely offered waivers.",
      "Government post-matric schemes run on the National Scholarship Portal calendar and need income and category certificates.",
      "Employer reimbursement is the most under-used option; ask HR before you self-fund.",
    ],
    sections: [
      {
        heading: "University scholarships and waivers",
        blocks: [
          {
            kind: "table",
            caption: "Waiver categories commonly offered by online universities",
            head: ["Category", "Who qualifies", "How it is claimed"],
            rows: [
              ["Merit", "Strong qualifying-exam marks", "Applied at admission on submitted marksheets"],
              ["Defence", "Serving and ex-service personnel and dependants", "Service certificate at admission"],
              ["Differently-abled", "Candidates with a valid disability certificate", "Certificate upload during application"],
              ["Government employee", "Central and state employees", "Employer ID or service proof"],
              ["Alumni", "Previous students of the same university", "Prior enrolment number"],
            ],
          },
          {
            kind: "note",
            text: "Waiver percentages differ by university and session, so we do not publish a single figure. Confirm the current amount on the university's official fee page before you count on it.",
          },
        ],
      },
      {
        heading: "Government schemes",
        blocks: [
          {
            kind: "p",
            text: "Central and state post-matric schemes are administered through the National Scholarship Portal and equivalent state portals. Applications open on a fixed annual calendar, and the usual documents are an income certificate, a caste or category certificate where applicable, the admission proof and a bank account linked to your Aadhaar.",
          },
        ],
      },
      {
        heading: "Employer and industry support",
        blocks: [
          {
            kind: "list",
            items: [
              "Tuition reimbursement policies, often conditional on a minimum service period after completion.",
              "Sponsorship for a named specialisation relevant to your role.",
              "Sector skill-council and industry-body grants for specific technology programmes.",
            ],
          },
        ],
      },
      {
        heading: "How to plan your application",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Collect income, category and identity documents before the admission window opens.",
              "Ask the university admission office which waivers can be combined — most allow only one.",
              "Apply for the university waiver at the time of admission, not after paying full fee.",
              "Track the National Scholarship Portal window separately and apply in the same academic year.",
              "Keep receipts and sanction letters for reimbursement claims.",
            ],
          },
          {
            kind: "links",
            title: "Explore support",
            items: [
              { label: "All scholarships", href: "/scholarships" },
              { label: "University fee pages", href: "/universities" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Are scholarships available for online degrees?",
        answer:
          "Yes. Most online universities run merit and category waivers, and government post-matric schemes are open to students of recognised programmes subject to each scheme's own conditions.",
      },
      {
        question: "Can I claim a scholarship after paying the first semester fee?",
        answer:
          "University waivers are usually applied at admission and are not refunded retrospectively, so claim before paying.",
      },
      {
        question: "Can I combine two waivers?",
        answer:
          "Most universities allow only one waiver per learner. Ask the admission office in writing which one gives you the higher benefit.",
      },
      {
        question: "Do defence-category waivers cover dependants?",
        answer:
          "Many universities extend defence-category benefits to spouses and children of serving and ex-service personnel, with a service certificate as proof. Confirm the exact scope with the university.",
      },
      {
        question: "Is an education loan available for an online degree?",
        answer:
          "Several lenders and university finance partners offer EMI or loan options for recognised online programmes. Compare the effective interest cost against a simple semester-wise payment plan.",
      },
    ],
    sources: [{ label: "National Scholarship Portal", href: "https://scholarships.gov.in/" }],
    related: [{ label: "Fees and scholarships guides", href: "/blogs" }],
    cta: "Tell us your category and target university and we will list the waivers you can actually claim this session.",
  },

  "choosing-specialisation": {
    ...base,
    updated: "2026-08-03",
    intro:
      "Choose a specialisation by working backwards from the job you want in three years, not from the subject you enjoyed most. Read ten live job descriptions for that role, list the skills that repeat, and pick the specialisation whose curriculum covers the largest share of them. Where two options tie, choose the one your current work already gives you evidence for.",
    keyTakeaways: [
      "Target role first, curriculum second, brand third.",
      "A specialisation is a signal to recruiters — it should match your résumé, not contradict it.",
      "Check elective depth: some specialisations are four subjects, others are a single paper.",
      "Generic specialisations are safer for career changers; narrow ones pay off when you already work in the domain.",
    ],
    sections: [
      {
        heading: "A four-step decision framework",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Define the target role precisely — 'finance manager in a manufacturing firm', not 'something in finance'.",
              "Collect ten current job posts for it and tally the skills and tools that appear in at least half.",
              "Map those skills to the elective lists of two or three specialisations you are considering.",
              "Sanity-check against your résumé: can you show any current experience that supports the story?",
            ],
          },
        ],
      },
      {
        heading: "Comparing common specialisations",
        blocks: [
          {
            kind: "table",
            caption: "How to read the usual options",
            head: ["Specialisation", "Best when", "Watch out for"],
            rows: [
              ["Finance", "You already handle budgets, audit or accounts", "Certification expectations alongside the degree"],
              ["Marketing", "You are moving into brand, growth or sales strategy", "Digital tool skills are assumed, not taught in depth"],
              ["Human resources", "You want a generalist people-function path", "Compliance knowledge matters as much as theory"],
              ["Operations / supply chain", "You work in manufacturing, logistics or service delivery", "Quantitative load is heavier than it looks"],
              ["Business analytics", "You want a data-facing role and can invest in tools", "Curriculum depth varies widely between universities"],
              ["IT / systems", "You are a technologist moving into management", "Overlap with your existing skills may add little"],
            ],
          },
        ],
      },
      {
        heading: "Questions to ask the university",
        blocks: [
          {
            kind: "list",
            items: [
              "How many electives make up the specialisation, and in which semesters?",
              "Is the specialisation printed on the degree certificate or only on the transcript?",
              "Can it be changed after the first semester, and at what cost?",
              "Which tools or software are used, and is a licence included?",
            ],
          },
          {
            kind: "note",
            text: "Get the answers by email. Specialisation availability can differ from what a brochure shows for a given session.",
          },
        ],
      },
      {
        heading: "When to keep it broad",
        blocks: [
          {
            kind: "p",
            text: "If you are changing industry, a general or dual specialisation keeps more doors open and lets you position yourself for adjacent roles. Narrow specialisations reward people who already work in the domain and need the credential to move up within it.",
          },
          {
            kind: "links",
            title: "Next steps",
            items: [
              { label: "Browse courses and specialisations", href: "/courses" },
              { label: "Is an online MBA worth it?", href: "/blogs/online-mba-worth-it" },
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Can I change my specialisation later?",
        answer:
          "Many universities allow a change within the first semester, sometimes with an administrative fee. Confirm the policy in writing before you enrol.",
      },
      {
        question: "Does the specialisation appear on the degree?",
        answer:
          "Practice differs. Some universities print it on the certificate, others record it only on the transcript. Ask before you assume.",
      },
      {
        question: "Which specialisation has the best scope?",
        answer:
          "Scope depends on your existing experience and target sector rather than on a national ranking. The specialisation that matches the roles you can realistically reach gives the best return.",
      },
      {
        question: "Is a dual specialisation better?",
        answer:
          "A dual specialisation broadens coverage but reduces depth in each. It suits career changers; domain specialists usually gain more from a single focused track.",
      },
    ],
    related: [{ label: "Compare programmes", href: "/compare" }],
    cta: "Send us your current role and target role and we will map the specialisations that actually fit.",
  },

  /* -------------------------------- news -------------------------------- */

  "ugc-online-programme-list-update": {
    ...base,
    updated: "2026-08-04",
    intro:
      "UGC has refreshed its institution-wise list of entitled online programmes for the 2026-27 academic session. For applicants the practical effect is that entitlement must be re-checked for this session: some institutions have added specialisations, and a listing from last year is not evidence for this one.",
    keyTakeaways: [
      "Entitlement is session-specific — verify 2026-27 before paying any fee.",
      "Additions are mostly specialisations within already-entitled programme levels.",
      "The DEB portal listing, not a brochure or aggregator page, is the document to rely on.",
    ],
    sections: [
      {
        heading: "What changed",
        blocks: [
          {
            kind: "p",
            text: "The refresh updates which institutions may run online programmes in the current session and which programmes are covered. Most movement is at specialisation level within existing management, commerce and computer-application programmes rather than new degree types.",
          },
        ],
      },
      {
        heading: "What applicants should do",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Open the DEB portal and search your university's legal name.",
              "Confirm the 2026-27 session entry lists your exact programme and mode.",
              "Save a dated PDF of the listing with your application record.",
              "If the specialisation you were promised is missing, ask the university for written clarification before paying.",
            ],
          },
          {
            kind: "note",
            text: "We update university pages on this site as official listings change, but the regulator's portal remains the authoritative source.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Does this affect students already enrolled?",
        answer:
          "Students admitted while a programme was entitled for their session are not affected by later list changes. The refresh matters for new admissions in 2026-27.",
      },
      {
        question: "Where is the official list published?",
        answer: "On the UGC Distance Education Bureau's online education portal, institution by institution.",
      },
      {
        question: "How often is the list updated?",
        answer: "Entitlement is reviewed each academic session, with interim updates as institutions are added or amended.",
      },
    ],
    sources: [{ label: "UGC DEB online education portal", href: "https://deb.ugc.ac.in/" }],
    related: [
      { label: "UGC entitled vs DEB approved explained", href: "/blogs/ugc-entitled-vs-deb-approved" },
      { label: "Browse entitled universities", href: "/universities" },
    ],
  },

  "july-session-deadline-extended": {
    ...base,
    updated: "2026-08-01",
    intro:
      "Several online universities have extended their July 2026 session admission deadlines, giving applicants roughly an additional fortnight to complete registration, document upload and fee payment. Extensions are university-specific: check the official admission page for the institution you are applying to rather than assuming a common date.",
    keyTakeaways: [
      "Extensions apply per university and per programme, not across the sector.",
      "An extended deadline does not extend the session start or the examination calendar.",
      "Complete document verification early — the last-day rush is where applications fail.",
    ],
    sections: [
      {
        heading: "What an extension does and does not change",
        blocks: [
          {
            kind: "table",
            caption: "Practical effect of a deadline extension",
            head: ["Item", "Effect"],
            rows: [
              ["Application submission", "Extended window"],
              ["Fee payment", "Usually extended with the application date"],
              ["Session start and LMS access", "Generally unchanged"],
              ["Examination calendar", "Unchanged"],
              ["Scholarship / waiver claim", "Must still be claimed at admission"],
            ],
          },
        ],
      },
      {
        heading: "What to do this week",
        blocks: [
          {
            kind: "list",
            ordered: true,
            items: [
              "Confirm the revised last date on the university's own admission page.",
              "Upload documents at least three days before the deadline so rejections can be fixed.",
              "Claim any waiver you are eligible for in the same application.",
              "Download the confirmation and payment receipt once the status turns successful.",
            ],
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Will the session start date also move?",
        answer:
          "Usually not. Universities extend the application window while keeping the academic calendar intact, which compresses the gap between admission and the first live session.",
      },
      {
        question: "Can I still claim a scholarship after an extension?",
        answer:
          "Yes, provided you claim it within the application itself. Waivers are applied at admission and are rarely granted afterwards.",
      },
      {
        question: "Where can I see current deadlines?",
        answer: "Track the admission updates page on this site and confirm against the university's official notice.",
      },
    ],
    related: [
      { label: "Admission updates", href: "/admissions" },
      { label: "DU SOL admission process", href: "/blogs/du-sol-admission-process" },
    ],
  },

  "new-analytics-specialisations": {
    ...base,
    updated: "2026-07-26",
    intro:
      "Several universities have added artificial-intelligence and analytics specialisations to their online MBA for 2026-27, reflecting hiring demand in analytics, product and applied-AI roles. Before choosing one, check how many electives the specialisation actually contains and which tools are taught — depth varies sharply between universities.",
    keyTakeaways: [
      "New tracks cluster around business analytics, data science for managers and applied AI.",
      "Elective count and tool coverage matter more than the specialisation's name.",
      "Availability is session-specific and must be confirmed in the DEB listing and the university prospectus.",
    ],
    sections: [
      {
        heading: "Why universities are adding these tracks",
        blocks: [
          {
            kind: "p",
            text: "Demand for managers who can read a dashboard, scope a data problem and work with technical teams has grown across sectors. Business-analytics tracks are cheaper to launch than laboratory programmes, and they map well to the online format because the tools are cloud-based.",
          },
        ],
      },
      {
        heading: "How to evaluate a new specialisation",
        blocks: [
          {
            kind: "table",
            caption: "Questions worth asking before you enrol",
            head: ["Question", "Why it matters"],
            rows: [
              ["How many electives form the specialisation?", "Two papers is exposure; four or more is depth"],
              ["Which tools are taught?", "Spreadsheet-only coverage will not support an analytics role"],
              ["Is there a capstone project?", "Portfolio evidence is what recruiters ask to see"],
              ["Is the specialisation listed for this session?", "Newly launched tracks must appear in the official listing"],
            ],
          },
          {
            kind: "note",
            text: "A management analytics track prepares you to work with data teams; it is not a substitute for a technical data-science qualification.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is an online MBA in business analytics worth it?",
        answer:
          "It is useful if you are moving towards a data-facing management role and the track carries enough electives and a capstone. It is not a replacement for a specialist data-science programme.",
      },
      {
        question: "Do I need coding experience?",
        answer:
          "Most management analytics tracks assume no prior coding and start from spreadsheets and visualisation tools, introducing SQL or Python at an applied level.",
      },
      {
        question: "How do I confirm a new specialisation is approved?",
        answer:
          "Check the university's entry on the UGC DEB portal for the current session and ask the university for written confirmation of the specialisation.",
      },
    ],
    related: [
      { label: "Online MBA specialisations", href: "/courses/online-mba" },
      { label: "How to choose a specialisation", href: "/blogs/choosing-specialisation" },
    ],
  },
};

export const getPostContent = (slug: string): PostContent | undefined => postContent[slug];

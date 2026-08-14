# Filling the site with real depth — plan from the current committed project

## Where the project actually stands today

Verified from the repo (`src/data/pub/*.json`, `src/routes/`):

| Asset | Count today |
|---|---|
| Universities researched | 14 |
| University × course pages | 155 |
| Specialisation records | 55 |
| Guides / supporting articles | 23 |
| Course pillars | present |
| Comparisons | present |
| Route files | 49 (universities, courses, compare, specialisation, blogs, news, tools silos all wired) |

So the **templates and routing are done**. The gap versus CollegeVidya / CollegeSathi / Edukyu / OnlineUniversitiess is purely **dataset volume and per-page depth**, not architecture. That is good news for credits: everything from here is data batches poured into templates that already exist.

## The scaling formula

```text
1 research batch (JSON) -> existing template -> dozens of deep pages
                        -> auto internal links, schema, sitemap entries
```

Credit spend scales with batches, not with pages. One university batch can publish 10–15 pages.

## Target scale

| Layer | Now | Target |
|---|---|---|
| Universities | 14 | 40–50 |
| University × course | 155 | 500+ |
| Course pillars | partial | 30–40 |
| Specialisations | 55 | 250+ |
| Comparisons (auto-generated pairs) | partial | 400+ |
| Guides / blogs / news | 23 | 150+ |

## Per-page depth standard (applied to every template once)

Audit each template against this checklist and fill missing blocks:

1. Quick-facts strip — fee, duration, approvals, EMI, intake, last verified
2. Fee + EMI table with discount / list price
3. Eligibility + step-by-step admission
4. Semester-wise syllabus
5. Specialisation grid linking out
6. Exam pattern and evaluation
7. Career roles + salary bands + recruiters
8. Who should choose / who should reconsider (the trust wedge competitors skip)
9. Auto comparison table vs 2–3 rival universities
10. 8+ FAQs with FAQ schema
11. Sources list + author byline + review date
12. Lead CTA: sidebar, inline, sticky mobile bar

## Execution order (each step shippable)

1. **Depth audit pass** — run the 12-block checklist across university, course, specialisation and comparison templates; fill gaps once, and all 155+ existing pages get deeper instantly.
2. **University batches** — 5 universities per batch, all their courses, until ~45. Each batch = one research file.
3. **Course pillar + specialisation expansion** — one course family per batch (Online MBA, MCA, BBA, BCA, MA, MCom…), filling pillar + all its specialisations + comparisons together.
4. **Comparison engine at scale** — auto-generate every credible university pair per course from the existing dataset.
5. **Content cluster (blogs/news/guides)** — 8–12 supporting articles per course family, each internally linked to the pillar.
6. **SEO hardening** — per-route head/canonical/OG, JSON-LD (`Course`, `EducationalOrganization`, `FAQPage`, `BreadcrumbList`, `ItemList`, `Review`), segmented sitemap, internal-link automation, freshness dates.
7. **UI/UX polish** — mega menu, sticky TOC, compare tray, listing filters (mode / fee band / approval / duration), mobile sticky CTA, tools as lead magnets.
8. **Lead layer** — capture on every template, tagged with source page + course + university, deep-linked into the AVEDU sites with UTM + prefill.

## What I need from you (content inputs)

I will not invent fees, rankings, placement numbers or reviews. To go deep, send whatever you have of these — even partial:

1. **University list** — the exact universities you want covered, in priority order.
2. **Fee sheets** — official fee/EMI per university per course (PDF, screenshot or sheet). This is the single biggest differentiator.
3. **Official source URLs** — university online-programme pages and admission pages, so every fact is citable.
4. **Prospectus / syllabus PDFs** — for semester-wise curriculum.
5. **Approval details** — UGC-DEB / AICTE / NAAC status and validity years.
6. **Placement or recruiter info** — only what the universities officially publish.
7. **Your AVEDU handoff rules** — which university should route to which AVEDU domain, and what URL/UTM format the application forms expect.
8. **Brand basics** — logo, brand colours, author names/bios for E-E-A-T bylines, contact details.

Anything you cannot supply, I source from official university pages and mark with the existing "not published by the university" label rather than guessing.

## Suggested first move

Step 1 (depth audit pass) — cheapest, highest impact: it upgrades every one of the 155 existing pages without new research. Say "start step 1" and I begin.

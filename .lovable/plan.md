# Content Depth Engine — beating CollegeVidya / CollegeSathi / Edukyu / OnlineUniversitiess

Goal: every university, every course, every specialisation, plus blogs — deep, unique, indexable — without burning credits writing pages one by one.

## The core idea

Don't write pages. Write **one dataset + one template per page type**. The project already has this skeleton (`src/data/pub/*.json`, `courseFamily`, `CoursePageTemplate`, section routes). The gap is *data volume*, not code.

So the cheapest path to "fully loaded" is:

```text
1 dataset row  ->  1 template  ->  1 deep page  ->  auto internal links + schema + sitemap
```

## What actually makes a page "deep" (and beat competitors)

Competitors win on breadth, lose on per-page substance. Each page must carry 8–12 real blocks, all data-driven:

- Quick facts strip (fee, duration, approvals, EMI, intake)
- Fees + EMI table with "last verified" date
- Eligibility + admission steps
- Full semester-wise syllabus
- Specialisation list linking out
- Exam pattern / evaluation
- Career roles + salary bands + recruiters
- Pros / cons / who-should-reconsider (this is the trust wedge competitors skip)
- Comparison table vs 2–3 rival universities
- FAQs (8+), sources, author + review date
- Lead CTA in sidebar, inline and sticky mobile

## Page-type coverage map

| Layer | Pattern | Approx pages |
|---|---|---|
| University hub | `/universities/[uni]` | 40–60 |
| University × course | `/universities/[uni]/courses/[course]` | 500+ |
| Course pillar | `/courses/[course]` | 25–40 |
| Course × specialisation | `/courses/[course]/specialisation/[spec]` | 300+ |
| University × course × spec sections | `.../[section]` | 1000+ |
| Comparisons | `/compare/[course]/[a-vs-b]` | 500+ |
| Guides / blogs / news | `/blogs/[slug]` | ongoing |
| Fees, admission, placement, scholarship silos | per university | 200+ |

Total ceiling ~5–10k strong pages from one dataset.

## How to fill it cheaply (the important part)

Batch-by-batch, not page-by-page. Each batch = one JSON research file + a template pass:

1. **Batch = one university** (all its courses, fees, syllabus, specialisations) — one research pass, dozens of pages published.
2. **Batch = one course family** (Online MBA across all universities) — fills pillar + comparisons + specialisations at once.
3. Data goes into `src/data/pub/*.json` in the existing shape, so no new code is needed after the templates exist.
4. Anything not verifiable ships as the existing "not published by the university" label — never invented fees or rankings.

This means credit spend scales with *batches*, not pages.

## SEO layer (build once, applies to all)

- Per-route `head()`: unique title, meta, canonical, OG/Twitter
- JSON-LD: `EducationalOrganization`, `Course`, `FAQPage`, `BreadcrumbList`, `ItemList`, `Review`
- Auto sitemap segmented by silo (already have `sitemap.xml` route)
- Internal-link blocks auto-generated per page: related courses, other universities offering it, sibling specialisations, relevant comparisons
- Freshness: `last_verified` rendered on-page
- E-E-A-T: author bylines, editorial policy, sources list per page

## UI/UX layer

- Sticky header + mega menu (universities / courses / compare / tools)
- Sticky table of contents + section nav on long pages
- Comparison tray ("add to compare") persisting across pages
- Filters on listings: mode, fee band, approval, duration
- Tools as lead magnets: EMI calculator, eligibility checker, course finder
- Mobile: sticky bottom CTA bar, collapsible sections, fast tables
- Design direction: clean, premium, high-contrast typography — not ad-cluttered like competitors

## Suggested order (each step shippable)

1. Restore/finish homepage + global nav, footer, search (the shell)
2. Lock the university-course template to the full 12-block depth
3. Fill batch 1: top 5 universities, all courses
4. Course pillars + specialisation pages for those courses
5. Comparison engine auto-pages
6. Lead capture + AVEDU handoff links
7. Blogs/guides cluster around each course family
8. Tools
9. Scale remaining universities in batches

## Note

The homepage is currently a blank white page. Step 1 restores it — confirm that's wanted before I start.

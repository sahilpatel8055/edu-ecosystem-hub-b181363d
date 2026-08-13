# Phases 1–7 — Staged Implementation

The site already has the full route architecture (universities, university×course, course hubs, comparisons, specialisations, blogs/news, sitemap, SEO helpers). Nothing gets rebuilt or deleted. The phase JSONs become the specification layer that fills the gaps they identify.

## Step 0 — Spec files into the project

Copy the six Phase JSONs into `src/data/spec/` and add a small typed reader (`src/lib/phaseSpec.ts`). Every later step reads its rules from there, so the content contract lives with the code.

## Step 1 — University architecture & data (Phase 1 + 2)

- Extend the university record with `verificationStatus`, `academicSession`, `lastVerified`, `sources[]` per field group.
- Merge Phase 2's 14-university editorial blocks (intro, student guidance, source notes) into `src/data/`, keeping every existing verified value untouched.
- Ship a shared `<NotPublished />` / `<VerifiedStamp />` pair so empty facts render "Not published" plus session + verified date instead of blank cells or invented prose.
- Rebuild the stale research registry flagged as CF-02 against the current 14 universities.

## Step 2 — University × course pages (Phase 3)

One reusable template driven by data, with the full section set: overview, fees, fee components, eligibility, admission, documents, curriculum, specialisations/electives, examinations & proctoring, scholarships, learning support, career/placement support, degree, who should choose / reconsider, FAQs, sources, last verified. Sections with no verified data collapse to a verification note rather than filler. Curriculum stays university-specific; generic explanation is pulled from the course layer.

## Step 3 — Course pillar pages (Phase 4)

Authored content files for the nine hubs (MBA, MCA, BBA, BCA, BCom, BA, MA, MSc, MCom) following the existing `online-mba.ts` pattern. Pillars explain the course and route users onward — no university-specific fee/eligibility claims, so they cannot cannibalise the exact-programme pages. Each ends in a university-wise directory built from the live dataset.

## Step 4 — Flagship comparison experience (Phase 5)

Existing comparison pages stay. New course-level comparison landing pages (`/compare/online-mba` etc.) with a mobile-first board: sticky first column, horizontally scrolled university columns, grouped row bands, 2–4 universities, no body overflow. Only factual labels ("lowest verified fee" when all values are comparable) — never a "winner". Ad-hoc selections stay noindex.

## Step 5 — Specialisation pages (Phase 6)

Indexable `/online-courses/{course}/{specialisation}` pages only where the specialisation is verified in the programme data and offered by enough universities. Each maps to the universities actually offering it, with verified subjects, skills, careers, comparison link and FAQs.

## Step 6 — Content cluster (Phase 7)

Blogs/guides/news get one search intent each, an intent registry to prevent overlap, and contextual links up to pillar / specialisation / university-course / comparison.

## Step 7 — Internal linking, SEO & QA

`NextStep` strips after eligibility, fees, curriculum, specialisation and career sections. Per-route canonical, title, description, OG, breadcrumbs, JSON-LD (Course, EducationalOrganization, FAQPage only for visible FAQs, BreadcrumbList, ItemList), noindex on filter/query duplicates, sitemap regenerated from the dataset. Then a responsive pass at 320/360/375/390/414px and an accessibility/perf check, followed by the written implementation report.

## Scope note

This is a large build. I'll execute it step by step in the order above, reporting after each step, so you can course-correct and keep credit spend visible. Say "go" and I start at Step 0 + Step 1.

## Facts I cannot supply

I will not invent fees, recognition, curriculum, electives, scholarships, placements or salaries. Where the master dataset and the phase JSONs both lack a value, the page shows "Not published" with a verification note, and the final report lists every such gap for you to source officially.

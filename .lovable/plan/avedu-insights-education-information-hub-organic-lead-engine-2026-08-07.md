# AVEDU Insights — Education Information Hub & Organic Lead Engine

Goal: outrank/compete with CollegeVidya, CollegeDunia, Shiksha, CollegeSathi in the online/distance UG–PG space by owning *every* informational query, then routing intent to AVEDU application forms.

## The competitive read

| Site | What wins them traffic | What we copy | What we beat |
|---|---|---|---|
| Shiksha / CollegeDunia | Massive entity coverage (university × course × specialisation × city), reviews, Q&A | Programmatic entity pages at scale | Their pages are ad-heavy and thin per-specialisation |
| CollegeVidya | Comparison tool, "10 parameters", trust/verification angle | Comparison engine + verification badges | Deeper fee/EMI + placement data, faster pages |
| OnlineUniversitiess / CollegeSathi | Long-tail blog + fee pages | Long-tail content ops | Better structure, schema, freshness |

Our wedge: **verified, structured, comparison-first data** + one lead layer shared with the AVEDU ecosystem.

## Content architecture (the SEO money map)

Every page type below is a template + data row, not a hand-written page.

1. `/universities` → `/universities/[slug]` — approvals (UGC-DEB/AICTE/NAAC), fees, EMI, exams, placement, pros/cons, verdict
2. `/universities/[slug]/[course]` — e.g. Amity Online MBA — the highest-converting layer
3. `/courses/[course]` → `/courses/[course]/[specialisation]` — Online MBA → Finance/HR/Marketing/Analytics…
4. `/compare/[a]-vs-[b]` — auto-generated for every credible pair
5. `/rankings/[year]-[category]` — "Top 10 online MBA universities 2026"
6. `/admissions/[university]` + `/admissions/process/[step]` — dates, docs, eligibility
7. `/fees/[university]-[course]` — fee + EMI calculator embedded
8. `/reviews/[university]` — student reviews (UGC, schema `AggregateRating`)
9. `/scholarships`, `/career/[role]`, `/news`, `/blogs`, `/tools` (EMI, eligibility, course-finder, university-finder)
10. Hubs: `/categories`, `/tags`, `/authors` (E-E-A-T), `/about` (editorial policy)

Scale target: ~50 universities × ~12 courses × ~8 specialisations ≈ 5k+ indexable pages, all from one dataset.

## Lead engine

- Lead form on every template: sidebar card, sticky mobile bar, exit-intent, inline after key sections, and a "Get free counselling" CTA in comparisons.
- Fields: name, phone (OTP later), email, course interest, city, budget → stored in Lovable Cloud.
- Every lead is tagged with source page, course, university → passed to AVEDU partner sites via the footer ecosystem links with UTM + prefill params, so the user can complete an application anywhere.
- Dashboard for you: leads, source page, conversion by template.

## Technical SEO baseline

Per-page title/description/OG, canonical, breadcrumbs, JSON-LD (`EducationalOrganization`, `Course`, `FAQPage`, `BreadcrumbList`, `Review`, `ItemList`), auto sitemap from the dataset, robots, internal-linking blocks (related universities/courses/comparisons on every page), image alt + lazy load, Core Web Vitals, freshness dates, author bylines.

---

## Phases — you approve one at a time

**Phase 1 — Data foundation (Lovable Cloud)**
Tables: universities, courses, specialisations, university_courses (fees/duration/EMI), approvals, reviews, articles, authors, categories, tags, scholarships, leads. Admin screens to add/edit. Seed 5–10 real universities.

**Phase 2 — University & course detail templates**
Dynamic routes `/universities/$slug` and `/universities/$slug/$course`, driven by real data, full schema, sidebar lead form, related links.

**Phase 3 — Course & specialisation hubs**
`/courses/$course` and `/courses/$course/$specialisation` + filterable listing (mode, fee range, approval, duration) with SEO-safe faceting.

**Phase 4 — Comparison engine**
`/compare/$a-vs-$b` auto pages, side-by-side parameter table, "add to compare" tray, comparison CTA → lead.

**Phase 5 — Rankings, reviews & trust**
Ranking pages with a published methodology, review submission + moderation, aggregate ratings, verification badges.

**Phase 6 — Lead system & AVEDU handoff**
Lead capture everywhere, storage, notifications, UTM/prefill deep-links into AVEDU sites, leads dashboard.

**Phase 7 — Content ops**
Blog/news/guides with rich-text CMS, author profiles, category/tag hubs, editorial policy, internal-link automation.

**Phase 8 — Tools**
EMI calculator, eligibility checker, course finder, university finder, salary/career explorer — each an indexable page and a lead magnet.

**Phase 9 — Scale & measure**
Programmatic generation across the full dataset, sitemap segmentation, Search Console wiring, analytics, A/B on CTAs, page-speed pass.

## Notes
- Content quality rule: no invented rankings, fees, or reviews — everything ships from data you supply or verifiable sources.
- Each phase is shippable on its own; say "start Phase 1" and I build it.

# Batch A: fee corrections, 4 private universities in depth, and UI/UX polish

## What you sent (verified by opening the files)

- **Spreadsheet** — IGNOU / DU SOL / BAOU programme fee lists (e.g. IGNOU Online MA English MEGOL INR 7,300 per year, Online MCA MCAOL INR 25,000 per year).
- **29-Fees_Structure.pdf** — official NSOU fee table, per-year and total programme fee per programme (BA Hons 3,300/yr → 9,900 total, B.Sc. Physics 5,200/yr → 15,600 total, etc.).
- **KSOU_COURSE_FEE.pdf** — KSOU fee table with total/semester fee plus registration, prospectus and exam fees per course.

These four (IGNOU, DU SOL, BAOU, NSOU, KSOU) become the corrected fee source; you confirmed the other universities' fees are already correct, so they are left untouched.

## Step 1 — Fee corrections (open universities)

Transcribe the spreadsheet and both PDFs into the existing fee-override layer (`src/lib/feeSheet.ts` pattern) as literal, citable values:

- Per-programme yearly / semester / total fee, plus registration, prospectus and exam fees where the PDF lists them.
- Every corrected row is tagged `verified_official` with the source document and the verification date, so the page shows a "verified" badge instead of a generic label.
- Anything the documents do not cover keeps the existing "not published by the university" label — no invented numbers.

## Step 2 — Four universities, in depth (Amity, Manipal, Chandigarh, LPU)

For the 32 course URLs you listed, one research pass per university, written into the existing content pack so all templates pick it up automatically:

| University | Courses in this batch |
|---|---|
| Amity Online | MA Public Policy, M.Com Financial Management, BA, BCA, B.Com, BBA, MBA |
| Online Manipal (MUJ) | MA JMC, M.Com, MA Economics, M.Sc Mathematics, B.Com, MCA, BCA, MBA, BBA |
| Chandigarh University Online | BCA, BBA, BA JMC, MA JMC, MCA, MA English, M.Sc Data Science, MBA |
| LPU Online | M.Com, MA English, BA, M.Sc Mathematics, BCA, BBA, MCA, MBA |

Each course page gets the full 12-block depth standard: quick facts, fee + EMI table, eligibility, admission steps, semester-wise syllabus, specialisation grid, exam pattern, careers + salary bands, who should choose / reconsider, auto comparison vs rivals, 8+ FAQs with schema, sources + last-verified byline. Content is written uniquely per university — no shared boilerplate paragraphs.

## Step 3 — Course pillar + specialisation expansion

Using only these four universities plus the existing dataset, fill one course family at a time — Online MBA, MCA, BBA, BCA, MA, M.Com, B.Com, M.Sc — each with its pillar page, every specialisation page under it, and the comparison tables between the four universities for that course.

## Step 4 — UI/UX polish (applies site-wide)

- **Theme** — a distinctive, warm-neutral page background with alternating section surfaces (tinted / white / accent band) so long pages read in clear blocks instead of one flat wall.
- **Borders & cards** — consistent hairline borders, softer radii, subtle elevation on cards and tables.
- **Tables** — sticky headers, zebra rows, right-aligned money columns, and horizontal-scroll-with-fade on mobile; on narrow screens fee tables collapse into labelled stacked rows.
- **Mega menu** in the header (courses by level, universities, tools, guides).
- **Sticky TOC** on detail pages, highlighting the active section.
- **Compare tray** — pick universities anywhere, floating tray to launch the comparison.
- **Listing filters** — mode, fee band, approval body, duration.
- **Mobile sticky CTA bar** and tools positioned as lead magnets.
- Full mobile pass: tap targets, type scale, spacing, no horizontal overflow.

## Technical notes

- Fee overrides go through the existing `sheetFee()` override layer so `src/data/offerings.ts` picks them up with no template changes.
- New university/course content lands in `src/data/pub/*.json` (universities, course-pages, pillars, specialisations, comparisons) — read by `src/lib/pubContent.ts`, so routes and templates need no rewrite.
- Theme and section-surface tokens are added to `src/styles.css`; table/card styling becomes shared components rather than per-page classes.
- Every new page gets its own `head()` with unique title/description/OG plus `Course`, `EducationalOrganization`, `FAQPage` and `BreadcrumbList` JSON-LD, and enters the sitemap automatically.

## What remains after this batch (I will list it again on completion)

1. Universities 5–45 in batches of five (needs your priority list + fee sheets per batch).
2. Comparison engine at full scale across all pairs.
3. Blog / news / guide clusters — 8–12 articles per course family.
4. Site-wide SEO hardening: segmented sitemap, internal-link automation, freshness dates.
5. Lead layer: capture on every template, tagged with source page, deep-linked into AVEDU with UTM + prefill (needs your handoff rules).
6. Brand basics: logo, colours, author bios for E-E-A-T bylines, contact details.

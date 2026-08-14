import { PageShell } from "@/components/templates/PageShell";
import { Faq, type FaqItem } from "@/components/common/Faq";
import { AppLink } from "@/components/common/AppLink";
import { NextStep } from "@/components/common/NextStep";
import { CourseComparisonBoard } from "./CourseComparisonBoard";
import type { CourseFamily } from "@/lib/courseFamily";
import { academicSessionLabel } from "@/lib/phaseSpec";
import { PubComparisonRows } from "@/components/pub/PubBlocks";

/**
 * Phase 5 — evergreen course comparison page (`/compare/online-mba`, …).
 * Decision-oriented: it compares universities on one course and links out to
 * the canonical university × course pages for the full facts.
 */

export function courseComparisonFaqs(family: CourseFamily): FaqItem[] {
  return [
    {
      question: `How should I compare ${family.name} universities?`,
      answer:
        "Start with recognition for your admission year, then total published cost including registration and examination fees, then the specialisation list, examination model and support. Compare the same field across universities rather than reading each brochure separately.",
    },
    {
      question: `Which ${family.name} university is the best?`,
      answer:
        "We do not publish a single best university. Fit depends on your budget, specialisation, entrance and examination preferences, so this page surfaces factual differences instead of a ranking.",
    },
    {
      question: "Why do some fields say 'Not published'?",
      answer:
        "The university has not published that figure in a source we can verify. A missing value is not a negative signal — ask the university directly and confirm it in writing before you pay a fee.",
    },
    {
      question: "How current is this comparison?",
      answer: `Figures reflect the ${academicSessionLabel} session as last verified. Fees, admission rules, curriculum and support can change between sessions, so re-check the official page linked from each programme before applying.`,
    },
  ];
}

export function CourseComparisonPage({ family }: { family: CourseFamily }) {
  const faqs = courseComparisonFaqs(family);

  return (
    <PageShell
      crumbs={[
        { name: "Compare", href: "/compare" },
        { name: family.name, href: `/compare/${family.slug}` },
      ]}
      eyebrow={`${academicSessionLabel} comparison`}
      title={`${family.name} University Comparison`}
      description={`Compare ${family.offers.length} universities offering ${family.name} on verified fees, eligibility, duration, specialisations, admission, examinations and learner support — side by side, on any screen.`}
    >
      <div className="space-y-12">
        <section aria-labelledby="how-it-works">
          <h2 id="how-it-works" className="text-base font-bold sm:text-lg">
            How this comparison works
          </h2>
          <ul className="mt-3 grid gap-2 text-sm leading-relaxed text-muted-foreground sm:grid-cols-2">
            <li>Every value comes from the university's published programme data, not from an estimate.</li>
            <li>Where a university has not published a field, the cell reads "Not published".</li>
            <li>No score, no ranking — only factual differences you can act on.</li>
            <li>Each column links to the full university × course page for the complete detail.</li>
          </ul>
        </section>

        <CourseComparisonBoard family={family} />

        <PubComparisonRows familySlug={family.slug} />

        <section aria-labelledby="verify-before">
          <h2 id="verify-before" className="text-base font-bold sm:text-lg">
            Important differences to verify before applying
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Recognition and entitlement status for the exact programme and your admission year.</li>
            <li>The complete fee, in writing, including registration, examination and any technology charge.</li>
            <li>Whether the specialisation you want is actually running this session.</li>
            <li>Examination mode, proctoring rules, re-attempt policy and passing criteria.</li>
            <li>What career support includes for online learners, and what it does not promise.</li>
          </ul>
        </section>

        <section aria-labelledby="programme-links">
          <h2 id="programme-links" className="text-base font-bold sm:text-lg">
            {family.name} programme pages
          </h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {family.offers.map((o) => (
              <li key={o.key}>
                <AppLink
                  to={o.path}
                  className="box-hover flex min-h-11 items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold"
                >
                  <span className="min-w-0 truncate">{o.universityShortName} — {o.programmeName}</span>
                  <span className="shrink-0 text-brand">View →</span>
                </AppLink>
              </li>
            ))}
          </ul>
        </section>

        <NextStep
          question={`Still deciding whether ${family.name} is the right course?`}
          actionLabel={`Read the ${family.name} guide`}
          href={family.path}
        />

        <section aria-labelledby="methodology">
          <h2 id="methodology" className="text-base font-bold sm:text-lg">
            Methodology and sources
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted-foreground">
            <li>Official university and regulator publications are the factual authority for every field.</li>
            <li>Fees, admissions, curriculum and support can change by academic session.</li>
            <li>Missing data is shown as "Not published" and is never interpreted as a negative.</li>
            <li>This is a factual comparison of published data, not a universal ranking.</li>
            <li>
              Last verified across the compared programmes:{" "}
              <span className="font-semibold text-foreground">{family.lastVerified ?? "Not published"}</span> ({academicSessionLabel} session).
            </li>
          </ul>
        </section>

        <Faq items={faqs} />
      </div>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { SearchBox } from "@/components/layout/SearchBox";
import { AppLink } from "@/components/common/AppLink";
import { Chip, CTASection, Section, SectionHeader } from "@/components/common/Primitives";
import { NewsletterSignup } from "@/components/common/NewsletterSignup";
import { PromoBanner } from "@/components/course/PromoBanner";
import { Faq } from "@/components/common/Faq";
import { ProgramFinder } from "@/components/common/ProgramFinder";
import { UniversityGrid } from "@/components/common/UniversityGrid";
import { universities as universityRecords } from "@/data";

import {
  ArticleCard,
  CareerCard,
  ComparisonCard,
  NewsCard,
  ReviewCard,
  ScholarshipCard,
  ToolCard,
  UniversityCard,
} from "@/components/cards";
import {
  admissionUpdates,
  allArticles,
  articles,
  careerGuides,
  comparisons,
  courseFamilies,
  homeFaqs,
  news,
  reviews,
  scholarships,
  tools,
} from "@/lib/content";
import { canonical, collectionSchema, faqSchema, jsonLd, pageMeta } from "@/lib/seo";

const title = "Online & Distance Education Research, Reviews and Comparisons";
const description =
  "Independent research on UGC-entitled online and distance universities in India — compare fees, approvals, placements, scholarships and read verified student reviews.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta({ title, description, path: "/" }),
    links: canonical("/"),
    scripts: [
      jsonLd(collectionSchema({ name: title, description, path: "/" })),
      jsonLd(faqSchema(homeFaqs)),
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "480+", label: "Universities tracked" },
  { value: "2,600+", label: "Programmes mapped" },
  { value: "18,000+", label: "Verified reviews" },
  { value: "100%", label: "Free guidance" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-glow relative overflow-hidden border-b border-border">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.035] [background-image:linear-gradient(to_right,currentColor_1px,transparent_1px),linear-gradient(to_bottom,currentColor_1px,transparent_1px)] [background-size:56px_56px]"
        />
        <div className="container-page relative pb-8 pt-3 sm:pb-14 sm:pt-4 lg:pb-16 lg:pt-5">
          <HeroCarousel />

          {/* Course discovery — the first action after the banner on every viewport */}
          <div className="mt-5">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              Start with a course
            </p>
            <ul className="scroll-rail mt-2.5 sm:flex-wrap">
              {[
                { label: "Online MBA", href: "/courses/online-mba" },
                { label: "Online MCA", href: "/courses/online-mca" },
                { label: "Online BBA", href: "/courses/online-bba" },
                { label: "Online BCA", href: "/courses/online-bca" },
                { label: "Online BA", href: "/courses/online-ba" },
                { label: "Online MA", href: "/courses/online-ma" },
                { label: "Online B.Com", href: "/courses/online-bcom" },
                { label: "Online M.Com", href: "/courses/online-mcom" },
                { label: "All courses", href: "/courses" },
              ].map((c) => (
                <li key={c.href}>
                  <AppLink
                    to={c.href}
                    className="btn btn-secondary btn-sm"
                  >
                    {c.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-auto mt-10 max-w-3xl text-center sm:mt-14">
            <h1 className="font-display text-[2.1rem] font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">

              <span className="text-shine">Decide your degree</span> with research, not guesswork.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground sm:text-lg">
              Verified data on India's online and distance universities — <span className="mark-brand">approvals</span>,{" "}
              <span className="mark-brand">fees</span>, placements and real student reviews, in one knowledge hub.
            </p>
            <div className="mx-auto mt-8 max-w-2xl">
              <SearchBox size="lg" />
            </div>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {["Online MBA", "LPU Online", "DU SOL", "Amity Online", "Fee comparison"].map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-semibold text-muted-foreground">
              {["UGC-DEB entitled data", "No sponsored rankings", "Updated every cycle"].map((t) => (
                <li key={t} className="inline-flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-brand" /> {t}
                </li>
              ))}
            </ul>
          </div>

          <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4 sm:gap-4">
            {stats.map((s) => (
              <div key={s.label} className="card-pro p-4 text-center sm:p-5">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-extrabold text-brand sm:text-3xl">
                    {s.value}
                  </span>
                  <span className="mt-1 block text-[0.7rem] font-medium uppercase tracking-wider text-muted-foreground sm:text-xs">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>


      {/* Popular courses */}
      <Section>
        <h2 className="mb-6 font-display text-3xl font-extrabold sm:text-4xl">
          Top <span className="text-shine">Online Programs</span>
        </h2>
        <ProgramFinder items={courseFamilies} />
      </Section>

      {/* Popular universities */}
      <Section muted>
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold text-muted-foreground sm:text-base">
            {universityRecords.length}+ Online Universities
          </p>
          <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-4xl">
            Unlock Excellence with <span className="text-shine">Top Universities</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
            UGC-approved universities, verified by us and reviewed by learners on 30+ factors.
          </p>
        </div>
        <UniversityGrid items={universityRecords.slice(0, 12)} />
      </Section>

      {/* Trending + comparisons */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <SectionHeader eyebrow="Comparisons" title="Top comparisons" href="/compare" />
            <div className="grid gap-6 sm:grid-cols-2">
              {comparisons.slice(0, 4).map((c) => (
                <ComparisonCard key={c.slug} item={c} />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Popular now" title="Trending articles" href="/blogs" />
            <div className="surface-card px-5 py-2">
              {allArticles.filter((a) => a.trending).map((a) => (
                <ArticleCard key={a.slug} item={a} variant="compact" />
              ))}
              {articles.slice(0, 3).map((a) => (
                <ArticleCard key={`t-${a.slug}`} item={a} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeader
          eyebrow="Student voices"
          title="Top reviews"
          description="Verified feedback from learners currently enrolled or recently graduated."
          href="/reviews"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((r) => (
            <ReviewCard key={r.slug} item={r} />
          ))}
        </div>
      </Section>


      <div className="container-page py-4">
        <PromoBanner
          title="Save up to ₹15,000 on 2026 online admissions"
          subtitle="Limited-period university scholarships across MBA, MCA, M.Com and BBA — check what you qualify for."
          ctaLabel="Check my scholarship"
        />
      </div>

      {/* Admission updates + latest news */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <SectionHeader eyebrow="Admissions" title="Admission updates" href="/admissions" />
            <ul className="surface-card divide-y divide-border">
              {admissionUpdates.map((u) => (
                <li key={u.title}>
                  <AppLink
                    to={u.href}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-4 transition-colors hover:bg-secondary/60"
                  >
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{u.title}</span>
                      <span className="text-xs text-muted-foreground">{u.date}</span>
                    </span>
                    <Chip tone={u.status === "Closing soon" ? "highlight" : "success"}>{u.status}</Chip>
                  </AppLink>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader eyebrow="News" title="Latest news" href="/news" />
            <div className="grid gap-6 sm:grid-cols-2">
              {news.slice(0, 2).map((n) => (
                <NewsCard key={n.slug} item={n} />
              ))}
            </div>
            <div className="surface-card mt-6 px-5 py-2">
              {news.map((n) => (
                <ArticleCard key={`c-${n.slug}`} item={n} variant="compact" />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Featured articles */}
      <Section muted>
        <SectionHeader
          eyebrow="Knowledge hub"
          title="Featured articles"
          description="Long-form research from our editorial desk on approvals, ROI and admission strategy."
          href="/blogs"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.filter((a) => a.featured).map((a) => (
            <ArticleCard key={a.slug} item={a} />
          ))}
        </div>
      </Section>


      {/* Student tools */}
      <Section muted>
        <SectionHeader
          eyebrow="Student tools"
          title="Plan with data, not brochures"
          description="Calculators and finders that turn fee tables and eligibility rules into a clear decision."
          href="/tools"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((t) => (
            <ToolCard key={t.slug} item={t} />
          ))}
        </div>
      </Section>

      <div className="container-page py-4">
        <PromoBanner
          variant="guidance"
          title="Confused between two universities?"
          subtitle="Get a free 15-minute call with an AVEDU counsellor and a side-by-side comparison on WhatsApp."
          ctaLabel="Talk to a counsellor"
        />
      </div>

      {/* Scholarships */}
      <Section>
        <SectionHeader
          eyebrow="Funding"
          title="Scholarships & fee waivers"
          description="Merit, category and government funding routes that apply to online programmes."
          href="/scholarships"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {scholarships.map((s) => (
            <ScholarshipCard key={s.slug} item={s} />
          ))}
        </div>
      </Section>

      {/* Career guides */}
      <Section muted>
        <SectionHeader
          eyebrow="Career"
          title="Career guides"
          description="What happens after the degree — roles, salary bands and switch strategies."
          href="/career"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {careerGuides.map((c) => (
            <CareerCard key={c.slug} item={c} />
          ))}
        </div>
      </Section>


      {/* Editor's picks */}
      <Section muted>
        <SectionHeader eyebrow="Editorial" title="Editor's picks" href="/blogs" />
        <div className="grid gap-6 lg:grid-cols-2">
          {allArticles.filter((a) => a.editorsPick).map((a) => (
            <AppLink
              key={a.slug}
              to={`/blogs/${a.slug}`}
              className="surface-card hover-lift group grid gap-5 p-7 sm:grid-cols-[auto_minmax(0,1fr)]"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
                <CheckCircle2 className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-lg font-bold group-hover:text-brand">{a.title}</span>
                <span className="mt-2 block text-sm text-muted-foreground">{a.excerpt}</span>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                  Read article <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </span>
            </AppLink>
          ))}
        </div>
      </Section>

      <div className="container-page py-4">
        <PromoBanner
          title="Application window closing soon"
          subtitle="Apply in the current session to lock this year's fee — fees revise every intake."
          ctaLabel="Apply now"
        />
      </div>

      {/* Newsletter */}
      <Section>
        <div className="surface-card grid gap-8 p-8 sm:p-12 lg:grid-cols-2 lg:items-center">
          <NewsletterSignup />
          <ul className="space-y-3 text-sm text-muted-foreground">
            {[
              "Admission deadline alerts for your shortlist",
              "Fee and scholarship changes as they happen",
              "New programme approvals and rankings updates",
            ].map((i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> {i}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* FAQ */}
      <Section muted>
        <div className="mx-auto max-w-3xl">
          <Faq items={homeFaqs} />
        </div>
      </Section>

      {/* Final CTA */}
      <Section>
        <CTASection />
      </Section>
    </>
  );
}
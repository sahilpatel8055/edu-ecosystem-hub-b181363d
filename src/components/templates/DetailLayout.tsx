import type { ReactNode } from "react";
import { Breadcrumbs, type Crumb } from "@/components/common/Breadcrumbs";
import { Faq, placeholderFaqs, type FaqItem } from "@/components/common/Faq";
import { LeadCaptureCard, TableOfContents, TrustCard } from "@/components/common/Sidebar";
import { SectionNav } from "@/components/common/SectionNav";
import { CTASection } from "@/components/common/Primitives";


/**
 * Canonical detail template used by university, course, article, comparison,
 * review, scholarship, career, news, author, category and tag pages.
 */
export function DetailLayout({
  crumbs,
  hero,
  eyebrow,
  title,
  subtitle,
  meta,
  tocSections = ["Overview", "Key highlights", "Eligibility", "Fee structure", "FAQs"],
  faqs = placeholderFaqs,
  related,
  sidebarExtras,
  hideLeadForm = false,
  children,
}: {
  crumbs: Crumb[];
  hero?: ReactNode;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: ReactNode;
  tocSections?: string[] | undefined;
  faqs?: FaqItem[] | undefined;
  related?: ReactNode;
  sidebarExtras?: ReactNode;
  hideLeadForm?: boolean;
  children: ReactNode;
}) {
  return (
    <>
      <div className="hero-glow border-b border-border">
        <div className="container-page py-8 sm:py-12">
          <Breadcrumbs items={crumbs} />
          {hero && <div className="mt-6">{hero}</div>}
          {eyebrow && (
            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-brand">{eyebrow}</p>
          )}
          <h1 className="mt-2 max-w-4xl text-3xl font-bold sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {title}
          </h1>
          {subtitle && <p className="mt-4 max-w-2xl text-base text-muted-foreground">{subtitle}</p>}
          {meta && <div className="mt-6">{meta}</div>}
        </div>
      </div>

      {tocSections && tocSections.length > 1 && <SectionNav sections={tocSections} />}

      <div className="container-page grid gap-10 py-12 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-14 lg:py-16">

        <main className="min-w-0 space-y-12">
          {children}
          <section id="faqs">
            <Faq items={faqs} />
          </section>
          {related}
          <CTASection />
        </main>

        <aside className="min-w-0 space-y-6 lg:sticky lg:top-24 lg:self-start">
          <TableOfContents sections={tocSections} />
          {!hideLeadForm && <LeadCaptureCard />}
          {sidebarExtras}
          <TrustCard />
        </aside>
      </div>
    </>
  );
}

/** Content section with an anchor id that matches the sticky TOC. */
export function ContentSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section id={title.toLowerCase().replace(/[^a-z0-9]+/g, "-")} className="scroll-mt-36">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-4 space-y-4 text-[0.95rem] leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}

/** Placeholder body block — replaced by CMS rich text. */
export function ContentPlaceholder({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3" data-cms-slot="rich-text">
      {Array.from({ length: lines }).map((_, i) => (
        <div key={i} className="h-3 rounded bg-secondary" style={{ width: `${100 - i * 7}%` }} />
      ))}
    </div>
  );
}

export function RelatedContent({ title = "Related reading", children }: { title?: string; children: ReactNode }) {
  return (
    <section id="related">
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">{children}</div>
    </section>
  );
}
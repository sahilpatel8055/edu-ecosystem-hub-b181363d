import { AppLink } from "@/components/common/AppLink";
import { AuthorBox, LinkCluster, UpdatedStamp } from "@/components/common/Blocks";
import { DetailLayout } from "@/components/templates/DetailLayout";
import { StickyMobileCTA } from "@/components/common/Blocks";
import {
  AdmissionInsightSection,
  CareerOpportunitiesSection,
  ExaminationPatternSection,
  RelatedPageLinks,
  ScholarshipInsightSection,
  SessionStamp,
} from "@/components/university/InsightSections";
import { comparisonLinks, offeringLinks, universityProfile } from "@/lib/entities";
import {
  insightsSession,
  sectionLabels,
  universitySectionPages,
  type SectionKey,
} from "@/lib/insightsData";

/**
 * Shared renderer for `/universities/{slug}/{section}` pillar pages.
 * One component, every university — nothing here is hardcoded per institute.
 */
export function UniversitySectionPage({ slug, section }: { slug: string; section: SectionKey }) {
  const profile = universityProfile(slug);
  if (!profile) return null;
  const u = profile.record;
  const label = sectionLabels[section];

  const siblings = universitySectionPages(slug)
    .filter((s) => s !== section)
    .map((s) => ({ label: `${u.shortName} ${sectionLabels[s].toLowerCase()}`, href: `/universities/${slug}/${s}` }));

  const body = {
    admission: <AdmissionInsightSection universitySlug={slug} universityShort={u.shortName} />,
    "examination-pattern": <ExaminationPatternSection universitySlug={slug} universityShort={u.shortName} />,
    placement: <CareerOpportunitiesSection universitySlug={slug} universityShort={u.shortName} />,
    scholarships: <ScholarshipInsightSection universitySlug={slug} universityShort={u.shortName} />,
  }[section];

  return (
    <>
      <DetailLayout
        crumbs={[
          { name: "Universities", href: "/universities" },
          { name: u.shortName, href: `/universities/${slug}` },
          { name: label, href: `/universities/${slug}/${section}` },
        ]}
        eyebrow={`${u.shortName} · ${label}`}
        title={sectionTitle(u.name, section)}
        subtitle={sectionIntro(u.name, u.shortName, section)}
        meta={
          <div className="flex flex-wrap items-center gap-3">
            <UpdatedStamp date={u.lastUpdated} verified={u.verified} />
            <SessionStamp session={insightsSession} />
          </div>
        }
        tocSections={[]}
        hideLeadForm={false}
        sidebarExtras={
          <>
            <LinkCluster title={`${u.shortName} programmes`} links={offeringLinks(u.slug, 8)} />
            <LinkCluster title="Compare with" links={comparisonLinks(u.slug, 5)} />
          </>
        }
      >
        {body}

        <RelatedPageLinks
          title={`More about ${u.shortName}`}
          links={[{ label: `${u.shortName} overview`, href: `/universities/${slug}` }, ...siblings]}
        />

        <div className="surface-card p-4 sm:p-5">
          <p className="text-sm font-bold">Programmes at {u.shortName}</p>
          <div className="mt-3 grid gap-1.5 sm:grid-cols-2">
            {profile.offerings.slice(0, 12).map((o) => (
              <AppLink
                key={o.id}
                to={`/universities/${slug}/courses/${o.programmeSlug}`}
                className="truncate rounded-lg px-2 py-1.5 text-sm text-foreground transition-colors hover:bg-secondary"
              >
                {o.programmeSlug.replace(/-/g, " ")}
              </AppLink>
            ))}
          </div>
        </div>

        <AuthorBox />
      </DetailLayout>
      <StickyMobileCTA label={`Apply to ${u.shortName}`} />
    </>
  );
}

export function sectionTitle(universityName: string, section: SectionKey): string {
  switch (section) {
    case "admission":
      return `${universityName} Admission ${insightsSession}: Process & Eligibility`;
    case "examination-pattern":
      return `${universityName} Exam Pattern ${insightsSession}: Assessment & Examinations`;
    case "placement":
      return `${universityName} Placement & Career Support`;
    case "scholarships":
      return `${universityName} Scholarships ${insightsSession}: Eligibility & Criteria`;
  }
}

export function sectionDescription(universityName: string, section: SectionKey): string {
  switch (section) {
    case "admission":
      return `Step-by-step ${universityName} online admission process for ${insightsSession} — application mode, admission cycles, entrance requirement and the official application route.`;
    case "examination-pattern":
      return `How examinations work at ${universityName}: examination mode, proctoring, internal assessment, end-term weightage and paper structure as published for ${insightsSession}.`;
    case "placement":
      return `Career and placement support available to ${universityName} online learners, with the roles, industries and skills published in the dataset.`;
    case "scholarships":
      return `${universityName} scholarship categories and eligibility criteria for ${insightsSession}, published only where an official or verified source exists.`;
  }
}

function sectionIntro(name: string, shortName: string, section: SectionKey): string {
  switch (section) {
    case "admission":
      return `Everything ${name} publishes about applying online — the full university-level process every ${shortName} programme follows.`;
    case "examination-pattern":
      return `The university-level examination pattern for ${name}. Individual programmes can differ where the university publishes a programme-specific rule.`;
    case "placement":
      return `Career support context for ${name} learners. Programme-specific career outcomes are covered on each course page.`;
    case "scholarships":
      return `Scholarship categories published for ${name}. Percentages are shown only when an official notice confirms them.`;
  }
}

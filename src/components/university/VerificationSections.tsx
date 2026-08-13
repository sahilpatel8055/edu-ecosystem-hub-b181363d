import { ExternalLink } from "lucide-react";
import { VerificationNote, VerifiedStamp } from "@/components/common/Verification";
import { universitySection, universitySpec, universityGaps } from "@/lib/phaseSpec";

/**
 * Phase 2 university-level sections.
 *
 * Every string rendered here comes from the researched specification file —
 * nothing is generated, and no programme-level claim is made at university level.
 */

/** Researched intro + student guidance for a university, when available. */
export function UniversityResearchIntro({ slug }: { slug: string }) {
  const spec = universitySpec(slug);
  if (!spec) return null;
  return (
    <div className="space-y-3">
      <p>{spec.content.intro}</p>
      <p className="text-sm text-muted-foreground">{spec.content.student_guidance}</p>
      {spec.content.source_note && (
        <p className="text-sm text-muted-foreground">{spec.content.source_note}</p>
      )}
    </div>
  );
}

export function StudentsShouldVerify({ lastVerified, status }: { lastVerified?: string; status?: string }) {
  const section = universitySection("What Students Should Verify Before Applying");
  if (!section?.content) return null;
  return (
    <div className="space-y-3">
      <p>{section.content}</p>
      <VerifiedStamp {...(status ? { status } : {})} {...(lastVerified ? { lastVerified } : {})} />
    </div>
  );
}

export function UniversityVsProgrammeFacts() {
  const section = universitySection("University vs Programme Facts");
  if (!section?.content) return null;
  return <VerificationNote>{section.content}</VerificationNote>;
}

export function WhoMayConsiderUniversity({ shortName }: { shortName: string }) {
  const section = universitySection("Who May Consider This University?");
  if (!section?.content) return null;
  return (
    <div className="space-y-3">
      <p>{section.content}</p>
      <p className="text-sm text-muted-foreground">
        Use the verified programme pages for {shortName} to check availability, fee structure and
        admission requirements before deciding.
      </p>
    </div>
  );
}

/** Transparent source centre + the facts still awaiting official verification. */
export function OfficialDocumentsAndSources({
  slug,
  shortName,
  websiteUrl,
}: {
  slug: string;
  shortName: string;
  websiteUrl?: string | undefined;
}) {
  const spec = universitySpec(slug);
  const gaps = universityGaps(slug);
  const research = spec?.must_research_next ?? [];
  const officialUrl = websiteUrl ?? spec?.source;
  if (!officialUrl && research.length === 0 && gaps.length === 0) return null;

  return (
    <div className="space-y-4">
      {officialUrl && (
        <a
          href={officialUrl}
          target="_blank"
          rel="nofollow noopener"
          className="box-hover inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold"
        >
          {shortName} official website <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      )}
      {(research.length > 0 || gaps.length > 0) && (
        <VerificationNote>
          <p className="font-semibold text-foreground">Awaiting official verification</p>
          <p className="mt-1">
            These details are not published on this page until they are confirmed against the current
            official source for the 2026-27 session:
          </p>
          <ul className="mt-2 grid gap-1 sm:grid-cols-2">
            {Array.from(new Set([...research, ...gaps])).map((item) => (
              <li key={item} className="text-xs">
                • {item}
              </li>
            ))}
          </ul>
        </VerificationNote>
      )}
    </div>
  );
}

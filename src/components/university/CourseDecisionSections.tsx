import { ExternalLink } from "lucide-react";
import { FactValue, VerificationNote, VerifiedStamp } from "@/components/common/Verification";
import { formatINR, type FeeBreakdown } from "@/data";
import { universalCourseBlocks, universitySpec } from "@/lib/phaseSpec";

/**
 * Phase 3 sections for the university × course template.
 *
 * Every value is read from the verified dataset. Missing values render as
 * "Not published" rather than being estimated, and no section promises an
 * outcome the official source does not state.
 */

/** Published fee components — never summed or inferred. */
export function FeeComponents({ fee }: { fee: FeeBreakdown }) {
  const rows: Array<[string, number | null | undefined]> = [
    ["Total programme fee", fee.total],
    ["Per semester", fee.perSemester],
    ["Per year", fee.perYear],
    ["Registration fee", fee.registrationFee],
    ["Examination fee", fee.examFee],
    ["EMI from", fee.emiFrom],
  ];
  return (
    <div className="space-y-3">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[20rem] border-collapse text-sm">
          <caption className="sr-only">Published fee components</caption>
          <tbody>
            {rows.map(([label, value]) => (
              <tr key={label} className="border-b border-border last:border-0">
                <th scope="row" className="py-2 pr-4 text-left font-medium text-muted-foreground">
                  {label}
                </th>
                <td className="py-2 text-right font-semibold">
                  <FactValue value={value == null ? null : formatINR(value)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">{universalCourseBlocks["fee"]}</p>
    </div>
  );
}

/** Required documents, listed only when the dataset publishes them. */
export function RequiredDocuments({ documents }: { documents: string[] }) {
  if (documents.length === 0) {
    return (
      <VerificationNote>
        The official document checklist for this programme is not published yet. Confirm it on the
        university admission portal before applying.
      </VerificationNote>
    );
  }
  return (
    <ul className="grid gap-2 sm:grid-cols-2">
      {documents.map((d) => (
        <li key={d} className="rounded-lg bg-secondary px-3 py-2 text-sm">
          {d}
        </li>
      ))}
    </ul>
  );
}

/** Neutral learning-experience guidance; university specifics stay on verified sections. */
export function LearningSupport({ universityShort }: { universityShort: string }) {
  return (
    <div className="space-y-3 text-sm">
      <p>
        Online programmes are delivered through a learning management system with recorded lectures,
        reading material, assignments and assessment. The exact mix of live sessions, recorded
        content, mentoring and doubt-clearing support offered by {universityShort} for this
        programme is published only where the university documents it.
      </p>
      <VerificationNote>
        Learner-support features change by admission cycle. Verify the current LMS access, live-class
        schedule and support channels on the official programme page before you enrol.
      </VerificationNote>
    </div>
  );
}

/** Decision framework — suitability, never a ranking or a promise. */
export function ProgrammeDecision({
  programmeName,
  universityShort,
  durationLabel,
  eligibility,
  hasVerifiedFee,
}: {
  programmeName: string;
  universityShort: string;
  durationLabel: string;
  eligibility: string;
  hasVerifiedFee: boolean;
}) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-bold">Who should choose it</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          <li>• You meet the published eligibility: {eligibility}</li>
          <li>• A {durationLabel} study commitment fits your work schedule.</li>
          <li>
            • You want the {programmeName} exactly as delivered by {universityShort}, and the
            published curriculum matches your goal.
          </li>
          {hasVerifiedFee && <li>• The verified fee for this programme fits your budget.</li>}
        </ul>
      </div>
      <div className="rounded-xl border border-border bg-card p-4">
        <h3 className="text-sm font-bold">Who should reconsider</h3>
        <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
          <li>• You need on-campus lab, studio or clinical work.</li>
          <li>• You need a specialisation this programme does not officially publish.</li>
          <li>• You are relying on a guaranteed placement — no university guarantees one.</li>
          {!hasVerifiedFee && <li>• You need a confirmed total fee before deciding.</li>}
        </ul>
      </div>
      <p className="sm:col-span-2 text-xs text-muted-foreground">{universalCourseBlocks["decision"]}</p>
    </div>
  );
}

/** Source centre + freshness signal for the programme. */
export function ProgrammeSources({
  universitySlug,
  universityShort,
  websiteUrl,
  lastVerified,
  status,
}: {
  universitySlug: string;
  universityShort: string;
  websiteUrl?: string | undefined;
  lastVerified?: string | undefined;
  status?: string | undefined;
}) {
  const spec = universitySpec(universitySlug);
  const url = websiteUrl ?? spec?.source;
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">{universalCourseBlocks["sources"]}</p>
      {url && (
        <a
          href={url}
          target="_blank"
          rel="nofollow noopener"
          className="box-hover inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold"
        >
          {universityShort} official programme source <ExternalLink className="h-3.5 w-3.5" aria-hidden />
        </a>
      )}
      <VerifiedStamp
        {...(status ? { status } : {})}
        {...(lastVerified ? { lastVerified } : {})}
        {...(url ? { sourceUrl: url } : {})}
      />
    </div>
  );
}

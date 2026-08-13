import { AlertCircle, CheckCircle2, ExternalLink, ShieldQuestion } from "lucide-react";
import type { ReactNode } from "react";
import { NOT_PUBLISHED, academicSessionLabel, type VerificationStatus } from "@/lib/phaseSpec";

/**
 * Shared verification primitives.
 *
 * Rule enforced here: a fact with no published value renders "Not published"
 * with its verification context — never a blank cell and never invented prose.
 */

export function NotPublished({ note }: { note?: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
      <ShieldQuestion className="h-3.5 w-3.5 shrink-0" aria-hidden />
      <span>{NOT_PUBLISHED}</span>
      {note && <span className="text-xs">— {note}</span>}
    </span>
  );
}

/** Renders a value, or the "Not published" marker when it is missing. */
export function FactValue({ value, note }: { value: ReactNode; note?: string }) {
  const empty =
    value == null ||
    value === "" ||
    (Array.isArray(value) && value.length === 0) ||
    (typeof value === "string" && value.trim().toLowerCase() === "not published");
  if (empty) return <NotPublished {...(note ? { note } : {})} />;
  return <>{Array.isArray(value) ? value.join(", ") : value}</>;
}

const statusTone: Record<string, string> = {
  verified_official: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  verified_regulatory: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  partial_verification: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  conflicting: "bg-red-500/10 text-red-600 dark:text-red-400",
  outdated: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  not_published: "bg-muted text-muted-foreground",
  needs_review: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
};

const statusLabel: Record<string, string> = {
  verified_official: "Verified — official source",
  verified_regulatory: "Verified — regulator source",
  partial_verification: "Partially verified",
  conflicting: "Sources conflict",
  outdated: "Needs re-verification",
  not_published: "Not published",
  needs_review: "Needs review",
};

/** Session + last-verified stamp shown under any section carrying dynamic facts. */
export function VerifiedStamp({
  status,
  lastVerified,
  session = academicSessionLabel,
  sourceUrl,
  className = "",
}: {
  status?: VerificationStatus | string | undefined;
  lastVerified?: string | undefined;
  session?: string;
  sourceUrl?: string | undefined;
  className?: string;
}) {
  const key = status ?? "needs_review";
  return (
    <p className={`flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground ${className}`}>
      <span
        className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-semibold ${
          statusTone[key] ?? statusTone["needs_review"]
        }`}
      >
        {key.startsWith("verified") ? (
          <CheckCircle2 className="h-3 w-3" aria-hidden />
        ) : (
          <AlertCircle className="h-3 w-3" aria-hidden />
        )}
        {statusLabel[key] ?? "Needs review"}
      </span>
      <span>Academic session {session}</span>
      <span>Last verified: {lastVerified?.trim() ? lastVerified : NOT_PUBLISHED}</span>
      {sourceUrl && (
        <a
          href={sourceUrl}
          target="_blank"
          rel="nofollow noopener"
          className="inline-flex items-center gap-1 font-semibold text-brand"
        >
          Official source <ExternalLink className="h-3 w-3" aria-hidden />
        </a>
      )}
    </p>
  );
}

/** Explicit note shown in place of a section we cannot populate from verified data. */
export function VerificationNote({ children }: { children: ReactNode }) {
  return (
    <div className="rounded-xl border border-dashed border-border bg-secondary/40 p-4 text-sm text-muted-foreground">
      {children}
    </div>
  );
}

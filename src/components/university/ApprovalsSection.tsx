import { useState } from "react";
import { ApprovalMarquee } from "@/components/common/BoxMarquee";
import { DataTable } from "@/components/common/Blocks";
import { RecognitionTable } from "@/components/university/DataSections";
import type { UniversityRecordJson } from "@/lib/universityData";

/**
 * Approvals & recognition.
 * Only the bodies that decide degree validity (UGC / UGC-DEB entitlement,
 * AICTE, NAAC, AIU and statutory councils) are shown up front. Rankings,
 * memberships and evaluator listings sit behind "Other recognitions" so the
 * section stays short and the important status is unmissable.
 */
const PRIMARY = /^(ugc|ugc[-\s]?deb|deb|aicte|naac|aiu|ncte|pci|bci|coa|inc|nmc|mci)\b/i;

export function ApprovalsSection({
  approvals,
  shortName,
  json,
  fallbackRows,
}: {
  approvals: Array<{ body: string; status?: string }>;
  shortName: string;
  json?: UniversityRecordJson | undefined;
  fallbackRows: Array<[string, string]>;
}) {
  const [open, setOpen] = useState(false);
  const primary = approvals.filter((a) => PRIMARY.test(a.body.trim()));
  const other = approvals.filter((a) => !PRIMARY.test(a.body.trim()));
  // Every approval is shown in the scrolling strip, statutory bodies first.
  const shown = [...primary, ...other];
  const rest: typeof approvals = [];

  return (
    <div className="space-y-4">
      <ApprovalMarquee approvals={shown} />

      {rest.length > 0 && (
        <div>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="box-hover rounded-xl border border-border bg-card px-3.5 py-2 text-sm font-semibold text-foreground"
          >
            {open ? "Hide" : "Show"} other recognitions ({rest.length})
          </button>
          {open && (
            <ul className="mt-3 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {rest.map((a) => (
                <li key={a.body} className="box-hover rounded-xl border border-border bg-card p-3">
                  <p className="text-sm font-bold text-card-foreground">{a.body}</p>
                  {a.status && (
                    <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground">{a.status}</p>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {json ? (
        <RecognitionTable university={json} />
      ) : (
        <DataTable caption={`${shortName} approvals`} head={["Body", "Status"]} rows={fallbackRows} />
      )}
    </div>
  );
}

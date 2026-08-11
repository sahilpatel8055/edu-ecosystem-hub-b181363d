import { feeTableFor } from "@/data/university-fee-tables";

/**
 * Course-wise fee table for a university.
 * Desktop: a clean striped table. Mobile: the same rows as stacked cards so
 * nothing is clipped and no horizontal scrolling is needed.
 */
export function FeeStructureTable({
  universitySlug,
  universityShort,
}: {
  universitySlug: string;
  universityShort: string;
}) {
  const table = feeTableFor(universitySlug);
  if (!table || table.rows.length === 0) return null;

  const hasSpec = table.rows.some((r) => r.specialisation);

  return (
    <div className="space-y-3">
      <h3 className="text-base font-bold sm:text-lg">
        Fees in <span className="text-brand">{universityShort}</span>
      </h3>

      {/* Mobile: stacked rows */}
      <ul className="grid gap-2 sm:hidden">
        {table.rows.map((r, i) => (
          <li key={`${r.course}-${i}`} className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-start justify-between gap-3">
              <p className="min-w-0 text-sm font-bold text-card-foreground">{r.course}</p>
              {r.duration && (
                <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[11px] font-semibold text-secondary-foreground">
                  {r.duration}
                </span>
              )}
            </div>
            {r.specialisation && (
              <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{r.specialisation}</p>
            )}
            <p className="mt-2 text-sm font-bold text-brand">{r.fee}</p>
          </li>
        ))}
      </ul>

      {/* Desktop / tablet: table */}
      <div className="hidden overflow-hidden rounded-xl border border-border sm:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{universityShort} course-wise fees</caption>
          <thead>
            <tr className="bg-brand text-brand-foreground">
              <th scope="col" className="px-3 py-2.5 text-left font-semibold">
                Course
              </th>
              {hasSpec && (
                <th scope="col" className="px-3 py-2.5 text-left font-semibold">
                  Specialisation
                </th>
              )}
              <th scope="col" className="px-3 py-2.5 text-left font-semibold">
                Fees
              </th>
              <th scope="col" className="px-3 py-2.5 text-left font-semibold">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {table.rows.map((r, i) => (
              <tr key={`${r.course}-${i}`} className={i % 2 ? "bg-secondary/50" : "bg-card"}>
                <th scope="row" className="px-3 py-2.5 text-left font-semibold text-foreground">
                  {r.course}
                </th>
                {hasSpec && <td className="px-3 py-2.5 text-muted-foreground">{r.specialisation ?? "—"}</td>}
                <td className="px-3 py-2.5 font-semibold text-foreground">{r.fee}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{r.duration ?? "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {table.note && <p className="text-xs text-muted-foreground">{table.note}</p>}
    </div>
  );
}

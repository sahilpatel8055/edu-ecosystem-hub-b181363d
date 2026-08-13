import { Sparkles } from "lucide-react";
import type { Offering } from "@/data/types";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function Cell({
  label,
  value,
  note,
  strike,
  badge,
}: {
  label: string;
  value: string;
  note?: string | undefined;
  strike?: string | undefined;
  badge?: string | undefined;
}) {
  return (
    <div className="min-w-0 rounded-2xl bg-card/70 p-4 sm:bg-transparent sm:p-0">
      <p className="text-[0.8rem] font-semibold text-muted-foreground sm:text-sm">{label}</p>
      {strike && <p className="mt-1 text-sm font-semibold text-muted-foreground line-through">{strike}</p>}
      <p className="mt-0.5 font-display text-xl font-extrabold leading-tight text-brand sm:text-3xl">{value}</p>
      {note && <p className="mt-1 text-xs leading-snug text-muted-foreground">{note}</p>}
      {badge && (
        <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-brand/10 px-2.5 py-1 text-[0.7rem] font-bold text-brand">
          <Sparkles className="h-3 w-3" aria-hidden="true" />
          {badge}
        </span>
      )}
    </div>
  );
}

/**
 * Headline fee band: full payment, per-semester and EMI shown side by side
 * on one soft brand panel. Cells with no verified figure are dropped.
 */
export function FeeHighlight({ fee, duration }: { fee: Offering["fee"]; duration?: string }) {
  const cells: React.ReactNode[] = [];
  if (fee.total) {
    cells.push(
      <Cell
        key="total"
        label="Full Fee Payment"
        value={inr(fee.total)}
        strike={fee.listTotal ? inr(fee.listTotal) : undefined}
        badge={fee.discountPercent ? `${fee.discountPercent}% discount` : undefined}
        note={duration ? `Total for the ${duration} programme` : undefined}
      />,
    );
  }
  if (fee.perYear) {
    cells.push(<Cell key="yr" label="Each Year Fee" value={inr(fee.perYear)} note="Inclusive of all taxes" />);
  }
  if (fee.perSemester) {
    cells.push(<Cell key="sem" label="Each Semester Fee" value={inr(fee.perSemester)} note="Inclusive of all taxes" />);
  }
  if (fee.emiFrom) {
    cells.push(
      <Cell key="emi" label="EMI Starting at" value={`${inr(fee.emiFrom)}/mo`} note="Terms & conditions apply" />,
    );
  }
  if (!cells.length) return null;

  return (
    <div className="grid gap-3 rounded-3xl border-2 border-brand bg-brand-soft/70 p-4 sm:gap-6 sm:p-7 md:grid-cols-2 lg:grid-cols-4">
      {cells}
    </div>
  );
}

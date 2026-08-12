import type { Offering } from "@/data/types";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function Cell({ label, value, note, strike }: { label: string; value: string; note?: string; strike?: string }) {
  return (
    <div className="min-w-0">
      <p className="text-sm font-semibold text-muted-foreground">{label}</p>
      {strike && <p className="mt-1 text-sm font-semibold text-muted-foreground line-through">{strike}</p>}
      <p className="mt-0.5 font-display text-2xl font-extrabold leading-tight text-brand sm:text-3xl">{value}</p>
      {note && <p className="mt-1 text-xs text-muted-foreground">{note}</p>}
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
        note={duration ? `Total for the ${duration} programme` : undefined}
      />,
    );
  }
  if (fee.perSemester) {
    cells.push(<Cell key="sem" label="Each Semester Fee" value={inr(fee.perSemester)} note="Inclusive of all taxes" />);
  } else if (fee.perYear) {
    cells.push(<Cell key="yr" label="Each Year Fee" value={inr(fee.perYear)} note="Inclusive of all taxes" />);
  }
  if (fee.emiFrom) {
    cells.push(
      <Cell key="emi" label="EMI Starting at" value={`${inr(fee.emiFrom)}/mo`} note="Terms & conditions apply" />,
    );
  }
  if (!cells.length) return null;

  return (
    <div className="grid gap-6 rounded-3xl bg-brand-soft/70 p-5 sm:grid-cols-2 sm:p-7 lg:grid-cols-3">{cells}</div>
  );
}

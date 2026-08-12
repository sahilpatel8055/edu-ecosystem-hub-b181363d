import { useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";
import { Chip } from "./Primitives";
import { UniversityTile } from "./UniversityGrid";
import { CourseTile } from "./ProgramFinder";
import type { Course, University } from "@/lib/content";

/**
 * Client-side facet filtering. Filters intentionally never write URL
 * parameters: parameterised listing URLs create duplicate, thin, crawlable
 * variants. Canonical listing URLs stay clean and indexable.
 */

function FacetRow({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid gap-1.5 sm:grid-cols-[7rem_minmax(0,1fr)] sm:items-center">
      <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-muted-foreground">{label}</p>
      <div className="-mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(o)}
            className="shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-full"
          >
            <Chip active={value === o}>{o}</Chip>
          </button>
        ))}
      </div>
    </div>
  );
}

function Shell({ children, count }: { children: React.ReactNode; count: number }) {
  return (
    <div className="surface-card mb-6 space-y-3 p-4 sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <p className="inline-flex items-center gap-2 text-sm font-bold">
          <SlidersHorizontal className="h-4 w-4 text-brand" /> Refine
        </p>
        <p className="text-xs text-muted-foreground">{count} results</p>
      </div>
      {children}
    </div>
  );
}

export function UniversityExplorer({ items }: { items: University[] }) {
  const [mode, setMode] = useState("All");
  const [approval, setApproval] = useState("All");
  const [fee, setFee] = useState("Any");

  const approvals = useMemo(
    () => ["All", ...Array.from(new Set(items.flatMap((i) => i.approvals)))],
    [items],
  );

  const filtered = items.filter((i) => {
    if (mode !== "All" && i.mode !== mode) return false;
    if (approval !== "All" && !i.approvals.includes(approval)) return false;
    if (fee === "Under ₹1L" && !/₹\d+K/.test(i.feeRange)) return false;
    if (fee === "₹1L and above" && !/₹\d(\.\d)?L/.test(i.feeRange)) return false;
    return true;
  });

  return (
    <>
      <Shell count={filtered.length}>
        <FacetRow label="Mode" options={["All", "Online", "Distance", "Hybrid"]} value={mode} onChange={setMode} />
        <FacetRow label="Approval" options={approvals} value={approval} onChange={setApproval} />
        <FacetRow label="Fee" options={["Any", "Under ₹1L", "₹1L and above"]} value={fee} onChange={setFee} />
      </Shell>
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {filtered.map((i) => (
          <li key={i.slug}>
            <UniversityTile
              slug={i.slug}
              name={i.name}
              shortName={i.shortName}
              location={i.location}
              courseCount={i.courses}
            />
          </li>
        ))}
      </ul>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">
          No university matches these filters. Try widening the fee or approval facet.
        </p>
      )}
    </>
  );
}

export function CourseExplorer({ items }: { items: Course[] }) {
  const [level, setLevel] = useState("All");
  const [duration, setDuration] = useState("Any");

  const filtered = items.filter((i) => {
    if (level !== "All" && i.level !== level) return false;
    if (duration !== "Any" && i.duration !== duration) return false;
    return true;
  });

  const durations = ["Any", ...Array.from(new Set(items.map((i) => i.duration)))];

  return (
    <>
      <Shell count={filtered.length}>
        <FacetRow label="Level" options={["All", "UG", "PG", "Diploma", "Certificate"]} value={level} onChange={setLevel} />
        <FacetRow label="Duration" options={durations} value={duration} onChange={setDuration} />
      </Shell>
      <div className="grid grid-cols-2 gap-2.5 sm:gap-4 lg:grid-cols-4">
        {filtered.map((i) => (
          <CourseTile key={i.slug} item={i} />
        ))}
      </div>
      {filtered.length === 0 && (
        <p className="py-12 text-center text-sm text-muted-foreground">No programme matches these filters.</p>
      )}
    </>
  );
}

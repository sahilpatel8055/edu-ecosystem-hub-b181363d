import { useMemo, useState } from "react";
import { Check, Plus, X } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { NOT_SPECIFIED, fee } from "@/components/course/CourseSections";
import type { CourseFamily, FamilyOffer } from "@/lib/courseFamily";

/**
 * University comparison engine. Reusable for any course family: the user picks
 * universities and the table/cards render whatever the dataset publishes.
 */
export function CompareUniversities({ family }: { family: CourseFamily }) {
  const [selected, setSelected] = useState<string[]>(() => family.offers.slice(0, 3).map((o) => o.key));

  const chosen = useMemo(
    () => family.offers.filter((o) => selected.includes(o.key)),
    [family.offers, selected],
  );

  const toggle = (key: string) =>
    setSelected((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key].slice(-4)));

  const rows: { label: string; value: (o: FamilyOffer) => string }[] = [
    { label: "Duration", value: (o) => o.duration ?? NOT_SPECIFIED },
    { label: "Total fee", value: (o) => fee(o.fees.total) },
    { label: "Semester fee", value: (o) => fee(o.fees.semester) },
    { label: "EMI from", value: (o) => fee(o.fees.emi) },
    { label: "UGC status", value: (o) => o.ugcStatus ?? NOT_SPECIFIED },
    { label: "UGC-DEB", value: (o) => o.debStatus ?? NOT_SPECIFIED },
    { label: "NAAC", value: (o) => o.naac ?? NOT_SPECIFIED },
    { label: "Ranking", value: (o) => o.nirf ?? NOT_SPECIFIED },
    { label: "Specialisations", value: (o) => (o.specialisations.length ? String(o.specialisations.length) : NOT_SPECIFIED) },
    { label: "Learning mode", value: (o) => o.mode },
    { label: "Scholarships", value: (o) => (o.scholarships.length ? o.scholarships.slice(0, 2).join(", ") : NOT_SPECIFIED) },
    { label: "Eligibility", value: (o) => o.eligibility ?? NOT_SPECIFIED },
    { label: "Entrance", value: (o) => o.entranceExam ?? "Not published" },
    { label: "Application fee", value: (o) => fee(o.fees.application) },
    { label: "Next intake", value: (o) => o.intake ?? NOT_SPECIFIED },
  ];

  return (
    <div>
      <ul className="flex flex-wrap gap-2">
        {family.offers.map((o) => {
          const active = selected.includes(o.key);
          return (
            <li key={o.key}>
              <button
                type="button"
                onClick={() => toggle(o.key)}
                aria-pressed={active}
                className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-2 text-[0.78rem] font-semibold transition-colors ${
                  active ? "bg-brand text-brand-foreground" : "bg-secondary text-brand hover:bg-brand-soft"
                }`}
              >
                {active ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : <Plus className="h-3.5 w-3.5" aria-hidden="true" />}
                {o.universityShortName}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-[0.75rem] text-muted-foreground">
        Select up to four universities. Fields the university has not published are marked “{NOT_SPECIFIED}”.
      </p>

      {chosen.length === 0 ? (
        <p className="mt-5 rounded-2xl border border-dashed border-border bg-card px-5 py-8 text-center text-sm text-muted-foreground">
          Pick at least one university to start comparing.
        </p>
      ) : (
        <>
          {/* Desktop: comparison table */}
          <div className="mt-5 hidden overflow-x-auto rounded-2xl border border-border bg-card lg:block">
            <table className="w-full text-left text-sm">
              <caption className="sr-only">{family.name} university comparison</caption>
              <thead>
                <tr className="bg-brand text-brand-foreground">
                  <th scope="col" className="px-4 py-3 text-[0.75rem] font-semibold uppercase tracking-wide">
                    Parameter
                  </th>
                  {chosen.map((o) => (
                    <th key={o.key} scope="col" className="px-4 py-3 text-[0.8rem] font-semibold">
                      {o.universityShortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.label} className="align-top even:bg-secondary/40">
                    <th scope="row" className="px-4 py-3 text-[0.8rem] font-semibold text-foreground">
                      {r.label}
                    </th>
                    {chosen.map((o) => (
                      <td key={o.key} className="px-4 py-3 text-[0.84rem] text-muted-foreground">
                        {r.value(o)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th scope="row" className="px-4 py-3 text-[0.8rem] font-semibold">
                    Course page
                  </th>
                  {chosen.map((o) => (
                    <td key={o.key} className="px-4 py-3">
                      <AppLink to={o.path} className="text-[0.82rem] font-semibold text-brand hover:underline">
                        View details
                      </AppLink>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Mobile: stacked comparison cards */}
          <div className="mt-5 space-y-3 lg:hidden">
            {chosen.map((o) => (
              <div key={o.key} className="rounded-2xl border border-border bg-card p-4">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-display text-sm font-bold">{o.universityShortName}</p>
                  <button
                    type="button"
                    onClick={() => toggle(o.key)}
                    aria-label={`Remove ${o.universityShortName} from comparison`}
                    className="rounded-md p-1 text-muted-foreground"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
                <dl className="mt-2 divide-y divide-border">
                  {rows.map((r) => (
                    <div key={r.label} className="flex justify-between gap-4 py-1.5">
                      <dt className="text-[0.76rem] font-semibold text-muted-foreground">{r.label}</dt>
                      <dd className="text-right text-[0.8rem] text-foreground">{r.value(o)}</dd>
                    </div>
                  ))}
                </dl>
                <AppLink
                  to={o.path}
                  className="mt-3 block rounded-lg bg-brand px-3 py-2 text-center text-[0.78rem] font-semibold text-brand-foreground"
                >
                  View course details
                </AppLink>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

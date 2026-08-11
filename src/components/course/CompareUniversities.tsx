import { useMemo, useState } from "react";
import { Check, Plus } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { NOT_SPECIFIED, fee } from "@/components/course/CourseSections";
import type { CourseFamily, FamilyOffer } from "@/lib/courseFamily";

/**
 * University comparison engine. Reusable for any course family: the user picks
 * universities and the table/cards render whatever the dataset publishes.
 */
export function CompareUniversities({ family }: { family: CourseFamily }) {
  const [selected, setSelected] = useState<string[]>(() =>
    family.offers.slice(0, 3).map((o) => o.key),
  );

  const chosen = useMemo(
    () => family.offers.filter((o) => selected.includes(o.key)),
    [family.offers, selected],
  );

  const toggle = (key: string) =>
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key].slice(-4),
    );

  const rows: { label: string; value: (o: FamilyOffer) => string }[] = [
    { label: "Duration", value: (o) => o.duration ?? NOT_SPECIFIED },
    { label: "Total fee", value: (o) => fee(o.fees.total) },
    { label: "Semester fee", value: (o) => fee(o.fees.semester) },
    { label: "EMI from", value: (o) => fee(o.fees.emi) },
    { label: "UGC status", value: (o) => o.ugcStatus ?? NOT_SPECIFIED },
    { label: "UGC-DEB", value: (o) => o.debStatus ?? NOT_SPECIFIED },
    { label: "NAAC", value: (o) => o.naac ?? NOT_SPECIFIED },
    { label: "Ranking", value: (o) => o.nirf ?? NOT_SPECIFIED },
    {
      label: "Specialisations",
      value: (o) => (o.specialisations.length ? String(o.specialisations.length) : NOT_SPECIFIED),
    },
    { label: "Learning mode", value: (o) => o.mode },
    {
      label: "Scholarships",
      value: (o) => (o.scholarships.length ? o.scholarships.slice(0, 2).join(", ") : NOT_SPECIFIED),
    },
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
                  active
                    ? "bg-brand text-brand-foreground"
                    : "bg-secondary text-brand hover:bg-brand-soft"
                }`}
              >
                {active ? (
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                ) : (
                  <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                )}
                {o.universityShortName}
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-2 text-[0.75rem] text-muted-foreground">
        Select up to four universities. Fields the university has not published are marked “
        {NOT_SPECIFIED}”.
      </p>

      {chosen.length === 0 ? (
        <p className="mt-5 rounded-2xl border border-dashed border-border bg-card px-5 py-8 text-center text-sm text-muted-foreground">
          Pick at least one university to start comparing.
        </p>
      ) : (
        <>
          {/* Side-by-side on every screen; the first column stays pinned. */}
          <div className="mt-5 overflow-x-auto rounded-2xl border border-border bg-card">
            <table className="w-full min-w-[30rem] text-left text-sm">
              <caption className="sr-only">{family.name} university comparison</caption>
              <thead>
                <tr className="bg-brand text-brand-foreground">
                  <th
                    scope="col"
                    className="sticky left-0 z-10 bg-brand px-2.5 py-2.5 text-[0.66rem] font-semibold uppercase tracking-wide sm:px-4 sm:py-3 sm:text-[0.75rem]"
                  >
                    Parameter
                  </th>
                  {chosen.map((o) => (
                    <th
                      key={o.key}
                      scope="col"
                      className="px-2.5 py-2.5 text-[0.7rem] font-semibold sm:px-4 sm:py-3 sm:text-[0.8rem]"
                    >
                      {o.universityShortName}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map((r) => (
                  <tr key={r.label} className="align-top even:bg-secondary/40">
                    <th
                      scope="row"
                      className="sticky left-0 z-10 bg-card px-2.5 py-2.5 text-[0.7rem] font-semibold text-foreground sm:px-4 sm:py-3 sm:text-[0.8rem]"
                    >
                      {r.label}
                    </th>
                    {chosen.map((o) => (
                      <td
                        key={o.key}
                        className="px-2.5 py-2.5 text-[0.74rem] leading-snug text-muted-foreground sm:px-4 sm:py-3 sm:text-[0.84rem]"
                      >
                        {r.value(o)}
                      </td>
                    ))}
                  </tr>
                ))}
                <tr>
                  <th
                    scope="row"
                    className="sticky left-0 z-10 bg-card px-2.5 py-2.5 text-[0.7rem] font-semibold sm:px-4 sm:py-3 sm:text-[0.8rem]"
                  >
                    Course page
                  </th>
                  {chosen.map((o) => (
                    <td key={o.key} className="px-2.5 py-2.5 sm:px-4 sm:py-3">
                      <AppLink
                        to={o.path}
                        className="text-[0.74rem] font-semibold text-brand hover:underline sm:text-[0.82rem]"
                      >
                        View details
                      </AppLink>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2 text-[0.72rem] text-muted-foreground sm:hidden">
            Swipe the table sideways to see all columns.
          </p>
        </>
      )}
    </div>
  );
}

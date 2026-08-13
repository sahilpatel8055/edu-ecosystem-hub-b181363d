import { useMemo, useState } from "react";
import { Check, ChevronDown, ExternalLink, MoveHorizontal, Plus, X } from "lucide-react";
import type { CourseFamily, FamilyOffer } from "@/lib/courseFamily";
import { formatFee } from "@/lib/universityData";
import { AppLink } from "@/components/common/AppLink";
import { NOT_PUBLISHED } from "@/lib/phaseSpec";

/**
 * Phase 5 — flagship course comparison matrix.
 *
 * Mobile-first: one isolated horizontal scroller, a sticky first label column
 * and sticky university headers, so a phone shows a true side-by-side table
 * instead of stacked cards. Facts only — no ranking, no score, and a
 * "Not published" marker wherever the dataset has no value.
 */

const MAX_COLUMNS = 4;

type Row = { label: string; value: (o: FamilyOffer) => React.ReactNode; compare?: (o: FamilyOffer) => string };
type Group = { id: string; title: string; rows: Row[] };

const text = (v: string | null | undefined) =>
  v && v.trim() ? v.trim() : <span className="text-muted-foreground">{NOT_PUBLISHED}</span>;

const list = (v: string[]) =>
  v.length ? v.join(", ") : <span className="text-muted-foreground">{NOT_PUBLISHED}</span>;

const money = (v: number | null | undefined) => {
  const f = formatFee(v);
  return f ?? <span className="text-muted-foreground">{NOT_PUBLISHED}</span>;
};

function buildGroups(): Group[] {
  return [
    {
      id: "overview",
      title: "Overview",
      rows: [
        { label: "Programme", value: (o) => o.programmeName, compare: (o) => o.programmeName },
        { label: "Mode", value: (o) => text(o.mode), compare: (o) => o.mode ?? "" },
        { label: "Location", value: (o) => text(o.location), compare: (o) => o.location ?? "" },
        { label: "Duration", value: (o) => text(o.duration), compare: (o) => o.duration ?? "" },
        { label: "Semesters", value: (o) => text(o.semesters ? String(o.semesters) : null) },
        { label: "UGC status", value: (o) => text(o.ugcStatus) },
        { label: "UGC-DEB status", value: (o) => text(o.debStatus) },
        { label: "NAAC", value: (o) => text(o.naac) },
      ],
    },
    {
      id: "fees",
      title: "Fees",
      rows: [
        { label: "Total programme fee", value: (o) => money(o.fees.total), compare: (o) => String(o.fees.total ?? "") },
        { label: "Per semester", value: (o) => money(o.fees.semester) },
        { label: "Per year", value: (o) => money(o.fees.annual) },
        { label: "EMI from", value: (o) => money(o.fees.emi) },
        { label: "Registration / admission fee", value: (o) => money(o.fees.registration) },
        { label: "Examination fee", value: (o) => money(o.fees.examination) },
        { label: "Application fee", value: (o) => money(o.fees.application) },
        {
          label: "Fee verification",
          value: (o) =>
            o.fees.verified ? (
              <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                <Check className="h-3.5 w-3.5" aria-hidden /> Verified from official source
              </span>
            ) : (
              <span className="text-muted-foreground">Awaiting official verification</span>
            ),
        },
      ],
    },
    {
      id: "academics",
      title: "Curriculum & specialisations",
      rows: [
        {
          label: "Specialisations published",
          value: (o) => (o.specialisations.length ? String(o.specialisations.length) : text(null)),
          compare: (o) => String(o.specialisations.length),
        },
        { label: "Specialisation list", value: (o) => list(o.specialisations) },
        { label: "Career roles listed", value: (o) => list(o.careerRoles) },
        { label: "Industries listed", value: (o) => list(o.industries) },
      ],
    },
    {
      id: "admission",
      title: "Admission & eligibility",
      rows: [
        { label: "Eligibility", value: (o) => text(o.eligibility), compare: (o) => o.eligibility ?? "" },
        { label: "Minimum marks", value: (o) => text(o.minimumMarks) },
        { label: "Entrance requirement", value: (o) => text(o.entranceExam ?? "No entrance exam published"), compare: (o) => o.entranceExam ?? "none" },
        { label: "Intake / session", value: (o) => text(o.intake) },
        { label: "Admission steps", value: (o) => (o.admissionSteps.length ? `${o.admissionSteps.length} published steps` : text(null)) },
        { label: "Documents required", value: (o) => (o.documents.length ? `${o.documents.length} documents listed` : text(null)) },
      ],
    },
    {
      id: "support",
      title: "Support & scholarships",
      rows: [
        { label: "Scholarships listed", value: (o) => list(o.scholarships) },
        {
          label: "Official website",
          value: (o) =>
            o.website ? (
              <a href={o.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
                Visit <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            ) : (
              text(null)
            ),
        },
        {
          label: "Apply link",
          value: (o) =>
            o.applicationUrl ? (
              <a href={o.applicationUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 font-semibold text-brand hover:underline">
                Official portal <ExternalLink className="h-3 w-3" aria-hidden />
              </a>
            ) : (
              text(null)
            ),
        },
        { label: "Last verified", value: (o) => text(o.lastVerified) },
        {
          label: "Programme page",
          value: (o) => (
            <AppLink to={o.path} className="font-semibold text-brand hover:underline">
              Full details
            </AppLink>
          ),
        },
      ],
    },
  ];
}

/** Factual highlights only — never "best" or "winner". */
function highlights(offers: FamilyOffer[]) {
  const out: { label: string; value: string }[] = [];
  const priced = offers.filter((o) => o.fees.verified && typeof o.fees.total === "number");
  if (priced.length > 1) {
    const low = priced.reduce((a, b) => ((a.fees.total ?? 0) <= (b.fees.total ?? 0) ? a : b));
    out.push({ label: "Lowest verified fee", value: `${low.universityShortName} — ${formatFee(low.fees.total)}` });
  }
  const withSpecs = offers.filter((o) => o.specialisations.length);
  if (withSpecs.length > 1) {
    const most = withSpecs.reduce((a, b) => (a.specialisations.length >= b.specialisations.length ? a : b));
    out.push({ label: "Most specialisations published", value: `${most.universityShortName} — ${most.specialisations.length}` });
  }
  const entrance = offers.filter((o) => o.entranceExam);
  out.push({
    label: "Entrance requirement",
    value: entrance.length
      ? `Published by ${entrance.map((o) => o.universityShortName).join(", ")}`
      : "No entrance exam published by the selected universities",
  });
  const durations = [...new Set(offers.map((o) => o.duration).filter(Boolean))] as string[];
  if (durations.length) {
    out.push({
      label: "Published duration",
      value: durations.length === 1 ? `Same for all selected — ${durations[0]}` : durations.join(" / "),
    });
  }
  return out;
}

export function CourseComparisonBoard({ family }: { family: CourseFamily }) {
  const offers = family.offers;
  const [selected, setSelected] = useState<string[]>(() => offers.slice(0, Math.min(3, offers.length)).map((o) => o.key));
  const [openGroups, setOpenGroups] = useState<string[]>(["overview", "fees"]);
  const [onlyDifferences, setOnlyDifferences] = useState(false);

  const chosen = useMemo(() => selected.map((k) => offers.find((o) => o.key === k)!).filter(Boolean), [selected, offers]);
  const groups = useMemo(buildGroups, []);
  const facts = useMemo(() => (chosen.length ? highlights(chosen) : []), [chosen]);

  const toggle = (key: string) =>
    setSelected((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : prev.length >= MAX_COLUMNS ? prev : [...prev, key],
    );

  const toggleGroup = (id: string) =>
    setOpenGroups((prev) => (prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]));

  const differs = (row: Row) => {
    if (!row.compare || chosen.length < 2) return true;
    const values = chosen.map((o) => row.compare!(o));
    return new Set(values).size > 1;
  };

  return (
    <div className="space-y-8">
      {/* --- selection --- */}
      <section aria-labelledby="select-universities" className="rounded-2xl border border-border bg-card p-4 sm:p-5">
        <h2 id="select-universities" className="text-base font-bold sm:text-lg">
          Select universities to compare
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Choose 2–{MAX_COLUMNS} universities. {selected.length} selected.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {offers.map((o) => {
            const active = selected.includes(o.key);
            const full = !active && selected.length >= MAX_COLUMNS;
            return (
              <li key={o.key}>
                <button
                  type="button"
                  onClick={() => toggle(o.key)}
                  disabled={full}
                  aria-pressed={active}
                  className={`inline-flex min-h-11 items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-brand bg-brand/10 text-brand"
                      : full
                        ? "cursor-not-allowed border-border text-muted-foreground/60"
                        : "border-border text-foreground hover:border-brand/60"
                  }`}
                >
                  {active ? <X className="h-3.5 w-3.5" aria-hidden /> : <Plus className="h-3.5 w-3.5" aria-hidden />}
                  {o.universityShortName}
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      {chosen.length < 2 ? (
        <p className="rounded-2xl border border-dashed border-border p-6 text-center text-sm text-muted-foreground">
          Select at least two universities to see the comparison matrix.
        </p>
      ) : (
        <>
          {/* --- factual summary --- */}
          <section aria-labelledby="quick-summary">
            <h2 id="quick-summary" className="text-base font-bold sm:text-lg">
              Quick comparison summary
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Factual differences only. We do not rank universities or publish a composite score.
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {facts.map((f) => (
                <li key={f.label} className="rounded-xl border border-border bg-card p-3.5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{f.label}</p>
                  <p className="mt-1 text-sm font-semibold text-foreground">{f.value}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* --- matrix --- */}
          <section aria-labelledby="matrix" className="space-y-3">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 id="matrix" className="text-base font-bold sm:text-lg">
                Side-by-side comparison
              </h2>
              <label className="inline-flex min-h-11 cursor-pointer items-center gap-2 text-sm font-semibold">
                <input
                  type="checkbox"
                  checked={onlyDifferences}
                  onChange={(e) => setOnlyDifferences(e.target.checked)}
                  className="h-4 w-4 accent-[hsl(var(--brand))]"
                />
                Show only differences
              </label>
            </div>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground lg:hidden">
              <MoveHorizontal className="h-3.5 w-3.5" aria-hidden /> Swipe the table sideways to see every university.
            </p>

            <div className="max-w-full overflow-x-auto overscroll-x-contain rounded-2xl border border-border">
              <table className="w-full min-w-[640px] border-collapse text-sm">
                <thead className="sticky top-0 z-20">
                  <tr>
                    <th
                      scope="col"
                      className="sticky left-0 z-30 w-40 min-w-40 border-b border-r border-border bg-secondary p-3 text-left align-bottom text-xs font-bold uppercase tracking-wide sm:w-56 sm:min-w-56"
                    >
                      Parameter
                    </th>
                    {chosen.map((o) => (
                      <th
                        key={o.key}
                        scope="col"
                        className="min-w-[200px] border-b border-border bg-secondary p-3 text-left align-bottom sm:min-w-[240px]"
                      >
                        <AppLink to={o.universityPath} className="text-sm font-bold text-foreground hover:text-brand">
                          {o.universityShortName}
                        </AppLink>
                        <span className="mt-0.5 block text-xs font-normal text-muted-foreground">{o.programmeName}</span>
                        <button
                          type="button"
                          onClick={() => toggle(o.key)}
                          className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-muted-foreground hover:text-brand"
                        >
                          <X className="h-3 w-3" aria-hidden /> Remove
                        </button>
                      </th>
                    ))}
                  </tr>
                </thead>
                {groups.map((group) => {
                  const open = openGroups.includes(group.id);
                  const rows = group.rows.filter((r) => (onlyDifferences ? differs(r) : true));
                  return (
                    <tbody key={group.id}>
                      <tr>
                        <th
                          colSpan={chosen.length + 1}
                          scope="colgroup"
                          className="border-b border-border bg-muted/60 p-0 text-left"
                        >
                          <button
                            type="button"
                            onClick={() => toggleGroup(group.id)}
                            aria-expanded={open}
                            className="flex min-h-11 w-full items-center justify-between gap-2 px-3 py-2.5 text-xs font-bold uppercase tracking-wide"
                          >
                            {group.title}
                            <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden />
                          </button>
                        </th>
                      </tr>
                      {open &&
                        (rows.length ? (
                          rows.map((row) => (
                            <tr key={row.label} className="align-top">
                              <th
                                scope="row"
                                className="sticky left-0 z-10 w-40 min-w-40 border-b border-r border-border bg-card p-3 text-left text-xs font-semibold text-muted-foreground sm:w-56 sm:min-w-56 sm:text-sm"
                              >
                                {row.label}
                              </th>
                              {chosen.map((o) => (
                                <td key={o.key} className="min-w-[200px] border-b border-border p-3 leading-relaxed sm:min-w-[240px]">
                                  {row.value(o)}
                                </td>
                              ))}
                            </tr>
                          ))
                        ) : (
                          <tr>
                            <td colSpan={chosen.length + 1} className="border-b border-border p-3 text-xs text-muted-foreground">
                              No differences in this group for the selected universities.
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  );
                })}
              </table>
            </div>
          </section>

          {/* --- which may suit whom --- */}
          <section aria-labelledby="suitability">
            <h2 id="suitability" className="text-base font-bold sm:text-lg">
              Which option may suit which goal?
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {chosen.map((o) => (
                <li key={o.key} className="rounded-xl border border-border bg-card p-4">
                  <AppLink to={o.path} className="text-sm font-bold text-foreground hover:text-brand">
                    {o.universityShortName} — {o.programmeName}
                  </AppLink>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    May suit learners prioritising{" "}
                    {o.specialisations.length > 4
                      ? "a wide specialisation choice"
                      : o.fees.verified && typeof o.fees.total === "number"
                        ? "a verified, published total fee"
                        : "this university's published programme structure"}
                    {o.entranceExam ? ". Note that an entrance requirement is published for this programme." : "."}{" "}
                    Verify the current figures on the programme page before applying.
                  </p>
                </li>
              ))}
            </ul>
          </section>
        </>
      )}
    </div>
  );
}

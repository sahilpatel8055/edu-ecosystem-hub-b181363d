import { GraduationCap, Star } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import { approvalIcon, campusImage, universityLogo } from "@/lib/assets";
import type { University } from "@/data";
import { formatFee, programmesOf } from "@/lib/universityData";

/**
 * Decision-first university header: identity, approvals, rating, key facts and
 * the three actions a visitor needs. Every value comes from existing data —
 * missing fields are simply not rendered.
 */
export function UniversityHero({ university }: { university: University }) {
  const u = university;
  const logo = universityLogo(u.slug);
  const campus = campusImage(u.slug);
  const programmes = programmesOf(u.slug);
  const levels = [...new Set(programmes.map((p) => p.level))];
  const hasUG = levels.includes("UG");
  const hasPG = levels.includes("PG");
  const lowestFee = (() => {
    const totals = programmes
      .map((p) => p.fees.total_programme_fee ?? p.fees.normal)
      .filter((v): v is number => typeof v === "number" && v > 0);
    return totals.length ? formatFee(Math.min(...totals)) : null;
  })();

  const facts: Array<{ label: string; value: string }> = [];
  if (u.city || u.state) facts.push({ label: "Location", value: [u.city, u.state].filter(Boolean).join(", ") });
  if (u.establishedYear) facts.push({ label: "Established", value: String(u.establishedYear) });
  if (programmes.length) facts.push({ label: "Programmes", value: String(programmes.length) });
  if (lowestFee) facts.push({ label: "Fee from", value: lowestFee });
  if (u.modes.length) facts.push({ label: "Mode", value: u.modes.join(" / ") });
  if (u.type) facts.push({ label: "Type", value: u.type });

  return (
    <section
      id="key-highlights"
      className="scroll-mt-36 overflow-hidden rounded-2xl border border-border bg-card"
    >
      {campus && (
        <img
          src={campus}
          alt={`${u.name} campus`}
          loading="lazy"
          decoding="async"
          className="h-32 w-full object-cover sm:h-52"
        />
      )}

      <div className="p-4 sm:p-6">
        <div className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-3 sm:gap-5">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-border bg-card p-1.5 sm:h-20 sm:w-20 sm:p-2">
            {logo ? (
              <img src={logo} alt={`${u.name} logo`} className="max-h-full max-w-full object-contain" />
            ) : (
              <span className="text-center font-display text-xs font-extrabold text-brand">{u.shortName}</span>
            )}
          </span>
          <div className="min-w-0">
            <p className="font-display text-lg font-extrabold leading-tight sm:text-2xl">{u.name}</p>
            <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:text-sm">
              {u.rating ? (
                <span className="inline-flex items-center gap-1 font-bold text-foreground">
                  <Star className="h-3.5 w-3.5 fill-brand text-brand" aria-hidden="true" />
                  {u.rating}/5
                  {u.reviewCount ? <span className="font-normal">({u.reviewCount} reviews)</span> : null}
                </span>
              ) : null}
              {(hasUG || hasPG) && (
                <span className="inline-flex items-center gap-1">
                  <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                  Online {[hasUG ? "UG" : null, hasPG ? "PG" : null].filter(Boolean).join(" & ")} available
                </span>
              )}
            </div>
          </div>
        </div>

        {u.approvals.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-2">
            {u.approvals.map((a) => {
              const icon = approvalIcon(a.body);
              return (
                <li
                  key={a.body}
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface-2 px-2.5 py-1.5"
                >
                  {icon && (
                    <img src={icon} alt="" aria-hidden="true" className="h-6 w-auto max-w-10 object-contain" />
                  )}
                  <span className="text-[0.72rem] font-bold sm:text-xs" title={a.status}>
                    {a.body}
                  </span>
                </li>
              );
            })}
          </ul>
        )}

        {facts.length > 0 && (
          <dl className="mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
            {facts.map((f) => (
              <div key={f.label} className="min-w-0 rounded-xl bg-secondary px-3 py-2.5">
                <dt className="text-[0.66rem] font-bold uppercase tracking-wide text-muted-foreground">
                  {f.label}
                </dt>
                <dd className="truncate text-sm font-bold text-foreground" title={f.value}>
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-5 flex flex-wrap gap-2.5">
          <a
            href="#courses-fees"
            className="inline-flex min-h-11 items-center rounded-xl bg-brand px-4 text-sm font-bold text-brand-foreground hover:opacity-90"
          >
            View courses
          </a>
          <AppLink
            to="/compare/universities"
            className="inline-flex min-h-11 items-center rounded-xl border border-border bg-card px-4 text-sm font-bold text-brand"
          >
            Compare
          </AppLink>
          <AppLink
            to="/contact"
            className="inline-flex min-h-11 items-center rounded-xl border border-border bg-card px-4 text-sm font-bold text-brand"
          >
            Get guidance
          </AppLink>
        </div>
      </div>
    </section>
  );
}

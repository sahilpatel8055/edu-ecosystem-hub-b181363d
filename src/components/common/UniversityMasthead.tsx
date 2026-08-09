import { approvalIcon, campusImage, universityLogo } from "@/lib/assets";
import type { University } from "@/data";

/**
 * Campus banner + logo + approval icon strip shown at the top of a
 * university page (and reused on university-course pages).
 */
export function UniversityMasthead({ university }: { university: University }) {
  const logo = universityLogo(university.slug);
  const campus = campusImage(university.slug);

  return (
    <section id="key-highlights" className="scroll-mt-36 overflow-hidden rounded-2xl border border-border bg-card">
      {campus && (
        <img
          src={campus}
          alt={`${university.name} campus`}
          loading="lazy"
          decoding="async"
          className="h-36 w-full object-cover sm:h-56"
        />
      )}
      <div className="grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3 p-4 sm:gap-5 sm:p-5">
        <span className="grid h-16 w-16 shrink-0 place-items-center rounded-xl border border-border bg-card p-1.5 sm:h-20 sm:w-20 sm:p-2">
          {logo ? (
            <img
              src={logo}
              alt={`${university.name} logo`}
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <span className="text-center font-display text-xs font-extrabold text-brand">
              {university.shortName}
            </span>
          )}
        </span>
        <div className="min-w-0">
          <p className="truncate font-display text-base font-extrabold sm:text-xl">{university.name}</p>
          <p className="text-xs text-muted-foreground sm:text-sm">
            {university.city}, {university.state} · Est. {university.establishedYear ?? "—"} ·{" "}
            {university.type}
          </p>
        </div>
      </div>
      <ul className="flex flex-wrap gap-2 border-t border-border bg-surface-2 p-3 sm:gap-3 sm:p-4">
        {university.approvals.map((a) => {
          const icon = approvalIcon(a.body);
          return (
            <li
              key={a.body}
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-2.5 py-1.5"
            >
              {icon && (
                <img src={icon} alt="" aria-hidden="true" className="h-6 w-auto max-w-10 object-contain" />
              )}
              <span className="text-[0.72rem] font-bold sm:text-xs">
                {a.body}
                {a.status ? ` ${a.status}` : ""}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

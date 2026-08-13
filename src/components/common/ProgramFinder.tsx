import { useState } from "react";
import { ArrowUpRight, Clock } from "lucide-react";
import { AppLink } from "./AppLink";
import { cn, feeRangeInLakhs } from "@/lib/utils";
import { courseIcon } from "@/lib/course-icons";
import type { Course } from "@/lib/content";

type Group = {
  id: string;
  label: string;
  note: string;
  match: (c: Course) => boolean;
};

const groups: Group[] = [
  { id: "pg", label: "PG Courses", note: "After Graduation", match: (c) => c.level === "PG" },
  { id: "ug", label: "UG Courses", note: "After 12th", match: (c) => c.level === "UG" },
  { id: "diploma", label: "Diploma", note: "Open to All", match: (c) => c.level === "Diploma" },
  { id: "certificate", label: "Certificate", note: "Skill tracks", match: (c) => c.level === "Certificate" },
];

export function CourseTile({ item }: { item: Course }) {
  const Icon = courseIcon(item.name, item.shortName);
  return (
    <article className="flex flex-col justify-between rounded-2xl border border-border bg-card p-3 text-card-foreground shadow-[0_10px_30px_-22px_oklch(0_0_0/0.7)] sm:p-4">
      <div className="flex items-start gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-soft text-brand sm:h-11 sm:w-11">
          <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold leading-tight text-card-foreground sm:text-base">{item.displayName}</h3>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-muted-foreground sm:text-xs">
            <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            {item.duration}
          </p>
        </div>
      </div>

      <div className="mt-2.5 flex flex-wrap gap-1.5">
        <span className="rounded-md bg-secondary px-1.5 py-1 text-[10px] font-semibold text-secondary-foreground sm:px-2 sm:text-[11px]">
          {item.specialisations.length}+ Specializations
        </span>
        <span className="rounded-md bg-secondary px-1.5 py-1 text-[10px] font-semibold text-secondary-foreground sm:px-2 sm:text-[11px]">
          {item.universities}+ Universities
        </span>
      </div>

      <div className="mt-2.5 border-t border-border pt-2.5">
        <span className="block text-[10px] text-muted-foreground sm:text-[11px]">Fee range</span>
        <span className="block truncate text-[0.8rem] font-bold text-card-foreground sm:text-sm">{feeRangeInLakhs(item.feeRange)}</span>
        <AppLink
          to={`/courses/${item.slug}`}
          className="mt-2 block rounded-lg bg-brand px-3 py-1.5 text-center text-[11px] font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:text-xs"
        >
          Know More
        </AppLink>
      </div>
    </article>

  );
}

/** Programme finder: crimson sidebar of levels + compact course tiles. */
export function ProgramFinder({ items }: { items: Course[] }) {
  const available = groups.filter((g) => items.some(g.match));
  const [active, setActive] = useState(available[0]?.id ?? "pg");
  const group = available.find((g) => g.id === active) ?? available[0];
  const list = group ? items.filter(group.match) : items;

  return (
    <div className="panel-crimson overflow-hidden rounded-3xl p-3 sm:p-5 lg:p-6">
      <div className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-6">
        {/* Finder */}
        <div className="min-w-0 rounded-2xl bg-white/8 p-3 backdrop-blur-sm sm:p-4">
          <h3 className="font-display text-lg font-bold text-white sm:text-xl">Program Finder</h3>
          <p className="mt-0.5 text-xs text-white/70">Explore curated degrees</p>

          <div className="-mx-1 mt-3 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mx-0 lg:flex-col lg:px-0 lg:overflow-visible lg:pb-0">
            {available.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setActive(g.id)}
                aria-pressed={g.id === active}
                className={cn(
                  "shrink-0 rounded-xl px-3 py-2 text-left transition-colors lg:w-full",
                  g.id === active ? "bg-white text-[oklch(0.3_0.12_27)]" : "text-white/85 hover:bg-white/10",
                )}
              >
                <span className="block whitespace-nowrap text-sm font-semibold">{g.label}</span>
                <span
                  className={cn(
                    "mt-0.5 inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-medium",
                    g.id === active ? "bg-[oklch(0.42_0.16_28)]/12 text-[oklch(0.3_0.12_27)]" : "bg-white/10",
                  )}
                >
                  {g.note}
                </span>
              </button>
            ))}
          </div>

          <AppLink
            to="/contact"
            className="mt-4 block rounded-xl bg-[oklch(0.18_0.03_25)] px-4 py-2.5 text-center text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            Talk to a Counsellor
          </AppLink>
        </div>

        {/* Tiles */}
        <div className="min-w-0">
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 xl:grid-cols-3">
            {list.slice(0, 9).map((c) => (
              <CourseTile key={c.slug} item={c} />
            ))}
          </div>
          <div className="mt-4 text-right">
            <AppLink
              to="/courses"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/90 hover:text-white"
            >
              View all programs <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </AppLink>
          </div>
        </div>
      </div>
    </div>
  );
}

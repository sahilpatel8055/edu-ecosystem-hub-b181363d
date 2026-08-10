import { useMemo, useState } from "react";
import { UniversityCourseCard } from "@/components/cards/UniversityCourseCard";
import { getProgramme } from "@/data";
import type { Offering } from "@/data";
import { cn } from "@/lib/utils";

const levelOrder = ["PG", "UG", "Diploma", "Certificate"] as const;

/**
 * "Courses & fees" list with PG / UG level tabs so a university with 30+
 * programmes does not force a long scroll.
 */
export function CourseLevelTabs({
  offerings,
  universitySlug,
  feeFallback,
}: {
  offerings: Offering[];
  universitySlug: string;
  feeFallback?: string;
}) {
  const buckets = useMemo(() => {
    const map = new Map<string, Offering[]>();
    for (const o of offerings) {
      const level = getProgramme(o.programmeSlug)?.level ?? "Other";
      const list = map.get(level) ?? [];
      list.push(o);
      map.set(level, list);
    }
    return levelOrder
      .filter((l) => (map.get(l) ?? []).length > 0)
      .map((l) => ({ id: l as string, label: l === "PG" ? "PG Courses" : l === "UG" ? "UG Courses" : l, items: map.get(l)! }));
  }, [offerings]);

  const tabs = [{ id: "all", label: "All", items: offerings }, ...buckets];
  const [active, setActive] = useState(buckets[0]?.id ?? "all");
  const current = tabs.find((t) => t.id === active) ?? tabs[0]!;

  return (
    <div className="space-y-4">
      {buckets.length > 1 && (
        <div
          role="tablist"
          aria-label="Course level"
          className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={t.id === active}
              onClick={() => setActive(t.id)}
              className={cn(
                "shrink-0 rounded-full px-3.5 py-2 text-[0.82rem] font-bold transition-colors sm:text-sm",
                t.id === active
                  ? "bg-brand text-brand-foreground"
                  : "bg-secondary text-brand hover:bg-brand-soft",
              )}
            >
              {t.label}
              <span className="ml-1.5 font-semibold opacity-70">{t.items.length}</span>
            </button>
          ))}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        {current.items.map((o) => (
          <UniversityCourseCard
            key={o.id}
            offering={o}
            universitySlug={universitySlug}
            {...(feeFallback ? { feeFallback } : {})}
          />
        ))}
      </div>
    </div>
  );
}

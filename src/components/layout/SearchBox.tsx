import { useEffect, useId, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { searchAll, type SearchKind } from "@/lib/searchIndex";
import { cn } from "@/lib/utils";

interface SearchBoxProps {
  placeholder?: string;
  size?: "sm" | "lg";
  className?: string;
}

const KIND_STYLE: Record<SearchKind, string> = {
  Course: "bg-brand text-brand-foreground",
  University: "bg-brand-soft text-brand",
  Specialisation: "bg-secondary text-brand",
  Article: "bg-surface-2 text-muted-foreground",
};

/**
 * Global instant search over the shipped dataset (courses, universities,
 * specialisations, guides). Results state their type so users know what they
 * are about to open. No search dependency — the index is a few hundred rows.
 */
export function SearchBox({
  placeholder = "Search universities, courses, guides…",
  size = "sm",
  className,
}: SearchBoxProps) {
  const navigate = useNavigate();
  const listId = useId();
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const wrapRef = useRef<HTMLDivElement>(null);

  const results = useMemo(() => searchAll(query), [query]);
  const showPanel = open && query.trim().length >= 2;

  useEffect(() => setActive(0), [query]);

  useEffect(() => {
    const onDown = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const go = (href: string) => {
    setOpen(false);
    setQuery("");
    navigate({ to: href as never });
  };

  return (
    <div ref={wrapRef} className={cn("relative w-full", className)}>
      <form
        role="search"
        onSubmit={(e) => {
          e.preventDefault();
          const target = results[active] ?? results[0];
          if (target) go(target.href);
        }}
        className={cn(
          "group relative flex w-full items-center gap-2 rounded-full border border-border bg-surface-2 transition-colors focus-within:border-brand/60 focus-within:bg-card",
          size === "lg" ? "h-14 px-5" : "h-10 px-4",
        )}
      >
        <Search
          className={cn("shrink-0 text-muted-foreground", size === "lg" ? "h-5 w-5" : "h-4 w-4")}
          aria-hidden="true"
        />
        <input
          type="search"
          aria-label="Search courses, universities and guides"
          aria-expanded={showPanel}
          aria-controls={showPanel ? listId : undefined}
          aria-autocomplete="list"
          role="combobox"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          onKeyDown={(e) => {
            if (!results.length) return;
            if (e.key === "ArrowDown") {
              e.preventDefault();
              setActive((i) => (i + 1) % results.length);
            } else if (e.key === "ArrowUp") {
              e.preventDefault();
              setActive((i) => (i - 1 + results.length) % results.length);
            } else if (e.key === "Escape") {
              setOpen(false);
            }
          }}
          className={cn(
            "min-w-0 flex-1 bg-transparent outline-none placeholder:text-muted-foreground",
            size === "lg" ? "text-base" : "text-sm",
          )}
        />
        {size === "lg" && (
          <button
            type="submit"
            className="hidden shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:block"
          >
            Search
          </button>
        )}
      </form>

      {showPanel && (
        <div className="absolute left-0 right-0 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          {results.length === 0 ? (
            <div className="px-4 py-5 text-sm">
              <p className="font-semibold text-foreground">No matches for “{query.trim()}”.</p>
              <p className="mt-1 text-muted-foreground">
                Try a course name like “MBA”, a university name, or browse{" "}
                <button
                  type="button"
                  onClick={() => go("/courses")}
                  className="font-semibold text-brand underline"
                >
                  all courses
                </button>
                .
              </p>
            </div>
          ) : (
            <ul id={listId} role="listbox" className="max-h-[60vh] overflow-y-auto py-1">
              {results.map((r, i) => (
                <li key={`${r.kind}-${r.href}`} role="option" aria-selected={i === active}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(i)}
                    onClick={() => go(r.href)}
                    className={cn(
                      "flex min-h-11 w-full items-center gap-2.5 px-3 py-2 text-left",
                      i === active ? "bg-secondary" : "hover:bg-secondary",
                    )}
                  >
                    <span
                      className={cn(
                        "shrink-0 rounded-md px-1.5 py-1 text-[0.58rem] font-bold uppercase tracking-wide",
                        KIND_STYLE[r.kind],
                      )}
                    >
                      {r.kind}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-[0.82rem] font-semibold text-foreground">
                        {r.title}
                      </span>
                      {r.subtitle && (
                        <span className="block truncate text-[0.7rem] text-muted-foreground">
                          {r.subtitle}
                        </span>
                      )}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

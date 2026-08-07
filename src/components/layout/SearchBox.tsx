import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SearchBoxProps {
  placeholder?: string;
  size?: "sm" | "lg";
  className?: string;
}

/** Global search placeholder — wire to a search index (Algolia/Typesense) later. */
export function SearchBox({ placeholder = "Search universities, courses, guides…", size = "sm", className }: SearchBoxProps) {
  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className={cn(
        "group relative flex w-full items-center gap-2 rounded-full border border-border bg-surface-2 transition-colors focus-within:border-brand/60 focus-within:bg-card",
        size === "lg" ? "h-14 px-5" : "h-10 px-4",
        className,
      )}
    >
      <Search className={cn("shrink-0 text-muted-foreground", size === "lg" ? "h-5 w-5" : "h-4 w-4")} />
      <input
        type="search"
        aria-label="Search the knowledge hub"
        placeholder={placeholder}
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
  );
}
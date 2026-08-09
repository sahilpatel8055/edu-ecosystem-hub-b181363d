import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

/**
 * Sticky in-page section navigation (pill chips), sits under the site header
 * on every detail page. Horizontally scrollable on mobile, scroll-spy active state.
 */
export function SectionNav({ sections }: { sections: string[] }) {
  const [active, setActive] = useState(() => slugify(sections[0] ?? ""));

  useEffect(() => {
    const ids = sections.map(slugify);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => Boolean(n));
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-140px 0px -65% 0px", threshold: 0 },
    );
    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav
      aria-label="Page sections"
      className="sticky top-16 z-30 border-y border-border bg-card/95 backdrop-blur lg:top-[4.5rem]"
    >
      <div className="container-page">
        <ul className="-mx-1 flex gap-2 overflow-x-auto px-1 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((s) => {
            const id = slugify(s);
            return (
              <li key={s}>
                <a
                  href={`#${id}`}
                  aria-current={active === id ? "true" : undefined}
                  className={cn(
                    "block whitespace-nowrap rounded-lg px-3.5 py-2 text-[0.82rem] font-bold transition-colors sm:text-sm",
                    active === id
                      ? "bg-brand text-brand-foreground"
                      : "bg-secondary text-brand hover:bg-brand-soft",
                  )}
                >
                  {s}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

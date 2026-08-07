import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ChevronDown, GraduationCap, Menu, Moon, Sun, X } from "lucide-react";
import { primaryNav, type NavItem } from "@/lib/navigation";
import { useTheme } from "@/hooks/use-theme";
import { SearchBox } from "./SearchBox";
import { cn } from "@/lib/utils";

function MegaMenu({ item }: { item: NavItem }) {
  if (!item.columns) return null;
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[min(58rem,calc(100vw-3rem))] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="surface-card grid gap-8 p-7 md:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))]">
        {item.columns.map((col) => (
          <div key={col.heading}>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              {col.heading}
            </p>
            <ul className="space-y-1">
              {col.links.map((link) => (
                <li key={link.label + link.href}>
                  <Link
                    to={link.href}
                    className="block rounded-lg px-2 py-1.5 text-sm font-medium text-foreground/85 transition-colors hover:bg-brand-soft hover:text-foreground"
                  >
                    {link.label}
                    {link.description && (
                      <span className="mt-0.5 block text-xs font-normal text-muted-foreground">
                        {link.description}
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        {item.featured && (
          <Link
            to={item.featured.href}
            className="flex flex-col justify-between rounded-xl bg-brand-soft p-5 transition-colors hover:bg-brand-soft/70"
          >
            <div>
              <p className="text-sm font-semibold">{item.featured.title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{item.featured.description}</p>
            </div>
            <span className="mt-4 text-xs font-semibold text-brand">{item.featured.cta} →</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const { theme, toggle, mounted } = useTheme();

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <div className="container-page flex h-16 items-center gap-4 lg:h-[4.5rem]">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="AVEDU Insights home">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand text-brand-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="min-w-0">
            <span className="block font-display text-base font-bold leading-tight">AVEDU</span>
            <span className="block text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
              Insights
            </span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center justify-center xl:flex" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.label} className="group static">
                <Link
                  to={item.href}
                  className="inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-secondary hover:text-foreground"
                  activeProps={{ className: "bg-secondary text-foreground" }}
                >
                  {item.label}
                  {item.columns && <ChevronDown className="h-3.5 w-3.5 opacity-60" />}
                </Link>
                <MegaMenu item={item} />
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="hidden w-56 lg:block">
            <SearchBox placeholder="Search…" />
          </div>
          <button
            type="button"
            onClick={toggle}
            aria-label="Toggle colour theme"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border text-foreground/80 transition-colors hover:bg-secondary"
          >
            {mounted && theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link
            to="/contact"
            className="hidden shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get guidance
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-border xl:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-border bg-background xl:hidden">
          <div className="container-page space-y-2 py-4">
            <SearchBox />
            {primaryNav.map((item) => (
              <div key={item.label} className="border-b border-border/60 pb-2">
                <div className="flex items-center justify-between">
                  <Link
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="py-2.5 text-sm font-semibold"
                  >
                    {item.label}
                  </Link>
                  {item.columns && (
                    <button
                      type="button"
                      aria-label={`Expand ${item.label}`}
                      onClick={() => setExpanded((p) => (p === item.label ? null : item.label))}
                      className="grid h-8 w-8 place-items-center rounded-full hover:bg-secondary"
                    >
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", expanded === item.label && "rotate-180")}
                      />
                    </button>
                  )}
                </div>
                {item.columns && expanded === item.label && (
                  <div className="grid gap-4 pb-2 sm:grid-cols-2">
                    {item.columns.map((col) => (
                      <div key={col.heading}>
                        <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                          {col.heading}
                        </p>
                        <ul>
                          {col.links.map((l) => (
                            <li key={l.label + l.href}>
                              <Link
                                to={l.href}
                                onClick={() => setOpen(false)}
                                className="block py-1.5 text-sm text-foreground/80"
                              >
                                {l.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
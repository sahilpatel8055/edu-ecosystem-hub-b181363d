import { AppLink } from "@/components/common/AppLink";
import { ArrowUpRight, GraduationCap, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";
import { ecosystemLinks, footerNav } from "@/lib/navigation";
import { NewsletterSignup } from "@/components/common/NewsletterSignup";

const socials = [
  { label: "LinkedIn", Icon: Linkedin },
  { label: "Instagram", Icon: Instagram },
  { label: "YouTube", Icon: Youtube },
  { label: "X", Icon: Twitter },
];

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface-2">
      <div className="container-page py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <AppLink to="/" className="flex items-center">
              <img
                src="/degreekhojo-logo.png"
                alt="Degreekhojo logo"
                width={180}
                height={48}
                loading="lazy"
                className="h-10 w-auto object-contain"
              />
            </AppLink>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Independent research, comparisons and guidance on India's online and distance education
              landscape — built for learners who want verified answers, not sales pitches.
            </p>
            <div className="mt-6 max-w-sm">
              <NewsletterSignup compact />
            </div>
            <div className="mt-6 flex gap-2">
              {socials.map(({ label, Icon }) => (
                <span
                  key={label}
                  aria-label={label}
                  title={`${label} (coming soon)`}
                  className="grid h-9 w-9 cursor-pointer place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-brand/50 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerNav.map((col) => (
              <div key={col.heading}>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  {col.heading}
                </p>
                <ul className="space-y-2">
                  {col.links.map((l) => (
                    <li key={l.href}>
                      <AppLink to={l.href} className="text-sm text-foreground/80 transition-colors hover:text-brand">
                        {l.label}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            AVEDU ecosystem
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {ecosystemLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noopener"
                className="surface-card hover-lift flex items-center justify-between gap-3 p-4"
              >
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold">{l.label}</span>
                  <span className="block truncate text-xs text-muted-foreground">{l.description}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-brand" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} AVEDU Insights. All rights reserved.</p>
          <div className="flex flex-wrap gap-4">
            <AppLink to="/privacy-policy" className="hover:text-foreground">Privacy policy</AppLink>
            <AppLink to="/terms-and-conditions" className="hover:text-foreground">Terms & conditions</AppLink>
            <AppLink to="/about" className="hover:text-foreground">Editorial policy</AppLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
import { Phone, ShieldCheck, Star } from "lucide-react";
import { AppLink } from "./AppLink";

/** Sticky table of contents placeholder — headings come from CMS content later. */
export function TableOfContents({
  sections = ["Overview", "Key highlights", "Eligibility", "Fee structure", "FAQs"],
}: {
  sections?: string[];
}) {
  if (sections.length === 0) return null;
  return (

    <nav aria-label="On this page" className="surface-card p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">On this page</p>
      <ol className="space-y-2 border-l border-border pl-4">
        {sections.map((s, i) => (
          <li key={s}>
            <a
              href={`#${s.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
              className={
                i === 0
                  ? "-ml-4 block border-l-2 border-brand pl-4 text-sm font-semibold text-brand"
                  : "block text-sm text-muted-foreground transition-colors hover:text-foreground"
              }
            >
              {s}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Lead generation placeholder — connect to CRM/Cloud later. */
export function LeadCaptureCard({ title = "Get free admission guidance" }: { title?: string }) {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="surface-card space-y-3 bg-brand-soft p-5"
      data-lead-form="sidebar"
    >
      <p className="text-sm font-bold">{title}</p>
      <p className="text-xs text-muted-foreground">
        Verified counsellors from the AVEDU network. No cost, no spam.
      </p>
      <input
        aria-label="Full name"
        placeholder="Full name"
        className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-brand"
      />
      <input
        aria-label="Phone number"
        placeholder="Phone number"
        className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-brand"
      />
      <select
        aria-label="Interested programme"
        className="h-10 w-full rounded-lg border border-border bg-card px-3 text-sm outline-none focus:border-brand"
      >
        <option>Interested programme</option>
        <option>Online MBA</option>
        <option>Online MCA</option>
        <option>Online BBA</option>
        <option>Other</option>
      </select>
      <button
        type="submit"
        className="flex h-10 w-full items-center justify-center gap-2 rounded-lg bg-brand text-sm font-semibold text-brand-foreground"
      >
        <Phone className="h-4 w-4" /> Request callback
      </button>
      <p className="flex items-center gap-1.5 text-[0.7rem] text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5" /> Your details stay private.
      </p>
    </form>
  );
}

export function TrustCard() {
  return (
    <div className="surface-card p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        Why trust this page
      </p>
      <ul className="space-y-2.5 text-sm text-muted-foreground">
        <li className="flex gap-2">
          <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand" /> Verified against UGC-DEB records
        </li>
        <li className="flex gap-2">
          <Star className="mt-0.5 h-4 w-4 shrink-0 text-highlight" /> Reviewed by the AVEDU editorial desk
        </li>
      </ul>
      <AppLink to="/about" className="mt-4 inline-block text-sm font-semibold text-brand hover:underline">
        Our editorial policy →
      </AppLink>
    </div>
  );
}
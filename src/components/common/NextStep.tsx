import { ArrowRight } from "lucide-react";
import { AppLink } from "./AppLink";

/**
 * Subtle contextual "next step" strip placed after a content section.
 * Uses existing routes / in-page anchors only — no new URLs, no hard sell.
 */
export function NextStep({
  question,
  actionLabel,
  href,
}: {
  question: string;
  actionLabel: string;
  href: string;
}) {
  const isAnchor = href.startsWith("#");
  const inner = (
    <>
      <span className="min-w-0 text-[0.86rem] font-medium text-brand-foreground/90">{question}</span>
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-brand-foreground/15 px-3 py-1.5 text-[0.86rem] font-bold text-brand-foreground">
        {actionLabel} <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </>
  );
  const className =
    "flex min-h-11 flex-wrap items-center justify-between gap-x-4 gap-y-1.5 rounded-xl border border-brand bg-brand px-4 py-3 shadow-sm transition-opacity hover:opacity-95";


  return isAnchor ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <AppLink to={href} className={className}>
      {inner}
    </AppLink>
  );
}

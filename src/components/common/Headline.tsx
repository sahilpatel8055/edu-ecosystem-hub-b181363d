import type { ReactNode } from "react";

/**
 * Renders a headline with its closing words in the brand accent colour
 * (#7f1813) and the rest in the heading ink colour (#060606).
 * Used by every shared heading component so the treatment is site-wide.
 */
export function AccentHeadline({ text, words = 2 }: { text: string; words?: number }): ReactNode {
  const parts = text.trim().split(/\s+/);
  if (parts.length < 3) return <span className="text-brand">{text}</span>;
  const accentCount = Math.min(words, Math.max(1, parts.length - 1));
  const head = parts.slice(0, parts.length - accentCount).join(" ");
  const tail = parts.slice(parts.length - accentCount).join(" ");
  return (
    <>
      {head} <span className="text-brand">{tail}</span>
    </>
  );
}
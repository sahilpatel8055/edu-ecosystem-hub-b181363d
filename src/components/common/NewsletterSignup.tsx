import { useState } from "react";
import { Check, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

export function NewsletterSignup({ compact = false, className }: { compact?: boolean; className?: string }) {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (email.trim()) setDone(true);
      }}
      className={cn("w-full", className)}
    >
      {!compact && (
        <>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">Admission intelligence, weekly</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Deadlines, fee changes and new programme approvals — one concise email, no spam.
          </p>
        </>
      )}
      <div className={cn("flex flex-col gap-2 sm:flex-row", compact ? "mt-0" : "mt-6")}>
        <label className="sr-only" htmlFor={compact ? "nl-compact" : "nl-main"}>
          Email address
        </label>
        <div className="flex h-11 flex-1 items-center gap-2 rounded-full border border-border bg-card px-4">
          <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
          <input
            id={compact ? "nl-compact" : "nl-main"}
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <button
          type="submit"
          className="h-11 shrink-0 rounded-full bg-brand px-6 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
        >
          {done ? "Subscribed" : "Subscribe"}
        </button>
      </div>
      {done && (
        <p className="mt-2 flex items-center gap-1.5 text-xs text-success">
          <Check className="h-3.5 w-3.5" /> You're on the list. Confirmation sent.
        </p>
      )}
      {!done && <p className="mt-2 text-xs text-muted-foreground">Unsubscribe anytime.</p>}
    </form>
  );
}
import { useEffect, useState } from "react";
import { useRouterState } from "@tanstack/react-router";
import { X, Sparkles } from "lucide-react";

type Copy = { eyebrow: string; title: string; body: string };

function copyForPath(path: string): Copy {
  if (path.startsWith("/compare"))
    return {
      eyebrow: "Still comparing?",
      title: "Get a personalised university shortlist",
      body: "Share your details and our counsellor will compare fees, approvals and outcomes for your exact course — free of cost.",
    };
  if (path.startsWith("/courses") || path.startsWith("/online-courses"))
    return {
      eyebrow: "Choosing a programme?",
      title: "Find the right course for your goal",
      body: "Tell us your background and we'll map the specialisations, fees and eligibility that actually fit you.",
    };
  if (path.startsWith("/universities") || path.startsWith("/university"))
    return {
      eyebrow: "Considering this university?",
      title: "Check your admission eligibility",
      body: "Get verified fee structure, scholarship options and the current admission window for this university.",
    };
  if (path.startsWith("/scholarships"))
    return {
      eyebrow: "Fee support",
      title: "See which scholarships you qualify for",
      body: "We'll check merit, defence, women and early-bird waivers you can still claim this session.",
    };
  return {
    eyebrow: "Free guidance",
    title: "Not sure which online degree to pick?",
    body: "Speak to an unbiased AVEDU counsellor — no spam, no pressure, just verified information.",
  };
}

export function LeadPopup({ delayMs = 22000 }: { delayMs?: number }) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("avedu-lead-popup") === "seen") return;
    const id = window.setTimeout(() => setOpen(true), delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem("avedu-lead-popup", "seen");
    } catch {
      /* ignore */
    }
  };

  if (!open) return null;
  const copy = copyForPath(path);

  return (
    <div className="fixed inset-0 z-[60] flex items-end justify-center bg-black/45 p-3 backdrop-blur-sm sm:items-center">
      <div
        role="dialog"
        aria-modal="true"
        aria-label={copy.title}
        className="relative w-full max-w-md overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        {sent ? (
          <div className="py-6 text-center">
            <h2 className="text-lg font-bold text-foreground">Thanks — request received</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Our counsellor will reach out shortly with verified details for your shortlist.
            </p>
            <button
              type="button"
              onClick={close}
              className="mt-5 rounded-lg bg-brand px-4 py-2 text-sm font-semibold text-brand-foreground"
            >
              Close
            </button>
          </div>
        ) : (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-brand">
              <Sparkles className="h-3.5 w-3.5" /> {copy.eyebrow}
            </span>
            <h2 className="mt-3 font-display text-xl font-extrabold leading-snug text-foreground">{copy.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{copy.body}</p>

            <form
              className="mt-5 grid gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input
                required
                name="name"
                placeholder="Your name"
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <input
                required
                name="phone"
                type="tel"
                pattern="[0-9+ ]{10,15}"
                placeholder="Mobile number"
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <input
                name="interest"
                placeholder="Course you're interested in (optional)"
                className="h-11 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
              <button
                type="submit"
                className="h-11 rounded-lg bg-[#7f1813] text-sm font-bold text-white transition-opacity hover:opacity-90"
              >
                Get free guidance
              </button>
              <button
                type="button"
                onClick={close}
                className="text-xs font-medium text-muted-foreground underline-offset-2 hover:underline"
              >
                No thanks, I'll keep reading
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

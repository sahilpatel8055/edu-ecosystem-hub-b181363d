import { useEffect, useRef, useState } from "react";
import { Headset, Phone, MessageCircle } from "lucide-react";

export const AVEDU_PHONE = "+919000000000";
export const AVEDU_WHATSAPP = "919000000000";

/**
 * Compact header CTA (mobile-first): one round button that opens a small
 * Call / WhatsApp menu — the two highest-intent contact actions.
 */
export function ContactQuickMenu() {
  const [open, setOpen] = useState(false);
  const [hint, setHint] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Gentle nudge at 36s — after the chat teaser has gone, before the lead popup.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const show = window.setTimeout(() => setHint(true), 36000);
    const hide = window.setTimeout(() => setHint(false), 46000);
    return () => {
      window.clearTimeout(show);
      window.clearTimeout(hide);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label="Contact a counsellor"
        aria-expanded={open}
        className="grid h-10 w-10 place-items-center rounded-full bg-[#7f1813] text-white shadow-md transition-transform hover:-translate-y-0.5"
      >
        <Headset className="h-[1.15rem] w-[1.15rem]" />
      </button>

      {hint && !open && (
        <button
          type="button"
          onClick={() => {
            setHint(false);
            setOpen(true);
          }}
          className="absolute right-0 top-12 z-50 w-max max-w-[12rem] animate-fade-in rounded-xl border border-border bg-card px-3 py-2 text-left text-[0.72rem] font-medium leading-snug text-foreground shadow-lg"
        >
          <span className="mr-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" />
          Counsellors online — get connected now
        </button>
      )}

      {open && (
        <div className="absolute right-0 top-12 z-50 w-48 overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
          <a
            href={`tel:${AVEDU_PHONE}`}
            onClick={() => setOpen(false)}
            className="flex min-h-12 items-center gap-3 px-4 text-[0.95rem] font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <Phone className="h-4 w-4 text-[#7f1813]" /> Call
          </a>
          <a
            href={`https://wa.me/${AVEDU_WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="flex min-h-12 items-center gap-3 border-t border-border px-4 text-[0.95rem] font-semibold text-foreground transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-4 w-4 text-[#25D366]" /> WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}

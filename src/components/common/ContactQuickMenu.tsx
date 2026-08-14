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
  const ref = useRef<HTMLDivElement>(null);

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

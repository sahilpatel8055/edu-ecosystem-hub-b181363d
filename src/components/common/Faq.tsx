import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

export interface FaqItem {
  question: string;
  answer: string;
}

export const placeholderFaqs: FaqItem[] = [
  {
    question: "What are the eligibility requirements?",
    answer:
      "Eligibility varies by programme and university. This section is populated from structured CMS data so each page shows its own verified criteria.",
  },
  {
    question: "How is the fee structured and can it be paid in instalments?",
    answer:
      "Most universities allow semester-wise or EMI payments. Exact figures are maintained per programme and updated every admission cycle.",
  },
  {
    question: "Is the degree valid for higher studies and government jobs?",
    answer:
      "Degrees from UGC-entitled and DEB-approved programmes carry the same recognition as on-campus degrees.",
  },
];

export function Faq({ items = placeholderFaqs, title = "Frequently asked questions" }: { items?: FaqItem[]; title?: string }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div>
      <h2 className="text-2xl font-bold sm:text-3xl">{title}</h2>
      <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card">
        {items.map((item, i) => (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen((p) => (p === i ? null : i))}
              aria-expanded={open === i}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
            >
              <span className="min-w-0 text-sm font-semibold sm:text-base">{item.question}</span>
              <Plus
                className={cn(
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                  open === i && "rotate-45",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-all duration-300",
                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground sm:px-6">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
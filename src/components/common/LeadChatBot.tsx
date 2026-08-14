import { useEffect, useRef, useState } from "react";
import { MessageSquareDots, X, Send } from "lucide-react";

type Msg = { from: "bot" | "user"; text: string };

const LEVELS = ["UG (Bachelor's)", "PG (Master's)", "Not sure yet"];
const GOALS = ["Better job / promotion", "Government job eligibility", "Higher studies", "Business / startup"];

/** Instant, rule-based answers so the user gets value before giving details. */
function autoAnswer(level: string, goal: string) {
  const ug = level.startsWith("UG");
  const pick = ug
    ? "Online BBA, BCA or B.Com"
    : level.startsWith("PG")
      ? "Online MBA, MCA or M.Com"
      : "an Online BBA (UG) or Online MBA (PG)";
  const note = goal.startsWith("Government")
    ? "All UGC-entitled online degrees are valid for government jobs and NET/PhD."
    : goal.startsWith("Higher")
      ? "A UGC-entitled online degree is accepted for PG admission and NET/PhD."
      : goal.startsWith("Business")
        ? "Look for programmes with entrepreneurship or finance electives and flexible exams."
        : "Employers accept UGC-entitled online degrees the same as regular ones.";
  return `Based on that, ${pick} fits you best. ${note} Typical fees range ₹40,000–₹1.8 lakh for the full programme, with scholarships up to 30%.`;
}

export function LeadChatBot() {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [level, setLevel] = useState("");
  const [goal, setGoal] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { from: "bot", text: "Hi 👋 I'm AVEDU Assist. Two quick questions and I'll suggest the right online degree for you." },
    { from: "bot", text: "Which level are you looking for?" },
  ]);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: "end" });
  }, [msgs, step]);

  const push = (m: Msg[]) => setMsgs((prev) => [...prev, ...m]);

  const chooseLevel = (v: string) => {
    setLevel(v);
    setStep(1);
    push([{ from: "user", text: v }, { from: "bot", text: "Got it. What's your main goal?" }]);
  };

  const chooseGoal = (v: string) => {
    setGoal(v);
    setStep(2);
    push([
      { from: "user", text: v },
      { from: "bot", text: autoAnswer(level, v) },
      { from: "bot", text: "Want a free counsellor call with the exact fee and scholarship for your case? Share your name and mobile." },
    ]);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
    push([
      { from: "user", text: `${name} · ${phone}` },
      { from: "bot", text: `Thanks ${name.split(" ")[0] || "there"}! Our counsellor will call you shortly with a shortlist for ${goal.toLowerCase()}.` },
    ]);
  };

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Chat with AVEDU Assist"
          className="fixed bottom-24 right-4 z-50 grid h-14 w-14 place-items-center rounded-2xl bg-[#7f1813] text-white shadow-[0_16px_36px_-14px_oklch(0_0_0/0.7)] transition-transform hover:-translate-y-0.5 lg:bottom-28 lg:right-6"
        >
          <MessageSquareDots className="h-6 w-6" />
          <span className="absolute -right-0.5 -top-0.5 h-3.5 w-3.5 rounded-full border-2 border-white bg-emerald-500" />
        </button>
      )}

      {open && (
        <div className="fixed inset-x-3 bottom-24 z-50 flex max-h-[68dvh] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl sm:inset-x-auto sm:right-6 sm:w-[22rem] lg:bottom-28">
          <div className="flex items-center justify-between bg-[#7f1813] px-4 py-3 text-white">
            <div className="min-w-0">
              <p className="truncate text-sm font-bold">AVEDU Assist</p>
              <p className="text-[0.7rem] text-white/80">Typically replies instantly</p>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat" className="shrink-0 rounded-full p-1.5 hover:bg-white/15">
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="flex-1 space-y-2.5 overflow-y-auto bg-secondary/40 px-3 py-3">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "bot"
                    ? "max-w-[85%] rounded-2xl rounded-tl-sm bg-card px-3.5 py-2.5 text-[0.85rem] leading-relaxed text-foreground shadow-sm"
                    : "ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-[#7f1813] px-3.5 py-2.5 text-[0.85rem] font-medium text-white"
                }
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          <div className="border-t border-border bg-card p-3">
            {step === 0 && (
              <div className="flex flex-wrap gap-2">
                {LEVELS.map((l) => (
                  <button key={l} type="button" onClick={() => chooseLevel(l)} className="rounded-full border border-border px-3 py-2 text-[0.8rem] font-semibold hover:bg-secondary">
                    {l}
                  </button>
                ))}
              </div>
            )}
            {step === 1 && (
              <div className="flex flex-wrap gap-2">
                {GOALS.map((g) => (
                  <button key={g} type="button" onClick={() => chooseGoal(g)} className="rounded-full border border-border px-3 py-2 text-[0.8rem] font-semibold hover:bg-secondary">
                    {g}
                  </button>
                ))}
              </div>
            )}
            {step === 2 && (
              <form onSubmit={submit} className="grid gap-2">
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="h-10 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
                <div className="flex gap-2">
                  <input
                    required
                    type="tel"
                    pattern="[0-9+ ]{10,15}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Mobile number"
                    className="h-10 min-w-0 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  />
                  <button type="submit" aria-label="Send details" className="grid h-10 w-11 shrink-0 place-items-center rounded-lg bg-[#7f1813] text-white">
                    <Send className="h-4 w-4" />
                  </button>
                </div>
              </form>
            )}
            {step === 3 && (
              <a
                href="https://wa.me/919000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 items-center justify-center rounded-lg bg-[#25D366] text-sm font-bold text-white"
              >
                Continue on WhatsApp
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}

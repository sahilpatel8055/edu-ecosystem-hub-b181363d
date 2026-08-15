import { useState } from "react";
import { CheckCircle2, Headphones, ShieldCheck } from "lucide-react";
import { universities } from "@/lib/content";
import { universityLogo } from "@/lib/assets";

const COURSES = [
  "Online MBA",
  "Online MCA",
  "Online BBA",
  "Online BCA",
  "Online B.Com",
  "Online M.Com",
  "Online BA",
  "Online MA",
  "Online M.Sc",
  "Not sure yet",
];

const STATES = [
  "Andhra Pradesh", "Assam", "Bihar", "Chhattisgarh", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra",
  "Odisha", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Other / Outside India",
];

const field =
  "h-11 w-full rounded-xl border border-input bg-background px-3.5 text-[0.9rem] outline-none transition-colors focus-visible:border-[#7f1813] focus-visible:ring-2 focus-visible:ring-[#7f1813]/25";

/** Auto-scrolling university logo ribbon. Pure CSS, duplicated track for a seamless loop. */
export function UniversityLogoMarquee() {
  const items = universities.slice(0, 14);
  const track = [...items, ...items];
  return (
    <div className="marquee rounded-xl border border-border bg-secondary/40 py-2.5">
      <ul className="marquee-track items-center" style={{ animationDuration: "28s", gap: "1.5rem" }}>
        {track.map((u, i) => {
          const logo = universityLogo(u.slug);
          return (
            <li key={`${u.slug}-${i}`} className="shrink-0">
              {logo ? (
                <img
                  src={logo}
                  alt={`${u.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-7 w-auto max-w-[5.5rem] object-contain opacity-80"
                />
              ) : (
                <span className="text-[0.7rem] font-bold text-muted-foreground">{u.shortName}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/**
 * Free counselling form — name, email, phone, course and state.
 * Mobile-first: generous padding, 44px controls and single-column layout.
 */
export function CounsellingForm({
  title = "Book Free 1-1 counselling session",
  subtitle = "Let's Find your right online degree togethor.",
  compact = false,
  onDone,
}: {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  onDone?: () => void;
}) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="px-5 py-10 text-center sm:px-8">
        <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#7f1813]/10 text-[#7f1813]">
          <CheckCircle2 className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-display text-lg font-extrabold">Request received</h3>
        <p className="mx-auto mt-2 max-w-sm text-[0.88rem] leading-relaxed text-muted-foreground">
          A counsellor will call you shortly with a shortlist matched to your course, state and budget.
        </p>
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="mt-5 rounded-xl bg-[#7f1813] px-5 py-2.5 text-sm font-bold text-white"
          >
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <div className={compact ? "p-5 sm:p-6" : "p-5 sm:p-8"}>
      <div className="flex flex-col items-center gap-3 text-center sm:flex-row sm:items-start sm:text-left">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#7f1813] text-white">
          <Headphones className="h-5 w-5" />
        </span>
        <div className="min-w-0">
          <h2 className="font-display text-lg font-extrabold leading-snug text-foreground sm:text-xl">
            {title}
          </h2>
          <p className="mt-1.5 text-[0.85rem] leading-relaxed text-muted-foreground">{subtitle}</p>
        </div>
      </div>

      <div className="mt-4">
        <UniversityLogoMarquee />
      </div>

      <form
        className="mx-auto mt-5 grid w-full max-w-md gap-3 sm:max-w-none sm:grid-cols-2"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <label className="block">
          <span className={label}>Full name :</span>
          <input required name="name" autoComplete="name" placeholder="Full name" className={field} />
        </label>
        <label className="block">
          <span className={label}>Email :</span>
          <input
            required
            name="email"
            type="email"
            autoComplete="email"
            placeholder="Email address"
            className={field}
          />
        </label>
        <label className="block sm:col-span-2">
          <span className={label}>Mobile :</span>
          <input
            required
            name="phone"
            type="tel"
            inputMode="numeric"
            pattern="[0-9+ ]{10,15}"
            autoComplete="tel"
            placeholder="Mobile number"
            className={field}
          />
        </label>
        <div className="grid grid-cols-2 gap-3 sm:col-span-2">
          <label className="block min-w-0">
            <span className={label}>Course :</span>
            <select required name="course" defaultValue="" className={field}>
              <option value="" disabled>
                Select course
              </option>
              {COURSES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="block min-w-0">
            <span className={label}>State :</span>
            <select required name="state" defaultValue="" className={field}>
              <option value="" disabled>
                Select state
              </option>
              {STATES.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>
        </div>
        <button
          type="submit"
          className="h-12 rounded-xl bg-[#7f1813] text-sm font-bold text-white transition-opacity hover:opacity-90 sm:col-span-2"
        >
          Get free counselling
        </button>
      </form>

      <p className="mt-3 flex items-center justify-center gap-1.5 text-center text-[0.72rem] font-medium text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5 shrink-0" /> Your details stay private. No spam calls.
      </p>
    </div>
  );
}

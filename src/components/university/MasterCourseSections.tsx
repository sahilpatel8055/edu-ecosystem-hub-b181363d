import { useState } from "react";
import type { CourseMaster, UniversityCourseMaster } from "@/lib/courseMaster";

/* ----------------------------- Curriculum ----------------------------- */

/**
 * Semester-wise curriculum. Always-open cards, two semesters per row
 * (Sem 1–2, then Sem 3–4), with the semester label on the brand bar.
 * Uses the common course structure when the university publishes no
 * verified syllabus of its own — always labelled as such.
 */
export function CurriculumSection({
  course,
  universityShort,
  universitySpecificNote,
}: {
  course: CourseMaster;
  universityShort: string;
  universitySpecificNote?: string | undefined;
}) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        {universitySpecificNote
          ? universitySpecificNote
          : `Curriculum shown as the common ${course.title} course structure. The ${universityShort} syllabus may vary — confirm the current structure with the university.`}
      </p>
      <p className="text-xs text-subtle">Indicative duration: {course.duration}</p>

      <div className="grid gap-3 sm:grid-cols-2">
        {course.semesters.map((sem) => (
          <div key={sem.label} className="surface-card overflow-hidden">
            <div className="bg-brand px-4 py-3 text-brand-foreground">
              <span className="font-display text-base font-extrabold">{sem.label}</span>
            </div>
            <ul className="space-y-1.5 border-t border-border px-4 py-3">
              {sem.subjects.map((s) => (
                <li key={s} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                  <span aria-hidden="true" className="mt-0.5 text-brand">✓</span>
                  <span className="min-w-0">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* --------------------------- Specialisations --------------------------- */

/** Specialisation cards; selecting one reveals its elective subjects. */
export function SpecialisationElectives({
  course,
  universitySpecialisations,
  universityShort,
}: {
  course: CourseMaster;
  universitySpecialisations?: string[] | undefined;
  universityShort: string;
}) {
  const names = Object.keys(course.electives);
  const [active, setActive] = useState<string | null>(names[0] ?? null);
  if (names.length === 0) return null;

  return (
    <div className="space-y-4">
      {universitySpecialisations && universitySpecialisations.length > 0 && (
        <div>
          <h3 className="text-sm font-bold text-foreground">Specialisations offered at {universityShort}</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {universitySpecialisations.map((s) => (
              <span key={s} className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand">
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      <h3 className="text-sm font-bold text-foreground">Elective tracks and their subjects</h3>
      <div className="-mx-1 flex snap-x gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible">
        {names.map((n) => (
          <button
            key={n}
            type="button"
            aria-pressed={active === n}
            onClick={() => setActive(n)}
            className={`shrink-0 snap-start rounded-xl border px-3 py-2 text-sm font-semibold transition-colors ${
              active === n
                ? "border-brand bg-brand text-brand-foreground"
                : "border-border bg-card text-foreground hover:bg-secondary"
            }`}
          >
            {n}
          </button>
        ))}
      </div>

      {active && (
        <div className="surface-card p-4">
          <p className="text-sm font-bold text-foreground">{active} electives</p>
          <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
            {(course.electives[active] ?? []).map((s) => (
              <li key={s} className="text-sm text-muted-foreground">
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-subtle">
            Specialisation subjects are electives, not compulsory core papers. Availability varies by university.
          </p>
        </div>
      )}
    </div>
  );
}

/* ------------------------- Verified data blocks ------------------------- */

export function VerifiedNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
      {children}
    </div>
  );
}

/** Fee, exam, eligibility and scholarship facts sourced from the dataset. */
export function MasterFacts({
  data,
  universityShort,
}: {
  data: UniversityCourseMaster;
  universityShort: string;
}) {
  const rows: Array<{ label: string; value: string }> = [];
  if (data.feeNote) rows.push({ label: "Fee (as researched)", value: data.feeNote });
  if (data.eligibility) rows.push({ label: "Eligibility", value: data.eligibility });
  if (data.examPattern) rows.push({ label: "Examination pattern", value: data.examPattern });
  if (data.universityNote) rows.push({ label: "University note", value: data.universityNote });
  if (rows.length === 0) return null;
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {rows.map((r) => (
        <div key={r.label} className="surface-card p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand">{r.label}</p>
          <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{r.value}</p>
        </div>
      ))}
      <p className="text-xs text-subtle sm:col-span-2">
        Fees, admission dates, scholarships and exam schedules change. Verify with {universityShort} before applying.
      </p>
    </div>
  );
}

/** Scholarship categories — names only, never invented percentages. */
export function ScholarshipCategories({
  scholarships,
  note,
  universityShort,
}: {
  scholarships?: string[] | undefined;
  note?: string | undefined;
  universityShort: string;
}) {
  if (scholarships && scholarships.length > 0) {
    return (
      <div className="space-y-3">
        <div className="grid gap-2 sm:grid-cols-2">
          {scholarships.map((s) => (
            <div key={s} className="surface-card p-3">
              <p className="text-sm font-semibold text-foreground">{s} category</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Eligibility and benefit are set by {universityShort}'s current scholarship policy.
              </p>
            </div>
          ))}
        </div>
        <p className="text-xs text-subtle">
          Benefit percentages are published only when an official notice confirms them.
        </p>
      </div>
    );
  }
  return (
    <VerifiedNote>
      {note ??
        `Scholarships may be available. Check ${universityShort}'s current scholarship policy before applying.`}
    </VerifiedNote>
  );
}
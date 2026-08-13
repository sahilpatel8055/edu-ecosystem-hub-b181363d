/**
 * Presentation blocks for the Phase 1–7 publication-ready research pack.
 * Every block renders the researched text verbatim and shows an explicit
 * "not published / verification required" note where the pack says so.
 */
import { AppLink } from "@/components/common/AppLink";
import {
  isUnpublished,
  NOT_PUBLISHED_LABEL,
  PUB_SESSION,
  pubComparison,
  pubCoursePage,
  pubPillar,
  pubSpecialisation,
  pubUniversity,
} from "@/lib/pubContent";

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-[0.95rem] leading-relaxed text-muted-foreground">{children}</p>;
}

export function VerificationNote({ text }: { text?: string | undefined }) {
  return (
    <p className="rounded-xl border border-dashed border-border bg-secondary/60 px-3 py-2 text-xs leading-relaxed text-muted-foreground">
      {text ?? NOT_PUBLISHED_LABEL}
    </p>
  );
}

export function FactBlock({ label, value }: { label: string; value?: string | null }) {
  return (
    <div className="rounded-xl border border-border bg-card p-3 sm:p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{label}</p>
      {isUnpublished(value) ? (
        <div className="mt-2">
          <VerificationNote text={value ?? undefined} />
        </div>
      ) : (
        <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{value}</p>
      )}
    </div>
  );
}

function SourceList({ sources }: { sources: Record<string, string | null> }) {
  const entries = Object.entries(sources).filter(([, v]) => typeof v === "string" && v.startsWith("http"));
  if (!entries.length) return <VerificationNote text="No official source URL is recorded for this record yet." />;
  return (
    <ul className="grid gap-2 text-sm">
      {entries.map(([k, v]) => (
        <li key={k} className="break-words">
          <span className="font-semibold capitalize text-foreground">{k.replace(/_/g, " ")}: </span>
          <a href={v!} target="_blank" rel="noopener noreferrer nofollow" className="text-brand hover:underline">
            {v}
          </a>
        </li>
      ))}
    </ul>
  );
}

/* ---------- Phase 2 ---------- */

export function PubUniversityResearch({ slug }: { slug: string }) {
  const u = pubUniversity(slug);
  if (!u) return null;
  const recognition = Object.entries(u.recognition);
  return (
    <div className="space-y-5">
      <Prose>{u.hero.description}</Prose>

      <div className="grid gap-3 sm:grid-cols-2">
        {recognition.map(([body, status]) => (
          <FactBlock key={body} label={body.replace(/_/g, " ")} value={status} />
        ))}
      </div>

      {u.admission.cycles && <FactBlock label="Admission cycles" value={u.admission.cycles} />}
      {u.admission.entrance_exam && <FactBlock label="Entrance exam" value={u.admission.entrance_exam} />}

      {u.admission.steps?.length ? (
        <div>
          <h3 className="font-display text-base font-bold text-foreground">Researched admission steps</h3>
          <ol className="mt-2 list-inside list-decimal space-y-1 text-[0.95rem] leading-relaxed text-muted-foreground">
            {u.admission.steps.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ol>
        </div>
      ) : null}

      {u.scholarship.criteria?.length ? (
        <div>
          <h3 className="font-display text-base font-bold text-foreground">Scholarship information</h3>
          <ul className="mt-2 space-y-2">
            {u.scholarship.criteria.map((c) => (
              <li key={c.name} className="rounded-xl border border-border bg-card p-3">
                <p className="text-sm font-semibold text-foreground">{c.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.criterion}</p>
              </li>
            ))}
          </ul>
          {u.scholarship.note && <p className="mt-2 text-xs text-muted-foreground">{u.scholarship.note}</p>}
        </div>
      ) : null}

      {u.career.university_level_summary && <Prose>{u.career.university_level_summary}</Prose>}

      <div>
        <h3 className="font-display text-base font-bold text-foreground">Sources & last verified</h3>
        <div className="mt-2">
          <SourceList sources={{ ...u.sources, official_website: u.hero.official_website }} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Session {PUB_SESSION} · last verified {u.last_verified}.
        </p>
      </div>
    </div>
  );
}

/* ---------- Phase 3 ---------- */

export function PubCourseResearch({
  universitySlug,
  programmeSlug,
}: {
  universitySlug: string;
  programmeSlug: string;
}) {
  const rec = pubCoursePage(universitySlug, programmeSlug);
  if (!rec) return null;
  const c = rec.publication_content;
  return (
    <div className="space-y-6">
      <Prose>{c.hero}</Prose>
      <Prose>{c.overview}</Prose>

      <div className="grid gap-3 sm:grid-cols-2">
        {Object.entries(c.quick_facts).map(([k, v]) => (
          <FactBlock key={k} label={k.replace(/_/g, " ")} value={v == null ? null : String(v)} />
        ))}
      </div>

      <div className="grid gap-3">
        <FactBlock label="Fees" value={c.fees} />
        <FactBlock label="Eligibility" value={c.eligibility} />
        <FactBlock label="Admission" value={c.admission} />
        <FactBlock label="Examination" value={c.examination} />
        <FactBlock label="Scholarships" value={c.scholarships} />
        <FactBlock label="Career" value={c.career} />
      </div>

      <div>
        <h3 className="font-display text-base font-bold text-foreground">
          University-specific curriculum
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.curriculum.intro}</p>
        {c.curriculum.semesters.length ? (
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {c.curriculum.semesters.map((s) => (
              <div key={s.semester} className="rounded-xl border border-border bg-card p-3">
                <p className="text-sm font-semibold text-foreground">Semester {s.semester}</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  {s.subjects.map((sub) => (
                    <li key={sub}>{sub}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-3">
            <VerificationNote text="Semester-wise subjects are not published in the verified record for this programme — verification required before publication." />
          </div>
        )}
      </div>

      {c.specialisations.length > 0 && (
        <div>
          <h3 className="font-display text-base font-bold text-foreground">Verified specialisations</h3>
          <ul className="mt-2 flex flex-wrap gap-2">
            {c.specialisations.map((s) => (
              <li
                key={s.specialisation_name}
                className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-foreground"
              >
                {s.official_name ?? s.specialisation_name}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid gap-3 sm:grid-cols-2">
        <FactBlock label="Who should choose it" value={c.who_should_choose} />
        <FactBlock label="Who should reconsider" value={c.who_should_reconsider} />
      </div>

      <div>
        <h3 className="font-display text-base font-bold text-foreground">Official sources</h3>
        <div className="mt-2">
          <SourceList sources={c.sources} />
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          Session {PUB_SESSION} · last verified {c.last_verified}.
        </p>
      </div>
    </div>
  );
}

/* ---------- Phase 4 ---------- */

export function PubPillarGuidance({ familySlug }: { familySlug: string }) {
  const p = pubPillar(familySlug);
  if (!p) return null;
  return (
    <div className="space-y-5">
      <Prose>{p.intro}</Prose>
      <div>
        <h3 className="font-display text-base font-bold text-foreground">What to compare</h3>
        <ul className="mt-2 grid gap-2 sm:grid-cols-2">
          {p.what_to_compare.map((w) => (
            <li key={w} className="rounded-lg bg-secondary px-3 py-2 text-sm text-foreground">
              {w}
            </li>
          ))}
        </ul>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <FactBlock label="Fees guidance" value={p.fees_guidance} />
        <FactBlock label="Curriculum guidance" value={p.curriculum_guidance} />
        <FactBlock label="Admission guidance" value={p.admission_guidance} />
        <FactBlock label="Examination guidance" value={p.exam_guidance} />
        <FactBlock label="Career guidance" value={p.career_guidance} />
      </div>
      <p className="text-xs text-muted-foreground">
        {p.universities_count} universities in the researched {PUB_SESSION} dataset list this course.
      </p>
    </div>
  );
}

/* ---------- Phase 5 ---------- */

export function PubComparisonRows({ familySlug }: { familySlug: string }) {
  const c = pubComparison(familySlug);
  if (!c) return null;
  return (
    <div className="space-y-4">
      <Prose>{c.intro}</Prose>
      <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:px-0">
        <table className="w-full min-w-[46rem] border-collapse text-left text-sm">
          <thead>
            <tr className="bg-secondary">
              {["University", "Programme", "Duration", "Eligibility", "Fee status", "Specialisations"].map((h) => (
                <th key={h} className="border border-border px-3 py-2 font-semibold text-foreground">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((r) => (
              <tr key={`${r.university}-${r.programme}`} className="align-top">
                <th scope="row" className="border border-border px-3 py-2 text-left font-semibold text-foreground">
                  <AppLink to={r.course_url} className="text-brand hover:underline">
                    {r.university}
                  </AppLink>
                </th>
                <td className="border border-border px-3 py-2 text-muted-foreground">{r.programme}</td>
                <td className="border border-border px-3 py-2 text-muted-foreground">{r.duration ?? NOT_PUBLISHED_LABEL}</td>
                <td className="border border-border px-3 py-2 text-muted-foreground">{r.eligibility ?? NOT_PUBLISHED_LABEL}</td>
                <td className="border border-border px-3 py-2 text-muted-foreground">{r.fee}</td>
                <td className="border border-border px-3 py-2 text-muted-foreground">
                  {r.specialisations.length ? r.specialisations.join(", ") : "Not published by the university"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-muted-foreground">
        Researched comparison data for session {PUB_SESSION}. Verify the official source before applying.
      </p>
    </div>
  );
}

/* ---------- Phase 6 ---------- */

export function PubSpecialisationResearch({
  slug,
  familySlug,
}: {
  slug: string;
  familySlug?: string;
}) {
  const s = pubSpecialisation(slug, familySlug);
  if (!s) return null;
  const c = s.content;
  return (
    <div className="space-y-5">
      <Prose>{c.definition}</Prose>
      <FactBlock label="Who should choose it" value={c.who_should_choose} />
      <FactBlock label="Career direction" value={c.career} />
      <div>
        <h3 className="font-display text-base font-bold text-foreground">Where it is offered</h3>
        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{c.university_availability}</p>
        <ul className="mt-2 grid gap-2">
          {s.programmes.map((p) => (
            <li key={p.url} className="rounded-xl border border-border bg-card p-3 text-sm">
              <AppLink to={p.url} className="font-semibold text-brand hover:underline">
                {p.university} — {p.programme}
              </AppLink>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="font-display text-base font-bold text-foreground">Decision checklist</h3>
        <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-muted-foreground">
          {c.decision_checklist.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>
      <VerificationNote text={c.subjects_rule} />
      {c.sources.length > 0 && (
        <div>
          <h3 className="font-display text-base font-bold text-foreground">Sources</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {c.sources.map((src) => (
              <li key={src} className="break-words">
                <a href={src} target="_blank" rel="noopener noreferrer nofollow" className="text-brand hover:underline">
                  {src}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import { ContentSection, DetailLayout } from "@/components/templates/DetailLayout";
import { AuthorBox, References, RelatedLinkGrid, UpdatedStamp } from "@/components/common/Blocks";
import { AppLink } from "@/components/common/AppLink";
import {
  comparableCourses,
  coursePairPath,
  courseSlug,
  feeLabel,
  pairPath,
  pairUniversities,
  relatedPairs,
  type CourseSnapshotSide,
  type PairComparison,
} from "@/lib/comparisonMaster";

type Row = { label: string; a: React.ReactNode; b: React.ReactNode };

/** Table on desktop, stacked cards on mobile — never overflows the page. */
function CompareRows({
  rows,
  aName,
  bName,
  caption,
}: {
  rows: Row[];
  aName: string;
  bName: string;
  caption: string;
}) {
  return (
    <>
      <div className="hidden overflow-x-auto rounded-xl border border-border sm:block">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="bg-secondary text-left">
              <th scope="col" className="px-3 py-2.5 font-bold">Parameter</th>
              <th scope="col" className="px-3 py-2.5 font-bold">{aName}</th>
              <th scope="col" className="px-3 py-2.5 font-bold">{bName}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-border align-top">
                <th scope="row" className="px-3 py-2.5 text-left font-semibold text-foreground">{r.label}</th>
                <td className="px-3 py-2.5 text-muted-foreground">{r.a}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{r.b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ul className="grid gap-3 sm:hidden">
        {rows.map((r) => (
          <li key={r.label} className="rounded-xl border border-border bg-card p-3">
            <p className="text-[0.72rem] font-bold uppercase tracking-wide text-brand">{r.label}</p>
            <div className="mt-2 grid grid-cols-2 gap-3 text-sm">
              <div>
                <p className="text-[0.7rem] font-semibold text-muted-foreground">{aName}</p>
                <p className="mt-0.5 font-medium text-foreground">{r.a}</p>
              </div>
              <div>
                <p className="text-[0.7rem] font-semibold text-muted-foreground">{bName}</p>
                <p className="mt-0.5 font-medium text-foreground">{r.b}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

const list = (items: string[] | undefined, empty: string) =>
  items && items.length > 0 ? items.join(", ") : empty;

const val = (v: string | number | null | undefined, empty = "Not verified") =>
  v === null || v === undefined || v === "" ? empty : String(v);

export function ComparisonPage({ pair, course }: { pair: PairComparison; course?: string }) {
  const { a: uniA, b: uniB } = pairUniversities(pair);
  const aName = pair.university_a;
  const bName = pair.university_b;
  const courses = comparableCourses(pair);
  const snapshot = course ? pair.course_snapshots?.[course] : undefined;
  const sa: CourseSnapshotSide | undefined = snapshot?.university_a;
  const sb: CourseSnapshotSide | undefined = snapshot?.university_b;

  const title = course
    ? `${aName} vs ${bName} Online ${course}: Fees, Eligibility & Full Comparison`
    : `${aName} vs ${bName}: Online University Comparison ${"2026-27"}`;

  const faqs = [
    {
      question: `${aName} vs ${bName} — which is better${course ? ` for online ${course}` : ""}?`,
      answer: pair.content.fit_statement,
    },
    {
      question: `How should I decide between ${aName} and ${bName}?`,
      answer: pair.content.decision_framework,
    },
    course
      ? {
          question: `What is the ${course} fee at ${aName} and ${bName}?`,
          answer: `${aName}: ${feeLabel(sa)}. ${bName}: ${feeLabel(sb)}. Where a figure is not verified, check the official university page linked in Sources.`,
        }
      : {
          question: `Which courses can I compare across ${aName} and ${bName}?`,
          answer: `Both universities publish: ${list(courses, "no overlapping programmes in this dataset")}.`,
        },
  ];

  return (
    <DetailLayout
      crumbs={[
        { name: "Compare", href: "/compare" },
        { name: `${aName} vs ${bName}`, href: pairPath(pair) },
        ...(course ? [{ name: course, href: coursePairPath(pair, course) }] : []),
      ]}
      eyebrow={course ? `Online ${course} comparison` : "University comparison"}
      title={title}
      subtitle={pair.content.intro}
      meta={<UpdatedStamp date="2026-08-12" verified={false} />}
      tocSections={pair.comparison_sections.map((s) => s.heading)}
      faqs={faqs}
      related={
        <RelatedLinkGrid
          groups={[
            {
              title: "Related comparisons",
              links: relatedPairs(pair).map((p) => ({
                label: `${p.university_a} vs ${p.university_b}`,
                href: pairPath(p),
              })),
            },
            ...(courses.length
              ? [
                  {
                    title: "Compare by course",
                    links: courses.map((c) => ({
                      label: `${aName} vs ${bName} — ${c}`,
                      href: coursePairPath(pair, c),
                    })),
                  },
                ]
              : []),
          ]}
        />
      }
    >
      {/* Course selector */}
      {courses.length > 0 && (
        <div className="mb-6 rounded-xl border border-border bg-secondary/60 p-3">
          <p className="mb-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
            Compare a specific course
          </p>
          <div className="flex flex-wrap gap-2">
            <AppLink
              to={pairPath(pair)}
              className={`rounded-full border px-3 py-2 text-sm font-semibold ${
                course ? "border-border bg-background" : "border-transparent bg-[#7f1813] text-white"
              }`}
            >
              Overall
            </AppLink>
            {courses.map((c) => (
              <AppLink
                key={courseSlug(c)}
                to={coursePairPath(pair, c)}
                className={`rounded-full border px-3 py-2 text-sm font-semibold ${
                  course === c ? "border-transparent bg-[#7f1813] text-white" : "border-border bg-background"
                }`}
              >
                {c}
              </AppLink>
            ))}
          </div>
        </div>
      )}

      <ContentSection title={`${aName} vs ${bName}: Overview`}>
        <p>{pair.content.angle}</p>
        <p>{pair.content.decision_framework}</p>
      </ContentSection>

      <ContentSection title="Quick Comparison">
        <CompareRows
          caption={`${aName} vs ${bName} quick comparison`}
          aName={aName}
          bName={bName}
          rows={[
            { label: "Full name", a: val(uniA?.university_name), b: val(uniB?.university_name) },
            { label: "Location", a: val(uniA?.location), b: val(uniB?.location) },
            { label: "Mode", a: val(uniA?.mode), b: val(uniB?.mode) },
            { label: "Programmes tracked", a: val(uniA?.programme_count), b: val(uniB?.programme_count) },
            { label: "Overlapping courses", a: String(courses.length), b: String(courses.length) },
            ...(course
              ? [
                  { label: `${course} fee`, a: feeLabel(sa), b: feeLabel(sb) },
                  { label: "Duration", a: val(sa?.duration), b: val(sb?.duration) },
                ]
              : []),
          ]}
        />
      </ContentSection>

      <ContentSection title="Courses Offered by Both Universities">
        <CompareRows
          caption="Degrees available"
          aName={aName}
          bName={bName}
          rows={[
            {
              label: "Degrees published",
              a: list(uniA?.degrees_available, "Not verified"),
              b: list(uniB?.degrees_available, "Not verified"),
            },
          ]}
        />
        {courses.length > 0 && (
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {courses.map((c) => (
              <li key={c} className="rounded-lg bg-secondary px-3 py-2 text-sm">
                <AppLink to={coursePairPath(pair, c)} className="font-semibold text-brand hover:underline">
                  {aName} vs {bName} — {c}
                </AppLink>
              </li>
            ))}
          </ul>
        )}
      </ContentSection>

      <ContentSection title="Recognition, Accreditation & Mode">
        <CompareRows
          caption="Recognition"
          aName={aName}
          bName={bName}
          rows={["UGC_status", "UGC_DEB_status", "NAAC_status", "NIRF_information", "accreditation"].map((k) => ({
            label: k.replace(/_/g, " ").replace("information", "info"),
            a: val(uniA?.recognition?.[k], "Not verified"),
            b: val(uniB?.recognition?.[k], "Not verified"),
          }))}
        />
      </ContentSection>

      <ContentSection title="Fees & Payment Considerations">
        {course ? (
          <CompareRows
            caption={`${course} fees`}
            aName={aName}
            bName={bName}
            rows={[
              { label: "Total programme fee", a: feeLabel(sa), b: feeLabel(sb) },
              { label: "Fee status", a: val(sa?.fee_status), b: val(sb?.fee_status) },
              { label: "Semesters", a: val(sa?.semesters), b: val(sb?.semesters) },
              { label: "Last verified", a: val(sa?.last_verified), b: val(sb?.last_verified) },
            ]}
          />
        ) : (
          <CompareRows
            caption="Fees by course"
            aName={aName}
            bName={bName}
            rows={courses.map((c) => ({
              label: c,
              a: feeLabel(pair.course_snapshots?.[c]?.university_a),
              b: feeLabel(pair.course_snapshots?.[c]?.university_b),
            }))}
          />
        )}
        <p className="mt-3 text-sm text-muted-foreground">
          Fees are shown only where the university publishes them. Anything unverified is labelled as such —
          confirm on the official page linked under Sources.
        </p>
      </ContentSection>

      <ContentSection title="Eligibility & Admission Requirements">
        {course ? (
          <CompareRows
            caption="Eligibility"
            aName={aName}
            bName={bName}
            rows={[
              { label: "Eligibility", a: val(sa?.eligibility), b: val(sb?.eligibility) },
              { label: "Entrance exam", a: val(sa?.entrance_exam, "No entrance exam listed"), b: val(sb?.entrance_exam, "No entrance exam listed") },
              { label: "Mode", a: val(sa?.mode), b: val(sb?.mode) },
            ]}
          />
        ) : (
          <p>
            Eligibility is programme-specific. Pick a course above to see the exact eligibility, entrance-exam
            requirement and duration published by each university.
          </p>
        )}
      </ContentSection>

      <ContentSection title="Specialisations & Curriculum">
        {course ? (
          <CompareRows
            caption="Specialisations"
            aName={aName}
            bName={bName}
            rows={[
              {
                label: "Specialisations",
                a: list(sa?.specialisations, "Not published for this programme"),
                b: list(sb?.specialisations, "Not published for this programme"),
              },
              { label: "Programme name", a: val(sa?.programme_name), b: val(sb?.programme_name) },
            ]}
          />
        ) : (
          <p>Choose a course to see the verified university-specific specialisations for that programme.</p>
        )}
        <p className="mt-3 text-sm text-muted-foreground">
          Where a university does not publish a detailed syllabus, treat the common course curriculum as a
          reference structure rather than that university's official syllabus.
        </p>
      </ContentSection>

      <ContentSection title="Admission Process">
        <ol className="ml-5 list-decimal space-y-1.5">
          <li>Shortlist the exact programme and specialisation on the official university page.</li>
          <li>Check eligibility and keep 10th, 12th, graduation marksheets, ID and photo ready.</li>
          <li>Register on the university admission portal and complete the application form.</li>
          <li>Upload documents and pay the applicable registration or first-semester fee.</li>
          <li>Wait for verification and enrolment confirmation with LMS access.</li>
        </ol>
      </ContentSection>

      <ContentSection title="Examination Pattern & Assessment">
        <p>
          Both universities assess online learners through a mix of internal assignments/quizzes and
          end-semester examinations conducted online under proctoring. Exact weightage, proctoring method and
          re-appear rules are set by each university for each session — confirm in the current student handbook.
        </p>
      </ContentSection>

      <ContentSection title="Scholarships & Financial Support">
        <p>
          Fee support typically appears as merit waivers, defence-personnel and divyangjan concessions,
          single-girl-child or women's scholarships, alumni discounts and no-cost EMI plans. Amounts and
          eligibility change every session, so only the university's current published scholarship page should
          be treated as final.
        </p>
      </ContentSection>

      <ContentSection title="Learning Experience & Student Support">
        <p>
          Expect a self-paced LMS with recorded lectures, live doubt sessions, e-library access, discussion
          forums and a student-support desk. The practical difference between {aName} and {bName} usually lies in
          live-session frequency, mentor access and how responsive the support team is.
        </p>
      </ContentSection>

      <ContentSection title="Degree & Academic Value">
        <p>
          Online degrees from UGC-entitled universities carry the same academic value as their on-campus
          counterparts and are accepted for higher study and employment. The degree certificate does not state
          "online" as a lower-value qualification, though it may record the mode of study.
        </p>
      </ContentSection>

      <ContentSection title="Career Opportunities & Placement Support">
        <p>
          Both universities offer placement or career assistance — resume support, interview preparation and
          access to hiring drives. Career assistance is not a placement guarantee, and neither university
          publishes verified salary or placement percentages for online cohorts in this dataset.
        </p>
      </ContentSection>

      <ContentSection title="Strengths, Limitations & Fit">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="text-base font-bold text-foreground">{aName}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {courses.length} overlapping programmes with {bName}
              {course ? `; ${course} at ${feeLabel(sa)}` : ""}. Recognition: {val(uniA?.recognition?.["UGC_status"])}.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-4">
            <h3 className="text-base font-bold text-foreground">{bName}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {courses.length} overlapping programmes with {aName}
              {course ? `; ${course} at ${feeLabel(sb)}` : ""}. Recognition: {val(uniB?.recognition?.["UGC_status"])}.
            </p>
          </div>
        </div>
      </ContentSection>

      <ContentSection title="Which University May Suit You?">
        <p>{pair.content.fit_statement}</p>
      </ContentSection>

      <AuthorBox />

      <ContentSection title="Sources & Last Verified">
        <References
          items={[
            ...(sa?.official_source?.programme_url
              ? [{ label: `${aName} official programme page`, href: sa.official_source.programme_url }]
              : []),
            ...(sb?.official_source?.programme_url
              ? [{ label: `${bName} official programme page`, href: sb.official_source.programme_url }]
              : []),
            { label: "UGC-DEB entitled programme list", href: "https://deb.ugc.ac.in/" },
          ]}
        />
        <p className="mt-2 text-sm text-muted-foreground">Dataset last generated: 12 August 2026 (session 2026-27).</p>
      </ContentSection>
    </DetailLayout>
  );
}

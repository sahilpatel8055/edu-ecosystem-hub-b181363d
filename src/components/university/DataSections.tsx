import { BadgeCheck, ExternalLink, Info } from "lucide-react";
import { DataTable, StepList } from "@/components/common/Blocks";
import { Chip } from "@/components/common/Primitives";
import {
  formatFee,
  isVerifiedFee,
  type FeeRecord,
  type ProgrammeRecord,
  type ScholarshipRecord,
  type SourceEntry,
  type UniversityRecordJson,
} from "@/lib/universityData";

/**
 * Presentational blocks for JSON-backed university / programme data.
 * Every block hides itself or states "not available" when the dataset has
 * nothing to show — nothing here invents or estimates a value.
 */

export function EmptyNote({ children }: { children: string }) {
  return (
    <p className="flex items-start gap-2 rounded-xl border border-dashed border-border bg-secondary px-3 py-2.5 text-sm text-muted-foreground">
      <Info className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
      {children}
    </p>
  );
}

export function VerificationChip({ status }: { status?: string | null | undefined }) {
  if (!status) return null;
  const verified = status.startsWith("verified_official");
  return (
    <Chip tone={verified ? "success" : "default"}>
      {verified ? <BadgeCheck className="mr-1 h-3 w-3" aria-hidden="true" /> : null}
      {status.replace(/_/g, " ")}
    </Chip>
  );
}

/* --------------------------------- fees ---------------------------------- */

export function FeeSource({ fees }: { fees: FeeRecord | undefined }) {
  if (!fees?.source_url) return null;
  return (
    <p className="text-xs text-muted-foreground">
      Source:{" "}
      <a
        href={fees.source_url}
        target="_blank"
        rel="noreferrer noopener"
        className="inline-flex items-center gap-1 font-semibold text-brand hover:underline"
      >
        {fees.source_title ?? fees.source_url}
        <ExternalLink className="h-3 w-3" aria-hidden="true" />
      </a>
      {isVerifiedFee(fees) ? " · official" : " · pending verification"}
    </p>
  );
}

export function FeeTable({ fees, caption }: { fees: FeeRecord | undefined; caption: string }) {
  if (!fees) return <EmptyNote>Fee information is not currently available for this programme.</EmptyNote>;

  const rows: Array<[string, number | null]> = [
    ["Total programme fee", fees.total_programme_fee],
    ["Annual fee", fees.annual],
    ["Semester fee", fees.semester],
    ["Monthly fee", fees.monthly],
    ["EMI", fees.emi],
    ["Application fee", fees.application_fee],
    ["Registration fee", fees.registration_fee],
    ["Admission fee", fees.admission_fee],
    ["Examination fee", fees.examination_fee],
    ["Project fee", fees.project_fee],
    ["Study material fee", fees.study_material_fee],
    ["Technology fee", fees.technology_fee],
    ["Discounted fee", fees.discounted],
  ];
  const published = rows.filter((r): r is [string, number] => r[1] != null);

  if (!published.length) {
    return (
      <div className="space-y-3">
        <EmptyNote>
          The official fee for this programme is pending verification. A figure is published only once confirmed from
          the university's own fee source.
        </EmptyNote>
        <FeeSource fees={fees} />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center gap-2">
        <VerificationChip status={fees.fee_verification_status ?? fees.verification_status} />
        {fees.last_verified && (
          <span className="text-xs text-muted-foreground">Last verified {fees.last_verified}</span>
        )}
      </div>
      <DataTable
        caption={caption}
        head={["Component", "Amount"]}
        rows={published.map(([label, value]) => [label, formatFee(value) ?? ""])}
      />
      {(fees.discount.percentage != null || fees.discount.amount != null) && (
        <p className="text-xs text-muted-foreground">
          Discount published by the university:{" "}
          {fees.discount.percentage != null ? `${fees.discount.percentage}%` : formatFee(fees.discount.amount)}
          {fees.discount.valid_until ? ` (valid until ${fees.discount.valid_until})` : ""}
        </p>
      )}
      <FeeSource fees={fees} />
    </div>
  );
}

/* ------------------------------ eligibility ------------------------------ */

export function EligibilitySection({ programme }: { programme: ProgrammeRecord }) {
  const e = programme.eligibility;
  const rows: Array<[string, string]> = [];
  if (e.summary) rows.push(["Eligibility", e.summary]);
  if (e.minimum_marks) rows.push(["Minimum marks", e.minimum_marks]);
  if (e.required_subjects?.length) rows.push(["Required subjects", e.required_subjects.join(", ")]);
  if (e.age_requirement) rows.push(["Age requirement", e.age_requirement]);
  if (e.entrance_exam) rows.push(["Entrance exam", e.entrance_exam]);
  if (!rows.length) return <EmptyNote>Eligibility details are not currently available for this programme.</EmptyNote>;
  return <DataTable caption="Eligibility" head={["Criterion", "Requirement"]} rows={rows} />;
}

/* ---------------------------- specialisations ---------------------------- */

export function SpecialisationTable({ programme }: { programme: ProgrammeRecord }) {
  if (!programme.specializations.length) {
    return <EmptyNote>The university has not published specialisations for this programme.</EmptyNote>;
  }
  return (
    <DataTable
      caption={`${programme.programme_name} specialisations`}
      head={["Specialisation", "Official source"]}
      rows={programme.specializations.map((s) => [
        s.official_name ?? s.specialisation_name,
        s.official_source_url ? (
          <a
            href={s.official_source_url}
            target="_blank"
            rel="noreferrer noopener"
            className="font-semibold text-brand hover:underline"
          >
            Official page
          </a>
        ) : (
          "—"
        ),
      ])}
    />
  );
}

/* ------------------------------- admission ------------------------------- */

export function AdmissionSection({
  admissions,
  programme,
}: {
  admissions: UniversityRecordJson["admissions"] | undefined;
  programme?: ProgrammeRecord | undefined;
}) {
  const rows: Array<[string, string]> = [];
  const push = (label: string, value: string | number | null | undefined) => {
    if (value != null && String(value).trim()) rows.push([label, String(value)]);
  };
  push("Intake", programme?.admission.intake ?? admissions?.next_expected_intake);
  push("Application status", programme?.admission.application_status);
  push("Admission cycle", admissions?.admission_cycle);
  push("Admission starts", admissions?.admission_start_date);
  push("Admission closes", admissions?.admission_end_date);
  push("Application fee", admissions?.application_fee != null ? formatFee(admissions.application_fee) : null);
  push("Selection process", admissions?.selection_process);
  push("Entrance exam", admissions?.entrance_exam ?? programme?.eligibility.entrance_exam);
  push("Direct admission", admissions?.direct_admission);

  const steps = programme?.admission.steps?.length ? programme.admission.steps : (admissions?.admission_steps ?? []);
  const documents = programme?.admission.documents?.length
    ? programme.admission.documents
    : (admissions?.required_documents ?? []);
  const applyUrl = programme?.admission.application_url ?? admissions?.application_url;

  if (!rows.length && !steps.length && !documents.length && !applyUrl) {
    return <EmptyNote>Admission details are not currently available from an official source.</EmptyNote>;
  }

  return (
    <div className="space-y-5">
      {rows.length > 0 && <DataTable caption="Admission details" head={["Detail", "Information"]} rows={rows} />}
      {steps.length > 0 && (
        <div>
          <h3 className="mb-3 text-base font-bold text-foreground">Admission steps</h3>
          <StepList steps={steps} />
        </div>
      )}
      {documents.length > 0 && (
        <div>
          <h3 className="mb-2 text-base font-bold text-foreground">Documents required</h3>
          <ul className="list-inside list-disc">
            {documents.map((d) => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </div>
      )}
      {applyUrl && (
        <a
          href={applyUrl}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-brand-foreground"
        >
          Official application page <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

/* ------------------------------ scholarships ----------------------------- */

export function ScholarshipList({ items }: { items: ScholarshipRecord[] }) {
  if (!items.length) {
    return <EmptyNote>No officially verified scholarship scheme is published for this university yet.</EmptyNote>;
  }
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {items.map((s, i) => {
        const name = s.scholarship_name ?? s.name ?? "Scholarship";
        return (
          <article key={`${name}-${i}`} className="rounded-2xl border border-border bg-card p-4">
            <h3 className="font-display text-base font-bold">{name}</h3>
            <dl className="mt-3 space-y-1.5 text-sm text-muted-foreground">
              {s.amount != null && (
                <div>
                  <dt className="inline font-semibold text-foreground">Amount: </dt>
                  <dd className="inline">{typeof s.amount === "number" ? formatFee(s.amount) : s.amount}</dd>
                </div>
              )}
              {s.percentage != null && (
                <div>
                  <dt className="inline font-semibold text-foreground">Waiver: </dt>
                  <dd className="inline">{s.percentage}%</dd>
                </div>
              )}
              {s.category && (
                <div>
                  <dt className="inline font-semibold text-foreground">Category: </dt>
                  <dd className="inline">{s.category}</dd>
                </div>
              )}
              {s.eligibility && (
                <div>
                  <dt className="inline font-semibold text-foreground">Eligibility: </dt>
                  <dd className="inline">{s.eligibility}</dd>
                </div>
              )}
              {s.deadline && (
                <div>
                  <dt className="inline font-semibold text-foreground">Deadline: </dt>
                  <dd className="inline">{s.deadline}</dd>
                </div>
              )}
              {s.documents?.length ? (
                <div>
                  <dt className="inline font-semibold text-foreground">Documents: </dt>
                  <dd className="inline">{s.documents.join(", ")}</dd>
                </div>
              ) : null}
              {s.applicable_programmes?.length ? (
                <div>
                  <dt className="inline font-semibold text-foreground">Applies to: </dt>
                  <dd className="inline">{s.applicable_programmes.join(", ")}</dd>
                </div>
              ) : null}
            </dl>
            <div className="mt-3 flex flex-wrap items-center gap-2">
              <VerificationChip status={s.verification_status} />
              {s.official_url && (
                <a
                  href={s.official_url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-xs font-semibold text-brand hover:underline"
                >
                  Official page
                </a>
              )}
            </div>
          </article>
        );
      })}
    </div>
  );
}

/* ------------------------------- recognition ------------------------------ */

export function RecognitionTable({ university }: { university: UniversityRecordJson }) {
  const r = university.recognition;
  const rows: Array<[string, string]> = [];
  if (r.UGC_status) rows.push(["UGC", r.UGC_status]);
  if (r.UGC_DEB_status) rows.push(["UGC-DEB", r.UGC_DEB_status]);
  if (r.NAAC_status) rows.push(["NAAC", r.NAAC_status]);
  if (r.NIRF_information) rows.push(["NIRF", r.NIRF_information]);
  if (r.accreditation) rows.push(["Accreditation", r.accreditation]);
  if (!rows.length) {
    return <EmptyNote>Recognition details are not currently available from an official source.</EmptyNote>;
  }
  return <DataTable caption={`${university.short_name} recognition`} head={["Body", "Published status"]} rows={rows} />;
}

/* --------------------------------- sources -------------------------------- */

export function SourceInformation({ sources }: { sources: SourceEntry[] }) {
  // Aggregator pages and bare university-website links are not cited as sources.
  const visible = sources.filter(
    (s) => !/collegevidya/i.test(s.source_url) && !/official\s*website|university\s*website/i.test(s.source_title),
  );
  if (!visible.length) return null;
  return (
    <section id="sources" className="scroll-mt-36 rounded-2xl border border-border bg-card p-4">
      <h2 className="text-base font-bold">Official sources</h2>
      <ul className="mt-3 space-y-2 text-sm">
        {visible.map((s, i) => (
          <li key={`${s.source_url}-${i}`} className="flex flex-wrap items-center gap-2">
            <a
              href={s.source_url}
              target="_blank"
              rel="noreferrer noopener"
              className="font-semibold text-brand hover:underline"
            >
              {s.source_title}
            </a>
            <span className="text-xs text-muted-foreground">
              {s.programme} · last verified {s.last_verified}
            </span>
            <VerificationChip status={s.verification_status} />
          </li>
        ))}
      </ul>
    </section>
  );
}

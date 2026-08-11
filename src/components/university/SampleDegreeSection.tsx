import { Check } from "lucide-react";
import { degreeSample } from "@/lib/assets";

const points = [
  {
    title: "UGC-DEB entitled",
    body: "The degree is valid for government, private and overseas jobs as well as higher studies.",
  },
  {
    title: "Digitally verifiable",
    body: "Carries QR / online verification so employers can authenticate it instantly.",
  },
  {
    title: "Officially stamped",
    body: "Issued with the university seal and signatures — identical to the on-campus degree.",
  },
];

/** Sample degree showcase, rendered only when we hold the university's specimen. */
export function SampleDegreeSection({
  universityName,
  universitySlug,
}: {
  universityName: string;
  universitySlug: string;
}) {
  const image = degreeSample(universitySlug);
  if (!image) return null;

  return (
    <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-10">
      <div className="min-w-0">
        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground">
          The degree awarded by {universityName} is recognised by the relevant regulatory bodies and makes no mention
          of the learning mode, so it is accepted for every career and higher-study route.
        </p>
        <ul className="mt-4 space-y-3">
          {points.map((p) => (
            <li key={p.title} className="flex items-start gap-3">
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand">
                <Check className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-sm font-bold">{p.title}</p>
                <p className="text-xs leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <figure className="min-w-0">
        <div className="rounded-2xl border border-border bg-card p-3 shadow-[0_18px_40px_-26px_oklch(0_0_0/0.6)]">
          <img
            src={image}
            alt={`${universityName} sample degree certificate`}
            loading="lazy"
            className="h-auto w-full rounded-lg object-contain"
          />
        </div>
        <figcaption className="mt-2 text-xs text-muted-foreground">
          Specimen only — issued format may change between sessions.
        </figcaption>
      </figure>
    </div>
  );
}

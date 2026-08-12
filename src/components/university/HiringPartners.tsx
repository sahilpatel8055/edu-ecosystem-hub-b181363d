import { hiringPartnerBoard } from "@/lib/assets";

/**
 * Hiring-partner logo board shown in "Placement & career".
 * The board image is picked deterministically from the available specimens so
 * a university always shows the same board on every visit.
 */
export function HiringPartners({
  universitySlug,
  universityShort,
}: {
  universitySlug: string;
  universityShort: string;
}) {
  const image = hiringPartnerBoard(universitySlug);
  if (!image) return null;

  return (
    <figure className="min-w-0 overflow-hidden rounded-2xl border border-border bg-card p-3 sm:p-4">
      <figcaption className="text-sm font-bold text-card-foreground">
        Recruiters hiring {universityShort} learners
      </figcaption>
      <img
        src={image}
        alt={`Companies that recruit ${universityShort} online programme graduates`}
        loading="lazy"
        className="mt-3 h-auto w-full rounded-lg object-contain"
      />
      <p className="mt-2 text-[0.7rem] leading-relaxed text-muted-foreground">
        Indicative recruiter list published for the university's online and campus programmes. Placement support does
        not guarantee a job offer.
      </p>
    </figure>
  );
}

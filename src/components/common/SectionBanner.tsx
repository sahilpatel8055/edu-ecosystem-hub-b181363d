import admissionBanner from "@/assets/admission-process.png";
import examBanner from "@/assets/examination.png";
import placementBanner from "@/assets/placement-support.png";

const banners = {
  admission: { src: admissionBanner, alt: "Online admission process illustration" },
  examination: { src: examBanner, alt: "Online examination pattern illustration" },
  placement: { src: placementBanner, alt: "Placement support illustration" },
} as const;

/**
 * Illustration strip shown directly above the information boxes of the
 * admission / examination / placement sections.
 */
export function SectionBanner({ kind }: { kind: keyof typeof banners }) {
  const banner = banners[kind];
  return (
    <figure className="box-hover mb-4 overflow-hidden rounded-2xl border border-border bg-card">
      <img
        src={banner.src}
        alt={banner.alt}
        loading="lazy"
        decoding="async"
        className="mx-auto h-36 w-full object-contain p-2 sm:h-48"
      />
    </figure>
  );
}

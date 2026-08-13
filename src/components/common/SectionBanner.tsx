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
export function SectionBanner({
  kind,
  size = "md",
}: {
  kind: keyof typeof banners;
  size?: "md" | "lg";
}) {
  const banner = banners[kind];
  return (
    <figure
      className={`box-hover overflow-hidden rounded-2xl border border-border bg-card ${
        size === "lg" ? "" : "mb-4"
      }`}
    >
      <img
        src={banner.src}
        alt={banner.alt}
        loading="lazy"
        decoding="async"
        className={
          size === "lg"
            ? "mx-auto h-56 w-full object-contain p-2 sm:h-80 lg:h-96"
            : "mx-auto h-36 w-full object-contain p-2 sm:h-48"
        }
      />
    </figure>
  );
}

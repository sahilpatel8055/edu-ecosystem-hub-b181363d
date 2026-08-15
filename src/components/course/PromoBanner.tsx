import { usePopupSurface } from "@/components/common/PopupManager";
import offerArt from "@/assets/course-offer-illustration.png";
import counsellingArt from "@/assets/course-counselling-illustration.png";

/**
 * Full-width promotional strips used between course-page sections.
 * `offer` = fee/scholarship strip, `guidance` = counselling strip.
 */
export function PromoBanner({
  variant = "offer",
  title,
  subtitle,
  ctaLabel,
}: {
  variant?: "offer" | "guidance";
  title: string;
  subtitle: string;
  ctaLabel: string;
  to?: string;
}) {
  const { openCounselling } = usePopupSurface();
  const isOffer = variant === "offer";
  return (
    <div
      className={`relative overflow-hidden rounded-3xl px-5 py-6 sm:px-8 sm:py-7 ${
        isOffer
          ? "bg-gradient-to-r from-[oklch(0.42_0.19_20)] via-[oklch(0.52_0.21_22)] to-[oklch(0.62_0.19_28)]"
          : "bg-gradient-to-r from-brand via-brand to-[oklch(0.45_0.12_215)]"
      }`}
    >
      <span
        aria-hidden="true"
        className="absolute -right-10 top-1/2 hidden h-64 w-64 -translate-y-1/2 rounded-full bg-white/10 sm:block"
      />
      <div className="relative grid items-center gap-4 sm:grid-cols-[minmax(0,1fr)_11rem]">
        <div className="min-w-0 text-white">
          <p className="font-display text-lg font-extrabold leading-tight sm:text-2xl">{title}</p>
          <p className="mt-1.5 text-[0.85rem] leading-relaxed text-white/85 sm:text-base">
            {subtitle}
          </p>
          <button
            type="button"
            onClick={openCounselling}
            className="mt-4 inline-flex rounded-xl bg-white px-5 py-2.5 text-[0.85rem] font-extrabold text-foreground shadow-sm transition-transform hover:-translate-y-0.5"
          >
            {ctaLabel}
          </button>
        </div>
        <img
          src={isOffer ? offerArt : counsellingArt}
          alt=""
          aria-hidden="true"
          loading="lazy"
          width={1024}
          height={768}
          className="mx-auto hidden h-32 w-auto object-contain sm:block"
        />
      </div>
    </div>
  );
}

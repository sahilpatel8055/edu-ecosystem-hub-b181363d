import { useCallback, useEffect, useRef, useState } from "react";
import { AppLink } from "@/components/common/AppLink";
import banner5 from "@/assets/banner_5_top_online_universities.png";
import banner6 from "@/assets/banner_6_compare_universities.png";
import banner3 from "@/assets/banner_3_online_programs.png";
import banner4 from "@/assets/banner_4_trusted_guidance.png";
import mobile1 from "@/assets/banner_m1.png";
import mobile2 from "@/assets/banner_m2.png";
import mobile3 from "@/assets/banner_m3.png";

type Banner = { src: string; alt: string; to: string; height: string };

const desktopBanners: Banner[] = [
  { src: banner5, alt: "Learn from India's best online universities — UG & PG UGC-entitled degrees", to: "/universities", height: "h-auto" },
  { src: banner6, alt: "Compare online universities side by side on fees, approvals and placements", to: "/compare", height: "h-auto" },
  { src: banner3, alt: "Explore top online programs — MBA, MCA, BBA, BCA and more", to: "/courses", height: "h-auto" },
  { src: banner4, alt: "Trusted, unbiased admission guidance from AVEDU Insights", to: "/contact", height: "h-auto" },
];

const mobileBanners: Banner[] = [
  { src: mobile1, alt: "Compare India's top online universities on fees and approvals", to: "/compare", height: "aspect-[112/100]" },
  { src: mobile2, alt: "Explore UGC-entitled online degree programmes", to: "/courses", height: "aspect-[112/100]" },
  { src: mobile3, alt: "Free, unbiased admission guidance from AVEDU Insights", to: "/contact", height: "aspect-[112/100]" },
];

function Carousel({ banners, variant }: { banners: Banner[]; variant: "mobile" | "desktop" }) {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const startX = useRef<number | null>(null);

  const go = useCallback(
    (next: number) => setIndex(((next % banners.length) + banners.length) % banners.length),
    [banners.length],
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % banners.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [banners.length]);

  return (
    <div
      className="relative mx-auto w-full max-w-[1440px]"
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onTouchStart={(e) => {
        paused.current = true;
        startX.current = e.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(e) => {
        paused.current = false;
        const s = startX.current;
        const end = e.changedTouches[0]?.clientX ?? null;
        if (s !== null && end !== null && Math.abs(end - s) > 40) go(index + (end < s ? 1 : -1));
        startX.current = null;
      }}
      aria-roledescription="carousel"
    >
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {banners.map((b, i) => (
            <AppLink
              key={b.src}
              to={b.to}
              className={`flex w-full shrink-0 items-center ${variant === "mobile" ? b.height : ""}`}
              aria-hidden={i !== index}
            >
              <img
                src={b.src}
                alt={b.alt}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding={i === 0 ? "sync" : "async"}
                className={
                  variant === "mobile"
                    ? "h-full w-full object-cover"
                    : "h-auto w-full max-w-full object-contain"
                }
              />
            </AppLink>
          ))}
        </div>
      </div>

      <div className="mt-1 flex justify-center">
        {banners.map((b, i) => (
          <button
            key={`dot-${b.src}`}
            type="button"
            aria-label={`Go to banner ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className="grid h-11 w-8 place-items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <span
              className={
                i === index
                  ? "block h-2 w-6 rounded-full bg-brand transition-all"
                  : "block h-2 w-2 rounded-full bg-muted-foreground/35 transition-all hover:bg-muted-foreground/60"
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function HeroCarousel() {
  return (
    <>
      <div className="sm:hidden">
        <Carousel banners={mobileBanners} variant="mobile" />
      </div>
      <div className="hidden sm:block">
        <Carousel banners={desktopBanners} variant="desktop" />
      </div>
    </>
  );
}

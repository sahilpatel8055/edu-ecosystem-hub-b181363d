import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import banner5 from "@/assets/banner_5_top_online_universities.png";
import banner6 from "@/assets/banner_6_compare_universities.png";
import banner3 from "@/assets/banner_3_online_programs.png";
import banner4 from "@/assets/banner_4_trusted_guidance.png";

type Banner = { src: string; alt: string; to: string };

const banners: Banner[] = [
  { src: banner5, alt: "Learn from India's best online universities — UG & PG UGC-entitled degrees", to: "/universities" },
  { src: banner6, alt: "Compare online universities side by side on fees, approvals and placements", to: "/compare" },
  { src: banner3, alt: "Explore top online programs — MBA, MCA, BBA, BCA and more", to: "/courses" },
  { src: banner4, alt: "Trusted, unbiased admission guidance from AVEDU Insights", to: "/contact" },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const startX = useRef<number | null>(null);

  const go = useCallback((next: number) => {
    setIndex(((next % banners.length) + banners.length) % banners.length);
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % banners.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, []);

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
              className="flex min-h-[230px] w-full shrink-0 items-center sm:min-h-0"
              aria-hidden={i !== index}
            >
              <img
                src={b.src}
                alt={b.alt}
                width={1536}
                height={512}
                loading={i === 0 ? "eager" : "lazy"}
                fetchPriority={i === 0 ? "high" : "low"}
                decoding={i === 0 ? "sync" : "async"}
                className="h-auto w-full max-w-full object-contain"
              />
            </AppLink>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous banner"
        onClick={() => go(index - 1)}
        className="absolute left-2 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 p-2 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background sm:grid"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        aria-label="Next banner"
        onClick={() => go(index + 1)}
        className="absolute right-2 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-border bg-background/85 p-2 text-foreground shadow-sm backdrop-blur transition-colors hover:bg-background sm:grid"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="mt-3 flex justify-center gap-2">
        {banners.map((b, i) => (
          <button
            key={`dot-${b.src}`}
            type="button"
            aria-label={`Go to banner ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={
              i === index
                ? "h-2 w-6 rounded-full bg-brand transition-all"
                : "h-2 w-2 rounded-full bg-muted-foreground/35 transition-all hover:bg-muted-foreground/60"
            }
          />
        ))}
      </div>
    </div>
  );
}

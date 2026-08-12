import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AppLink } from "@/components/common/AppLink";
import banner1 from "@/assets/hero-banner-1.jpg";
import banner2 from "@/assets/hero-banner-2.jpg";
import banner3 from "@/assets/hero-banner-3.jpg";
import banner4 from "@/assets/hero-banner-4.jpg";

/**
 * Banner data. Swap `src` with your own artwork — the carousel never crops,
 * so any consistent aspect ratio works (all four here are 1440x520).
 */
export const heroBanners = [
  { src: banner1, alt: "Compare 480+ online universities with verified fees", to: "/compare", width: 1440, height: 520 },
  { src: banner2, alt: "Scholarships up to 40% off for the 2026-27 session", to: "/scholarships", width: 1440, height: 520 },
  { src: banner3, alt: "Amity vs Manipal vs LPU side-by-side comparison", to: "/compare", width: 1440, height: 520 },
  { src: banner4, alt: "Admissions closing soon for the 2026-27 online degree session", to: "/contact", width: 1440, height: 520 },
];

const INTERVAL = 5500;

export function HeroCarousel({ banners = heroBanners }: { banners?: typeof heroBanners }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const count = banners.length;

  const go = useCallback((n: number) => setIndex(((n % count) + count) % count), [count]);

  useEffect(() => {
    if (paused || count < 2) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => window.clearInterval(t);
  }, [paused, count]);

  return (
    <section aria-label="Featured highlights" className="container-page px-3 pt-5 sm:px-4 sm:pt-8">
      <div
        className="relative mx-auto w-full max-w-[1440px]"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(e) => {
          touchX.current = e.touches[0]?.clientX ?? null;
        }}
        onTouchEnd={(e) => {
          const start = touchX.current;
          const end = e.changedTouches[0]?.clientX ?? null;
          touchX.current = null;
          if (start == null || end == null) return;
          const dx = end - start;
          if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
        }}
      >
        {/* Reserve space with the banner aspect ratio so there is zero layout shift. */}
        <div
          className="overflow-hidden rounded-2xl border border-border bg-secondary"
          style={{ aspectRatio: `${banners[0]!.width} / ${banners[0]!.height}` }}
        >
          <div
            className="flex h-full w-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {banners.map((b, i) => (
              <AppLink
                key={b.src}
                to={b.to}
                className="block h-full w-full shrink-0 grow-0 basis-full"
                aria-hidden={i !== index}
                tabIndex={i === index ? 0 : -1}
              >
                <img
                  src={b.src}
                  alt={b.alt}
                  width={b.width}
                  height={b.height}
                  loading={i === 0 ? "eager" : "lazy"}
                  fetchPriority={i === 0 ? "high" : "low"}
                  decoding={i === 0 ? "sync" : "async"}
                  className="block h-auto w-full"
                />
              </AppLink>
            ))}
          </div>
        </div>

        {/* Desktop arrows */}
        <button
          type="button"
          onClick={() => go(index - 1)}
          aria-label="Previous banner"
          className="absolute left-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-border bg-card/85 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-card sm:grid"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => go(index + 1)}
          aria-label="Next banner"
          className="absolute right-3 top-1/2 hidden -translate-y-1/2 place-items-center rounded-full border border-border bg-card/85 p-2 text-foreground shadow-md backdrop-blur transition hover:bg-card sm:grid"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>

        {/* Dots */}
        <div className="mt-3 flex items-center justify-center gap-2">
          {banners.map((b, i) => (
            <button
              key={b.src}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to banner ${i + 1}`}
              aria-current={i === index}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-brand" : "w-2 bg-border hover:bg-brand/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-workshop.jpg";
import craneHeroAsset from "@/assets/autodome-crane-hero.jpg.asset.json";

const HERO_SLIDES = [
  {
    src: craneHeroAsset.url,
    alt: "AutoDome technician servicing a Liebherr mobile crane under a clear blue sky",
  },
  {
    src: heroImage,
    alt: "Heavy-duty commercial trucks raised on lifts inside AutoDome's modern diagnostics workshop",
  },
];

export function Hero() {
  const [offset, setOffset] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setOffset(Math.min(window.scrollY * 0.18, 140)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActiveSlide((current) => (current + 1) % HERO_SLIDES.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width={1920}
            height={1088}
            fetchPriority={index === 0 ? "high" : "auto"}
            decoding="async"
            className={cn(
              "absolute inset-0 h-[115%] w-full object-cover transition-opacity duration-1000",
              index === activeSlide ? "opacity-100" : "opacity-0",
            )}
            style={{ transform: `translate3d(0, -${offset}px, 0)` }}
          />
        ))}
        <div className="absolute inset-0 bg-hero-veil" />
      </div>

      <div className="section-shell pb-8 pt-20 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="font-display text-3xl font-bold leading-[1.1] text-primary-foreground sm:text-4xl lg:text-5xl">
            Advanced Truck Repair & <br />
            <span className="text-accent">Heavy Vehicle Diagnostics in UAE </span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground sm:mt-6 sm:text-lg">
            AutoDome provides professional truck repair, heavy vehicle diagnostics, ECU repair and programming, genuine
            parts, and advanced workshop solutions for fleets, workshops, and commercial vehicle operators across the
            UAE.
          </p>

          <div className="mt-5 flex w-full flex-col gap-2.5 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#contact-form">
                Book a Diagnostic Service
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="onImage" size="xl" className="w-full sm:w-auto">
              <a href="#solutions">Explore Services</a>
            </Button>
          </div>

          <div className="mt-5 w-full border-t border-primary-foreground/20 pt-4 sm:mt-10 sm:pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-primary-foreground sm:text-base">
              Authorized Partners
            </p>
            <ul className="mt-3 grid w-full grid-cols-2 items-center justify-items-center gap-3 sm:mt-6 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
              {HERO_PARTNERS.map((partner) => (
                <li
                  key={partner.name}
                  className="flex w-full min-w-0 items-center justify-center last:col-span-2 last:w-1/2 sm:w-auto sm:last:col-span-1 sm:last:w-auto"
                >
                  <span
                    className={cn(
                      "flex h-16 w-full items-center justify-center rounded-2xl bg-card p-2.5 sm:h-20 sm:w-44 sm:p-3",
                      partner.sizeClass
                    )}
                  >
                    <img
                      src={partner.logo}
                      alt={`${partner.name} authorized partner logo`}
                      width={320}
                      height={120}
                      loading="lazy"
                      decoding="async"
                      className="max-h-full max-w-full object-contain"
                    />
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-primary-foreground/70 lg:block">
        <ChevronDown className="size-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}

import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import hero8073 from "@/assets/hero-IMG_8073.jpg";
import hero8135 from "@/assets/hero-IMG_8135.jpg";
import hero8158 from "@/assets/hero-IMG_8158.jpg";
import hero8183 from "@/assets/hero-IMG_8183.jpg";

const HERO_SLIDES = [
  {
    src: hero8073,
    alt: "AutoDome technician with diagnostic laptop beside a Liebherr crane truck on site",
    position: "object-[50%_30%]",
  },
  {
    src: hero8135,
    alt: "AutoDome mechanic repairing a truck engine with the cab tilted open",
    position: "object-[50%_35%]",
  },
  {
    src: hero8158,
    alt: "AutoDome technician running diagnostics on a refrigerated truck with its hood open",
    position: "object-[50%_30%]",
  },
  {
    src: hero8183,
    alt: "AutoDome engineer performing diagnostics on a mobile crane carrier",
    position: "object-[50%_35%]",
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
              "absolute inset-0 h-[112%] w-full object-cover transition-opacity duration-1000",
              slide.position,
              index === activeSlide ? "opacity-100" : "opacity-0",
            )}
            style={{ transform: `translate3d(0, -${offset}px, 0)` }}
          />
        ))}
        <div className="absolute inset-0 bg-hero-veil" />
      </div>

      <div className="section-shell pb-28 pt-24 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-28">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="font-display text-4xl font-bold leading-[1.08] text-primary-foreground text-hero-shadow sm:text-5xl lg:text-6xl">
            Advanced Truck Repair & <br />
            <span className="text-accent">Heavy Vehicle Diagnostics in UAE </span>
          </h1>

          <p className="mt-4 max-w-2xl text-base font-medium leading-relaxed text-primary-foreground/95 text-hero-shadow-strong sm:mt-7 sm:text-lg lg:text-xl">
            AutoDome provides professional truck repair, heavy vehicle diagnostics, ECU repair and programming, genuine
            parts, and advanced workshop solutions for fleets, workshops, and commercial vehicle operators across the
            UAE.
          </p>

          <div className="mt-6 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-4">
            <Button asChild variant="hero" size="xl" className="w-full text-base sm:w-auto sm:px-11 sm:text-lg">
              <a href="#contact-form">
                Book a Diagnostic Service
                <ArrowRight className="size-5" aria-hidden="true" />
              </a>
            </Button>
            <Button asChild variant="onImage" size="xl" className="w-full text-base sm:w-auto sm:px-11 sm:text-lg">
              <a href="#solutions">Explore Services</a>
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-primary-foreground/70 lg:block">
        <ChevronDown className="size-6 animate-bounce" aria-hidden="true" />
      </div>
    </section>
  );
}

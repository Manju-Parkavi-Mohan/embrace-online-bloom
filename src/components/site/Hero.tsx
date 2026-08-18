import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-workshop.jpg";
import magicLogo from "@/assets/magic-motorsport.jpg";
import jaltestLogo from "@/assets/jaltest.jpg";

const HERO_PARTNERS = [
  { name: "Magic Motorsport", logo: magicLogo },
  { name: "Jaltest Diagnostics", logo: jaltestLogo },
];

export function Hero() {
  const [offset, setOffset] = useState(0);

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

  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          src={heroImage}
          alt="Heavy-duty commercial trucks raised on lifts inside AutoDome's modern diagnostics workshop"
          width={1920}
          height={1088}
          fetchPriority="high"
          decoding="async"
          className="h-[115%] w-full object-cover"
          style={{ transform: `translate3d(0, -${offset}px, 0)` }}
        />
        <div className="absolute inset-0 bg-hero-veil" />
      </div>

      <div className="section-shell pb-8 pt-20 sm:pb-16 sm:pt-28 lg:pb-20 lg:pt-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <h1 className="font-display text-3xl font-bold leading-[1.1] text-primary-foreground sm:text-4xl lg:text-5xl">
            Powering Smarter Mobility Through{" "}
            <span className="text-accent">Advanced Vehicle Technology</span>
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-primary-foreground sm:mt-6 sm:text-lg">
            AutoDome delivers advanced commercial vehicle diagnostics, ECU solutions, repairs,
            genuine parts, technical training, and workshop technology solutions for fleets,
            workshops, and industrial vehicle operators.
          </p>

          <div className="mt-5 flex w-full flex-col gap-2.5 sm:mt-9 sm:w-auto sm:flex-row sm:items-center sm:justify-center sm:gap-3">
            <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
              <a href="#contact">
                Request Technical Consultation
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
            <ul className="mt-3 grid w-full grid-cols-2 items-center gap-3 sm:mt-6 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-12">
              {HERO_PARTNERS.map((partner) => (
                <li key={partner.name} className="flex min-w-0 items-center justify-center">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} authorized partner logo`}
                    width={320}
                    height={120}
                    loading="lazy"
                    decoding="async"
                    className="h-auto w-full max-w-full rounded-2xl object-contain sm:h-28 sm:w-auto sm:max-w-[320px]"
                  />
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

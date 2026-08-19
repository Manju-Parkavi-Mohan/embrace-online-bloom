import { useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import trainingImage from "@/assets/service-training.jpg";

const PILLARS = [
  {
    Icon: GraduationCap,
    title: "Certification",
    body: "Structured programs with formal assessment and certificates of completion.",
  },
  {
    Icon: Users,
    title: "Hands-on workshops",
    body: "Live vehicle and bench sessions on real ECUs and diagnostic hardware.",
  },
  {
    Icon: ClipboardCheck,
    title: "Corporate learning",
    body: "Tailored fleet and workshop team training, delivered on-site or at our facility.",
  },
];

export function Training() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(node.clientWidth * 0.85, 460), behavior: "smooth" });
  };

  return (
    <section id="training" className="relative isolate overflow-hidden py-10 sm:py-12 lg:py-14">
      <img
        src={trainingImage}
        alt="AutoDome instructor leading an advanced diagnostics training program"
        width={1600}
        height={900}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <span className="absolute inset-0 -z-10 bg-hero-veil" aria-hidden="true" />
      <span className="absolute inset-0 -z-10 bg-foreground/55" aria-hidden="true" />

      <div className="section-shell">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <Reveal className="min-w-0 max-w-2xl">
          <p className="eyebrow" style={{ color: "var(--primary-foreground)" }}>
            <span className="h-px w-8" aria-hidden="true" />
            Advanced training programs
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
            Technical training that raises the capability of your entire team.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-primary-foreground/85 sm:text-lg">
            Our professional programs are designed for technicians and engineers who need real diagnostic depth —
            electronic systems, ECU work, fault tracing, and modern workshop practice, taught by working engineers.
          </p>
          </Reveal>

          <div className="flex shrink-0 gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll training programs left"
              className="grid size-11 place-items-center rounded-full border border-primary-foreground/40 bg-foreground/70 text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground active:border-accent active:bg-accent active:text-accent-foreground"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll training programs right"
              className="grid size-11 place-items-center rounded-full border border-primary-foreground/40 bg-foreground/70 text-primary-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground active:border-accent active:bg-accent active:text-accent-foreground"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:overflow-visible sm:px-0"
        >
          {PILLARS.map((pillar, index) => (
            <Reveal
              key={pillar.title}
              delay={index * 90}
              className="w-[85vw] max-w-[420px] shrink-0 snap-start sm:w-auto sm:max-w-none"
            >
              <div className="h-full rounded-2xl border border-primary-foreground/25 bg-foreground/90 p-7 shadow-lifted backdrop-blur-md">
                <pillar.Icon className="size-6 text-accent" aria-hidden="true" />
                <h3 className="mt-5 font-display text-lg font-bold text-primary-foreground">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-primary-foreground">{pillar.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <Button asChild variant="light" size="xl" className="mt-12 w-full sm:w-auto">
            <a href="#contact">
              View Programs
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

import { useCallback, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";
import { cn } from "@/lib/utils";

const PREVIEW_LENGTH = 165;

/* Short titles that should still read as two lines like the others */
const TITLE_LINES: Record<string, [string, string]> = {
  "ECU Repair & Reprogramming": ["ECU Repair", "& Reprogramming"],
  "Advanced Training Programs": ["Advanced", "Training Programs"],
};

function ServiceSlide({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const needsToggle = service.body.length > PREVIEW_LENGTH;
  const preview = needsToggle
    ? `${service.body.slice(0, PREVIEW_LENGTH).trimEnd()}… `
    : service.body;

  return (
    <article className="grid items-center gap-5 sm:gap-8 lg:grid-cols-2 lg:gap-20">
      <div className="relative">
        <Link
          to="/services/$slug"
          params={{ slug: service.slug }}
          aria-label={`Open ${service.title} service page`}
          className="group relative block overflow-hidden rounded-3xl shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <img
            src={service.image}
            alt={service.alt}
            width={1200}
            height={900}
            loading="lazy"
            decoding="async"
            className="aspect-[16/9] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] sm:aspect-[4/3]"
          />
          <span className="pointer-events-none absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/45" />
          <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 p-5 text-sm font-semibold text-primary-foreground opacity-100 transition-all duration-500 sm:translate-y-2 sm:opacity-0 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            <span className="inline-flex items-center gap-2 rounded-full bg-ink/70 px-4 py-2 backdrop-blur-sm">
              View service page
              <ArrowRight className="size-4" aria-hidden="true" />
            </span>
          </span>
        </Link>
      </div>

      <div>
        <p className="font-display text-sm font-bold tracking-[0.2em] text-primary-foreground/70">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-lg font-bold leading-snug sm:mt-3 sm:text-2xl lg:text-3xl">
          <Link
            to="/services/$slug"
            params={{ slug: service.slug }}
            className="inline-flex items-center gap-2 text-primary-foreground/85 transition-all duration-300 hover:font-extrabold hover:text-primary-foreground hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {TITLE_LINES[service.title] ? (
              <span className="block">
                <span className="block">{TITLE_LINES[service.title]![0]}</span>
                <span className="block">{TITLE_LINES[service.title]![1]}</span>
              </span>
            ) : (
              service.title
            )}
          </Link>
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:mt-4 sm:text-base">
          {expanded ? `${service.body} ` : preview}
          {needsToggle && (
            <button
              type="button"
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="inline font-semibold text-primary-foreground underline underline-offset-4 transition-opacity hover:opacity-80"
            >
              {expanded ? "Show less" : "Learn more"}
            </button>
          )}
        </p>

        <div className="mt-4 flex flex-col gap-3 sm:mt-6 sm:flex-row sm:items-center">
          <Button asChild variant="light" className="w-full sm:w-auto">
            <a href="/#contact">
              Request Consultation
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const total = SERVICES.length;
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const axis = useRef<"h" | "v" | null>(null);
  const [drag, setDrag] = useState(0);

  const go = useCallback(
    (dir: number) => setActive((i) => (i + dir + total) % total),
    [total],
  );

  return (
    <section id="solutions" className="section-dark py-14 sm:py-18 lg:py-22">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8" aria-hidden="true" />
            Services
          </p>
          <div className="max-w-2xl">
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              One partner. Seven disciplines.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-lg">
              Engineered for uptime, accuracy, and long-term fleet reliability.
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-6 sm:mt-10">
          <div
            className="relative"
            role="region"
            aria-roledescription="carousel"
            aria-label="AutoDome services"
          >
            <div className="mb-3 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous service"
                className="grid size-8 place-items-center rounded-full border border-border/40 text-foreground transition-colors hover:bg-foreground hover:text-background active:bg-foreground active:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ChevronLeft className="size-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next service"
                className="grid size-8 place-items-center rounded-full border border-border/40 text-foreground transition-colors hover:bg-foreground hover:text-background active:bg-foreground active:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <ChevronRight className="size-4" aria-hidden="true" />
              </button>
            </div>
            <div className="overflow-hidden">
              <div
                className={cn("flex", drag === 0 && "transition-transform duration-700 ease-out")}
                style={{
                  transform: `translateX(calc(-${active * 100}% + ${drag}px))`,
                  touchAction: "pan-y",
                }}
                onTouchStart={(e) => {
                  const t = e.touches[0];
                  if (!t) return;
                  touchStartX.current = t.clientX;
                  touchStartY.current = t.clientY;
                  axis.current = null;
                }}
                onTouchMove={(e) => {
                  const t = e.touches[0];
                  const sx = touchStartX.current;
                  const sy = touchStartY.current;
                  if (!t || sx === null || sy === null) return;
                  const dx = t.clientX - sx;
                  const dy = t.clientY - sy;
                  if (axis.current === null) {
                    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
                    axis.current = Math.abs(dx) > Math.abs(dy) ? "h" : "v";
                  }
                  if (axis.current === "h") setDrag(dx * 0.6);
                }}
                onTouchEnd={(e) => {
                  const t = e.changedTouches[0];
                  const sx = touchStartX.current;
                  const sy = touchStartY.current;
                  const dir = axis.current;
                  touchStartX.current = null;
                  touchStartY.current = null;
                  axis.current = null;
                  setDrag(0);
                  if (!t || sx === null || sy === null || dir !== "h") return;
                  const dx = t.clientX - sx;
                  if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
                }}
              >
                {SERVICES.map((service, index) => (
                  <div
                    key={service.title}
                    className="w-full shrink-0 px-0.5"
                    aria-hidden={index !== active}
                  >
                    <ServiceSlide service={service} index={index} />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex items-center justify-center">
              <div className="flex items-center gap-2">
                {SERVICES.map((service, index) => (
                  <button
                    key={service.title}
                    type="button"
                    onClick={() => setActive(index)}
                    aria-label={`Go to ${service.title}`}
                    aria-current={index === active}
                    className={cn(
                      "h-2 rounded-full transition-all",
                      index === active
                        ? "w-7 bg-primary-foreground"
                        : "w-2 bg-primary-foreground/35 hover:bg-primary-foreground/70",
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";

export function Services() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * node.clientWidth * 0.85, behavior: "smooth" });
  };

  const card = (service: (typeof SERVICES)[number], index: number) => (
    <Link
      to="/services/$slug"
      params={{ slug: service.slug }}
      aria-label={`Open ${service.title} service page`}
      className="group relative flex h-[380px] flex-col justify-end overflow-hidden rounded-3xl border border-primary-foreground/15 shadow-soft transition-colors duration-500 hover:border-primary-foreground/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:h-[420px]"
    >
      <img
        src={service.image}
        alt={service.alt}
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      <span
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/10"
        aria-hidden="true"
      />

      <span className="absolute left-5 top-5 rounded-full border border-white/25 bg-white/10 px-3 py-1 font-display text-xs font-bold tracking-[0.2em] text-primary-foreground backdrop-blur-md">
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative p-6">
        <h3 className="font-display text-xl font-bold leading-snug text-primary-foreground transition-colors duration-300 group-hover:text-primary-light">
          {service.title}
        </h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-primary-foreground/75">
          {service.body}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors duration-300 group-hover:text-primary-light">
          Request Consultation
          <ArrowRight
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  );

  return (
    <section id="solutions" className="section-dark py-10 sm:py-14 lg:py-16">
      <div className="section-shell">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <Reveal className="min-w-0">
            <p className="eyebrow">
              <span className="h-px w-8" aria-hidden="true" />
              Services
            </p>
            <div className="max-w-2xl">
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Complete Truck Repair &amp; Diagnostics Solutions.
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-lg">
                Engineered for uptime, accuracy, and long-term fleet reliability.
              </p>
            </div>
          </Reveal>

          <div className="flex shrink-0 gap-2 lg:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll services left"
              className="grid size-8 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-ink active:bg-primary-foreground active:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll services right"
              className="grid size-8 place-items-center rounded-full border border-primary-foreground/30 text-primary-foreground transition-colors hover:bg-primary-foreground hover:text-ink active:bg-primary-foreground active:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile / tablet: horizontal scroll */}
        <div
          ref={scroller}
          className="no-scrollbar -mx-5 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 lg:hidden"
        >
          {SERVICES.map((service, index) => (
            <div key={service.slug} className="w-[85vw] max-w-[420px] shrink-0 snap-start">
              {card(service, index)}
            </div>
          ))}
        </div>

        {/* Desktop: grid */}
        <div className="mt-8 hidden grid-cols-3 gap-6 lg:grid">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
              {card(service, index)}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

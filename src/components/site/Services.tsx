import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { SERVICES } from "@/lib/services";

export function Services() {
  return (
    <section id="solutions" className="section-dark py-10 sm:py-14 lg:py-16">
      <div className="section-shell">
        <Reveal>
          <p className="eyebrow">
            <span className="h-px w-8" aria-hidden="true" />
            Services
          </p>
          <div className="max-w-2xl">
            <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Complete Truck Repair & Diagnostics Solutions.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-lg">
              Engineered for uptime, accuracy, and long-term fleet reliability.
            </p>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, index) => (
            <Reveal key={service.slug} delay={(index % 3) * 80}>
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
                  <h3 className="font-display text-xl font-bold leading-snug text-primary-foreground transition-colors duration-300 group-hover:text-primary-soft">
                    {service.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-primary-foreground/75">
                    {service.body}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors duration-300 group-hover:text-primary-soft">
                    Request Consultation
                    <ArrowRight
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

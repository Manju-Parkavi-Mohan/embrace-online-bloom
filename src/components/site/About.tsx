import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import aboutImage from "@/assets/about-workshop.jpg";
import { SITE } from "@/lib/site";

const FACTS = [
  {
    value: "Commercial Vehicle Diagnostics",
    label: "Advanced diagnostics for trucks, buses, commercial vehicles & heavy machinery",
  },
  {
    value: "ECU Programming & Repair",
    label: "ECU coding, programming, calibration and electronic control unit repair",
  },
  {
    value: "Heavy-Duty Vehicle Solutions",
    label: "Dealer-level diagnostics for engines, transmissions, ABS, EBS, DPF, SCR & more",
  },
  {
    value: "Fleet & Workshop Support",
    label: "Reliable diagnostic solutions to reduce vehicle downtime and improve fleet uptime",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-10 sm:py-14 lg:py-16">
      <div className="section-shell">
        <div>
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8" aria-hidden="true" />
              About AutoDome
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Truck Diagnostics & Professional Diagnostic Tools for Commercial Vehicles.
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                AutoDome is a specialist truck and heavy vehicle diagnostic center in the UAE, providing professional
                diagnostics and technical solutions for commercial vehicles across the UAE and GCC. We help truck
                owners, fleet operators, workshops, and technicians accurately diagnose and resolve complex vehicle
                faults using advanced truck diagnostic tools and hands-on technical expertise.
              </p>
              <p>
                Our services cover heavy-duty truck diagnostics, ECU programming, ECU repair, chip tuning software,
                diagnostic tool sales, and technical support for modern commercial vehicles. We work with workshops and
                fleet operators to identify faults faster, reduce vehicle downtime, and improve the efficiency and
                reliability of their operations.
              </p>
              <p>
                In addition to our diagnostic services, AutoDome supplies professional truck diagnostic equipment, ECU
                programming tools, and workshop software for businesses looking to expand their diagnostic capabilities.
                From individual truck diagnostics to fleet support and workshop solutions, AutoDome delivers the
                diagnostic equipment, software, and technical expertise businesses need to keep commercial vehicles
                running efficiently.
              </p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <dl className="mt-12 hidden grid-cols-2 gap-8 border-t border-border pt-10 sm:grid">
              {FACTS.map((fact) => (
                <div key={fact.label}>
                  <dt className="font-display text-xl font-bold text-foreground sm:text-2xl">{fact.value}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{fact.label}</dd>
                </div>
              ))}
            </dl>

            <Button asChild variant="hero" size="lg" className="mt-10 w-full sm:w-auto">
              <a href="#solutions">
                Explore our services
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="mt-12 grid items-center gap-6 rounded-3xl border border-white/10 bg-ink p-7 shadow-lifted sm:p-10 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="min-w-0">
              <p className="font-display text-sm font-bold uppercase tracking-[0.16em] text-white">
                Shop online at {SITE.storefront.name}
              </p>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70 sm:text-base">
                {SITE.storefront.name} is our e-commerce storefront, delivering the tools, parts, and workshop equipment
                behind every AutoDome service.
              </p>
            </div>
            <a
              href={SITE.storefront.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-accent underline-offset-4 transition-all hover:brightness-125 hover:underline"
            >
              Visit the {SITE.storefront.name} store
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </Reveal>

        <FeaturedProducts />
      </div>
    </section>
  );
}

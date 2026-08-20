import { Anchor, Bus, Factory, HardHat, Mountain, Truck, Tractor } from "lucide-react";
import { Reveal } from "./Reveal";
import logistics from "@/assets/ind-logistics.jpg";
import construction from "@/assets/ind-construction.jpg";
import mining from "@/assets/ind-mining.jpg";
import agriculture from "@/assets/ind-agriculture.jpg";
import marine from "@/assets/ind-marine.jpg";
import transport from "@/assets/ind-transport.jpg";
import equipment from "@/assets/service-equipment.jpg";

const INDUSTRIES = [
  { name: "Logistics", body: "Long-haul and distribution fleets", image: logistics, Icon: Truck },
  { name: "Construction", body: "Site machinery and tipper fleets", image: construction, Icon: HardHat },
  { name: "Mining", body: "Haulage and heavy earthmoving", image: mining, Icon: Mountain },
  { name: "Agriculture", body: "Tractors and harvesting equipment", image: agriculture, Icon: Tractor },
  { name: "Marine", body: "Auxiliary and propulsion engines", image: marine, Icon: Anchor },
  { name: "Public Transport", body: "Bus and passenger fleets", image: transport, Icon: Bus },
  { name: "Industrial Equipment", body: "Generators and plant machinery", image: equipment, Icon: Factory },
];

export function Industries() {
  return (
    <section id="industries" className="bg-surface py-10 sm:py-14 lg:py-16">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8" aria-hidden="true" />
            Industries We Serve
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Engineering support across every heavy-duty sector.
          </h2>
        </Reveal>

        {/* Mobile: compact two-column icon grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:hidden">
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.name}
              className="rounded-2xl border border-border bg-card p-4 shadow-soft"
            >
              <span className="grid size-10 place-items-center rounded-xl bg-primary-soft text-primary">
                <industry.Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-3 font-display text-base font-bold leading-snug text-foreground">
                {industry.name}
              </h3>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{industry.body}</p>
            </article>
          ))}
        </div>

        {/* Tablet and up: image cards */}
        <div className="mt-10 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((industry, index) => (
            <Reveal
              key={industry.name}
              direction="scale"
              delay={(index % 3) * 90}
              className={index === 0 ? "lg:row-span-2" : ""}
            >
              <article className="group relative h-full min-h-[280px] overflow-hidden rounded-3xl shadow-soft">
                <img
                  src={industry.image}
                  alt={`${industry.name} vehicles and equipment supported by AutoDome`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.1s] ease-out group-hover:scale-110"
                />
                <span
                  className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/25 to-transparent"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col justify-end p-8">
                  <h3 className="font-display text-2xl font-bold text-primary-foreground">
                    {industry.name}
                  </h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{industry.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

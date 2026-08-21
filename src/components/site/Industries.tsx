import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * node.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section id="industries" className="bg-surface py-10 sm:py-14 lg:py-16">
      <div className="section-shell">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <Reveal className="min-w-0 max-w-3xl">
            <p className="eyebrow">
              <span className="h-px w-8" aria-hidden="true" />
              Industries We Serve
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Engineering support across every heavy-duty sector.
            </h2>
          </Reveal>

          <div className="flex shrink-0 gap-2 sm:hidden">
            <button
              type="button"
              onClick={() => scrollBy(-1)}
              aria-label="Scroll industries left"
              className="grid size-8 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background active:bg-foreground active:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronLeft className="size-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => scrollBy(1)}
              aria-label="Scroll industries right"
              className="grid size-8 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background active:bg-foreground active:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ChevronRight className="size-4" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Mobile: horizontally scrollable image cards */}
        <div
          ref={scroller}
          className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 sm:hidden"
        >
          {INDUSTRIES.map((industry) => (
            <article
              key={industry.name}
              className="relative aspect-[4/3] w-[62vw] max-w-[260px] shrink-0 snap-start overflow-hidden rounded-2xl shadow-soft"
            >
              <img
                src={industry.image}
                alt={`${industry.name} vehicles and equipment supported by AutoDome`}
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <span
                className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/30 to-transparent"
                aria-hidden="true"
              />
              <div className="relative flex h-full flex-col justify-end p-4">
                <h3 className="font-display text-base font-bold leading-snug text-primary-foreground">
                  {industry.name}
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-primary-foreground/80">
                  {industry.body}
                </p>
              </div>
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

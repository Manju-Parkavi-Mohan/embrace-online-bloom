import { Reveal } from "./Reveal";

import mercedesLogo from "@/assets/brands/mercedes.png";
import volvoLogo from "@/assets/brands/volvo.png";
import scaniaLogo from "@/assets/brands/scania.png";
import manLogo from "@/assets/brands/man.png";
import dafLogo from "@/assets/brands/daf.png";
import ivecoLogo from "@/assets/brands/iveco.png";
import renaultLogo from "@/assets/brands/renault-trucks.png";
import cumminsLogo from "@/assets/brands/cummins.png";
import perkinsLogo from "@/assets/brands/perkins.png";
import caterpillarLogo from "@/assets/brands/caterpillar.png";
import johnDeereLogo from "@/assets/brands/john-deere.png";
import jaltestLogo from "@/assets/brands/jaltest.png";
import autoveiLogo from "@/assets/autovei.png";
import eculiteLogo from "@/assets/eculite.png";
import engineDanceLogo from "@/assets/enginedance.png";
import magicLogo from "@/assets/magic-motorsport.jpg";

type Brand = { name: string; logo: string };

const BRANDS: Brand[] = [
  { name: "Mercedes-Benz", logo: mercedesLogo },
  { name: "Volvo", logo: volvoLogo },
  { name: "Scania", logo: scaniaLogo },
  { name: "MAN", logo: manLogo },
  { name: "DAF", logo: dafLogo },
  { name: "IVECO", logo: ivecoLogo },
  { name: "Renault Trucks", logo: renaultLogo },
  { name: "Cummins", logo: cumminsLogo },
  { name: "Perkins", logo: perkinsLogo },
  { name: "Caterpillar", logo: caterpillarLogo },
  { name: "John Deere", logo: johnDeereLogo },
  { name: "Autovei", logo: autoveiLogo },
  { name: "ECUlite", logo: eculiteLogo },
  { name: "Engine Dance", logo: engineDanceLogo },
  { name: "JALTEST", logo: jaltestLogo },
  { name: "Magic Motor Sports", logo: magicLogo },
];

export function Brands() {
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-label="Supported vehicle brands"
      className="border-y border-border bg-background py-10 sm:py-12 lg:py-14"
    >
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8" aria-hidden="true" />
            Supported Vehicle Brands
          </p>
          <h2 className="mt-3 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl lg:text-3xl">
            Diagnostics for Leading Truck, buses, construction eqiupments & Engine Brands
          </h2>
        </Reveal>
      </div>

      <div
        className="marquee-mask mt-10 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
        aria-hidden="true"
      >
        <ul className="marquee-track flex w-max gap-4 pr-4">
          {loop.map((brand, index) => (
            <li
              key={`${brand.name}-${index}`}
              className="flex h-20 w-[200px] shrink-0 items-center justify-start gap-3 rounded-2xl border border-border/60 bg-ink px-4 text-left text-background shadow-soft sm:h-24 sm:w-[240px] sm:px-5"
            >
              <span className="grid h-12 w-14 shrink-0 place-items-center overflow-hidden rounded-lg bg-white p-1 sm:h-14 sm:w-16">
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-contain"
                />
              </span>
              <span className="font-display text-sm font-bold leading-tight tracking-tight sm:text-base">
                {brand.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="sr-only">
        {BRANDS.map((brand) => (
          <li key={brand.name}>{brand.name}</li>
        ))}
      </ul>
    </section>
  );
}

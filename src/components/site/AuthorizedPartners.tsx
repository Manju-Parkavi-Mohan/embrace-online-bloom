import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";


import magicLogo from "@/assets/magic-motorsport.jpg";
import jaltestLogo from "@/assets/jaltest.jpg";
import engineDanceLogo from "@/assets/enginedance.png";
import eculiteLogo from "@/assets/eculite.png";
import autoveiLogo from "@/assets/autovei.png";

const HERO_PARTNERS = [
  { name: "Magic Motorsport", logo: magicLogo, sizeClass: "h-20 sm:h-24 sm:w-52" },
  { name: "Jaltest Diagnostics", logo: jaltestLogo, sizeClass: "h-20 sm:h-24 sm:w-52" },
  { name: "Engine Dance", logo: engineDanceLogo },
  { name: "ECULite", logo: eculiteLogo },
  { name: "Autovei", logo: autoveiLogo },
];

export function AuthorizedPartners() {
  return (
    <section
      aria-label="Authorized partners"
      className="section-dark border-y border-border py-10 sm:py-12 lg:py-14"

    >
      <div className="section-shell">
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow">
            <span className="h-px w-8" aria-hidden="true" />
            Authorized Partners
          </p>
          <ul className="mt-6 grid w-full grid-cols-2 items-center justify-items-center gap-3 sm:mt-8 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            {HERO_PARTNERS.map((partner) => (
              <li
                key={partner.name}
                className="flex w-full min-w-0 items-center justify-center sm:w-auto"
              >
                <span
                  className={cn(
                    "chip-light shadow-lifted flex h-16 w-full items-center justify-center rounded-2xl border p-2.5 sm:h-20 sm:w-44 sm:p-3",

                    partner.sizeClass,
                  )}
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} authorized partner logo`}
                    width={320}
                    height={120}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}


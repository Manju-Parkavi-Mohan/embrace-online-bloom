import { Reveal } from "./Reveal";

type Brand = { name: string; slug?: string };

const BRANDS: Brand[] = [
  { name: "Mercedes-Benz" },
  { name: "Volvo", slug: "volvo" },
  { name: "Scania", slug: "scania" },
  { name: "MAN", slug: "man" },
  { name: "DAF", slug: "daf" },
  { name: "IVECO", slug: "iveco" },
  { name: "Renault Trucks", slug: "renault" },
  { name: "Cummins" },
  { name: "Perkins" },
  { name: "Caterpillar", slug: "caterpillar" },
  { name: "John Deere", slug: "johndeere" },
];

function initials(name: string) {
  return name
    .split(/[\s-]+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

export function Brands() {
  const loop = [...BRANDS, ...BRANDS];

  return (
    <section
      aria-label="Supported vehicle brands"
      className="section-dark border-y border-border py-10 sm:py-12 lg:py-14"
    >
      <div className="section-shell">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">
            <span className="h-px w-8" aria-hidden="true" />
            Supported Vehicle Brands
          </p>
          <h2 className="mt-3 font-display text-xl font-bold leading-tight sm:text-2xl lg:text-3xl">
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
              className="chip-light flex h-20 w-[190px] shrink-0 items-center justify-center gap-3 rounded-2xl border px-5 text-center sm:h-24 sm:w-[230px]"
            >
              {brand.slug ? (
                <img
                  src={`https://cdn.simpleicons.org/${brand.slug}`}
                  alt=""
                  width={28}
                  height={28}
                  loading="lazy"
                  decoding="async"
                  className="size-7 shrink-0 object-contain"
                />
              ) : (
                <span className="grid size-7 shrink-0 place-items-center rounded-full border border-current/20 font-display text-[0.65rem] font-bold">
                  {initials(brand.name)}
                </span>
              )}
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

import { useRef } from "react";
import { BadgeCheck, ChevronLeft, ChevronRight, Leaf, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const CERTIFICATIONS = [
  {
    code: "ISO 9001:2015",
    title: "Quality Management",
    body: "Documented processes and controls that keep diagnostic and repair quality consistent on every job.",
    Icon: BadgeCheck,
  },
  {
    code: "ISO 14001:2015",
    title: "Environmental Management",
    body: "Responsible handling of components, consumables, and workshop waste across all operations.",
    Icon: Leaf,
  },
  {
    code: "ISO 45001:2018",
    title: "Health & Safety Management",
    body: "A safety-first workshop culture protecting our engineers, partners, and customer assets.",
    Icon: ShieldCheck,
  },
];

const chevronClass =
  "grid size-8 place-items-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground hover:text-background active:bg-foreground active:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Credentials() {
  const scroller = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: 1 | -1) => {
    const node = scroller.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(node.clientWidth * 0.85, 460), behavior: "smooth" });
  };

  return (
    <section id="credentials" className="bg-background py-10 sm:py-14 lg:py-16">
      <div className="section-shell">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">
            <span className="h-px w-8" aria-hidden="true" />
            Certifications
          </p>
          <h2 className="mt-3 font-display text-2xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Certified management systems.
          </h2>
        </Reveal>

        <div className="mt-5 flex justify-end gap-2 md:hidden">
          <button type="button" onClick={() => scrollBy(-1)} aria-label="Scroll certifications left" className={chevronClass}>
            <ChevronLeft className="size-4" aria-hidden="true" />
          </button>
          <button type="button" onClick={() => scrollBy(1)} aria-label="Scroll certifications right" className={chevronClass}>
            <ChevronRight className="size-4" aria-hidden="true" />
          </button>
        </div>

        <div
          ref={scroller}
          className="no-scrollbar -mx-5 mt-4 flex snap-x snap-mandatory scroll-smooth gap-5 overflow-x-auto px-5 pb-2 md:mx-0 md:mt-8 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0"
        >
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.code}
              className="w-[85vw] max-w-[420px] shrink-0 snap-start md:w-auto md:max-w-none"
            >
              <article className="h-full rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
                <span className="grid size-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                  <cert.Icon className="size-6" aria-hidden="true" />
                </span>
                <p className="mt-7 font-display text-lg font-bold text-foreground">{cert.code}</p>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-accent">
                  {cert.title}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{cert.body}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, ShoppingBag } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Button } from "@/components/ui/button";
import { SERVICES, getService } from "@/lib/services";
import { PAGE_SEO } from "@/lib/seo";
import { SERVICE_SCHEMA } from "@/lib/service-schema";
import { SERVICE_BOLD_PHRASES } from "@/lib/service-content";
import { Contact } from "@/components/site/Contact";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Service unavailable | AutoDome" }, { name: "robots", content: "noindex" }],
      };
    }
    const seo = PAGE_SEO[loaderData.service.slug];
    const title = seo?.title ?? `${loaderData.service.title} | AutoDome`;
    const description = seo?.description ?? loaderData.service.intro;
    const url = `https://autodome.ae/services/${loaderData.service.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        ...(seo ? [{ name: "keywords", content: seo.keywords }] : []),
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { property: "og:url", content: url },
        { property: "og:image", content: "https://autodome.ae/og-image.jpg" },
        { name: "twitter:image", content: "https://autodome.ae/og-image.jpg" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(
            SERVICE_SCHEMA[loaderData.service.slug] ?? {
              "@context": "https://schema.org",
              "@type": "Service",
              name: loaderData.service.title,
              description,
              url,
              provider: { "@id": "https://autodome.ae/#business" },
            },
          ),
        },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />

      <main>
        <section className="relative isolate mt-14 min-h-[22rem] overflow-hidden sm:mt-16 sm:min-h-[30rem]">
          <img
            src={service.image}
            alt={service.alt}
            className="absolute inset-0 -z-10 h-full w-full object-cover"
            loading="eager"
            decoding="async"
          />
        </section>

        <section className="py-12 sm:py-16">
          <div className="section-shell grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <div className="min-w-0">
              <h1 className="text-left font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                {service.pageHeading ?? service.title}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {(service.overview ?? [service.body]).map((paragraph) => (
                  <p key={paragraph}>
                    <BoldPhrases text={paragraph} slug={service.slug} />
                  </p>
                ))}
              </div>

              {service.sections ? (
                <div className="mt-10 space-y-10">
                  {service.sections.map((section) => {
                    const Heading = section.level === 3 ? "h3" : "h2";
                    return (
                      <section key={section.heading}>
                        <Heading
                          className={
                            section.level === 3
                              ? "font-display text-xl font-bold text-foreground sm:text-2xl"
                              : "font-display text-2xl font-bold text-foreground sm:text-3xl"
                          }
                        >
                          {section.heading}
                        </Heading>
                        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                          {section.paragraphs.map((paragraph) => (
                            <ServiceParagraph key={paragraph} text={paragraph} slug={service.slug} />
                          ))}
                        </div>
                      </section>
                    );
                  })}
                </div>
              ) : null}

              {service.relatedSlugs?.length ? (
                <nav aria-label="Related technical services" className="mt-8 border-t border-border pt-6">
                  <p className="font-display font-semibold text-foreground">Related technical support</p>
                  <ul className="mt-3 space-y-3">
                    {service.relatedSlugs.map((slug) => {
                      const related = getService(slug);
                      if (!related) return null;
                      return (
                        <li key={slug}>
                          <Link
                            to="/services/$slug"
                            params={{ slug }}
                            className="inline-flex items-center gap-2 text-primary underline underline-offset-4 hover:text-foreground"
                          >
                            {related.menuTitle ?? related.title}
                            <ArrowRight className="size-4 shrink-0" aria-hidden="true" />
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              ) : null}

              {service.faqs?.length ? (
                <section className="mt-10" aria-labelledby="service-faq-heading">
                  <h2 id="service-faq-heading" className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    Frequently Asked Questions
                  </h2>
                  <Accordion type="single" collapsible className="mt-4 w-full">
                    {service.faqs.map((faq, index) => (
                      <AccordionItem key={faq.q} value={`service-faq-${index}`}>
                        <AccordionTrigger className="py-5 text-left font-display text-base font-semibold hover:text-primary hover:no-underline">
                          {faq.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                          {faq.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </section>
              ) : null}

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {service.highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <p className="font-display text-base font-bold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="min-w-0">
              <div className="space-y-6">
                <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft">
                  <p className="font-display text-lg font-bold text-foreground">What&apos;s included</p>
                  <ul className="mt-6 space-y-4">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                          <Check className="size-3" aria-hidden="true" />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="hero" className="mt-8 w-full">
                    <a href="#contact-form">Request Consultation</a>
                  </Button>
                </div>

                {service.slug === "truck-diagnostic-tools-trading" ? (
                  <section
                    aria-labelledby="online-store-heading"
                    className="section-dark relative isolate overflow-hidden rounded-3xl border border-primary/30 p-5 shadow-lifted sm:p-6"
                  >
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -right-20 -top-20 size-52 rounded-full bg-primary/25 blur-3xl"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute -bottom-24 -left-20 size-48 rounded-full bg-accent/10 blur-3xl"
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="font-display text-lg font-extrabold uppercase tracking-[0.12em] text-accent sm:text-xl">
                            ADL Automotive
                          </p>
                          <h2
                            id="online-store-heading"
                            className="mt-2 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-2xl"
                          >
                            Our Online Store
                          </h2>
                        </div>
                        <span className="relative grid size-11 shrink-0 place-items-center">
                          <span
                            aria-hidden="true"
                            className="bag-radiance pointer-events-none absolute -inset-3 rounded-[1.75rem]"
                          />
                          <span className="bag-badge relative grid size-11 place-items-center rounded-2xl bg-accent text-accent-foreground shadow-soft transition-transform duration-300 ease-out hover:scale-105">
                            <ShoppingBag className="bag-attention size-5" aria-hidden="true" />
                          </span>
                        </span>
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        Explore professional diagnostic tools and equipment with direct online ordering.
                      </p>

                      <div className="mt-5">
                        <FeaturedProducts browsing eagerImages skeletonCount={1} animated={false} />
                      </div>

                      <Button asChild variant="accent" size="lg" className="mt-5 w-full">
                        <a href="https://adl.apaarr.com/products" target="_blank" rel="noopener noreferrer">
                          Explore the ADL Store
                          <ArrowUpRight aria-hidden="true" />
                        </a>
                      </Button>
                    </div>
                  </section>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <Contact animated={false} />

        <section className="bg-surface py-12 sm:py-16">
          <div className="section-shell">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Other AutoDome services</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((item) => (
                <li key={item.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    className="flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40"
                  >
                    <span className="font-display text-sm font-bold text-foreground">{item.title}</span>
                    <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingActions consultHref="#contact-form" />
    </div>
  );
}

// "Label: text" list items (optionally bulleted) render with a bold h5 lead-in followed by a colon.
function ServiceParagraph({ text, slug }: { text: string; slug: string }) {
  const match = /^(?:•\s*)?([^:.]{2,80}):\s+(.+)$/.exec(text);
  if (!match)
    return (
      <p>
        <BoldPhrases text={text} slug={slug} />
      </p>
    );
  return (
    <div>
      <h5 className="inline font-display text-base font-bold text-foreground sm:text-lg">{match[1]}:</h5>{" "}
      <span>
        <BoldPhrases text={match[2] ?? ""} slug={slug} />
      </span>
    </div>
  );
}

function BoldPhrases({ text, slug }: { text: string; slug: string }) {
  const phrases = SERVICE_BOLD_PHRASES[slug];
  if (!phrases?.length) return <>{text}</>;
  const escaped = [...phrases].sort((a, b) => b.length - a.length).map((p) => p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const parts = text.split(new RegExp(`(${escaped.join("|")})`, "gi"));
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-bold text-foreground">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

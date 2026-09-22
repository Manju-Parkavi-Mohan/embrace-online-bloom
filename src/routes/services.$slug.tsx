import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowRight, Check, PhoneCall } from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { SERVICES, getService } from "@/lib/services";
import { SITE } from "@/lib/site";

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
    const title = `${loaderData.service.title} | AutoDome`;
    const description = loaderData.service.intro;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
      ],
    };
  },
  component: ServicePage,
});

function ServicePage() {
  const { service } = Route.useLoaderData();
  const others = SERVICES.filter((s) => s.slug !== service.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="relative isolate min-h-[22rem] overflow-hidden sm:min-h-[30rem]">
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
            <Reveal>
              <h1 className="flex items-center gap-3 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
                <span className="h-px w-8" aria-hidden="true" />
                {service.title}
              </h1>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {(service.overview ?? [service.body]).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>

              {service.sections ? (
                <div className="mt-10 space-y-10">
                  {service.sections.map((section) => {
                    const Heading = section.level === 3 ? "h3" : "h2";
                    return (
                      <section key={section.heading}>
                        <Heading className={section.level === 3 ? "font-display text-xl font-bold text-foreground sm:text-2xl" : "font-display text-2xl font-bold text-foreground sm:text-3xl"}>
                          {section.heading}
                        </Heading>
                        <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
                          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                        </div>
                      </section>
                    );
                  })}
                </div>
              ) : null}

              <div className="mt-10 grid gap-5 sm:grid-cols-3">
                {service.highlights.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                    <p className="font-display text-base font-bold text-foreground">{item.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right">
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
                  <a href="/#contact-form">Request Consultation</a>
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-surface py-12 sm:py-16">
          <div className="section-shell">
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Other AutoDome services</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
               {others.map((item) => (
                <li key={item.slug}>
                   {item.externalUrl ? (
                     <a href={item.externalUrl} target="_blank" rel="noopener noreferrer" className="flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40">
                       <span className="font-display text-sm font-bold text-foreground">{item.title}</span>
                       <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
                     </a>
                   ) : (
                     <Link to="/services/$slug" params={{ slug: item.slug }} className="flex h-full items-center justify-between gap-4 rounded-2xl border border-border bg-card p-6 shadow-soft transition-all hover:-translate-y-0.5 hover:border-primary/40">
                       <span className="font-display text-sm font-bold text-foreground">{item.title}</span>
                       <ArrowRight className="size-4 shrink-0 text-primary" aria-hidden="true" />
                     </Link>
                   )}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

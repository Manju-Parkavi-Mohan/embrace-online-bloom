import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FeaturedProducts } from "./FeaturedProducts";
import { SITE } from "@/lib/site";

export function AdlStore() {
  return (
    <section id="store" className="bg-background py-10 sm:py-14 lg:py-16">
      <div className="section-shell">
        <div className="section-dark overflow-hidden rounded-3xl border border-border bg-background shadow-lifted">
          <div className="p-6 sm:p-8 lg:p-10">
            <span className="glow-badge inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
              Shop Online
            </span>
            <h2 className="mt-4 max-w-4xl font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl lg:text-4xl">
              Buy Truck Diagnostic Tools &amp; Software at {SITE.storefront.name}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Browse professional diagnostic tools, parts, and workshop equipment with AutoDome
              technical support behind every order.
            </p>
            <Button asChild variant="light" size="lg" className="mt-6 w-full sm:w-auto">
              <a href={SITE.storefront.url} target="_blank" rel="noopener noreferrer">
                Visit the {SITE.storefront.name} store
                <ArrowRight aria-hidden="true" />
              </a>
            </Button>
          </div>
          <div className="bg-card p-4 sm:p-6">
            <FeaturedProducts />
          </div>
        </div>
      </div>
    </section>
  );
}

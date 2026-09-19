import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FeaturedProducts } from "./FeaturedProducts";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { SITE } from "@/lib/site";
import { useIsMobile } from "@/hooks/use-mobile";

export function StorePopup() {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    if (!isMobile) return;
    const storeSection = document.getElementById("store-mobile-trigger");
    if (!storeSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !shown.current) {
          shown.current = true;
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(storeSection);
    return () => observer.disconnect();
  }, [isMobile]);

  if (!isMobile) return null;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="section-dark max-h-[90vh] w-[calc(100%-2rem)] max-w-6xl gap-0 overflow-y-auto border-border bg-background p-0 sm:rounded-2xl">
        <div className="p-6 pr-14 sm:p-8 sm:pr-16">
          <span className="glow-badge inline-flex rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-foreground">
            Shop Online
          </span>
          <DialogTitle className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
            Buy Truck Diagnostic Tools &amp; Software at {SITE.storefront.name}
          </DialogTitle>
          <DialogDescription className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Browse professional diagnostic tools, parts, and workshop equipment with AutoDome technical support behind every order.
          </DialogDescription>
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
      </DialogContent>
    </Dialog>
  );
}
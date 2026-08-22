import { useEffect, useState } from "react";
import { Phone, ShoppingCart } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function FloatingActions() {
  const [show, setShow] = useState(false);
  const [showShop, setShowShop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 700);
      setShowShop(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
        <a
          href={SITE.storefront.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Shop at ${SITE.storefront.name}`}
          className={cn(
            "flex items-center gap-2 overflow-hidden rounded-full bg-accent px-4 py-2.5 text-sm font-bold text-accent-foreground shadow-lifted transition-all duration-500 hover:-translate-y-0.5",
            showShop ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none",
          )}
        >
          <ShoppingCart className="size-4 shrink-0" aria-hidden="true" />
          <span className="whitespace-nowrap">Shop {SITE.storefront.name}</span>
        </a>
        <a
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with AutoDome on WhatsApp"
          className="grid size-13 place-items-center rounded-full bg-[#25D366] text-white shadow-brand transition-transform duration-300 hover:-translate-y-0.5"
        >
          <WhatsAppIcon className="size-6" />
        </a>
        <a
          href={`tel:${SITE.phones[1].replace(/\s/g, "")}`}
          aria-label="Call AutoDome"
          className="grid size-13 place-items-center rounded-full border border-border bg-card text-primary shadow-soft transition-transform duration-300 hover:-translate-y-0.5"
        >
          <Phone className="size-5" aria-hidden="true" />
        </a>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-card/95 p-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur-md transition-transform duration-500 lg:hidden",
          show ? "translate-y-0" : "translate-y-full",
        )}
      >
        <Button asChild variant="hero" size="lg" className="w-full pr-20">
          <a href="#contact">Request Consultation</a>
        </Button>
      </div>
    </>
  );
}

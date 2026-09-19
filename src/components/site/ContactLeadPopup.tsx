import { useEffect, useRef, useState } from "react";
import { ContactForm } from "./Contact";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";

export function ContactLeadPopup() {
  const [open, setOpen] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting && !shown.current) {
          shown.current = true;
          setOpen(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-h-[92vh] w-[calc(100%-2rem)] max-w-3xl overflow-hidden border-border bg-background p-0 sm:rounded-2xl">
        <div className="border-b border-border px-6 py-5 pr-14 sm:px-8 sm:py-6">
          <DialogTitle className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Let’s discuss your vehicle requirements
          </DialogTitle>
          <DialogDescription className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Share your details and our technical team will help with the right service or solution.
          </DialogDescription>
        </div>
        <div className="p-6 sm:p-8">
          <ContactForm compact />
        </div>
      </DialogContent>
    </Dialog>
  );
}
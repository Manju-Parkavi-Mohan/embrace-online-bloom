import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";

const TITLE = "Contact AutoDome | Truck Diagnostics & ECU Services Sharjah, UAE";
const DESCRIPTION =
  "Contact AutoDome in Al Sajaa Industrial, Sharjah for heavy truck diagnostics, ECU repair, remapping and workshop support. Call +971 52 191 4444 or send an enquiry.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://autodome.ae/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://autodome.ae/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-14 sm:pt-16">
        <Contact animated={false} />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";

const TITLE = "Contact AutoDome | Truck Diagnostics & ECU Services Sharjah, UAE";
const DESCRIPTION =
  "Contact AutoDome in Al Sajaa Industrial, Sharjah for heavy truck diagnostics, ECU repair, remapping and workshop support. Call +971 52 191 4444 or send an enquiry.";
const URL = "https://autodome.ae/contact";
const IMAGE = "https://autodome.ae/og-image.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "contact AutoDome, truck diagnostics Sharjah, heavy vehicle workshop UAE, ECU repair enquiry, truck diagnostics phone",
      },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: URL },
      { property: "og:image", content: IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: IMAGE },
    ],
    links: [{ rel: "canonical", href: URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: TITLE,
          description: DESCRIPTION,
          url: URL,
          isPartOf: { "@id": "https://autodome.ae/#business" },
          mainEntity: {
            "@id": "https://autodome.ae/#business",
          },
        }),
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="pt-14 sm:pt-16">
        <Contact animated={false} headingLevel="h1" />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

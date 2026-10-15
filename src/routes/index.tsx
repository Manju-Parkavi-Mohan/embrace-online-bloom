import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { AuthorizedPartners } from "@/components/site/AuthorizedPartners";

import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Credentials } from "@/components/site/Credentials";
import { Industries } from "@/components/site/Industries";
import { AdlStore } from "@/components/site/AdlStore";
import { Brands } from "@/components/site/Brands";
import { Training } from "@/components/site/Training";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { ContactLeadPopup } from "@/components/site/ContactLeadPopup";
import { SITE } from "@/lib/site";
import { PAGE_SEO } from "@/lib/seo";

const { title: TITLE, description: DESCRIPTION, keywords: KEYWORDS } = PAGE_SEO["/"];
const CANONICAL = "https://autodome.ae";
const OG_IMAGE = "https://autodome.ae/og-image.jpg";

// Homepage schema supplied by the client (logo/image point to files that exist on the site).
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AutoRepair",
      "@id": "https://autodome.ae/#business",
      "name": "AutoDome",
      "alternateName": [
        "Auto Dome",
        "AutoDome UAE",
        "ADL Automotive"
      ],
      "url": "https://autodome.ae/",
      "logo": SITE.logoUrl,
      "image": OG_IMAGE,
      "description": "AutoDome is a technology-driven automotive solutions provider specializing in heavy vehicle diagnostics, ECU solutions, ECU repair and reprogramming, ECU remapping, diagnostic tools, tuning software, technical training and commercial vehicle support.",
      "telephone": [
        "+971565658212",
        "+971521914444"
      ],
      "email": "office@autodome.ae",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "407A, Al Sajaa Industrial Area",
        "addressLocality": "Sharjah",
        "addressRegion": "Sharjah",
        "addressCountry": "AE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.3548,
        "longitude": 55.421
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
          "opens": "08:00",
          "closes": "18:00"
        }
      ],
      "priceRange": "$$",
      "currenciesAccepted": "AED",
      "areaServed": [
        {
          "@type": "Country",
          "name": "United Arab Emirates"
        },
        {
          "@type": "Country",
          "name": "Oman"
        },
        {
          "@type": "Country",
          "name": "Saudi Arabia"
        },
        {
          "@type": "Country",
          "name": "Qatar"
        },
        {
          "@type": "Country",
          "name": "Kuwait"
        },
        {
          "@type": "Country",
          "name": "Bahrain"
        },
        {
          "@type": "Place",
          "name": "Europe"
        },
        {
          "@type": "Place",
          "name": "Africa"
        }
      ],
      "foundingDate": "2008",
      "sameAs": [
        "https://www.linkedin.com/company/autodome-by-adl-automotive/",
        "https://instagram.com/autodome.ae",
        "https://www.facebook.com/share/1A89DGnNJk/"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AutoDome Automotive Solutions",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Heavy Vehicle Diagnostics",
              "url": "https://autodome.ae/services/commercial-heavy-vehicle-diagnostics"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ECU Remapping and Calibration",
              "url": "https://autodome.ae/services/ecu-remapping-calibration"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ECU Repair and Reprogramming",
              "url": "https://autodome.ae/services/ecu-repair-reprogramming"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Truck Diagnostic Tools",
              "url": "https://autodome.ae/services/truck-diagnostic-tools-trading"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "ECU Tuning Software",
              "url": "https://autodome.ae/services/ecu-tuning-softwares"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Heavy Vehicle Repair and Maintenance",
              "url": "https://autodome.ae/services/truck-repair-maintenance"
            }
          }
        ]
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://autodome.ae/#website",
      "url": "https://autodome.ae/",
      "name": "AutoDome",
      "publisher": {
        "@id": "https://autodome.ae/#business"
      },
      "inLanguage": "en"
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: KEYWORDS },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(STRUCTURED_DATA),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <AuthorizedPartners />
        <Brands />

        <About />
        <Services />
        <Testimonials />
        <Credentials />
        <Industries />
        <AdlStore />
        <Training />
        <Faq />
        <FinalCta />
        <Contact />
      </main>

      <SiteFooter />
      <FloatingActions />
      <ContactLeadPopup />
    </div>
  );
}

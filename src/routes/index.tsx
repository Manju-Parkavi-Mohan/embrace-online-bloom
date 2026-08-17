import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Credentials } from "@/components/site/Credentials";
import { Industries } from "@/components/site/Industries";
import { AdlStore } from "@/components/site/AdlStore";
import { Brands } from "@/components/site/Brands";
import { Stats } from "@/components/site/Stats";
import { Gallery } from "@/components/site/Gallery";
import { Training } from "@/components/site/Training";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingActions } from "@/components/site/FloatingActions";
import { SITE } from "@/lib/site";

const TITLE = "AutoDome | Dubai Truck Diagnostics & Heavy Vehicle Repair UAE";
const DESCRIPTION =
  "AutoDome is a leading truck diagnostics and heavy vehicle repair specialist serving Dubai, Sharjah and Abu Dhabi — ECU repair, genuine parts, technical training and workshop equipment.";
const CANONICAL = "https://autodome.ae";
const OG_IMAGE = "https://autodome.ae/assets/autodome-dubai-truck-diagnostics.jpg";
const KEYWORDS =
  "truck repair Dubai, heavy truck repair, truck diagnostics Dubai, commercial vehicle diagnostics UAE, AutoDome, fleet maintenance Dubai, truck ECU programming Dubai, DPF regeneration Dubai, Volvo truck repair Dubai, Mercedes truck repair Dubai, Scania truck repair Dubai, MAN truck repair Dubai, truck parts Dubai, AutoDome Sharjah, تشخيص الشاحنات دبي, إصلاح المركبات التجارية الإمارات";

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": ["AutoRepair", "LocalBusiness", "AutomotiveBusiness"],
  name: "AutoDome UAE",
  alternateName: ["AutoDome", "Auto Dome", "AutoDome Dubai", "AutoDome Sharjah"],
  description: DESCRIPTION,
  url: CANONICAL,
  image: OG_IMAGE,
  email: SITE.email,
  telephone: SITE.phones,
  priceRange: "$$",
  paymentAccepted: ["Cash", "Credit Card", "Bank Transfer"],
  currenciesAccepted: "AED",
  foundingDate: "2008",
  slogan: SITE.tagline,
  sameAs: [`https://wa.me/${SITE.whatsapp}`, SITE.storefront.url],
  subOrganization: { "@type": "Organization", name: SITE.storefront.name, url: SITE.storefront.url },
  address: {
    "@type": "PostalAddress",
    streetAddress: "407A, Al Sajaa Industrial",
    addressLocality: "Sharjah",
    addressRegion: "Sharjah",
    addressCountry: "AE",
  },
  geo: { "@type": "GeoCoordinates", latitude: "25.3548", longitude: "55.4210" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  areaServed: ["Dubai", "Sharjah", "Abu Dhabi", "Northern Emirates", "United Arab Emirates"],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Commercial vehicle solutions",
    itemListElement: [
      "Diagnosis, Troubleshooting & Repair",
      "Dealer-Level Diagnostic Tools & Support",
      "ECU Remapping Tools & File Tuning",
      "ECU Repair & Reprogramming",
      "Advanced Training Programs",
      "Heavy Duty Vehicle Parts Supply",
      "Workshop Tools & Equipment Trading",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
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
        <TrustBar />
        <Brands />
        <About />
        <Services />
        <Testimonials />
        <Credentials />
        <Industries />
        <AdlStore />
        <Stats />
        <Gallery />
        <Training />
        <Faq />
        <FinalCta />
        <Contact />
      </main>

      <SiteFooter />
      <FloatingActions />
    </div>
  );
}

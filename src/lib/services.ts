import diagnosticsImg from "@/assets/svc-1-diagnostics.jpg";
import truckRepairImg from "@/assets/svc-2-truck-repair.jpg";
import remappingImg from "@/assets/svc-3-remapping.jpg";
import ecuImg from "@/assets/svc-4-ecu-repair.jpg";
import tuningSoftwareImg from "@/assets/svc-5-tuning-software.jpg";
import toolsTradingImg from "@/assets/svc-6-tools-trading.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  image: string;
  alt: string;
  intro: string;
  highlights: { title: string; body: string }[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "commercial-heavy-vehicle-diagnostics",
    title: "Commercial Heavy Vehicle Diagnostics",
    short: "Commercial Heavy Vehicle Diagnostics",
    body: "We investigate warning lights, diagnostic trouble codes, communication faults, electronic problems, and performance-related issues.",
    image: diagnosticsImg,
    alt: "Technician diagnosing a heavy-duty commercial vehicle engine",
    intro:
      "Fast, accurate fault-finding for trucks, buses, trailers and construction equipment — backed by dealer-level tooling and engineers who repair what they diagnose.",
    highlights: [
      {
        title: "Full-vehicle coverage",
        body: "Engines, transmissions, aftertreatment, electrical, pneumatic and hydraulic systems on all major commercial brands.",
      },
      {
        title: "Evidence-based diagnosis",
        body: "Live data, actuator tests and component-level measurement instead of parts-swapping guesswork.",
      },
      {
        title: "Downtime first",
        body: "Clear findings, a repair plan and realistic timelines so your operations team can plan around the vehicle.",
      },
    ],
    deliverables: [
      "Fault-code reading and interpretation with live data logging",
      "Component-level electrical and sensor testing",
      "Engine, gearbox and driveline troubleshooting",
      "Repair execution with genuine or OE-quality parts",
      "Post-repair verification and road testing",
    ],
  },
  {
    slug: "truck-repair-maintenance",
    title: "Truck Repair & Maintenance",
    short: "Truck Repair & Maintenance",
    body: "Our diagnostic specialists can identify electronic and control-system problems affecting engines, automated manual transmissions, automatic transmissions, and related vehicle systems.",
    image: truckRepairImg,
    alt: "Dealer-level diagnostic equipment connected to a commercial truck",
    intro:
      "Genuine dealer diagnostic platforms supplied, licensed, configured and supported — so independent workshops work at manufacturer level.",
    highlights: [
      {
        title: "Genuine platforms",
        body: "Authorised multi-brand and OEM diagnostic solutions, including Jaltest, with valid licensing and updates.",
      },
      {
        title: "Setup & configuration",
        body: "Installation, interface pairing and workshop network setup handled by our engineers.",
      },
      {
        title: "Ongoing support",
        body: "Remote and on-site assistance when a job needs a second technical opinion.",
      },
    ],
    deliverables: [
      "Tool selection advice matched to your vehicle mix",
      "Supply, licensing and activation",
      "On-site installation and technician onboarding",
      "Software updates and renewals",
      "Technical helpdesk support",
    ],
  },
  {
    slug: "ecu-remapping-calibration",
    title: "ECU Remapping & Calibration",
    short: "ECU Remapping & Calibration",
    body: "Precision remapping tools and expert file tuning that improve power, fuel efficiency and drivability — calibrated per vehicle while keeping reliability and safety margins intact.",
    image: remappingImg,
    alt: "Commercial truck fleet optimised for efficiency and performance",
    intro:
      "Professional remapping hardware and calibrated file work for measurable gains in power, drivability and fuel efficiency — without compromising engine reliability.",
    highlights: [
      {
        title: "Authorised hardware",
        body: "Magic Motorsport tooling for reading and writing ECUs safely across commercial platforms.",
      },
      {
        title: "Tailored calibration",
        body: "Files developed per vehicle, duty cycle and load profile rather than generic off-the-shelf maps.",
      },
      {
        title: "Safety margins kept",
        body: "Changes stay within component tolerances so durability and emissions hardware are respected.",
      },
    ],
    deliverables: [
      "ECU reading and secure original file backup",
      "Custom file tuning for economy or performance",
      "Bench and OBD writing support",
      "Tool supply, licensing and training",
      "Post-tune verification and data logging",
    ],
  },
  {
    slug: "ecu-repair-reprogramming",
    title: "ECU Repair & Reprogramming",
    short: "ECU Repair & Reprogramming",
    body: "Our highly skilled technicians specialize in ECU repairs and reprogramming for all types of engines and gearboxes. We ensure accurate diagnostics, reliable solutions.",
    image: ecuImg,
    alt: "Engineer repairing a vehicle electronic control unit circuit board",
    intro:
      "Component-level electronics repair and reprogramming for engine, gearbox and body control units — a fraction of the cost and lead time of replacement.",
    highlights: [
      {
        title: "Board-level repair",
        body: "Driver stages, power supplies, communication lines and connector damage repaired in-house.",
      },
      {
        title: "Cloning & coding",
        body: "Unit cloning, immobiliser alignment and parameter coding for a plug-and-drive result.",
      },
      {
        title: "All major brands",
        body: "Engine and gearbox ECUs for European, Japanese and American commercial platforms.",
      },
    ],
    deliverables: [
      "Bench testing and fault confirmation",
      "Component-level electronic repair",
      "Reprogramming, cloning and adaptation",
      "Water- and heat-damage recovery where possible",
      "Fitment support and post-repair validation",
    ],
  },
  {
    slug: "ecu-tuning-softwares",
    title: "ECU Tuning Softwares",
    short: "ECU Tuning Softwares",
    body: "Get Tuning softwares for all trucks, we also provide support for Chinese trucks with customized softwres",
    image: tuningSoftwareImg,
    alt: "Warehouse shelving stocked with genuine heavy-duty vehicle parts",
    intro:
      "Genuine and OE-quality parts for commercial vehicles and construction equipment, plus a sourcing team for the hard-to-find items.",
    highlights: [
      {
        title: "Deep electronics stock",
        body: "ECUs, sensors, actuators and electronic components held for fast turnaround.",
      },
      {
        title: "Special sourcing",
        body: "Obsolete and hard-to-find parts located through our supplier network.",
      },
      {
        title: "Order online",
        body: "Everyday items available through our ADL Automotive e-commerce storefront.",
      },
    ],
    deliverables: [
      "Electronic control units and modules",
      "Sensors, actuators and wiring components",
      "Mechanical and driveline parts",
      "Construction equipment spares",
      "UAE delivery and export shipping",
    ],
  },
  {
    slug: "truck-diagnostic-tools-trading",
    title: "Professional Truck Diagnostic Tools trading",
    short: "Professional Truck Diagnostic Tools trading",
    body: "Choose suitable diagnostic equipment for heavy-duty vehicles and commercial vehicle applications. Our team can help identify the right solution for your workshop.",
    image: toolsTradingImg,
    alt: "Professional workshop tools and equipment supplied by AutoDome",
    intro:
      "Equip or upgrade a complete commercial vehicle workshop — from hand tools to specialised machinery — with advice from engineers who use them.",
    highlights: [
      {
        title: "Complete fit-outs",
        body: "Plan and supply an entire workshop, or add a single specialised station.",
      },
      {
        title: "Quality and value",
        body: "Durable, professional-grade brands selected for heavy daily use.",
      },
      {
        title: "After-sales backing",
        body: "Commissioning, operator guidance and spares support after delivery.",
      },
    ],
    deliverables: [
      "Hand and power tools",
      "Diagnostic and measurement equipment",
      "Lifting, pressing and specialised machinery",
      "Workshop layout and equipment consulting",
      "Delivery, installation and commissioning",
    ],
  },
];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

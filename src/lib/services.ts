import truckRepairImg from "@/assets/svc-2-truck-repair.jpg";
import tuningSoftwareImg from "@/assets/svc-5-tuning-software.jpg";
import toolsTradingImg from "@/assets/svc-6-tools-trading.jpg";
import diagnosticsBannerImg from "@/assets/service-diagnostics.jpg";
import remappingBannerImg from "@/assets/service-ecu-remapping.jpg";
import ecuRepairBannerImg from "@/assets/service-ecu-repair.jpg";

export type Service = {
  slug: string;
  title: string;
  short: string;
  body: string;
  image: string;
  alt: string;
  intro: string;
  overview?: string[];
  externalUrl?: string;
  sections?: {
    heading: string;
    level?: 2 | 3;
    paragraphs: string[];
  }[];
  highlights: { title: string; body: string }[];
  deliverables: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "commercial-heavy-vehicle-diagnostics",
    title: "Diagnosis, Troubleshooting & Repair",
    short: "Diagnosis, Troubleshooting & Repair",
    body: "Professional truck diagnostics and troubleshooting for complex electrical, electronic, engine, transmission, and communication faults.",
    image: diagnosticsBannerImg,
    alt: "Technician diagnosing a heavy-duty commercial vehicle engine",
    intro: "AutoDome provides professional truck diagnostics and troubleshooting services in the UAE, helping workshops, fleet operators, and heavy vehicle professionals identify complex electrical, electronic, engine, transmission, and communication faults.",
    overview: [
      "AutoDome provides professional truck diagnostics and troubleshooting services in the UAE, helping workshops, fleet operators, and heavy vehicle professionals identify complex electrical, electronic, engine, transmission, and communication faults. Our diagnostic technology allows us to define the nature of the problem, offer efficient technical solutions, and minimize vehicle downtime. We help transport and logistics companies maintain their fleets in the UAE.",
    ],
    sections: [
      {
        heading: "Advanced Truck Diagnostic Services",
        paragraphs: [
          "Our heavy duty truck diagnostics service covers fault code reading and analysis, live data monitoring, system diagnostics, ECU communication, actuator testing, and advanced fault finding. We do not simply provide oil services and basic repair work but support truck and heavy-vehicle systems to identify issues that may not be detected through basic diagnostic scanning.",
          "By dealing with warning lights, electronic faults, performance issues, and sensor problems, our diagnostic activities are based on proper fault detection and the method of diagnosis.",
        ],
      },
      {
        heading: "Heavy Vehicle Troubleshooting & Technical Support",
        paragraphs: [
          "AutoDome supports trucks, heavy vehicles, commercial vehicles, and heavy-duty equipment with specialist diagnostic experts and advanced diagnostic tools in the market. Our diagnostics service covers trucks of any brand, especially those produced in China with the Engine Dance system, as well as trucks from other countries, using the latest diagnostic equipment. Our team can assist workshops, fleet operators, logistics and transportation companies with difficult diagnostic cases, electronic troubleshooting, and ECU-related faults.",
        ],
      },
      {
        heading: "Why AutoDome for Truck Diagnosis?",
        paragraphs: [
          "Accurate analysis of fault codes and live vehicle parameters is essential for identifying problems in modern trucks and heavy vehicles. AutoDome uses advanced diagnostic equipment to read and interpret diagnostic trouble codes (DTCs), monitor live parameters, and analyze data from different vehicle control systems.",
          "By combining fault-code analysis with real-time parameter monitoring, our technicians can better understand the root cause of an issue rather than relying only on error codes. This helps improve diagnostic accuracy, reduce unnecessary component replacement, and minimise vehicle downtime. With professional diagnostic tools and technical knowledge, we help automotive professionals diagnose problems more efficiently and make informed repair decisions, making us the best truck diagnostic experts in Dubai.",
        ],
      },
    ],
    highlights: [
      {
        title: "Advanced fault finding",
        body: "Fault-code analysis, live parameters, actuator testing, system diagnostics, and ECU communication.",
      },
      {
        title: "Multi-brand coverage",
        body: "Specialist support for trucks of every brand, including Chinese vehicles using the Engine Dance system.",
      },
      {
        title: "Root-cause analysis",
        body: "Real-time data and technical knowledge reduce unnecessary component replacement and vehicle downtime.",
      },
    ],
    deliverables: [
      "Fault-code reading and interpretation with live data logging",
      "Component-level electrical and sensor testing",
      "Engine, gearbox and driveline troubleshooting",
      "ECU communication and actuator testing",
      "Electronic, sensor and performance troubleshooting",
    ],
  },
  {
    slug: "ecu-remapping-calibration",
    title: "ECU Remapping & File Tuning",
    short: "ECU Remapping & File Tuning",
    body: "Expert ECU remapping and tuning for trucks and commercial heavy vehicles, tailored to each application, vehicle, and engine.",
    image: remappingBannerImg,
    alt: "Engineer running ECU remapping and calibration software on a workstation",
    intro: "AutoDome delivers expert ECU remapping and ECU tuning services for all trucks and commercial heavy vehicles in the UAE, adjusting engine control parameters for the intended application, vehicle, and engine.",
    overview: [
      "AutoDome delivers expert ECU remapping and ECU tuning services for all trucks and commercial heavy vehicles in the UAE. ECU remapping involves adjusting certain engine control parameters in order to maximize vehicle performance and drivability based on the intended application, vehicle, and engine.",
      "For commercial and heavy vehicles, ECU calibration adopts a technical perspective that blends engine performance, vehicle load, reliability, and operating conditions. As a result, every ECU solution is specifically crafted to cater to particular vehicles and applications, utilizing proper programming and calibration techniques.",
    ],
    sections: [
      {
        heading: "Professional Truck ECU Remapping",
        paragraphs: [
          "Truck ECU remapping is important for fine-tuning engine parameters such as torque delivery, throttle response, fuel management, and many more functionalities by changing certain calibration factors. It is important to run diagnostics before remapping so you will be able to find and deal with any available mechanical or electronic issues that can affect the outcome of remapping.",
          "We focus on application-specific ECU solutions rather than generic software modifications, helping ensure that the calibration is appropriate for the vehicle and its operating requirements.",
        ],
      },
      {
        heading: "Enhance Your Truck’s Performance",
        paragraphs: [
          "Improving truck performance begins with precise diagnostics and proper ECU calibration. Recognizing problems before carrying out tuning can improve truck performance, fuel consumption, and reduce downtime.",
          "Trucks and commercial vehicles travel on differing loads, roads, terrains, and environments, making it essential to ensure that the ECU calibration remains within appropriate limits for optimal performance.",
        ],
      },
      {
        heading: "Why AutoDome for ECU Tuning?",
        paragraphs: [
          "AutoDome offers ECU tuning and remapping assistance for trucks, heavy vehicles, commercial vehicles, and applications involving heavy-duty vehicles. With the advanced technology of professional ECU programming, we can ensure that our calibration services are performed accurately and precisely.",
          "We can assist you in finding the right remapping solution for your vehicle, such as performance improvement, driving quality, or an application-specific ECU. We also help workshops and fleet management operators to get the best possible performance and efficiency from their heavy vehicles.",
        ],
      },
    ],
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
    body: "Professional ECU programming and reprogramming solutions for trucks and heavy vehicles using advanced diagnostic tools and software.",
    image: ecuRepairBannerImg,
    alt: "Engineer repairing a vehicle electronic control unit circuit board",
    intro: "An ECU (Electronic Control Unit) is an electronic device that oversees and controls the essential aspects of a vehicle. In trucks and heavy automobiles, it gathers sensor data and controls the engine, fuel pump, exhaust, transmission, and other electronic functions.",
    overview: [
      "An ECU (Electronic Control Unit) is an electronic device that oversees and controls the essential aspects of a vehicle. In the case of trucks and heavy automobiles, the ECU gathers data from various sensors and controls systems for functions such as engine operation, fuel pump, exhaust, transmission, and other electronic functions.",
    ],
    sections: [
      {
        heading: "Reasons to Reprogram an ECU in a Truck",
        paragraphs: [
          "An ECU reprogramming may be necessary when a control unit is replaced, a software update is needed, a configuration is modified, or specific vehicle parameters need calibration. Professional ECU reprogramming ensures that the ECU communicates properly with the vehicle's systems and functions according to the necessary requirements.",
        ],
      },
      {
        heading: "ECU Reprogramming at AutoDome",
        level: 3,
        paragraphs: [
          "At AutoDome, we provide professional ECU programming and reprogramming solutions for trucks and heavy vehicles. Using advanced diagnostic tools and software, our specialists can support ECU coding, programming, calibration, and related electronic solutions for supported and specific vehicle applications.",
          "We focus on accurate diagnosis and the correct programming procedure to help workshops and heavy-vehicle professionals resolve ECU-related issues efficiently.",
        ],
      },
    ],
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
    title: "Advanced Training Programs",
    short: "Advanced Training Programs",
    body: "Get Tuning softwares for all trucks, we also provide support for Chinese trucks with customized softwres",
    image: tuningSoftwareImg,
    alt: "Truck ECU tuning software running on a laptop with interface hardware",
    intro:
      "Genuine and OE-quality parts for commercial vehicles and construction equipment, plus a sourcing team for the hard-to-find items.",
    externalUrl: "https://adl.apaarr.com/products?category=%2222%22",
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
    title: "Workshop Tools & Equipment",
    short: "Workshop Tools & Equipment",
    body: "Choose suitable diagnostic equipment for heavy-duty vehicles and commercial vehicle applications. Our team can help identify the right solution for your workshop.",
    image: toolsTradingImg,
    alt: "Professional heavy-duty truck diagnostic tools and interfaces for sale",
    intro:
      "Equip or upgrade a complete commercial vehicle workshop — from hand tools to specialised machinery — with advice from engineers who use them.",
    externalUrl: "https://adl.apaarr.com/products?category=%2217%22",
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
  {
    slug: "truck-repair-maintenance",
    title: "Truck Diagnostics & Advanced Repair Support for Fleets in the UAE",
    short: "Fleet Diagnostics & Repair Support",
    body: "Advanced truck diagnostics and electronic repair support for fleet operators and heavy-vehicle businesses across the UAE.",
    image: truckRepairImg,
    alt: "Technicians repairing a commercial truck engine in a workshop bay",
    intro: "AutoDome provides advanced truck diagnostics and electronic repair support for fleet operators and heavy-vehicle businesses across the UAE, with a focus on complex control-system problems affecting reliability and uptime.",
    overview: [
      "AutoDome provides advanced truck diagnostics and electronic repair support for fleet operators and heavy-vehicle businesses across the UAE. Our focus is on diagnosing complex electronic and control-system problems that can affect truck performance, reliability, and uptime.",
      "Our diagnostic specialists work with engine control systems, automated manual transmissions (AMT), automatic transmissions, ECUs, sensors, communication systems, and other electronic vehicle systems. Using professional diagnostic equipment and ECU programming technology, we help identify the actual cause of faults and provide the appropriate technical solution.",
    ],
    sections: [
      {
        heading: "Advanced Diagnostics for Truck Fleets",
        paragraphs: [
          "For companies operating large truck fleets, an unexpected electronic fault can quickly lead to vehicle downtime and operational delays. Accurate diagnostics can help fleet teams identify problems earlier, reduce unnecessary parts replacement, and make informed decisions about repairs and maintenance.",
          "AutoDome uses advanced diagnostic tools to read and analyse fault codes, live vehicle parameters, ECU data, system communications, and control-module information. This allows our specialists to investigate complex faults that may not be identified through conventional workshop diagnostics.",
        ],
      },
      {
        heading: "ECU Programming & Electronic Troubleshooting",
        paragraphs: [
          "Modern trucks depend heavily on electronic control units and software to manage engine, transmission, emissions, and other vehicle functions. When an ECU requires programming, reprogramming, coding, calibration, or specialised troubleshooting, the correct diagnostic equipment and technical expertise are essential.",
          "Our services are particularly valuable for fleet operators and workshops dealing with difficult electronic faults, ECU-related issues, communication errors, performance problems, and control-system failures.",
        ],
      },
      {
        heading: "Reduce Truck Downtime with Specialist Support",
        paragraphs: [
          "Our goal is to help fleet operators keep their vehicles diagnosed accurately, operating efficiently, and on the road for longer. By identifying the root cause of electronic and ECU-related problems, we help reduce unnecessary downtime and avoid replacing components without proper diagnosis.",
          "AutoDome is a specialist partner for truck fleets, commercial vehicle operators, and heavy-vehicle workshops in the UAE looking for advanced diagnostic and ECU solutions beyond conventional workshop services.",
        ],
      },
    ],
    highlights: [
      {
        title: "Fleet-focused diagnostics",
        body: "Advanced investigation of electronic and control-system faults that affect fleet reliability and uptime.",
      },
      {
        title: "Electronic expertise",
        body: "Support for engines, transmissions, ECUs, sensors, communications, emissions, and control modules.",
      },
      {
        title: "Reduced downtime",
        body: "Root-cause diagnosis helps avoid unnecessary parts replacement and operational delays.",
      },
    ],
    deliverables: [
      "Fault-code and live-parameter analysis",
      "ECU data and control-module diagnostics",
      "AMT and automatic transmission troubleshooting",
      "ECU programming, coding and calibration support",
      "Specialist fleet and workshop technical support",
    ],
  },

];

export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);

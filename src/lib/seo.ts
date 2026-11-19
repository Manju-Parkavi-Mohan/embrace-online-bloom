type PageSeo = { title: string; description: string; keywords: string };

export const PAGE_SEO: Record<string, PageSeo> & { "/": PageSeo } = {
  "/": {
    title: "Heavy Duty Truck Diagnostics & ECU Solutions UAE | AutoDome",
    description: "AutoDome is a leading truck diagnostics and heavy vehicle repair specialist serving Dubai, Sharjah and Abu Dhabi — ECU repair, genuine parts, technical training and workshop equipment.",
    keywords: "heavy duty truck diagnostics UAE, truck diagnostics Dubai, heavy vehicle repair Sharjah, ECU solutions UAE, genuine truck parts, technical training, workshop equipment, AutoDome",
  },
  "commercial-heavy-vehicle-diagnostics": {
    title: "Heavy Construction Equipment & Truck Electrical Repairs UAE | AutoDome",
    description: "Find electrical faults, repair PCB boards, sensor calibration, and electronic diagnostics for construction equipment and commercial trucks in the UAE.",
    keywords: "auto electrical diagnostics Dubai, heavy equipment electrical repairs UAE, truck electrical diagnostics, construction equipment diagnostics, PCB repair UAE, CAN bus diagnostics",
  },
  "truck-diagnostic-tools-trading": {
    title: "Automotive Diagnostic Tools Supplier in UAE | AutoDome",
    description: "AutoDome supplies professional truck diagnostic tools, ECU programming equipment and automotive software in the UAE. Contact us for product and compatibility support.",
    keywords: "auto diagnostic tools supplier UAE, automotive diagnostic tools UAE, heavy-duty vehicle scanners, ECU programming equipment, garage equipment UAE",
  },
  "ecu-remapping-calibration": {
    title: "Command Unit Repair Dubai | Control Truck's Engine – AutoDome",
    description: "Looking for command unit repairing in Dubai? AutoDome provides truck engine command unit diagnostics, electronic fault troubleshooting, repair and programming for supported heavy-duty vehicles in UAE.",
    keywords: "Command unit repairing Dubai, Engine command unit repair Dubai, Command unit repair UAE, Truck command unit repair UAE, Diesel engine command unit repair, Command unit diagnostics Dubai, Engine command unit programming, Truck electronic control unit repair",
  },
  "ecu-repair-reprogramming": {
    title: "ECU Repair Dubai | Engine Control Unit Repair UAE – AutoDome",
    description: "Looking for ECU repair in Dubai? AutoDome provides engine control module repair, truck ECM diagnostics, ECU programming, cloning and reprogramming for supported heavy-duty vehicles in UAE.",
    keywords: "ECU repair Dubai, Engine control module repair UAE, Truck ECM repair Dubai, Diesel ECM repair UAE, ECM diagnostics Dubai, ECM board-level repair, ECU programming UAE, Heavy-duty truck ECM repair",
  },
  "ecu-tuning-softwares": {
    title: "ECU File Tuning Software| Calibration Solutions | AutoDome",
    description: "Explore professional ECU tuning and calibration software for commercial and heavy vehicles. AutoDome provides ECU programming tools, software and technical support in the UAE.",
    keywords: "ECU file tuning software, ECU calibration software UAE, commercial vehicle tuning software, heavy vehicle ECU programming tools, technical support",
  },
  "truck-repair-maintenance": {
    title: "Heavy Truck Workshop, Truck Garage & Service Center | Truck Maintenance UAE",
    description: "Specialized truck maintenance in the UAE focused on advanced electronic diagnostics, control module repair, and preventative fleet health. Minimize downtime at our heavy truck workshop & truck garage.",
    keywords: "heavy truck workshop UAE, truck garage UAE, truck maintenance UAE, fleet maintenance Dubai, electronic diagnostics Sharjah",
  },
};
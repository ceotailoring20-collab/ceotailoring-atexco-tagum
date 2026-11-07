export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  image: string;
  badge?: string;
}

export interface PricingPlan {
  id: string;
  category: string;
  price: number;
  unit: string;
  serviceType: string;
  description: string;
  features: string[];
  isFeatured?: boolean;
  ctaText: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'Jerseys' | 'Printing' | 'Heat Press' | 'Tailoring' | 'Machinery';
  description: string;
  spec: string;
  image: string;
}

export const BUSINESS_INFO = {
  name: "CEO Tailoring | Atexco Tagum",
  shortName: "CEO Tailoring",
  subName: "Atexco Tagum",
  tagline: "Sublimation Printing · Industrial Heat Press · Custom Tailoring",
  heroMotto: "YOUR DESIGN. OUR PRINTING. YOUR VISION.",
  description: "From sublimation printing to heat pressing and customized garments, CEO Tailoring | Atexco Tagum provides premier industrial printing solutions for tailoring businesses, garment makers, sports teams, organizations, and individual clients in Davao del Norte.",
  hours: "Open Daily: 9:00 AM – 9:00 PM",
  email: "ceotailoring20@gmail.com",
  phones: [
    { number: "09514556757", formatted: "0951 455 6757", label: "Smart / TNT (Primary)" },
    { number: "09516216321", formatted: "0951 621 6321", label: "Smart / TNT (Secondary)" }
  ],
  locations: [
    {
      id: "tagum",
      name: "Tagum Main Production Facility",
      city: "Tagum City",
      address: "New Visayan, Tagum City, Davao del Norte, 8100",
      mapQuery: "New Visayan, Tagum City, Davao del Norte",
      landmark: "Strategic hub in Tagum City accessible for drop-offs & pick-ups",
      type: "Main Print Hub & Tailoring Workshop"
    },
    {
      id: "panabo",
      name: "Panabo Service Hub",
      city: "Panabo City",
      address: "Rachoville, New Visayas, Panabo City, Davao del Norte, 8105",
      mapQuery: "Rachoville, New Visayas, Panabo City, Davao del Norte",
      landmark: "Conveniently situated in Rachoville for Panabo & Davao clients",
      type: "Branch Facility & Client Reception"
    }
  ]
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "roll-print",
    category: "Sublimation Roll",
    price: 65,
    unit: "per meter",
    serviceType: "Printing Only",
    description: "High-precision dye-sublimation print rolls prepared on continuous industrial paper.",
    features: [
      "PRINTING ONLY (Roll-to-Roll)",
      "72-inch maximum continuous paper width",
      "High-density industrial sublimation ink",
      "Vivid color rendering & deep saturation",
      "Ready for external flatbed or rotary heat pressing",
      "Ideal for tailoring shops with own press machinery"
    ],
    isFeatured: false,
    ctaText: "Order Roll Printing"
  },
  {
    id: "full-supply-press",
    category: "Full Package (Our Fabric)",
    price: 160,
    unit: "per piece / order",
    serviceType: "Printing + Heat Press (Our Fabric)",
    description: "End-to-end printing and heat pressing using CEO Tailoring's tested, high-grade polyester fabric.",
    features: [
      "PRINTING + HEAT PRESS COMPLETE",
      "Using OUR premium sublimation fabric",
      "Quality-inspected pressed panels",
      "Ultra-vibrant, wash-resistant transfers",
      "Exact alignment and minimal shrinkage distortion",
      "Ready for final sewing and assembly"
    ],
    isFeatured: true,
    ctaText: "Order With Fabric"
  },
  {
    id: "customer-fabric-press",
    category: "Customer Fabric",
    price: 90,
    unit: "per piece",
    serviceType: "Printing + Heat Press (Customer Fabric)",
    description: "Economical subcontract printing and heat pressing for shops supplying their own compatible textiles.",
    features: [
      "PRINTING + HEAT PRESS SERVICE",
      "Using CUSTOMER'S OWN supplied fabric",
      "Subject to fabric sublimation compatibility",
      "High-output pneumatic flatbed transfer",
      "Ideal for garment makers & tailoring subcontractors",
      "Quick turnaround for bulk batches"
    ],
    isFeatured: false,
    ctaText: "Supply Your Fabric"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "sublimation-printing",
    number: "01",
    title: "Sublimation Printing",
    category: "Industrial Printing",
    description: "Professional large-format sublimation printing for custom designs, sportswear, basketball & volleyball jerseys, corporate uniforms, and compatible polyester blends.",
    highlights: ["Up to 72-inch paper width", "Eco-friendly industrial inks", "High-DPI razor-sharp line definition"],
    image: "/src/assets/images/service_sublimation_roll_1794019749503.jpg",
    badge: "High-Speed Capacity"
  },
  {
    id: "printing-heat-press",
    number: "02",
    title: "Printing + Heat Press",
    category: "Transfer Services",
    description: "Complete printing and precision heat pressing under controlled temperature and pneumatic pressure. Customers may supply their own fabric or use our premium in-house textiles.",
    highlights: ["Both Our Fabric (₱160/pc) & Customer Fabric (₱90/pc)", "Pneumatic even-heat flatbeds", "Zero ghosting or bleeding"],
    image: "/src/assets/images/service_heat_press_industrial_1794019749456.jpg",
    badge: "Most Popular"
  },
  {
    id: "custom-jerseys",
    number: "03",
    title: "Custom Jerseys & Sportswear",
    category: "Apparel Manufacturing",
    description: "Full custom jersey printing and garment solutions for athletic leagues, varsity teams, civic organizations, companies, motorcycle clubs, and esports squads.",
    highlights: ["Full-sublimation tops & shorts", "Dri-fit breathable textiles", "Custom names, numbers & sponsor logos"],
    image: "/src/assets/images/portfolio_custom_jerseys_1794019750221.jpg",
    badge: "Team Orders"
  },
  {
    id: "tailoring-garment",
    number: "04",
    title: "Tailoring & Garment Construction",
    category: "Sewing & Finishing",
    description: "Full garment sewing and tailoring services for customized clothing, organizational polo shirts, athletic uniforms, and specialized apparel cuts.",
    highlights: ["Heavy-duty lockstitch & overlock", "V-neck, round-neck & rib-knit collars", "Consistent sizing patterns"],
    image: "/src/assets/images/about_garment_workshop_1794019748896.jpg"
  },
  {
    id: "b2b-subcontracting",
    number: "05",
    title: "Business-to-Business Printing",
    category: "Wholesale & Subcontracting",
    description: "Subcontract printing services for tailoring shops, jersey makers, uniform suppliers, and garment businesses that outsource their printing production to save on equipment overhead.",
    highlights: ["Wholesale volume discounts", "Fast turnarounds for urgent runs", "Dedicated B2B production desk"],
    image: "/src/assets/images/hero_sublimation_facility_1794019748863.jpg",
    badge: "B2B Focus"
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "item-1",
    title: "Finished Sublimation Jerseys",
    category: "Jerseys",
    description: "Vibrant, fade-resistant customized team jerseys engineered for durability and maximum athletic mobility.",
    spec: "Full Sublimation · Dri-Fit Interlock · Tagum Workshop",
    image: "/src/assets/images/portfolio_custom_jerseys_1794019750221.jpg"
  },
  {
    id: "item-2",
    title: "High-Speed 72-Inch Sublimation Roll",
    category: "Printing",
    description: "Continuous industrial sublimation transfer paper rolls with high-density pigment ink coverage.",
    spec: "72-inch Width · ₱65/meter · Ready for Flatbed Press",
    image: "/src/assets/images/service_sublimation_roll_1794019749503.jpg"
  },
  {
    id: "item-3",
    title: "Pneumatic Flatbed Heat Press Transfer",
    category: "Heat Press",
    description: "Controlled temperature and hydraulic pressure application ensuring permanent, crisp sublimation bonding.",
    spec: "Industrial Press · Even Heat · Zero Ghosting",
    image: "/src/assets/images/service_heat_press_industrial_1794019749456.jpg"
  },
  {
    id: "item-4",
    title: "Tailoring & Sewing Assembly Line",
    category: "Tailoring",
    description: "Precision collar construction, reinforced seam stitching, and panel assembly by skilled local tailors.",
    spec: "Reinforced Overlock · Size Graduations · Quality Inspected",
    image: "/src/assets/images/about_garment_workshop_1794019748896.jpg"
  },
  {
    id: "item-5",
    title: "Wide-Format Production Facility",
    category: "Machinery",
    description: "Industrial printing facility in Tagum City equipped to manage heavy commercial backlogs.",
    spec: "Multi-Head Sublimation · High Output · Tagum City",
    image: "/src/assets/images/hero_sublimation_facility_1794019748863.jpg"
  }
];

export const B2B_BENEFITS = [
  {
    title: "Complete In-House Printing & Heat Press",
    description: "No need to juggle multiple third-party shops. We handle continuous roll printing and pneumatic heat pressing under one roof."
  },
  {
    title: "Customer-Supplied Fabric Welcomed",
    description: "Keep your fabric margins. Bring your preferred polyester textiles (subject to sublimation heat compatibility), and we will print & press at just ₱90/pc."
  },
  {
    title: "Wholesale & Volume Tier Pricing",
    description: "Specialized wholesale billing for regular tailoring partners, jersey shops, and volume orders over 50+ and 100+ units."
  },
  {
    title: "Reliable Deadlines & Capacity Cushion",
    description: "Never lose a customer due to equipment breakdowns or peak season bottlenecks in Tagum and Panabo."
  },
  {
    title: "Direct B2B Communication Line",
    description: "Dedicated account handling via phone, SMS, and direct email for priority proofs and status updates."
  }
];

export const FAQS = [
  {
    question: "What fabrics can be used for sublimation printing?",
    answer: "Sublimation requires 100% polyester or high-polyester blend fabrics (minimum 80% poly) in white or light colors. Pure cotton or dark textiles are not suitable for dye-sublimation."
  },
  {
    question: "Can I bring my own fabric for printing and pressing?",
    answer: "Yes! We welcome customer-supplied fabric at ₱90 per piece. We recommend bringing a small sample swatch first to verify heat tolerance and dye uptake."
  },
  {
    question: "What is your maximum print width?",
    answer: "Our industrial wide-format sublimation printers handle continuous roll paper up to 72 inches wide, making it perfect for full jersey layouts and large banners."
  },
  {
    question: "How do I place a B2B or wholesale order?",
    answer: "You can submit your specs through our quotation form, call our B2B desk directly at 09514556757 or 09516216321, or visit our branches in Tagum City or Panabo City."
  }
];

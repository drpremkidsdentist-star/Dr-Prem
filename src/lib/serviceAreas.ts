import { clinicContact } from "@/lib/siteAssets";

export type ServiceArea = {
  slug: string;
  name: string;
  region: "North" | "Central & East" | "South & West";
  /** Flagship = physical clinic; serving = patients travel to Attur */
  kind: "flagship" | "serving";
  title: string;
  description: string;
  h1: string;
  intro: string;
  landmarks: string[];
  keywords: string[];
  geo: { latitude: number; longitude: number };
  /** Approximate locality label for schema City */
  localityLabel: string;
  travelNote?: string;
};

/** Local SEO silos — 18 comprehensive Bangalore strategic hubs */
export const serviceAreas: ServiceArea[] = [
  // —— Flagship & North Bangalore Hubs ——
  {
    slug: "attur",
    name: "Attur",
    region: "North",
    kind: "flagship",
    title: "Dentist in Attur Yelahanka | Microscopic Clinic | Dr. Prem Kumar",
    description:
      "Flagship microscopic dental clinic in Attur Layout, Yelahanka, Bangalore. Pediatric dentistry, microscopic RCT, implants. Book at +91 81972 80019.",
    h1: "Microscopic Dentist in Attur, Yelahanka",
    intro:
      "Our flagship clinic on Attur Main Road serves families across Attur Layout and Yelahanka New Town with 30× microscopic dentistry.",
    landmarks: [
      "Attur Layout, Yelahanka New Town",
      "Attur Main Road",
      "Near Yelahanka — North Bangalore",
      "Easy access from Airport Road corridor",
    ],
    keywords: [
      "dentist in Attur",
      "dentist Attur Yelahanka",
      "microscopic dentist Attur",
      "kids dentist Attur Bangalore",
      "root canal Attur Yelahanka",
    ],
    geo: clinicContact.locations.attur.geo,
    localityLabel: "Attur, Yelahanka",
    travelNote: "Flagship clinic location",
  },
  {
    slug: "yelahanka",
    name: "Yelahanka",
    region: "North",
    kind: "serving",
    title: "Dentist in Yelahanka Bangalore | Microscopic Care | Dr. Prem Kumar",
    description:
      "Microscopic dentist serving Yelahanka New Town & Yelahanka — pediatric care, root canals, implants at our Attur Layout clinic. 4.9★ Google reviews.",
    h1: "Microscopic Dentist Serving Yelahanka",
    intro:
      "Patients across Yelahanka New Town, Yelahanka Junction, and nearby North Bangalore visit our Attur Layout clinic for precision microscopic care.",
    landmarks: [
      "Yelahanka New Town",
      "Near Yelahanka Junction",
      "Yelahanka Lake side",
      "Airport Road / North Bangalore corridor",
    ],
    keywords: [
      "dentist in Yelahanka",
      "pediatric dentist Yelahanka",
      "microscopic dentist Yelahanka",
      "root canal Yelahanka Bangalore",
      "best dentist Yelahanka New Town",
    ],
    geo: clinicContact.locations.yelahanka.geo,
    localityLabel: "Yelahanka",
    travelNote: "5–10 mins drive to Attur Layout clinic",
  },
  {
    slug: "hebbal",
    name: "Hebbal",
    region: "North",
    kind: "serving",
    title: "Dentist near Hebbal Bangalore | Microscopic Dentist | Dr. Prem Kumar",
    description:
      "Looking for a microscopic dentist near Hebbal? Visit Dr. Prem Kumar’s Attur–Yelahanka clinic for kids dentistry, RCT, and implants — short drive from Hebbal.",
    h1: "Microscopic Dentist Near Hebbal, Bangalore",
    intro:
      "Hebbal and Outer Ring Road families choose our Attur clinic for fear-free kids care and 30× microscopic root canals — convenient from Hebbal Flyover and Esteem Mall side.",
    landmarks: [
      "Hebbal Flyover / ORR access",
      "Near Esteem Mall corridor",
      "Hebbal Lake area",
      "Short drive to Attur, Yelahanka",
    ],
    keywords: [
      "dentist near Hebbal",
      "dentist Hebbal Bangalore",
      "pediatric dentist Hebbal",
      "root canal near Hebbal",
      "microscopic dentist Hebbal",
    ],
    geo: { latitude: 13.0358, longitude: 77.597 },
    localityLabel: "Hebbal",
    travelNote: "12–15 mins via Bellary Road / NH-44",
  },
  {
    slug: "sahakara-nagar",
    name: "Sahakara Nagar",
    region: "North",
    kind: "serving",
    title: "Dentist near Sahakara Nagar | Microscopic Care | Dr. Prem Kumar",
    description:
      "Premier dental care for Sahakara Nagar residents. Specialized pediatric dentistry & 30x microscopic root canals by Dr. Prem Kumar in nearby Yelahanka.",
    h1: "Microscopic Dentist Near Sahakara Nagar",
    intro:
      "Families in Sahakara Nagar trust Dr. Prem Kumar for advanced precision dentistry, minimal discomfort root canals, and child-friendly dental treatments.",
    landmarks: [
      "Sahakara Nagar Main Road",
      "Near Kodigehalli Signal",
      "Bellary Road Flyover access",
      "Direct connect to Yelahanka Attur",
    ],
    keywords: [
      "dentist Sahakara Nagar",
      "pediatric dentist Sahakara Nagar",
      "root canal Sahakara Nagar",
      "dental clinic near Sahakara Nagar",
      "best dentist Sahakara Nagar Bangalore",
    ],
    geo: { latitude: 13.0623, longitude: 77.5913 },
    localityLabel: "Sahakara Nagar",
    travelNote: "10 mins drive to Attur Layout",
  },
  {
    slug: "thanisandra",
    name: "Thanisandra & Manyata",
    region: "North",
    kind: "serving",
    title: "Dentist near Thanisandra & Manyata Tech Park | Dr. Prem Kumar",
    description:
      "Expert microscopic dental care for tech professionals and families near Manyata Tech Park & Thanisandra Road. Single-visit RCT & kids dental care.",
    h1: "Microscopic Dentist Near Thanisandra & Manyata Tech Park",
    intro:
      "Serving IT professionals and residents from Manyata Tech Park, Thanisandra Main Road, and Nagavara with world-class microscopic dental procedures.",
    landmarks: [
      "Manyata Tech Park Campus",
      "Thanisandra Main Road",
      "Nagavara Junction",
      "Bhartiya City Corridor",
    ],
    keywords: [
      "dentist near Manyata Tech Park",
      "dentist Thanisandra",
      "microscopic root canal Thanisandra",
      "dental clinic near Manyata",
      "best dentist Thanisandra Bangalore",
    ],
    geo: { latitude: 13.0547, longitude: 77.6183 },
    localityLabel: "Thanisandra",
    travelNote: "15 mins via Thanisandra / Yelahanka main road",
  },
  {
    slug: "devanahalli",
    name: "Devanahalli",
    region: "North",
    kind: "serving",
    title: "Dentist near Devanahalli & Airport Road | Dr. Prem Kumar",
    description:
      "Specialist dental care for Devanahalli and International Airport corridor families. Advanced microscopic RCT, implants, and gentle kids dentistry.",
    h1: "Microscopic Dentist Near Devanahalli & Airport Corridor",
    intro:
      "Residents from Devanahalli, KIADB IT Park, and Airport Road trust Dr. Prem Kumar’s Yelahanka clinic for ultra-precise microscopic dental treatments.",
    landmarks: [
      "Devanahalli Town",
      "Bengaluru International Airport Road",
      "KIADB Aerospace Park",
      "NH-44 Highway Corridor",
    ],
    keywords: [
      "dentist Devanahalli",
      "dentist near Airport Road Bangalore",
      "pediatric dentist Devanahalli",
      "root canal Devanahalli",
      "dental clinic near Devanahalli",
    ],
    geo: { latitude: 13.2483, longitude: 77.7126 },
    localityLabel: "Devanahalli",
    travelNote: "20 mins straight drive via NH-44 highway",
  },
  {
    slug: "rt-nagar",
    name: "RT Nagar",
    region: "North",
    kind: "serving",
    title: "Dentist near RT Nagar Bangalore | Microscopic Care | Dr. Prem Kumar",
    description:
      "Looking for a microscopic dentist near RT Nagar? Visit Dr. Prem Kumar in nearby Attur–Yelahanka for painless RCT, implants, and kids dental care.",
    h1: "Microscopic Dentist Near RT Nagar, Bangalore",
    intro:
      "RT Nagar and Ganganagar families visit our Attur clinic for high-magnification 30× microscopic root canals and fear-free pediatric dental care.",
    landmarks: [
      "RT Nagar Main Road",
      "Near Ganganagar & CBI Road",
      "Bellary Road Expressway access",
      "Short drive to Yelahanka Attur",
    ],
    keywords: [
      "dentist near RT Nagar",
      "dentist RT Nagar Bangalore",
      "root canal RT Nagar",
      "pediatric dentist RT Nagar",
      "microscopic dentist RT Nagar",
    ],
    geo: { latitude: 13.0247, longitude: 77.5948 },
    localityLabel: "RT Nagar",
    travelNote: "15 mins via Bellary Road Corridor",
  },
  {
    slug: "dodballapur",
    name: "Doddaballapur",
    region: "North",
    kind: "serving",
    title: "Dentist near Doddaballapur | Microscopic Care Bangalore | Dr. Prem Kumar",
    description:
      "Microscopic dental care for Doddaballapur (Dodballapur) families — pediatric dentistry & RCT at Dr. Prem Kumar’s Attur–Yelahanka clinic in North Bangalore.",
    h1: "Microscopic Dentist Near Doddaballapur",
    intro:
      "Patients from Doddaballapur (Dodballapur) and the NH-44 / North Bangalore belt travel to our Attur Layout clinic for specialist microscopic dentistry.",
    landmarks: [
      "Doddaballapur / Dodballapur town",
      "NH-44 North Bangalore corridor",
      "Convenient drive to Attur, Yelahanka",
      "Serving North Bangalore families",
    ],
    keywords: [
      "dentist near Doddaballapur",
      "dentist Dodballapur",
      "pediatric dentist Doddaballapur",
      "dentist near Dodballapur Bangalore",
      "root canal Doddaballapur",
    ],
    geo: { latitude: 13.2927, longitude: 77.5431 },
    localityLabel: "Doddaballapur",
    travelNote: "25 mins drive via Doddaballapur Highway",
  },

  // —— Central & East Bangalore Hubs ——
  {
    slug: "indiranagar",
    name: "Indiranagar",
    region: "Central & East",
    kind: "serving",
    title: "Microscopic Dentist for Indiranagar Bangalore | Dr. Prem Kumar",
    description:
      "Indiranagar patients travel to Dr. Prem Kumar for specialized 30x microscopic root canals, kids dentistry, and custom smile design. Rated 4.9★.",
    h1: "Microscopic Dentist for Indiranagar Patients",
    intro:
      "Patients from Indiranagar seeking non-surgical precision root canals and specialist pediatric care travel to Dr. Prem Kumar’s microscopic clinic.",
    landmarks: [
      "100 Feet Road Indiranagar",
      "12th Main Indiranagar",
      "CMH Road Hub",
      "Outer Ring Road Access",
    ],
    keywords: [
      "dentist in Indiranagar",
      "microscopic dentist Indiranagar",
      "best dentist Indiranagar Bangalore",
      "pediatric dentist Indiranagar",
      "root canal specialist Indiranagar",
    ],
    geo: { latitude: 12.9784, longitude: 77.6408 },
    localityLabel: "Indiranagar",
    travelNote: "30 mins via ORR / Hebbal express corridor",
  },
  {
    slug: "koramangala",
    name: "Koramangala",
    region: "Central & East",
    kind: "serving",
    title: "Microscopic Dentist for Koramangala Bangalore | Dr. Prem Kumar",
    description:
      "Top-tier microscopic dental treatment & pediatric dentistry for Koramangala families. Painless single-visit RCT and smile makeovers with Dr. Prem Kumar.",
    h1: "Microscopic Dentist Serving Koramangala",
    intro:
      "Koramangala residents visit Dr. Prem Kumar for German microscopic precision dentistry when saving complex teeth without extraction is top priority.",
    landmarks: [
      "Koramangala 80 Feet Road",
      "Forum Mall / Hosur Road corridor",
      "Koramangala 4th Block",
      "Inner Ring Road route",
    ],
    keywords: [
      "dentist in Koramangala",
      "best dentist Koramangala",
      "microscopic RCT Koramangala",
      "pediatric dentist Koramangala",
      "dental clinic Koramangala Bangalore",
    ],
    geo: { latitude: 12.9352, longitude: 77.6245 },
    localityLabel: "Koramangala",
    travelNote: "Accessible via ORR / Airport expressway",
  },
  {
    slug: "whitefield",
    name: "Whitefield",
    region: "Central & East",
    kind: "serving",
    title: "Microscopic Dentist for Whitefield Bangalore | Dr. Prem Kumar",
    description:
      "Whitefield IT professionals and families travel to Dr. Prem Kumar for 30x microscopic root canals, kids dental care & implants. Book appointment online.",
    h1: "Microscopic Dentist Serving Whitefield, Bangalore",
    intro:
      "Serving Whitefield and ITPL tech families with microscopic precision, digital smile designing, and child-friendly preventative oral care.",
    landmarks: [
      "ITPL / International Tech Park",
      "Whitefield Main Road",
      "Hope Farm Junction",
      "Hoodi & Phoenix Marketcity corridor",
    ],
    keywords: [
      "dentist in Whitefield",
      "best dentist Whitefield Bangalore",
      "microscopic root canal Whitefield",
      "pediatric dentist Whitefield",
      "dental implants Whitefield",
    ],
    geo: { latitude: 12.9698, longitude: 77.7499 },
    localityLabel: "Whitefield",
    travelNote: "Direct connectivity via ORR north stretch",
  },
  {
    slug: "marathahalli",
    name: "Marathahalli",
    region: "Central & East",
    kind: "serving",
    title: "Microscopic Dentist Near Marathahalli | Dr. Prem Kumar Bangalore",
    description:
      "Looking for a microscopic root canal specialist or kids dentist near Marathahalli? Dr. Prem Kumar offers advanced 30x microscope dental care.",
    h1: "Microscopic Dentist Serving Marathahalli",
    intro:
      "Marathahalli and ORR belt residents trust Dr. Prem Kumar for gentle pediatric dental care and microscopic re-treatment of complex root canals.",
    landmarks: [
      "Marathahalli Bridge & ORR",
      "Kalamandir Junction",
      "Old Airport Road Intersection",
      "Belandur / Kundalahalli access",
    ],
    keywords: [
      "dentist in Marathahalli",
      "best dentist Marathahalli",
      "root canal specialist Marathahalli",
      "kids dentist Marathahalli",
      "dental clinic near Marathahalli",
    ],
    geo: { latitude: 12.9591, longitude: 77.6974 },
    localityLabel: "Marathahalli",
    travelNote: "Easy access via Outer Ring Road corridor",
  },

  // —— South & West Bangalore Hubs ——
  {
    slug: "hsr-layout",
    name: "HSR Layout",
    region: "South & West",
    kind: "serving",
    title: "Microscopic Dentist for HSR Layout Bangalore | Dr. Prem Kumar",
    description:
      "HSR Layout families travel for Dr. Prem Kumar’s specialized microscopic dentistry, painless RCT, pediatric oral care, and dental implants.",
    h1: "Microscopic Dentist Serving HSR Layout",
    intro:
      "HSR Layout residents seeking 30x magnification microscopic root canal therapy and stress-free kids dentistry visit Dr. Prem Kumar in Bangalore.",
    landmarks: [
      "HSR Layout 27th Main",
      "Agara Lake Junction",
      "HSR Sector 1 & Sector 7",
      "Outer Ring Road Express access",
    ],
    keywords: [
      "dentist in HSR Layout",
      "best dentist HSR Layout",
      "pediatric dentist HSR Layout",
      "microscopic root canal HSR Layout",
      "dental clinic HSR Layout Bangalore",
    ],
    geo: { latitude: 12.9121, longitude: 77.6445 },
    localityLabel: "HSR Layout",
    travelNote: "Direct route via Outer Ring Road",
  },
  {
    slug: "jayanagar",
    name: "Jayanagar",
    region: "South & West",
    kind: "serving",
    title: "Microscopic Dentist for Jayanagar Bangalore | Dr. Prem Kumar",
    description:
      "Jayanagar residents consult Dr. Prem Kumar for high-precision 30x microscopic root canals, kids dentistry, and cosmetic smile makeovers.",
    h1: "Microscopic Dentist Serving Jayanagar",
    intro:
      "Known across South Bangalore, Jayanagar patients visit Dr. Prem Kumar for microscopic endodontics and expert pediatric dental care.",
    landmarks: [
      "Jayanagar 4th Block Complex",
      "South End Circle",
      "Jayanagar 9th Block",
      "Ashoka Pillar Corridor",
    ],
    keywords: [
      "dentist in Jayanagar",
      "best dentist Jayanagar",
      "microscopic dentist Jayanagar",
      "pediatric dentist Jayanagar Bangalore",
      "root canal specialist Jayanagar",
    ],
    geo: { latitude: 12.925, longitude: 77.5938 },
    localityLabel: "Jayanagar",
    travelNote: "30 mins drive via Hebbal expressway",
  },
  {
    slug: "jp-nagar",
    name: "JP Nagar",
    region: "South & West",
    kind: "serving",
    title: "Microscopic Dentist for JP Nagar Bangalore | Dr. Prem Kumar",
    description:
      "Premier microscopic dentistry and pediatric care for JP Nagar families. Specialist root canals, CBCT implants, and smile design by Dr. Prem Kumar.",
    h1: "Microscopic Dentist Serving JP Nagar",
    intro:
      "JP Nagar patients seek Dr. Prem Kumar’s specialized microscopic care to preserve natural teeth with maximum precision.",
    landmarks: [
      "JP Nagar 2nd Phase & 6th Phase",
      "Sarakki Signal",
      "Delmia Circle",
      "Bannerghatta Road Intersection",
    ],
    keywords: [
      "dentist JP Nagar",
      "best dentist JP Nagar Bangalore",
      "pediatric dentist JP Nagar",
      "root canal JP Nagar",
      "dental clinic JP Nagar",
    ],
    geo: { latitude: 12.9077, longitude: 77.5854 },
    localityLabel: "JP Nagar",
    travelNote: "Accessible via ORR & central flyover corridor",
  },
  {
    slug: "electronic-city",
    name: "Electronic City",
    region: "South & West",
    kind: "serving",
    title: "Microscopic Dentist for Electronic City Bangalore | Dr. Prem Kumar",
    description:
      "Electronic City tech professionals choose Dr. Prem Kumar for advanced 30x microscopic root canal treatment, dental implants, and pediatric care.",
    h1: "Microscopic Dentist Serving Electronic City",
    intro:
      "Serving Electronic City Phase 1 & Phase 2 IT employees with state-of-the-art microscopic dentistry and painless tooth restoration.",
    landmarks: [
      "Electronic City Phase 1 Toll Gate",
      "Electronic City Phase 2",
      "Nice Road Junction",
      "Hosur Road Elevated Expressway",
    ],
    keywords: [
      "dentist Electronic City",
      "best dentist Electronic City Bangalore",
      "root canal Electronic City",
      "pediatric dentist Electronic City",
      "dental clinic near Electronic City",
    ],
    geo: { latitude: 12.8452, longitude: 77.6602 },
    localityLabel: "Electronic City",
    travelNote: "Direct route via Elevated Expressway & ORR",
  },
  {
    slug: "malleshwaram",
    name: "Malleshwaram",
    region: "South & West",
    kind: "serving",
    title: "Microscopic Dentist for Malleshwaram Bangalore | Dr. Prem Kumar",
    description:
      "Malleshwaram families consult Dr. Prem Kumar for specialist 30x microscopic dentistry, child-friendly pediatric care, and natural smile redesign.",
    h1: "Microscopic Dentist Serving Malleshwaram",
    intro:
      "Malleshwaram patients visit Dr. Prem Kumar for world-class microscopic root canals and preventative pediatric dental protocols.",
    landmarks: [
      "Sampige Road Malleshwaram",
      "Margosa Road",
      "Mantri Square Corridor",
      "Yeshwanthpur Junction Connect",
    ],
    keywords: [
      "dentist Malleshwaram",
      "best dentist Malleshwaram Bangalore",
      "pediatric dentist Malleshwaram",
      "microscopic root canal Malleshwaram",
      "dental clinic Malleshwaram",
    ],
    geo: { latitude: 13.0031, longitude: 77.5643 },
    localityLabel: "Malleshwaram",
    travelNote: "15-20 mins via Yeshwanthpur / Yelahanka main artery",
  },
  {
    slug: "rajajinagar",
    name: "Rajajinagar",
    region: "South & West",
    kind: "serving",
    title: "Microscopic Dentist for Rajajinagar Bangalore | Dr. Prem Kumar",
    description:
      "Rajajinagar residents visit Dr. Prem Kumar for microscopic root canals, kids dental care, and dental implants in Bangalore.",
    h1: "Microscopic Dentist Serving Rajajinagar",
    intro:
      "Providing Rajajinagar families with German microscopic dental care, painless single-visit root canals, and child-centric gentle dentistry.",
    landmarks: [
      "Rajajinagar 1st Block to 6th Block",
      "Orion Mall / Brigade Gateway",
      "Navrang Theatre Signal",
      "Isckon Temple Area",
    ],
    keywords: [
      "dentist Rajajinagar",
      "best dentist Rajajinagar Bangalore",
      "pediatric dentist Rajajinagar",
      "root canal Rajajinagar",
      "dental clinic Rajajinagar",
    ],
    geo: { latitude: 12.9882, longitude: 77.5549 },
    localityLabel: "Rajajinagar",
    travelNote: "18-22 mins drive via North Bangalore express artery",
  },
];

export const bangaloreHubKeywords = [
  "microscopic dentist Bangalore",
  "best dentist in Bangalore",
  "pediatric dentist Bangalore",
  "root canal treatment Bangalore",
  "dental clinic North Bangalore",
  "dentist Yelahanka Bangalore",
  "best dentist Indiranagar",
  "dentist Koramangala",
  "dentist Whitefield Bangalore",
  "dentist HSR Layout",
  "microscopic root canal Bangalore",
  "kids dentist Bangalore",
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}

export const areaServedCities = [
  "Attur",
  "Yelahanka",
  "Hebbal",
  "Sahakara Nagar",
  "Thanisandra",
  "Devanahalli",
  "RT Nagar",
  "Doddaballapur",
  "Indiranagar",
  "Koramangala",
  "Whitefield",
  "Marathahalli",
  "HSR Layout",
  "Jayanagar",
  "JP Nagar",
  "Electronic City",
  "Malleshwaram",
  "Rajajinagar",
  "Bangalore",
  "Bengaluru",
] as const;


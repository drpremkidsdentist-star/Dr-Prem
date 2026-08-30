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
      "Our flagship clinic on Attur Main Road serves families across Attur Layout and Yelahanka New Town with advanced microscopic dentistry.",
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
      "Hebbal and Outer Ring Road families choose our Attur clinic for fear-free kids care and microscopic root canals — convenient from Hebbal Flyover and Esteem Mall side.",
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
      "Premier dental care for Sahakara Nagar residents. Specialized pediatric dentistry & microscopic root canals by Dr. Prem Kumar R in nearby Yelahanka.",
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
      "RT Nagar and Ganganagar families visit our Attur clinic for high-magnification microscopic root canals and fear-free pediatric dental care.",
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

  // —— North Bangalore Hubs ——
  {
    slug: "indiranagar",
    name: "Indiranagar",
    region: "North",
    kind: "serving",
    title: "Microscopic Dentist for Indiranagar Bangalore | Dr. Prem Kumar R",
    description:
      "Indiranagar patients travel to Dr. Prem Kumar R for specialized microscopic root canals, kids dentistry, and custom smile design. Rated 4.9★.",
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
];

export const bangaloreHubKeywords = [
  "microscopic dentist Bangalore",
  "best dentist in North Bangalore",
  "pediatric dentist Yelahanka",
  "root canal treatment Attur",
  "dental clinic North Bangalore",
  "dentist Yelahanka Bangalore",
  "dentist Hebbal Bangalore",
  "dentist Sahakara Nagar",
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
  "North Bangalore",
  "Bangalore",
] as const;


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
    slug: "vidyaranyapura",
    name: "Vidyaranyapura",
    region: "North",
    kind: "serving",
    title: "Dentist in Vidyaranyapura Bangalore | Microscopic Care | Dr. Prem Kumar",
    description:
      "Specialist pediatric dentistry & microscopic root canals for Vidyaranyapura families at nearby Attur Layout clinic. 4.9★ rated MDS doctor.",
    h1: "Microscopic & Pediatric Dentist for Vidyaranyapura",
    intro:
      "Located directly adjacent to Vidyaranyapura, our Attur clinic provides gentle kids dental treatments, laughing gas sedation, and precision root canals under operating microscopes.",
    landmarks: [
      "Vidyaranyapura Main Road",
      "BEL Circle / HMT Layout",
      "Direct connection to Attur Main Road",
      "Short 5-min drive to clinic",
    ],
    keywords: [
      "dentist in Vidyaranyapura",
      "pediatric dentist Vidyaranyapura",
      "kids dentist Vidyaranyapura",
      "root canal Vidyaranyapura",
      "dental clinic near Vidyaranyapura Bangalore",
      "best dentist Vidyaranyapura",
    ],
    geo: { latitude: 13.0805, longitude: 77.5562 },
    localityLabel: "Vidyaranyapura",
    travelNote: "5–8 mins drive via Attur Main Road",
  },
  {
    slug: "jakkur",
    name: "Jakkur",
    region: "North",
    kind: "serving",
    title: "Dentist near Jakkur Bangalore | Microscopic Care | Dr. Prem Kumar",
    description:
      "World-class pediatric & microscopic dentistry for Jakkur and Bellary Road families. Painless RCT, Invisalign, and gentle children's dentistry.",
    h1: "Microscopic Dentist Near Jakkur, Bangalore",
    intro:
      "Families from Jakkur, Jakkur Plantation, and Bellary Highway corridor choose Dr. Prem Kumar for precision microscopic dental treatments and fear-free kids care.",
    landmarks: [
      "Jakkur Aerodrome area",
      "Jakkur Main Road",
      "Bellary Road / NH-44",
      "Direct drive to Yelahanka Attur",
    ],
    keywords: [
      "dentist near Jakkur",
      "pediatric dentist Jakkur",
      "kids dentist Jakkur Bangalore",
      "root canal Jakkur",
      "best dental clinic near Jakkur",
    ],
    geo: { latitude: 13.0784, longitude: 77.6074 },
    localityLabel: "Jakkur",
    travelNote: "8–10 mins drive via NH-44 / Yelahanka",
  },
  {
    slug: "kogilu",
    name: "Kogilu & Yelahanka Bypass",
    region: "North",
    kind: "serving",
    title: "Dentist near Kogilu & Kogilu Cross | Dr. Prem Kumar",
    description:
      "Leading microscopic dental clinic serving Kogilu, Kogilu Cross, and Yelahanka. MDS Pediatric Dentist & single-visit microscopic root canals.",
    h1: "Microscopic Dentist Near Kogilu, Bangalore",
    intro:
      "Patients from Kogilu, Maruthi Nagar, and Yelahanka bypass travel minutes to our flagship Attur clinic for fear-free children's dental care and microscopic RCT.",
    landmarks: [
      "Kogilu Main Road",
      "Kogilu Cross Junction",
      "Near Yelahanka New Town",
      "Airport Road connectivity",
    ],
    keywords: [
      "dentist in Kogilu",
      "dentist near Kogilu Cross",
      "pediatric dentist Kogilu",
      "root canal Kogilu Bangalore",
      "dental clinic near Kogilu",
    ],
    geo: { latitude: 13.1182, longitude: 77.6085 },
    localityLabel: "Kogilu",
    travelNote: "5–7 mins drive to Attur clinic",
  },
  {
    slug: "kodigehalli",
    name: "Kodigehalli",
    region: "North",
    kind: "serving",
    title: "Dentist near Kodigehalli Bangalore | Dr. Prem Kumar R",
    description:
      "Precision microscopic dental care and gentle kids dentistry for Kodigehalli and Sahakara Nagar residents. Call +91 81972 80019.",
    h1: "Microscopic Dentist Near Kodigehalli",
    intro:
      "Serving Kodigehalli, Thindlu, and Sahakara Nagar families with painless root canals and specialist pediatric care under surgical operating microscopes.",
    landmarks: [
      "Kodigehalli Railway Station",
      "Kodigehalli Main Road",
      "Thindlu Circle",
      "Short drive to Attur, Yelahanka",
    ],
    keywords: [
      "dentist near Kodigehalli",
      "dentist Kodigehalli Bangalore",
      "kids dentist Kodigehalli",
      "root canal Kodigehalli",
      "dental clinic near Thindlu",
    ],
    geo: { latitude: 13.0567, longitude: 77.5752 },
    localityLabel: "Kodigehalli",
    travelNote: "8–10 mins via Kodigehalli–Thindlu–Attur road",
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
  "Vidyaranyapura",
  "Jakkur",
  "Kogilu",
  "Kodigehalli",
  "Hebbal",
  "Sahakara Nagar",
  "Thanisandra",
  "Devanahalli",
  "RT Nagar",
  "Doddaballapur",
  "North Bangalore",
  "Bangalore",
] as const;


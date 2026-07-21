import { clinicContact } from "@/lib/siteAssets";

export type ServiceArea = {
  slug: string;
  name: string;
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
};

/** Local SEO silos — Attur flagship + North Bangalore service areas (claude-seo local) */
export const serviceAreas: ServiceArea[] = [
  {
    slug: "attur",
    name: "Attur",
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
  },
  {
    slug: "yelahanka",
    name: "Yelahanka",
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
  },
  {
    slug: "hebbal",
    name: "Hebbal",
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
  },
  {
    slug: "dodballapur",
    name: "Doddaballapur",
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
  },
];

export const bangaloreHubKeywords = [
  "microscopic dentist Bangalore",
  "best dentist in Bangalore",
  "pediatric dentist Bangalore",
  "root canal treatment Bangalore",
  "dental clinic North Bangalore",
  "dentist Yelahanka Bangalore",
];

export function getServiceArea(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}

export const areaServedCities = [
  "Attur",
  "Yelahanka",
  "Hebbal",
  "Doddaballapur",
  "Bangalore",
  "Bengaluru",
] as const;

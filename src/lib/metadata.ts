import { Metadata } from "next";
import {
  PersonSchema,
  DentistSchema,
  MedicalBusinessSchema,
  LocalBusinessSchema,
  OrganizationSchema,
  BreadcrumbSchema,
  WebSiteSchema,
  ServiceSchema,
  MedicalProcedureSchema,
  ReviewSchema,
  AggregateRatingSchema,
  VideoObjectSchema,
  ImageObjectSchema,
  FAQSchema,
  AppointmentSchema,
  SpeakableSchema,
} from "./schemas";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://www.drpremkumar.in"),
  title: {
    default: "Dr. Prem Kumar R | Microscopic Dentist & Pediatric Specialist Bangalore",
    template: "%s | Dr. Prem Kumar R – Bangalore",
  },
  description:
    "Dr. Prem Kumar R – Bangalore's top-rated microscopic dentist & pediatric specialist in Attur, Yelahanka. MDS (Ramaiah Dental College). Expert microscopic root canals, kids dentistry, implants, and clear aligners. 4.9★ rated. Call +91 81972 80019.",
  keywords: [
    // Core Doctor & Brand
    "kumars microscopic dental",
    "kumar's microscopic dental care",
    "dr prem kumar",
    "prem kumar r",
    "dr prem kumar r",
    "dr roshini",
    "microscopic dentist Bangalore",
    "best dentist in Bangalore",
    "Dr. Prem Kumar R dentist",

    // Local "Near Me" Searches
    "dental near me",
    "dentist office near me",
    "cheap dentist near me",
    "cosmetic dentist near me",
    "low cost dentist near me",
    "best orthodontist near me",
    "medical dentist near me",
    "local dentist near me",
    "find a dentist near me",
    "affordable dentists near me",
    "the best dentist near me",
    "closest dentist to me",
    "nearest dentist to me",
    "dentist close to me",
    "closest dentist near me",
    "dentists around me",
    "best dental office near me",
    "oral dentist near me",
    "dentist near my location",
    "dental clinic near me open today",
    "weekend dentist near me",
    "cheapest dentist near me",
    "24hr dentist near me",
    "walk in teeth cleaning near me",
    "good dentist near me",
    "friendly dentist near me",
    "dentist best near me",
    "best dental near me",
    "tooth appointment",

    // Pediatric & Kids Dentistry
    "pediatric dentist near me",
    "pediatric dentist Bangalore",
    "kids dentist Bangalore",
    "kids dentist near me",
    "child dental clinic",
    "childrens dental near me",
    "dentist childrens near me",
    "childrens dental",
    "childrens dental world",
    "kidz dental",
    "kidds dental",
    "affordable pediatric dentist near me",
    "top pediatric dentist near me",
    "good pediatric dentist near me",
    "emergency pediatrics near me",
    "special needs pediatric dentist near me",
    "pediatric dentist for autism near me",
    "pediatric dentist for special needs near me",
    "sedation pediatric dentistry near me",
    "holistic pediatric dentist near me",
    "center for pediatric dental care",
    "center for pediatric dentistry",
    "all smiles pediatric dentistry",
    "healthy teeth pediatric dentistry",
    "pediatric dentist and orthodontist near me",
    "pediatric orthodontist near me",
    "pediatric oral surgeon near me",
    "family teeth",

    // Microscopic Root Canal
    "root canal",
    "rootcanal",
    "microscopic root canal Bangalore",
    "same day root canal near me",
    "painless root canal treatment Bangalore",
    "calcified root canal treatment",
    "root canal on crowned tooth",
    "pulp chamber and root canal",
    "root canal access",
    "root canal removal near me",
    "loose crown on root canal tooth",
    "tooth decay under crown with root canal",
    "fractured root canal",
    "avoid root canal",
    "root canal cost",

    // Dental Implants & Restorations
    "implants",
    "dental implants near me",
    "implants near me",
    "affordable implants near me",
    "affordable dental implants near me",
    "low cost dental implants near me",
    "cheapest dental implants near me",
    "dental implants cost near me",
    "dental transplants",
    "prosthodontist near me",
    "snap on dentures near me",

    // Cosmetic, Veneers & Teeth Whitening
    "cosmetic dentistry near me",
    "best cosmetic dentist near me",
    "porcelain veneers near me",
    "composite veneers near me",
    "affordable veneers near me",
    "snap on veneers near me",
    "teeth bonding near me",
    "dental bonding near me",
    "professional teeth whitening near me",
    "teeth bleaching near me",
    "laser teeth whitening near me",
    "smile design Bangalore",

    // Aligners & Orthodontics
    "invisalign",
    "invisalign price",
    "invisible aligners",
    "clear aligners for teeth",
    "invisalign dentist near me",
    "affordable invisalign",
    "invisalign treatment",
    "clear aligners cost",
    "invisalign monthly cost",
    "cheapest clear aligners",
    "dentist for braces near me",
    "invisalign retainers",

    // General & Preventive Care
    "cavity filling near me",
    "dentist for fillings near me",
    "fillings",
    "tooth sensitivity",
    "gum specialist near me",
    "best periodontist near me",
    "emergency extraction near me",
    "sleep dentistry near me",
    "dentist in Attur Yelahanka",
    "dentist in Yelahanka",
    "dentist near Hebbal",
  ],
  authors: [{ name: "Dr. Prem Kumar R" }],
  creator: "Dr. Prem Kumar R",
  publisher: "Dr. Prem Kumar R",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  category: "Healthcare",
  classification: "Dental Care",
  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "13.1016;77.5702",
    ICBM: "13.1016, 77.5702",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.drpremkumar.in",
    siteName: "Dr. Prem Kumar R - Microscopic Dentist Bangalore",
    title: "Dr. Prem Kumar R | Microscopic Dentist & Pediatric Specialist Bangalore",
    description:
      "Experience world-class microscopic dentistry and pediatric care in Bangalore with Dr. Prem Kumar R. 4.9★ Google rated.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prem Kumar R - Microscopic Dentist Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Prem Kumar R | Microscopic Dentist Bangalore",
    description:
      "Experience world-class microscopic dentistry and pediatric dental care in Bangalore with Dr. Prem Kumar R.",
    images: ["/images/twitter-image.jpg"],
    creator: "@drpremkumarr",
  },
  verification: {
    google: "rGtBVjt3zWj8nvcgFwQ-fx4F2xzUGhYM6HaJF6raQvQ",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const pageMetadata = {
  home: {
    title: "Dr. Prem Kumar R | Best Pediatric & Microscopic Dentist Bangalore",
    description:
      "Top-rated dental clinic in Attur, Yelahanka Bangalore. Microscopic root canals, pediatric dentistry, dental implants & clear aligners by Dr. Prem Kumar R. 4.9★ Google rated. Book now!",
    keywords: [
      "dental near me",
      "kumars microscopic dental",
      "dr prem kumar",
      "dr prem kumar r",
      "dr roshini",
      "best dentist near me",
      "pediatric dentist near me",
      "microscopic dentist Bangalore",
      "dentist office near me",
      "cheap dentist near me",
      "low cost dentist near me",
      "closest dentist to me",
      "dental clinic near me open today",
      "root canal near me",
      "dental implants near me",
      "invisalign dentist near me",
      "cosmetic dentist near me",
      "dentist in Attur Yelahanka",
      "dentist in Yelahanka Bangalore",
      "dentist near Hebbal",
    ],
  },
  about: {
    title: "About Dr. Prem Kumar R | Pediatric & Microscopic Dentist Bangalore",
    description:
      "Meet Dr. Prem Kumar R – MDS Pediatric & Preventive Dentistry, former faculty at Ramaiah Dental College. Specialist in microscopic dentistry at Attur & Yelahanka.",
    keywords: [
      "dr prem kumar",
      "dr prem kumar r",
      "dr roshini",
      "kumars microscopic dental",
      "pediatric dentist Bangalore",
      "microscopic dentist Bangalore",
      "best dentist in Bangalore",
      "Ramaiah Dental College dentist",
    ],
  },
  microscopicDentistry: {
    title: "Microscopic Dentistry in Bangalore | Surgical Operating Precision | Dr. Prem Kumar R",
    description:
      "Discover microscopic dentistry in Bangalore by Dr. Prem Kumar R. Advanced surgical operating microscopes deliver unmatched precision for root canals, restorations & implants.",
    keywords: [
      "microscopic dentist Bangalore",
      "kumars microscopic dental",
      "microscopic root canal Bangalore",
      "operating microscope dental",
      "precision dentistry Bangalore",
    ],
  },
  technology: {
    title: "Advanced Dental Technology Bangalore | Dr. Prem Kumar R",
    description:
      "Experience cutting-edge dental technology including operating microscopes, CBCT, digital imaging, and laser systems at Dr. Prem Kumar R's Bangalore clinic.",
  },
  patientJourney: {
    title: "Patient Journey | Dr. Prem Kumar Dental Clinic Bangalore",
    description:
      "From your first consultation to your final smile – explore the complete patient journey at Dr. Prem Kumar's microscopic dentistry clinic in Attur, Yelahanka.",
  },
  education: {
    title: "Clinical Education & Private Dental Mentorship | Dr. Prem Kumar R",
    description:
      "Private clinical mentorship and hands-on workshops in microscopic endodontics and pediatric dentistry by Dr. Prem Kumar R (Former Asst. Professor, Ramaiah Dental College).",
  },
  knowledgeCenter: {
    title: "Dental Health Blog & Guides | Dr. Prem Kumar Bangalore",
    description:
      "Expert articles, guides and videos on microscopic dentistry, pediatric oral health, root canals, implants, and smile care by Dr. Prem Kumar, Bangalore.",
  },
  awards: {
    title: "Awards & Recognition | Dr. Prem Kumar | Microscopic Dentist Bangalore",
    description:
      "Dr. Prem Kumar's awards, certifications, and recognition in microscopic dentistry, pediatric care, and advanced dental technology.",
  },
  videos: {
    title: "Dental Videos | Treatments Explained | Dr. Prem Kumar Bangalore",
    description:
      "Watch educational videos, patient testimonials, and procedure demonstrations by Dr. Prem Kumar, Bangalore's leading microscopic dentist.",
  },
  contact: {
    title: "Contact Dr. Prem Kumar | Dental Clinic Attur Yelahanka Bangalore",
    description:
      "Contact Dr. Prem Kumar's dental clinic in Attur, Yelahanka, Bangalore. Call +91 81972 80019 or book online. Serving Hebbal, Doddaballapur & North Bangalore.",
    keywords: [
      "dental near me",
      "dentist office near me",
      "closest dentist to me",
      "dental clinic near me open today",
      "contact dentist Bangalore",
      "dentist phone number Bangalore",
      "Attur Yelahanka dental clinic address",
    ],
  },
  locations: {
    title: "Clinic Locations | Dr. Prem Kumar Dental Clinic Bangalore",
    description:
      "Find Dr. Prem Kumar's dental clinics in Attur & Yelahanka, Bangalore. Serving Hebbal, Doddaballapur & North Bangalore. Book your appointment today.",
  },
  bookAppointment: {
    title: "Book Appointment | Dr. Prem Kumar Dental Clinic Bangalore",
    description:
      "Book an appointment with Dr. Prem Kumar for microscopic dental care in Attur, Yelahanka, Bangalore. Same-week slots available. Call +91 81972 80019.",
    keywords: [
      "tooth appointment",
      "book dentist appointment Bangalore",
      "dental near me",
      "dentist appointment near me",
      "walk in teeth cleaning near me",
    ],
  },
  aboutDrPremKumar: {
    title: "About Dr. Prem Kumar | Microscopic Dentist Bangalore",
    description:
      "Meet Dr. Prem Kumar, Bangalore's trusted microscopic dentist. Discover his qualifications, experience, and passion for precision dental care.",
    keywords: [
      "Dr. Prem Kumar dentist",
      "dr prem kumar r",
      "dr roshini",
      "microscopic dentist Bangalore",
      "best dentist Bangalore",
      "dental specialist Bangalore",
      "kumars microscopic dental",
    ],
  },
  services: {
    title: "Dental Services | Microscopic Dentist Bangalore",
    description:
      "Comprehensive dental services including root canal treatment, dental implants, smile design, pediatric dentistry, cosmetic dentistry, and laser dentistry in Bangalore.",
    keywords: [
      "dental services Bangalore",
      "dental near me",
      "microscopic root canal",
      "dental implants near me",
      "pediatric dentist near me",
      "cosmetic dentist near me",
      "laser dentistry Bangalore",
      "invisalign dentist near me",
    ],
  },
  microscopicRootCanal: {
    title: "Painless Root Canal Treatment Bangalore | Microscopic RCT | Dr. Prem Kumar R",
    description:
      "Single-visit microscopic root canal treatment (RCT) by Dr. Prem Kumar R in Bangalore. Advanced surgical microscope technique, calcified canal scouting & gentle care. Book now.",
    keywords: [
      "root canal",
      "rootcanal",
      "microscopic root canal Bangalore",
      "same day root canal near me",
      "painless root canal Bangalore",
      "calcified root canal treatment",
      "root canal on crowned tooth",
      "pulp chamber and root canal",
      "root canal access",
      "root canal removal near me",
      "loose crown on root canal tooth",
      "tooth decay under crown with root canal",
      "fractured root canal",
      "avoid root canal",
      "root canal cost",
      "endodontist Bangalore",
      "root canal Attur Yelahanka",
    ],
  },
  dentalImplants: {
    title: "Dental Implants Yelahanka & Attur Bangalore | Dr. Prem Kumar R",
    description:
      "Permanent, natural-looking dental implants at Dr. Prem Kumar R's clinic in Attur, Yelahanka, Bangalore. CBCT-planned with microscopic precision. Affordable & permanent tooth replacement.",
    keywords: [
      "implants",
      "dental implants near me",
      "implants near me",
      "affordable dental implants near me",
      "low cost dental implants near me",
      "cheapest dental implants near me",
      "dental implants cost near me",
      "dental transplants",
      "dental implants Bangalore",
      "dental implants Yelahanka",
      "dental implants Attur Bangalore",
      "tooth implant Bangalore",
      "permanent tooth replacement Bangalore",
      "prosthodontist near me",
      "snap on dentures near me",
      "family teeth",
    ],
  },
  smileDesign: {
    title: "Smile Design & Clear Aligners | Dr. Prem Kumar R Bangalore",
    description:
      "Custom smile design, Invisalign clear aligners, porcelain veneers, and makeovers in Bangalore by Dr. Prem Kumar R. Digital smile preview included.",
    keywords: [
      "smile design Bangalore",
      "invisalign",
      "invisalign price",
      "invisible aligners",
      "clear aligners for teeth",
      "invisalign dentist near me",
      "affordable invisalign",
      "invisalign treatment",
      "clear aligners cost",
      "invisalign monthly cost",
      "cheapest clear aligners",
      "dentist for braces near me",
      "invisalign retainers",
      "porcelain veneers near me",
      "composite veneers near me",
      "snap on veneers near me",
      "teeth bonding near me",
      "dental bonding near me",
    ],
  },
  pediatricDentistry: {
    title: "Best Pediatric Dentist Bangalore | Kids Dental Clinic | Dr. Prem Kumar R",
    description:
      "Gentle, fear-free kids dental care in Attur & Yelahanka, Bangalore by MDS Pediatric Dentist Dr. Prem Kumar R. Painless pediatric dentistry, sedation, special needs & cavity care.",
    keywords: [
      "child",
      "pediatric dentist near me",
      "pediatric dentist Bangalore",
      "kids dentist Bangalore",
      "kids dentist near me",
      "childrens dental near me",
      "dentist childrens near me",
      "childrens dental",
      "childrens dental world",
      "kidz dental",
      "kidds dental",
      "affordable pediatric dentist near me",
      "top pediatric dentist near me",
      "good pediatric dentist near me",
      "emergency pediatrics near me",
      "special needs pediatric dentist near me",
      "pediatric dentist for autism near me",
      "pediatric dentist for special needs near me",
      "sedation pediatric dentistry near me",
      "holistic pediatric dentist near me",
      "center for pediatric dental care",
      "center for pediatric dentistry",
      "all smiles pediatric dentistry",
      "healthy teeth pediatric dentistry",
      "pediatric dentist and orthodontist near me",
      "pediatric orthodontist near me",
      "pediatric oral surgeon near me",
      "family teeth",
      "kids dentist Attur Bangalore",
      "kids dentist Yelahanka",
    ],
  },
  cosmeticDentistry: {
    title: "Cosmetic Dentistry & Teeth Whitening | Dr. Prem Kumar Bangalore",
    description:
      "Transform your smile with cosmetic dentistry, porcelain veneers, professional teeth whitening, and aesthetic bonding in Bangalore with Dr. Prem Kumar R.",
    keywords: [
      "cosmetic dentist near me",
      "best cosmetic dentist near me",
      "cosmetic dentistry near me",
      "professional teeth whitening near me",
      "teeth bleaching near me",
      "laser teeth whitening near me",
      "porcelain veneers near me",
      "composite veneers near me",
      "affordable veneers near me",
      "teeth bonding near me",
      "dental bonding near me",
      "cosmetic dentistry Bangalore",
      "teeth whitening Bangalore",
    ],
  },
  laserDentistry: {
    title: "Laser Dentistry | Dr. Prem Kumar Bangalore",
    description:
      "Minimally invasive laser dentistry for comfortable, precise, and faster-healing dental treatments in Bangalore.",
    keywords: [
      "laser dentistry Bangalore",
      "painless dental treatment",
      "laser gum treatment",
      "minimally invasive dentistry",
      "soft tissue laser",
    ],
  },
  preventiveCare: {
    title: "Preventive Dental Care | Dr. Prem Kumar Bangalore",
    description:
      "Comprehensive preventive dental care including cleanings, checkups, and oral health education in Bangalore. Protect your smile for life.",
    keywords: [
      "preventive dental care Bangalore",
      "dental cleaning Bangalore",
      "oral health checkup",
      "scaling and polishing",
      "dental prophylaxis",
    ],
  },
  cases: {
    title: "Real Cases | Microscopic Dentistry Bangalore",
    description:
      "Explore real patient cases and smile transformations by Dr. Prem Kumar. See the results of microscopic dentistry in Bangalore.",
    keywords: [
      "dental case studies",
      "smile transformation Bangalore",
      "before after dentist",
      "microscopic dentistry results",
      "patient cases Bangalore",
    ],
  },
  microscopicRctTransformation: {
    title: "Microscopic RCT Transformation | Dr. Prem Kumar",
    description:
      "See how microscopic root canal treatment transformed a patient's dental health with precision care in Bangalore.",
    keywords: [
      "root canal case study",
      "microscopic RCT",
      "dental transformation Bangalore",
      "RCT before after",
    ],
  },
  implantMakeover: {
    title: "Dental Implant Makeover | Dr. Prem Kumar",
    description:
      "A complete smile restoration with dental implants by Dr. Prem Kumar in Bangalore. Real patient implant journey.",
    keywords: [
      "dental implant case",
      "implant makeover Bangalore",
      "smile restoration",
      "implant before after",
    ],
  },
  smileDesignBeforeAfter: {
    title: "Smile Design Before & After | Dr. Prem Kumar",
    description:
      "Real smile design before and after results showcasing cosmetic transformations in Bangalore.",
    keywords: [
      "smile design before after",
      "cosmetic makeover",
      "veneers before after",
      "smile transformation",
    ],
  },
  pediatricDentalCareCase: {
    title: "Pediatric Dental Care Case | Dr. Prem Kumar",
    description:
      "A gentle pediatric dentistry case study helping a child achieve lifelong oral health in Bangalore.",
    keywords: [
      "pediatric dental case",
      "children dentistry Bangalore",
      "kids dental treatment",
      "child oral health",
    ],
  },
  familyDentalJourney: {
    title: "Family Dental Journey | Dr. Prem Kumar",
    description:
      "Follow a family's complete dental care journey with Dr. Prem Kumar in Bangalore, from prevention to transformation.",
    keywords: [
      "family dentist Bangalore",
      "family dental care",
      "family dentistry",
      "multi generational dental",
    ],
  },
  knowledgeCenterMicroscopicRootCanal: {
    title: "Microscopic Root Canal Guide | Dr. Prem Kumar",
    description:
      "An in-depth guide to microscopic root canal treatment, benefits, and recovery by Dr. Prem Kumar. Expert dental insights.",
    keywords: [
      "root canal guide",
      "microscopic RCT explained",
      "root canal recovery",
      "endodontic treatment guide",
    ],
  },
  knowledgeCenterDentalImplantGuide: {
    title: "Dental Implant Guide | Dr. Prem Kumar",
    description:
      "Everything you need to know about dental implants, procedure, and aftercare by Dr. Prem Kumar. Comprehensive implant guide.",
    keywords: [
      "dental implant guide",
      "implant procedure",
      "implant aftercare",
      "tooth replacement guide",
    ],
  },
  knowledgeCenterPediatricDentalCare: {
    title: "Pediatric Dental Care Guide | Dr. Prem Kumar",
    description:
      "Expert tips and guidance on pediatric dental care and healthy habits for children by Dr. Prem Kumar.",
    keywords: [
      "pediatric dental care tips",
      "children oral health",
      "kids dental guide",
      "child dental habits",
    ],
  },
  videosEducational: {
    title: "Educational Dental Videos | Dr. Prem Kumar",
    description:
      "Watch educational dental videos explaining microscopic dentistry and treatments by Dr. Prem Kumar.",
    keywords: [
      "dental education videos",
      "microscopic dentistry explained",
      "dental health videos",
      "oral care education",
    ],
  },
  videosPatientStories: {
    title: "Patient Stories | Dr. Prem Kumar",
    description:
      "Real patient stories and experiences with microscopic dentistry by Dr. Prem Kumar in Bangalore.",
    keywords: [
      "patient stories Bangalore",
      "dental testimonials video",
      "patient experience",
      "real dental stories",
    ],
  },
  videosProcedureDemos: {
    title: "Procedure Demonstrations | Dr. Prem Kumar",
    description:
      "Step-by-step dental procedure demonstrations by Dr. Prem Kumar using advanced technology.",
    keywords: [
      "dental procedure videos",
      "treatment demonstration",
      "procedure explained",
      "dental how to",
    ],
  },
  testimonials: {
    title: "Patient Testimonials | Microscopic Dentistry Bangalore",
    description:
      "Read what patients say about their experience with microscopic dentistry at Dr. Prem Kumar's clinic.",
    keywords: [
      "patient testimonials Bangalore",
      "dental reviews",
      "dentist reviews Bangalore",
      "patient feedback",
    ],
  },
  media: {
    title: "Media & Press | Microscopic Dentist Bangalore",
    description:
      "Dr. Prem Kumar featured in media, interviews, and educational content about dental health.",
    keywords: [
      "dental media Bangalore",
      "dentist press",
      "dental interviews",
      "dr prem kumar media",
    ],
  },
  locationsAttur: {
    title: "Dentist in Attur Yelahanka Bangalore | Dr. Prem Kumar Dental Clinic",
    description:
      "Dr. Prem Kumar's flagship dental clinic in Attur Layout, Yelahanka, Bangalore. Microscopic dentistry, kids dental care, implants & more. Book: +91 81972 80019.",
    keywords: [
      "dentist in Attur",
      "dentist Attur Yelahanka Bangalore",
      "dental clinic Attur",
      "microscopic dentist Attur",
      "kids dentist Attur",
    ],
  },
  locationsYelahanka: {
    title: "Dentist in Yelahanka Bangalore | Dr. Prem Kumar Dental Clinic",
    description:
      "Looking for a dentist in Yelahanka? Visit Dr. Prem Kumar's clinic for full dental services including implants, laser & microscopic dentistry. 4.9★ rated.",
    keywords: [
      "dentist Yelahanka",
      "dental clinic Yelahanka Bangalore",
      "microscopic dentist Yelahanka",
      "best dentist Yelahanka New Town",
      "pediatric dentist Yelahanka",
    ],
  },
  locationsHebbal: {
    title: "Dentist near Hebbal Bangalore | Dr. Prem Kumar Dental Clinic",
    description:
      "Looking for a dentist near Hebbal? Dr. Prem Kumar's Attur–Yelahanka clinic is a short drive from Hebbal. Microscopic RCT, implants, kids dentistry. Book today.",
    keywords: [
      "dentist near Hebbal",
      "dentist Hebbal Bangalore",
      "pediatric dentist Hebbal",
      "microscopic dentist near Hebbal",
      "root canal near Hebbal",
    ],
  },
  locationsDodballapur: {
    title: "Dentist near Doddaballapur | Dr. Prem Kumar Bangalore",
    description:
      "Microscopic dental care for Doddaballapur families. Pediatric dentistry, RCT & implants at Dr. Prem Kumar's Attur–Yelahanka clinic in North Bangalore.",
    keywords: [
      "dentist near Doddaballapur",
      "dentist Dodballapur Bangalore",
      "pediatric dentist Doddaballapur",
      "root canal Doddaballapur",
      "dental clinic near Dodballapur",
    ],
  },
  faq: {
    title: "FAQ | Microscopic Dentistry Bangalore",
    description:
      "Frequently asked questions about microscopic dentistry, treatments, costs, and recovery.",
    keywords: [
      "dental FAQ Bangalore",
      "microscopic dentistry questions",
      "root canal FAQ",
      "dental implant FAQ",
    ],
  },
};
export function generateBreadcrumbList(items: { name: string; href: string }[]) {
  return BreadcrumbSchema(items);
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return ServiceSchema(service);
}

export function generateReviewSchema(review: {
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  itemReviewed: { name: string; author: string };
}) {
  return ReviewSchema(review);
}

export function generateVideoSchema(video: {
  name: string;
  description: string;
  thumbnailUrl: string;
  uploadDate: string;
  contentUrl: string;
}) {
  return VideoObjectSchema(video);
}

export function generateImageSchema(image: {
  name: string;
  description: string;
  contentUrl: string;
  thumbnailUrl: string;
}) {
  return ImageObjectSchema(image);
}

export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  return FAQSchema(faqs);
}

export function generateAppointmentSchema() {
  return AppointmentSchema();
}

export function generateSpeakableSchema(selectors: string[]) {
  return SpeakableSchema(selectors);
}

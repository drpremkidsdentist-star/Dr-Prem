import { Metadata } from "next";
import {
  BreadcrumbSchema,
  ServiceSchema,
  VideoObjectSchema,
  ImageObjectSchema,
  FAQSchema,
  AppointmentSchema,
  SpeakableSchema,
} from "./schemas";

export const defaultMetadata: Metadata = {
  metadataBase: new URL("https://drpremkumar.in"),
  title: {
    default: "Dr. Prem Kumar R | Pediatric & Microscopic Dentist, Yelahanka Bengaluru",
    template: "%s | Dr. Prem Kumar R – Bengaluru",
  },
  description:
    "MDS Pediatric & Preventive Dentist practising microscope-assisted root canal and children's dentistry at Kumar's Microscopic Dental Care, Yelahanka New Town.",
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
    url: "https://drpremkumar.in",
    siteName: "Dr. Prem Kumar R - Microscopic Dentist Bengaluru",
    title: "Dr. Prem Kumar R | Pediatric & Microscopic Dentist, Yelahanka Bengaluru",
    description:
      "Microscope-assisted root canal and children's dentistry at Kumar's Microscopic Dental Care, Yelahanka New Town by Dr. Prem Kumar R, MDS.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prem Kumar R - Pediatric & Microscopic Dentist Bengaluru",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Prem Kumar R | Pediatric & Microscopic Dentist, Yelahanka Bengaluru",
    description:
      "Microscope-assisted root canal and children's dentistry at Kumar's Microscopic Dental Care, Yelahanka New Town by Dr. Prem Kumar R, MDS.",
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
    title: "Dr. Prem Kumar R | Pediatric & Microscopic Dentist, Yelahanka Bengaluru",
    description:
      "MDS Pediatric & Preventive Dentist practising microscope-assisted root canal and children's dentistry at Kumar's Microscopic Dental Care, Yelahanka New Town.",
  },
  about: {
    title: "About Dr. Prem Kumar R | Pediatric & Microscopic Dentist Bengaluru",
    description:
      "Meet Dr. Prem Kumar R – MDS Pediatric & Preventive Dentistry (KSDC 47094 A), former faculty at Ramaiah Dental College. Specialist in microscopic dentistry at Attur, Yelahanka.",
  },
  microscopicDentistry: {
    title: "Microscopic Dentistry in Bengaluru | Surgical Operating Precision | Dr. Prem Kumar R",
    description:
      "Microscopic dentistry in Bengaluru by Dr. Prem Kumar R. Surgical operating microscopes for root canals, restorations and pediatric care.",
  },
  technology: {
    title: "Dental Technology Bengaluru | Dr. Prem Kumar R",
    description:
      "Dental technology including operating microscopes, digital imaging, and laser systems at Dr. Prem Kumar R's Bengaluru clinic.",
  },
  patientJourney: {
    title: "Patient Journey | Dr. Prem Kumar Dental Clinic Bengaluru",
    description:
      "From consultation to treatment completion – explore the patient journey at Dr. Prem Kumar's microscopic dentistry clinic in Attur, Yelahanka.",
  },
  education: {
    title: "Clinical Education & Private Dental Mentorship | Dr. Prem Kumar R",
    description:
      "Private clinical mentorship and hands-on workshops in microscopic endodontics and pediatric dentistry by Dr. Prem Kumar R (Former Asst. Professor, Ramaiah Dental College).",
  },
  knowledgeCenter: {
    title: "Dental Health Guides & Articles | Dr. Prem Kumar Bengaluru",
    description:
      "Clinical articles, guides and explanations on microscopic dentistry, pediatric oral health, root canals, and tooth preservation by Dr. Prem Kumar R, Bengaluru.",
  },
  awards: {
    title: "Academic Background & Certifications | Dr. Prem Kumar | Bengaluru",
    description:
      "Dr. Prem Kumar's certifications, academic contributions, and professional affiliations in microscopic dentistry and pediatric dental care.",
  },
  videos: {
    title: "Dental Videos | Procedures Explained | Dr. Prem Kumar Bengaluru",
    description:
      "Educational videos and procedure demonstrations by Dr. Prem Kumar R, microscopic dentist in Bengaluru.",
  },
  contact: {
    title: "Contact Dr. Prem Kumar | Dental Clinic Attur Yelahanka Bengaluru",
    description:
      "Contact Dr. Prem Kumar's dental clinic in Attur, Yelahanka, Bengaluru. Call +91 81972 80019 or book online. Serving Yelahanka, Hebbal & North Bengaluru.",
  },
  locations: {
    title: "Clinic Locations & Service Areas | Dr. Prem Kumar Dental Clinic Bengaluru",
    description:
      "Find Dr. Prem Kumar's dental practice in Attur, Yelahanka New Town, Bengaluru. Serving North Bengaluru families with microscopic dental care.",
  },
  bookAppointment: {
    title: "Book an Appointment with Dr. Prem Kumar R | Bengaluru",
    description:
      "Book an appointment with Dr. Prem Kumar R for microscopic root canal or pediatric dental care in Attur, Yelahanka, Bengaluru. Call +91 81972 80019.",
  },
  aboutDrPremKumar: {
    title: "Dr. Prem Kumar R | Pediatric & Microscopic Dentist Bengaluru",
    description:
      "Qualifications, experience, and clinical approach of Dr. Prem Kumar R, MDS (Pediatric & Preventive Dentistry, KSDC 47094 A).",
  },
  services: {
    title: "Dental Services | Dr. Prem Kumar R Bengaluru",
    description:
      "Specialist dental services including microscopic root canal treatment, pediatric dentistry, dental implants, smile design, and laser dentistry in Bengaluru.",
  },
  microscopicRootCanal: {
    title: "Microscopic Root Canal Treatment Bengaluru | Dr. Prem Kumar R",
    description:
      "Microscope-assisted root canal treatment (RCT) by Dr. Prem Kumar R in Bengaluru. Surgical microscope technique, calcified canal scouting, and tooth preservation.",
  },
  dentalImplants: {
    title: "Dental Implants Yelahanka & Attur Bengaluru | Dr. Prem Kumar R",
    description:
      "Natural-looking dental implants at Dr. Prem Kumar R's practice in Attur, Yelahanka, Bengaluru. CBCT-planned tooth replacement.",
  },
  smileDesign: {
    title: "Smile Design & Clear Aligners | Dr. Prem Kumar R Bengaluru",
    description:
      "Smile design consultations, clear aligners, and aesthetic restorations in Bengaluru by Dr. Prem Kumar R.",
  },
  pediatricDentistry: {
    title: "Pediatric Dentist in Yelahanka, Bengaluru | Dr. Prem Kumar R, MDS",
    description:
      "Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry, KSDC 47094 A) treats children at Kumar's Microscopic Dental Care, Attur Main Road, Yelahanka New Town. Call +91 81972 80019.",
  },
  cosmeticDentistry: {
    title: "Cosmetic Dentistry & Aesthetic Restorations | Dr. Prem Kumar Bengaluru",
    description:
      "Cosmetic dental treatments, porcelain veneers, teeth whitening, and aesthetic bonding in Bengaluru with Dr. Prem Kumar R.",
  },
  laserDentistry: {
    title: "Laser Dentistry | Dr. Prem Kumar Bengaluru",
    description:
      "Minimally invasive laser dentistry for comfortable, precise soft-tissue dental procedures in Bengaluru.",
  },
  preventiveCare: {
    title: "Preventive Dental Care | Dr. Prem Kumar Bengaluru",
    description:
      "Preventive dental care including cleanings, checkups, fluoride varnish, and pit and fissure sealants in Bengaluru.",
  },
  cases: {
    title: "Clinical Cases | Microscopic Dentistry Bengaluru",
    description:
      "Clinical case records and documentation of microscope-assisted dental treatments by Dr. Prem Kumar R in Bengaluru.",
  },
  microscopicRctTransformation: {
    title: "Microscopic RCT Case Record | Dr. Prem Kumar",
    description:
      "Documentation of microscopic root canal treatment and canal preservation with precision optics in Bengaluru.",
  },
  implantMakeover: {
    title: "Dental Implant Clinical Case | Dr. Prem Kumar",
    description:
      "Smile restoration case documentation with dental implants by Dr. Prem Kumar R in Bengaluru.",
  },
  smileDesignBeforeAfter: {
    title: "Smile Design Case Overview | Dr. Prem Kumar",
    description:
      "Cosmetic and restorative smile design clinical case overview in Bengaluru.",
  },
  pediatricDentalCareCase: {
    title: "Pediatric Dental Care Case Study | Dr. Prem Kumar",
    description:
      "Pediatric dental case documentation on child dental health and preventive treatment in Bengaluru.",
  },
  familyDentalJourney: {
    title: "Family Dental Care Case Overview | Dr. Prem Kumar",
    description:
      "Case overview of comprehensive family dental care with Dr. Prem Kumar R in Bengaluru.",
  },
  knowledgeCenterMicroscopicRootCanal: {
    title: "Microscopic Root Canal Guide | Dr. Prem Kumar",
    description:
      "Clinical guide to microscopic root canal treatment, procedure steps, and recovery by Dr. Prem Kumar R.",
  },
  knowledgeCenterDentalImplantGuide: {
    title: "Dental Implant Guide | Dr. Prem Kumar",
    description:
      "Information on dental implants, candidacy, procedure steps, and maintenance by Dr. Prem Kumar R.",
  },
  knowledgeCenterPediatricDentalCare: {
    title: "Pediatric Dental Care Guide | Dr. Prem Kumar",
    description:
      "Pediatric dental guidance, early oral hygiene habits, and preventive dental care for children by Dr. Prem Kumar R.",
  },
  videosEducational: {
    title: "Educational Dental Videos | Dr. Prem Kumar",
    description:
      "Educational dental videos explaining microscopic dentistry and oral health procedures by Dr. Prem Kumar R.",
  },
  videosPatientStories: {
    title: "Patient Experiences | Dr. Prem Kumar",
    description:
      "Patient experiences and treatment journey with microscopic dentistry by Dr. Prem Kumar R in Bengaluru.",
  },
  videosProcedureDemos: {
    title: "Procedure Demonstrations | Dr. Prem Kumar",
    description:
      "Step-by-step dental procedure demonstrations by Dr. Prem Kumar R using surgical operating microscopes.",
  },
  testimonials: {
    title: "Patient Experiences | Microscopic Dentistry Bengaluru",
    description:
      "Patient accounts and experiences with dental care at Dr. Prem Kumar R's practice in Yelahanka, Bengaluru.",
  },
  media: {
    title: "Media & Academic Features | Dr. Prem Kumar Bengaluru",
    description:
      "Dr. Prem Kumar R featured in professional publications, academic lectures, and dental health educational content.",
  },
  locationsAttur: {
    title: "Dentist in Attur Yelahanka Bengaluru | Dr. Prem Kumar Dental Clinic",
    description:
      "Dr. Prem Kumar's dental practice in Attur Layout, Yelahanka, Bengaluru. Microscopic dentistry, kids dental care, implants and RCT. Call +91 81972 80019.",
  },
  locationsYelahanka: {
    title: "Dentist in Yelahanka Bengaluru | Dr. Prem Kumar Dental Clinic",
    description:
      "Dental care in Yelahanka New Town with Dr. Prem Kumar R. Comprehensive services including microscopic RCT, pediatric dentistry, and implants.",
  },
  locationsHebbal: {
    title: "Dentist near Hebbal Bengaluru | Dr. Prem Kumar Dental Clinic",
    description:
      "Dental care for Hebbal residents at Dr. Prem Kumar's Attur–Yelahanka clinic. Microscopic RCT, implants, and pediatric dentistry.",
  },
  locationsDodballapur: {
    title: "Dentist near Doddaballapur | Dr. Prem Kumar Bengaluru",
    description:
      "Dental care for Doddaballapur families. Pediatric dentistry, RCT & implants at Dr. Prem Kumar's Attur–Yelahanka clinic.",
  },
  faq: {
    title: "Frequently Asked Questions | Dr. Prem Kumar Bengaluru",
    description:
      "Answers to common questions about microscopic dentistry, root canal treatments, pediatric care, and appointments.",
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

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
    default: "Dr. Prem Kumar | Microscopic Dentist Bangalore | Premium Dental Care",
    template: "%s | Dr. Prem Kumar - Bangalore",
  },
  description:
    "Dr. Prem Kumar is Bangalore's most trusted microscopic dentist specializing in microscopic dentistry, pediatric dentistry, root canal treatment, smile design, and dental implants. Experience world-class dental care with advanced technology.",
  keywords: [
    "microscopic dentist Bangalore",
    "Dr. Prem Kumar dentist",
    "premium dental care Bangalore",
    "microscopic dentistry India",
    "pediatric dentist Bangalore",
    "root canal treatment Bangalore",
    "dental implants Bangalore",
    "smile design Bangalore",
    "best dentist in Bangalore",
    "microscope dentistry",
    "laser dentistry Bangalore",
    "cosmetic dentistry Bangalore",
    "dental clinic Bangalore",
    "dentist in Attur",
    "dentist in Yelahanka",
    "dentist near Hebbal",
    "dentist near Doddaballapur",
    "dentist Dodballapur",
    "kids dentist Yelahanka Attur",
    "family dentist North Bangalore",
  ],
  authors: [{ name: "Dr. Prem Kumar" }],
  creator: "Dr. Prem Kumar",
  publisher: "Dr. Prem Kumar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "Healthcare",
  classification: "Dental Care",
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
    siteName: "Dr. Prem Kumar - Microscopic Dentist Bangalore",
    title: "Dr. Prem Kumar | Microscopic Dentist Bangalore | Premium Dental Care",
    description:
      "Experience world-class microscopic dentistry in Bangalore. Dr. Prem Kumar specializes in advanced dental treatments with cutting-edge technology.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prem Kumar - Microscopic Dentist Bangalore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Prem Kumar | Microscopic Dentist Bangalore",
    description:
      "Experience world-class microscopic dentistry in Bangalore with Dr. Prem Kumar.",
    images: ["/images/twitter-image.jpg"],
    creator: "@drpremkumar",
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
    title: "Dr. Prem Kumar | Microscopic Dentist Bangalore",
    description: "World-class microscopic dentistry in Bangalore. Advanced technology, premium care.",
  },
  about: {
    title: "About Dr. Prem Kumar | Microscopic Dentist Bangalore",
    description: "Learn about Dr. Prem Kumar's qualifications, experience, and commitment to microscopic dentistry.",
  },
  microscopicDentistry: {
    title: "Microscopic Dentistry Bangalore | Dr. Prem Kumar",
    description: "Discover the future of dentistry with microscopic dentistry. Precision, accuracy, and superior outcomes.",
  },
  technology: {
    title: "Advanced Dental Technology Bangalore | Dr. Prem Kumar",
    description: "Experience cutting-edge dental technology including operating microscopes, CBCT, and digital imaging.",
  },
  patientJourney: {
    title: "Patient Journey | Microscopic Dentistry Bangalore",
    description: "Your journey to a perfect smile with Dr. Prem Kumar. From consultation to transformation.",
  },
  smileGallery: {
    title: "Smile Gallery | Microscopic Dentistry Transformations",
    description: "View real patient transformations and smile makeovers by Dr. Prem Kumar in Bangalore.",
  },
  knowledgeCenter: {
    title: "Knowledge Center | Microscopic Dentistry Insights Bangalore",
    description: "Expert insights, articles, and educational content about microscopic and pediatric dentistry.",
  },
  awards: {
    title: "Awards & Recognition | Microscopic Dentist Bangalore",
    description: "Dr. Prem Kumar's awards, certifications, and recognition in the field of microscopic dentistry.",
  },
  videos: {
    title: "Videos | Microscopic Dentist Bangalore",
    description:
      "Watch educational videos, patient testimonials, and procedure demonstrations by Dr. Prem Kumar.",
  },
  contact: {
    title: "Contact Us | Microscopic Dentist Bangalore",
    description:
      "Get in touch with Dr. Prem Kumar's dental clinic in Bangalore for appointments and inquiries.",
  },
  locations: {
    title: "Locations | Microscopic Dentist Bangalore",
    description:
      "Visit Dr. Prem Kumar's dental clinics in Bangalore. Find our locations and book your appointment today.",
  },
  bookAppointment: {
    title: "Book Appointment | Microscopic Dentist Bangalore",
    description:
      "Schedule your appointment with Dr. Prem Kumar for premium microscopic dental care in Bangalore.",
  },
  aboutDrPremKumar: {
    title: "About Dr. Prem Kumar | Microscopic Dentist Bangalore",
    description:
      "Meet Dr. Prem Kumar, Bangalore's trusted microscopic dentist. Discover his qualifications, experience, and passion for precision dental care.",
    keywords: [
      "Dr. Prem Kumar dentist",
      "microscopic dentist Bangalore",
      "best dentist Bangalore",
      "dental specialist Bangalore",
      "premium dental care",
    ],
  },
  services: {
    title: "Dental Services | Microscopic Dentist Bangalore",
    description:
      "Comprehensive dental services including root canal treatment, dental implants, smile design, pediatric dentistry, cosmetic dentistry, and laser dentistry in Bangalore.",
    keywords: [
      "dental services Bangalore",
      "microscopic root canal",
      "dental implants Bangalore",
      "smile design Bangalore",
      "pediatric dentist Bangalore",
      "cosmetic dentistry Bangalore",
      "laser dentistry Bangalore",
    ],
  },
  microscopicRootCanal: {
    title: "Microscopic Root Canal Treatment | Dr. Prem Kumar Bangalore",
    description:
      "Painless microscopic root canal treatment with precision and superior outcomes in Bangalore. Save your natural tooth with advanced technology.",
    keywords: [
      "microscopic root canal Bangalore",
      "painless root canal",
      "root canal treatment Bangalore",
      "RCT Bangalore",
      "endodontist Bangalore",
    ],
  },
  dentalImplants: {
    title: "Dental Implants | Dr. Prem Kumar Bangalore",
    description:
      "Advanced dental implants for permanent tooth replacement with microscopic precision in Bangalore. Restore your smile with confidence.",
    keywords: [
      "dental implants Bangalore",
      "tooth implant Bangalore",
      "permanent tooth replacement",
      "implant dentist Bangalore",
      "full mouth implants",
    ],
  },
  smileDesign: {
    title: "Smile Design | Dr. Prem Kumar Bangalore",
    description:
      "Custom smile design and makeovers to enhance your smile with advanced cosmetic dentistry in Bangalore. Digital smile preview included.",
    keywords: [
      "smile design Bangalore",
      "smile makeover Bangalore",
      "cosmetic dentistry",
      "veneers Bangalore",
      "digital smile design",
    ],
  },
  pediatricDentistry: {
    title: "Pediatric Dentistry | Dr. Prem Kumar Bangalore",
    description:
      "Gentle and specialized pediatric dentistry for children in a comfortable, kid-friendly environment in Bangalore. Build lifelong healthy habits.",
    keywords: [
      "pediatric dentist Bangalore",
      "children dentist Bangalore",
      "kids dental care",
      "child friendly dentist",
      "family dentist Bangalore",
    ],
  },
  cosmeticDentistry: {
    title: "Cosmetic Dentistry | Dr. Prem Kumar Bangalore",
    description:
      "Transform your smile with cosmetic dentistry including veneers, whitening, and aesthetic treatments in Bangalore.",
    keywords: [
      "cosmetic dentistry Bangalore",
      "teeth whitening Bangalore",
      "dental veneers Bangalore",
      "smile correction",
      "aesthetic dentistry",
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
  locationsYelahanka: {
    title: "Dr. Prem Kumar Dental Clinic Yelahanka | Bangalore",
    description:
      "Visit Dr. Prem Kumar's dental clinic in Yelahanka, Bangalore for premium microscopic dental care. Book your appointment today.",
    keywords: [
      "dentist Yelahanka",
      "dental clinic Yelahanka Bangalore",
      "microscopic dentist Yelahanka",
      "Yelahanka dental care",
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

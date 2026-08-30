import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { defaultMetadata, pageMetadata } from "@/lib/metadata";
import {
  DentistSchema,
  MedicalBusinessSchema,
  OrganizationSchema,
  WebSiteSchema,
  FAQSchema,
  RootEntityGraphSchema,
} from "@/lib/schemas";
import { areaServedCities } from "@/lib/serviceAreas";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Toaster } from "@/components/ui/sonner";
import { clinicContact } from "@/lib/siteAssets";

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  ...defaultMetadata,
  title: pageMetadata.home.title,
  description: pageMetadata.home.description,
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const clinicData = {
  name: "Kumar's Microscopic Dental Care | Dr. Prem Kumar R",
  description:
    "Specialist pediatric & microscopic dental care in Attur Main Road, Yelahanka New Town, Bangalore. Led by Dr. Prem Kumar R, MDS Pediatric & Preventive Dentistry.",
  image: "https://www.drpremkumar.in/images/dr-prem-kumar.jpg",
  url: "https://www.drpremkumar.in",
  telephone: clinicContact.phoneTel,
  address: {
    streetAddress: clinicContact.locations.attur.streetAddress,
    addressLocality: clinicContact.locations.attur.addressLocality,
    addressRegion: clinicContact.locations.attur.addressRegion,
    postalCode: clinicContact.locations.attur.postalCode,
    addressCountry: clinicContact.locations.attur.addressCountry,
  },
  geo: clinicContact.locations.attur.geo,
  openingHours: ["Mo-Sa 10:00-21:00", "Su 10:00-18:00"],
  priceRange: "₹₹₹",
  sameAs: [clinicContact.googleMapsUrl],
  areaServed: areaServedCities as unknown as string[],
  aggregateRating: {
    ratingValue: clinicContact.googleRating,
    reviewCount: "250",
  },
};

const faqs = [
  {
    question: "What is microscopic dentistry?",
    answer:
      "Microscopic dentistry uses advanced surgical operating microscopes to perform dental procedures with extreme precision. This allows for high-definition visualization, accurate micro-treatments, minimal invasiveness, and superior patient outcomes compared to traditional naked-eye dentistry.",
  },
  {
    question: "Is microscopic dentistry more expensive than traditional dentistry?",
    answer:
      "While microscopic dentistry involves specialized surgical optics, it often results in fewer complications, long-term tooth preservation, and less need for retreatment, providing excellent long-term clinical value.",
  },
  {
    question: "What age should children start visiting the dentist?",
    answer:
      "Children should visit the dentist by their first birthday or within six months of their first tooth appearing. Dr. Prem Kumar R provides gentle, fear-free pediatric consultations to ensure healthy dental development.",
  },
  {
    question: "How long does a root canal treatment take with Dr. Prem Kumar R?",
    answer:
      "With microscopic dentistry, most root canal treatments can be completed smoothly in 60–90 minutes, often in a single visit. The precision of the dental operating microscope allows for accurate canal location and disinfection.",
  },
  {
    question: "Are dental implants painful?",
    answer:
      "Dental implant procedures are performed under local anesthesia and are generally well-tolerated. Post-operative discomfort is minimal and manageable with standard care.",
  },
  {
    question: "Where is Dr. Prem Kumar R's dental clinic located?",
    answer:
      "The clinic is located at No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore – 560064, serving patients across North Bangalore and Bengaluru. Call +91 81972 80019 to book.",
  },
  {
    question: "What services does Dr. Prem Kumar R offer?",
    answer:
      "We offer comprehensive dental services including pediatric dentistry, microscopic root canal treatment (RCT), dental implants, cosmetic smile design, laser dentistry, and preventive care — all performed with microscopic precision.",
  },
  {
    question: "Is laser dentistry safe for children?",
    answer:
      "Yes, soft-tissue laser dentistry is safe, minimally invasive, and often preferred for children as it reduces discomfort, bleeding, and healing time compared to conventional surgical instruments.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchemas = [
    RootEntityGraphSchema(areaServedCities),
    DentistSchema(clinicData),
    MedicalBusinessSchema(clinicData),
    OrganizationSchema({
      name: "Dr. Prem Kumar Dental Clinic",
      description: clinicData.description,
      url: clinicData.url,
      logo: "https://www.drpremkumar.in/logo.png",
      image: clinicData.image,
      address: clinicData.address,
      contactPoint: [
        { telephone: clinicData.telephone, contactType: "Appointment Booking" },
      ],
      sameAs: clinicData.sameAs,
      aggregateRating: clinicData.aggregateRating,
    }),
    WebSiteSchema({
      name: "Dr. Prem Kumar - Microscopic Dentist Bangalore",
      url: clinicData.url,
      description: clinicData.description,
      publisher: "Dr. Prem Kumar",
    }),
    FAQSchema(faqs),
  ];

  return (
    <html lang="en-IN" className="font-sans">
      <head>
        {/* Geo meta tags — Indian local SEO signals */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka, India" />
        <meta name="geo.position" content="13.1016;77.5702" />
        <meta name="ICBM" content="13.1016, 77.5702" />
        <link rel="manifest" href="/manifest.json" />
        {/* JSON-LD Structured Data */}
        {jsonLdSchemas.map((schema, index) => (
          <Script
            key={index}
            id={`schema-${index}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
          />
        ))}
      </head>
      <body className="font-sans antialiased">
        <SmoothScrollProvider>
          <Header />
          <main id="main-content" className="relative">
            {children}
          </main>
          <Footer />
          <Toaster position="top-center" richColors />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import { Instrument_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { defaultMetadata, pageMetadata } from "@/lib/metadata";
import {
  DentistSchema,
  MedicalBusinessSchema,
  OrganizationSchema,
  WebSiteSchema,
  FAQSchema,
} from "@/lib/schemas";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { clinicContact } from "@/lib/siteAssets";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0A2540",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
  name: "Dr. Prem Kumar Dental Clinic",
  description:
    "Premium microscopic dental care in Attur, Yelahanka, Bangalore — serving Hebbal, Doddaballapur, and families across Bengaluru. Pediatric dentistry and microscopic RCT.",
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
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 10:00-18:00", "Su 10:00-14:00"],
  priceRange: "₹₹₹",
  sameAs: [clinicContact.googleMapsUrl],
  areaServed: [
    "Attur",
    "Yelahanka",
    "Hebbal",
    "Doddaballapur",
    "Bangalore",
    "Bengaluru",
  ],
  aggregateRating: {
    ratingValue: clinicContact.googleRating,
    reviewCount: "250",
  },
};

const faqs = [
  {
    question: "What is microscopic dentistry?",
    answer:
      "Microscopic dentistry uses advanced surgical microscopes to perform dental procedures with extreme precision. This allows for better visualization, more accurate treatments, and superior patient outcomes.",
  },
  {
    question: "Is microscopic dentistry more expensive?",
    answer:
      "While microscopic dentistry may have a slightly higher initial cost, it often results in fewer complications, less need for retreatment, and long-term cost savings due to the precision and accuracy of the procedures.",
  },
  {
    question: "What age should children start visiting the dentist?",
    answer:
      "Children should visit the dentist by their first birthday or within six months of their first tooth appearing. Early dental visits help prevent cavities and establish good oral hygiene habits.",
  },
  {
    question: "How long does a root canal treatment take?",
    answer:
      "A root canal treatment typically takes 60-90 minutes per visit. With microscopic dentistry, Dr. Prem Kumar can often complete the procedure in a single visit with higher accuracy.",
  },
  {
    question: "Are dental implants painful?",
    answer:
      "Dental implant procedures are performed under local anesthesia and are generally well-tolerated. Post-operative discomfort is usually minimal and can be managed with prescribed medication.",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLdSchemas = [
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
    <html
      lang="en"
      className={cn(instrumentSans.variable, fraunces.variable, "font-sans")}
    >
      <head>
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

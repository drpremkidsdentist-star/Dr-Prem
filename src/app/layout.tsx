import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "@/styles/globals.css";
import { defaultMetadata, pageMetadata } from "@/lib/metadata";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";
import { Toaster } from "@/components/ui/sonner";
import { GtmListeners } from "@/components/analytics/GtmListeners";

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

const sitewideJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Physician", "Person"],
      "@id": "https://drpremkumar.in/#doctor",
      "name": "Dr. Prem Kumar R",
      "honorificSuffix": "BDS, MDS",
      "jobTitle": "Pediatric & Preventive Dentist",
      "medicalSpecialty": ["Pediatric", "Dentistry"],
      "url": "https://drpremkumar.in/",
      "image": "https://drpremkumar.in/TO_FILL_doctor-photo.jpg",
      "telephone": "+918197280019",
      "alumniOf": [
        {
          "@type": "CollegeOrUniversity",
          "name": "Rajiv Gandhi University of Health Sciences",
        },
        {
          "@type": "CollegeOrUniversity",
          "name": "Ramaiah University of Applied Sciences",
        },
      ],
      "hasCredential": {
        "@type": "EducationalOccupationalCredential",
        "credentialCategory": "Registration",
        "recognizedBy": {
          "@type": "Organization",
          "name": "Karnataka State Dental Council",
        },
        "identifier": "47094 A",
      },
      "knowsAbout": [
        "Pediatric dentistry",
        "Microscopic root canal treatment",
        "Endodontics",
        "Behaviour guidance for children",
      ],
      "worksFor": {
        "@id": "https://kumarsdentistry.in/#clinic",
      },
      "sameAs": [
        "https://kumarsdentistry.in/doctors/dr-prem-kumar",
        "TO_FILL_practo_profile_url",
        "TO_FILL_lybrate_profile_url",
        "TO_FILL_linkedin_url",
      ],
    },
    {
      "@type": ["Dentist", "MedicalClinic"],
      "@id": "https://kumarsdentistry.in/#clinic",
      "name": "Kumar's Microscopic Dental Care",
      "url": "https://kumarsdentistry.in/",
    },
    {
      "@type": "WebSite",
      "@id": "https://drpremkumar.in/#website",
      "url": "https://drpremkumar.in/",
      "name": "Dr. Prem Kumar R",
      "about": {
        "@id": "https://drpremkumar.in/#doctor",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="font-sans">
      <head>
        {/* Geo meta tags */}
        <meta name="geo.region" content="IN-KA" />
        <meta name="geo.placename" content="Bangalore, Karnataka, India" />
        <meta name="geo.position" content="13.1016;77.5702" />
        <meta name="ICBM" content="13.1016, 77.5702" />
        <link rel="manifest" href="/manifest.json" />

        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TZLXF39X');`,
          }}
        />

        {/* Sitewide JSON-LD (Server-rendered, no aggregateRating/reviews) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(sitewideJsonLd),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {/* GTM noscript iframe right after body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TZLXF39X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <GtmListeners />
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

import { Metadata } from "next";
import Script from "next/script";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/lib/schemas";
import { clinicContact } from "@/lib/siteAssets";

const area = getServiceArea("attur")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/attur" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/attur",
    images: [
      {
        url: "/images/og-attur-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prem Kumar Dental Clinic – Attur, Yelahanka, Bangalore",
      },
    ],
  },
};

const localBusinessSchema = LocalBusinessSchema({
  name: "Dr. Prem Kumar Dental Clinic – Attur, Yelahanka",
  description:
    "Flagship microscopic dental clinic in Attur Layout, Yelahanka, Bangalore. Specialising in 30× microscopic dentistry, pediatric dentistry, root canal treatment, and dental implants.",
  image: "https://www.drpremkumar.in/images/og-attur-clinic.jpg",
  url: "https://www.drpremkumar.in/locations/attur",
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
  areaServed: ["Attur", "Yelahanka", "Hebbal", "Doddaballapur", "Bangalore"],
  sameAs: [clinicContact.googleMapsUrl],
  parentOrganization: {
    name: "Dr. Prem Kumar Dental Clinic",
    url: "https://www.drpremkumar.in",
  },
});

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Attur, Yelahanka", href: "/locations/attur" },
]);

export default function AtturLocationPage() {
  return (
    <>
      <Script
        id="schema-attur-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-attur-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceAreaView area={area} />
    </>
  );
}

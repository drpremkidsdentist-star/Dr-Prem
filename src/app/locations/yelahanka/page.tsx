import { Metadata } from "next";
import Script from "next/script";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/lib/schemas";
import { clinicContact } from "@/lib/siteAssets";

const area = getServiceArea("yelahanka")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/yelahanka" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/yelahanka",
    images: [
      {
        url: "/images/og-yelahanka-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prem Kumar Dental Clinic serving Yelahanka, Bangalore",
      },
    ],
  },
};

const localBusinessSchema = LocalBusinessSchema({
  name: "Dr. Prem Kumar Dental Clinic – Serving Yelahanka",
  description:
    "Microscopic dentist serving Yelahanka New Town and Yelahanka Junction from our Attur Layout clinic. Expert pediatric dentistry, root canals, and dental implants in North Bangalore.",
  image: "https://www.drpremkumar.in/images/og-yelahanka-clinic.jpg",
  url: "https://www.drpremkumar.in/locations/yelahanka",
  telephone: clinicContact.phoneTel,
  address: {
    streetAddress: clinicContact.locations.yelahanka.streetAddress,
    addressLocality: clinicContact.locations.yelahanka.addressLocality,
    addressRegion: clinicContact.locations.yelahanka.addressRegion,
    postalCode: clinicContact.locations.yelahanka.postalCode,
    addressCountry: clinicContact.locations.yelahanka.addressCountry,
  },
  geo: clinicContact.locations.yelahanka.geo,
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 10:00-18:00", "Su 10:00-14:00"],
  priceRange: "₹₹₹",
  areaServed: ["Yelahanka", "Yelahanka New Town", "Attur", "Hebbal", "Bangalore"],
  sameAs: [clinicContact.googleMapsUrl],
  parentOrganization: {
    name: "Dr. Prem Kumar Dental Clinic",
    url: "https://www.drpremkumar.in",
  },
});

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Yelahanka", href: "/locations/yelahanka" },
]);

export default function YelahankaLocationPage() {
  return (
    <>
      <Script
        id="schema-yelahanka-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-yelahanka-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceAreaView area={area} />
    </>
  );
}

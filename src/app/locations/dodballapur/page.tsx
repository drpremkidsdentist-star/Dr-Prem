import { Metadata } from "next";
import Script from "next/script";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/lib/schemas";
import { clinicContact } from "@/lib/siteAssets";

const area = getServiceArea("dodballapur")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/dodballapur" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/dodballapur",
    images: [
      {
        url: "/images/og-dodballapur-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prem Kumar Dental Clinic near Doddaballapur, Bangalore",
      },
    ],
  },
};

const localBusinessSchema = LocalBusinessSchema({
  name: "Dr. Prem Kumar Dental Clinic – Near Doddaballapur",
  description:
    "Microscopic dental care for Doddaballapur (Dodballapur) and NH-44 corridor families. Expert pediatric dentistry, root canal treatment, and dental implants at our Attur–Yelahanka clinic in North Bangalore.",
  image: "https://www.drpremkumar.in/images/og-dodballapur-clinic.jpg",
  url: "https://www.drpremkumar.in/locations/dodballapur",
  telephone: clinicContact.phoneTel,
  address: {
    streetAddress: clinicContact.locations.attur.streetAddress,
    addressLocality: clinicContact.locations.attur.addressLocality,
    addressRegion: clinicContact.locations.attur.addressRegion,
    postalCode: clinicContact.locations.attur.postalCode,
    addressCountry: clinicContact.locations.attur.addressCountry,
  },
  geo: clinicContact.locations.dodballapur.geo,
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 10:00-18:00", "Su 10:00-14:00"],
  priceRange: "₹₹₹",
  areaServed: ["Doddaballapur", "Dodballapur", "North Bangalore", "Attur", "Yelahanka", "Bangalore"],
  sameAs: [clinicContact.googleMapsUrl],
  parentOrganization: {
    name: "Dr. Prem Kumar Dental Clinic",
    url: "https://www.drpremkumar.in",
  },
});

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Doddaballapur", href: "/locations/dodballapur" },
]);

export default function DodballapurLocationPage() {
  return (
    <>
      <Script
        id="schema-dodballapur-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-dodballapur-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceAreaView area={area} />
    </>
  );
}

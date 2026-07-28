import { Metadata } from "next";
import Script from "next/script";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea } from "@/lib/serviceAreas";
import { LocalBusinessSchema, BreadcrumbSchema } from "@/lib/schemas";
import { clinicContact } from "@/lib/siteAssets";

const area = getServiceArea("hebbal")!;

export const metadata: Metadata = {
  title: area.title,
  description: area.description,
  keywords: area.keywords,
  alternates: { canonical: "/locations/hebbal" },
  openGraph: {
    title: area.title,
    description: area.description,
    url: "https://www.drpremkumar.in/locations/hebbal",
    images: [
      {
        url: "/images/og-hebbal-clinic.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Prem Kumar Dental Clinic near Hebbal, Bangalore",
      },
    ],
  },
};

const localBusinessSchema = LocalBusinessSchema({
  name: "Dr. Prem Kumar Dental Clinic – Near Hebbal",
  description:
    "Microscopic dental clinic serving patients from Hebbal and Outer Ring Road area. Expert pediatric dentistry, root canal treatment, and dental implants at our Attur–Yelahanka clinic.",
  image: "https://www.drpremkumar.in/images/og-hebbal-clinic.jpg",
  url: "https://www.drpremkumar.in/locations/hebbal",
  telephone: clinicContact.phoneTel,
  address: {
    streetAddress: clinicContact.locations.attur.streetAddress,
    addressLocality: clinicContact.locations.attur.addressLocality,
    addressRegion: clinicContact.locations.attur.addressRegion,
    postalCode: clinicContact.locations.attur.postalCode,
    addressCountry: clinicContact.locations.attur.addressCountry,
  },
  geo: clinicContact.locations.hebbal.geo,
  openingHours: ["Mo-Fr 09:00-20:00", "Sa 10:00-18:00", "Su 10:00-14:00"],
  priceRange: "₹₹₹",
  areaServed: ["Hebbal", "Outer Ring Road", "Attur", "Yelahanka", "Bangalore"],
  sameAs: [clinicContact.googleMapsUrl],
  parentOrganization: {
    name: "Dr. Prem Kumar Dental Clinic",
    url: "https://www.drpremkumar.in",
  },
});

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Locations", href: "/locations" },
  { name: "Hebbal", href: "/locations/hebbal" },
]);

export default function HebbalLocationPage() {
  return (
    <>
      <Script
        id="schema-hebbal-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id="schema-hebbal-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceAreaView area={area} />
    </>
  );
}

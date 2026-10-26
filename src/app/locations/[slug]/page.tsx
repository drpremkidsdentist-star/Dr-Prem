import { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Script from "next/script";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea, serviceAreas } from "@/lib/serviceAreas";
import { BreadcrumbSchema } from "@/lib/schemas";

interface PageProps {
  params: { slug: string };
}

const clinicLocationMap: Record<string, string> = {
  attur: "https://kumarsdentistry.in/locations/attur",
  yelahanka: "https://kumarsdentistry.in/locations/yelahanka",
  vidyaranyapura: "https://kumarsdentistry.in/locations/vidyaranyapura",
  jakkur: "https://kumarsdentistry.in/locations/jakkur",
  hebbal: "https://kumarsdentistry.in/locations/hebbal",
  thanisandra: "https://kumarsdentistry.in/locations/thanisandra",
  "rt-nagar": "https://kumarsdentistry.in/locations/rt-nagar",
  "sahakara-nagar": "https://kumarsdentistry.in/locations/sahakar-nagar",
};

const redirectedSlugs = ["kogilu", "kodigehalli", "devanahalli", "doddaballapur"];

export function generateStaticParams() {
  return serviceAreas
    .filter((area) => !redirectedSlugs.includes(area.slug))
    .map((area) => ({ slug: area.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;
  if (redirectedSlugs.includes(slug)) return {};
  const area = getServiceArea(slug);
  if (!area) return {};

  const canonicalUrl = clinicLocationMap[slug] || `https://drpremkumar.in/locations/${area.slug}`;

  return {
    title: `${area.name} Dental Care | Dr. Prem Kumar R, Pediatric & Microscopic Dentist`,
    description: `Dr. Prem Kumar R provides specialist pediatric dentistry and microscopic root canal care for families from ${area.name} at Kumar's Microscopic Dental Care, Attur Main Road, Yelahanka.`,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: `${area.name} Dental Care | Dr. Prem Kumar R`,
      description: `Dr. Prem Kumar R provides specialist pediatric dentistry and microscopic root canal care for families from ${area.name}.`,
      url: canonicalUrl,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Dr. Prem Kumar Microscopic Dentist – ${area.name}, Bengaluru`,
        },
      ],
    },
  };
}

export default function LocationSlugPage({ params }: PageProps) {
  const { slug } = params;
  if (redirectedSlugs.includes(slug)) {
    permanentRedirect("/locations");
  }

  const area = getServiceArea(slug);
  if (!area) {
    notFound();
  }

  const clinicUrl = clinicLocationMap[slug] || "https://kumarsdentistry.in/locations";

  const breadcrumbSchema = BreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: area.name, href: `/locations/${area.slug}` },
  ]);

  return (
    <>
      <Script
        id={`schema-breadcrumb-${area.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceAreaView area={area} clinicUrl={clinicUrl} />
    </>
  );
}

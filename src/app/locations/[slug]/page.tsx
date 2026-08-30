import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import { ServiceAreaView } from "@/components/locations/ServiceAreaView";
import { getServiceArea, serviceAreas } from "@/lib/serviceAreas";
import { LocalBusinessSchema, BreadcrumbSchema, FAQSchema } from "@/lib/schemas";
import { clinicContact } from "@/lib/siteAssets";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const { slug } = params;
  const area = getServiceArea(slug);
  if (!area) return {};

  return {
    title: area.title,
    description: area.description,
    keywords: area.keywords,
    alternates: { canonical: `/locations/${area.slug}` },
    openGraph: {
      title: area.title,
      description: area.description,
      url: `https://www.drpremkumar.in/locations/${area.slug}`,
      images: [
        {
          url: "/images/og-image.jpg",
          width: 1200,
          height: 630,
          alt: `Dr. Prem Kumar Microscopic Dentist – ${area.name}, Bangalore`,
        },
      ],
    },
  };
}

export default function LocationSlugPage({ params }: PageProps) {
  const { slug } = params;
  const area = getServiceArea(slug);

  if (!area) {
    notFound();
  }

  const localBusinessSchema = LocalBusinessSchema({
    name: area.kind === "flagship"
      ? "Dr. Prem Kumar — Flagship Microscopic Dental Clinic"
      : `Dr. Prem Kumar — Microscopic Dentist Serving ${area.name}, Bangalore`,
    description: area.description,
    image: "https://www.drpremkumar.in/images/og-image.jpg",
    url: `https://www.drpremkumar.in/locations/${area.slug}`,
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
    areaServed: [area.localityLabel, "Yelahanka", "Bangalore", "Bengaluru"],
    sameAs: [clinicContact.googleMapsUrl],
    parentOrganization: {
      name: "Dr. Prem Kumar Dental Clinic",
      url: "https://www.drpremkumar.in",
    },
  });

  const breadcrumbSchema = BreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Locations", href: "/locations" },
    { name: area.name, href: `/locations/${area.slug}` },
  ]);

  const faqSchema = FAQSchema([
    {
      question: `Is Dr. Prem Kumar R's microscopic clinic easily accessible from ${area.name}?`,
      answer: `Yes, our flagship clinic on Attur Main Road, Yelahanka is conveniently accessible from ${area.name} (${area.travelNote ?? "via main roads"}). Families visit us for high-precision root canals and pediatric dental care.`,
    },
    {
      question: `What treatments are available for patients travelling from ${area.name}?`,
      answer: `We provide precision microscopic root canal treatment (single-visit available), gentle pediatric dentistry, CBCT-guided dental implants, digital smile design, and laser treatments.`,
    },
    {
      question: `How do I book a consultation from ${area.name}?`,
      answer: `You can book online at drpremkumar.in or call/WhatsApp +91 81972 80019. Same-week appointment slots are reserved for out-of-locality patients.`,
    },
  ]);

  return (
    <>
      <Script
        id={`schema-local-business-${area.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <Script
        id={`schema-breadcrumb-${area.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Script
        id={`schema-faq-${area.slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServiceAreaView area={area} />
    </>
  );
}

import { Metadata } from "next";
import Script from "next/script";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";
import { BreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Cosmetic Dentistry & Aesthetic Restorations | Dr. Prem Kumar Bengaluru",
  description:
    "Cosmetic dental treatments, porcelain veneers, teeth whitening, and aesthetic bonding in Bengaluru with Dr. Prem Kumar R.",
  alternates: { canonical: "https://kumarsdentistry.in/treatments/cosmetic-dentistry" },
  openGraph: {
    type: "website",
    title: "Cosmetic Dentistry & Aesthetic Restorations | Dr. Prem Kumar Bengaluru",
    description: "Aesthetic dental care and restorations in Bengaluru.",
    url: "https://kumarsdentistry.in/treatments/cosmetic-dentistry",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Cosmetic Dentistry Bengaluru" }],
  },
};

const data: ServicePageData = {
  slug: "cosmetic-dentistry",
  name: "Cosmetic Dentistry",
  shortName: "Cosmetic Dentistry",
  heroTagline: "Aesthetic restorations, veneers, and conservative dental bonding.",
  iconName: "sparkles",
  directAnswer:
    "Cosmetic dentistry focuses on enhancing the appearance of teeth, gums, and bite through ceramic veneers, composite bonding, and professional whitening while prioritizing biological tooth health.",
  expanded: [
    "Treatments are designed conservatively under magnification to preserve natural enamel and achieve durable, natural aesthetics.",
  ],
  whyImportant: ["Restores chipped, discolored, or uneven teeth safely"],
  benefits: ["Natural shade matching and biocompatible materials"],
  whoNeeds: ["Patients with worn, chipped, or stained front teeth"],
  risks: ["Porcelain veneers require careful diagnostic preparation"],
  recovery: "Minimal to zero downtime",
  costRange: "Based on required aesthetic procedures",
  duration: "1–2 appointments",
  doctorInsight: "Conservative aesthetic dentistry respects the biology of natural enamel.",
  faqs: [
    {
      question: "Are ceramic veneers durable?",
      answer: "High-grade dental ceramics offer excellent durability and stain resistance with standard oral care.",
    },
  ],
  relatedCases: [
    { title: "Smile Design", href: "/services/smile-design" },
  ],
  relatedArticles: [
    { title: "Clinic Treatment: Cosmetic Dentistry", href: "https://kumarsdentistry.in/treatments/cosmetic-dentistry" },
  ],
};

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="schema-breadcrumb-cosmetic"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage data={data} clinicUrl="https://kumarsdentistry.in/treatments/cosmetic-dentistry" />
    </>
  );
}

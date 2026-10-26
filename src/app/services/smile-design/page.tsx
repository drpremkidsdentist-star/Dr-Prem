import { Metadata } from "next";
import Script from "next/script";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";
import { BreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Smile Design & Clear Aligners | Dr. Prem Kumar R Bengaluru",
  description:
    "Smile design consultations, clear aligners, and aesthetic restorations in Bengaluru by Dr. Prem Kumar R.",
  alternates: { canonical: "https://kumarsdentistry.in/treatments/smile-designing" },
  openGraph: {
    type: "website",
    title: "Smile Design & Clear Aligners | Dr. Prem Kumar R Bengaluru",
    description: "Digital smile preview and aesthetic alignment in Bengaluru.",
    url: "https://kumarsdentistry.in/treatments/smile-designing",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Smile Design Bengaluru" }],
  },
};

const data: ServicePageData = {
  slug: "smile-design",
  name: "Digital Smile Design & Clear Aligners",
  shortName: "Smile Design",
  heroTagline: "Aesthetic smile planning and clear aligners tailored to your facial harmony.",
  iconName: "smile",
  directAnswer:
    "Smile design is a comprehensive aesthetic evaluation combining digital facial photography, 3D intraoral scans, and clear aligners to plan smile improvements with predictable clinical outcomes.",
  expanded: [
    "Using digital workflow and 3D simulation, patients can preview proposed alignment and restorative changes prior to starting treatment.",
  ],
  whyImportant: [
    "Corrects spacing, crowding, and aesthetic irregularities",
    "Improves occlusion and oral hygiene accessibility",
  ],
  benefits: [
    "Clear, removable aligners without metal brackets",
    "Digital preview of anticipated tooth movement",
  ],
  whoNeeds: [
    "Patients with mild to moderate teeth misalignment or spacing",
  ],
  risks: [
    "Requires compliant wear of aligners (20–22 hours daily)",
  ],
  recovery: "Zero downtime; mild aligner pressure when switching trays.",
  costRange: "Personalized according to alignment complexity",
  duration: "Case dependent",
  doctorInsight:
    "Facial aesthetics and dental alignment are intimately linked; digital planning guarantees balance and harmony.",
  faqs: [
    {
      question: "How do clear aligners work?",
      answer: "Custom clear trays apply calibrated gentle forces to progressively move teeth into planned positions.",
    },
  ],
  relatedCases: [
    { title: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
  ],
  relatedArticles: [
    { title: "Clinic Treatment: Smile Design", href: "https://kumarsdentistry.in/treatments/smile-designing" },
  ],
};

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Smile Design", href: "/services/smile-design" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="schema-breadcrumb-smiledesign"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage data={data} clinicUrl="https://kumarsdentistry.in/treatments/smile-designing" />
    </>
  );
}

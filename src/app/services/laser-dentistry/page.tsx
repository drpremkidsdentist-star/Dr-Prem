import { Metadata } from "next";
import Script from "next/script";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";
import { BreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Laser Dentistry | Dr. Prem Kumar Bengaluru",
  description:
    "Minimally invasive laser dentistry for comfortable, precise soft-tissue dental procedures in Bengaluru.",
  alternates: { canonical: "https://kumarsdentistry.in/treatments/laser-dentistry" },
  openGraph: {
    type: "website",
    title: "Laser Dentistry | Dr. Prem Kumar Bengaluru",
    description: "Minimally invasive soft-tissue laser treatments in Bengaluru.",
    url: "https://kumarsdentistry.in/treatments/laser-dentistry",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Laser Dentistry Bengaluru" }],
  },
};

const data: ServicePageData = {
  slug: "laser-dentistry",
  name: "Laser Dentistry",
  shortName: "Laser Dentistry",
  heroTagline: "Minimally invasive soft-tissue laser procedures for comfortable healing.",
  iconName: "zap",
  directAnswer:
    "Laser dentistry uses focused laser energy for precise soft-tissue contouring, frenectomy, and periodontal pocket disinfection with minimal bleeding and faster post-operative recovery.",
  expanded: [
    "Soft-tissue lasers cauterize micro-vessels as they cut, reducing the need for sutures and promoting rapid tissue healing.",
  ],
  whyImportant: ["Minimizes discomfort, bleeding, and bacterial exposure"],
  benefits: ["Often requires less local anesthesia and eliminates sutures"],
  whoNeeds: ["Patients needing gum contouring, tongue-tie release, or periodontal pocket therapy"],
  risks: ["Requires specialized eye protection and training"],
  recovery: "Quick recovery within 24–48 hours",
  costRange: "Procedure dependent",
  duration: "15–30 minutes",
  doctorInsight: "Laser technology allows us to perform soft-tissue treatments with unparalleled comfort.",
  faqs: [
    {
      question: "Is laser dentistry safe for kids?",
      answer: "Yes, dental lasers are safe and frequently used for pediatric frenectomy (tongue-tie release).",
    },
  ],
  relatedCases: [
    { title: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
  ],
  relatedArticles: [
    { title: "Clinic Treatment: Laser Dentistry", href: "https://kumarsdentistry.in/treatments/laser-dentistry" },
  ],
};

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Laser Dentistry", href: "/services/laser-dentistry" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="schema-breadcrumb-laser"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage data={data} clinicUrl="https://kumarsdentistry.in/treatments/laser-dentistry" />
    </>
  );
}

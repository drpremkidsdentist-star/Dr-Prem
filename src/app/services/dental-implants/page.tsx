import { Metadata } from "next";
import Script from "next/script";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";
import { BreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Dental Implants Yelahanka & Attur Bengaluru | Dr. Prem Kumar R",
  description:
    "Natural-looking dental implants at Dr. Prem Kumar R's practice in Attur, Yelahanka, Bengaluru. CBCT-planned tooth replacement.",
  alternates: { canonical: "https://kumarsdentistry.in/treatments/dental-implants" },
  openGraph: {
    type: "website",
    title: "Dental Implants Yelahanka & Attur Bengaluru | Dr. Prem Kumar R",
    description: "Natural-looking dental implants at Dr. Prem Kumar R's practice in Attur, Yelahanka, Bengaluru.",
    url: "https://kumarsdentistry.in/treatments/dental-implants",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Dental Implants Yelahanka" }],
  },
};

const data: ServicePageData = {
  slug: "dental-implants",
  name: "Dental Implants & Tooth Replacement",
  shortName: "Dental Implants",
  heroTagline: "CBCT-planned, biocompatible dental implants for fixed, natural tooth replacement.",
  iconName: "shield",
  directAnswer:
    "Dental implants are titanium or ceramic posts surgically positioned into the jawbone beneath your gums to securely hold replacement teeth or crowns. At Kumar's Microscopic Dental Care, implants are planned with 3D CBCT digital imaging for precision placement and natural aesthetics.",
  expanded: [
    "When a tooth is lost to trauma or deep infection, a dental implant serves as a durable root replacement that bonds directly with natural jawbone through osseointegration.",
    "Digital treatment planning allows precise assessment of bone density and angulation before placement, protecting adjacent vital nerves and sinus structures.",
  ],
  whyImportant: [
    "Prevents bone loss in the jaw following tooth extraction",
    "Restores full chewing power without affecting adjacent teeth",
    "Provides a permanent, stable foundation for single or multi-unit crowns",
  ],
  benefits: [
    "Biocompatible titanium fixtures with proven longevity",
    "3D CBCT guided planning for minimal invasiveness",
    "Natural look, feel, and function matching surrounding teeth",
  ],
  whoNeeds: [
    "Patients with missing single or multiple teeth",
    "Individuals with uncomfortable removable partial dentures",
  ],
  risks: [
    "Requires adequate bone volume, which may occasionally need bone grafting",
  ],
  recovery:
    "Initial soft tissue healing occurs within 7–10 days, followed by osseointegration over 3–4 months before final crown placement.",
  costRange: "Determined after 3D radiographic assessment",
  duration: "45–60 minutes per fixture placement",
  doctorInsight:
    "Modern implantology combines digital radiography with surgical precision to recreate tooth form and function securely.",
  faqs: [
    {
      question: "Are dental implants permanent?",
      answer: "With good oral hygiene and routine dental check-ups, dental implants are designed to function for decades.",
    },
    {
      question: "Where can I receive dental implant treatment?",
      answer: "Implant procedures are conducted at Kumar's Microscopic Dental Care, No. 12, 1st Floor, Attur Main Road, Yelahanka New Town.",
    },
  ],
  relatedCases: [
    { title: "Microscopic Root Canal", href: "/services/microscopic-root-canal" },
  ],
  relatedArticles: [
    { title: "Dental Implants Guide", href: "/knowledge-center/dental-implants-guide" },
  ],
};

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Dental Implants", href: "/services/dental-implants" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="schema-breadcrumb-implants"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage data={data} clinicUrl="https://kumarsdentistry.in/treatments/dental-implants" />
    </>
  );
}

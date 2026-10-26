import { Metadata } from "next";
import Script from "next/script";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";
import { BreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Pediatric Dentist in Yelahanka, Bengaluru | Dr. Prem Kumar R, MDS",
  description:
    "Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry, KSDC 47094 A) treats children at Kumar's Microscopic Dental Care, Attur Main Road, Yelahanka New Town. Call +91 81972 80019.",
  alternates: { canonical: "https://drpremkumar.in/services/pediatric-dentistry" },
  openGraph: {
    type: "website",
    title: "Pediatric Dentist in Yelahanka, Bengaluru | Dr. Prem Kumar R, MDS",
    description:
      "Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry, KSDC 47094 A) treats children at Kumar's Microscopic Dental Care, Attur Main Road, Yelahanka New Town. Call +91 81972 80019.",
    url: "https://drpremkumar.in/services/pediatric-dentistry",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Pediatric Dentist in Yelahanka Bengaluru" }],
  },
};

const data: ServicePageData = {
  slug: "pediatric-dentistry",
  name: "Pediatric & Preventive Dentistry",
  shortName: "Pediatric Dentistry",
  heroTagline: "Gentle, child-centered dental care backed by academic specialization and microscopic precision.",
  iconName: "baby",
  directAnswer:
    "As a specialist in Pediatric and Preventive Dentistry (MDS, KSDC Reg. 47094 A), I focus on early oral health, positive behavior guidance, and gentle treatment for infants, children, and adolescents. At Kumar's Microscopic Dental Care in Yelahanka New Town, my approach eliminates dental anxiety through patient communication, preventive sealing, and conservative micro-restorations.",
  expanded: [
    "My training as a pediatric dental specialist (including my tenure as former Assistant Professor at Ramaiah Dental College) centers on the unique oral physiology and psychology of developing children.",
    "In my clinical practice, every young patient receives personalized care based on non-pharmacological behavior guidance. Rather than rushing procedures, I build trust through tell-show-do methods, positive reinforcement, and a child-friendly clinic atmosphere.",
    "When clinical treatment is indicated — such as milk tooth cavity restorations, pulpotomy, pulpectomy, or space maintainers — I use magnification and conservative instrumentation to preserve healthy dental tissues and ensure comfortable appointments.",
  ],
  whyImportant: [
    "Establishes positive dental acclimatization and lifelong oral hygiene habits",
    "Prevents childhood caries and early tooth loss",
    "Preserves arch integrity and guides proper eruption of permanent teeth",
    "Provides prompt intervention for pediatric dental trauma and toothaches",
    "Monitors developmental and jaw growth patterns early",
  ],
  benefits: [
    "Treatment by an MDS Pediatric & Preventive Dentistry specialist",
    "Child-oriented communication and calm clinic environment",
    "Minimally invasive cavity restorations and preventive sealants",
    "Comprehensive guidance for parents on nutrition and brushing",
    "Integrated clinical setting at Kumar's Microscopic Dental Care",
  ],
  whoNeeds: [
    "Infants by their first birthday or appearance of their first tooth",
    "Children with tooth discoloration, sensitivity, or cavities",
    "Young patients with oral habits such as thumb-sucking or mouth-breathing",
    "Children requiring dental sealants or preventive fluoride applications",
    "Anxious children who need gentle, unhurried acclimatization",
  ],
  risks: [
    "Untreated pediatric caries can cause pain, localized infection, and eating difficulties",
    "Premature loss of primary molars may lead to crowding of permanent teeth",
    "Dental anxiety can worsen without patient, specialized behavior guidance",
  ],
  recovery:
    "Routine pediatric check-ups and fluoride treatments require no downtime. Following a restoration or pulpectomy, children typically resume normal light meals within an hour after local numbness resolves.",
  costRange: "Clinical fees vary based on examination and required procedure",
  duration: "30–45 minutes per appointment",
  doctorInsight:
    "A child's early dental experience shapes their attitude toward healthcare for decades. My priority is to ensure every child leaves our clinic with confidence and healthy teeth, while parents receive complete clarity on preventive care at home.",
  procedurePreparation: "A relaxed, positive explanation at home without using intimidating words; regular meal before the visit.",
  procedureFollowup: "Periodic oral check-ups every 6 months to maintain preventive dental health.",
  faqs: [
    {
      question: "When should my child first see a pediatric dentist?",
      answer:
        "The Indian Dental Association and pediatric dental guidelines recommend the first dental visit by the emergence of the first baby tooth or by the child's first birthday.",
    },
    {
      question: "What qualifications does Dr. Prem Kumar R hold for treating children?",
      answer:
        "Dr. Prem Kumar R holds a Master of Dental Surgery (MDS) degree in Pediatric & Preventive Dentistry and is registered with the Karnataka State Dental Council (Reg. No. 47094 A). He is also a former Assistant Professor at Ramaiah Dental College.",
    },
    {
      question: "Where does Dr. Prem Kumar R treat pediatric patients?",
      answer:
        "Clinical consultations and treatments are conducted at Kumar's Microscopic Dental Care, No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bengaluru.",
    },
    {
      question: "How can I book an appointment for my child?",
      answer:
        "Appointments can be scheduled online via drpremkumar.in, directly through the clinic at kumarsdentistry.in/appointments, or by calling +91 81972 80019.",
    },
  ],
  relatedCases: [
    { title: "Preventive Pediatric Dental Care", href: "/services/preventive-care" },
    { title: "Microscopic Root Canal & Pulp Therapy", href: "/services/microscopic-root-canal" },
  ],
  relatedArticles: [
    { title: "Pediatric Dental Care Guide", href: "/knowledge-center/pediatric-dental-care" },
    { title: "Kumar's Dental Clinic Pediatric Treatments", href: "https://kumarsdentistry.in/treatments/children-dentistry" },
  ],
};

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="schema-breadcrumb-pediatric"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage data={data} clinicUrl="https://kumarsdentistry.in/treatments/children-dentistry" />
    </>
  );
}

import { Metadata } from "next";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Best Pediatric Dentist Bangalore | Kids Dental Clinic | Dr. Prem Kumar R",
  description:
    "Top-rated pediatric dentist in Bangalore (Attur, Yelahanka). Fear-free kids dentistry, painless cavity fillings, sedation, and special needs care by MDS specialist Dr. Prem Kumar R.",
  keywords: [
    "pediatric dentist near me",
    "pediatric dentist Bangalore",
    "kids dentist Bangalore",
    "kids dentist near me",
    "childrens dental near me",
    "dentist childrens near me",
    "childrens dental",
    "childrens dental world",
    "kidz dental",
    "kidds dental",
    "affordable pediatric dentist near me",
    "top pediatric dentist near me",
    "good pediatric dentist near me",
    "emergency pediatrics near me",
    "special needs pediatric dentist near me",
    "pediatric dentist for autism near me",
    "pediatric dentist for special needs near me",
    "sedation pediatric dentistry near me",
    "holistic pediatric dentist near me",
    "center for pediatric dental care",
    "center for pediatric dentistry",
    "all smiles pediatric dentistry",
    "healthy teeth pediatric dentistry",
    "pediatric dentist and orthodontist near me",
    "pediatric orthodontist near me",
    "pediatric oral surgeon near me",
    "family teeth",
    "child",
    "first dental visit child Bangalore",
    "cavity filling near me",
    "dentist for fillings near me",
  ],
  openGraph: {
    type: "website",
    title: "Best Pediatric Dentist Bangalore | Kids Dental Clinic | Dr. Prem Kumar R",
    description: "Gentle, fear-free kids dental care in Bangalore. Painless pediatric dentistry by MDS specialist Dr. Prem Kumar R.",
    url: "https://www.drpremkumar.in/services/pediatric-dentistry",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Best Pediatric Dentist Bangalore" }],
  },
  alternates: { canonical: "/services/pediatric-dentistry" },
};

const data: ServicePageData = {
  slug: "pediatric-dentistry",
  name: "Pediatric Dentistry",
  shortName: "Pediatric Care",
  heroTagline: "Gentle, fear-free dental care that builds lifelong healthy habits for children.",
  iconName: "baby",
  directAnswer:
    "Pediatric dentistry is specialized dental care for infants, children, and teens, focused on prevention, early treatment, and a positive experience. Dr. Prem Kumar provides gentle check-ups, cleanings, fluoride, sealants, and cavity care in a calm, child-friendly environment from age one onward.",
  expanded: [
    "Children's dental needs differ from adults — growing jaws, developing teeth, and the need to build trust. Pediatric dentistry addresses these with age-appropriate care and a reassuring approach that prevents dental anxiety.",
    "Visits focus on prevention: thorough check-ups, professional cleanings, fluoride applications, and protective sealants on molars to stop cavities before they start. Any early issues are treated gently and conservatively.",
    "Dr. Prem Kumar uses behavior-friendly techniques, clear communication, and microscopic precision when treatment is needed, ensuring children feel safe and parents feel informed at every step.",
  ],
  whyImportant: [
    "Establishes healthy habits from an early age",
    "Prevents childhood cavities, the most common chronic disease",
    "Catches developmental and alignment issues early",
    "Reduces dental fear through positive experiences",
    "Protects adult teeth that are developing beneath the gums",
  ],
  benefits: [
    "Child-friendly, calming clinic environment",
    "Preventive care that reduces future dental problems",
    "Gentle, minimally invasive treatments",
    "Guidance for parents on brushing and diet",
    "Early detection of orthodontic needs",
    "Builds a foundation of trust and confidence",
  ],
  whoNeeds: [
    "Infants by their first birthday or first tooth",
    "Children with cavities or tooth pain",
    "Kids with thumb-sucking or teeth-grinding habits",
    "Children needing sealants or fluoride protection",
    "Anxious or first-time young dental patients",
    "Teens needing wisdom teeth or alignment checks",
  ],
  risks: [
    "Untreated cavities can cause pain and infection",
    "Early tooth loss may affect speech and alignment",
    "Dental anxiety can develop without positive visits",
    "Rare need for sedation in very young or anxious kids",
    "Habit-related issues if not addressed early",
  ],
  recovery:
    "Most pediatric visits involve no recovery time. After a filling or extraction, children may have mild soreness for a day; soft foods and gentle brushing are advised. Parents receive clear aftercare instructions, and follow-up is scheduled as needed.",
  costRange: "₹300 – ₹3,000 per visit",
  duration: "20–45 minutes per visit",
  doctorInsight:
    "A child's first dental memory shapes how they feel about dentistry for life. My goal is simple: make the visit calm, kind, and even fun, so they grow up seeing the dentist as a friend rather than something to fear.",
  procedurePreparation: "A relaxed, age-appropriate explanation before any procedure; no special prep for routine visits.",
  procedureFollowup: "Routine check-ups every 6 months, or as advised for active treatment.",
  faqs: [
    {
      question: "At what age should my child first see a dentist?",
      answer:
        "Your child should have their first dental visit by their first birthday or within six months of the first tooth appearing. Early visits establish healthy habits and allow early detection of any issues.",
    },
    {
      question: "How can I prepare my child for the dentist?",
      answer:
        "Keep it positive and simple — read a children's book about the dentist, avoid words like 'pain' or 'shot', and let them know the dentist will count and clean their teeth. A calm parent helps a calm child.",
    },
    {
      question: "Are dental X-rays safe for children?",
      answer:
        "Yes. Modern digital X-rays use very low radiation, and we only take them when necessary for diagnosis. Protective measures are always used to keep your child safe.",
    },
    {
      question: "What are dental sealants and does my child need them?",
      answer:
        "Sealants are thin protective coatings applied to the chewing surfaces of molars to prevent cavities. They are quick, painless, and highly effective for children, especially as their permanent molars erupt.",
    },
    {
      question: "How much does a pediatric dental visit cost in Bangalore?",
      answer:
        "Routine check-ups and cleanings typically range from ₹300 to ₹1,500, while treatments like fillings or sealants range ₹500–₹3,000. Exact costs depend on your child's needs after examination.",
    },
    {
      question: "My child is afraid of the dentist. Can you help?",
      answer:
        "Absolutely. We specialize in gentle, behavior-friendly techniques that build trust gradually. Many anxious children become comfortable visitors after just a few positive experiences in our clinic.",
    },
  ],
  relatedCases: [
    { title: "Preventive Care & Fluoride", href: "/services/preventive-care" },
    { title: "Microscopic Root Canal & Pulp Therapy", href: "/services/microscopic-root-canal" },
    { title: "Doctors Pediatric Mentorship", href: "/education" },
  ],
  relatedArticles: [
    { title: "How to brush your child's teeth", href: "/knowledge-center" },
    { title: "Preventing childhood cavities", href: "/knowledge-center" },
    { title: "Managing thumb-sucking habits", href: "/knowledge-center" },
  ],
};

export default function Page() {
  return <ServicePage data={data} />;
}

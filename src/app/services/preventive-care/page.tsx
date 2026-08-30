import { Metadata } from "next";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Teeth Cleaning & Cavity Fillings Bangalore | Preventive Dental Care | Dr. Prem Kumar R",
  description:
    "Routine dental check-ups, walk-in teeth cleaning, painless cavity fillings, tooth sensitivity treatments & gum care in Bangalore by Dr. Prem Kumar R.",
  keywords: [
    "cavity filling near me",
    "dentist for fillings near me",
    "fillings",
    "walk in teeth cleaning near me",
    "tooth sensitivity",
    "tooth appointment",
    "gum specialist near me",
    "best periodontist near me",
    "preventive dental care Bangalore",
    "dental check-up Bangalore",
    "teeth cleaning cost Bangalore",
    "scaling and polishing Bangalore",
    "oral health screening Bangalore",
  ],
  openGraph: {
    type: "website",
    title: "Teeth Cleaning & Cavity Fillings Bangalore | Dr. Prem Kumar R",
    description: "Routine check-ups, teeth cleaning, and cavity fillings that protect your smile for life in Bangalore.",
    url: "https://www.drpremkumar.in/services/preventive-care",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Preventive Dental Care Bangalore" }],
  },
  alternates: { canonical: "/services/preventive-care" },
};

const data: ServicePageData = {
  slug: "preventive-care",
  name: "Preventive Care",
  shortName: "Preventive Care",
  heroTagline: "Routine check-ups and cleanings that protect your smile for life.",
  iconName: "shield",
  directAnswer:
    "Preventive dental care includes regular check-ups, professional cleanings, fluoride, sealants, and oral cancer screenings to stop problems before they start. Recommended every 6 months, these visits remove plaque, catch issues early, and help you avoid costly treatment later.",
  expanded: [
    "Preventive care is the foundation of lifelong oral health. It focuses on keeping your teeth and gums healthy so that problems like cavities and gum disease never get a chance to develop or progress.",
    "A typical visit includes a thorough examination, professional scaling and polishing to remove hardened plaque (tartar), digital imaging when needed, and an oral cancer screening. Fluoride and sealants may be applied for extra protection.",
    "Dr. Prem Kumar pairs preventive care with personalized advice on brushing, flossing, and diet, and uses microscopic inspection to catch early changes invisible to the naked eye — keeping your smile healthy between visits.",
  ],
  whyImportant: [
    "Prevents cavities and gum disease before they start",
    "Catches issues early when they are easier and cheaper to treat",
    "Removes tartar that brushing alone cannot",
    "Screens for oral cancer and systemic warning signs",
    "Protects your overall health and saves money long-term",
  ],
  benefits: [
    "Fresh, clean teeth and healthier gums",
    "Lower lifetime dental costs through prevention",
    "Early detection of decay and disease",
    "Personalized guidance for better home care",
    "Reduced risk of tooth loss and complications",
    "Supports overall health and wellbeing",
  ],
  whoNeeds: [
    "Every adult and child, ideally from age one",
    "People prone to cavities or gum problems",
    "Those with braces or dental restorations",
    "Smokers or those with high-sugar diets",
    "Pregnant individuals (hormonal gum changes)",
    "Anyone wanting to maintain a healthy smile",
  ],
  risks: [
    "Skipping visits raises risk of undetected decay",
    "Gum disease may progress silently without checks",
    "Late treatment is usually more complex and costly",
    "Plaque buildup can lead to bad breath and staining",
    "Rare mild sensitivity after a deep cleaning",
  ],
  recovery:
    "There is no recovery time — you can eat, work, and resume normal activities immediately after a cleaning. If a deep cleaning was done for gum disease, minor tenderness for a day or two is normal and eases with gentle care.",
  costRange: "₹500 – ₹3,000 per visit",
  duration: "30–60 minutes every 6 months",
  doctorInsight:
    "Prevention is the most powerful treatment in dentistry. A thirty-minute cleaning every six months can spare you from root canals, extractions, and implants later. I tell my patients: invest a little in prevention to avoid a lot of treatment.",
  procedurePreparation: "No special preparation; bring your medical history and any current concerns.",
  procedureFollowup: "Routine visits every 6 months, or more often if gum disease is being managed.",
  faqs: [
    {
      question: "How often should I visit the dentist?",
      answer:
        "Most people should have a check-up and cleaning every six months. If you have gum disease, a high cavity risk, or certain health conditions, Dr. Prem Kumar may recommend more frequent visits.",
    },
    {
      question: "What happens during a preventive visit?",
      answer:
        "Your visit includes a dental examination, professional scaling and polishing to remove plaque and tartar, digital X-rays if needed, an oral cancer screening, and personalized oral hygiene advice.",
    },
    {
      question: "Is professional cleaning better than brushing?",
      answer:
        "Yes. Brushing and flossing clean surfaces you can reach, but only professional cleaning removes hardened tartar and reaches below the gumline. Together they give the best protection against decay and gum disease.",
    },
    {
      question: "How much does a dental check-up cost in Bangalore?",
      answer:
        "A routine check-up and cleaning typically costs ₹500–₹3,000. Deep cleaning for gum disease or additional treatments may cost more. Preventive care is far cheaper than treating advanced problems later.",
    },
    {
      question: "Are dental X-rays safe and necessary?",
      answer:
        "Modern digital X-rays use minimal radiation and are safe. They are taken only when needed to detect decay, bone loss, or issues not visible during examination, helping catch problems early.",
    },
    {
      question: "Can preventive care really save money?",
      answer:
        "Yes. Regular preventive visits are far less expensive than treating advanced cavities, gum disease, or tooth loss. Catching issues early avoids complex, costly procedures down the line.",
    },
  ],
  relatedCases: [
    { title: "Pediatric Dentistry & Prevention", href: "/services/pediatric-dentistry" },
    { title: "Laser Periodontal Therapy", href: "/services/laser-dentistry" },
    { title: "Microscopic Diagnosis Suite", href: "/technology" },
  ],
  relatedArticles: [
    { title: "How to brush and floss correctly", href: "/knowledge-center" },
    { title: "Diet and your dental health", href: "/knowledge-center" },
    { title: "Why six-monthly visits matter", href: "/knowledge-center" },
  ],
};

export default function Page() {
  return <ServicePage data={data} />;
}

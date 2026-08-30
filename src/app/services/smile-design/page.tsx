import { Metadata } from "next";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Smile Design & Clear Aligners Bangalore | Invisalign & Veneers | Dr. Prem Kumar R",
  description:
    "Digital smile design, Invisalign clear aligners, and porcelain veneers in Bangalore by Dr. Prem Kumar R. Digital smile preview, affordable clear aligners cost & teeth bonding.",
  keywords: [
    "smile design Bangalore",
    "invisalign",
    "invisalign price",
    "invisible aligners",
    "clear aligners for teeth",
    "invisalign dentist near me",
    "affordable invisalign",
    "invisalign treatment",
    "clear aligners cost",
    "invisalign monthly cost",
    "cheapest clear aligners",
    "dentist for braces near me",
    "invisalign retainers",
    "porcelain veneers near me",
    "composite veneers near me",
    "affordable veneers near me",
    "snap on veneers near me",
    "teeth bonding near me",
    "dental bonding near me",
    "digital smile design Bangalore",
    "smile makeover cost Bangalore",
  ],
  openGraph: {
    type: "website",
    title: "Smile Design & Clear Aligners Bangalore | Dr. Prem Kumar R",
    description: "Preview and design your dream smile with digital precision and clear aligners in Bangalore.",
    url: "https://www.drpremkumar.in/services/smile-design",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Smile Design & Aligners Bangalore" }],
  },
  alternates: { canonical: "/services/smile-design" },
};

const data: ServicePageData = {
  slug: "smile-design",
  name: "Smile Design",
  shortName: "Smile Design",
  heroTagline: "Preview and design your dream smile with digital precision before any treatment.",
  iconName: "smile",
  directAnswer:
    "Smile design is a cosmetic planning process that uses digital imaging and facial analysis to design your ideal smile and show you a realistic preview before treatment. It may combine veneers, whitening, aligners, or implants to improve color, shape, and symmetry — often completed in 1–4 weeks.",
  expanded: [
    "Digital smile design (DSD) begins with photographs, scans, and an analysis of your facial features, lips, gums, and teeth. Using specialized software, Dr. Prem Kumar designs a smile that complements your unique face and personality.",
    "You see a simulation of your future smile before anything is touched. This collaborative approach means you and your dentist agree on the goal, removing guesswork and ensuring predictable, satisfying results.",
    "Once the design is approved, the plan is executed using the most suitable combination of treatments — often veneers, bonding, whitening, or aligners — with microscopic attention to detail at every step.",
  ],
  whyImportant: [
    "Lets you preview and approve results before treatment",
    "Creates a smile harmonized with your facial features",
    "Aligns expectations between you and your dentist",
    "Guides precise, predictable cosmetic execution",
    "Boosts confidence with a natural, balanced look",
  ],
  benefits: [
    "See your new smile before committing to treatment",
    "Personalized design based on your face and goals",
    "Minimally invasive options preserve natural teeth",
    "Predictable, repeatable, and highly aesthetic outcomes",
    "Combines multiple treatments into one cohesive plan",
    "Long-lasting confidence and improved self-image",
  ],
  whoNeeds: [
    "Discolored or stained teeth resistant to whitening",
    "Chipped, worn, or unevenly shaped teeth",
    "Gaps or minor misalignment between teeth",
    "A gummy or uneven smile line",
    "An upcoming event or a confidence boost goal",
    "Anyone unhappy with the overall look of their smile",
  ],
  risks: [
    "Some options like veneers are irreversible",
    "Temporary sensitivity after whitening or bonding",
    "Results depend on following aftercare guidance",
    "Minor adjustments may be needed after placement",
    "Costs vary widely based on chosen treatments",
  ],
  recovery:
    "Most smile design treatments involve little to no downtime. Whitening may cause brief sensitivity, and veneers require a short adjustment period. You can usually resume normal activities immediately, with final results visible within 1–4 weeks depending on the plan.",
  costRange: "₹15,000 – ₹1,50,000",
  duration: "1–4 weeks (varies by plan)",
  doctorInsight:
    "A smile should fit the person, not a template. With digital design, my patients and I agree on the result together before we begin. That shared vision is why the final smile always feels right — because it was designed for them.",
  procedurePreparation: "Photographs, digital scans, and facial analysis to build the smile simulation.",
  procedureFollowup: "A follow-up review after placement to fine-tune shape, shade, and bite.",
  faqs: [
    {
      question: "What is digital smile design?",
      answer:
        "Digital smile design is a computer-aided process that analyzes your face, teeth, and gums to create a simulated preview of your new smile. It lets you see and approve the expected result before any treatment begins.",
    },
    {
      question: "Is smile design painful?",
      answer:
        "Most smile design steps are minimally invasive and comfortable. Whitening and bonding are typically painless, while veneer preparation uses local anesthesia. Any sensitivity is usually brief and manageable.",
    },
    {
      question: "How long does a smile makeover take?",
      answer:
        "Depending on the plan, smile design takes 1–4 weeks. Simple whitening can be done in a visit, while veneer-based makeovers involve design, preparation, and final placement across a few appointments.",
    },
    {
      question: "How much does smile design cost in Bangalore?",
      answer:
        "Costs range from ₹15,000 for basic whitening to ₹1,50,000 or more for comprehensive veneer makeovers. The exact investment depends on the treatments included in your personalized plan.",
    },
    {
      question: "Are veneers reversible?",
      answer:
        "Traditional porcelain veneers require removing a thin layer of enamel and are not reversible. Minimal-prep and no-prep options preserve more tooth structure. Dr. Prem Kumar will recommend the least invasive suitable choice.",
    },
    {
      question: "How long do smile design results last?",
      answer:
        "With good care, whitening lasts 1–3 years, bonding 3–10 years, and porcelain veneers 10–15 years or more. Avoiding staining habits and maintaining hygiene helps prolong results.",
    },
  ],
  relatedCases: [
    { title: "Cosmetic Dentistry & Veneers", href: "/services/cosmetic-dentistry" },
    { title: "Laser Gum Contouring", href: "/services/laser-dentistry" },
    { title: "Digital Technology & CAD/CAM", href: "/technology" },
  ],
  relatedArticles: [
    { title: "Veneers vs bonding: which to choose", href: "/knowledge-center" },
    { title: "How digital smile design works", href: "/knowledge-center" },
    { title: "Maintaining your new smile", href: "/knowledge-center" },
  ],
};

export default function Page() {
  return <ServicePage data={data} />;
}

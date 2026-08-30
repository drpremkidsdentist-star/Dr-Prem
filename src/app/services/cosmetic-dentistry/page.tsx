import { Metadata } from "next";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Cosmetic Dentist Bangalore | Teeth Whitening & Veneers | Dr. Prem Kumar R",
  description:
    "Expert cosmetic dentistry in Bangalore by Dr. Prem Kumar R. Professional teeth whitening, laser bleaching, porcelain & composite veneers, and dental bonding with 4.9★ results.",
  keywords: [
    "cosmetic dentist near me",
    "best cosmetic dentist near me",
    "cosmetic dentistry near me",
    "professional teeth whitening near me",
    "teeth bleaching near me",
    "laser teeth whitening near me",
    "porcelain veneers near me",
    "composite veneers near me",
    "affordable veneers near me",
    "snap on veneers near me",
    "teeth bonding near me",
    "dental bonding near me",
    "cosmetic dentistry Bangalore",
    "teeth whitening Bangalore",
    "dental veneers Bangalore",
    "composite bonding Bangalore",
    "best cosmetic dentist Bangalore",
  ],
  openGraph: {
    type: "website",
    title: "Cosmetic Dentist Bangalore | Teeth Whitening & Veneers | Dr. Prem Kumar R",
    description: "Enhance your smile with veneers, whitening, and bonding in Bangalore.",
    url: "https://www.drpremkumar.in/services/cosmetic-dentistry",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Cosmetic Dentistry Bangalore" }],
  },
  alternates: { canonical: "/services/cosmetic-dentistry" },
};

const data: ServicePageData = {
  slug: "cosmetic-dentistry",
  name: "Cosmetic Dentistry",
  shortName: "Cosmetic Care",
  heroTagline: "Refine and brighten your smile with veneers, whitening, and bonding.",
  iconName: "sparkles",
  directAnswer:
    "Cosmetic dentistry improves the appearance of your teeth and smile through treatments like professional whitening, porcelain veneers, and composite bonding. These minimally invasive procedures correct color, shape, and minor spacing — typically completed in 1–3 visits with results lasting years.",
  expanded: [
    "Cosmetic dentistry focuses on the aesthetics of your smile — the color, shape, size, and alignment of your teeth. It is often combined with general care so your smile is both beautiful and healthy.",
    "Common treatments include in-office whitening for staining, porcelain veneers for a complete front-teeth transformation, and composite bonding to repair chips or close small gaps in a single visit.",
    "Dr. Prem Kumar plans each case with digital preview and microscopic detail, ensuring restorations blend seamlessly with your natural teeth for a result that looks effortless.",
  ],
  whyImportant: [
    "Enhances self-confidence in social and professional settings",
    "Corrects stains, chips, and uneven teeth non-surgically",
    "Often supports oral health by fixing damaged surfaces",
    "Delivers fast, visible improvements",
    "Complements other treatments like implants and alignment",
  ],
  benefits: [
    "Brighter, more youthful-looking teeth",
    "Natural-looking results matched to your features",
    "Mostly minimally invasive with little discomfort",
    "Quick improvements — some in a single visit",
    "Boosts confidence and self-image",
    "Durable outcomes with proper care",
  ],
  whoNeeds: [
    "Yellowed or stained teeth from food, coffee, or tobacco",
    "Chipped, cracked, or worn enamel",
    "Small gaps or minor misalignment",
    "Uneven or misshapen teeth",
    "Old, discolored fillings affecting appearance",
    "Anyone seeking a confidence-boosting smile upgrade",
  ],
  risks: [
    "Temporary sensitivity after whitening",
    "Veneers require minimal irreversible enamel removal",
    "Bonding can stain or chip over time",
    "Results vary with habits like smoking or wine",
    "Not a substitute for treating underlying decay",
  ],
  recovery:
    "Cosmetic treatments usually need no downtime. Whitening may cause brief sensitivity, and bonding or veneers have a short adjustment period. Normal activity resumes immediately, with final results visible within days to a few weeks.",
  costRange: "₹5,000 – ₹1,50,000",
  duration: "1–3 visits (whitening in one)",
  doctorInsight:
    "Cosmetic work should never look fake. The best compliment is when people say you look great but cannot tell what changed. With the right shade, shape, and proportions, we create a smile that simply looks like the best version of you.",
  procedurePreparation: "Shade analysis and digital preview to plan color, shape, and proportions.",
  procedureFollowup: "A review visit to check comfort, shade, and bite after placement.",
  faqs: [
    {
      question: "What does cosmetic dentistry include?",
      answer:
        "Cosmetic dentistry includes professional teeth whitening, porcelain veneers, composite bonding, and gum contouring. These treatments improve the color, shape, and symmetry of your smile, often combined with general care.",
    },
    {
      question: "Is teeth whitening safe?",
      answer:
        "Yes, when done professionally. In-office whitening uses controlled products that are safe for enamel. Some temporary sensitivity is normal and resolves quickly. Over-the-counter overuse can harm enamel, so professional care is recommended.",
    },
    {
      question: "How long do veneers last?",
      answer:
        "Porcelain veneers typically last 10–15 years or more with good care. Avoiding habits like nail-biting and teeth-grinding, plus regular check-ups, helps them last longer.",
    },
    {
      question: "How much does cosmetic dentistry cost in Bangalore?",
      answer:
        "Whitening starts around ₹5,000–₹15,000, bonding ₹3,000–₹10,000 per tooth, and veneers ₹10,000–₹25,000 per tooth. A full smile makeover can range up to ₹1,50,000 depending on the plan.",
    },
    {
      question: "Will cosmetic dentistry look natural?",
      answer:
        "Yes. Dr. Prem Kumar matches shade, shape, and proportions to your face using digital planning, so results look natural rather than artificial. The goal is a refined, balanced smile.",
    },
    {
      question: "Can cosmetic and functional treatment be combined?",
      answer:
        "Absolutely. Many patients combine whitening or veneers with implants, alignment, or preventive care in a coordinated plan that improves both appearance and oral health.",
    },
  ],
  relatedCases: [
    { title: "Smile Design & Makeovers", href: "/services/smile-design" },
    { title: "Laser Gum Contouring", href: "/services/laser-dentistry" },
    { title: "Digital CAD/CAM Technology", href: "/technology" },
  ],
  relatedArticles: [
    { title: "Whitening at home vs in-clinic", href: "/knowledge-center" },
    { title: "Are veneers right for you?", href: "/knowledge-center" },
    { title: "Foods that stain your teeth", href: "/knowledge-center" },
  ],
};

export default function Page() {
  return <ServicePage data={data} />;
}

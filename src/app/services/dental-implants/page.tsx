import { Metadata } from "next";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Dental Implants Bangalore | Affordable Implants & Teeth Replacement | Dr. Prem Kumar R",
  description:
    "Permanent, natural tooth replacement with dental implants in Attur & Yelahanka, Bangalore. CBCT-guided microscopic placement, affordable implant costs, and snap-on dentures by Dr. Prem Kumar R.",
  keywords: [
    "implants",
    "dental implants near me",
    "implants near me",
    "affordable implants near me",
    "affordable dental implants near me",
    "low cost dental implants near me",
    "cheapest dental implants near me",
    "dental implants cost near me",
    "dental transplants",
    "dental implants Bangalore",
    "dental implants Yelahanka",
    "single tooth implant cost Bangalore",
    "best dental implant specialist Bangalore",
    "microscopic dental implant",
    "permanent tooth replacement Bangalore",
    "prosthodontist near me",
    "snap on dentures near me",
    "family teeth",
  ],
  openGraph: {
    type: "website",
    title: "Dental Implants Bangalore | Dr. Prem Kumar R",
    description: "Permanent, natural-looking teeth with microscopic implant precision in Bangalore.",
    url: "https://www.drpremkumar.in/services/dental-implants",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Dental Implants Bangalore" }],
  },
  alternates: { canonical: "/services/dental-implants" },
};

const data: ServicePageData = {
  slug: "dental-implants",
  name: "Dental Implants",
  shortName: "Implants",
  heroTagline: "Permanent, natural-looking tooth replacement placed with microscopic precision.",
  iconName: "sparkles",
  directAnswer:
    "A dental implant is a titanium post surgically placed into the jawbone to replace a missing tooth root, topped with a custom crown. Placed under microscopic guidance for accuracy, it fuses with bone over 3–6 months and looks, feels, and functions like a natural tooth for decades.",
  expanded: [
    "Dental implants are the gold standard for replacing missing teeth. A small biocompatible titanium post acts as an artificial root, integrated directly into the jawbone through a process called osseointegration.",
    "Dr. Prem Kumar uses CBCT 3D imaging and a surgical operating microscope to plan and place each implant with exceptional accuracy. This protects nearby nerves, sinuses, and adjacent teeth while ensuring ideal positioning for a natural-looking result.",
    "Once the implant has fused with the bone, a custom-made crown is attached. The result is a stable, permanent tooth that restores your ability to chew, speak, and smile with complete confidence.",
  ],
  whyImportant: [
    "Prevents jawbone loss that follows tooth extraction",
    "Restores full chewing power and clear speech",
    "Protects adjacent teeth from shifting out of place",
    "Maintains facial structure and a youthful profile",
    "A long-term, often lifelong solution versus bridges or dentures",
  ],
  benefits: [
    "Looks and feels like a natural tooth",
    "Preserves surrounding healthy teeth (no grinding down neighbors)",
    "Stops bone loss and preserves facial contours",
    "High long-term success rate with microscopic placement",
    "Stable and comfortable — no slipping like dentures",
    "Can last a lifetime with proper care",
  ],
  whoNeeds: [
    "One or more missing teeth",
    "A failed or failing tooth that cannot be saved",
    "A loose or uncomfortable denture",
    "Sufficient jawbone (or eligible for bone grafting)",
    "Good general and oral health for healing",
    "A desire for a permanent, fixed solution",
  ],
  risks: [
    "Minor swelling and bruising for a few days after surgery",
    "Rare infection at the implant site",
    "Small risk of nerve irritation or sinus involvement",
    "Implant failure if osseointegration does not occur",
    "Requires adequate bone; grafting may be needed first",
  ],
  recovery:
    "Soft-tissue healing takes 1–2 weeks, with most patients resuming normal activity within a couple of days. Complete bone integration takes 3–6 months before the final crown is placed. Stick to soft foods initially, follow oral hygiene instructions, and attend follow-up visits.",
  costRange: "₹25,000 – ₹45,000 per implant",
  duration: "Surgery 30–60 min; full process 3–6 months",
  doctorInsight:
    "An implant is the closest thing to getting your natural tooth back. Planning it under the microscope and with 3D imaging means I can place it exactly where it needs to be — safely and predictably — so it looks and functions beautifully for years.",
  procedurePreparation: "CBCT 3D scan and treatment planning; bone graft if bone volume is insufficient.",
  procedureFollowup: "Follow-up visits at 1 week, then periodic checks during the 3–6 month integration period.",
  faqs: [
    {
      question: "Are dental implants painful?",
      answer:
        "The implant surgery is done under local anesthesia, so you should not feel pain during the procedure. Post-surgical discomfort is usually mild and well-managed with medication, and most patients return to normal routines within a few days.",
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With good oral hygiene and regular check-ups, dental implants can last a lifetime. The titanium post integrates with bone, while the crown may need replacement after 10–15 years of normal wear.",
    },
    {
      question: "What is the recovery time for implants?",
      answer:
        "Initial gum healing takes 1–2 weeks. Full integration with the jawbone takes 3–6 months, after which the permanent crown is attached. Microscopic precision often makes healing more predictable.",
    },
    {
      question: "How much do dental implants cost in Bangalore?",
      answer:
        "At our clinic, a single implant ranges from ₹25,000 to ₹45,000, excluding the crown. Full-mouth or multiple implants cost more. A precise quote is given after your 3D scan and assessment.",
    },
    {
      question: "Am I too old for dental implants?",
      answer:
        "Age alone is not a barrier. As long as you are in reasonable health and have adequate bone, implants can be successful at any adult age. Bone grafting can help if volume is low.",
    },
    {
      question: "Why choose microscopic implant placement?",
      answer:
        "The microscope and 3D planning let Dr. Prem Kumar place implants with sub-millimeter accuracy, protecting nerves and sinuses and improving the long-term stability and appearance of your new tooth.",
    },
  ],
  relatedCases: [
    { title: "Microscopic Root Canal & Tooth Preservation", href: "/services/microscopic-root-canal" },
    { title: "Digital CBCT & Implant Technology", href: "/technology" },
    { title: "Cosmetic Restoration & Crowns", href: "/services/cosmetic-dentistry" },
  ],
  relatedArticles: [
    { title: "Implants vs bridges: which is better?", href: "/knowledge-center" },
    { title: "How osseointegration works", href: "/knowledge-center" },
    { title: "Caring for your dental implants", href: "/knowledge-center" },
  ],
};

export default function Page() {
  return <ServicePage data={data} />;
}

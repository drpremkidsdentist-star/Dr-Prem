import { Metadata } from "next";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Laser Dentistry Bangalore | Painless Laser Dental Treatment Dr. Prem Kumar",
  description:
    "Laser dentistry in Bangalore by Dr. Prem Kumar. Minimally invasive laser treatments for faster healing, less bleeding, and greater comfort across gum and soft-tissue procedures.",
  keywords: [
    "laser dentistry Bangalore",
    "painless laser dental treatment Bangalore",
    "laser gum treatment Bangalore",
    "soft tissue laser dentistry",
    "bloodless dental procedure Bangalore",
  ],
  openGraph: {
    type: "website",
    title: "Laser Dentistry Bangalore | Dr. Prem Kumar",
    description: "Minimally invasive laser treatments for faster healing and comfort.",
    url: "https://www.drpremkumar.in/services/laser-dentistry",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Laser Dentistry" }],
  },
  alternates: { canonical: "/services/laser-dentistry" },
};

const data: ServicePageData = {
  slug: "laser-dentistry",
  name: "Laser Dentistry",
  shortName: "Laser Care",
  heroTagline: "Minimally invasive laser treatments for faster healing and greater comfort.",
  iconName: "zap",
  directAnswer:
    "Laser dentistry uses focused light energy to treat gums, soft tissue, and some hard tissue with minimal bleeding and no drills or stitches in many cases. It reduces pain, speeds healing, and is ideal for gum reshaping, lesion removal, and bacterial reduction — usually completed in 15–60 minutes.",
  expanded: [
    "Dental lasers deliver precise, concentrated light that can cut or vaporize tissue with exceptional control. Because the laser simultaneously seals blood vessels and nerve endings, many procedures are nearly bloodless and far more comfortable.",
    "Common uses include gum contouring for a balanced smile, treating gum disease by removing infected tissue and bacteria, removing lesions or growths, and assisting in cavity preparation with less noise and vibration than a drill.",
    "Dr. Prem Kumar integrates laser technology with microscopic viewing for pinpoint accuracy, preserving healthy tissue and promoting faster, more comfortable recovery.",
  ],
  whyImportant: [
    "Minimizes bleeding and swelling during procedures",
    "Reduces need for drills, stitches, and anesthesia",
    "Lowers risk of infection through bacterial reduction",
    "Speeds up healing and recovery time",
    "Ideal for anxious patients who fear the drill",
  ],
  benefits: [
    "Greater comfort with less pain afterward",
    "Minimal or no bleeding during treatment",
    "Faster healing than traditional surgery",
    "Quieter, drill-free, anxiety-reducing experience",
    "Precise treatment that spares healthy tissue",
    "Lower infection risk post-procedure",
  ],
  whoNeeds: [
    "Gummy smile or uneven gum line",
    "Gum disease needing deep cleaning or surgery",
    "Painful mouth ulcers or soft-tissue lesions",
    "Cavity preparation without drill anxiety",
    "Frenulum (tongue-tie) or lip-tie concerns",
    "Patients wanting faster, gentler treatment",
  ],
  risks: [
    "Mild tenderness for a day or two",
    "Not suitable for every tooth or deep cavity",
    "Temporary sensitivity in treated areas",
    "Rare minor swelling or discoloration",
    "Eye protection required during the procedure",
  ],
  recovery:
    "Recovery is usually quick — most patients resume normal activity the same day. Treated areas may feel tender for 1–2 days; soft foods and gentle oral care are recommended. Complete tissue healing typically occurs within 1–2 weeks.",
  costRange: "₹2,000 – ₹20,000",
  duration: "15–60 minutes per session",
  doctorInsight:
    "Lasers let me treat soft tissue with a precision and gentleness that patients love. No drill noise, minimal bleeding, and faster healing — it is one of the kindest tools we have for anxious patients and delicate gum work.",
  procedurePreparation: "A brief assessment of the area; protective eyewear is used during the laser procedure.",
  procedureFollowup: "A short review if treating gum disease or after surgical laser work.",
  faqs: [
    {
      question: "Is laser dentistry painful?",
      answer:
        "Most laser procedures cause little to no pain. The laser seals nerve endings and blood vessels as it works, so discomfort is minimal and anesthesia is often not needed. Any soreness afterward is usually mild.",
    },
    {
      question: "What can laser dentistry treat?",
      answer:
        "Lasers treat gum disease, reshape gum lines, remove lesions and ulcers, assist in cavity preparation, and address tongue-tie or lip-tie. They are especially effective for soft-tissue and bacterial-reduction procedures.",
    },
    {
      question: "How long is the recovery after laser treatment?",
      answer:
        "Recovery is typically fast — often the same day. Mild tenderness may last 1–2 days, with full tissue healing in 1–2 weeks. Soft foods and gentle care help the area heal comfortably.",
    },
    {
      question: "How much does laser dentistry cost in Bangalore?",
      answer:
        "Laser treatments range from ₹2,000 for simple procedures to ₹20,000 for more extensive gum or surgical work. A precise estimate is provided after examining the treatment area.",
    },
    {
      question: "Is laser dentistry safe for children?",
      answer:
        "Yes. Laser dentistry is gentle and well-suited to children, especially for frenectomy or treating soft-tissue issues, since it is quiet, quick, and typically requires little or no anesthesia.",
    },
    {
      question: "Does laser replace the dental drill completely?",
      answer:
        "Not always. Lasers excel at soft-tissue and some early decay work, but traditional methods may still be needed for deeper cavities or certain restorations. Dr. Prem Kumar chooses the best tool for each case.",
    },
  ],
  relatedCases: [
    { title: "Gum contouring for a gummy smile", href: "/smile-gallery" },
    { title: "Laser gum disease therapy", href: "/smile-gallery" },
    { title: "Frenectomy for infant tongue-tie", href: "/smile-gallery" },
  ],
  relatedArticles: [
    { title: "Benefits of laser over traditional surgery", href: "/knowledge-center" },
    { title: "Treating gum disease early", href: "/knowledge-center" },
    { title: "What to expect from a laser procedure", href: "/knowledge-center" },
  ],
};

export default function Page() {
  return <ServicePage data={data} />;
}

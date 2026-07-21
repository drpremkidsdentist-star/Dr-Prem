import { Metadata } from "next";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";

export const metadata: Metadata = {
  title: "Microscopic Root Canal Treatment Bangalore | Dr. Prem Kumar",
  description:
    "Painless microscopic root canal treatment in Bangalore by Dr. Prem Kumar. Save your natural tooth with 30x magnification, single-visit precision, and faster healing.",
  keywords: [
    "microscopic root canal Bangalore",
    "painless root canal Bangalore",
    "root canal treatment cost Bangalore",
    "single visit root canal",
    "best root canal specialist Bangalore",
  ],
  openGraph: {
    type: "website",
    title: "Microscopic Root Canal Treatment Bangalore | Dr. Prem Kumar",
    description: "Save your natural tooth with 30x microscopic precision and single-visit comfort.",
    url: "https://www.drpremkumar.in/services/microscopic-root-canal",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Microscopic Root Canal Treatment" }],
  },
  alternates: { canonical: "/services/microscopic-root-canal" },
};

const data: ServicePageData = {
  slug: "microscopic-root-canal",
  name: "Microscopic Root Canal Treatment",
  shortName: "Root Canal",
  heroTagline: "Save your natural tooth with 30x microscopic precision and single-visit comfort.",
  iconName: "microscope",
  directAnswer:
    "A microscopic root canal is a procedure that removes infected pulp from inside a tooth using a surgical operating microscope for up to 30x magnification. It eliminates pain, saves your natural tooth, and is typically completed in a single 60–90 minute visit under local anesthesia with minimal discomfort.",
  expanded: [
    "A root canal becomes necessary when the soft pulp inside your tooth — containing nerves and blood vessels — becomes infected or inflamed due to deep decay, repeated dental work, cracks, or trauma. Left untreated, the infection can spread and lead to an abscess.",
    "Microscopic dentistry transforms the procedure. Dr. Prem Kumar uses a surgical operating microscope providing up to 30x magnification and focused illumination, revealing the tiny, curved canal anatomy invisible to the naked eye. This allows for complete cleaning, precise shaping, and three-dimensional sealing of every canal.",
    "Because the microscopic view is so detailed, the tooth structure removed is minimized and the risk of missing a canal drops dramatically. Most treatments are completed in a single comfortable visit, protecting your natural tooth for the long term.",
  ],
  whyImportant: [
    "Eliminates infection and severe tooth pain at its source",
    "Preserves your natural tooth instead of extracting it",
    "Prevents spread of infection to surrounding teeth and bone",
    "Microscopic precision reduces the need for retreatments",
    "Maintains your natural bite, jawbone, and facial structure",
  ],
  benefits: [
    "Higher success rate thanks to 30x magnified visualization",
    "Often completed in a single visit, saving you time",
    "Minimal removal of healthy tooth structure",
    "Less post-procedure discomfort and faster recovery",
    "Lower chance of missed canals or reinfection",
    "Natural tooth preserved for years to come",
  ],
  whoNeeds: [
    "Persistent, throbbing, or spontaneous tooth pain",
    "Sensitivity to hot or cold that lingers after the stimulus",
    "Darkening or discoloration of a tooth after trauma",
    "Swollen, tender gums or a pimple-like bump near a tooth",
    "Deep decay or a cracked tooth exposing the pulp",
    "A tooth that has had repeated dental procedures",
  ],
  risks: [
    "Mild soreness for a few days, managed with medication",
    "Rare chance of instrument separation in a curved canal",
    "Occasional need for a follow-up visit or crown placement",
    "Tooth may become slightly more brittle and need a crown",
    "Very rare post-treatment infection requiring retreatment",
  ],
  recovery:
    "Initial healing takes 1–3 days. Mild tenderness is normal and eases with over-the-counter pain relief. Avoid chewing on the treated side until the final crown is placed, and maintain gentle brushing and flossing. A follow-up crown is usually recommended within 2–4 weeks.",
  costRange: "₹6,000 – ₹15,000",
  duration: "60–90 minutes (often single visit)",
  doctorInsight:
    "The microscope changes everything. When I can see a canal that is a fraction of a millimeter wide, I can clean it completely and seal it properly. My patients are often surprised that a root canal is far more comfortable than the pain that brought them in.",
  procedurePreparation: "A diagnostic X-ray or CBCT scan and local anesthesia before the procedure.",
  procedureFollowup: "A follow-up crown placement is recommended within 2–4 weeks to protect the tooth.",
  faqs: [
    {
      question: "Is a microscopic root canal painful?",
      answer:
        "No. The procedure is performed under local anesthesia, so you feel little to no pain during treatment. Most patients report that it is far more comfortable than the toothache that prompted the visit, with only mild tenderness afterward.",
    },
    {
      question: "How is it different from a regular root canal?",
      answer:
        "A regular root canal relies on the naked eye or loupes, while a microscopic root canal uses a surgical operating microscope at up to 30x magnification. This reveals fine anatomy, reduces missed canals, and preserves more healthy tooth structure.",
    },
    {
      question: "Can it really be done in one visit?",
      answer:
        "In most cases, yes. Microscopic precision allows Dr. Prem Kumar to clean, shape, and seal the canal in a single 60–90 minute appointment. Complex infections may need a second visit for the best outcome.",
    },
    {
      question: "Will I need a crown after the root canal?",
      answer:
        "In most cases, yes. A treated tooth becomes more brittle over time, and a crown protects it from fracture. The crown is typically placed 2–4 weeks after the procedure once healing is confirmed.",
    },
    {
      question: "How long does a microscopic root canal last?",
      answer:
        "With a proper crown and good oral hygiene, a microscopically treated tooth can last decades or a lifetime. The higher precision of the procedure improves long-term success compared to conventional methods.",
    },
    {
      question: "What is the cost of a root canal in Bangalore?",
      answer:
        "Microscopic root canal treatment at our clinic ranges from ₹6,000 to ₹15,000 depending on the tooth and complexity. A separate crown typically adds ₹8,000–₹25,000. Exact pricing is confirmed after consultation.",
    },
  ],
  relatedCases: [
    { title: "Single-visit molar root canal", href: "/smile-gallery" },
    { title: "Saving a traumatized front tooth", href: "/smile-gallery" },
    { title: "Retreatment of a failed root canal", href: "/smile-gallery" },
  ],
  relatedArticles: [
    { title: "Why microscopic dentistry improves root canal success", href: "/knowledge-center" },
    { title: "Signs you may need a root canal", href: "/knowledge-center" },
    { title: "Root canal vs extraction: what to choose", href: "/knowledge-center" },
  ],
};

export default function Page() {
  return <ServicePage data={data} />;
}

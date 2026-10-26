import { Metadata } from "next";
import Script from "next/script";
import { ServicePage, ServicePageData } from "@/components/sections/ServicePage";
import { BreadcrumbSchema } from "@/lib/schemas";

export const metadata: Metadata = {
  title: "Microscopic Root Canal Treatment Bengaluru | Dr. Prem Kumar R",
  description:
    "Microscope-assisted root canal treatment (RCT) by Dr. Prem Kumar R in Bengaluru. Surgical microscope technique, calcified canal scouting, and tooth preservation.",
  alternates: { canonical: "https://drpremkumar.in/services/microscopic-root-canal" },
  openGraph: {
    type: "website",
    title: "Microscopic Root Canal Treatment Bengaluru | Dr. Prem Kumar R",
    description:
      "Microscope-assisted root canal treatment by Dr. Prem Kumar R at Kumar's Microscopic Dental Care, Yelahanka New Town.",
    url: "https://drpremkumar.in/services/microscopic-root-canal",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Microscopic Root Canal Treatment" }],
  },
};

const data: ServicePageData = {
  slug: "microscopic-root-canal",
  name: "Microscope-Assisted Root Canal Treatment",
  shortName: "Microscopic RCT",
  heroTagline: "High-magnification surgical visualization to clean, disinfect, and preserve natural teeth.",
  iconName: "microscope",
  directAnswer:
    "Microscope-assisted root canal treatment involves performing endodontic disinfection and shaping under a dental operating microscope with up to 25× magnification and shadowless coaxial illumination. In my clinical practice, this precision allows the identification of extra canals, calcified anatomy, and micro-fractures that are invisible to the unaided eye, helping preserve natural teeth that might otherwise face extraction.",
  expanded: [
    "A root canal becomes necessary when bacterial invasion reaches the dental pulp — the neurovascular tissue inside the root channels. While conventional root canals rely on tactile feedback or low-magnification loupes, operating under a surgical microscope reveals the complete internal complexity of each canal.",
    "In treating teeth with calcified channels, acute curvature, or previous treatment complications, microscopic magnification enables conservative access cavity design. By targeting only diseased tissue, I preserve maximum sound dentin, which is critical for the long-term structural integrity of the tooth.",
    "All microscopic endodontic procedures are conducted under local anesthesia with digital rubber dam isolation, ensuring a sterile, comfortable, and predictable clinical sequence.",
  ],
  whyImportant: [
    "Preserves natural teeth by eliminating internal pulp infection",
    "Illuminates extra and calcified canals that conventional methods may miss",
    "Conserves healthy tooth structure through micro-surgical access",
    "Enables non-surgical retreatment of previously failing root canals",
    "Maintains normal chewing function and jawbone volume",
  ],
  benefits: [
    "High-magnification visualization (up to 25×) with shadowless coaxial LED optics",
    "Reduced risk of missed canals, under-filling, or perforation",
    "Single-visit completion in suitable clinical cases",
    "Minimal removal of healthy tooth structure",
    "Conducted at Kumar's Microscopic Dental Care, Yelahanka New Town",
  ],
  whoNeeds: [
    "Patients experiencing lingering pain to hot or cold stimuli",
    "Teeth diagnosed with deep decay touching the pulp chamber",
    "Teeth with persistent abscess or swelling at the root tip",
    "Patients seeking evaluation for a previously treated tooth with persistent discomfort",
    "Complex canal anatomies, including molars with suspected fourth or fifth canals",
  ],
  risks: [
    "Post-operative ligament tenderness for 2–4 days, managed with anti-inflammatory medication",
    "Severely calcified canals may require specialized micro-ultrasonic negotiation",
    "Treated teeth require coronal restoration or crown to prevent structural fracture",
  ],
  recovery:
    "Mild tenderness when chewing is normal for 48–72 hours following treatment. Patients can resume routine daily activities immediately, avoiding hard chewing on the treated tooth until the definitive restoration or crown is seated.",
  costRange: "Clinical fees vary based on canal complexity and tooth location",
  duration: "60–90 minutes per session",
  doctorInsight:
    "The dental operating microscope has fundamentally elevated what we can achieve in tooth preservation. When every canal orifice and isthmus is illuminated at 25× magnification, endodontic therapy transforms from guesswork into predictable, micro-surgical precision.",
  procedurePreparation: "Diagnostic digital radiographs or CBCT evaluation and comprehensive pulp vitality testing.",
  procedureFollowup: "Coronal crown placement within 2–4 weeks to seal and protect the restored tooth.",
  faqs: [
    {
      question: "How does a microscope improve root canal treatment?",
      answer:
        "The surgical microscope magnifies the root canal system up to 25 times and projects shadowless light deep into the roots. This makes it possible to locate fine hidden canals, identify micro-cracks, and thoroughly clean anatomical variations.",
    },
    {
      question: "Can a root canal be completed in a single visit?",
      answer:
        "Yes. In many cases of vital pulp involvement or controlled infection, microscope-assisted root canal treatment can be completed thoroughly in a single 60–90 minute session.",
    },
    {
      question: "Where are microscopic root canal treatments performed?",
      answer:
        "Treatments are performed at Kumar's Microscopic Dental Care, No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bengaluru.",
    },
    {
      question: "How can I book a root canal consultation?",
      answer:
        "You can book directly at kumarsdentistry.in/appointments, contact the front desk at +91 81972 80019, or submit a request on drpremkumar.in/book-appointment.",
    },
  ],
  relatedCases: [
    { title: "Pediatric & Preventive Dentistry", href: "/services/pediatric-dentistry" },
    { title: "Clinical Mentorship in Endodontics", href: "/education" },
  ],
  relatedArticles: [
    { title: "Microscopic Root Canal Clinical Guide", href: "/knowledge-center/microscopic-root-canal" },
    { title: "Clinic Treatment: Microscopic Dentistry", href: "https://kumarsdentistry.in/treatments/microscopic-dentistry" },
  ],
};

const breadcrumbSchema = BreadcrumbSchema([
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Microscopic Root Canal", href: "/services/microscopic-root-canal" },
]);

export default function Page() {
  return (
    <>
      <Script
        id="schema-breadcrumb-rct"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicePage data={data} clinicUrl="https://kumarsdentistry.in/treatments/microscopic-dentistry" />
    </>
  );
}

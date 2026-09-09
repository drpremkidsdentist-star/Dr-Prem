import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown, HelpCircle, BookOpen, ArrowRight, Sparkles } from "lucide-react";
import { FAQSchema } from "@/lib/schemas";
import { clinicContact } from "@/lib/siteAssets";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dr. Prem Kumar R | Microscopic Dentist Bangalore",
  description:
    "Everything you need to know about Dr. Prem Kumar R, microscopic root canal treatments, painless pediatric dentistry, costs, and clinic timings in Attur, Yelahanka Bangalore.",
  keywords: [
    "Dr Prem Kumar dentist",
    "microscopic root canal cost Bangalore",
    "pediatric dentist Bangalore FAQ",
    "best dentist in Yelahanka",
    "painless root canal Bangalore",
  ],
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "Who is Dr. Prem Kumar R and what is his specialty?",
    answer:
      "Dr. Prem Kumar R is Bangalore's leading pediatric dentist and microscopic endodontics specialist. Holding an MDS in Pediatric & Preventive Dentistry and having served as an Assistant Professor at M.S. Ramaiah Dental College & Hospital, he specializes in fear-free kids dentistry and 25x surgical operating microscope root canals at Kumar's Microscopic Dental Care in Yelahanka New Town, Bangalore.",
    category: "Specialist Doctor",
  },
  {
    question: "Where is Kumar's Microscopic Dental Care located?",
    answer:
      "The clinic is located at No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore – 560064 (near Attur Layout). We serve patients from across Yelahanka, Hebbal, Sahakara Nagar, Jakkur, Doddaballapur, and North Bangalore. Call +91 81972 80019 for appointments.",
    category: "Clinic Location",
  },
  {
    question: "Can Dr. Prem Kumar save teeth that other dentists recommended extracting?",
    answer:
      "Yes. With surgical operating microscopes magnifying tooth anatomy up to 25 times under shadowless coaxial lighting, Dr. Prem Kumar specializes in locating hidden extra canals, scouting calcified canals, and retrieving fractured instruments, successfully saving natural teeth from unnecessary extractions with a 98%+ clinical success rate.",
    category: "Procedures",
  },
  {
    question: "What is microscopic dentistry and why is it better?",
    answer:
      "Microscopic dentistry uses advanced surgical operating microscopes (providing up to 25× optical magnification) rather than the naked eye. This allows for pinpoint diagnosis of micro-cracks, thorough root canal disinfection, preservation of healthy tooth structure, and painless single-visit treatments.",
    category: "General",
  },
  {
    question: "What age should children have their first dental visit?",
    answer:
      "Both the American Academy and Indian Academy of Pediatric Dentistry recommend a child's first dental visit by their first birthday, or within six months of their first milk tooth erupting. Early visits prevent Early Childhood Caries (bottle tooth decay) and build positive, fear-free habits.",
    category: "Pediatric",
  },
  {
    question: "How does Dr. Prem Kumar make dental visits fear-free for children?",
    answer:
      "Dr. Prem Kumar uses specialized child behavior guidance, gentle tell-show-do techniques, needleless surface numbing, and nitrous oxide ('laughing gas') conscious sedation. Children leave with zero dental phobia, a sense of accomplishment, and a 'Dental Bravery Certificate'.",
    category: "Pediatric",
  },
  {
    question: "How long does a microscopic root canal treatment take?",
    answer:
      "With microscopic precision, most root canal treatments are completed smoothly in a single visit lasting 60–90 minutes. The optical magnification allows the doctor to cleanse and seal all nerve canals swiftly and completely without discomfort.",
    category: "Procedures",
  },
  {
    question: "Are dental implants painful and how long do they last?",
    answer:
      "Dental implant procedures are performed under gentle local anesthesia and are virtually painless. With 3D CBCT digital planning, titanium implants fuse directly with the jawbone and can last a lifetime with proper oral hygiene.",
    category: "Procedures",
  },
  {
    question: "What is Digital Smile Design (DSD) and Clear Aligners?",
    answer:
      "Digital Smile Design allows you to preview a 3D digital simulation of your new smile before starting treatment. Combined with Invisalign and clear aligners, we straighten crooked or spaced teeth discreetly without metal wires or brackets.",
    category: "Cosmetic",
  },
  {
    question: "What are the clinic timings and consultation fee?",
    answer:
      "Kumar's Microscopic Dental Care is open Monday to Saturday from 10:00 AM to 9:00 PM, and Sunday from 10:00 AM to 6:00 PM (by appointment). We maintain transparent clinical pricing with UPI, credit card, and digital payment support.",
    category: "General",
  },
];

export default function FAQPage() {
  const jsonLd = FAQSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })));

  return (
    <main className="min-h-screen pt-28 pb-20 bg-white">
      {/* Google Rich Snippet JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container-custom">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center gap-2 text-xs text-neutral-500 font-medium">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-neutral-900 font-semibold">Frequently Asked Questions</li>
          </ol>
        </nav>

        <div className="max-w-3xl mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 text-accent text-xs font-bold uppercase tracking-widest mb-3 border border-sky-200/80">
            <Sparkles className="size-3.5" /> Patient Knowledge & AEO Engine
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-primary tracking-tight leading-tight">
            Frequently Asked <span className="text-accent italic font-normal">Questions</span>
          </h1>
          <p className="text-base sm:text-lg text-neutral-600 mt-3 leading-relaxed">
            Verified answers about Dr. Prem Kumar R, microscopic root canal treatments, pediatric dentistry, and clinic appointments in Yelahanka, Bangalore.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="max-w-3xl space-y-4 mb-20">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group bg-neutral-50 rounded-2xl border border-neutral-200/80 overflow-hidden shadow-soft hover:shadow-md transition-shadow"
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer text-left font-bold text-primary text-base sm:text-lg select-none">
                <span>{faq.question}</span>
                <ChevronDown className="w-5 h-5 text-neutral-400 shrink-0 ml-3 transition-transform duration-300 group-open:rotate-180" />
              </summary>
              <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-neutral-700 leading-relaxed space-y-3">
                <p>{faq.answer}</p>
                <div className="pt-2">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-accent bg-sky-100/70 px-2.5 py-1 rounded-full">
                    {faq.category}
                  </span>
                </div>
              </div>
            </details>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="max-w-3xl rounded-2xl bg-primary text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold">Have a specific question about your teeth?</h3>
            <p className="text-xs sm:text-sm text-sky-200">
              Speak directly with Dr. Prem Kumar R or book your consultation slot online.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-colors"
            >
              Call Clinic
            </a>
            <Link
              href="/book-appointment"
              className="px-5 py-2.5 rounded-full bg-accent hover:bg-accent/90 text-white text-xs font-bold shadow-md transition-colors"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

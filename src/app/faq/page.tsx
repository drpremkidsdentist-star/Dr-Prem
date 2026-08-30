import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ChevronDown, HelpCircle, BookOpen, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ | Microscopic Dentist Attur, Yelahanka & Bangalore | Dr. Prem Kumar R",
  description:
    "Answers about microscopic dentistry, kids dental visits, root canals, implants, and booking at Dr. Prem Kumar R’s Attur–Yelahanka clinic serving Hebbal & Doddaballapur.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  {
    question: "What is microscopic dentistry?",
    answer:
      "Microscopic dentistry uses advanced surgical operating microscopes with high magnification and focused illumination. This allows dentists to see details invisible to the naked eye, enabling more precise diagnoses and treatments with minimal invasiveness.",
    category: "General",
  },
  {
    question: "Is microscopic dentistry more expensive than traditional dentistry?",
    answer:
      "While microscopic dentistry involves specialized surgical optics, it often results in fewer complications, reduced need for retreatment, and long-term cost savings. The precision of microscopic procedures means better outcomes and fewer follow-up visits.",
    category: "General",
  },
  {
    question: "What age should children start visiting the dentist?",
    answer:
      "Children should have their first dental visit by their first birthday or within six months of their first tooth appearing. Early visits help establish good oral hygiene habits and allow for early detection of potential issues.",
    category: "Pediatric",
  },
  {
    question: "How long does a root canal treatment take?",
    answer:
      "With microscopic dentistry, most root canal treatments can be completed in 60–90 minutes in a single visit. The precision of the microscope allows for accurate canal location and thorough disinfection.",
    category: "Procedures",
  },
  {
    question: "Are dental implants painful?",
    answer:
      "Dental implant procedures are performed under local anesthesia and are generally well-tolerated. Post-operative discomfort is usually minimal and can be managed with prescribed medication. Most patients report that the procedure was much more comfortable than expected.",
    category: "Procedures",
  },
  {
    question: "What is the recovery time for dental implants?",
    answer:
      "Initial healing typically takes 1–2 weeks, with complete osseointegration (fusion with the jawbone) taking 3–6 months. With microscopic precision, healing is predictable and comfortable.",
    category: "Procedures",
  },
  {
    question: "How long do dental implants last?",
    answer:
      "With proper care and maintenance, dental implants can last a lifetime. The implant itself is made of biocompatible titanium that fuses with the jawbone, while the crown typically lasts 10–15 years before needing replacement.",
    category: "Procedures",
  },
  {
    question: "What is digital smile design?",
    answer:
      "Digital smile design is a computer-aided technology that allows you to preview your new smile before any treatment begins. Using advanced software, we can simulate various treatment options and show you the expected results.",
    category: "Cosmetic",
  },
  {
    question: "Do you treat children?",
    answer:
      "Yes, we specialize in pediatric dentistry with a child-friendly approach. Our clinic is designed to make children feel comfortable, and Dr. Prem Kumar is experienced in making dental visits positive experiences for kids.",
    category: "Pediatric",
  },
  {
    question: "What payment options are available?",
    answer:
      "We accept various payment methods including cash, credit/debit cards, and major insurance plans. We also offer flexible payment plans for comprehensive treatments. Please contact our office for specific details.",
    category: "General",
  },
  {
    question: "How do I book an appointment?",
    answer:
      "You can book an appointment by calling our clinic directly, using our online booking form, or through our mobile app. We offer flexible scheduling including evening and weekend appointments.",
    category: "General",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive oral examination, digital X-rays if needed, and a detailed discussion of your dental health. Dr. Prem Kumar will create a personalized treatment plan based on your needs and goals.",
    category: "General",
  },
];

export default function FAQPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">FAQ</span>
          </nav>

          <div className="max-w-3xl mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Frequently Asked{" "}
              <span className="font-serif italic text-accent">Questions</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Find answers to commonly asked questions about microscopic dentistry, treatments, costs, recovery, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-4 mb-20">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-soft hover:shadow-md transition-shadow"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer text-left font-semibold text-primary">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-neutral-600 leading-relaxed mb-3">{faq.answer}</p>
                  <span className="inline-block text-xs text-accent bg-accent/10 px-3 py-1 rounded-full capitalize">
                    {faq.category}
                  </span>
                </div>
              </details>
            ))}
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "The Complete Guide to Microscopic Root Canal Treatment", slug: "microscopic-root-canal" },
                { title: "Dental Implants: What You Need to Know", slug: "dental-implant-guide" },
                { title: "Pediatric Dental Care: Building Healthy Habits Early", slug: "pediatric-dental-care" },
              ].map((article) => (
                <Link
                  key={article.slug}
                  href={`/knowledge-center/${article.slug}`}
                  className="block p-6 rounded-2xl bg-white border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <span className="text-xs text-accent font-medium">Article</span>
                  </div>
                  <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-100 shadow-soft">
              <HelpCircle className="w-6 h-6 text-accent" />
              <p className="text-neutral-600">
                Still have questions?{" "}
                <Link href="/contact" className="text-accent font-medium hover:underline">
                  Contact us directly
                </Link>{" "}
                or call{" "}
                <a href="tel:+918197280019" className="text-accent font-medium hover:underline">
                  +91 81972 80019
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is microscopic dentistry?",
    answer:
      "Microscopic dentistry uses advanced surgical operating microscopes with high magnification and focused illumination. This allows dentists to see micro-structures invisible to the naked eye, enabling more precise diagnoses and treatments with minimal invasiveness.",
    category: "General",
  },
  {
    question: "Is microscopic dentistry more expensive than traditional dentistry?",
    answer:
      "While microscopic dentistry involves specialized surgical optics, it often results in fewer complications, reduced need for retreatment, and long-term tooth preservation, providing excellent long-term clinical value.",
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
      "With microscopic dentistry, most root canal treatments can be completed smoothly in 60–90 minutes in a single visit. The precision of the operating microscope allows for accurate canal location and thorough disinfection.",
    category: "Procedures",
  },
  {
    question: "Are dental implants painful?",
    answer:
      "Dental implant procedures are performed under local anesthesia and are generally well-tolerated. Post-operative discomfort is usually minimal and manageable with standard care. Most patients report that the procedure was much more comfortable than expected.",
    category: "Procedures",
  },
  {
    question: "What is the recovery time for dental implants?",
    answer:
      "Initial healing typically takes 1–2 weeks, with complete osseointegration (fusion with the jawbone) taking 3–6 months. With microscopic precision, healing is predictable and gentle.",
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
      "Yes, we specialize in pediatric dentistry with a child-friendly approach. Our clinic is designed to make children feel comfortable, and Dr. Prem Kumar R (MDS Pediatric & Preventive Dentistry) is experienced in gentle behavior guidance.",
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

export function FAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = ["all", "General", "Pediatric", "Procedures", "Cosmetic"];
  const filteredFaqs =
    activeCategory === "all" ? faqs : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <section id="faq" className="section-padding bg-neutral-50">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Frequently Asked{" "}
            <span className="font-serif italic text-accent">Questions</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Find answers to common questions about microscopic dentistry, treatments,
            costs, and more.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize ${
                activeCategory === category
                  ? "bg-accent text-white shadow-glow"
                  : "bg-white text-neutral-600 hover:bg-neutral-100 border border-neutral-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
              className="bg-white rounded-2xl border border-neutral-100 overflow-hidden shadow-soft hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left"
              >
                <span className="font-semibold text-primary pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-neutral-400 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5"
                >
                  <p className="text-neutral-600 leading-relaxed">{faq.answer}</p>
                  <span className="inline-block mt-3 text-xs text-accent bg-accent/10 px-3 py-1 rounded-full">
                    {faq.category}
                  </span>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 p-4 rounded-2xl bg-white border border-neutral-100 shadow-soft">
            <HelpCircle className="w-6 h-6 text-accent" />
            <p className="text-neutral-600">
              Still have questions?{" "}
              <a href="#book-appointment" className="text-accent font-medium hover:underline">
                Contact us directly
              </a>{" "}
              or call{" "}
              <a href="tel:+918197280019" className="text-accent font-medium hover:underline">
                +91 81972 80019
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Zap, Eye, Shield, Heart } from "lucide-react";
import Link from "next/link";
import { siteImages, siteVideos } from "@/lib/siteAssets";

export function MicroscopicDentistry() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = [
    {
      icon: Eye,
      title: "Enhanced Visualization",
      description: "Operating microscopes provide high-definition magnification for unparalleled clinical precision.",
    },
    {
      icon: Zap,
      title: "Minimally Invasive",
      description: "Precise visualization means smaller incisions and faster healing times.",
    },
    {
      icon: Shield,
      title: "Superior Accuracy",
      description: "Identify and treat problems invisible to the naked eye with exceptional accuracy.",
    },
    {
      icon: Heart,
      title: "Better Patient Comfort",
      description: "Less tissue trauma results in reduced pain, swelling, and faster recovery.",
    },
  ];

  const faqs = [
    {
      question: "What is microscopic dentistry?",
      answer:
        "Microscopic dentistry uses advanced surgical operating microscopes to perform dental procedures with extreme precision. The magnification and illumination allow dentists to see details invisible to the naked eye, resulting in more accurate diagnoses and treatments.",
    },
    {
      question: "What procedures benefit from microscopic dentistry?",
      answer:
        "Microscopic dentistry is particularly beneficial for root canal treatments, dental implants, cosmetic procedures, and complex restorative work. It allows for precise removal of decay, accurate canal location during root canals, and meticulous preparation for implants and crowns.",
    },
    {
      question: "Is microscopic dentistry painful?",
      answer:
        "No, microscopic dentistry is actually less painful than traditional methods. The precision of the microscope allows for minimally invasive procedures, which means less tissue trauma, reduced bleeding, and faster healing times with minimal discomfort.",
    },
  ];

  return (
    <section id="microscopic-dentistry" className="section-padding bg-neutral-50">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Microscopic Dentistry
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            The Future of{" "}
            <span className="font-serif italic text-accent">Dental Precision</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Microscopic dentistry uses high magnification and focused illumination to detect and
            treat details that standard vision can miss. This improves accuracy, supports
            conservative treatment, and often leads to faster recovery with better long-term
            outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="video-container aspect-video bg-primary rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover scale-[1.08]"
                autoPlay
                muted
                loop
                playsInline
                poster={siteImages.microscope}
              >
                <source src={siteVideos.microscope} type="video/mp4" />
              </video>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-primary mb-6">
              What is Microscopic Dentistry?
            </h3>
            <p className="text-neutral-600 leading-relaxed">
              Microscopic dentistry represents a paradigm shift in dental treatment. Using
              advanced surgical operating microscopes, Dr. Prem Kumar R performs procedures with extraordinary precision. This technology allows for the detection and treatment of micro-structural issues that would be impossible to identify with the naked eye.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-neutral-100 hover:shadow-soft transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">{benefit.title}</h4>
                    <p className="text-sm text-neutral-600">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-neutral-100">
          <h3 className="text-3xl font-bold text-primary mb-8 text-center">
            Frequently Asked Questions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="space-y-3"
              >
                <h4 className="font-semibold text-primary flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                  {faq.question}
                </h4>
                <p className="text-sm text-neutral-600 leading-relaxed">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="#faq" className="btn-secondary">
              View All FAQs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

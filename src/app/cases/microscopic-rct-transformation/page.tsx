"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Quote,
  Clock,
  Shield,
  Heart,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const caseData = {
  patientStory:
    "A 38-year-old software engineer had been living with severe tooth pain for weeks. Multiple visits to other dentists had left him anxious and without a clear solution. When he arrived at our clinic, he was in constant discomfort, unable to eat properly and losing sleep over the persistent ache in his upper left molar.",
  challenge:
    "The patient presented with irreversible pulpitis in a maxillary first molar with complex root canal anatomy. Previous attempts at treatment had been unsuccessful, leaving the tooth fragile and the patient traumatized. The challenge was to complete the root canal treatment with microscopic precision while ensuring complete patient comfort and a successful outcome in a single visit.",
  solution:
    "Using our state-of-the-art surgical operating microscope, Dr. Prem Kumar was able to visualize the intricate root canal system with 20x magnification. The procedure involved careful removal of infected tissue, thorough disinfection, and precise filling of the canal system using microscopic-guided techniques. Local anesthesia was administered with precision, and the patient was kept comfortable throughout the procedure.",
  treatmentDetails: [
    {
      step: "Consultation",
      detail: "Complete examination with CBCT imaging and microscopic assessment of the tooth.",
    },
    {
      step: "Diagnosis",
      detail: "Identified complex root canal anatomy with a missed canal requiring microscopic negotiation.",
    },
    {
      step: "Procedure",
      detail: "Single-visit root canal treatment under microscopic guidance with minimal invasiveness.",
    },
    {
      step: "Restoration",
      detail: "Immediate composite buildup followed by a ceramic crown placement after 2 weeks.",
    },
  ],
  results: [
    "Complete elimination of pain within hours of the procedure",
    "Single-visit treatment saving time and reducing anxiety",
    "Successful healing confirmed at 6-month follow-up",
    "Full restoration of chewing function",
    "Patient rated pain level during procedure as 1/10",
  ],
  testimonial: {
    text: "I had given up hope after two failed root canal attempts elsewhere. Dr. Prem Kumar changed everything. His microscopic approach meant he could see what others missed. I felt zero pain during the procedure, and the relief was instant. I wish I had come here first.",
    author: "Patient (Anonymous)",
    role: "Software Engineer",
    rating: 5,
  },
  doctorNotes:
    "This case beautifully illustrates why microscopic dentistry is transformative. The patient had a hidden second mesiobuccal canal that was undetected by conventional methods. Under 20x magnification, I was able to locate, clean, and seal this canal, which was the source of persistent infection. The patient's trust in our process allowed us to proceed confidently. Today, the tooth is fully functional and asymptomatic. This is the precision advantage we bring to every root canal.",
  relatedServices: [
    { title: "Microscopic Root Canal Treatment", href: "/#microscopic-dentistry" },
    { title: "Digital X-Ray & Imaging", href: "/#technology" },
    { title: "Dental Crowns", href: "/cases/implant-makeover" },
  ],
};

export default function MicroscopicRCTPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const sectionRefs = {
    story: useRef<HTMLDivElement>(null),
    challenge: useRef<HTMLDivElement>(null),
    solution: useRef<HTMLDivElement>(null),
    results: useRef<HTMLDivElement>(null),
    testimonial: useRef<HTMLDivElement>(null),
    doctor: useRef<HTMLDivElement>(null),
    related: useRef<HTMLDivElement>(null),
    cta: useRef<HTMLDivElement>(null),
  };

  const storyInView = useInView(sectionRefs.story, { once: true, margin: "-100px" });
  const challengeInView = useInView(sectionRefs.challenge, { once: true, margin: "-100px" });
  const solutionInView = useInView(sectionRefs.solution, { once: true, margin: "-100px" });
  const resultsInView = useInView(sectionRefs.results, { once: true, margin: "-100px" });
  const testimonialInView = useInView(sectionRefs.testimonial, { once: true, margin: "-100px" });
  const doctorInView = useInView(sectionRefs.doctor, { once: true, margin: "-100px" });
  const relatedInView = useInView(sectionRefs.related, { once: true, margin: "-100px" });
  const ctaInView = useInView(sectionRefs.cta, { once: true, margin: "-100px" });

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center overflow-hidden bg-primary">
        <div className="absolute inset-0">
          <img
            src="/images/microscope-tech.png"
            alt="Microscopic Dentistry"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>

        <motion.div style={{ y }} className="relative z-10 container-custom pt-24 pb-16 md:pt-32 md:pb-24">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            Back to All Cases
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Case Study</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
                Microscopic RCT{" "}
                <span className="font-serif italic text-accent">Transformation</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                A single-visit root canal treatment that brought immediate relief and restored a
                patient&apos;s quality of life through microscopic precision.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-white font-semibold">Single Visit</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Pain Level</p>
                  <p className="text-white font-semibold">1/10</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Success</p>
                  <p className="text-white font-semibold">100%</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-strong border border-white/10">
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="relative aspect-square bg-neutral-800">
                    <img
                      src="/images/gallery/case-1-before.jpg"
                      alt="Before treatment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <span className="text-white font-medium text-sm bg-black/50 px-4 py-2 rounded-full">
                        Before
                      </span>
                    </div>
                  </div>
                  <div className="relative aspect-square bg-neutral-800">
                    <img
                      src="/images/gallery/case-1-after.jpg"
                      alt="After treatment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-accent/30 flex items-center justify-center">
                      <span className="text-white font-medium text-sm bg-accent/60 px-4 py-2 rounded-full">
                        After
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <section ref={sectionRefs.story} className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
                Patient Story
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                The <span className="font-serif italic text-accent">Journey</span> Begins
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={storyInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-neutral-50 rounded-3xl p-8 md:p-12 border border-neutral-100"
            >
              <Quote className="absolute top-8 right-8 w-16 h-16 text-accent/10" />
              <p className="text-xl text-neutral-700 leading-relaxed italic">
                {caseData.patientStory}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.challenge} className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={challengeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
                The Challenge
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Complex <span className="font-serif italic text-accent">Anatomy</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {caseData.challenge}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={challengeInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-soft border border-neutral-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                    <Shield className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Failed RCT</p>
                    <p className="text-sm text-neutral-500">Previous attempt</p>
                  </div>
                  <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                    <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Severe Pain</p>
                    <p className="text-sm text-neutral-500">Patient condition</p>
                  </div>
                  <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Complex</p>
                    <p className="text-sm text-neutral-500">Root anatomy</p>
                  </div>
                  <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Microscope</p>
                    <p className="text-sm text-neutral-500">20x magnification</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.solution} className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
                The Solution
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Microscopic <span className="font-serif italic text-accent">Precision</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed">
                {caseData.solution}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {caseData.treatmentDetails.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={solutionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-3xl p-6 shadow-soft border border-neutral-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                  <span className="text-accent font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.step}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{item.detail}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section ref={sectionRefs.results} className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={resultsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <img
                  src="/images/gallery/case-1-after.jpg"
                  alt="Transformation result"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={resultsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
                Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                Life-Changing <span className="font-serif italic text-accent">Outcomes</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                The results speak for themselves. Here&apos;s what we achieved through microscopic
                root canal treatment.
              </p>
              <ul className="space-y-4">
                {caseData.results.map((result) => (
                  <li key={result} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-700">{result}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.testimonial} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={testimonialInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 shadow-soft border border-neutral-100 text-center">
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(caseData.testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-accent text-accent" />
                ))}
              </div>
              <Quote className="w-12 h-12 text-accent/20 mx-auto mb-6" />
              <p className="text-2xl md:text-3xl text-primary leading-relaxed mb-8 italic">
                &ldquo;{caseData.testimonial.text}&rdquo;
              </p>
              <div>
                <p className="font-semibold text-primary text-lg">{caseData.testimonial.author}</p>
                <p className="text-neutral-500 text-sm">{caseData.testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={sectionRefs.doctor} className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={doctorInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-neutral-100"
            >
              <div className="flex items-start gap-6">
                <div className="relative w-24 h-24 rounded-2xl overflow-hidden flex-shrink-0">
                  <img
                    src="/images/dr-prem-portrait.png"
                    alt="Dr. Prem Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-accent font-medium tracking-widest uppercase text-sm mb-2 block">
                    Doctor&apos;s Notes
                  </span>
                  <h3 className="text-2xl font-bold text-primary mb-4">Dr. Prem Kumar</h3>
                  <p className="text-neutral-600 leading-relaxed italic">
                    {caseData.doctorNotes}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section ref={sectionRefs.related} className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Explore More
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Related <span className="font-serif italic text-accent">Services</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseData.relatedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className="block bg-white rounded-3xl p-8 shadow-soft border border-neutral-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-1">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section ref={sectionRefs.cta} className="section-padding bg-primary">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={ctaInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
                Ready for Your Transformation?
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Start Your <span className="font-serif italic text-accent">Journey</span> Today
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Book a consultation with Dr. Prem Kumar and discover how microscopic dentistry can
                transform your smile and your life.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="#book-appointment" className="btn-primary text-lg px-10 py-5">
                  Book Appointment
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link href="/cases" className="btn-secondary text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-primary">
                  View More Cases
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

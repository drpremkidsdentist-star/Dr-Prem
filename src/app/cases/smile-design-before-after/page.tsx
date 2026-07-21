"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, Star, Quote, Sparkles, Heart, Palette } from "lucide-react";

const caseData = {
  patientStory:
    "A 28-year-old marketing professional had always been self-conscious about her smile. Uneven teeth, discoloration, and a gummy smile made her avoid photos and social interactions. She dreamed of having a Hollywood-worthy smile but was afraid of invasive procedures. That changed when she discovered digital smile design.",
  challenge:
    "The patient presented with multiple cosmetic concerns: discolored enamel, slight crowding, uneven gum line, and worn incisal edges. The challenge was to design a smile that was not only beautiful but also natural-looking and harmonious with her facial features, while preserving as much natural tooth structure as possible.",
  solution:
    "Using digital smile design technology, Dr. Prem Kumar created a virtual preview of the patient's new smile. The treatment combined porcelain veneers on the upper anterior teeth, professional whitening, and minor gum contouring. Every step was planned digitally, allowing the patient to preview and approve the final design before any work began.",
  treatmentDetails: [
    {
      step: "Digital Design",
      detail: "3D smile simulation created and approved by the patient, mapping the ideal shape, size, and color.",
    },
    {
      step: "Whitening",
      detail: "Professional in-office teeth whitening to achieve the perfect base shade for veneers.",
    },
    {
      step: "Veneers",
      detail: "Ultra-thin porcelain veneers custom-crafted and bonded for a seamless, natural appearance.",
    },
    {
      step: "Contouring",
      detail: "Laser gum contouring to create a balanced, symmetrical gum line.",
    },
  ],
  results: [
    "Perfectly aligned, uniform smile in just two weeks",
    "Shade selection that harmonized with skin tone and facial features",
    "Gum line symmetry that enhanced overall facial aesthetics",
    "Patient's confidence transformed - no longer hiding her smile",
    "Minimal preparation with maximum aesthetic impact",
  ],
  testimonial: {
    text: "I cried when I saw my new smile in the mirror. Dr. Prem Kumar didn't just give me beautiful teeth - he gave me back my confidence. The digital preview meant I knew exactly what to expect, and the result was even better than I imagined. I smile in every photo now!",
    author: "Patient (Anonymous)",
    role: "Marketing Professional",
    rating: 5,
  },
  doctorNotes:
    "Digital smile design has revolutionized cosmetic dentistry. For this patient, being able to see her new smile before we started gave her complete confidence in the process. We used a combination of porcelain veneers and whitening to achieve a result that was both stunning and natural. The key is always creating a smile that looks like it belongs to the patient - not a generic Hollywood smile. Every case is personalized to enhance the individual's unique features.",
  relatedServices: [
    { title: "Smile Design", href: "/#microscopic-dentistry" },
    { title: "Porcelain Veneers", href: "/cases/implant-makeover" },
    { title: "Teeth Whitening", href: "/cases/family-dental-journey" },
  ],
};

export default function SmileDesignPage() {
  const containerRef = useRef<HTMLDivElement>(null);
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
            src="/images/young-adult.png"
            alt="Smile Design"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
        </div>

        <div className="relative z-10 container-custom pt-24 pb-16 md:pt-32 md:pb-24">
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
                Smile Design{" "}
                <span className="font-serif italic text-accent">Before & After</span>
              </h1>
              <p className="text-lg text-white/70 leading-relaxed mb-8 max-w-xl">
                A digital smile makeover combining porcelain veneers and whitening to create a
                stunning, natural-looking Hollywood smile in just two weeks.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Duration</p>
                  <p className="text-white font-semibold">2 Weeks</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Veneers</p>
                  <p className="text-white font-semibold">8 Porcelain</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                  <p className="text-white/60 text-xs uppercase tracking-wider mb-1">Outcome</p>
                  <p className="text-white font-semibold">Hollywood Smile</p>
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
                      src="/images/gallery/case-3-before.jpg"
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
                      src="/images/gallery/case-3-after.jpg"
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
        </div>
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
                Aesthetic <span className="font-serif italic text-accent">Concerns</span>
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
                    <Palette className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Discolored</p>
                    <p className="text-sm text-neutral-500">Enamel staining</p>
                  </div>
                  <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                    <Heart className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Gummy</p>
                    <p className="text-sm text-neutral-500">Excess gingiva</p>
                  </div>
                  <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                    <Sparkles className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Uneven</p>
                    <p className="text-sm text-neutral-500">Teeth alignment</p>
                  </div>
                  <div className="text-center p-6 bg-neutral-50 rounded-2xl">
                    <CheckCircle className="w-8 h-8 text-accent mx-auto mb-3" />
                    <p className="text-2xl font-bold text-primary mb-1">Worn</p>
                    <p className="text-sm text-neutral-500">Incisal edges</p>
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
                Digital <span className="font-serif italic text-accent">Smile</span> Design
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
              <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
                Results
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
                The <span className="font-serif italic text-accent">Reveal</span>
              </h2>
              <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                The transformation was dramatic but natural. Here&apos;s what we achieved through
                digital smile design.
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
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={resultsInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-strong">
                <img
                  src="/images/gallery/case-3-after.jpg"
                  alt="Transformation result"
                  className="w-full h-auto object-cover"
                />
              </div>
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
                Design Your <span className="font-serif italic text-accent">Dream</span> Smile
              </h2>
              <p className="text-lg text-white/70 leading-relaxed mb-10">
                Book a consultation with Dr. Prem Kumar and discover how digital smile design can
                give you the smile you&apos;ve always wanted.
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

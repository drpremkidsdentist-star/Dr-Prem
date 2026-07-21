"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, ExternalLink } from "lucide-react";
import { clinicContact } from "@/lib/siteAssets";

/** Patient quotes published on the clinic site / Google profile — linked live to Maps */
const testimonials = [
  {
    id: 1,
    name: "Parent · Yelahanka",
    content:
      "Best kids dentist near me in Yelahanka! My 5-year-old daughter was scared, but Dr. Prem made her feel so comfortable. Now she actually looks forward to dental visits!",
    rating: 5,
    treatment: "Pediatric Dentistry",
  },
  {
    id: 2,
    name: "Patient · Attur",
    content:
      "Best RCT experience! Painless procedure with the microscope. Highly recommend.",
    rating: 5,
    treatment: "Microscopic Root Canal",
  },
  {
    id: 3,
    name: "Parent · Bangalore",
    content:
      "Dr. Prem is amazing! My son loves going there now. Very professional and caring.",
    rating: 5,
    treatment: "Kids Care",
  },
  {
    id: 4,
    name: "Parent · North Bangalore",
    content:
      "Found the best pediatric dentist in Bangalore! Very gentle with children. My 3-year-old had cavity filling done painlessly. Child-friendly environment.",
    rating: 5,
    treatment: "Pediatric Dentistry",
  },
  {
    id: 5,
    name: "Parent · Yelahanka",
    content:
      "Excellent pediatric dental care! Patient with nervous children. Clean clinic, professional staff. My twins love visiting Dr. Prem.",
    rating: 5,
    treatment: "Family Care",
  },
];

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const t = testimonials[currentIndex];

  return (
    <section id="testimonials" className="section-padding bg-neutral-50">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Google reviews
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            What Our{" "}
            <span className="font-serif italic text-accent">Patients</span> Say
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            {clinicContact.googleRating}/5 from {clinicContact.googleReviewCount} Google
            reviews at our Attur clinic — read them live on Maps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-soft border border-neutral-100">
            <Quote className="w-12 h-12 text-accent/20 mb-6" />
            <div className="flex items-center gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-xl md:text-2xl text-primary leading-relaxed mb-8 italic">
              &ldquo;{t.content}&rdquo;
            </p>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-primary text-lg">{t.name}</p>
                <span className="inline-block mt-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {t.treatment}
                </span>
              </div>
              <a
                href={clinicContact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                View on Google Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-accent w-6" : "w-2 bg-neutral-300 hover:bg-neutral-400"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-neutral-600 hover:bg-accent hover:text-white hover:border-accent transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: clinicContact.googleRating, label: "Google Rating" },
            { value: clinicContact.googleReviewCount, label: "Google Reviews" },
            { value: "Attur", label: "Flagship Clinic" },
            { value: "Kids + RCT", label: "Specialist Focus" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
              <p className="text-sm text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, Medal, Award, Star, ExternalLink } from "lucide-react";
import Link from "next/link";

export function Awards() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      year: "2025",
      title: "Excellence in Microscopic Dentistry",
      organization: "Indian Dental Association",
      description:
        "Recognized for outstanding contribution to advancing microscopic dentistry techniques in India.",
    },
    {
      year: "2024",
      title: "Best Cosmetic Dentist",
      organization: "Bangalore Healthcare Awards",
      description:
        "Awarded for exceptional smile design and cosmetic dentistry results.",
    },
    {
      year: "2024",
      title: "Digital Dentistry Pioneer",
      organization: "Asian Dental Congress",
      description:
        "Recognized for pioneering digital dentistry techniques in South India.",
    },
    {
      year: "2023",
      title: "Patient Choice Award",
      organization: "Practo Health",
      description:
        "Voted as the most trusted dentist in Bangalore by patients.",
    },
    {
      year: "2023",
      title: "Microscopic Dentistry Certification",
      organization: "Zeiss Dental Academy",
      description:
        "Certified specialist in advanced microscopic dental procedures.",
    },
    {
      year: "2022",
      title: "Best Pediatric Dental Clinic",
      organization: "Times of India",
      description:
        "Recognized for excellence in pediatric dental care and child-friendly practices.",
    },
  ];

  const certifications = [
    "BDS - Bachelor of Dental Surgery",
    "MDS - Master of Dental Surgery (Prosthodontics)",
    "Certified in Microscopic Dentistry",
    "Implantology Certification",
    "Digital Smile Design Certification",
    "Laser Dentistry Certification",
  ];

  return (
    <section id="awards" className="section-padding bg-neutral-50">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Awards & Recognition
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Recognized for{" "}
            <span className="font-serif italic text-accent">Excellence</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            A testament to our commitment to excellence in microscopic dentistry
            and patient care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.year + award.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-2xl p-6 shadow-soft border border-neutral-100 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                        {award.year}
                      </span>
                      <h3 className="font-semibold text-primary mt-2 mb-1">{award.title}</h3>
                      <p className="text-xs text-neutral-500 mb-2">{award.organization}</p>
                      <p className="text-sm text-neutral-600">{award.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Qualifications & Certifications</h3>
              <ul className="space-y-4">
                {certifications.map((cert, index) => (
                  <li key={cert} className="flex items-start gap-3">
                    <Medal className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 rounded-2xl p-8 border border-accent/20">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-xl font-bold text-primary">Professional Memberships</h3>
              </div>
              <ul className="space-y-2 text-sm text-neutral-600">
                <li>• Indian Dental Association (IDA)</li>
                <li>• Academy of Microscopic Dentistry</li>
                <li>• Indian Society of Oral Implantologists</li>
                <li>• Bangalore Dental Society</li>
              </ul>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <p className="text-neutral-600 mb-6">
            Want to learn more about Dr. Prem Kumar&apos;s credentials?
          </p>
          <Link href="#book-appointment" className="btn-primary">
            Meet the Doctor
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

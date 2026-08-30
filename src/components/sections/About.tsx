"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, Users, Clock, Smile, GraduationCap, Microscope, ShieldCheck, BookOpen } from "lucide-react";
import { siteImages } from "@/lib/siteAssets";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Award, value: "6+", label: "Years Specialised Practice" },
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Clock, value: "10,000+", label: "Procedures Done" },
    { icon: Smile, value: "98%", label: "Satisfaction Rate" },
  ];

  const education = [
    {
      degree: "MDS — Pediatric & Preventive Dentistry",
      institution: "Ramaiah Dental College & Hospital, Bangalore",
      description: "Postgraduate specialization in advanced child dental care, pediatric pulp therapy, and behavior management.",
      icon: GraduationCap,
    },
    {
      degree: "BDS — Bachelor of Dental Surgery",
      institution: "Rajiv Gandhi University of Health Sciences (RGUHS)",
      description: "Foundational clinical dentistry and oral surgical training with highest academic standards.",
      icon: BookOpen,
    },
    {
      degree: "Former Associate Professor",
      institution: "Ramaiah Dental College, Bangalore",
      description: "Mentored dental undergraduate and postgraduate students in clinical pediatric dentistry and endodontic protocols.",
      icon: Award,
    },
    {
      degree: "Advanced Certifications",
      institution: "Microscopic Dentistry & Advanced Endodontics",
      description: "Certified surgical operating microscope specialist performing micro-restorations and precision root canals.",
      icon: Microscope,
    },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div ref={ref} className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft border border-neutral-100">
              <Image
                src={siteImages.doctorPortrait}
                alt="Dr. Prem Kumar R, MDS Pediatric & Preventive Dentist"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 border border-neutral-100 max-w-[240px]">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-xl font-bold text-primary">MDS Specialist</p>
                  <p className="text-xs text-neutral-500">Pediatric &amp; Microscopic</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              About Dr. Prem Kumar R
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Clinical Precision with{" "}
              <span className="font-serif italic text-accent">Compassionate Care</span>
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed text-base md:text-lg">
              <p>
                <strong>Dr. Prem Kumar R</strong> is a recognized specialist in Pediatric &amp; Preventive Dentistry and Microscopic Endodontics in Bangalore. His practice combines high-magnification surgical operating microscope technology with calm, gentle, patient-first care.
              </p>
              <p>
                With specialist training in Pediatric &amp; Preventive Dentistry from Ramaiah Dental College and experience as a former Associate Professor at Ramaiah, he has built a trusted practice in Attur, Yelahanka where children, teenagers, adults, and seniors receive tailored, conservative treatments.
              </p>
              <p>
                From gentle pediatric visits and painless root canals to comprehensive smile restorations, every treatment is delivered with transparent communication and microscopic precision.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100"
                >
                  <stat.icon className="w-8 h-8 text-accent shrink-0" />
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-neutral-500 leading-snug">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5">
              {[
                "BDS, MDS (Pediatric & Preventive Dentistry)",
                "Microscopic Dentistry Certified",
                "Advanced Endodontics Certified",
                "Formerly Associate Professor, Ramaiah",
              ].map((qualification) => (
                <span
                  key={qualification}
                  className="px-4 py-2 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-semibold border border-accent/20"
                >
                  {qualification}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Dedicated Education & Academic Background Section */}
        <div className="mt-24 pt-16 border-t border-neutral-200">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-3 block">
              Academic Background &amp; Expertise
            </span>
            <h3 className="text-3xl md:text-4xl font-bold text-primary">
              Education &amp; Clinical Qualifications
            </h3>
            <p className="text-neutral-600 mt-4 text-base md:text-lg">
              Rigorous academic specialization and continuous surgical microscope training ensure the highest standard of dental care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {education.map((item, index) => (
              <motion.div
                key={item.degree}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="p-6 md:p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-soft hover:bg-white transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 text-accent group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-primary mb-1">{item.degree}</h4>
                    <p className="text-sm font-semibold text-accent mb-2">{item.institution}</p>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/education"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white text-sm font-semibold hover:bg-accent transition-colors shadow-soft"
            >
              Explore Clinical Mentorship &amp; Doctor Workshops
              <ShieldCheck className="w-4 h-4 text-sky-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

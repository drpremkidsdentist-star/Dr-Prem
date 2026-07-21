"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Award, Users, Clock, Smile } from "lucide-react";
import { siteImages } from "@/lib/siteAssets";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { icon: Users, value: "5000+", label: "Happy Patients" },
    { icon: Award, value: "15+", label: "Years Experience" },
    { icon: Clock, value: "10,000+", label: "Procedures Done" },
    { icon: Smile, value: "98%", label: "Satisfaction Rate" },
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
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-soft">
              <Image
                src={siteImages.doctorPortrait}
                alt="Dr. Prem Kumar - Microscopic Dentist Bangalore"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-soft p-6 border border-neutral-100">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">15+</p>
                  <p className="text-sm text-neutral-500">Years of Excellence</p>
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
              About Dr. Prem Kumar
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Redefining Dental Care with{" "}
              <span className="font-serif italic text-accent">Precision</span>
            </h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Dr. Prem Kumar is known for combining clinical precision with calm, patient-first
                care. His focus on microscopic dentistry helps identify and treat hidden dental issues
                conservatively.
              </p>
              <p>
                With advanced training in prosthodontics and microscopic techniques, he has built a
                trusted practice in Bangalore where children, adults, and seniors receive tailored
                treatment plans.
              </p>
              <p>
                From diagnosis to follow-up, every step is designed to be transparent, comfortable,
                and outcome-driven for long-term oral health.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-2xl bg-neutral-50 border border-neutral-100"
                >
                  <stat.icon className="w-8 h-8 text-accent" />
                  <div>
                    <p className="text-2xl font-bold text-primary">{stat.value}</p>
                    <p className="text-sm text-neutral-500">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "BDS, MDS (Prosthodontics)",
                "Microscopic Dentistry Certified",
                "Digital Smile Design Expert",
                "Implantology Certified",
              ].map((qualification) => (
                <span
                  key={qualification}
                  className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium"
                >
                  {qualification}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

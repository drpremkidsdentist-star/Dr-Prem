"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { CheckCircle, Calendar, UserCheck, Stethoscope, Smile, Star } from "lucide-react";
import Link from "next/link";

export function PatientJourney() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Calendar,
      number: "01",
      title: "Book Appointment",
      description: "Schedule your visit online or call us directly. We'll confirm your preferred time slot.",
    },
    {
      icon: UserCheck,
      number: "02",
      title: "Initial Consultation",
      description: "Meet Dr. Prem Kumar for a comprehensive evaluation and personalized treatment discussion.",
    },
    {
      icon: Stethoscope,
      number: "03",
      title: "Digital Assessment",
      description: "Advanced digital imaging and diagnostics to create your precise treatment plan.",
    },
    {
      icon: Smile,
      number: "04",
      title: "Treatment Begins",
      description: "Experience microscopic precision dentistry with the latest technology for optimal results.",
    },
    {
      icon: Star,
      number: "05",
      title: "Perfect Smile",
      description: "Reveal your transformed smile with our comprehensive aftercare and follow-up support.",
    },
  ];

  return (
    <section id="patient-journey" className="section-padding bg-neutral-50">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Patient Journey
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Your Path to a{" "}
            <span className="font-serif italic text-accent">Perfect Smile</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            From your first consultation to your final follow-up, we guide you through
            every step of your transformation with care, precision, and transparency.
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-neutral-200 hidden lg:block" />

          <div className="space-y-16 lg:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-2" : ""} ${
                    index % 2 === 1 ? "lg:pl-16" : "lg:pr-16"
                  }`}
                >
                  <div className="bg-white rounded-3xl p-8 md:p-10 shadow-soft border border-neutral-100">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center">
                        <step.icon className="w-7 h-7 text-accent" />
                      </div>
                      <span className="text-4xl font-bold text-neutral-200">{step.number}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-primary mb-4">{step.title}</h3>
                    <p className="text-neutral-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>

                <div
                  className={`hidden lg:block ${
                    index % 2 === 1 ? "lg:col-start-1 lg:pr-16" : "lg:col-start-2 lg:pl-16"
                  }`}
                >
                  {index % 2 === 1 ? (
                    <div className="aspect-video rounded-2xl overflow-hidden bg-neutral-100">
                      <Image
                        src={`/images/gallery/journey-${index + 1}.jpg`}
                        alt={step.title}
                        width={600}
                        height={400}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <h4 className="text-lg font-semibold text-primary">
                        What to expect:
                      </h4>
                      <ul className="space-y-3">
                        {[1, 2, 3].map((i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-600 text-sm">
                              Personalized attention and detailed explanation of your treatment options
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <Link href="#book-appointment" className="btn-primary text-lg px-10 py-5">
            Start Your Journey Today
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Microscope, Scan, Camera, Smile, Zap, Shield, CheckCircle } from "lucide-react";
import { siteImages, siteVideos } from "@/lib/siteAssets";

export function Technology() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    {
      icon: Microscope,
      title: "Surgical Operating Microscope",
      description: "Advanced surgical operating microscope providing high-magnification optical resolution for microscopic precision in every procedure.",
      specs: ["High Magnification", "Coaxial LED Illumination", "3D Optical Visualization"],
    },
    {
      icon: Scan,
      title: "CBCT 3D Imaging",
      description: "Cone Beam CT technology for detailed 3D imaging of teeth, bones, and surrounding structures for precise treatment planning.",
      specs: ["High Resolution 3D", "Low Radiation", "Instant Diagnostics"],
    },
    {
      icon: Camera,
      title: "Intraoral Digital Camera",
      description: "High-definition intraoral cameras for real-time visualization and patient education during treatments.",
      specs: ["Full HD Video", "Magnified Patient View", "Instant Diagnostic Capture"],
    },
    {
      icon: Smile,
      title: "Digital Smile Design",
      description: "Advanced software for designing your smile preview before treatment begins, ensuring predictable and satisfying aesthetic results.",
      specs: ["3D Simulation", "Predictable Results", "Patient Smile Preview"],
    },
    {
      icon: Zap,
      title: "Laser Dentistry",
      description: "Advanced diode laser technology for soft tissue procedures, offering faster healing, less bleeding, and improved patient comfort.",
      specs: ["Soft Tissue Procedures", "Bacterial Reduction", "Rapid Tissue Healing"],
    },
    {
      icon: Shield,
      title: "Digital Radiography",
      description: "Digital X-ray technology providing instant, high-quality images with 90% less radiation than traditional X-rays.",
      specs: ["90% Less Radiation", "Instant Results", "Digital Image Enhancement"],
    },
  ];

  return (
    <section id="technology" className="section-padding bg-white">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Advanced Technology
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Technology That{" "}
            <span className="font-serif italic text-accent">Transforms</span> Dentistry
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Our clinic is equipped with the latest in dental surgical technology, ensuring every
            procedure is performed with the highest standards of precision and care.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-neutral-50 border border-neutral-100 hover:shadow-soft hover:-translate-y-1 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <tech.icon className="w-7 h-7 text-accent group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{tech.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                {tech.description}
              </p>
              <ul className="space-y-2">
                {tech.specs.map((spec) => (
                  <li key={spec} className="flex items-center gap-2 text-sm text-neutral-500">
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    {spec}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Experience Microscopic Dentistry in Action
              </h3>
              <p className="text-white/70 leading-relaxed mb-8">
                See how our advanced technology enables Dr. Prem Kumar R to perform procedures
                with surgical precision. The operating microscope reveals micro-structures that traditional
                naked-eye methods simply cannot detect.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  <Shield className="w-5 h-5 text-accent" />
                  <span className="text-sm">CDSCO Approved &amp; CE Certified Equipment</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
                  <Zap className="w-5 h-5 text-accent" />
                  <span className="text-sm">Latest Generation Technology</span>
                </div>
              </div>
            </div>
            <div className="video-container aspect-video bg-primary-dark rounded-2xl overflow-hidden">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}

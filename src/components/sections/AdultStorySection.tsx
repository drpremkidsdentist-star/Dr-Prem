"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Eye, CheckCircle2, Zap, ShieldCheck, ArrowRight, Layers, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const adultServices = [
  {
    id: "rct",
    title: "Microscopic Root Canal (RCT)",
    tag: "Single Visit Painless Treatment",
    desc: "30x surgical magnification identifies hidden canals and micro-anatomy that traditional root canals miss, ensuring 99.4% success and long-term tooth preservation.",
    benefits: [
      "Single-visit completion in 60 minutes",
      "Painless micro-anesthesia protocol",
      "Zero destruction of healthy tooth enamel",
      "Lifetime tooth retention rate",
    ],
    image: "/images/media/video-4.jpg",
  },
  {
    id: "implants",
    title: "Microscopic Dental Implants",
    tag: "3D Guided Surgical Precision",
    desc: "Computer-guided implant placement aligned under high-power microscope optics for exact angle, position, and zero nerve impingement.",
    benefits: [
      "Immediate aesthetic loading",
      "Minimal flapless surgical trauma",
      "Natural titanium bone integration",
      "Perio-microscopic gum sculpting",
    ],
    image: "/images/media/video-5.jpg",
  },
  {
    id: "smile",
    title: "Digital Micro-Smile Design",
    tag: "Porcelain Veneers & Alignment",
    desc: "Custom ultra-thin ceramic veneers handcrafted to sub-millimeter precision for a natural, luminous aesthetic smile transformation.",
    benefits: [
      "Digital 3D preview before treatment",
      "Minimal enamel preparation (0.3mm)",
      "Stain-resistant porcelain ceramics",
      "Perfect bite & facial harmony",
    ],
    image: "/images/media/video-6.jpg",
  },
];

export function AdultStorySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [zoomLevel, setZoomLevel] = useState<"1x" | "10x" | "30x">("30x");

  const active = adultServices[activeTab];

  return (
    <section className="relative py-24 md:py-36 bg-[#0A2540] text-white overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-500/10 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-emerald-500/10 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-200 text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Story Chapter 02 • Adult Restorative Care</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Adult Restorative Excellence
            <br />
            <span className="font-serif italic text-accent">30x Microscopic Precision</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-neutral-300 max-w-2xl leading-relaxed"
          >
            Say goodbye to painful dental visits. Microscopic precision allows Dr. Prem Kumar to treat adults with pinpoint accuracy, preserving natural teeth for life.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          {adultServices.map((service, idx) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(idx)}
              className={`px-6 py-3.5 rounded-2xl text-sm font-bold transition-all duration-300 flex items-center gap-2 border ${
                activeTab === idx
                  ? "bg-accent text-white border-accent shadow-lg shadow-sky-500/20 scale-105"
                  : "bg-white/5 text-neutral-300 border-white/10 hover:bg-white/10"
              }`}
            >
              <Zap className={`w-4 h-4 ${activeTab === idx ? "text-white" : "text-sky-300"}`} />
              <span>{service.title}</span>
            </button>
          ))}
        </div>

        {/* Main Interactive Card */}
        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-neutral-950/80 rounded-3xl border border-white/15 p-6 md:p-10 shadow-2xl items-center"
        >
          {/* Left Column: Details */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="inline-block px-3 py-1 rounded-md bg-sky-400/20 text-sky-200 text-xs font-bold uppercase tracking-wider mb-3">
                {active.tag}
              </div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {active.title}
              </h3>

              <p className="text-base md:text-lg text-neutral-300 mb-8 leading-relaxed">
                {active.desc}
              </p>

              <div className="space-y-3 mb-8">
                {active.benefits.map((b, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm md:text-base text-neutral-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/book-appointment"
                className="btn-primary text-base px-8 py-3.5"
              >
                <span>Book Adult Consultation</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href={`/services/${active.id === "rct" ? "microscopic-root-canal" : active.id === "implants" ? "dental-implants" : "smile-design"}`}
                className="px-6 py-3.5 rounded-full bg-white/10 text-white font-medium hover:bg-white/20 transition-all text-sm"
              >
                Read Clinical Details
              </Link>
            </div>
          </div>

          {/* Right Column: Microscopic Magnification Viewer Simulation */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-white/20 bg-neutral-900 shadow-xl group">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className={`object-cover transition-transform duration-700 ${
                  zoomLevel === "30x" ? "scale-150" : zoomLevel === "10x" ? "scale-125" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />

              {/* Magnification Reticle Overlay */}
              <div className="absolute inset-0 border-2 border-dashed border-sky-400/40 rounded-2xl pointer-events-none m-4 flex items-center justify-center">
                <div className="w-16 h-16 border border-sky-400/60 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
                </div>
              </div>

              {/* Zoom Selector Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-neutral-900/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-sky-300" />
                  <span className="text-xs font-semibold uppercase text-neutral-300">Optics Zoom</span>
                </div>
                <div className="flex gap-1">
                  {(["1x", "10x", "30x"] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setZoomLevel(lvl)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                        zoomLevel === lvl
                          ? "bg-sky-400 text-neutral-950"
                          : "bg-white/10 text-white hover:bg-white/20"
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

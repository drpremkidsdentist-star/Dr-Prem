"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, ZoomIn, CheckCircle2, Activity } from "lucide-react";
import Image from "next/image";

export function MicroscopicLensSimulator() {
  const [zoom, setZoom] = useState<1 | 10 | 30>(30);
  const [ledFilter, setLedFilter] = useState<"natural" | "fluorescent" | "polarized">("natural");
  const [showAnatomyNotes, setShowAnatomyNotes] = useState(true);

  return (
    <section className="relative py-24 md:py-36 bg-[#0A2540] text-white overflow-hidden" id="lens-simulator">
      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-sky-500/10 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Interactive Surgical Optics Simulator</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Experience <span className="font-serif italic text-sky-300">Microscopic Precision</span> In Real-Time
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Test our dental surgical operating optics simulator below. Compare what the naked eye misses versus the sub-millimeter detail revealed under Dr. Prem Kumar R&apos;s surgical microscope.
          </motion.p>
        </div>

        {/* Simulator Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/90 rounded-3xl border border-white/15 p-6 md:p-10 shadow-2xl">
          {/* Controls Panel (Left) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-2">
                <ZoomIn className="w-6 h-6 text-sky-400" />
                Surgical Optics Control
              </h3>
              <p className="text-xs md:text-sm text-slate-300 mb-6">
                Adjust magnification and illumination to reveal sub-millimeter tooth anatomy.
              </p>

              {/* Magnification Level Switcher */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  1. Select Magnification Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {([1, 10, 30] as const).map((lvl) => (
                    <button
                      key={lvl}
                      onClick={() => setZoom(lvl)}
                      className={`py-3 px-4 rounded-xl text-xs md:text-sm font-bold transition-all border ${
                        zoom === lvl
                          ? "bg-sky-400 text-slate-950 border-sky-400 shadow-lg shadow-sky-400/20"
                          : "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                      }`}
                    >
                      {lvl === 1 ? "1x Naked Eye" : lvl === 10 ? "10x Surgical Loupe" : "Operating Microscope"}
                    </button>
                  ))}
                </div>
              </div>

              {/* LED Spectrum Switcher */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  2. Surgical Illumination Spectrum
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["natural", "fluorescent", "polarized"] as const).map((filter) => (
                    <button
                      key={filter}
                      onClick={() => setLedFilter(filter)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-semibold capitalize transition-all border ${
                        ledFilter === filter
                          ? "bg-sky-400 text-slate-950 border-sky-400"
                          : "bg-slate-800 text-slate-300 border-white/10 hover:bg-slate-700"
                      }`}
                    >
                      {filter} Light
                    </button>
                  ))}
                </div>
              </div>

              {/* Anatomy Notes Toggle */}
              <div className="pt-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={showAnatomyNotes}
                    onChange={(e) => setShowAnatomyNotes(e.target.checked)}
                    className="w-4 h-4 rounded border-slate-700 text-sky-400 focus:ring-sky-400"
                  />
                  <span className="text-xs md:text-sm text-slate-200 font-medium">
                    Show Micro-Anatomy Diagnostic Annotations
                  </span>
                </label>
              </div>
            </div>

            {/* Diagnostic Summary */}
            <div className="p-4 rounded-2xl bg-slate-950 border border-white/10 text-xs text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-sky-300 font-bold">
                <span>Active Diagnostic Status:</span>
                <span>{zoom === 30 ? "High Precision Surgical Vision" : zoom === 10 ? "Magnified Loupe Field" : "Standard Naked Eye"}</span>
              </div>
              <p>
                {zoom === 30
                  ? "Under the operating microscope, Dr. Prem Kumar R detects hidden MB2 canal branches, micro-fissures (0.02mm), and achieves complete antibacterial sealing."
                  : zoom === 10
                  ? "Surgical loupes provide general procedure field visibility but cannot resolve deep micro-canal variations."
                  : "Naked eye vision misses up to 40% of micro-canal anatomy, risking incomplete treatment."}
              </p>
            </div>
          </div>

          {/* Interactive Lens Viewport (Right) */}
          <div className="lg:col-span-7 relative">
            <div className="relative aspect-video w-full rounded-2xl overflow-hidden border-2 border-sky-400/40 bg-slate-950 shadow-2xl group">
              <Image
                src="/images/services/microscopic-rct.jpg"
                alt="Surgical Operating Microscope High Definition View"
                fill
                className={`object-cover transition-all duration-700 ${
                  zoom === 30 ? "scale-150" : zoom === 10 ? "scale-110" : "scale-100"
                } ${
                  ledFilter === "fluorescent" ? "hue-rotate-60 saturate-150 contrast-125" : ledFilter === "polarized" ? "contrast-125 brightness-110" : ""
                }`}
              />

              {/* Precision Reticle Crosshair */}
              <div className="absolute inset-0 border border-dashed border-sky-400/40 rounded-2xl pointer-events-none m-3 flex items-center justify-center">
                <div className="w-24 h-24 border border-sky-400/60 rounded-full flex items-center justify-center relative">
                  <div className="w-1.5 h-1.5 rounded-full bg-sky-300" />
                  <div className="absolute top-0 bottom-0 w-[1px] bg-sky-400/30" />
                  <div className="absolute left-0 right-0 h-[1px] bg-sky-400/30" />
                </div>
              </div>

              {/* Diagnostic Annotations */}
              {showAnatomyNotes && zoom === 30 && (
                <>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute top-6 left-6 bg-slate-900/90 backdrop-blur-md border border-emerald-400/40 text-emerald-300 text-xs px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Micro-Canal Anatomy Identified</span>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="absolute bottom-6 right-6 bg-slate-900/90 backdrop-blur-md border border-sky-400/40 text-sky-300 text-xs px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2"
                  >
                    <Activity className="w-3.5 h-3.5" />
                    <span>0.02mm Hermetic Seal Verified</span>
                  </motion.div>
                </>
              )}

              {/* Viewport Status Badge */}
              <div className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-[10px] uppercase tracking-widest text-slate-200">
                Operating Microscope Simulator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

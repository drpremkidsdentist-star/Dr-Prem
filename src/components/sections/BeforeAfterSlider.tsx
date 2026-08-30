"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowLeftRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";

const comparisonCases = [
  {
    id: "smile",
    label: "Aesthetic Smile Makeover",
    image: "/images/cases/smile-design.jpg",
    beforeText: "Discolored, irregular front teeth with diastema gaps",
    afterText: "Seamless porcelain aesthetic alignment & natural luster",
  },
  {
    id: "pediatric",
    label: "Pediatric Bio-Restoration",
    image: "/images/cases/pediatric-restoration.jpg",
    beforeText: "Deep fissure micro-cavity with sensitive dentin exposure",
    afterText: "Painless biomimetic composite restoration preserving natural tooth",
  },
  {
    id: "laser",
    label: "Laser Gum Contouring",
    image: "/images/cases/laser-gingivectomy.jpg",
    beforeText: "Uneven gingival display & gummy smile asymmetry",
    afterText: "Symmetrical smile line via painless diode laser contouring",
  },
];

export function BeforeAfterSlider() {
  const [activeCase, setActiveCase] = useState(0);

  const current = comparisonCases[activeCase];

  return (
    <section className="relative py-24 md:py-36 bg-[#0A2540] text-white overflow-hidden" id="before-after">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>Clinical Transformations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Verified Clinical <span className="font-serif italic text-sky-300">Case Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Explore real pre-treatment versus post-treatment dental transformations delivered with surgical microscope precision by Dr. Prem Kumar R.
          </motion.p>

          {/* Case Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {comparisonCases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCase(idx)}
                className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all border ${
                  activeCase === idx
                    ? "bg-sky-400 text-slate-950 border-sky-400 shadow-md shadow-sky-400/20"
                    : "bg-slate-800/80 text-slate-300 border-white/10 hover:bg-slate-700"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clinical Case Display Card */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl relative">
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <Image
              src={current.image}
              alt={`${current.label} Before and After Comparison`}
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Comparison Details Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-900/90 p-6 md:p-8 text-xs md:text-sm text-slate-300 border-t border-white/10">
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-950/60 border border-white/10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400 block">Pre-Operative State (Before)</span>
              <p className="text-slate-200 text-sm font-medium">{current.beforeText}</p>
            </div>
            <div className="space-y-1.5 p-4 rounded-2xl bg-slate-950/60 border border-emerald-400/30">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Post-Operative Result (After)
              </span>
              <p className="text-slate-200 text-sm font-medium">{current.afterText}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

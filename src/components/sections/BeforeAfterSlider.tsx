"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import { motion } from "framer-motion";
import { Sparkles, SlidersHorizontal, ArrowLeftRight, CheckCircle } from "lucide-react";
import Image from "next/image";

export function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  return (
    <section className="relative py-24 md:py-36 bg-[#0A2540] text-white overflow-hidden" id="before-after">
      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-400/10 border border-sky-400/20 text-sky-300 text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Interactive Smile Transformation</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Drag To Compare <span className="font-serif italic text-amber-400">Microscopic Results</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Drag the slider left and right to see the dramatic difference between conventional dental restoration and Dr. Prem Kumar&apos;s 30x microscopic precision.
          </motion.p>
        </div>

        {/* Interactive Comparison Container */}
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl relative">
          <div
            ref={containerRef}
            className="relative aspect-video w-full overflow-hidden select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* After Image (Full Background) */}
            <div className="absolute inset-0">
              <Image
                src="/images/microscope-tech.png"
                alt="After Microscopic Treatment"
                fill
                className="object-cover object-center"
              />
              <div className="absolute top-6 right-6 bg-emerald-500/90 text-slate-950 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-lg border border-emerald-300/40">
                AFTER • 30x Microscopic Precision
              </div>
            </div>

            {/* Before Image (Clipped Left Side) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <Image
                src="/images/young-adult.png"
                alt="Before Microscopic Treatment"
                fill
                className="object-cover object-center grayscale contrast-125"
              />
              <div className="absolute top-6 left-6 bg-slate-900/90 text-slate-200 text-xs font-bold px-4 py-2 rounded-full backdrop-blur-md shadow-lg border border-white/20">
                BEFORE • Traditional Treatment
              </div>
            </div>

            {/* Slider Divider Handle Line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-amber-400 pointer-events-none shadow-[0_0_15px_rgba(251,191,36,0.8)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-xl border-2 border-white">
                <ArrowLeftRight className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Comparison Details Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 md:p-8 text-xs md:text-sm text-slate-300">
            <div className="space-y-2">
              <h4 className="font-bold text-slate-100 text-base">Traditional Dental Work (Left)</h4>
              <p className="text-slate-400">Can leave unseen micro-gaps, leading to recurrent decay, discomfort, and premature tooth replacement.</p>
            </div>
            <div className="space-y-2">
              <h4 className="font-bold text-amber-300 text-base">Dr. Prem Kumar 30x Microscopic Work (Right)</h4>
              <p className="text-slate-300">Sub-millimeter sealed margins, zero tissue damage, and pristine aesthetic integration that lasts a lifetime.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

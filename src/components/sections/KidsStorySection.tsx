"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, Shield, Heart, ArrowRight, X, Volume2, VolumeX } from "lucide-react";
import Link from "next/link";
import { siteImages, siteVideos } from "@/lib/siteAssets";

export function KidsStorySection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="relative py-20 md:py-32 bg-[#0A2540] text-white overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-400/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-500/15 border border-sky-400/25 text-sky-200 text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-sky-300" />
            <span>Story Chapter 01 • Kids & Pediatric Care</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Painless <span className="text-sky-300 font-serif italic">Kids Dentistry</span>
            <br /> Powered By Microscopic Precision
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Watch how Dr. Prem Kumar R makes pediatric dental care a joyful, fear-free adventure for children with surgical microscope precision.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/15 bg-slate-800/80 shadow-2xl group"
        >
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
            <video
              className="absolute inset-0 h-full w-full object-cover scale-[1.08] opacity-70 group-hover:scale-110 transition-transform duration-700"
              muted={isMuted}
              loop
              playsInline
              autoPlay
              poster={siteImages.kidSmile}
              preload="metadata"
            >
              <source src={siteVideos.kid} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            <div className="absolute top-6 left-6 flex items-center gap-3 bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-semibold tracking-wide text-slate-200 uppercase">
                Featured Video • Pediatric Excellence
              </span>
            </div>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/10 hover:bg-slate-800 transition-colors"
              type="button"
            >
              {isMuted ? <VolumeX className="w-4 h-4 text-slate-400" /> : <Volume2 className="w-4 h-4 text-sky-300" />}
            </button>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                className="group/btn relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-sky-400 text-slate-950 flex items-center justify-center shadow-lg shadow-sky-400/25 hover:scale-110 transition-all duration-300 mb-6"
                aria-label="Play Kids Dentistry Video"
                type="button"
              >
                <span className="absolute inset-0 rounded-full bg-sky-400 animate-ping opacity-30" />
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-current translate-x-0.5" />
              </button>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Gentle Microscopic Care for Kids
              </h3>
              <p className="text-sm md:text-base text-slate-300 max-w-md">
                Experience how surgical magnification eliminates fear, reduces drill sounds, and preserves natural young teeth.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 bg-slate-900/90 p-6 md:p-8">
            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-sky-300" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Ultra Gentle & Painless</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  Micro-precision instruments mean minimal tissue contact and quick recovery for kids.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center shrink-0">
                <Sparkles className="w-6 h-6 text-sky-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Microscopic Precision</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  Detects micro-cavities before they cause discomfort, protecting baby & permanent teeth.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-bold text-white text-base mb-1">Child-Friendly Atmosphere</h4>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                  Compassionate care, soothing environments, and reward-based visits children love.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 text-center">
          <Link
            href="/book-appointment"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-sky-400 to-sky-500 text-slate-950 font-bold hover:shadow-lg hover:shadow-sky-400/20 hover:scale-105 transition-all"
          >
            <span>Book Kids Dental Visit</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl aspect-video bg-black rounded-3xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/40 transition-colors"
                aria-label="Close Video"
                type="button"
              >
                <X className="w-6 h-6" />
              </button>
              <video
                className="h-full w-full object-cover"
                controls
                autoPlay
                playsInline
                poster={siteImages.teenager}
              >
                <source src={siteVideos.kid} type="video/mp4" />
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

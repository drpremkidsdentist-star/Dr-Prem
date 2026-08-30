"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Sparkles, CheckCircle2, Award, Users, BookOpen, MessageCircle, Phone, ArrowRight } from "lucide-react";
import { siteImages, siteVideos, clinicContact, whatsappUrl } from "@/lib/siteAssets";

const workshopImages = [
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-1.jpg",
    title: "One-on-One Clinical Technique Coaching",
    caption: "Dr. Prem Kumar R personally guiding delegates through tooth preparation and precision isolation.",
  },
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-2.jpg",
    title: "Hands-On Typodont Restorative Training",
    caption: "Delegates practicing aesthetic pediatric crown crimping, seating, and biomimetic bonding.",
  },
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-3.jpg",
    title: "Precision Rubber Dam Isolation",
    caption: "Mastering rapid clamp selection and four-handed isolation protocols for pediatric patients.",
  },
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-4.jpg",
    title: "Vital Pulp Therapy & Material Mastery",
    caption: "Step-by-step application of bioactive calcium silicates (MTA/Biodentine) in primary teeth.",
  },
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-5.jpg",
    title: "Live Case Discussion & Treatment Planning",
    caption: "Interactive breakdown of complex pediatric trauma cases and early orthodontic interception.",
  },
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-6.jpg",
    title: "Cohort Certification & Alumni Network",
    caption: "Graduating dental practitioners equipped with modern clinical protocols for their private practice.",
  },
];

const workshopVideos = [
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-video-1.mp4",
    title: "Live Clinical Demonstration & Step-by-Step Walkthrough",
    description: "Dr. Prem Kumar R demonstrating exact burs angles, crown adaptation, and seamless restorative finishing.",
  },
  {
    src: "/images/comprehensive-pediatric-dentistry-workshop/workshop-video-2.mp4",
    title: "Delegate Hands-On Session & Practical Feedback",
    description: "Real-time chairside coaching, fine-tuning hand ergonomics, and troubleshooting difficult margins.",
  },
];

const curriculumPoints = [
  "Rubber Dam Isolation for Challenging Pediatric Cases",
  "Stainless Steel & Aesthetic Zirconia Crowns Mastery",
  "Single-Visit Pulpotomy, Pulpectomy & MTA Protocols",
  "Nitrous Oxide Inhalation Sedation Fundamentals",
  "Pain-Free Local Anesthesia & Behavioral Shaping",
  "Interceptive Orthodontics & Space Maintainer Workflows",
];

export function WorkshopShowcase() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const [muted, setMuted] = useState(true);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const togglePlay = (index: number) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (playingVideo === index && !video.paused) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause any other video
      videoRefs.current.forEach((v, idx) => {
        if (v && idx !== index) {
          v.pause();
        }
      });
      video.play();
      setPlayingVideo(index);
    }
  };

  const toggleMute = () => {
    setMuted((prev) => {
      const next = !prev;
      videoRefs.current.forEach((v) => {
        if (v) v.muted = next;
      });
      return next;
    });
  };

  return (
    <section id="pediatric-workshop" className="section-padding bg-slate-950 text-white relative overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            Featured Hands-On Masterclass
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-serif mb-6"
          >
            Comprehensive Pediatric Dentistry{" "}
            <span className="italic text-sky-300">Workshop</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-300 text-base md:text-lg leading-relaxed"
          >
            An intensive hands-on clinical masterclass led by <strong>Dr. Prem Kumar R</strong> (Former Assistant / Associate Professor, Ramaiah Dental College). Designed for dental practitioners and postgraduate scholars looking to master modern pediatric restorative, pulp therapy, and behavior protocols.
          </motion.p>
        </div>

        {/* Curriculum Highlights Bar */}
        <div className="mb-16 p-8 rounded-3xl bg-slate-900/90 border border-white/10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-sky-400" />
            <h3 className="text-xl md:text-2xl font-bold text-white">
              Workshop Core Curriculum &amp; Modules
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {curriculumPoints.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-950/60 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-200 font-medium">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Video Demonstrations Grid */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-1">
                Live Action &amp; Coaching
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                Live Workshop Demonstrations
              </h3>
            </div>
            <button
              onClick={toggleMute}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800 text-slate-300 hover:text-white text-xs font-medium border border-white/10 transition-colors"
            >
              {muted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              <span>{muted ? "Unmute Audio" : "Muted"}</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshopVideos.map((vid, idx) => (
              <div
                key={idx}
                className="group rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl flex flex-col justify-between"
              >
                <div className="relative aspect-video w-full bg-black overflow-hidden">
                  <video
                    ref={(el) => {
                      videoRefs.current[idx] = el;
                    }}
                    src={vid.src}
                    playsInline
                    loop
                    muted={muted}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onClick={() => togglePlay(idx)}
                  />
                  <div
                    onClick={() => togglePlay(idx)}
                    className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity cursor-pointer ${
                      playingVideo === idx ? "opacity-0 hover:opacity-100" : "opacity-100"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-full bg-sky-500/90 text-slate-950 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform">
                      {playingVideo === idx ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">{vid.title}</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{vid.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6-Photo Clinical Workshop Grid */}
        <div className="mb-16">
          <div className="mb-8 pb-3 border-b border-white/10">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-400 block mb-1">
              Glimpses from the Masterclass
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Hands-On Workshop Photo Gallery
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {workshopImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08 }}
                className="group rounded-3xl overflow-hidden bg-slate-900 border border-white/10 hover:border-sky-400/50 transition-all flex flex-col shadow-xl"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold text-white mb-1.5 group-hover:text-sky-300 transition-colors">
                      {img.title}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Register for Upcoming Batch CTA */}
        <div className="rounded-3xl bg-gradient-to-r from-sky-950 via-slate-900 to-sky-950 border border-sky-400/40 p-8 md:p-12 text-center max-w-4xl mx-auto shadow-2xl">
          <Award className="w-12 h-12 text-sky-400 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
            Enroll in the Next Comprehensive Pediatric Dentistry Batch
          </h3>
          <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Limited seats per cohort to guarantee personalized one-on-one typodont coaching, direct instrument handling, and case feedback from Dr. Prem Kumar R.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl("Hello Dr. Prem Kumar R, I am a dentist interested in registering for the next Comprehensive Pediatric Dentistry Workshop batch.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-sky-500 text-slate-950 font-bold text-sm hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/25"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Registration &amp; Dates
            </a>
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call +91 81972 80019
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Users, HeartHandshake, ShieldCheck, Smile, CheckCircle, ArrowRight, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const familyPillars = [
  {
    title: "Kids & Toddlers",
    age: "Ages 1 - 12",
    desc: "Gentle preventative checkups, fluoride protection, habit counseling, and microscopic early cavity detection.",
    perks: ["Zero-fear cavity sealing", "Growth alignment checks", "Pediatric reward system"],
    badge: "Child Focused",
  },
  {
    title: "Teens & Young Adults",
    age: "Ages 13 - 25",
    desc: "Discreet clear alignment, athletic mouthguards, teeth whitening, and hygiene education for lifelong confidence.",
    perks: ["Invisible aligners", "Stain removal & polish", "Wisdom tooth monitoring"],
    badge: "Aesthetic & Health",
  },
  {
    title: "Adults & Parents",
    age: "Ages 26 - 55",
    desc: "Comprehensive root canal preservation, gum laser therapy, composite restorations, and restorative smile revamping.",
    perks: ["Single-visit RCT", "Laser gum rejuvenation", "Preventative scaling"],
    badge: "Full Restoration",
  },
  {
    title: "Seniors & Grandparents",
    age: "Ages 56+",
    desc: "Precision dental implants, comfortable full/partial dentures, dry mouth management, and bone retention therapy.",
    perks: ["Implant-supported dentures", "Gentle bone preservation", "Comfortable chewing restoration"],
    badge: "Lifetime Care",
  },
];

export function FamilyStorySection() {
  return (
    <section className="relative py-24 md:py-36 bg-[#0A2540] text-white overflow-hidden">
      {/* Ambient Radial Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Story Chapter 03 • Complete Family Care</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            One Dental Clinic For <span className="font-serif italic text-sky-300">Generations</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            From your child&apos;s first tooth to senior oral wellness, Dr. Prem Kumar provides compassionate microscopic dental care for every member of your family under one roof in Attur, Bangalore.
          </motion.p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {familyPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-slate-900/80 border border-white/10 p-6 flex flex-col justify-between hover:border-sky-400/40 hover:bg-slate-900 transition-all duration-300 shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-sky-300 bg-sky-400/10 px-3 py-1 rounded-full border border-sky-400/20">
                    {pillar.age}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-400">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-200 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs md:text-sm text-slate-300 mb-6 leading-relaxed">
                  {pillar.desc}
                </p>

                <div className="space-y-2 mb-6 pt-4">
                  {pillar.perks.map((perk, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-200">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{perk}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/book-appointment"
                className="w-full py-2.5 rounded-xl bg-white/5 hover:bg-sky-400 hover:text-slate-950 text-slate-200 text-xs font-bold transition-all text-center flex items-center justify-center gap-1 group-hover:bg-sky-400 group-hover:text-slate-950"
              >
                <span>Book {pillar.title}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Family Wellness Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-gradient-to-r from-sky-500/20 via-sky-400/10 to-sky-500/5 p-8 md:p-12 border border-white/15 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-sky-200 text-xs font-bold uppercase tracking-wider mb-2">
              <Users className="w-4 h-4" />
              <span>Family Membership & Priority Slots</span>
            </div>
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Schedule A Family Preventive Care Visit
            </h3>
            <p className="text-sm md:text-base text-slate-200 leading-relaxed">
              Book combined appointment slots for parents and children at our Attur, Bangalore clinic. Dedicated family parking, zero wait time, and complete peace of mind.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full md:w-auto">
            <a
              href="tel:+918197280019"
              className="w-full sm:w-auto px-6 py-4 rounded-full bg-white text-slate-950 font-bold text-sm hover:bg-sky-400 transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>+91 81972 80019</span>
            </a>
            <Link
              href="/book-appointment"
              className="w-full sm:w-auto btn-primary px-8 py-4 text-sm"
            >
              Book Family Slot
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

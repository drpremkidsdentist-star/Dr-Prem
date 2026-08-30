"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Microscope, Users, Sparkles, CheckCircle2, ArrowRight, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";

const mentorshipModules = [
  {
    icon: Microscope,
    title: "Microscopic Endodontics & Precision RCT",
    subtitle: "Hands-on Masterclass",
    description:
      "Master the surgical operating microscope for endodontic access, finding calcified MB2 canals, ultrasonics troughing, and zero-perforation canal preparation.",
    highlights: [
      "Operating microscope ergonomics & focal adjustment",
      "MB2 canal identification & complex canal scouting",
      "Ultrasonic irrigation & bioactive MTA obturation",
      "Live HD microscopic surgical feed review",
    ],
    badge: "Specialized Course",
  },
  {
    icon: Sparkles,
    title: "Pediatric Bio-Mimetic Dentistry",
    subtitle: "Clinical Fellowship Module",
    description:
      "Advanced protocols for children's dental care, from aesthetic bio-composite restorations and zirconia crowns to fear-free behavior management techniques.",
    highlights: [
      "Preformed pediatric crowns & bio-mimetic bonding",
      "Vital pulp therapy & pulpectomy with microscopic precision",
      "Nitrous oxide sedation & age-specific communication",
      "Early orthodontic interception & space management",
    ],
    badge: "Clinical Mastery",
  },
  {
    icon: BookOpen,
    title: "Surgical Ergonomics & Optical Alignment",
    subtitle: "Clinician Health & Longevity",
    description:
      "Eliminate neck and back strain through perfect optical axis alignment, indirect vision training, and ergonomically balanced operatory positioning.",
    highlights: [
      "Neutral spine posture & mirror manipulation",
      "Parfocality calibration for effortless magnification changes",
      "Camera integration & clinical documentation workflows",
      "Fatigue reduction during complex multi-hour procedures",
    ],
    badge: "Essential Practice",
  },
  {
    icon: Users,
    title: "1-on-1 Private Observerships & Case Mentorship",
    subtitle: "Intensive Apprenticeship",
    description:
      "Join Dr. Prem Kumar R at his Attur flagship clinic for private chairside observation, real-patient case reviews, and personalised clinical coaching.",
    highlights: [
      "Direct chairside observation of complex clinical cases",
      "Pre-op and post-op treatment planning deep-dives",
      "Private Q&A sessions on troubleshooting clinical hurdles",
      "Certificate of clinical observation upon completion",
    ],
    badge: "Private Mentorship",
  },
];

const facultyAchievements = [
  {
    stat: "6+ Years",
    label: "Specialised Pediatric & Microscopic Practice",
  },
  {
    stat: "Former Asst. Prof",
    label: "Ramaiah Dental College & Hospital, Bangalore",
  },
  {
    stat: "350+ Doctors",
    label: "Trained in Hands-On Dental Workshops",
  },
  {
    stat: "MDS & BDS",
    label: "RGUHS Alumnus & Academic Mentor",
  },
];

export function EducationMentorship() {
  return (
    <section id="education" className="section-padding bg-gradient-to-b from-[#0A2540] via-[#081B2E] to-[#0A2540] text-white relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-sky-300 text-xs font-semibold uppercase tracking-wider mb-4"
          >
            <GraduationCap className="w-4 h-4 text-sky-300" />
            Academic Leadership &amp; Private Mentorship
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold font-serif mb-6"
          >
            Clinical Mentorship by{" "}
            <span className="italic text-accent">Dr. Prem Kumar R</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/80 text-base md:text-lg leading-relaxed"
          >
            As a former Assistant / Associate Professor at <strong>M.S. Ramaiah Dental College &amp; Hospital</strong>, Dr. Prem Kumar R actively trains dental surgeons, postgraduate residents, and clinicians through private hands-on masterclasses and clinical observerships.
          </motion.p>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
          {facultyAchievements.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl bg-white/5 border border-white/10 p-6 text-center backdrop-blur-sm hover:border-accent/40 transition-colors"
            >
              <p className="text-2xl md:text-3xl font-bold text-sky-300 mb-1">{item.stat}</p>
              <p className="text-xs md:text-sm text-white/70">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Mentorship Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mentorshipModules.map((mod, i) => {
            const Icon = mod.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl bg-white/5 border border-white/10 p-8 hover:border-sky-400/50 hover:bg-white/[0.07] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-accent/20 border border-accent/40 flex items-center justify-center text-sky-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/10 text-sky-200 border border-white/10">
                      {mod.badge}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-wider text-sky-400 mb-1">
                    {mod.subtitle}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                    {mod.title}
                  </h3>
                  <p className="text-white/75 text-sm leading-relaxed mb-6">
                    {mod.description}
                  </p>

                  <div className="space-y-2 mb-6">
                    {mod.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs md:text-sm text-white/90">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-white/60">Limited seats per batch</span>
                  <a
                    href={whatsappUrl(`Hello Dr. Prem Kumar R, I am interested in enrolling for the ${mod.title} training program.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-300 hover:text-white transition-colors"
                  >
                    Enquire on WhatsApp
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Doctor Philosophy & Registration Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl bg-gradient-to-r from-sky-900/50 via-primary to-sky-900/50 border border-sky-400/30 p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <Award className="w-12 h-12 text-sky-300 mx-auto mb-4" />
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 font-serif">
            Advance Your Clinical Skills With Direct Specialist Training
          </h3>
          <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you are a practicing dental surgeon looking to integrate surgical operating microscopes into your clinic, or a postgraduate resident refining pediatric restorative techniques, Dr. Prem Kumar R offers customized private training cohorts.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={whatsappUrl("Hello Dr. Prem Kumar R, I am a dentist interested in joining your private mentorship and clinical masterclasses.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-accent text-white font-semibold text-sm hover:bg-sky-500 transition-colors shadow-lg shadow-accent/25"
            >
              <MessageCircle className="w-4 h-4" />
              Enquire for Mentorship Batches
            </a>
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white font-semibold text-sm hover:bg-white/20 border border-white/20 transition-colors"
            >
              <Phone className="w-4 h-4" />
              Call Dr. Prem Kumar R
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

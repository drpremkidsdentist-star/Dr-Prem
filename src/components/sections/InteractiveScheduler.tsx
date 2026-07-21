"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, User, Phone, CheckCircle2, Sparkles, ArrowRight, ShieldCheck, MapPin } from "lucide-react";

const patientCategories = [
  { id: "kids", label: "Kids & Pediatric", desc: "Gentle, fear-free microscopic care" },
  { id: "adult", label: "Adult Restorative", desc: "Single-visit root canals & implants" },
  { id: "family", label: "Family Wellness", desc: "Combined slots for all family members" },
];

const availableServices = {
  kids: ["Painless Kids Root Canal", "Preventative Cavity Sealing", "First Tooth Checkup & Alignment"],
  adult: ["30x Microscopic Root Canal (RCT)", "Digital 3D Dental Implants", "Digital Micro-Smile Design"],
  family: ["Complete Family Dental Checkup", "Preventative Scaling & Polish", "Laser Gum Rejuvenation"],
};

export function InteractiveScheduler() {
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState<"kids" | "adult" | "family">("kids");
  const [selectedService, setSelectedService] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [preferredTime, setPreferredTime] = useState("10:00 AM");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="relative py-24 md:py-36 bg-[#0A2540] text-white overflow-hidden" id="interactive-booking">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Smart Appointment Engine</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Book Your Microscopic Visit In <span className="font-serif italic text-amber-400">Attur, Bangalore</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-slate-300 max-w-2xl leading-relaxed"
          >
            Select your preferred treatment preferences below for priority slot allocation at Dr. Prem Kumar&apos;s flagship clinic.
          </motion.p>
        </div>

        {/* Wizard Form Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-900/90 border border-white/15 p-6 md:p-12 shadow-2xl">
          {/* Progress Indicator Steps */}
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/10">
            {[1, 2, 3].map((num) => (
              <div key={num} className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${
                    step === num
                      ? "bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 scale-110"
                      : step > num
                      ? "bg-emerald-500 text-slate-950"
                      : "bg-slate-800 text-slate-400"
                  }`}
                >
                  {step > num ? "✓" : num}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-slate-300">
                  {num === 1 ? "1. Patient Category" : num === 2 ? "2. Service & Slot" : "3. Contact Details"}
                </span>
              </div>
            ))}
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Category */}
              {step === 1 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-4">Select Patient Category</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {patientCategories.map((cat) => (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => {
                          setCategory(cat.id as any);
                          setSelectedService(availableServices[cat.id as keyof typeof availableServices][0]);
                        }}
                        className={`p-6 rounded-2xl border text-left transition-all ${
                          category === cat.id
                            ? "bg-amber-400/15 border-amber-400 text-white"
                            : "bg-slate-800/50 border-white/10 text-slate-300 hover:bg-slate-800"
                        }`}
                      >
                        <h4 className="font-bold text-lg text-amber-300 mb-1">{cat.label}</h4>
                        <p className="text-xs text-slate-400">{cat.desc}</p>
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary px-8 py-3.5 text-sm flex items-center gap-2"
                    >
                      <span>Continue To Service</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 2: Service & Date */}
              {step === 2 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">Choose Service & Preferred Slot</h3>
                  <div className="space-y-4">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400">
                      Service Requirement
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full p-4 rounded-xl bg-slate-800 border border-white/15 text-white outline-none focus:border-amber-400"
                    >
                      {availableServices[category].map((srv) => (
                        <option key={srv} value={srv} className="bg-slate-900 text-white">
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 border border-white/15 text-white outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Time Window
                      </label>
                      <select
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        className="w-full p-4 rounded-xl bg-slate-800 border border-white/15 text-white outline-none focus:border-amber-400"
                      >
                        <option value="10:00 AM" className="bg-slate-900">Morning (10:00 AM - 1:00 PM)</option>
                        <option value="2:00 PM" className="bg-slate-900">Afternoon (2:00 PM - 5:00 PM)</option>
                        <option value="6:00 PM" className="bg-slate-900">Evening (6:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-700"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="btn-primary px-8 py-3.5 text-sm flex items-center gap-2"
                    >
                      <span>Continue To Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              )}

              {/* Step 3: Contact */}
              {step === 3 && (
                <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-6">
                  <h3 className="text-xl font-bold text-white mb-2">Patient Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Ramesh Kumar"
                        className="w-full p-4 rounded-xl bg-slate-800 border border-white/15 text-white outline-none focus:border-amber-400"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="+91 81972 80019"
                        className="w-full p-4 rounded-xl bg-slate-800 border border-white/15 text-white outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  <div className="pt-6 flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-3.5 rounded-xl bg-slate-800 text-slate-300 text-sm font-semibold hover:bg-slate-700"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="btn-primary px-10 py-4 text-base font-bold shadow-lg shadow-amber-400/20"
                    >
                      Confirm Appointment Request
                    </button>
                  </div>
                </motion.div>
              )}
            </form>
          ) : (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Appointment Request Confirmed!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Thank you {patientName || "Patient"}. Our team at Attur Clinic will call you at {patientPhone || "+91 81972 80019"} to confirm your {selectedService || "microscopic consultation"} slot.
              </p>
              <div className="pt-4">
                <a
                  href={`https://wa.me/918197280019?text=Hi%20Dr.%20Prem%20Kumar,%20I%20requested%20an%20appointment%20for%20${encodeURIComponent(selectedService || "microscopic care")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold text-sm hover:bg-emerald-400 transition-all"
                >
                  <span>Fast Confirm On WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}

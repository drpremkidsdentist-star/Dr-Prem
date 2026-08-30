"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Navigation, Phone, Clock, ExternalLink, Sparkles, Building2, CheckCircle2, ShieldCheck } from "lucide-react";
import Link from "next/link";

const bangaloreExpansionLocations = [
  {
    name: "Attur, Yelahanka",
    type: "Primary Flagship Clinic",
    status: "Active & Serving",
    address: "No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore, Karnataka 560064",
    mapsUrl: "https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA",
    href: "/locations/attur",
    phone: "+91 81972 80019",
    isPrimary: true,
  },
  {
    name: "Yelahanka New Town",
    type: "Service Area",
    status: "Active & Serving",
    address: "Yelahanka New Town — clinic at Attur Main Road",
    mapsUrl: "https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA",
    href: "/locations/yelahanka",
    phone: "+91 81972 80019",
    isPrimary: false,
  },
  {
    name: "Hebbal",
    type: "Service Area",
    status: "Active & Serving",
    address: "Serving patients across Hebbal & North Bangalore",
    mapsUrl: "https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA",
    href: "/locations/hebbal",
    phone: "+91 81972 80019",
    isPrimary: false,
  },
  {
    name: "Doddaballapur",
    type: "Service Area",
    status: "Active & Serving",
    address: "Serving Doddaballapur & North Bangalore corridor",
    mapsUrl: "https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA",
    href: "/locations/dodballapur",
    phone: "+91 81972 80019",
    isPrimary: false,
  },
];

export function AtturLocationSection() {
  const [selectedLoc, setSelectedLoc] = useState(0);
  const current = bangaloreExpansionLocations[selectedLoc];

  return (
    <section className="relative py-24 md:py-36 bg-neutral-900 text-white overflow-hidden" id="attur-location">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-500/10 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs md:text-sm font-semibold mb-4 uppercase tracking-widest"
          >
            <MapPin className="w-4 h-4 text-accent" />
            <span>Primary Clinic Location</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4"
          >
            Visit Our Clinic In <span className="font-serif italic text-accent">Attur, Yelahanka</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-xl text-neutral-300 max-w-2xl leading-relaxed"
          >
            Conveniently located on Attur Main Road, Yelahanka New Town with state-of-the-art surgical operating microscope suites. Serving patients across North Bangalore.
          </motion.p>
        </div>

        {/* Interactive Location Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Location Tabs List (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-1 px-1">
              Bangalore Locations &amp; Service Areas
            </h3>
            {bangaloreExpansionLocations.map((loc, idx) => (
              <button
                key={loc.name}
                onClick={() => setSelectedLoc(idx)}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 flex items-center justify-between ${
                  selectedLoc === idx
                    ? "bg-accent text-white border-accent shadow-lg shadow-amber-500/20 scale-[1.02]"
                    : "bg-neutral-950/80 border-white/10 hover:border-white/20 text-neutral-300"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      loc.isPrimary
                        ? "bg-amber-400 text-neutral-950 font-bold"
                        : "bg-white/10 text-white"
                    }`}
                  >
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base leading-tight mb-1">{loc.name}</h4>
                    <span className="text-xs opacity-80">{loc.type}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span
                    className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full border ${
                      loc.isPrimary
                        ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                        : "bg-white/10 text-neutral-400 border-white/10"
                    }`}
                  >
                    {loc.status}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Location Detail & Map Card (Right) */}
          <div className="lg:col-span-7 bg-neutral-950/90 rounded-3xl border border-white/15 p-6 md:p-8 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/10 text-emerald-400 text-xs font-bold border border-emerald-400/20 uppercase tracking-wider">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  {current.status}
                </span>
                <span className="text-xs text-neutral-400">Bangalore Hub</span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Kumar&apos;s Microscopic Dental Care — {current.name}
              </h3>

              <p className="text-sm md:text-base text-neutral-300 mb-6 flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>{current.address}</span>
              </p>

              {/* Quick Details Pills */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Phone className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <div className="text-xs text-neutral-400">Direct Phone Booking</div>
                    <a href="tel:+918197280019" className="text-sm font-bold text-white hover:text-accent">
                      +91 81972 80019
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
                  <Clock className="w-5 h-5 text-accent shrink-0" />
                  <div>
                    <div className="text-xs text-neutral-400">Clinic Hours</div>
                    <div className="text-xs font-semibold text-white">Mon–Sat: 10:00 AM – 9:00 PM</div>
                    <div className="text-[11px] text-neutral-400">Sun: 10:00 AM – 6:00 PM (By Appt)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Navigation Button */}
            <div className="pt-6 flex flex-col sm:flex-row items-center gap-4">
              {current.mapsUrl ? (
                <a
                  href={current.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto btn-primary px-8 py-4 text-sm flex items-center justify-center gap-2 shadow-lg"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Open Google Maps</span>
                  <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              ) : null}

              <Link
                href={current.href}
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all text-center"
              >
                View {current.name} Info
              </Link>

              <Link
                href="/book-appointment"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all text-center"
              >
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

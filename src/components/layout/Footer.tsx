"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";
import { clinicContact } from "@/lib/siteAssets";

const footerLinks = {
  services: [
    { href: "/technology", label: "Technology & Microscope" },
    { href: "/education", label: "Education & Mentorship" },
    { href: "/patient-journey", label: "Patient Journey" },
    { href: "/locations", label: "North Bangalore Hubs" },
  ],
  quickLinks: [
    { href: "/about", label: "About Dr. Prem Kumar R" },
    { href: "/education", label: "Doctors Academy" },
    { href: "/knowledge-center", label: "Knowledge Center" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact Us" },
  ],
  treatments: [
    { href: "/services/microscopic-root-canal", label: "Root Canal Treatment" },
    { href: "/services/dental-implants", label: "Dental Implants" },
    { href: "/services/smile-design", label: "Smile Design" },
    { href: "/services/pediatric-dentistry", label: "Pediatric Dentistry" },
    { href: "/services/cosmetic-dentistry", label: "Cosmetic Dentistry" },
    { href: "/services/laser-dentistry", label: "Laser Dentistry" },
  ],
};

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/kumarsmicroscopicdentalcare", label: "Instagram" },
  { icon: Youtube, href: "https://www.youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: MapPin, href: clinicContact.googleMapsUrl, label: "Google Maps" },
];

export function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/images/dr-prem-logo.png"
                  alt="Dr. Prem Kumar R Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Dr. Prem Kumar R
                </span>
                <span className="text-sm tracking-widest uppercase text-white/60">
                  MDS Pediatric &amp; Microscopic Dentist
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Pediatric &amp; microscopic dental specialist in Attur Main Road, Yelahanka New Town. Combining surgical microscope precision with gentle patient care.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-accent hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Our Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Treatments</h3>
            <ul className="space-y-3">
              {footerLinks.treatments.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-accent text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact &amp; Clinic Hours</h3>
            <address className="not-italic text-white/70 text-sm leading-relaxed mb-4 block">
              Kumar&apos;s Microscopic Dental Care, No.12, 1st Floor, Attur Main Road, Yelahanka New Town, Bengaluru, Karnataka 560064 · +91 81972 80019 · Front desk +91 80882 66714 · Mon–Sat 10:00 AM–9:00 PM, Sun 10:00 AM–6:00 PM
            </address>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${clinicContact.phoneTel}`}
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>{clinicContact.phoneDisplay} / {clinicContact.phoneDisplayAlt}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${clinicContact.email}`}
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>{clinicContact.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={clinicContact.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent group-hover:animate-bounce" />
                  <span>No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <div>
                    <p className="font-medium text-white/90">Mon–Sat: 10:00 AM – 9:00 PM</p>
                    <p className="text-white/70">Sun: 10:00 AM – 6:00 PM (By Appointment)</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dr. Prem Kumar R. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy-policy" className="text-white/50 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="text-white/50 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-white/40 text-xs">
              Built with{" "}
              <span className="text-red-400">❤️</span>{" "}
              by{" "}
              <span className="text-white/60 font-medium">D Pradeep Kumar</span>{" "}
              <span className="text-white/40">(AuraDigital Services &amp; Solutions)</span>{" "}
              &middot;{" "}
              <a
                href="tel:+919148868413"
                className="text-white/50 hover:text-accent transition-colors duration-300"
              >
                9148868413
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

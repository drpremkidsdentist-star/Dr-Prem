"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Instagram, Youtube, Linkedin, Facebook } from "lucide-react";

const footerLinks = {
  services: [
    { href: "/microscopic-dentistry", label: "Microscopic Dentistry" },
    { href: "/technology", label: "Advanced Technology" },
    { href: "/patient-journey", label: "Patient Journey" },
    { href: "/smile-gallery", label: "Smile Gallery" },
  ],
  quickLinks: [
    { href: "/about", label: "About Dr. Prem Kumar" },
    { href: "/knowledge-center", label: "Knowledge Center" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/awards", label: "Awards" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
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
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Facebook, href: "#", label: "Facebook" },
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
                  alt="Dr. Prem Kumar Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">
                  Dr. Prem Kumar
                </span>
                <span className="text-sm tracking-widest uppercase text-white/60">
                  Microscopic Dentist
                </span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
              Bangalore&apos;s most trusted microscopic dentist. Experience world-class dental care with advanced technology, precision, and personalized attention.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
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
            <h3 className="text-lg font-semibold mb-4 text-white">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+918197280019"
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>+91 81972 80019</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@drpremkumar.in"
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors duration-300"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent" />
                  <span>info@drpremkumar.in</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/sBPZeVxRTzBJkcH56"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-accent text-sm transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-accent group-hover:animate-bounce" />
                  <span>Attur Layout, Yelahanka, Bangalore (Click for Google Maps)</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <Clock className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p>Mon-Fri: 9:00 AM - 8:00 PM</p>
                    <p>Sat: 10:00 AM - 6:00 PM</p>
                    <p>Sun: 10:00 AM - 2:00 PM</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/50 text-sm">
              © {new Date().getFullYear()} Dr. Prem Kumar. All rights reserved.
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

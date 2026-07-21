"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";
import Link from "next/link";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";

export function StickyBookingBar() {
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) {
        setIsVisible(currentScrollY < lastScrollY.current);
      } else {
        setIsVisible(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-neutral-200 shadow-strong pb-[env(safe-area-inset-bottom)] md:bottom-6 md:left-6 md:right-auto md:rounded-full md:border md:shadow-glow md:max-w-fit md:pb-0"
        >
          <div className="flex items-center justify-center gap-2 px-4 py-3 md:px-2 md:py-2">
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className="flex items-center gap-2 px-4 py-2.5 md:px-3 md:py-2 rounded-full bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-all duration-300 text-sm font-medium"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="hidden sm:inline">{clinicContact.phoneDisplay}</span>
            </a>

            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 md:px-3 md:py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-all duration-300 text-sm font-medium"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <Link
              href="/book-appointment"
              className="flex items-center gap-2 px-5 py-2.5 md:px-4 md:py-2 rounded-full bg-accent text-white hover:bg-accent/90 transition-all duration-300 text-sm font-medium shadow-glow"
            >
              <Calendar className="w-4 h-4" />
              <span className="hidden sm:inline">Book Now</span>
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

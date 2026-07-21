"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, Phone, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";
import { cn } from "@/lib/utils";

const desktopNavLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/microscopic-dentistry", label: "Microscopic" },
  { href: "/technology", label: "Technology" },
  { href: "/services", label: "Services" },
  { href: "/smile-gallery", label: "Gallery" },
  { href: "/locations", label: "Locations" },
];

const mobileNavGroups = [
  {
    label: "Explore",
    links: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/about/dr-prem-kumar", label: "Dr. Prem Kumar" },
      { href: "/microscopic-dentistry", label: "Microscopic Dentistry" },
      { href: "/services", label: "Services" },
      { href: "/technology", label: "Technology" },
    ],
  },
  {
    label: "Patients",
    links: [
      { href: "/patient-journey", label: "Patient Journey" },
      { href: "/smile-gallery", label: "Smile Gallery" },
      { href: "/cases", label: "Real Cases" },
      { href: "/knowledge-center", label: "Knowledge Center" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/faq", label: "FAQ" },
    ],
  },
  {
    label: "Visit",
    links: [
      { href: "/locations", label: "All Locations" },
      { href: "/locations/attur", label: "Attur Clinic" },
      { href: "/locations/yelahanka", label: "Yelahanka" },
      { href: "/locations/hebbal", label: "Hebbal" },
      { href: "/locations/dodballapur", label: "Doddaballapur" },
      { href: "/contact", label: "Contact" },
    ],
  },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  // Light pages need dark header text; home opens on dark slides → translucent until scroll
  const isHome = pathname === "/";
  const solid = !isHome || isScrolled;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        solid
          ? "bg-white/95 backdrop-blur-xl shadow-soft border-b border-neutral-200/60 py-3"
          : "bg-gradient-to-b from-[#0A2540]/85 to-transparent py-4"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-2.5 group shrink-0 min-w-0">
            <div className="relative size-9 md:size-10 rounded-full overflow-hidden border-2 border-sky-400/80 shadow-sm shrink-0">
              <Image
                src="/images/dr-prem-portrait.png"
                alt="Dr. Prem Kumar"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span
                className={cn(
                  "text-sm sm:text-base md:text-lg font-bold tracking-tight truncate",
                  solid ? "text-primary" : "text-white"
                )}
              >
                Dr. Prem Kumar
              </span>
              <span
                className={cn(
                  "text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase font-semibold",
                  solid ? "text-accent" : "text-sky-200"
                )}
              >
                Microscopic Dentist
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Main navigation">
            {desktopNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm font-semibold rounded-lg transition-colors",
                  solid
                    ? "text-neutral-800 hover:text-accent hover:bg-neutral-100"
                    : "text-white hover:bg-white/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={`tel:${clinicContact.phoneTel}`}
              className={cn(
                "hidden sm:flex items-center gap-2 px-2 py-2 text-sm font-semibold rounded-lg",
                solid ? "text-primary hover:text-accent" : "text-white"
              )}
            >
              <Phone className="text-accent size-4 shrink-0" />
              <span className="hidden md:inline">{clinicContact.phoneDisplay}</span>
            </a>
            <Link
              href="/book-appointment"
              className={cn(
                buttonVariants(),
                "hidden sm:inline-flex rounded-full px-4 md:px-5 min-h-10"
              )}
            >
              <Calendar className="size-4" />
              Book Now
            </Link>

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger
                className={cn(
                  buttonVariants({ variant: "ghost", size: "icon" }),
                  "xl:hidden min-h-10 min-w-10",
                  solid
                    ? "text-primary bg-neutral-100 hover:bg-neutral-200"
                    : "text-white bg-white/15 hover:bg-white/25"
                )}
                aria-label="Open menu"
              >
                <Menu />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(100vw,20rem)] bg-[#0A2540] text-white border-l border-white/10 p-0 flex flex-col"
              >
                <SheetHeader className="px-5 pt-5 pb-3 border-b border-white/10 text-left">
                  <SheetTitle className="text-white font-serif text-xl">
                    Dr. Prem Kumar
                  </SheetTitle>
                  <p className="text-xs text-sky-200/90">Microscopic Dentist · Attur</p>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto overscroll-contain px-3 py-3">
                  {mobileNavGroups.map((group) => (
                    <div key={group.label} className="mb-4">
                      <p className="px-2 mb-1 text-[10px] font-bold uppercase tracking-widest text-sky-300/80">
                        {group.label}
                      </p>
                      <nav className="flex flex-col" aria-label={group.label}>
                        {group.links.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                              pathname === link.href
                                ? "bg-white/15 text-white"
                                : "text-white/85 hover:bg-white/10 hover:text-white"
                            )}
                          >
                            {link.label}
                          </Link>
                        ))}
                      </nav>
                    </div>
                  ))}
                </div>
                <div className="border-t border-white/10 p-4 space-y-2 pb-[max(1rem,env(safe-area-inset-bottom))]">
                  <a
                    href={`tel:${clinicContact.phoneTel}`}
                    className={cn(
                      buttonVariants({ variant: "secondary" }),
                      "w-full rounded-full justify-center min-h-11"
                    )}
                  >
                    <Phone className="size-4" />
                    Call
                  </a>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants(),
                      "w-full rounded-full justify-center min-h-11 bg-emerald-500 hover:bg-emerald-600"
                    )}
                  >
                    WhatsApp
                  </a>
                  <Link
                    href="/book-appointment"
                    onClick={() => setOpen(false)}
                    className={cn(
                      buttonVariants(),
                      "w-full rounded-full justify-center min-h-11"
                    )}
                  >
                    <Calendar className="size-4" />
                    Book Appointment
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

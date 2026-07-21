"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { clinicContact, siteImages } from "@/lib/siteAssets";

/** Real clinic moments only — no fake clinical before/after claims */
const moments = [
  {
    id: 1,
    title: "Pediatric chair-side care",
    src: siteImages.doctorPatientFamily,
    alt: "Dr. Prem with a child patient and parent in clinic",
  },
  {
    id: 2,
    title: "Family visits in Attur",
    src: siteImages.familyFatherDaughter,
    alt: "Parent and child at the clinic",
  },
  {
    id: 3,
    title: "30× operating microscope",
    src: siteImages.microscope,
    alt: "Dental operating microscope used in treatment",
  },
  {
    id: 4,
    title: "Comfort at every age",
    src: siteImages.senior,
    alt: "Senior patient portrait",
  },
];

export function SmileGallery() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="smile-gallery" className="section-padding bg-white">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Clinic gallery
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            Real moments from{" "}
            <span className="font-serif italic text-accent">Attur</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Clinic and care photos from our practice. Clinical before/after cases
            are shared privately during consultation — or browse photos on Google.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {moments.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-2xl bg-neutral-100"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-4 bg-white border border-neutral-100 border-t-0 rounded-b-2xl">
                <h3 className="font-semibold text-primary text-sm">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col items-center gap-4 text-center"
        >
          <a
            href={clinicContact.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            See more photos & reviews on Google Maps
            <ExternalLink className="w-4 h-4" />
          </a>
          <Link href="/book-appointment" className="btn-primary">
            Book Your Consultation
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

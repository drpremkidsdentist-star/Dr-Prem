"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteVideos, siteImages } from "@/lib/siteAssets";

type Chapter = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  mediaType: "video" | "image";
  src: string;
  poster?: string;
  /** Tailwind object-position classes — phones crop landscape media hard,
      so subjects framed off-center need a custom focal point on mobile. */
  mediaClass?: string;
};

const chapters: Chapter[] = [
  {
    id: "kid",
    eyebrow: "Chapter 01 · Young smiles",
    title: "Fear-free care for kids",
    body: "Gentle pediatric dentistry so children leave smiling — not scared.",
    mediaType: "video",
    src: siteVideos.kid,
    mediaClass: "object-[68%_50%] md:object-center",
  },
  {
    id: "little-patients",
    eyebrow: "Chapter 02 · Little patients",
    title: "Joy in every visit",
    body: "A calm, kid-friendly journey from the waiting room to a brighter smile.",
    mediaType: "video",
    src: siteVideos.teen,
    mediaClass: "object-[75%_50%] md:object-center",
  },
  {
    id: "adult",
    eyebrow: "Chapter 03 · Adults",
    title: "Restoration for busy lives",
    body: "Root canals, implants, and smile design for ages 18–35 — precise and lasting.",
    mediaType: "video",
    src: siteVideos.adult,
  },
  {
    id: "family",
    eyebrow: "Chapter 04 · Family",
    title: "Parents and children, together",
    body: "One trusted clinic for the whole family — warm care under one roof in Attur.",
    mediaType: "image",
    src: siteImages.familyFatherDaughter,
    mediaClass: "object-[70%_50%] md:object-center",
  },
  {
    id: "clinic-family",
    eyebrow: "Chapter 05 · In the chair",
    title: "Dr. Prem with your family",
    body: "A calm pediatric-friendly room where parents feel involved and kids feel safe.",
    mediaType: "image",
    src: siteImages.doctorPatientFamily,
    mediaClass: "object-[70%_50%] md:object-center",
  },
  {
    id: "senior",
    eyebrow: "Chapter 06 · Seniors",
    title: "Comfort at every age",
    body: "Gentle restorative care and implants — dignity, clarity, and lasting comfort.",
    mediaType: "image",
    src: siteImages.senior,
    mediaClass: "object-[70%_50%] md:object-center",
  },
  {
    id: "microscope",
    eyebrow: "Chapter 07 · The microscope",
    title: "What 30× vision changes",
    body: "The operating microscope reveals what the eye cannot — cleaner canals, safer implants, finer smiles.",
    mediaType: "video",
    src: siteVideos.microscope,
    poster: siteImages.microscope,
  },
];

/** Shorter sticky travel so chapters advance without long blank stretches */
const CHAPTER_VH = 28;

export function ScrollStoryStage() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const activeRef = useRef(0);

  // Native scroll progress — always advances chapters (including reduced-motion).
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const total = chapters.length;
    let raf = 0;
    let tracking = false;

    const readProgress = () => {
      const scrollable = section.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return 0;
      const top = section.getBoundingClientRect().top;
      const scrolled = Math.min(scrollable, Math.max(0, -top));
      return scrolled / scrollable;
    };

    const apply = () => {
      const progress = readProgress();
      const next = Math.min(
        total - 1,
        Math.max(0, Math.floor(progress * total + 0.001))
      );
      if (next !== activeRef.current) {
        activeRef.current = next;
        setActive(next);
      }

      const rect = section.getBoundingClientRect();
      const inSticky =
        rect.top <= 1 && rect.bottom >= window.innerHeight - 1;
      if (inSticky) {
        raf = requestAnimationFrame(apply);
      } else {
        tracking = false;
      }
    };

    const startTracking = () => {
      if (tracking) return;
      tracking = true;
      raf = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", startTracking, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", startTracking);
      window.removeEventListener("resize", apply);
    };
  }, []);

  useEffect(() => {
    chapters.forEach((chapter, index) => {
      const video = videoRefs.current[index];
      if (chapter.mediaType !== "video" || !video) return;
      if (index === active) {
        const showFrame = () => {
          if (video.readyState >= 1 && video.currentTime < 0.05) {
            video.currentTime = 0.05;
          }
        };
        showFrame();
        video.addEventListener("loadeddata", showFrame, { once: true });
        // Content video: attempt play even under reduced-motion (muted, no UX spin)
        void video.play().catch(() => {
          showFrame();
        });
      } else {
        video.pause();
      }
    });
  }, [active]);

  const chapter = chapters[active];

  return (
    <section
      ref={sectionRef}
      id="smile-journey"
      className="relative bg-[#0A2540]"
      style={{ height: `${chapters.length * CHAPTER_VH}vh` }}
      aria-label="Cinematic smile journey"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {chapters.map((ch, index) => (
          <div
            key={ch.id}
            className="absolute inset-0 transition-opacity duration-500 motion-reduce:transition-none"
            style={{
              opacity: active === index ? 1 : 0,
              zIndex: active === index ? 1 : 0,
            }}
            aria-hidden={active !== index}
          >
            {ch.mediaType === "video" ? (
              <video
                key={ch.src}
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={ch.src}
                className={`absolute inset-0 h-full w-full min-h-full min-w-full object-cover ${ch.mediaClass ?? ""}`}
                muted
                loop
                playsInline
                autoPlay={index === 0}
                preload={index <= 1 ? "auto" : "metadata"}
                poster={ch.poster}
                aria-label={ch.title}
              />
            ) : (
              <Image
                src={ch.src}
                alt=""
                fill
                className={`object-cover ${ch.mediaClass ?? "object-center"}`}
                sizes="100vw"
                priority={index === 0}
              />
            )}
          </div>
        ))}

        {/* Strong left scrim for copy — keep right side of kid video clear */}
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-r from-[#0A2540] via-[#0A2540]/50 to-transparent md:w-[70%]" />
        <div className="pointer-events-none absolute inset-0 z-[2] bg-gradient-to-t from-[#0A2540]/70 via-transparent to-[#0A2540]/20" />

        <div className="relative z-10 flex h-full items-end md:items-center">
          <div className="container-custom w-full px-6 pb-32 pt-28 md:pb-24">
            <div key={chapter.id} className="max-w-xl">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-sky-300 [text-shadow:0_1px_12px_rgba(10,37,64,0.9)]">
                {chapter.eyebrow}
              </p>
              <h2 className="mb-4 font-serif text-4xl font-semibold tracking-tight text-white [text-shadow:0_2px_24px_rgba(10,37,64,0.95)] md:text-5xl lg:text-6xl">
                {chapter.title}
              </h2>
              <p className="mb-8 max-w-md text-base leading-relaxed text-white/95 [text-shadow:0_1px_16px_rgba(10,37,64,0.9)] md:text-lg">
                {chapter.body}
              </p>
              {active === chapters.length - 1 ? (
                <Link
                  href="/book-appointment"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 text-base"
                >
                  Book Consultation
                  <ArrowRight className="size-5" />
                </Link>
              ) : (
                <p className="text-sm text-white/60">
                  Scroll to continue · {active + 1} / {chapters.length}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Progress dots — above sticky booking bar */}
        <div
          className="absolute bottom-24 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 rounded-full bg-black/45 px-3 py-2 backdrop-blur-sm md:bottom-10"
          role="tablist"
          aria-label="Story chapters"
        >
          {chapters.map((ch, index) => (
            <span
              key={ch.id}
              role="tab"
              aria-selected={active === index}
              className={`block h-1.5 rounded-full transition-all duration-300 motion-reduce:transition-none ${
                active === index ? "w-8 bg-sky-400" : "w-1.5 bg-white/45"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

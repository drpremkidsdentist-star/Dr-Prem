"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Play, Youtube, Calendar, ExternalLink, Headphones } from "lucide-react";
import Image from "next/image";

export function Media() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const videos = [
    {
      id: 1,
      title: "The Future of Microscopic Dentistry",
      description:
        "Dr. Prem Kumar discusses how microscopic technology is transforming dental care in India.",
      thumbnail: "/images/media/video-1.jpg",
      duration: "12:34",
      type: "Interview",
    },
    {
      id: 2,
      title: "Microscopic Root Canal Treatment Explained",
      description:
        "A detailed look at how microscopic precision improves root canal outcomes.",
      thumbnail: "/images/media/video-2.jpg",
      duration: "8:45",
      type: "Educational",
    },
    {
      id: 3,
      title: "Patient Success Story: Smile Transformation",
      description:
        "Watch a patient's complete smile transformation journey with Dr. Prem Kumar.",
      thumbnail: "/images/media/video-3.jpg",
      duration: "5:20",
      type: "Patient Story",
    },
    {
      id: 4,
      title: "Pediatric Dentistry: Making Dental Visits Fun",
      description:
        "Tips and techniques for making children comfortable with dental visits.",
      thumbnail: "/images/media/video-4.jpg",
      duration: "6:15",
      type: "Educational",
    },
  ];

  const mediaFeatures = [
    {
      publication: "The Hindu",
      title: "Bangalore's Microscopic Dentist Revolutionizing Dental Care",
      date: "2026-06-15",
      url: "#",
    },
    {
      publication: "Times of India",
      title: "Dr. Prem Kumar: The Precision Dentist of Bangalore",
      date: "2026-05-20",
      url: "#",
    },
    {
      publication: "Deccan Herald",
      title: "Advanced Technology Making Dentistry Pain-Free",
      date: "2026-04-10",
      url: "#",
    },
    {
      publication: "Bangalore Mirror",
      title: "The Science of Perfect Smiles: Microscopic Dentistry",
      date: "2026-03-25",
      url: "#",
    },
  ];

  const podcasts = [
    {
      title: "The Dental Health Podcast",
      episode: "Episode 45: Microscopic Dentistry with Dr. Prem Kumar",
      date: "2026-07-01",
    },
    {
      title: "Health Talks Bangalore",
      episode: "Episode 128: Advanced Dental Technologies",
      date: "2026-05-15",
    },
  ];

  return (
    <section id="media" className="section-padding bg-white">
      <div ref={ref} className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
            Media & Insights
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
            In the{" "}
            <span className="font-serif italic text-accent">Spotlight</span>
          </h2>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Watch educational videos, read media features, and listen to podcast appearances
            by Dr. Prem Kumar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
            <Youtube className="w-6 h-6 text-red-500" />
            Featured Videos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary ml-1" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                    {video.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 rounded bg-accent text-white text-xs font-medium">
                      {video.type}
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-primary text-sm mb-1 group-hover:text-accent transition-colors">
                  {video.title}
                </h4>
                <p className="text-xs text-neutral-500 line-clamp-2">{video.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <ExternalLink className="w-6 h-6 text-accent" />
              Press Features
            </h3>
            <div className="space-y-6">
              {mediaFeatures.map((feature, index) => (
                <motion.a
                  key={feature.title}
                  href={feature.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="block p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-soft transition-all group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {feature.publication}
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {feature.date}
                    </span>
                  </div>
                  <h4 className="font-semibold text-primary group-hover:text-accent transition-colors">
                    {feature.title}
                  </h4>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Headphones className="w-6 h-6 text-accent" />
              Podcast Appearances
            </h3>
            <div className="space-y-6">
              {podcasts.map((podcast, index) => (
                <motion.div
                  key={podcast.episode}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  className="p-6 rounded-2xl bg-neutral-50 border border-neutral-100 hover:shadow-soft transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Play className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{podcast.title}</h4>
                      <p className="text-sm text-neutral-600 mb-2">{podcast.episode}</p>
                      <span className="text-xs text-neutral-500">{podcast.date}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-accent/10 border border-accent/20">
              <h4 className="font-semibold text-primary mb-2">Subscribe to Our YouTube Channel</h4>
              <p className="text-sm text-neutral-600 mb-4">
                Get the latest videos on dental health, microscopic dentistry, and patient transformations.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
              >
                <Youtube className="w-5 h-5" />
                Watch on YouTube
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

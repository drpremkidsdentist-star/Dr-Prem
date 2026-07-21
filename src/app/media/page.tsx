import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Play, Youtube, Calendar, ExternalLink, Headphones, Newspaper, Mic, ArrowRight } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/media" },
  title: "Media & Press | Microscopic Dentist Bangalore",
  description:
    "Dr. Prem Kumar featured in media, interviews, and educational content about dental health and microscopic dentistry.",
};

const pressFeatures = [
  {
    publication: "The Hindu",
    title: "Bangalore's Microscopic Dentist Revolutionizing Dental Care",
    date: "2026-06-15",
    url: "#",
    excerpt: "Dr. Prem Kumar is leading a revolution in dental care with his microscopic approach, bringing precision and comfort to patients across Bangalore.",
  },
  {
    publication: "Times of India",
    title: "Dr. Prem Kumar: The Precision Dentist of Bangalore",
    date: "2026-05-20",
    url: "#",
    excerpt: "In an exclusive interview, Dr. Prem Kumar discusses how microscopic technology is making dentistry more precise and less invasive.",
  },
  {
    publication: "Deccan Herald",
    title: "Advanced Technology Making Dentistry Pain-Free",
    date: "2026-04-10",
    url: "#",
    excerpt: "How cutting-edge technology is transforming the dental experience for patients in Bangalore.",
  },
  {
    publication: "Bangalore Mirror",
    title: "The Science of Perfect Smiles: Microscopic Dentistry",
    date: "2026-03-25",
    url: "#",
    excerpt: "Exploring the science and technology behind microscopic dentistry and how it delivers superior results.",
  },
];

const podcasts = [
  {
    title: "The Dental Health Podcast",
    episode: "Episode 45: Microscopic Dentistry with Dr. Prem Kumar",
    date: "2026-07-01",
    description: "Dr. Prem Kumar discusses the benefits of microscopic dentistry and how it's changing patient outcomes.",
  },
  {
    title: "Health Talks Bangalore",
    episode: "Episode 128: Advanced Dental Technologies",
    date: "2026-05-15",
    description: "A deep dive into the latest dental technologies and their impact on patient care.",
  },
  {
    title: "Smile Stories",
    episode: "Episode 12: Transforming Smiles with Precision",
    date: "2026-04-20",
    description: "Real patient stories and the technology behind their smile transformations.",
  },
];

const publications = [
  {
    title: "Microscopic Dentistry: A New Paradigm",
    journal: "Journal of Dental Research",
    year: "2025",
    type: "Research Paper",
  },
  {
    title: "Pediatric Dental Care: Best Practices",
    journal: "Indian Journal of Pediatrics",
    year: "2025",
    type: "Clinical Article",
  },
  {
    title: "Digital Smile Design: Clinical Applications",
    journal: "Journal of Cosmetic Dentistry",
    year: "2024",
    type: "Review Article",
  },
];

const mediaLogos = ["The Hindu", "Times of India", "Deccan Herald", "Bangalore Mirror", "India Today", "CNBC TV18"];

export default function MediaPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Media</span>
          </nav>

          <div className="max-w-3xl mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Media & Press
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              In the{" "}
              <span className="font-serif italic text-accent">Spotlight</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Dr. Prem Kumar featured in media, interviews, and educational content. Stay updated with the latest appearances and articles about dental health.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Newspaper className="w-6 h-6 text-accent" />
              Press Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {pressFeatures.map((feature, index) => (
                <Link
                  key={feature.title}
                  href={feature.url}
                  className="block p-8 rounded-2xl bg-white border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {feature.publication}
                    </span>
                    <span className="text-xs text-neutral-500 flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {feature.date}
                    </span>
                  </div>
                  <h3 className="font-semibold text-primary mb-3 group-hover:text-accent transition-colors text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">{feature.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                    Read Article <ExternalLink className="w-3 h-3" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Mic className="w-6 h-6 text-accent" />
              Podcast Appearances
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {podcasts.map((podcast, index) => (
                <div
                  key={podcast.episode}
                  className="p-6 rounded-2xl bg-white border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <Headphones className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{podcast.title}</h4>
                      <p className="text-sm text-neutral-600 mb-2">{podcast.episode}</p>
                    </div>
                  </div>
                  <p className="text-sm text-neutral-600 mb-4">{podcast.description}</p>
                  <span className="text-xs text-neutral-500">{podcast.date}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Youtube className="w-6 h-6 text-red-500" />
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((id) => (
                <Link
                  key={id}
                  href="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-soft">
                    <Image
                      src={`/images/media/video-${id}.jpg`}
                      alt={`Media video ${id}`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary ml-1" />
                      </div>
                    </div>
                  </div>
                  <h4 className="font-semibold text-primary text-sm mb-1 group-hover:text-accent transition-colors">
                    Dr. Prem Kumar on Camera {id}
                  </h4>
                  <p className="text-xs text-neutral-500 line-clamp-2">Featured media appearance and interview.</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8">Publications</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {publications.map((pub, index) => (
                <div
                  key={pub.title}
                  className="p-6 rounded-2xl bg-white border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                >
                  <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4">
                    {pub.type}
                  </span>
                  <h4 className="font-semibold text-primary mb-2">{pub.title}</h4>
                  <p className="text-sm text-neutral-600 mb-1">{pub.journal}</p>
                  <span className="text-xs text-neutral-500">{pub.year}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">As Featured In</h2>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {mediaLogos.map((logo, index) => (
                <div
                  key={logo}
                  className="px-6 py-3 rounded-lg bg-white border border-neutral-100 shadow-soft text-neutral-600 font-medium text-sm hover:border-accent hover:text-accent transition-all duration-300"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/book-appointment" className="btn-primary text-lg">
              Book a Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

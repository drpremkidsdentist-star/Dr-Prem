import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Play, Youtube, Clock, ArrowRight, GraduationCap, Users, Monitor } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/videos" },
  title: "Videos | Microscopic Dentist Bangalore",
  description:
    "Watch educational videos, patient testimonials, and procedure demonstrations by Dr. Prem Kumar.",
};

const videoCategories = [
  { icon: GraduationCap, name: "Educational", count: 8, slug: "educational" },
  { icon: Users, name: "Patient Testimonials", count: 5, slug: "patient-testimonials" },
  { icon: Monitor, name: "Procedure Demos", count: 6, slug: "procedure-demos" },
];

const videos = [
  {
    id: 1,
    title: "The Future of Microscopic Dentistry",
    description:
      "Dr. Prem Kumar discusses how microscopic technology is transforming dental care in India.",
    thumbnail: "/images/media/video-1.jpg",
    duration: "12:34",
    category: "Educational",
    type: "Interview",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Microscopic Root Canal Treatment Explained",
    description:
      "A detailed look at how microscopic precision improves root canal outcomes.",
    thumbnail: "/images/media/video-2.jpg",
    duration: "8:45",
    category: "Procedure Walkthroughs",
    type: "Demonstration",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Patient Success Story: Smile Transformation",
    description:
      "Watch a patient's complete smile transformation journey with Dr. Prem Kumar.",
    thumbnail: "/images/media/video-3.jpg",
    duration: "5:20",
    category: "Patient Stories",
    type: "Testimonial",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Pediatric Dentistry: Making Dental Visits Fun",
    description:
      "Tips and techniques for making children comfortable with dental visits.",
    thumbnail: "/images/media/video-4.jpg",
    duration: "6:15",
    category: "Educational",
    type: "Educational",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

export default function VideosPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Videos</span>
          </nav>

          <div className="max-w-3xl mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Video Library
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Watch &{" "}
              <span className="font-serif italic text-accent">Learn</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Watch educational videos, patient testimonials, and procedure demonstrations. Learn more about microscopic dentistry and oral health.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {videoCategories.map((category, index) => (
              <Link
                key={category.name}
                href={`/videos/${category.slug}`}
                className="p-6 rounded-2xl bg-white border border-neutral-100 hover:border-accent hover:shadow-soft transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <category.icon className="w-6 h-6 text-accent group-hover:text-white" />
                </div>
                <h3 className="font-semibold text-primary text-sm mb-1">{category.name}</h3>
                <p className="text-xs text-neutral-500">{category.count} videos</p>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {videos.map((video, index) => (
              <Link
                key={video.id}
                href={video.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group cursor-pointer"
              >
                <div className="relative aspect-video rounded-xl overflow-hidden mb-4 shadow-soft">
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
                <p className="text-xs text-neutral-500 line-clamp-2 mb-2">{video.description}</p>
                <div className="flex items-center gap-2 text-xs text-accent">
                  <Youtube className="w-3 h-3" />
                  Watch on YouTube
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/book-appointment" className="btn-secondary">
              Book a Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

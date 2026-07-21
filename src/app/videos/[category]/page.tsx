import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight, Play, Youtube, ArrowRight } from "lucide-react";
import Image from "next/image";

const videoCategories = ["patient-testimonials", "procedure-demos", "educational"];

const categoryData: Record<string, {
  title: string;
  description: string;
  videos: { id: number; title: string; description: string; thumbnail: string; duration: string; videoUrl: string }[];
}> = {
  "patient-testimonials": {
    title: "Patient Testimonials",
    description:
      "Watch real patients share their experiences with microscopic dentistry at Dr. Prem Kumar's clinic.",
    videos: [
      { id: 1, title: "Priya's Root Canal Experience", description: "Priya shares her experience with microscopic root canal treatment.", thumbnail: "/images/media/video-1.jpg", duration: "4:20", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 2, title: "Rajesh's Implant Journey", description: "Rajesh talks about his dental implant transformation.", thumbnail: "/images/media/video-2.jpg", duration: "5:45", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 3, title: "Anita's Smile Makeover", description: "Anita describes her smile design experience.", thumbnail: "/images/media/video-3.jpg", duration: "3:30", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
  },
  "procedure-demos": {
    title: "Procedure Demonstrations",
    description:
      "See microscopic dentistry procedures in action. Learn how advanced technology enables precise treatments.",
    videos: [
      { id: 1, title: "Microscopic Root Canal Step by Step", description: "A detailed walkthrough of a microscopic root canal procedure.", thumbnail: "/images/media/video-4.jpg", duration: "8:45", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 2, title: "Dental Implant Placement", description: "Watch how dental implants are placed with microscopic precision.", thumbnail: "/images/media/video-5.jpg", duration: "6:20", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 3, title: "Digital Smile Design Process", description: "See how digital smile design technology works.", thumbnail: "/images/media/video-6.jpg", duration: "5:15", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
  },
  educational: {
    title: "Educational Videos",
    description:
      "Educational content about oral health, dental care tips, and information about various dental treatments.",
    videos: [
      { id: 1, title: "Oral Hygiene Basics", description: "Essential oral hygiene tips for the whole family.", thumbnail: "/images/media/video-7.jpg", duration: "4:50", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 2, title: "Understanding Cavities", description: "Learn what causes cavities and how to prevent them.", thumbnail: "/images/media/video-8.jpg", duration: "6:10", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
      { id: 3, title: "When to See a Dentist", description: "Signs that indicate you should schedule a dental visit.", thumbnail: "/images/media/video-9.jpg", duration: "3:45", videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    ],
  },
};

export function generateStaticParams() {
  return videoCategories.map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: { category: string };
}): Promise<Metadata> {
  const category = categoryData[params.category];
  if (!category) {
    notFound();
  }
  return {
    title: `${category.title} | Videos | Dr. Prem Kumar`,
    description: category.description,
  };
}

export default function VideoCategoryPage({ params }: { params: { category: string } }) {
  const category = categoryData[params.category];

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/videos" className="hover:text-accent transition-colors">Videos</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">{category.title}</span>
          </nav>

          <div className="max-w-3xl mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              {category.title}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              {category.title}
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.videos.map((video, index) => (
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
            <Link href="/videos" className="btn-secondary">
              View All Videos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

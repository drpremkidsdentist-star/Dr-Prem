import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Star, Play, Quote, ArrowRight, ThumbsUp } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/testimonials" },
  title: "Patient Testimonials | Microscopic Dentistry Bangalore",
  description:
    "Read what patients say about their experience with microscopic dentistry at Dr. Prem Kumar's clinic in Bangalore.",
};

const videoTestimonials = [
  {
    id: 1,
    title: "Priya's Root Canal Experience",
    description: "Priya shares her experience with microscopic root canal treatment.",
    thumbnail: "/images/media/video-1.jpg",
    duration: "4:20",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "Rajesh's Implant Journey",
    description: "Rajesh talks about his dental implant transformation.",
    thumbnail: "/images/media/video-2.jpg",
    duration: "5:45",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const writtenReviews = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "IT Professional",
    content:
      "Dr. Prem Kumar's microscopic approach to my root canal was incredible. The precision and care he showed made what I thought would be a painful procedure completely comfortable. I couldn't be happier with the results.",
    rating: 5,
    image: "/images/testimonials/priya.jpg",
    treatment: "Root Canal Treatment",
    date: "2026-06-20",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    role: "Business Owner",
    content:
      "After years of dental anxiety, Dr. Prem Kumar completely changed my perspective. His use of advanced technology and gentle approach made every visit stress-free. My smile has never looked better.",
    rating: 5,
    image: "/images/testimonials/rajesh.jpg",
    treatment: "Dental Implants",
    date: "2026-05-15",
  },
  {
    id: 3,
    name: "Anita Reddy",
    role: "Doctor",
    content:
      "As a medical professional myself, I appreciate the level of expertise Dr. Prem Kumar brings. His microscopic dentistry techniques are world-class, and his attention to detail is unmatched.",
    rating: 5,
    image: "/images/testimonials/anita.jpg",
    treatment: "Smile Design",
    date: "2026-04-10",
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Software Engineer",
    content:
      "The digital smile design process was fascinating. Being able to see my new smile before treatment began gave me complete confidence. The result exceeded my expectations.",
    rating: 5,
    image: "/images/testimonials/vikram.jpg",
    treatment: "Smile Design",
    date: "2026-03-25",
  },
  {
    id: 5,
    name: "Sunita Patel",
    role: "Teacher",
    content:
      "Dr. Prem Kumar is wonderful with children. My daughter used to be terrified of dentists, but he made her first visit so positive that she now looks forward to her checkups.",
    rating: 5,
    image: "/images/testimonials/sunita.jpg",
    treatment: "Pediatric Dentistry",
    date: "2026-02-18",
  },
  {
    id: 6,
    name: "Arun Joshi",
    role: "Architect",
    content:
      "The precision of microscopic dentistry is remarkable. Dr. Prem Kumar identified and treated issues that previous dentists missed. My dental health has never been better.",
    rating: 5,
    image: "/images/testimonials/arun.jpg",
    treatment: "General Dentistry",
    date: "2026-01-05",
  },
];

const patientStats = [
  { value: "4.9", label: "Google Rating", sublabel: "Based on 500+ reviews" },
  { value: "5000+", label: "Happy Patients", sublabel: "And counting" },
  { value: "98%", label: "Satisfaction Rate", sublabel: "Patient satisfaction" },
  { value: "15+", label: "Years Experience", sublabel: "Specialized care" },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Testimonials</span>
          </nav>

          <div className="max-w-3xl mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Testimonials
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              What Our{" "}
              <span className="font-serif italic text-accent">Patients</span> Say
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Read genuine testimonials from patients who have experienced microscopic dentistry with Dr. Prem Kumar. Their stories reflect our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Play className="w-6 h-6 text-accent" />
              Video Testimonials
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {videoTestimonials.map((video, index) => (
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
                  <p className="text-xs text-neutral-500 line-clamp-2">{video.description}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Quote className="w-6 h-6 text-accent" />
              Written Reviews
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {writtenReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="bg-white rounded-2xl p-8 shadow-soft border border-neutral-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-neutral-600 leading-relaxed mb-6 italic">
                    &ldquo;{review.content}&rdquo;
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={review.image}
                        alt={review.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-primary text-sm">{review.name}</p>
                      <p className="text-xs text-neutral-500">{review.role}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full bg-accent/10 text-accent text-xs font-medium">
                        {review.treatment}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <ThumbsUp className="w-6 h-6 text-accent" />
              Patient Stats
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {patientStats.map((stat, index) => (
                <div key={stat.label} className="text-center bg-white rounded-2xl p-8 shadow-soft border border-neutral-100">
                  <p className="text-4xl font-bold text-accent mb-2">{stat.value}</p>
                  <p className="text-sm font-medium text-primary mb-1">{stat.label}</p>
                  <p className="text-xs text-neutral-500">{stat.sublabel}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft border border-neutral-100">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">Google Reviews Integration</h3>
              <p className="text-neutral-600 mb-8">
                We are proud of our Google reviews. Click below to read more reviews from our patients on Google.
              </p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-neutral-200 text-neutral-700 hover:border-accent hover:text-accent transition-all duration-300"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
                Read Google Reviews
              </a>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/book-appointment" className="btn-primary text-lg">
              Book Your Appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

import { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, MapPin, Phone, Clock, Mail, ArrowRight, Send, Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact Us | Microscopic Dentist Bangalore",
  description:
    "Get in touch with Dr. Prem Kumar's dental clinic in Bangalore. Call us or visit our clinic for premium microscopic dental care.",
};

const clinicHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
  { day: "Sunday", hours: "10:00 AM - 2:00 PM" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-20">
      <section className="section-padding bg-white">
        <div className="container-custom">
          <nav className="flex items-center gap-2 text-sm text-neutral-500 mb-8">
            <Link href="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-primary font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl mb-16">
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Contact{" "}
              <span className="font-serif italic text-accent">Us</span>
            </h1>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Get in touch with us for appointments, inquiries, or any questions about our dental services. We are here to help you achieve optimal oral health.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-neutral-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="+91 81972 80019"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-primary mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    placeholder="How can we help you?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                    placeholder="Tell us about your dental concerns or questions..."
                  />
                </div>
                <button type="submit" className="btn-primary w-full text-lg">
                  <Send className="mr-2 w-5 h-5" />
                  Send Message
                </button>
                <p className="text-xs text-neutral-500 text-center">
                  By submitting this form, you agree to our privacy policy. We will never share your information.
                </p>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Clinic Address</h3>
                    <a href="https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium">
                      No. 12, 1st Floor, Attur Main Road, Yelahanka New Town<br />
                      Bangalore, Karnataka 560064 (Open in Google Maps)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone &amp; WhatsApp</h3>
                    <a href="tel:+918197280019" className="text-accent hover:underline text-sm font-semibold block">
                      +91 81972 80019
                    </a>
                    <a href="tel:+918088266714" className="text-neutral-600 hover:text-accent hover:underline text-xs">
                      Alt: +91 80882 66714
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">Mon–Sat: 10:00 AM – 9:00 PM | Sun: 10:00 AM – 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a href="mailto:care@drpremkumar.in" className="text-accent hover:underline text-sm">
                      care@drpremkumar.in
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Clinic Timings</h3>
                    <div className="space-y-1">
                      <div className="flex justify-between text-sm gap-4">
                        <span className="text-neutral-600">Monday – Saturday</span>
                        <span className="text-primary font-medium">10:00 AM – 9:00 PM</span>
                      </div>
                      <div className="flex justify-between text-sm gap-4">
                        <span className="text-neutral-600">Sunday</span>
                        <span className="text-primary font-medium">10:00 AM – 6:00 PM (By Appt)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-2">Connect With Dr. Prem Kumar R</h3>
                <p className="text-sm text-white/80 mb-6">
                  Follow for clinical updates, pediatric oral hygiene tips, and microscopic procedure insights.
                </p>
                <div className="flex items-center gap-4">
                  <a href="https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-xs font-semibold flex items-center gap-1.5 transition-colors">
                    <MapPin className="w-4 h-4" /> Google Maps
                  </a>
                  <a href="https://www.instagram.com/kumarsmicroscopicdentalcare" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="https://www.youtube.com/@kumarsmicroscopicdentalcare" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Find Us on Google Maps</h2>
            <div className="rounded-2xl overflow-hidden shadow-soft border border-neutral-100 h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=13.1016,77.5702&hl=en&z=16&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kumar's Microscopic Dental Care Attur Yelahanka Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

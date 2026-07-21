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
                    <h3 className="font-semibold text-primary mb-1">Address</h3>
                    <a href="https://maps.app.goo.gl/sBPZeVxRTzBJkcH56" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline text-sm font-medium">
                      Attur Layout, Yelahanka<br />
                      Bangalore, Karnataka 560064 (Open in Google Maps)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <a href="tel:+918197280019" className="text-accent hover:underline text-sm font-semibold">
                      +91 81972 80019
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">Available during clinic hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <a href="mailto:info@drpremkumar.in" className="text-accent hover:underline text-sm">
                      info@drpremkumar.in
                    </a>
                    <p className="text-xs text-neutral-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-neutral-100 shadow-soft">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Clinic Hours</h3>
                    <div className="space-y-1">
                      {clinicHours.map((item) => (
                        <div key={item.day} className="flex justify-between text-sm">
                          <span className="text-neutral-600">{item.day}</span>
                          <span className="text-primary font-medium">{item.hours}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-accent text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-2">Follow Us</h3>
                <p className="text-sm text-white/80 mb-6">
                  Stay connected for tips, updates, and patient stories.
                </p>
                <div className="flex items-center gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Facebook">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="Instagram">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors" aria-label="YouTube">
                    <Youtube className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary mb-8 text-center">Find Us on the Map</h2>
            <div className="rounded-2xl overflow-hidden shadow-soft border border-neutral-100 h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.991195686!2d77.6245!3d12.9352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzM2LjIiTiA3N8KwMDMnMjguMyJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

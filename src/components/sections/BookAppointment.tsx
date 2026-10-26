"use client";

import { useState } from "react";
import { Calendar, Clock, MapPin, Phone, Mail, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { clinicContact, whatsappUrl } from "@/lib/siteAssets";

const services = [
  "Microscopic Root Canal Treatment",
  "Dental Implants",
  "Smile Design",
  "Pediatric Dentistry",
  "Cosmetic Dentistry",
  "Laser Dentistry",
  "General Consultation",
  "Other",
];

const locations = ["Attur Layout, Yelahanka", "Yelahanka New Town"];

export function BookAppointment() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    location: locations[0],
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim()) {
      toast.error("Please share your name and phone number.");
      return;
    }
    setIsSubmitted(true);
    if (typeof window !== "undefined") {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: "appointment_submit", site: "drpremkumar.in" });
    }
    toast.success("Request received — we'll confirm within 24 hours.");
    const wa = whatsappUrl(
      `Hi, I'd like to book with Dr. Prem Kumar.\nName: ${formState.name}\nPhone: ${formState.phone}\nLocation: ${formState.location}\nConcern: ${formState.service || formState.message || "Consultation"}`
    );
    window.open(wa, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="book-appointment" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-accent font-medium tracking-widest uppercase text-sm mb-4 block">
              Book Appointment
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6 leading-tight">
              Start Your{" "}
              <span className="font-serif italic text-accent">Transformation</span>
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              Take the first step towards precision dental care. Share a few details and
              our team will confirm your visit — or message us instantly on WhatsApp.
            </p>

            <div className="flex flex-col gap-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Call Us Directly</h4>
                  <a
                    href={`tel:${clinicContact.phoneTel}`}
                    className="text-neutral-600 hover:text-accent transition-colors"
                  >
                    {clinicContact.phoneDisplay}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Email Us</h4>
                  <a
                    href={`mailto:${clinicContact.email}`}
                    className="text-neutral-600 hover:text-accent transition-colors"
                  >
                    {clinicContact.email}
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Visit Our Clinic</h4>
                  <p className="text-neutral-600">{clinicContact.addressLine}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="size-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock className="size-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary mb-1">Clinic Hours</h4>
                  <p className="text-neutral-600">
                    Mon–Fri 9:00 AM – 8:00 PM · Sat 10:00 AM – 6:00 PM · Sun 10:00 AM –
                    2:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8 md:p-10 border border-neutral-200">
            {isSubmitted ? (
              <div className="flex flex-col items-center text-center py-12 gap-4">
                <CheckCircle className="size-16 text-success" />
                <h3 className="text-2xl font-bold text-primary">Request sent</h3>
                <p className="text-neutral-600 max-w-sm">
                  WhatsApp opened with your details. You can also call us anytime at{" "}
                  {clinicContact.phoneDisplay}.
                </p>
                <Button
                  className="rounded-full mt-4"
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormState({
                      name: "",
                      phone: "",
                      location: locations[0],
                      service: "",
                      message: "",
                    });
                  }}
                >
                  Submit another request
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <Calendar className="size-5 text-accent" />
                  Appointment request
                </div>
                <FieldGroup>
                  <Field>
                    <FieldLabel htmlFor="name">Full name</FieldLabel>
                    <Input
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, name: e.target.value }))
                      }
                      placeholder="Your name"
                    />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="phone">Phone</FieldLabel>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, phone: e.target.value }))
                      }
                      placeholder="+91"
                    />
                    <FieldDescription>
                      We&apos;ll confirm by call or WhatsApp.
                    </FieldDescription>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="location">Preferred location</FieldLabel>
                    <select
                      id="location"
                      className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                      value={formState.location}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, location: e.target.value }))
                      }
                    >
                      {locations.map((loc) => (
                        <option key={loc} value={loc}>
                          {loc}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="service">Concern / service</FieldLabel>
                    <select
                      id="service"
                      className="flex h-9 w-full rounded-lg border border-input bg-transparent px-3 py-1 text-sm shadow-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                      value={formState.service}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, service: e.target.value }))
                      }
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="message">Message (optional)</FieldLabel>
                    <Textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState((s) => ({ ...s, message: e.target.value }))
                      }
                      placeholder="Tell us briefly about your concern"
                    />
                  </Field>
                </FieldGroup>
                <Button type="submit" className="w-full rounded-full h-11">
                  Book via WhatsApp
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Prefer to call?{" "}
                  <a
                    href={`tel:${clinicContact.phoneTel}`}
                    className="text-accent font-medium"
                  >
                    {clinicContact.phoneDisplay}
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

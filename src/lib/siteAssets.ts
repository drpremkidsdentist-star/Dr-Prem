export const siteImages = {
  doctorPortrait: "/images/dr-prem-portrait.png",
  doctorAlt: "/images/dr-prem-kumar.jpg",
  microscope: "/images/microscope-tech.png",
  teenager: "/images/teenager-patient.png",
  youngAdult: "/images/young-adult.png",
  kidSmile: "/images/kid-smile.png",
  logo: "/images/child-smile-logo.png",
  brandLogo: "/images/dr-prem-logo.png",
  og: "/images/og-image.jpg",
  twitter: "/images/twitter-image.jpg",
  senior: "/images/senior-portrait.png",
  familyFatherDaughter: "/images/family-father-daughter.png",
  doctorPatientFamily: "/images/doctor-patient-family.png",
  services: {
    laserDentistry: "/images/services/laser-dentistry.jpg",
    dentalImplants: "/images/services/dental-implants.jpg",
    cosmeticDentistry: "/images/services/cosmetic-dentistry.jpg",
    microscopicRct: "/images/services/microscopic-rct.jpg",
  },
  cases: {
    pediatricRestoration: "/images/cases/pediatric-restoration.jpg",
    microscopicRct: "/images/cases/microscopic-rct.jpg",
    smileDesign: "/images/cases/smile-design.jpg",
    laserGingivectomy: "/images/cases/laser-gingivectomy.jpg",
  },
  workshop: {
    photos: [
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-1.jpg",
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-2.jpg",
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-3.jpg",
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-4.jpg",
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-5.jpg",
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-photo-6.jpg",
    ],
    videos: [
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-video-1.mp4",
      "/images/comprehensive-pediatric-dentistry-workshop/workshop-video-2.mp4",
    ],
  },
} as const;

export const siteVideos = {
  /** Kling kid smile — scroll journey Chapter 01 */
  kid: "/videos/kling-kid-smile.mp4",
  /** Young-smile clip — scroll journey Chapter 02 */
  teen: "/videos/teen-confident.mp4",
  /** Young adult — scroll journey Chapter 03 */
  adult: "/videos/adult-confident.mp4",
  /** Dentist using microscope — Chapter 07 */
  microscope: "/videos/microscope-procedure.mp4",
  cinematic: "/videos/kling-kid-smile.mp4",
  hero: "/videos/kling-kid-smile.mp4",
  teenager: "/videos/teen-confident.mp4",
  youngAdult: "/videos/adult-confident.mp4",
  workshop: [
    "/images/comprehensive-pediatric-dentistry-workshop/workshop-video-1.mp4",
    "/images/comprehensive-pediatric-dentistry-workshop/workshop-video-2.mp4",
  ],
} as const;

export const clinicContact = {
  doctorName: "Dr. Prem Kumar R",
  doctorDegree: "BDS, MDS (Pediatric & Preventive Dentistry)",
  doctorTitle: "MDS Pediatric & Preventive Dentist | Microscopic Dentistry Specialist",
  experienceYears: "6+",
  phoneDisplay: "+91 81972 80019",
  phoneDisplayAlt: "+91 80882 66714",
  phoneTel: "+918197280019",
  phoneTelAlt: "+918088266714",
  whatsapp: "918197280019",
  email: "care@drpremkumar.in",
  addressLine: "No. 12, 1st Floor, Attur Main Road, Yelahanka New Town, Bangalore 560064",
  googleMapsUrl: "https://maps.app.goo.gl/nqJ8g6S8nMkDfprGA",
  googleRating: "4.9",
  googleReviewCount: "250+",
  openingHours: "Mon–Sat: 10:00 AM – 9:00 PM | Sun: 10:00 AM – 6:00 PM",
  timingWeekdays: "10:00 AM – 9:00 PM",
  timingSunday: "10:00 AM – 6:00 PM (By Appointment)",
  locations: {
    attur: {
      name: "Kumar's Microscopic Dental Care - Attur Clinic",
      streetAddress: "No. 12, 1st Floor, Attur Main Road, Yelahanka New Town",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
      geo: { latitude: 13.1016, longitude: 77.5702 },
    },
    yelahanka: {
      name: "Yelahanka New Town Clinic",
      streetAddress: "Attur Main Road, Yelahanka New Town",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
      geo: { latitude: 13.1005, longitude: 77.5963 },
    },
    hebbal: {
      name: "Hebbal Service Area",
      streetAddress: "Attur Main Road, Yelahanka",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
      geo: { latitude: 13.0358, longitude: 77.597 },
    },
    dodballapur: {
      name: "Doddaballapur Service Area",
      streetAddress: "Attur Main Road, Yelahanka",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
      geo: { latitude: 13.2927, longitude: 77.5431 },
    },
  },
} as const;

export function whatsappUrl(message?: string) {
  const text = encodeURIComponent(
    message ?? "Hi, I'd like to book a consultation with Dr. Prem Kumar R."
  );
  return `https://wa.me/${clinicContact.whatsapp}?text=${text}`;
}

export const siteImages = {
  doctorPortrait: "/images/dr-prem-portrait.png",
  doctorAlt: "/images/dr-prem-kumar.jpg",
  microscope: "/images/microscope-tech.png",
  teenager: "/images/teenager-patient.png",
  youngAdult: "/images/young-adult.png",
  logo: "/images/child-smile-logo.png",
  brandLogo: "/images/dr-prem-logo.png",
  og: "/images/og-image.jpg",
  twitter: "/images/twitter-image.jpg",
  senior: "/images/senior-portrait.png",
  familyFatherDaughter: "/images/family-father-daughter.png",
  doctorPatientFamily: "/images/doctor-patient-family.png",
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
} as const;

export const clinicContact = {
  phoneDisplay: "+91 81972 80019",
  phoneTel: "+918197280019",
  whatsapp: "918197280019",
  email: "care@drpremkumar.in",
  addressLine: "Attur Layout, Yelahanka, Bangalore 560064",
  googleMapsUrl: "https://maps.app.goo.gl/aUognHYwsz8SLEY26",
  googleRating: "4.9",
  googleReviewCount: "250+",
  locations: {
    attur: {
      name: "Attur Clinic",
      streetAddress: "Attur Layout, Yelahanka",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
      geo: { latitude: 13.1016, longitude: 77.5702 },
    },
    yelahanka: {
      name: "Yelahanka",
      streetAddress: "Yelahanka New Town",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
      geo: { latitude: 13.1005, longitude: 77.5963 },
    },
    hebbal: {
      name: "Hebbal",
      streetAddress: "Attur Layout, Yelahanka",
      addressLocality: "Bangalore",
      addressRegion: "Karnataka",
      postalCode: "560064",
      addressCountry: "IN",
      geo: { latitude: 13.0358, longitude: 77.597 },
    },
    dodballapur: {
      name: "Doddaballapur",
      streetAddress: "Attur Layout, Yelahanka",
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
    message ?? "Hi, I'd like to book a consultation with Dr. Prem Kumar."
  );
  return `https://wa.me/${clinicContact.whatsapp}?text=${text}`;
}

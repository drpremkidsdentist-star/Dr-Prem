export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  href: string;
  category: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface DoctorProfile {
  name: string;
  title: string;
  qualifications: string[];
  experience: string;
  bio: string;
  image: string;
  specializations: string[];
}

export interface ClinicInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  email: string;
  lat: number;
  lng: number;
  hours: {
    [key: string]: { open: string; close: string };
  };
}

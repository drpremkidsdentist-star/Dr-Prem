import { Metadata } from "next";
import { HomepageStoryboard } from "@/components/sections/HomepageStoryboard";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  title: "Dr. Prem Kumar | Microscopic Dentist Bangalore | Premium Dental Care",
  description:
    "Dr. Prem Kumar is Bangalore's most trusted microscopic dentist. Experience world-class dental care with advanced technology, precision, and personalized attention.",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <HomepageStoryboard />
    </div>
  );
}

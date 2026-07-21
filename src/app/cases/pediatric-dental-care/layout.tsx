import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pediatric Dental Care Case | Dr. Prem Kumar",
  description: "A gentle pediatric dentistry case study helping a child achieve lifelong oral health in Bangalore.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

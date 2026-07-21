import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dental Implant Makeover | Dr. Prem Kumar",
  description: "A complete smile restoration with dental implants by Dr. Prem Kumar in Bangalore.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

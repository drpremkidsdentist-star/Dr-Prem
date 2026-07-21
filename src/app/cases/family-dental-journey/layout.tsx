import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Family Dental Journey | Dr. Prem Kumar",
  description: "Follow a family's complete dental care journey with Dr. Prem Kumar in Bangalore.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}

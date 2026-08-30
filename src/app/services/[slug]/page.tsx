"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const legacyToNew: Record<string, string> = {
  "root-canal": "/services/microscopic-root-canal",
  implants: "/services/dental-implants",
  "smile-design": "/services/smile-design",
  pediatric: "/services/pediatric-dentistry",
  cosmetic: "/services/cosmetic-dentistry",
  laser: "/services/laser-dentistry",
  preventive: "/services/preventive-care",
};

export default function LegacyServicePage({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const target = legacyToNew[params.slug] ?? "/services";

  useEffect(() => {
    router.replace(target);
  }, [router, target]);

  return (
    <div className="min-h-screen flex items-center justify-center p-8 text-center">
      <p className="text-neutral-600">
        Redirecting to service page...{" "}
        <Link href={target} className="text-accent underline font-medium">
          Click here if not redirected
        </Link>
      </p>
    </div>
  );
}

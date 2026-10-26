"use client";

import { useEffect } from "react";

export function GtmListeners() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        const w = window as any;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "click_call" });
      } else if (
        href.includes("wa.me") ||
        href.includes("whatsapp.com") ||
        href.includes("api.whatsapp.com")
      ) {
        const w = window as any;
        w.dataLayer = w.dataLayer || [];
        w.dataLayer.push({ event: "click_whatsapp" });
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}

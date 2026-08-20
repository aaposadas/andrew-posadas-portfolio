"use client";

import { useEffect } from "react";

export default function HomeScrollReset() {
  useEffect(() => {
    if (window.location.hash) {
      return;
    }

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    };

    scrollToTop();
    const frame = window.requestAnimationFrame(scrollToTop);

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
      // sits above the Tawk.to chat bubble in the bottom-right corner
      className={`fixed bottom-24 right-5 z-40 w-12 h-12 rounded-full bg-[var(--mm-ink,#121212)] text-[var(--mm-lime,#b6f23a)] flex items-center justify-center shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75 pointer-events-none"
      }`}
    >
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.2} viewBox="0 0 24 24" aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V5m0 0l-6 6m6-6l6 6" />
      </svg>
    </button>
  );
}

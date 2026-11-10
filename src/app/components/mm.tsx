/**
 * Shared building blocks for the redesigned pages (.mm design system).
 * Server-safe: no hooks, no "use client".
 */
import type { ReactNode } from "react";
import { contactInfo } from "../data/content";

export const PHONE_DISPLAY = contactInfo.phone;
export const PHONE_TEL = "tel:+2348102592057";
export const WHATSAPP =
  "https://wa.me/2348102592057?text=Hello%20Metricmind%20Concepts%2C%20I%27d%20like%20to%20make%20an%20enquiry.";
/** URL-safe anchor id from a title, e.g. "CAC & Business Support" -> "cac-and-business-support" */
export const slug = (s: string) =>
  s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** WhatsApp link with a pre-filled message */
export const waLink = (text: string) => `https://wa.me/2348102592057?text=${encodeURIComponent(text)}`;
export const EMAIL = "info@metricmindconcepts.com";
export const MAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contactInfo.address)}`;

type IconProps = { className?: string };

export function Arrow({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export function WhatsAppIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 3 3 0 00-.9 2.2 5.2 5.2 0 001.1 2.7 11.8 11.8 0 004.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 001.8-1.2 2.2 2.2 0 00.1-1.2c0-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

export function PhoneIcon({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2.3a1 1 0 01.95.68l1.1 3.3a1 1 0 01-.5 1.2L7.2 9.3a11 11 0 005.5 5.5l1.1-1.65a1 1 0 011.2-.5l3.3 1.1a1 1 0 01.7.95V19a2 2 0 01-2 2h-1C9.7 21 3 14.3 3 6V5z" />
    </svg>
  );
}

export function PinIcon({ className = "w-5 h-5" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-6.2-7-11.5a7 7 0 1114 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  );
}

export function Check({ className = "w-4 h-4" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

/** Circuit traces echoing the logo, used as faint decoration */
export function CircuitTraces({ className = "" }: { className?: string }) {
  return (
    <svg className={`pointer-events-none ${className}`} viewBox="0 0 520 300" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M0 60h140l40 40h120l30-30h190" />
      <path d="M60 150h160l30 30h270" />
      <path d="M120 240h110l40-40h250" />
      <circle cx="330" cy="70" r="6" />
      <circle cx="250" cy="180" r="6" fill="currentColor" />
      <circle cx="270" cy="200" r="6" />
    </svg>
  );
}

/** Primary + secondary contact pair, reused through the pages */
export function ContactButtons({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 h-12 text-[15px] font-medium ${
          dark ? "bg-[var(--mm-lime)] text-[var(--mm-ink)] hover:bg-white" : "bg-[var(--mm-ink)] text-white hover:bg-[var(--mm-ink-2)]"
        }`}
      >
        <WhatsAppIcon className="w-[18px] h-[18px]" />
        Chat on WhatsApp
      </a>
      <a
        href={PHONE_TEL}
        className={`inline-flex items-center justify-center gap-2.5 rounded-full px-6 h-12 text-[15px] font-medium border ${
          dark
            ? "border-white/25 text-white hover:bg-white/10"
            : "border-[var(--mm-line)] text-[var(--mm-ink)] bg-[var(--mm-paper-2)] hover:border-[var(--mm-ink)]"
        }`}
      >
        <PhoneIcon className="w-[18px] h-[18px]" />
        Call {PHONE_DISPLAY}
      </a>
    </div>
  );
}

export function Eyebrow({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] ${
        dark ? "text-white/60" : "text-[var(--mm-muted)]"
      }`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-green)]" />
      {children}
    </p>
  );
}

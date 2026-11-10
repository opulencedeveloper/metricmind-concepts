"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "@/assets/logo/metricmind-logo.jpg";
import { WHATSAPP, PHONE_TEL, PHONE_DISPLAY, WhatsAppIcon, PhoneIcon, Arrow } from "./mm";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/academy", label: "Academy", badge: "New" },
  { href: "/nysc", label: "NYSC" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on Escape and lock page scroll while it's open
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 md:px-6 pt-3">
      <nav
        aria-label="Main"
        className={`pointer-events-auto mx-auto max-w-[82rem] rounded-full border transition-all duration-300 ${
          scrolled || isOpen
            ? "border-[var(--mm-line)] bg-[var(--mm-paper-2)]/85 backdrop-blur-xl shadow-[0_10px_30px_-15px_rgba(0,0,0,0.25)]"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-14 md:h-16 items-center justify-between pl-2 pr-2 md:pl-3">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 rounded-full pr-3" onClick={() => setIsOpen(false)}>
            <Image src={logo} alt="Metricmind Concepts logo" width={40} height={40} className="rounded-full bg-white ring-1 ring-[var(--mm-line)]" priority />
            <span className="text-[15px] md:text-base font-semibold tracking-[-0.02em] text-[var(--mm-ink)]">
              Metricmind <span className="serif text-[var(--mm-magenta)] text-[17px] md:text-lg">Concepts</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={`relative inline-flex items-center gap-1.5 rounded-full px-4 h-10 text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-[var(--mm-ink)] text-white"
                      : "text-[var(--mm-ink-2)] hover:bg-[var(--mm-ink)]/[0.06]"
                  }`}
                >
                  {item.label}
                  {item.badge && (
                    <span className="rounded-full bg-[var(--mm-lime)] px-1.5 py-px text-[10px] font-semibold text-[var(--mm-ink)]">{item.badge}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--mm-ink)] text-white pl-2 pr-5 h-11 text-sm font-medium hover:bg-[var(--mm-ink-2)]"
            >
              <span className="w-7 h-7 rounded-full bg-[var(--mm-lime)] text-[var(--mm-ink)] flex items-center justify-center">
                <WhatsAppIcon className="w-4 h-4" />
              </span>
              Chat with us
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center gap-2 rounded-full bg-[var(--mm-ink)] text-white pl-4 pr-3 h-10 text-sm font-medium"
            onClick={() => setIsOpen((o) => !o)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? "Close" : "Menu"}
            <span className="relative w-4 h-4" aria-hidden>
              <span className={`absolute left-0 right-0 h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? "top-[7px] rotate-45" : "top-[4px]"}`} />
              <span className={`absolute left-0 right-0 h-0.5 bg-current rounded transition-all duration-300 ${isOpen ? "top-[7px] -rotate-45" : "top-[10px]"}`} />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={`lg:hidden mx-auto max-w-[82rem] mt-2 overflow-hidden rounded-[2rem] border border-[var(--mm-line)] bg-[var(--mm-paper-2)] shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <ul className="p-3">
          {navItems.map((item, i) => (
            <li key={item.href}>
              <Link
                href={item.href}
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`flex items-center justify-between rounded-2xl px-4 py-3.5 ${
                  isActive(item.href) ? "bg-[var(--mm-ink)] text-white" : "text-[var(--mm-ink)] hover:bg-[var(--mm-paper)]"
                }`}
              >
                <span className="flex items-center gap-3">
                  <span className={`serif text-lg ${isActive(item.href) ? "text-[var(--mm-lime)]" : "text-[var(--mm-muted)]"}`}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-2xl font-semibold tracking-[-0.03em]">{item.label}</span>
                  {item.badge && (
                    <span className="rounded-full bg-[var(--mm-lime)] px-2 py-0.5 text-[11px] font-semibold text-[var(--mm-ink)]">{item.badge}</span>
                  )}
                </span>
                <Arrow className="w-5 h-5 opacity-60" />
              </Link>
            </li>
          ))}
        </ul>
        <div className="grid grid-cols-2 gap-2 border-t border-[var(--mm-line)] p-3">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={isOpen ? 0 : -1}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--mm-ink)] text-white h-12 text-sm font-medium"
          >
            <WhatsAppIcon className="w-4 h-4" /> WhatsApp
          </a>
          <a
            href={PHONE_TEL}
            tabIndex={isOpen ? 0 : -1}
            aria-label={`Call ${PHONE_DISPLAY}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper)] h-12 text-sm font-medium"
          >
            <PhoneIcon className="w-4 h-4" /> Call us
          </a>
        </div>
      </div>
    </header>
  );
}

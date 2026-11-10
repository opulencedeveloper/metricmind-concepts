import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo/metricmind-logo.jpg";
import { academy, contactInfo, services } from "../data/content";
import { Arrow, CircuitTraces, EMAIL, MAPS, PHONE_DISPLAY, PHONE_TEL, PinIcon, WHATSAPP, WhatsAppIcon, slug } from "./mm";

const explore = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About us" },
  { href: "/services", label: "Services" },
  { href: "/academy", label: "Metricmind Academy" },
  { href: "/nysc", label: "NYSC services" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-3 md:px-6 pb-3" itemScope itemType="https://schema.org/WPFooter">
      <div className="relative mx-auto max-w-[82rem] overflow-hidden rounded-[2rem] bg-[var(--mm-ink)] text-white">
        <CircuitTraces className="absolute right-0 top-0 w-[560px] max-w-[90vw] text-[var(--mm-lime)] opacity-10" />

        {/* Top: invitation + quick contact */}
        <div className="relative px-6 md:px-12 pt-14 md:pt-20 pb-12 grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 h-8 text-[13px] text-white/75">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-lime)] mm-pulse" /> Online everywhere · Office in Aba
            </div>
            <p className="mt-6 text-[40px] md:text-[64px] font-semibold leading-[0.95] tracking-[-0.045em]">
              Got something <span className="serif text-[var(--mm-lime)]">to get done?</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row lg:justify-end gap-3">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--mm-lime)] text-[var(--mm-ink)] px-6 h-12 text-[15px] font-medium hover:bg-white"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" /> Chat on WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-6 h-12 text-[15px] font-medium hover:bg-white/10"
            >
              Email us <Arrow />
            </a>
          </div>
        </div>

        {/* Middle: columns */}
        <div className="relative px-6 md:px-12 py-12 grid grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1.3fr] gap-x-6 gap-y-10">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src={logo} alt="Metricmind Concepts logo" width={44} height={44} className="rounded-full bg-white" />
              <span className="text-lg font-semibold tracking-[-0.02em]">
                Metricmind <span className="serif text-[var(--mm-lime)] text-xl">Concepts</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Bringing technology closer to you. IT, business, training and digital services in Aba, Abia State.
            </p>
            <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/70">
              <span className="text-[var(--mm-lime)]">●</span> CAC · RC 9193173 &nbsp;·&nbsp; SCUML (EFCC) registered
            </p>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-[var(--mm-lime)]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Services</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.title}>
                  <Link href={`/services#${slug(s.title)}`} className="text-sm text-white/75 hover:text-[var(--mm-lime)]">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Academy */}
          <div className="col-span-2 lg:col-span-1">
            <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-white/40">Visit or call</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="flex gap-2.5 text-white/75 hover:text-white" itemProp="address">
                  <PinIcon className="w-4 h-4 mt-0.5 shrink-0 text-[var(--mm-lime)]" />
                  {contactInfo.address}
                </a>
              </li>
              <li>
                <a href={PHONE_TEL} className="text-white/75 hover:text-white">{PHONE_DISPLAY}</a>
              </li>
              <li>
                <a href={`mailto:${EMAIL}`} className="text-white/75 hover:text-white break-all">{EMAIL}</a>
              </li>
              <li className="text-white/55">{contactInfo.social}</li>
            </ul>

            <Link
              href="/academy"
              className="group mt-6 flex items-center justify-between gap-4 rounded-2xl bg-white/5 hover:bg-white/10 p-4"
            >
              <span>
                <span className="block text-sm font-semibold">{academy.name}</span>
                <span className="block text-xs text-white/55">{academy.slogan} {academy.courses.length} courses</span>
              </span>
              <span className="w-8 h-8 shrink-0 rounded-full bg-[var(--mm-lime)] text-[var(--mm-ink)] flex items-center justify-center group-hover:rotate-45 transition-transform">
                <Arrow className="w-4 h-4" />
              </span>
            </Link>
          </div>
        </div>

        {/* Oversized wordmark */}
        <div className="relative px-4 md:px-10 select-none" aria-hidden>
          <p className="text-center font-semibold leading-[0.8] tracking-[-0.06em] text-[17vw] lg:text-[13.5rem] text-white/[0.06] whitespace-nowrap">
            metricmind
          </p>
        </div>

        {/* Bottom bar */}
        <div className="relative px-6 md:px-12 py-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/45">
          <p>© {year} Metricmind Concepts. All rights reserved.</p>
          <p>
            Designed and developed by{" "}
            <a
              href="https://opulencedeveloper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/75 underline underline-offset-4 decoration-[var(--mm-lime)]/60 hover:text-[var(--mm-lime)]"
            >
              OpulenceDeveloper.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

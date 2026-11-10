import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Reveal from "../components/Reveal";
import { Arrow, CircuitTraces, Eyebrow, EMAIL, MAPS, PHONE_DISPLAY, PHONE_TEL, PhoneIcon, PinIcon, WHATSAPP, WhatsAppIcon } from "../components/mm";
import { mmFonts } from "../lib/fonts";
import { contactInfo } from "../data/content";
import ContactForm from "./ContactForm";
import Image from "next/image";
import { photos } from "../data/media";

const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(contactInfo.address)}&output=embed`;

const channels = [
  { href: WHATSAPP, external: true, title: "WhatsApp", sub: "Fastest reply", icon: <WhatsAppIcon className="w-5 h-5" />, primary: true },
  { href: PHONE_TEL, title: "Call us", sub: PHONE_DISPLAY, icon: <PhoneIcon className="w-5 h-5" /> },
  { href: `mailto:${EMAIL}`, title: "Email", sub: EMAIL, icon: <span className="text-lg leading-none">@</span> },
  { href: MAPS, external: true, title: "Visit the office", sub: contactInfo.addressShort, icon: <PinIcon className="w-5 h-5" /> },
];

export default function ContactPage() {
  return (
    <main className={`mm ${mmFonts} min-h-screen overflow-x-hidden`} itemScope itemType="https://schema.org/ContactPage">
      <Navigation />

      {/* ============ HERO ============ */}
      <section className="relative px-4 md:px-12 pt-28 md:pt-40 pb-12 md:pb-16">
        <CircuitTraces className="absolute right-0 top-24 w-[520px] max-w-[70vw] text-[var(--mm-green)] opacity-25" />
        <div className="relative max-w-[77.5rem] mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper-2)] px-4 h-8 text-[13px] text-[var(--mm-ink-2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-green)] mm-pulse" /> We usually reply quickly on WhatsApp
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[52px] sm:text-[80px] lg:text-[104px] font-semibold leading-[0.9] tracking-[-0.045em]" itemProp="headline">
              Let&apos;s <span className="serif text-[var(--mm-magenta)]">talk.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-[var(--mm-muted)]">
              Questions, quotes or a quick favour. Reach us whichever way suits you, or send a message below.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ============ CHANNELS ============ */}
      <section className="px-4 md:px-12 pb-16 md:pb-20">
        <div className="max-w-[77.5rem] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 70}>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group flex h-full flex-col justify-between gap-12 rounded-[2rem] p-6 border transition-colors ${
                  c.primary
                    ? "bg-[var(--mm-ink)] text-white border-transparent hover:bg-[var(--mm-ink-2)]"
                    : "bg-[var(--mm-paper-2)] border-[var(--mm-line)] hover:border-[var(--mm-ink)]"
                }`}
              >
                <span className={`w-11 h-11 rounded-full flex items-center justify-center ${c.primary ? "bg-[var(--mm-lime)] text-[var(--mm-ink)]" : "bg-[var(--mm-paper)]"}`}>
                  {c.icon}
                </span>
                <span className="flex items-end justify-between gap-3">
                  <span className="min-w-0">
                    <span className="block text-lg font-semibold tracking-[-0.02em]">{c.title}</span>
                    <span className={`block text-sm truncate ${c.primary ? "text-white/60" : "text-[var(--mm-muted)]"}`}>{c.sub}</span>
                  </span>
                  <Arrow className="w-5 h-5 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ FORM + MAP ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24 bg-[var(--mm-paper-2)] border-y border-[var(--mm-line)]">
        <div className="max-w-[77.5rem] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-14 items-stretch">
          <Reveal>
            <Eyebrow>Send a message</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
              Tell us what <span className="serif">you need.</span>
            </h2>
            <p className="mt-3 mb-8 text-[var(--mm-muted)]">We&apos;ll reply by email as soon as possible.</p>
            <ContactForm />
          </Reveal>

          <Reveal delay={120} className="flex flex-col">
            <figure className="relative mb-4 aspect-[16/9] overflow-hidden rounded-[2rem]">
              <Image src={photos.storefront.src} alt={photos.storefront.alt} fill sizes="(min-width: 1024px) 480px, 100vw" placeholder="blur" className="object-cover" />
              <figcaption className="absolute left-4 bottom-4 rounded-full bg-(--mm-ink)/90 px-3.5 py-1.5 text-xs font-medium text-white">
                Look for this sign on Omuma Road
              </figcaption>
            </figure>
            <div className="relative flex-1 min-h-[280px] overflow-hidden rounded-[2rem] border border-[var(--mm-line)] bg-[var(--mm-paper)]">
              <iframe
                title="Map showing Metricmind Concepts office in Aba"
                src={MAP_EMBED}
                className="absolute inset-0 w-full h-full grayscale-[60%]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <a
              href={MAPS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-start gap-3 rounded-2xl bg-[var(--mm-ink)] text-white p-5 text-[15px] hover:bg-[var(--mm-ink-2)]"
              itemProp="address"
            >
              <PinIcon className="w-5 h-5 mt-0.5 shrink-0 text-[var(--mm-lime)]" />
              <span>
                <span className="block text-white/90">{contactInfo.address}</span>
                <span className="mt-1 inline-flex items-center gap-1 text-sm text-[var(--mm-lime)]">
                  Get directions <Arrow className="w-3.5 h-3.5" />
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ SOCIAL ============ */}
      <section className="px-4 md:px-12 py-16 md:py-20">
        <Reveal className="max-w-[77.5rem] mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--mm-muted)]">Find us on social media</p>
          <p className="mt-3 text-[32px] md:text-[56px] font-semibold tracking-[-0.045em]">
            <span className="serif text-[var(--mm-magenta)]">{contactInfo.social}</span>
          </p>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

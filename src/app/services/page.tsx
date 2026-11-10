import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Reveal from "../components/Reveal";
import { Arrow, Check, CircuitTraces, ContactButtons, Eyebrow, WhatsAppIcon, slug, waLink } from "../components/mm";
import { mmFonts } from "../lib/fonts";
import { services, nyscServices } from "../data/content";

export default function ServicesPage() {
  const total = services.reduce((n, s) => n + s.services.length, 0) + nyscServices.length;

  return (
    <main className={`mm ${mmFonts} min-h-screen overflow-x-hidden`} itemScope itemType="https://schema.org/Service">
      <meta itemProp="provider" content="Metricmind Concepts" />
      <meta itemProp="areaServed" content="Aba, Abia State, Nigeria" />
      <Navigation />

      {/* ============ HERO ============ */}
      <section className="relative px-4 md:px-12 pt-28 md:pt-40 pb-12 md:pb-16">
        <CircuitTraces className="absolute right-0 top-24 w-[520px] max-w-[70vw] text-[var(--mm-green)] opacity-25" />
        <div className="relative max-w-[77.5rem] mx-auto">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper-2)] px-4 h-8 text-[13px] text-[var(--mm-ink-2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-green)] mm-pulse" /> {total}+ services across {services.length + 1} categories
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[48px] sm:text-[72px] lg:text-[96px] font-semibold leading-[0.92] tracking-[-0.045em] max-w-5xl">
              What can we <span className="serif text-[var(--mm-magenta)]">help</span> you with?
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-base md:text-lg leading-relaxed text-[var(--mm-muted)]">
              IT, business registration, training, online applications, design and printing, all from one
              office in Aba. Pick a category, or just tell us what you need.
            </p>
          </Reveal>

          {/* category index */}
          <Reveal delay={240}>
            <nav aria-label="Service categories" className="mt-10 flex flex-wrap gap-2">
              {services.map((s, i) => (
                <a
                  key={s.title}
                  href={`#${slug(s.title)}`}
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper-2)] pl-2 pr-4 h-10 text-sm hover:border-[var(--mm-ink)] hover:bg-white"
                >
                  <span className="w-6 h-6 rounded-full bg-[var(--mm-ink)] text-white text-[11px] flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.title}
                </a>
              ))}
              <Link
                href="/nysc"
                className="inline-flex items-center gap-2 rounded-full bg-[var(--mm-lime)] pl-2 pr-4 h-10 text-sm font-medium hover:bg-[var(--mm-ink)] hover:text-white"
              >
                <span className="w-6 h-6 rounded-full bg-[var(--mm-ink)] text-[var(--mm-lime)] text-[11px] flex items-center justify-center">
                  {String(services.length + 1).padStart(2, "0")}
                </span>
                NYSC Services
              </Link>
            </nav>
          </Reveal>
        </div>
      </section>

      {/* ============ CATEGORIES ============ */}
      <section className="px-4 md:px-12 pb-8">
        <div className="max-w-[77.5rem] mx-auto">
          {services.map((s, i) => (
            <article
              key={s.title}
              id={slug(s.title)}
              className="scroll-mt-24 border-t border-[var(--mm-line)] py-14 md:py-20 grid lg:grid-cols-[1fr_1.15fr] gap-10 lg:gap-16 items-start"
            >
              <Reveal className={`lg:sticky lg:top-28 ${i % 2 ? "lg:order-2" : ""}`}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
                  <Image
                    src={s.imageUrl}
                    alt={s.title}
                    fill
                    sizes="(min-width: 1024px) 560px, 100vw"
                    className="object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-500"
                  />
                  <span className="absolute top-4 left-4 serif text-5xl md:text-6xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>

              <div className={i % 2 ? "lg:order-1" : ""}>
                <Reveal>
                  <Eyebrow>Category {String(i + 1).padStart(2, "0")}</Eyebrow>
                  <h2 className="mt-4 text-[32px] md:text-[48px] font-semibold leading-[1.02] tracking-[-0.04em]">{s.title}</h2>
                  <p className="mt-4 text-lg text-[var(--mm-muted)]">{s.description}</p>
                </Reveal>

                <ul className="mt-8 border-t border-[var(--mm-line)]">
                  {s.services.map((item, j) => (
                    <Reveal key={item} delay={j * 40}>
                      <li className="flex items-start gap-4 border-b border-[var(--mm-line)] py-4 text-[15px] md:text-base">
                        <span className="mt-0.5 w-6 h-6 rounded-full bg-[var(--mm-ink)] text-[var(--mm-lime)] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[var(--mm-ink-2)]">{item}</span>
                      </li>
                    </Reveal>
                  ))}
                </ul>

                <Reveal delay={120}>
                  <a
                    href={waLink(`Hello Metricmind Concepts, I'd like to enquire about ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-[var(--mm-ink)] text-white px-6 h-12 text-[15px] font-medium hover:bg-[var(--mm-ink-2)]"
                  >
                    <WhatsAppIcon className="w-[18px] h-[18px]" />
                    Request this service
                  </a>
                  {s.title.includes("Training") && (
                    <Link
                      href="/academy"
                      className="mt-3 sm:mt-8 sm:ml-3 inline-flex items-center gap-2 rounded-full bg-[var(--mm-lime)] px-6 h-12 text-[15px] font-medium hover:bg-[var(--mm-ink)] hover:text-white"
                    >
                      Explore Metricmind Academy <Arrow />
                    </Link>
                  )}
                </Reveal>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ============ NYSC BAND ============ */}
      <section className="px-4 md:px-12 py-8 md:py-12">
        <Reveal className="max-w-[77.5rem] mx-auto">
          <Link
            href="/nysc"
            className="group relative flex flex-col md:flex-row md:items-center justify-between gap-8 overflow-hidden rounded-[2rem] bg-[var(--mm-lime)] p-8 md:p-12"
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--mm-ink)]/60">Category {String(services.length + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 text-[32px] md:text-[48px] font-semibold leading-[1.02] tracking-[-0.04em]">
                NYSC services, <span className="serif">sorted.</span>
              </h2>
              <p className="mt-3 text-[var(--mm-ink)]/70 max-w-lg">
                Registration, biometrics, corrections, redeployment, printing and more. See all {nyscServices.length} services.
              </p>
            </div>
            <span className="w-16 h-16 shrink-0 rounded-full bg-[var(--mm-ink)] text-[var(--mm-lime)] flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <Arrow className="w-6 h-6" />
            </span>
          </Link>
        </Reveal>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-4 md:px-12 pt-12 pb-20 md:pb-28">
        <Reveal className="max-w-[77.5rem] mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--mm-ink)] text-white px-6 py-14 md:p-16 text-center">
            <CircuitTraces className="absolute left-0 bottom-0 w-[460px] max-w-[80vw] text-[var(--mm-lime)] opacity-15" />
            <div className="relative">
              <h2 className="text-[36px] md:text-[64px] font-semibold leading-[1] tracking-[-0.045em] text-balance">
                Don&apos;t see it listed? <span className="serif text-[var(--mm-lime)]">Ask anyway.</span>
              </h2>
              <p className="mt-5 text-white/65 text-lg max-w-xl mx-auto">
                If it involves a computer, a form or a brand, there&apos;s a good chance we can help.
              </p>
              <div className="mt-9 flex justify-center">
                <ContactButtons dark />
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

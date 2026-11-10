import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Reveal from "../components/Reveal";
import { Arrow, Check, CircuitTraces, ContactButtons, Eyebrow, WhatsAppIcon, waLink } from "../components/mm";
import { mmFonts } from "../lib/fonts";
import { nyscServices } from "../data/content";

const steps = [
  { title: "Message or walk in", body: "Tell us what you need, whether that's registration, a correction, redeployment or a printout." },
  { title: "We check what's required", body: "We tell you exactly which details and documents to bring, so there are no wasted trips." },
  { title: "We get it done", body: "We complete the process with you and make sure everything is submitted correctly." },
];

const faqs = [
  {
    q: "Can you help if I made a mistake on my NYSC registration?",
    a: "Yes. We assist with corrections of name, course of study and date of birth. Bring your details and we'll guide you through the correct process.",
  },
  {
    q: "Do I need to come in person?",
    a: "For biometric (fingerprint) capturing, yes. Many other tasks, like uploads and printing, can be started over WhatsApp.",
  },
  {
    q: "Can you print my green card and call-up letter?",
    a: "Yes. We print green cards, call-up letters and other NYSC documents.",
  },
  {
    q: "I'm being remobilised. Can you help?",
    a: "Yes. We assist with remobilisation and revalidation. Message us with your situation and we'll explain the next steps.",
  },
];

export default function NYSCPage() {
  return (
    <main className={`mm ${mmFonts} min-h-screen overflow-x-hidden`} itemScope itemType="https://schema.org/Service">
      <meta itemProp="name" content="NYSC Services" />
      <meta itemProp="provider" content="Metricmind Concepts" />
      <meta itemProp="areaServed" content="Aba, Abia State, Nigeria" />
      <Navigation />

      {/* ============ HERO (dark) ============ */}
      <section className="px-4 md:px-12 pt-24 md:pt-28">
        <div className="relative max-w-[77.5rem] mx-auto overflow-hidden rounded-[2rem] bg-[var(--mm-ink)] text-white px-6 py-16 md:px-14 md:py-24">
          <CircuitTraces className="absolute right-0 top-8 w-[560px] max-w-[85vw] text-[var(--mm-lime)] opacity-20" />
          <div className="absolute -left-32 -bottom-32 w-96 h-96 rounded-full bg-[var(--mm-lime)]/15 blur-3xl" aria-hidden />
          <div className="relative grid lg:grid-cols-[1.4fr_1fr] gap-12 items-end">
            <div>
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 h-8 text-[13px] text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-lime)] mm-pulse" /> For prospective &amp; serving corps members
                </div>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 text-[48px] sm:text-[72px] lg:text-[88px] font-semibold leading-[0.92] tracking-[-0.045em]">
                  NYSC, made <span className="serif text-[var(--mm-lime)]">easy.</span>
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-7 max-w-lg text-base md:text-lg leading-relaxed text-white/65">
                  Registration, corrections, redeployment, uploads and printing, handled carefully by people who
                  do it every day. Online from anywhere, or walk in for biometrics in Aba.
                </p>
              </Reveal>
              <Reveal delay={240} className="mt-9">
                <ContactButtons dark />
              </Reveal>
            </div>
            <Reveal delay={200}>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { v: String(nyscServices.length), k: "NYSC services" },
                  { v: "24/7", k: "Message us online" },
                ].map((s) => (
                  <div key={s.k} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                    <p className="text-4xl md:text-5xl font-semibold tracking-[-0.04em]">{s.v}</p>
                    <p className="mt-1 text-sm text-white/55">{s.k}</p>
                  </div>
                ))}
                <a
                  href={waLink("Hello Metricmind Concepts, I need help with my NYSC.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2 flex items-center justify-between rounded-2xl bg-[var(--mm-lime)] text-[var(--mm-ink)] p-5 font-medium hover:bg-white"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <WhatsAppIcon className="w-5 h-5" /> Ask about your case
                  </span>
                  <Arrow className="w-5 h-5" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[77.5rem] mx-auto">
          <Reveal>
            <Eyebrow>What we handle</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] max-w-2xl">
              Every step of your <span className="serif">service year.</span>
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {nyscServices.map((s, i) => (
              <Reveal key={s} delay={(i % 3) * 70}>
                <div className="group flex h-full flex-col justify-between gap-10 rounded-[2rem] border border-[var(--mm-line)] bg-[var(--mm-paper-2)] p-7 hover:bg-[var(--mm-ink)] hover:text-white hover:border-transparent transition-colors duration-300">
                  <div className="flex items-center justify-between">
                    <span className="serif text-3xl text-[var(--mm-muted)] group-hover:text-[var(--mm-lime)]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="w-8 h-8 rounded-full bg-[var(--mm-paper)] group-hover:bg-[var(--mm-lime)] flex items-center justify-center text-[var(--mm-ink)]">
                      <Check className="w-4 h-4" />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold tracking-[-0.02em] leading-snug">{s}</h3>
                </div>
              </Reveal>
            ))}
            <Reveal delay={140}>
              <a
                href={waLink("Hello Metricmind Concepts, I have an NYSC question that isn't on your list.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col justify-between gap-10 rounded-[2rem] bg-[var(--mm-lime)] p-7 hover:bg-[var(--mm-ink)] hover:text-white transition-colors duration-300"
              >
                <span className="w-10 h-10 rounded-full bg-[var(--mm-ink)] text-[var(--mm-lime)] flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                <span className="text-xl font-semibold tracking-[-0.02em] leading-snug">
                  Something else? <span className="serif">Just ask.</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ STEPS ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24 bg-[var(--mm-paper-2)] border-y border-[var(--mm-line)]">
        <div className="max-w-[77.5rem] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
              Three steps. <span className="serif">No wahala.</span>
            </h2>
          </Reveal>
          <ol className="border-t border-[var(--mm-line)]">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 80}>
                <li className="grid grid-cols-[auto_1fr] gap-6 border-b border-[var(--mm-line)] py-8">
                  <span className="w-12 h-12 rounded-full bg-[var(--mm-lime)] flex items-center justify-center font-semibold text-lg">{i + 1}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.03em]">{s.title}</h3>
                    <p className="mt-2 text-[15px] md:text-base leading-relaxed text-[var(--mm-muted)]">{s.body}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[56rem] mx-auto">
          <Reveal className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
              Corps members <span className="serif">often ask.</span>
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group rounded-2xl border border-[var(--mm-line)] bg-[var(--mm-paper-2)] px-6 open:bg-white">
                  <summary className="flex items-center justify-between gap-6 py-5 text-base md:text-lg font-medium">
                    {f.q}
                    <span className="mm-plus w-8 h-8 shrink-0 rounded-full bg-[var(--mm-paper)] flex items-center justify-center text-xl leading-none transition-transform duration-300 group-open:bg-[var(--mm-lime)]">
                      +
                    </span>
                  </summary>
                  <p className="pb-6 pr-10 text-[15px] leading-relaxed text-[var(--mm-muted)]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-4 md:px-12 pb-20 md:pb-28">
        <Reveal className="max-w-[77.5rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 rounded-[2rem] border border-[var(--mm-line)] bg-[var(--mm-paper-2)] p-8 md:p-12">
            <div>
              <h2 className="text-[32px] md:text-[48px] font-semibold leading-[1.02] tracking-[-0.04em]">
                Ready when <span className="serif text-[var(--mm-magenta)]">you are.</span>
              </h2>
              <p className="mt-3 text-[var(--mm-muted)]">
                Need other help too? <Link href="/services" className="underline underline-offset-4 decoration-[var(--mm-green)] decoration-2">See all our services</Link>.
              </p>
            </div>
            <ContactButtons />
          </div>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

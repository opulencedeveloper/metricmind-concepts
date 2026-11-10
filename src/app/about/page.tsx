import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Reveal from "../components/Reveal";
import { Arrow, Check, ContactButtons, Eyebrow, EMAIL, MAPS, PHONE_DISPLAY, PHONE_TEL, PinIcon, WHATSAPP, WhatsAppIcon } from "../components/mm";
import { mmFonts } from "../lib/fonts";
import { contactInfo, services } from "../data/content";
import PhotoReel from "../components/PhotoReel";
import { photos, credentials } from "../data/media";
import logo from "@/assets/logo/metricmind-logo.jpg";
import cacImage from "@/assets/images/METRICMIND-CONCEPTS-CAC.jpg";

const values = [
  { title: "Skill", body: "Experienced hands who know the systems, forms and tools, so it's done right the first time." },
  { title: "Speed", body: "Clear steps, quick turnaround and updates until your request is complete." },
  { title: "Fair pricing", body: "Affordable, upfront pricing for individuals, students and small businesses." },
  { title: "Care", body: "Patient, honest guidance. Your satisfaction is how we measure our work." },
];

const faqs = [
  {
    q: "Where is Metricmind Concepts located?",
    a: `Our office is at ${contactInfo.address}. Walk-ins are welcome, and many services can also be started over WhatsApp.`,
  },
  {
    q: "Is Metricmind Concepts a registered business?",
    a: "Yes. We're registered with the Corporate Affairs Commission (CAC) as a limited company, Metricmind Digital Concepts Ltd (RC 9193173), and with the EFCC's Special Control Unit Against Money Laundering (SCUML), RN SC 011500823.",
  },
  {
    q: "Who do you work with?",
    a: "Individuals, students, corps members, startups, small businesses and organisations. If it involves a computer, a form or a brand, we can likely help.",
  },
  {
    q: "Do you offer training for groups or staff?",
    a: "Yes. We run private and group sessions in computer applications, graphics design, UI/UX and programming.",
  },
  {
    q: "How do I get started?",
    a: "Send us a WhatsApp message or call with what you need. We'll tell you the requirements and next steps right away.",
  },
];

// Mix of classroom and business-support photos for the About reel
const highlights = [
  photos.teamTalk,
  photos.whiteboard,
  photos.consult,
  photos.kidsLaptop,
  photos.deskWork,
  photos.coursePoster,
  photos.studentsSmile,
  photos.thinking,
  photos.mentorBack,
  photos.deskSmile,
];

export default function AboutPage() {
  return (
    <main className={`mm ${mmFonts} min-h-screen overflow-x-hidden`} itemScope itemType="https://schema.org/AboutPage">
      <Navigation />

      {/* ============ HERO: centred identity ============ */}
      <section className="px-4 md:px-12 pt-28 md:pt-40 pb-14 md:pb-20">
        <div className="max-w-[82rem] mx-auto flex flex-col items-center text-center">
          <Reveal>
            <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full bg-white border border-[var(--mm-line)] p-1.5 shadow-[0_20px_40px_-20px_rgba(0,0,0,0.35)]">
              <Image src={logo} alt="Metricmind Concepts logo" className="w-full h-full rounded-full object-cover" priority sizes="128px" />
              <span className="absolute bottom-1.5 right-1.5 w-5 h-5 rounded-full bg-[var(--mm-green)] border-[3px] border-[var(--mm-paper)] mm-pulse" aria-hidden />
            </div>
          </Reveal>

          <Reveal delay={60}>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper-2)] px-4 h-8 text-[13px] text-[var(--mm-ink-2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-green)]" /> Taking new clients online &amp; in Aba
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1
              className="mt-6 text-[52px] sm:text-[72px] lg:text-[96px] font-semibold leading-[0.92] tracking-[-0.045em]"
              itemProp="headline"
            >
              Metricmind
              <br />
              <span className="serif text-[var(--mm-magenta)]">Concepts</span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-7 max-w-[34rem] text-base md:text-lg leading-relaxed text-[var(--mm-muted)]">
              A registered IT and digital solutions company in Aba, Abia State. We bring technology closer to
              you, from training and CAC registration to design, printing and online applications.
            </p>
          </Reveal>

          <Reveal delay={240} className="mt-9">
            <ContactButtons />
          </Reveal>

          <Reveal delay={320}>
            <a href="#story" className="mt-14 inline-flex flex-col items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--mm-muted)] hover:text-[var(--mm-ink)]">
              Scroll to see more
              <span className="w-px h-10 bg-gradient-to-b from-[var(--mm-muted)] to-transparent" />
            </a>
          </Reveal>
        </div>
      </section>

      {/* ============ HIGHLIGHT REEL ============ */}
      <section aria-label="Highlights" className="pb-16 md:pb-24">
        <PhotoReel photos={highlights} />
      </section>

      {/* ============ STORY ============ */}
      <section id="story" className="px-4 md:px-12 py-16 md:py-24 border-t border-[var(--mm-line)]">
        <div className="max-w-[82rem] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
              Technology should feel <span className="serif">within reach.</span>
            </h2>
          </Reveal>
          <div className="space-y-6 text-base md:text-lg leading-relaxed text-[var(--mm-ink-2)]">
            <Reveal delay={60}>
              <p>
                At Metricmind Concepts, we believe technology should work for everyone, not just big companies.
                So we built one place, online and at our office in Aba, where you can get your tech, business
                and online tasks done properly, wherever you are.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-[var(--mm-muted)]">
                From computer training to corporate branding and global applications, we combine innovation,
                skill and professionalism to deliver results individuals, startups and organisations can rely on.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <p className="text-[var(--mm-muted)]">
                Our team is dedicated to fast, reliable and affordable service, with solutions tailored to each
                client&apos;s needs.
              </p>
            </Reveal>

            <Reveal delay={220}>
              <div className="grid grid-cols-5 gap-3 pt-2">
                <figure className="col-span-3 relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src={photos.storefront.src} alt={photos.storefront.alt} fill sizes="(min-width: 1024px) 420px, 60vw" placeholder="blur" className="object-cover" />
                  <figcaption className="absolute left-3 bottom-3 rounded-full bg-(--mm-paper-2)/95 px-3 py-1 text-xs font-medium text-(--mm-ink)">
                    Our office · Omuma Road, Aba
                  </figcaption>
                </figure>
                <figure className="col-span-2 relative overflow-hidden rounded-3xl">
                  <Image src={photos.teamStreet.src} alt={photos.teamStreet.alt} fill sizes="(min-width: 1024px) 280px, 40vw" placeholder="blur" className="object-cover" />
                  <figcaption className="absolute left-3 bottom-3 rounded-full bg-(--mm-ink)/90 px-3 py-1 text-xs font-medium text-white">
                    The team
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            <Reveal delay={260}>
              <div className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden bg-[var(--mm-line)] border border-[var(--mm-line)] mt-4">
                {[
                  { k: "CAC registration", v: "RC 9193173" },
                  { k: "Company type", v: "Limited (Ltd)" },
                  { k: "Service categories", v: String(services.length) },
                  { k: "Based in", v: "Aba, Abia" },
                ].map((f) => (
                  <div key={f.k} className="bg-[var(--mm-paper-2)] p-5">
                    <p className="text-xs uppercase tracking-[0.16em] text-[var(--mm-muted)]">{f.k}</p>
                    <p className="mt-1.5 text-xl font-semibold tracking-[-0.03em] text-[var(--mm-ink)]">{f.v}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHAT WE DO: expandable rows ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24 bg-[var(--mm-paper-2)] border-y border-[var(--mm-line)]">
        <div className="max-w-[82rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
                Everything, <span className="serif">under one roof.</span>
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-[var(--mm-ink)] text-white px-5 h-11 text-sm font-medium hover:bg-[var(--mm-ink-2)]">
                All services <Arrow />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 border-t border-[var(--mm-line)]">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <details className="group border-b border-[var(--mm-line)]">
                  <summary className="grid grid-cols-[auto_1fr_auto] items-center gap-4 md:gap-8 py-6">
                    <span className="serif text-2xl md:text-3xl text-[var(--mm-muted)] w-10">{String(i + 1).padStart(2, "0")}</span>
                    <span>
                      <span className="block text-lg md:text-2xl font-semibold tracking-[-0.03em]">{s.title}</span>
                      <span className="block mt-1 text-sm text-[var(--mm-muted)]">{s.description}</span>
                    </span>
                    <span className="mm-plus w-9 h-9 rounded-full border border-[var(--mm-line)] flex items-center justify-center text-xl leading-none transition-transform duration-300 group-open:bg-[var(--mm-lime)] group-open:border-transparent">
                      +
                    </span>
                  </summary>
                  <ul className="pb-7 pl-14 md:pl-[4.5rem] grid sm:grid-cols-2 gap-x-8 gap-y-2.5 text-[15px] text-[var(--mm-ink-2)]">
                    {s.services.map((item) => (
                      <li key={item} className="flex gap-2.5">
                        <Check className="w-4 h-4 mt-0.5 shrink-0 text-[var(--mm-green)]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[82rem] mx-auto">
          <Reveal>
            <Eyebrow>What drives us</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em] max-w-2xl">
              Four things we <span className="serif">never compromise</span> on.
            </h2>
          </Reveal>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80}>
                <div className="group h-full rounded-[2rem] border border-[var(--mm-line)] bg-[var(--mm-paper-2)] p-7 hover:bg-[var(--mm-ink)] hover:text-white transition-colors duration-300">
                  <span className="serif text-3xl text-[var(--mm-muted)] group-hover:text-[var(--mm-lime)]">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-10 text-2xl font-semibold tracking-[-0.03em]">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--mm-muted)] group-hover:text-white/65">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CAC TRUST ============ */}
      <section className="px-4 md:px-12 py-8 md:py-12">
        <Reveal className="max-w-[82rem] mx-auto">
          <div className="rounded-[2rem] bg-[var(--mm-ink)] text-white p-8 md:p-14 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center overflow-hidden">
            <div>
              <Eyebrow dark>Registered &amp; accountable</Eyebrow>
              <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
                A business you can <span className="serif text-[var(--mm-lime)]">trust.</span>
              </h2>
              <p className="mt-5 text-white/65 leading-relaxed max-w-lg">
                Registered with the Corporate Affairs Commission under the Companies and Allied Matters Act 2020,
                and with the EFCC&apos;s Special Control Unit Against Money Laundering (SCUML). We help our clients
                get the same registrations for their own businesses.
              </p>
              <ul className="mt-8 space-y-3 text-[15px]">
                {[
                  `CAC ${credentials.cac.number} · ${credentials.cac.entity} · incorporated ${credentials.cac.incorporated}`,
                  `SCUML (EFCC) ${credentials.scuml.number} · ${credentials.scuml.entity}`,
                  "Principal place of business: Omuma Road, Aba",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[var(--mm-lime)] text-[var(--mm-ink)] flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <figure className="relative mx-auto w-full max-w-sm pl-10 pb-28 sm:pb-32">
              {/* accredited-agent flyer peeking out behind the certificates */}
              <Image
                src={photos.agentFlyer.src}
                alt={photos.agentFlyer.alt}
                placeholder="blur"
                className="absolute left-0 top-16 w-[48%] h-auto rounded-2xl -rotate-[8deg] shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)]"
                sizes="180px"
              />
              <Image
                src={cacImage}
                alt="CAC Certificate of Incorporation for Metricmind Digital Concepts Ltd, Company Registration No. RC 9193173"
                className="relative w-[78%] h-auto rounded-2xl rotate-[2deg] shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
                sizes="(min-width: 1024px) 280px, 70vw"
              />
              <Image
                src={photos.scuml.src}
                alt={photos.scuml.alt}
                placeholder="blur"
                className="absolute right-0 bottom-0 w-[80%] h-auto rounded-2xl border-4 border-(--mm-ink) shadow-[0_30px_60px_-20px_rgba(0,0,0,0.7)] -rotate-[2deg]"
                sizes="(min-width: 1024px) 300px, 75vw"
              />
              <figcaption className="absolute -bottom-3 left-6 rounded-full bg-(--mm-lime) text-(--mm-ink) px-4 py-1.5 text-xs font-semibold shadow-lg">
                CAC + SCUML (EFCC) registered
              </figcaption>
            </figure>
          </div>
        </Reveal>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[56rem] mx-auto">
          <Reveal className="text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
              Good to <span className="serif">know.</span>
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

      {/* ============ CLOSING NOTE + CONTACT CARDS ============ */}
      <section className="px-4 md:px-12 pb-20 md:pb-28">
        <div className="max-w-[82rem] mx-auto">
          <Reveal className="text-center">
            <h2 className="text-[40px] md:text-[64px] font-semibold leading-[1] tracking-[-0.045em]">
              Thanks for <span className="serif text-[var(--mm-magenta)]">stopping by.</span>
            </h2>
            <p className="mt-5 text-[var(--mm-muted)] text-base md:text-lg max-w-md mx-auto">
              Whatever you need done, we&apos;d love to help. Pick the easiest way to reach us.
            </p>
          </Reveal>

          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { href: WHATSAPP, external: true, title: "WhatsApp", sub: "Fastest reply", icon: <WhatsAppIcon className="w-5 h-5" />, primary: true },
              { href: PHONE_TEL, title: "Call us", sub: PHONE_DISPLAY, icon: <span className="text-lg">☎</span> },
              { href: `mailto:${EMAIL}`, title: "Email", sub: EMAIL, icon: <span className="text-lg">@</span> },
              { href: MAPS, external: true, title: "Visit", sub: contactInfo.addressShort, icon: <PinIcon className="w-5 h-5" /> },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 70}>
                <a
                  href={c.href}
                  {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={`group flex h-full flex-col justify-between gap-10 rounded-[2rem] p-6 border transition-colors ${
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
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

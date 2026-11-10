import Image from "next/image";
import Link from "next/link";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Reveal from "./components/Reveal";
import Slideshow from "./components/Slideshow";
import PhotoReel from "./components/PhotoReel";
import { photos, academyGallery, credentials } from "./data/media";
import { Arrow, Check, CircuitTraces, ContactButtons, Eyebrow, EMAIL, MAPS, PinIcon, WhatsAppIcon, waLink } from "./components/mm";
import { mmFonts } from "./lib/fonts";
import { services, whyChooseUs, nyscServices, contactInfo, academy } from "./data/content";
import logo from "@/assets/logo/metricmind-logo.jpg";
import cacImage from "@/assets/images/METRICMIND-CONCEPTS-CAC.jpg";

const serviceTags = ["IT & Repairs", "Business", "Training", "Online", "Design & Print", "Web & Growth"];

const marqueeItems = [
  "CAC Registration",
  "SCUML (EFCC) Registration",
  "Trademark Registration",
  "Computer Training",
  "Graphics Design",
  "NYSC Services",
  "Visa & DS-160",
  "JAMB Registration",
  "Website Design",
  "Printing & Branding",
  "Networking",
  "Data Recovery",
];

const steps = [
  {
    title: "Reach out",
    body: "Send a WhatsApp message, call, or walk into our office in Aba and tell us what you need. Wherever you are, most services can be handled online.",
  },
  {
    title: "We handle it",
    body: "Our team gathers your documents and details, then does the work properly, from start to finish.",
  },
  {
    title: "You're sorted",
    body: "Collect your result, certificate, design or registration, and get support afterwards if you need it.",
  },
];

const faqs = [
  {
    q: "Can you register my business name with CAC?",
    a: "Yes. We handle business name registration, company incorporation, upgrades, annual returns and TIN processing. Bring or send your details and we'll guide you through what's required.",
  },
  {
    q: "Can you get my business a SCUML certificate or register a trademark?",
    a: "Yes. We handle SCUML registration with the EFCC's Special Control Unit Against Money Laundering, and name and logo trademark registration in all classes. Send us your business details and we'll tell you what's needed.",
  },
  {
    q: "Do I have to come to the office?",
    a: "Not always. Many services, like online applications, design work and CAC filings, can be started over WhatsApp or phone. Some tasks, like biometric capture, need you in person.",
  },
  {
    q: "What computer and programming courses do you teach?",
    a: "Office packages (Word, Excel, PowerPoint), CorelDraw, graphics design, UI/UX, and programming in HTML, Python and Java, in private or group sessions.",
  },
  {
    q: "Can you help with my NYSC registration or corrections?",
    a: "Yes. We help with online registration, redeployment, corrections of name, course or date of birth, document uploads, remobilisation and more.",
  },
  {
    q: "Do you build websites and set up business email?",
    a: "Yes. We design websites and set up professional email addresses on your own domain, like you@yourbusiness.com.",
  },
];

export default function Home() {
  return (
    <main
      className={`mm ${mmFonts} min-h-screen overflow-x-hidden`}
      itemScope
      itemType="https://schema.org/WebPage"
    >
      <meta itemProp="name" content="Metricmind Concepts - IT, CAC & Digital Services in Aba" />
      <meta
        itemProp="description"
        content="Computer training, CAC business registration, graphics design, NYSC and online application services in Aba, Abia State, Nigeria."
      />

      <Navigation />

      {/* ============ HERO ============ */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-28 md:pt-36 pb-16 md:pb-24">
        {/* faint circuit traces, echoing the logo */}
        <CircuitTraces className="absolute right-0 top-24 w-[520px] max-w-[70vw] text-(--mm-green) opacity-25" />

        <div className="relative max-w-[76rem] mx-auto grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-(--mm-line) bg-(--mm-paper-2) pl-2.5 pr-4 h-9 text-sm">
                <span className="mm-pulse w-2 h-2 rounded-full bg-(--mm-green)" />
                <span className="text-(--mm-ink-2)">Serving clients online everywhere · Office in Aba</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-6 text-[2.6rem] leading-[1.02] sm:text-6xl lg:text-[4.6rem] font-semibold tracking-[-0.035em] text-balance">
                Your <span className="serif text-(--mm-magenta)">one-stop</span> hub for tech, business &amp;{" "}
                <span className="serif">digital</span> services.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-(--mm-muted)">
                From CAC registration and computer training to design, printing, NYSC and visa applications,
                Metricmind Concepts gets it done fast, properly and at a fair price.
              </p>
            </Reveal>

            <Reveal delay={240} className="mt-9">
              <ContactButtons />
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-(--mm-muted)">
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-(--mm-green)" /> CAC registered · RC 9193173
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-(--mm-green)" /> SCUML (EFCC) registered
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-(--mm-green)" /> Online or walk-in
                </span>
                <span className="inline-flex items-center gap-2">
                  <Check className="w-4 h-4 text-(--mm-green)" /> Private &amp; group training
                </span>
              </div>
            </Reveal>
          </div>

          {/* Hero visual: real photo slideshow with floating cards */}
          <Reveal delay={200}>
            <div className="relative pt-7 pr-7 pb-10 sm:pb-0">
              {/* card-shuffle stack: front card flies out and the next rises from behind */}
              <Slideshow
                variant="shuffle"
                photos={[photos.storefront, photos.whiteboard, photos.consult, photos.kidsLaptop, photos.teamStreet]}
                priority
                sizes="(min-width: 1024px) 620px, 100vw"
                className="aspect-[4/5] sm:aspect-[5/6]"
                cardClassName="rounded-[1.75rem] bg-(--mm-ink) ring-4 ring-(--mm-paper-2) shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)]"
                caption={
                  <span className="inline-flex items-center gap-2 text-sm font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-(--mm-lime)" /> Inside Metricmind Concepts
                  </span>
                }
              />

              {/* floating brand card */}
              <div className="absolute z-50 -left-3 sm:-left-8 top-6 flex items-center gap-3 rounded-full bg-(--mm-paper-2) pl-1.5 pr-4 py-1.5 shadow-[0_15px_35px_-15px_rgba(0,0,0,0.4)] border border-(--mm-line)">
                <Image src={logo} alt="" width={40} height={40} className="rounded-full bg-white" />
                <span className="leading-tight">
                  <span className="block text-sm font-semibold">CAC &amp; SCUML registered</span>
                  <span className="block text-xs text-(--mm-muted)">Verified by CAC &amp; EFCC</span>
                </span>
              </div>

              {/* floating popular-services card */}
              <a
                href={MAPS}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute z-50 -bottom-2 sm:-bottom-8 right-3 sm:-right-6 w-[230px] rounded-3xl bg-(--mm-ink) text-white p-4 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)] hover:bg-(--mm-ink-2)"
              >
                <p className="text-[11px] uppercase tracking-[0.18em] text-white/45">Popular today</p>
                <ul className="mt-2 space-y-1.5 text-[13px]">
                  {["Business name registration", "Computer & Excel training", "NYSC & DS-160 forms"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/90">
                      <Check className="w-3.5 h-3.5 shrink-0 text-(--mm-lime)" /> {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 flex items-center gap-1.5 text-xs text-white/60">
                  <PinIcon className="w-3.5 h-3.5 text-(--mm-lime)" /> {contactInfo.addressShort}
                </p>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <section aria-label="What we do" className="border-y border-(--mm-line) bg-(--mm-paper-2) py-5 overflow-hidden">
        <div className="mm-marquee flex w-max gap-10 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-10 text-lg md:text-xl font-medium text-(--mm-ink-2)" aria-hidden={i >= marqueeItems.length}>
              {item}
              <span className="text-(--mm-magenta)">✳</span>
            </span>
          ))}
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-[82rem] mx-auto grid grid-cols-2 md:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-[var(--mm-line)] border border-[var(--mm-line)]">
          {[
            { value: "500+", label: "Happy clients" },
            { value: "1,000+", label: "Projects completed" },
            { value: "5+", label: "Years of experience" },
            { value: "6", label: "Service categories" },
          ].map((s, i) => (
            <Reveal key={s.label} delay={i * 70} className="bg-[var(--mm-paper)] p-6 md:p-8">
              <p className="text-4xl md:text-5xl font-semibold tracking-[-0.03em]">{s.value}</p>
              <p className="mt-2 text-sm text-[var(--mm-muted)]">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ============ LIFE AT METRICMIND: photo reel ============ */}
      <section aria-label="Life at Metricmind" className="pb-16 md:pb-24">
        <div className="max-w-[82rem] mx-auto px-4 sm:px-6 lg:px-8 mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <Reveal>
            <Eyebrow>Life at Metricmind</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-2xl">
              Real people. <span className="serif">Real results.</span>
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="max-w-sm text-(--mm-muted)">
              A look inside our classrooms and office, where learners, clients and our team get things done.
            </p>
          </Reveal>
        </div>
        <PhotoReel photos={academyGallery} />
      </section>

      {/* ============ SERVICES ============ */}
      <section id="services" className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-[82rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <Reveal>
              <Eyebrow>What we do</Eyebrow>
              <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-2xl">
                Six ways we make <span className="serif">life easier</span>.
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper-2)] px-5 h-11 text-sm font-medium hover:border-[var(--mm-ink)]"
              >
                See every service <Arrow />
              </Link>
            </Reveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={(i % 3) * 80}>
                <a
                  href={waLink(`Hello Metricmind Concepts, I'd like to enquire about ${service.title}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${service.title} on WhatsApp`}
                  className="group flex h-full flex-col rounded-3xl border border-[var(--mm-line)] bg-[var(--mm-paper-2)] p-3 hover:border-[var(--mm-ink)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                    <Image
                      src={service.imageUrl}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-500"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-[var(--mm-paper-2)]/95 px-3 py-1 text-xs font-medium">
                      {serviceTags[i]}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-4 pt-5">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold tracking-[-0.02em] leading-snug">{service.title}</h3>
                      <span className="serif text-2xl text-(--mm-muted)">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    <p className="mt-2 text-[15px] text-(--mm-muted)">{service.description}</p>
                    <ul className="mt-4 space-y-1.5 text-sm text-(--mm-ink-2)">
                      {service.services.slice(0, 3).map((s) => (
                        <li key={s} className="flex gap-2">
                          <span className="mt-[7px] w-1 h-1 rounded-full bg-[var(--mm-green)] shrink-0" />
                          {s}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium">
                      Enquire on WhatsApp
                      <span className="w-7 h-7 rounded-full bg-[var(--mm-ink)] text-white flex items-center justify-center group-hover:bg-[var(--mm-lime)] group-hover:text-[var(--mm-ink)] transition-colors">
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ACADEMY ============ */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Reveal className="max-w-[82rem] mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--mm-lime)] p-8 md:p-14">
            <CircuitTraces className="absolute right-0 bottom-0 w-[480px] max-w-[80vw] text-[var(--mm-ink)] opacity-10" />
            <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 items-center">
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--mm-ink)]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-ink)]" />
                  New · {academy.name}
                </p>
                <h2 className="mt-4 text-4xl md:text-6xl font-semibold tracking-[-0.04em] leading-[0.95]">
                  Learn. <span className="serif">Build.</span> Innovate.
                </h2>
                <p className="mt-5 text-lg text-[var(--mm-ink)]/75 max-w-md">{academy.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium">
                  {academy.benefits.map((b) => (
                    <a
                      key={b.title}
                      href={waLink(`Hello Metricmind Academy, I'd like to know more about your ${b.title.toLowerCase()}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline"
                    >
                      <Check className="w-4 h-4" /> {b.title}
                    </a>
                  ))}
                </div>
                <Link
                  href="/academy"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--mm-ink)] text-white px-6 h-12 font-medium hover:bg-[var(--mm-ink-2)]"
                >
                  Explore {academy.courses.length} courses <Arrow />
                </Link>
              </div>
              <div>
                <Slideshow
                  photos={[photos.lecture, photos.studentsSmile, photos.kidsDemo, photos.studentBoard, photos.cohort]}
                  sizes="(min-width: 1024px) 460px, 100vw"
                  className="aspect-[4/3] rounded-3xl bg-(--mm-ink) border-4 border-(--mm-ink)"
                  caption={<span className="text-sm font-medium">Hands-on classes at {academy.name}</span>}
                />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {academy.courses.map((c) => (
                    <li key={c.title}>
                      <Link
                        href="/academy#courses"
                        className="inline-flex items-center rounded-full bg-(--mm-paper-2)/90 hover:bg-(--mm-ink) hover:text-white px-3.5 h-9 text-[13px] font-medium"
                      >
                        {c.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ NYSC ============ */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Reveal className="max-w-[82rem] mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--mm-ink)] text-white p-8 md:p-14">
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[var(--mm-lime)]/15 blur-3xl" aria-hidden />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <Eyebrow dark>For corps members</Eyebrow>
                <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
                  NYSC wahala? <span className="serif text-[var(--mm-lime)]">Sorted.</span>
                </h2>
                <p className="mt-5 text-white/65 text-lg max-w-md">
                  Registration, corrections, redeployment and document uploads, handled by people who do it every day.
                </p>
                <Link
                  href="/nysc"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--mm-lime)] text-[var(--mm-ink)] px-6 h-12 font-medium hover:bg-white"
                >
                  View NYSC services <Arrow />
                </Link>
              </div>
              <ul className="grid sm:grid-cols-2 gap-3">
                {nyscServices.map((s) => (
                  <li key={s} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-[15px] text-white/85">
                    <Check className="w-4 h-4 mt-1 shrink-0 text-[var(--mm-lime)]" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ HOW IT WORKS ============ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-[82rem] mx-auto">
          <Reveal>
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em] max-w-2xl">
              Three steps. <span className="serif">No stress.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-5">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div className="h-full rounded-3xl border border-[var(--mm-line)] p-7">
                  <span className="inline-flex w-11 h-11 items-center justify-center rounded-full bg-[var(--mm-lime)] font-semibold">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-[-0.02em]">{step.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-[var(--mm-muted)]">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ WHY US + CAC ============ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-[var(--mm-paper-2)] border-y border-[var(--mm-line)]">
        <div className="max-w-[82rem] mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <Eyebrow>Why Metricmind</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
              Bringing technology <span className="serif text-[var(--mm-magenta)]">closer</span> to you.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--mm-muted)]">
              We&apos;re a registered IT and digital solutions company in Aba, serving individuals, students,
              startups and organisations with skill, speed and honesty.
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-3">
              {whyChooseUs.map((item) => (
                <li key={item} className="flex items-start gap-3 rounded-2xl bg-[var(--mm-paper)] p-4 text-[15px] font-medium">
                  <span className="w-6 h-6 rounded-full bg-[var(--mm-ink)] text-[var(--mm-lime)] flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4 decoration-[var(--mm-green)] decoration-2 hover:decoration-[var(--mm-ink)]">
              More about us <Arrow />
            </Link>
          </Reveal>

          <Reveal delay={120}>
            {/* Credentials: CAC (portrait) with SCUML (landscape) overlapping */}
            <figure className="relative mx-auto max-w-md pb-24 sm:pb-28">
              <div className="absolute -inset-4 rounded-[2rem] border border-dashed border-(--mm-green)/60" aria-hidden />
              <Image
                src={cacImage}
                alt="CAC Certificate of Incorporation for Metricmind Digital Concepts Ltd, Company Registration No. RC 9193173"
                className="relative w-[68%] h-auto rounded-2xl shadow-[0_30px_60px_-25px_rgba(0,0,0,0.35)] -rotate-[2deg]"
                sizes="(min-width: 1024px) 300px, 65vw"
              />
              <Image
                src={photos.scuml.src}
                alt={photos.scuml.alt}
                placeholder="blur"
                className="absolute right-0 bottom-0 w-[72%] h-auto rounded-2xl border-4 border-(--mm-paper-2) shadow-[0_30px_60px_-20px_rgba(0,0,0,0.45)] rotate-[2.5deg]"
                sizes="(min-width: 1024px) 320px, 70vw"
              />
              <figcaption className="absolute -top-4 right-2 sm:-right-6 flex flex-col gap-1.5">
                <span className="rounded-full bg-(--mm-ink) text-white px-4 py-2 text-sm shadow-lg">
                  <span className="text-(--mm-lime)">●</span> {credentials.cac.label} · {credentials.cac.number}
                </span>
                <span className="self-end rounded-full bg-(--mm-lime) text-(--mm-ink) px-4 py-2 text-sm font-medium shadow-lg">
                  {credentials.scuml.label}
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-[82rem] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-16">
          <Reveal>
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-semibold tracking-[-0.03em]">
              Questions? <span className="serif">Answered.</span>
            </h2>
            <p className="mt-5 text-[var(--mm-muted)]">
              Can&apos;t find yours? Send us a message and we&apos;ll reply quickly.
            </p>
          </Reveal>
          <div className="divide-y divide-[var(--mm-line)] border-y border-[var(--mm-line)]">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <details className="group py-5">
                  <summary className="flex items-center justify-between gap-6 text-lg font-medium">
                    {f.q}
                    <span className="mm-plus w-8 h-8 shrink-0 rounded-full border border-[var(--mm-line)] flex items-center justify-center text-xl leading-none transition-transform duration-300 group-open:bg-[var(--mm-lime)] group-open:border-transparent">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 pr-12 text-[15px] leading-relaxed text-[var(--mm-muted)]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 md:pb-28">
        <Reveal className="max-w-[82rem] mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--mm-ink)] text-white px-6 py-14 md:p-16 text-center">
            <svg className="pointer-events-none absolute left-0 bottom-0 w-[420px] max-w-[80vw] text-[var(--mm-lime)] opacity-20" viewBox="0 0 420 200" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M0 160h120l40-40h100l30 30h130" />
              <path d="M0 110h80l30-30h170" />
              <circle cx="280" cy="80" r="6" />
              <circle cx="290" cy="150" r="6" fill="currentColor" />
            </svg>
            <div className="relative">
              <h2 className="text-4xl md:text-6xl font-semibold tracking-[-0.035em] text-balance">
                Let&apos;s get it <span className="serif text-[var(--mm-lime)]">done</span>, today.
              </h2>
              <p className="mt-5 text-white/65 text-lg max-w-xl mx-auto">
                Tell us what you need. We&apos;ll tell you exactly what it takes.
              </p>
              <div className="mt-9 flex justify-center">
                <ContactButtons dark />
              </div>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8 text-sm text-white/60">
                <a href={`mailto:${EMAIL}`} className="hover:text-white">{EMAIL}</a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                <a href={MAPS} target="_blank" rel="noopener noreferrer" className="hover:text-white">
                  Get directions in Aba
                </a>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-white/30" />
                <Link href="/contact" className="hover:text-white">Send a message</Link>
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

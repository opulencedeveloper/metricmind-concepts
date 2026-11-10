import Link from "next/link";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import Reveal from "../components/Reveal";
import { Arrow, Check, CircuitTraces, ContactButtons, Eyebrow, WhatsAppIcon, waLink } from "../components/mm";
import { mmFonts } from "../lib/fonts";
import { academy } from "../data/content";
import Image from "next/image";
import Slideshow from "../components/Slideshow";
import PhotoReel from "../components/PhotoReel";
import { photos, academyGallery } from "../data/media";

// Background photo for each "Why choose us" card (same order as academy.benefits)
const benefitPhotos = [photos.oneOnOne, photos.deskPortrait, photos.teamStreet, photos.capHelping];

const enrolLink = (course?: string) =>
  waLink(
    course
      ? `Hello Metricmind Academy, I'd like to enrol in the ${course} course.`
      : "Hello Metricmind Academy, I'd like to know more about your courses."
  );

export default function AcademyPage() {
  const [learn, build, innovate] = academy.slogan.replace(/\./g, "").split(" ");

  return (
    <main className={`mm ${mmFonts} min-h-screen overflow-x-hidden`} itemScope itemType="https://schema.org/EducationalOrganization">
      <meta itemProp="name" content={academy.name} />
      <meta itemProp="description" content={academy.tagline} />
      <Navigation />

      {/* ============ HERO ============ */}
      <section className="relative px-4 md:px-12 pt-28 md:pt-40 pb-12 md:pb-16">
        <CircuitTraces className="absolute right-0 top-24 w-[520px] max-w-[70vw] text-[var(--mm-green)] opacity-25" />
        <div className="relative max-w-[77.5rem] mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-14 items-center">
          <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper-2)] px-4 h-8 text-[13px] text-[var(--mm-ink-2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--mm-green)] mm-pulse" /> {academy.name} · Enrolment open
            </div>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 text-[52px] sm:text-[80px] lg:text-[96px] font-semibold leading-[0.9] tracking-[-0.05em]">
              {learn}. <span className="serif text-[var(--mm-magenta)]">{build}.</span>
              <br />
              {innovate}.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg md:text-xl leading-relaxed text-[var(--mm-muted)]">{academy.tagline}</p>
          </Reveal>
          <Reveal delay={240} className="mt-9 flex flex-col sm:flex-row gap-3">
            <a
              href={enrolLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--mm-ink)] text-white px-6 h-12 text-[15px] font-medium hover:bg-[var(--mm-ink-2)]"
            >
              <WhatsAppIcon className="w-[18px] h-[18px]" /> Enrol on WhatsApp
            </a>
            <a
              href="#courses"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--mm-line)] bg-[var(--mm-paper-2)] px-6 h-12 text-[15px] font-medium hover:border-[var(--mm-ink)]"
            >
              View {academy.courses.length} courses <Arrow />
            </a>
          </Reveal>
          </div>

          <Reveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-3 rounded-4xl bg-(--mm-lime) rotate-[2deg]" aria-hidden />
              <Slideshow
                photos={[photos.whiteboard, photos.kidsLaptop, photos.studentsSmile, photos.mentorBack, photos.studentBoard]}
                priority
                sizes="(min-width: 1024px) 520px, 100vw"
                className="relative aspect-[4/3] lg:aspect-[5/6] rounded-[1.75rem] bg-(--mm-ink) shadow-[0_30px_60px_-20px_rgba(0,0,0,0.35)]"
                caption={<span className="text-sm font-medium">Real classes · Real projects</span>}
              />
              <div className="absolute -left-3 sm:-left-6 -bottom-6 rounded-3xl bg-(--mm-ink) text-white px-5 py-4 shadow-[0_25px_50px_-20px_rgba(0,0,0,0.6)]">
                <p className="text-3xl font-semibold tracking-[-0.04em]">{academy.courses.length}</p>
                <p className="text-xs text-white/60">in-demand courses</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ COURSE MARQUEE ============ */}
      <section aria-label="Courses" className="border-y border-[var(--mm-line)] bg-[var(--mm-ink)] text-white py-5 overflow-hidden">
        <div className="mm-marquee flex w-max gap-10 whitespace-nowrap">
          {[...academy.courses, ...academy.courses].map((c, i) => (
            <span key={i} className="flex items-center gap-10 text-lg md:text-xl font-medium" aria-hidden={i >= academy.courses.length}>
              {c.title}
              <span className="text-[var(--mm-lime)]">✳</span>
            </span>
          ))}
        </div>
      </section>

      {/* ============ COURSES ============ */}
      <section id="courses" className="scroll-mt-24 px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[77.5rem] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <Reveal>
              <Eyebrow>Course outline</Eyebrow>
              <h2 className="mt-4 text-[32px] md:text-[48px] font-semibold leading-[1.02] tracking-[-0.04em] max-w-2xl">
                {academy.courses.length} courses. <span className="serif">One career</span> in tech.
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="max-w-sm text-[var(--mm-muted)]">
                Start from zero with Computer Basics, or jump straight into a specialist track.
              </p>
            </Reveal>
          </div>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {academy.courses.map((c, i) => (
              <Reveal key={c.title} delay={(i % 3) * 70}>
                <a
                  href={enrolLink(c.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-10 rounded-[2rem] border border-[var(--mm-line)] bg-[var(--mm-paper-2)] p-7 hover:bg-[var(--mm-ink)] hover:text-white hover:border-transparent transition-colors duration-300"
                >
                  <span className="flex items-center justify-between">
                    <span className="serif text-3xl text-[var(--mm-muted)] group-hover:text-[var(--mm-lime)]">{String(i + 1).padStart(2, "0")}</span>
                    <span className="w-9 h-9 rounded-full bg-[var(--mm-paper)] text-[var(--mm-ink)] flex items-center justify-center group-hover:bg-[var(--mm-lime)] group-hover:rotate-45 transition-all duration-300">
                      <Arrow className="w-4 h-4" />
                    </span>
                  </span>
                  <span>
                    <span className="block text-2xl font-semibold tracking-[-0.03em] leading-tight">{c.title}</span>
                    <span className="mt-2 block text-sm leading-relaxed text-[var(--mm-muted)] group-hover:text-white/65">{c.blurb}</span>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--mm-ink)] group-hover:text-[var(--mm-lime)]">
                      Enrol in this course
                    </span>
                  </span>
                </a>
              </Reveal>
            ))}
            <Reveal delay={140}>
              <a
                href={enrolLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full flex-col justify-between gap-10 rounded-[2rem] bg-[var(--mm-lime)] p-7 hover:bg-[var(--mm-ink)] hover:text-white transition-colors duration-300"
              >
                <span className="w-10 h-10 rounded-full bg-[var(--mm-ink)] text-[var(--mm-lime)] flex items-center justify-center">
                  <WhatsAppIcon className="w-5 h-5" />
                </span>
                <span className="text-2xl font-semibold tracking-[-0.03em] leading-tight">
                  Not sure where to start? <span className="serif">Ask us.</span>
                </span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ============ WHY CHOOSE US ============ */}
      <section className="px-4 md:px-12 py-8 md:py-12">
        <Reveal className="max-w-[77.5rem] mx-auto">
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--mm-ink)] text-white p-8 md:p-14">
            <div className="absolute -right-24 -top-24 w-80 h-80 rounded-full bg-[var(--mm-lime)]/15 blur-3xl" aria-hidden />
            <div className="relative">
              <Eyebrow dark>Why choose us</Eyebrow>
              <h2 className="mt-4 text-[32px] md:text-[48px] font-semibold leading-[1.02] tracking-[-0.04em] max-w-2xl">
                Learning that <span className="serif text-[var(--mm-lime)]">actually</span> gets you hired.
              </h2>
              <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {academy.benefits.map((b, i) => (
                  <a
                    key={b.title}
                    href={waLink(`Hello Metricmind Academy, I'd like to know more about your ${b.title.toLowerCase()}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ask about ${b.title} on WhatsApp`}
                    className="group relative isolate flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-white/10 p-6 hover:border-(--mm-lime)/60 hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* photo background */}
                    <Image
                      src={benefitPhotos[i].src}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                      placeholder="blur"
                      className="-z-10 object-cover scale-100 group-hover:scale-[1.06] transition-transform duration-700"
                    />
                    <span className="absolute inset-0 -z-10 bg-gradient-to-t from-(--mm-ink) via-(--mm-ink)/80 to-(--mm-ink)/25" aria-hidden />

                    <span className="w-9 h-9 rounded-full bg-(--mm-lime) text-(--mm-ink) flex items-center justify-center">
                      <Check className="w-4 h-4" />
                    </span>
                    <div className="mt-auto">
                      <h3 className="text-xl font-semibold tracking-[-0.02em]">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/75">{b.body}</p>
                      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-(--mm-lime)">
                        <WhatsAppIcon className="w-4 h-4" /> Ask on WhatsApp
                        <Arrow className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ============ HOW TO ENROL ============ */}
      <section className="px-4 md:px-12 py-16 md:py-24">
        <div className="max-w-[77.5rem] mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-10 lg:gap-20">
          <Reveal className="lg:sticky lg:top-28 self-start">
            <Eyebrow>How to enrol</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
              From curious to <span className="serif">certified.</span>
            </h2>
          </Reveal>
          <ol className="border-t border-[var(--mm-line)]">
            {[
              { t: "Pick a course", b: "Choose a track above, or tell us your goals and we'll recommend one." },
              { t: "Message us to enrol", b: "Reach us on WhatsApp or by phone for schedules, fees and next steps." },
              { t: "Learn hands-on", b: "Work through practical lessons and projects with expert guidance." },
              { t: "Get certified & mentored", b: "Earn your certificate of completion and get career mentorship." },
            ].map((s, i) => (
              <Reveal key={s.t} delay={i * 70}>
                <li className="grid grid-cols-[auto_1fr] gap-6 border-b border-[var(--mm-line)] py-7">
                  <span className="w-12 h-12 rounded-full bg-[var(--mm-lime)] flex items-center justify-center font-semibold text-lg">{i + 1}</span>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold tracking-[-0.03em]">{s.t}</h3>
                    <p className="mt-2 text-[15px] md:text-base leading-relaxed text-[var(--mm-muted)]">{s.b}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ============ GALLERY: inside the classroom ============ */}
      <section aria-label="Inside the classroom" className="pb-16 md:pb-24">
        <div className="max-w-[77.5rem] mx-auto px-4 md:px-12 mb-8">
          <Reveal>
            <Eyebrow>Inside the classroom</Eyebrow>
            <h2 className="mt-4 text-[32px] md:text-[44px] font-semibold leading-[1.05] tracking-[-0.04em]">
              Where skills <span className="serif">come to life.</span>
            </h2>
          </Reveal>
        </div>
        <PhotoReel photos={academyGallery} />
        <div className="mt-4">
          <PhotoReel photos={[...academyGallery].reverse()} reverse />
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="px-4 md:px-12 pb-20 md:pb-28">
        <Reveal className="max-w-[77.5rem] mx-auto">
          <div className="relative isolate overflow-hidden rounded-[2rem] bg-(--mm-ink) text-white px-6 py-16 md:p-20 text-center">
            <Image
              src={photos.storefront.src}
              alt=""
              fill
              sizes="(min-width: 1280px) 1240px, 100vw"
              placeholder="blur"
              className="-z-10 object-cover"
            />
            <span className="absolute inset-0 -z-10 bg-(--mm-ink)/80" aria-hidden />
            <CircuitTraces className="absolute left-0 bottom-0 w-[460px] max-w-[80vw] text-[var(--mm-lime)] opacity-15" />
            <div className="relative">
              <h2 className="text-[36px] md:text-[64px] font-semibold leading-[1] tracking-[-0.045em] text-balance">
                Your tech career <span className="serif text-[var(--mm-lime)]">starts here.</span>
              </h2>
              <p className="mt-5 text-white/65 text-lg max-w-xl mx-auto">{academy.tagline}</p>
              <div className="mt-9 flex justify-center">
                <ContactButtons dark />
              </div>
              <p className="mt-8 text-sm text-white/50">
                Looking for other services? <Link href="/services" className="text-white underline underline-offset-4">See everything we do</Link>.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

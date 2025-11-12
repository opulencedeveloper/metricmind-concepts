"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import ServiceCard from "./components/ServiceCard";
import BackToTop from "./components/BackToTop";
import ScrollReveal from "./components/ScrollReveal";
import GSAPAnimations from "./components/GSAPAnimations";
import logo from "@/assets/logo/metricmind-logo.jpg";
import cacImage from "@/assets/images/METRICMIND-CONCEPTS-CAC.jpg";

const services = [
  {
    icon: "🖥️",
    title: "Computer & IT Solutions",
    description: "Empowering your digital world with reliable IT services.",
    imageUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    services: [
      "General Computer Services & Maintenance",
      "Networking & System Setup",
      "Data Backup and Recovery",
      "Professional Email & Domain Setup",
      "IT Consultation and Digital Support",
    ],
  },
  {
    icon: "🏛️",
    title: "CAC & Business Support",
    description: "Start, grow, and manage your business with ease.",
    imageUrl: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    services: [
      "Pre-Incorporation and Post-Incorporation Services",
      "Business Name Registration & Upgrades",
      "Annual Returns Filing",
      "TIN (Tax Identification Number) Processing",
      "Business Branding & Consultancy",
    ],
  },
  {
    icon: "🎓",
    title: "Computer Training & Digital Skills",
    description: "Learn the skills that power today's digital world.",
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    services: [
      "Computer Application Packages (MS Word, Excel, PowerPoint, CorelDraw, etc.)",
      "Programming Classes (HTML, Python, Java, etc.)",
      "Graphics Design & Animation",
      "Product & UI/UX Design",
      "Private & Group Training Sessions",
    ],
  },
  {
    icon: "🌐",
    title: "Online Applications & Digital Services",
    description: "Simplifying global access and online processes.",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    services: [
      "National & International Job Applications",
      "International School Admissions & Visa Assistance",
      "American DS-160 Visa Form Filling",
      "Appointment Booking & Documentation",
      "Flight & Hotel Reservations",
      "JAMB and Post-UTME Registrations",
      "Scholarship & Internship Applications",
      "Professional Email & Account Creation",
    ],
  },
  {
    icon: "🎨",
    title: "Graphics Design & Printing",
    description: "Creativity that makes your brand stand out.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    services: [
      "Flex & Banner Design and Printing",
      "Premium Business/Complementary Cards",
      "Letterhead, Brochure & Flyer Design",
      "Logo & Brand Identity Design",
      "Professional CV/Resume (Local & International Formats)",
      "Scanning, Photocopying & Document Editing",
      "Invitation Cards & Custom Print Media",
    ],
  },
  {
    icon: "💡",
    title: "Additional Services",
    description: "Expanding our reach to serve you better.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    services: [
      "Website Design & Development",
      "Social Media Management & Digital Marketing",
      "Branding & Rebranding Consultation",
      "Online Form Filling & Document Upload",
      "Tech Support for Small Businesses",
    ],
  },
];

const whyChooseUs = [
  "Experienced & Skilled Professionals",
  "Fast, Reliable & Affordable Services",
  "100% Customer Satisfaction",
  "Innovative Solutions Tailored to Your Needs",
];

const nyscServices = [
  "NYSC Online Registration & Redeployment",
  "Biometric (Fingerprint) Capturing",
  "Correction of Names, Course, and Date of Birth",
  "Printing of Green Card and Call-Up Letter",
  "Uploading & Verification of Documents",
  "PPA (Place of Primary Assignment) Support Services",
  "NYSC Remobilization and Revalidation Assistance",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Metricmind Concepts - Premium IT & Digital Solutions" />
      <meta itemProp="description" content="Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Expert computer training, CAC services, graphics design, and comprehensive digital solutions." />
      <GSAPAnimations />
      <Navigation />
      <Hero />

      {/* About Us Section */}
      <section id="about" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden" itemScope itemType="https://schema.org/AboutPage">
        <div className="absolute inset-0 opacity-5">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
            alt="Metricmind Concepts professional business team providing IT solutions and digital services in Aba, Nigeria"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <header className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                itemProp="headline"
              >
                About Us
              </motion.h2>
              <motion.div
                className="w-24 h-0.5 bg-[#1428a0] mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto font-light mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                We are a trusted IT and digital solutions company based in Aba, Abia State, Nigeria.
              </motion.p>
            </header>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <motion.h3
                  className="text-3xl font-semibold text-gray-900"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Welcome to Metricmind Concepts
                </motion.h3>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  At Metricmind Concepts, we bring technology closer to you. We are a trusted IT and digital solutions company based in Aba, Abia State, Nigeria, committed to helping individuals, startups, and organizations thrive in the digital world.
                </motion.p>
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  From computer training to corporate branding and global applications, we combine innovation, skill, and professionalism to deliver exceptional results.
                </motion.p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <motion.div
                className="glass-card rounded-3xl p-8 shadow-xl overflow-hidden"
                whileHover={{ scale: 1.02, rotateY: 2 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Image
                  src={cacImage}
                  alt="CAC Certificate - Metricmind Concepts registered business in Aba, Nigeria"
                  width={600}
                  height={400}
                  className="rounded-2xl w-full h-auto shadow-md"
                  loading="lazy"
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50" itemScope itemType="https://schema.org/Service">
        <meta itemProp="provider" content="Metricmind Concepts" />
        <meta itemProp="areaServed" content="Aba, Abia State, Nigeria" />
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Services
              </motion.h2>
              <motion.div
                className="w-24 h-0.5 bg-[#1428a0] mx-auto mb-4"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.p
                className="text-xl text-gray-600 max-w-2xl mx-auto font-light"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Comprehensive digital solutions tailored to your needs
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1428a0] to-[#1a1a1a] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80"
            alt="Professional excellence"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <motion.h2
                className="text-4xl md:text-5xl font-light mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Why Choose Metricmind Concepts?
              </motion.h2>
              <motion.div
                className="w-24 h-0.5 bg-white mx-auto"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} direction="scale" delay={index * 0.1}>
                <motion.div
                  className="glass-dark rounded-2xl p-8 text-center border border-white/20 hover:bg-white/20 transition-all duration-500"
                  whileHover={{ y: -12, scale: 1.05, rotateY: 5 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="text-3xl mb-4"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    ✓
                  </motion.div>
                  <p className="text-lg font-medium">{item}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* NYSC Services Section */}
      <section id="nysc" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              NYSC Services
            </h2>
            <div className="w-24 h-0.5 bg-[#1428a0] mx-auto mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Reliable assistance for all your NYSC registration and verification needs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-6">
              {nyscServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start space-x-4"
                >
                  <span className="text-[#1428a0] text-xl mt-1">✓</span>
                  <span className="text-gray-700 text-base">{service}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-[#1a1a1a] text-white overflow-hidden" itemScope itemType="https://schema.org/ContactPage">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
            alt="Contact Metricmind Concepts - IT solutions and digital services in Aba, Nigeria"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-[#1a1a1a]/90"></div>
        <div className="relative max-w-7xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light mb-4" itemProp="headline">Get In Touch</h2>
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
          </motion.header>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <motion.div
                className="glass-dark rounded-3xl p-8 border border-white/20 h-full"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
              <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-gray-300 leading-relaxed">
                      No. 7 Omuma Road, By Amaogbonna, Off Osusu Road,<br />
                      Aba, Abia State, Nigeria
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📞</span>
                  <div>
                    <p className="font-semibold mb-1">Phone</p>
                    <a href="tel:+2348102592057" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +234 810 259 2057
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a href="mailto:metricmindconcepts@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors block mb-1">
                      metricmindconcepts@gmail.com
                    </a>
                    <a href="mailto:contacts@metricmind.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                      contacts@metricmind.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="font-semibold mb-1">Social Media</p>
                    <p className="text-gray-300">@MetricmindConcepts</p>
                  </div>
                </div>
              </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3} className="h-full">
              <motion.div
                className="glass-dark rounded-3xl p-8 border border-white/20 h-full"
                whileHover={{ scale: 1.02, x: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold mb-8">Send us a Message</h3>
                <form className="space-y-6" action="#" method="POST">
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/15 transition-all"
                      aria-label="Your Name"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/15 transition-all"
                      aria-label="Your Email"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      rows={5}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50 focus:bg-white/15 transition-all resize-none"
                      aria-label="Your Message"
                    ></textarea>
                  </motion.div>
                  <motion.button
                    type="submit"
                    className="w-full px-8 py-4 bg-[#1428a0] text-white rounded-lg font-semibold hover:bg-[#1e3fd4] transition-colors shadow-lg relative overflow-hidden group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Send Message</span>
                    <motion.span
                      className="absolute inset-0 bg-gradient-to-r from-[#1e3fd4] to-[#2563eb]"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                </form>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800" itemScope itemType="https://schema.org/WPFooter">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-3">
              <Image
                src={logo}
                alt="Metricmind Concepts Logo - IT Solutions and Digital Services in Aba, Nigeria"
                width={40}
                height={40}
                className="rounded-lg object-cover"
                loading="lazy"
              />
              <span className="text-xl font-semibold text-white">Metricmind Concepts</span>
            </div>
            <p className="text-sm text-center md:text-right">
              Bringing Technology Closer to You
            </p>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Metricmind Concepts. All rights reserved.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Designed and Developed by{" "}
              <a
                href="https://opulencedeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline"
              >
                OpulenceDeveloper.com
              </a>
            </p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </main>
  );
}

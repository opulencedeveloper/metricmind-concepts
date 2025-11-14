"use client";

import { motion } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import GSAPAnimations from "./components/GSAPAnimations";
import Image from "next/image";
import { whyChooseUs } from "./data/content";

export default function Home() {
  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/WebPage">
      <meta itemProp="name" content="Metricmind Concepts - Premium IT & Digital Solutions" />
      <meta itemProp="description" content="Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Expert computer training, CAC services, graphics design, and comprehensive digital solutions." />
      <GSAPAnimations />
      <Navigation />
      <Hero />

      {/* Why Choose Us Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16 md:mb-20">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-900 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Why Choose Metricmind Concepts?
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Trusted expertise, innovative solutions, and unwavering commitment to your success
              </motion.p>
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-[#1e40af] to-[#2563eb] mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <motion.div
                  className="group relative bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-[#1e40af]/20 transition-all duration-300 shadow-sm hover:shadow-lg"
                  whileHover={{ y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative">
                    <motion.div
                      className="w-12 h-12 rounded-lg bg-[#1e40af]/10 flex items-center justify-center mb-4 group-hover:bg-[#1e40af] transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <svg className="w-6 h-6 text-[#1e40af] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <p className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#1e40af] transition-colors duration-300">
                      {item}
                    </p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}

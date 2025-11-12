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

      <Footer />
      <BackToTop />
    </main>
  );
}

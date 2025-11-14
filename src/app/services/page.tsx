"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import ServiceCard from "../components/ServiceCard";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import GSAPAnimations from "../components/GSAPAnimations";
import { services } from "../data/content";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/Service">
      <meta itemProp="provider" content="Metricmind Concepts" />
      <meta itemProp="areaServed" content="Aba, Abia State, Nigeria" />
      <GSAPAnimations />
      <Navigation />

      {/* Services Section */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16 md:mb-20">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Our Services
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive digital solutions tailored to your needs
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}


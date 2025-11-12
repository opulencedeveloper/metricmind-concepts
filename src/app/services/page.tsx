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
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <motion.h1
                className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                Our Services
              </motion.h1>
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

      <Footer />
      <BackToTop />
    </main>
  );
}


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import GSAPAnimations from "../components/GSAPAnimations";
import cacImage from "@/assets/images/METRICMIND-CONCEPTS-CAC.jpg";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/AboutPage">
      <GSAPAnimations />
      <Navigation />

      {/* About Us Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-gray-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <header className="text-center mb-16 md:mb-20">
              <motion.h1
                className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                itemProp="headline"
              >
                About Us
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                We are a trusted IT and digital solutions company based in Aba, Abia State, Nigeria.
              </motion.p>
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-[#1e40af] to-[#2563eb] mx-auto rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </header>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
                <motion.h2
                  className="text-2xl md:text-3xl font-semibold text-gray-900"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Welcome to Metricmind Concepts
                </motion.h2>
                <motion.p
                  className="text-base md:text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  At Metricmind Concepts, we bring technology closer to you. We are a trusted IT and digital solutions company based in Aba, Abia State, Nigeria, committed to helping individuals, startups, and organizations thrive in the digital world.
                </motion.p>
                <motion.p
                  className="text-base md:text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  From computer training to corporate branding and global applications, we combine innovation, skill, and professionalism to deliver exceptional results.
                </motion.p>
                <motion.p
                  className="text-base md:text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  Our team of experienced professionals is dedicated to providing fast, reliable, and affordable services that meet your unique needs. We pride ourselves on delivering 100% customer satisfaction and innovative solutions tailored to help you succeed.
                </motion.p>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <motion.div
                className="relative bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-200 overflow-hidden group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Image
                  src={cacImage}
                  alt="CAC Certificate - Metricmind Concepts registered business in Aba, Nigeria"
                  width={600}
                  height={400}
                  className="rounded-lg w-full h-auto shadow-sm group-hover:shadow-md transition-shadow duration-300 relative z-10"
                  loading="lazy"
                />
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </main>
  );
}


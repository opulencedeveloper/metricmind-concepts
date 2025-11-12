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
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
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
              <motion.h1
                className="text-4xl md:text-5xl font-light text-gray-900 mb-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                itemProp="headline"
              >
                About Us
              </motion.h1>
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
                <motion.h2
                  className="text-3xl font-semibold text-gray-900"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  Welcome to Metricmind Concepts
                </motion.h2>
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
                <motion.p
                  className="text-lg text-gray-600 leading-relaxed font-light"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  Our team of experienced professionals is dedicated to providing fast, reliable, and affordable services that meet your unique needs. We pride ourselves on delivering 100% customer satisfaction and innovative solutions tailored to help you succeed.
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

      <Footer />
      <BackToTop />
    </main>
  );
}


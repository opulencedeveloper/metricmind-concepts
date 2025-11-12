"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import GSAPAnimations from "../components/GSAPAnimations";
import { contactInfo } from "../data/content";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/ContactPage">
      <GSAPAnimations />
      <Navigation />

      {/* Contact Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-[#1a1a1a] text-white overflow-hidden">
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
            <h1 className="text-4xl md:text-5xl font-light mb-4" itemProp="headline">Get In Touch</h1>
            <div className="w-24 h-0.5 bg-white mx-auto"></div>
          </motion.header>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <motion.div
                className="glass-dark rounded-3xl p-8 border border-white/20 h-full"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold mb-1">Address</p>
                      <p className="text-gray-300 leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold mb-1">Phone</p>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-semibold mb-1">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-blue-400 hover:text-blue-300 transition-colors block mb-1">
                        {contactInfo.email}
                      </a>
                      <a href={`mailto:${contactInfo.email2}`} className="text-blue-400 hover:text-blue-300 transition-colors">
                        {contactInfo.email2}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <span className="text-2xl">💬</span>
                    <div>
                      <p className="font-semibold mb-1">Social Media</p>
                      <p className="text-gray-300">{contactInfo.social}</p>
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
                <h2 className="text-2xl font-semibold mb-8">Send us a Message</h2>
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

      <Footer />
      <BackToTop />
    </main>
  );
}


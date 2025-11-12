"use client";

import { motion } from "framer-motion";
import Navigation from "../components/Navigation";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import GSAPAnimations from "../components/GSAPAnimations";
import { nyscServices } from "../data/content";

export default function NYSCPage() {
  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/Service">
      <GSAPAnimations />
      <Navigation />

      {/* NYSC Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              NYSC Services
            </h1>
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

      <Footer />
      <BackToTop />
    </main>
  );
}


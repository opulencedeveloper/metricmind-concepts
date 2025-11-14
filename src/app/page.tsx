"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import GSAPAnimations from "./components/GSAPAnimations";
import ServiceCard from "./components/ServiceCard";
import { Floating3DShapes, Card3D, Text3D, GlowingOrb3D, RotatingCube } from "./components/ThreeDEffects";
import Image from "next/image";
import Link from "next/link";
import { whyChooseUs, services } from "./data/content";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <main ref={containerRef} className="min-h-screen bg-white relative overflow-hidden" itemScope itemType="https://schema.org/WebPage" style={{ perspective: "1000px" }}>
      <meta itemProp="name" content="Metricmind Concepts - Premium IT & Digital Solutions" />
      <meta itemProp="description" content="Trusted IT and digital solutions company in Aba, Abia State, Nigeria. Expert computer training, CAC services, graphics design, and comprehensive digital solutions." />
      
      {/* 3D Background Effects */}
      <motion.div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{ y: backgroundY, opacity }}
      >
        <Floating3DShapes />
      </motion.div>

      <GSAPAnimations />
      <Navigation />
      <Hero />

      {/* Featured Services Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden z-10">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16 md:mb-20">
              <Text3D className="inline-block">
                <motion.h2
                  className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-900 tracking-tight"
                  initial={{ opacity: 0, y: 20, rotateX: -90 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  Our Featured Services
                </motion.h2>
              </Text3D>
              <motion.p
                className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Comprehensive digital solutions tailored to meet your business and personal needs
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12" style={{ transformStyle: "preserve-3d" }}>
            {services.slice(0, 3).map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateY: -90 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <ServiceCard {...service} index={index} />
              </motion.div>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.4}>
            <div className="text-center">
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-4 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                View All Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#1e40af] via-[#2563eb] to-[#1e3a8a] overflow-hidden z-10">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05]"></div>
        {/* 3D Orb Background */}
        <div className="absolute top-1/2 right-10 -translate-y-1/2 opacity-20 hidden lg:block">
          <GlowingOrb3D />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="text-center mb-16">
              <motion.h2
                className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-white tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Trusted by Many, Delivering Excellence
              </motion.h2>
              <motion.p
                className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Our commitment to quality and customer satisfaction speaks through our numbers
              </motion.p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12" style={{ transformStyle: "preserve-3d" }}>
            {[
              { 
                value: "500+", 
                label: "Happy Clients", 
                icon: (
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                )
              },
              { 
                value: "1000+", 
                label: "Projects Completed", 
                icon: (
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              },
              { 
                value: "5+", 
                label: "Years Experience", 
                icon: (
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                )
              },
              { 
                value: "100%", 
                label: "Satisfaction Rate", 
                icon: (
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
            ].map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card3D>
                  <motion.div
                    className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                    initial={{ opacity: 0, y: 20, rotateX: -45 }}
                    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, z: 30 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <motion.div
                      className="flex items-center justify-center mb-3"
                      whileHover={{ scale: 1.2, rotate: 360, z: 50 }}
                      transition={{ duration: 0.6 }}
                      style={{ transform: "translateZ(20px)" }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.h3
                      className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2"
                      initial={{ scale: 0, rotateX: -90 }}
                      whileInView={{ scale: 1, rotateX: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.1 + 0.2, type: "spring", stiffness: 200 }}
                      style={{ transform: "translateZ(30px)" }}
                    >
                      {stat.value}
                    </motion.h3>
                    <p className="text-blue-100 text-sm md:text-base font-medium" style={{ transform: "translateZ(10px)" }}>{stat.label}</p>
                  </motion.div>
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8" style={{ transformStyle: "preserve-3d" }}>
            {whyChooseUs.map((item, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 0.1}>
                <Card3D>
                  <motion.div
                    className="group relative bg-white rounded-xl p-6 md:p-8 border border-gray-200 hover:border-[#1e40af]/20 transition-all duration-300 shadow-sm hover:shadow-2xl"
                    initial={{ opacity: 0, y: 20, rotateY: -45 }}
                    whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, z: 40 }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative" style={{ transform: "translateZ(20px)" }}>
                      <motion.div
                        className="w-12 h-12 rounded-lg bg-[#1e40af]/10 flex items-center justify-center mb-4 group-hover:bg-[#1e40af] transition-colors duration-300"
                        whileHover={{ scale: 1.2, rotate: 360, z: 30 }}
                        transition={{ duration: 0.6 }}
                        style={{ transformStyle: "preserve-3d" }}
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
                </Card3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal direction="left" delay={0.2}>
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-semibold text-gray-900"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Bringing Technology Closer to You
                </motion.h2>
                <motion.p
                  className="text-base md:text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  At Metricmind Concepts, we are a trusted IT and digital solutions company based in Aba, Abia State, Nigeria. We combine innovation, skill, and professionalism to deliver exceptional results for individuals, startups, and organizations.
                </motion.p>
                <motion.p
                  className="text-base md:text-lg text-gray-600 leading-relaxed"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  From computer training to corporate branding and global applications, our team of experienced professionals is dedicated to providing fast, reliable, and affordable services that meet your unique needs.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    href="/about"
                    className="inline-flex items-center px-6 py-3 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Learn More About Us
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </motion.div>
              </motion.div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={0.3}>
              <motion.div
                className="relative bg-gradient-to-br from-[#1e40af]/10 to-[#0d9488]/10 rounded-2xl p-8 md:p-12 border border-gray-200"
                initial={{ opacity: 0, scale: 0.95, rotateY: 45 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Rotating Cube in background */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
                  <RotatingCube />
                </div>
                <div className="grid grid-cols-2 gap-6 relative z-10" style={{ transformStyle: "preserve-3d" }}>
                  {[
                    { icon: "🖥️", text: "IT Solutions" },
                    { icon: "🏛️", text: "CAC Services" },
                    { icon: "🎓", text: "Training" },
                    { icon: "🌐", text: "Digital Services" },
                  ].map((item, index) => (
                    <Card3D key={index}>
                      <motion.div
                        className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
                        initial={{ opacity: 0, y: 20, rotateX: -45 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 * index }}
                        whileHover={{ scale: 1.1, z: 30 }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <motion.div 
                          className="text-3xl mb-2"
                          whileHover={{ scale: 1.3, rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          style={{ transform: "translateZ(20px)" }}
                        >
                          {item.icon}
                        </motion.div>
                        <p className="text-sm font-semibold text-gray-700" style={{ transform: "translateZ(10px)" }}>{item.text}</p>
                      </motion.div>
                    </Card3D>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <ScrollReveal direction="up" delay={0.1}>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-white tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Transform Your Digital Experience?
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Let's discuss how we can help you achieve your goals with our professional IT and digital solutions.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Get in Touch
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Explore Services
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
      <BackToTop />
      </main>
  );
}

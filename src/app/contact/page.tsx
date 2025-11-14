"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import BackToTop from "../components/BackToTop";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";
import GSAPAnimations from "../components/GSAPAnimations";
import { contactInfo } from "../data/content";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message || "Your message has been sent successfully! We will get back to you soon.",
        });
        // Reset form
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Failed to send message. Please try again later.",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };
  return (
    <main className="min-h-screen bg-white" itemScope itemType="https://schema.org/ContactPage">
      <GSAPAnimations />
      <Navigation />

      {/* Contact Section */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16 md:mb-20"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-gray-900 tracking-tight" itemProp="headline">Get In Touch</h1>
            <motion.p
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </motion.p>
            <motion.div
              className="w-16 h-1 bg-gradient-to-r from-[#1e40af] to-[#2563eb] mx-auto rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 64 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.header>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <ScrollReveal direction="left" delay={0.2} className="h-full">
              <motion.div
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg h-full transition-shadow duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-8 text-gray-900">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center group-hover:bg-[#1e40af] transition-colors duration-300 flex-shrink-0">
                      <span className="text-lg">📍</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-gray-900">Address</p>
                      <p className="text-gray-600 leading-relaxed">
                        {contactInfo.address}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center group-hover:bg-[#1e40af] transition-colors duration-300 flex-shrink-0">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-gray-900">Phone</p>
                      <a href={`tel:${contactInfo.phone.replace(/\s/g, "")}`} className="text-[#1e40af] hover:text-[#2563eb] transition-colors">
                        {contactInfo.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center group-hover:bg-[#1e40af] transition-colors duration-300 flex-shrink-0">
                      <span className="text-lg">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-gray-900">Email</p>
                      <a href={`mailto:${contactInfo.email}`} className="text-[#1e40af] hover:text-[#2563eb] transition-colors block mb-1">
                        {contactInfo.email}
                      </a>
                      <a href={`mailto:${contactInfo.email2}`} className="text-[#1e40af] hover:text-[#2563eb] transition-colors">
                        {contactInfo.email2}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 group">
                    <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 flex items-center justify-center group-hover:bg-[#1e40af] transition-colors duration-300 flex-shrink-0">
                      <span className="text-lg">💬</span>
                    </div>
                    <div>
                      <p className="font-semibold mb-1 text-gray-900">Social Media</p>
                      <p className="text-gray-600">{contactInfo.social}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.3} className="h-full">
              <motion.div
                className="bg-white rounded-xl p-6 md:p-8 border border-gray-200 shadow-sm hover:shadow-lg h-full transition-shadow duration-300"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-2xl font-semibold mb-8 text-gray-900">Send us a Message</h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Your Email"
                    />
                  </motion.div>
                  <motion.div
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  >
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      required
                      disabled={isSubmitting}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1e40af]/20 focus:border-[#1e40af] transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                      aria-label="Your Message"
                    ></textarea>
                  </motion.div>

                  {/* Status Messages */}
                  <AnimatePresence>
                    {submitStatus.type && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className={`p-4 rounded-lg ${
                          submitStatus.type === "success"
                            ? "bg-green-500/20 border border-green-500/50 text-green-300"
                            : "bg-red-500/20 border border-red-500/50 text-red-300"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <span className="text-xl">
                            {submitStatus.type === "success" ? "✓" : "✕"}
                          </span>
                          <p className="text-sm">{submitStatus.message}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 bg-[#1e40af] text-white rounded-lg font-semibold hover:bg-[#2563eb] transition-colors shadow-lg relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <motion.svg
                            className="animate-spin h-5 w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </motion.svg>
                          <span>Sending...</span>
                        </>
                      ) : (
                        <span>Send Message</span>
                      )}
                    </span>
                    {!isSubmitting && (
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[#2563eb] to-[#2563eb]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
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


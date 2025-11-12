"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "@/assets/logo/metricmind-logo.jpg";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particlePositions, setParticlePositions] = useState<Array<{ left: number; top: number }>>([]);
  const [isMounted, setIsMounted] = useState(false);

  // Smooth spring animations
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const x = useSpring(0, springConfig);
  const ySpring = useSpring(0, springConfig);

  // Generate particle positions on client only
  useEffect(() => {
    setIsMounted(true);
    // Generate fixed positions for particles (using a seed for consistency)
    const positions = Array.from({ length: 12 }, (_, i) => {
      // Use index as seed for consistent positioning
      const seed = i * 0.618033988749; // Golden ratio for better distribution
      const left = ((seed * 100) % 100);
      const top = (((seed * 137.508) % 100)); // Another irrational number for distribution
      return { left: Math.max(5, Math.min(95, left)), top: Math.max(5, Math.min(95, top)) };
    });
    setParticlePositions(positions);
  }, []);

  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;
      setMousePosition({ x: xPos, y: yPos });
      x.set(xPos);
      ySpring.set(yPos);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, ySpring, isMounted]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text animation for title - preserve words and prevent overflow
      const titleElement = titleRef.current;
      if (titleElement) {
        // Get the original HTML structure with spans
        const lines = titleElement.querySelectorAll('span.block') as NodeListOf<HTMLElement>;
        if (lines.length > 0) {
          lines.forEach((line) => {
            const text = line.textContent?.trim() || "";
            // Split by spaces to get words
            const words = text.split(/\s+/).filter(w => w.length > 0);
            
            // Clear any existing content and rebuild
            line.innerHTML = "";
            line.style.display = "block";
            line.style.width = "100%";
            line.style.textAlign = "left";
            
            words.forEach((word, wordIndex) => {
              // Create word container
              const wordContainer = document.createElement("span");
              wordContainer.className = "hero-word";
              wordContainer.style.cssText = "white-space: nowrap; display: inline-block; vertical-align: baseline;";
              
              // Split word into characters
              word.split("").forEach((char) => {
                const charSpan = document.createElement("span");
                charSpan.className = "hero-char";
                charSpan.textContent = char;
                charSpan.style.cssText = "opacity: 0; transform: translateY(50px) rotateX(90deg); display: inline-block; vertical-align: baseline;";
                wordContainer.appendChild(charSpan);
              });
              
              line.appendChild(wordContainer);
              
              // Add space between words (except after last word)
              if (wordIndex < words.length - 1) {
                const spaceSpan = document.createElement("span");
                spaceSpan.className = "hero-space";
                spaceSpan.textContent = " ";
                spaceSpan.style.cssText = "display: inline-block; width: 0.25em;";
                line.appendChild(spaceSpan);
              }
            });
          });

          gsap.to(".hero-char", {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            stagger: {
              amount: 1.2,
              from: "start",
            },
            ease: "back.out(1.7)",
          });
        }
      }

      // Floating particles animation
      gsap.to(".floating-particle", {
        y: "random(-30, 30)",
        x: "random(-30, 30)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });

      // Background gradient animation
      gsap.to(".gradient-orb-1", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        scale: "random(1, 1.3)",
        duration: "random(8, 12)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".gradient-orb-2", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        scale: "random(1, 1.3)",
        duration: "random(10, 14)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Staggered card animations
      gsap.from(".service-card", {
        opacity: 0,
        scale: 0.8,
        y: 50,
        rotation: -10,
        duration: 0.8,
        stagger: {
          amount: 0.8,
          from: "start",
        },
        ease: "back.out(1.7)",
        delay: 1,
      });

      // Stats counter animation
      gsap.utils.toArray(".stat-number").forEach((stat: any) => {
        const endValue = parseInt(stat.getAttribute("data-value") || "0");
        const suffix = stat.getAttribute("data-suffix") || "";
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: endValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            delay: 1.5,
            onUpdate: function() {
              stat.textContent = Math.floor(this.targets()[0].textContent) + suffix;
            },
          }
        );
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <motion.section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50"></div>
        
        {/* Animated gradient orbs - responsive sizes */}
        <motion.div
          className="gradient-orb-1 absolute top-10 right-10 sm:top-20 sm:right-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#1428a0]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="gradient-orb-2 absolute bottom-10 left-10 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-[#1428a0]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles - only render after mount to avoid hydration issues, hidden on mobile */}
        {isMounted && particlePositions.map((pos, i) => (
          <motion.div
            key={i}
            className="hidden md:block floating-particle absolute w-2 h-2 bg-[#1428a0]/20 rounded-full"
            style={{
              left: `${pos.left}%`,
              top: `${pos.top}%`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Professional accent line */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#1428a0] to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-12 sm:py-16 md:py-20 lg:py-32 pb-12 w-full overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start lg:items-center w-full"
        >
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 w-full min-w-0 order-1 lg:order-1">
            {/* Badge with magnetic effect */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-[#1428a0]/10 rounded-full border border-[#1428a0]/20 backdrop-blur-sm w-fit max-w-full overflow-visible"
              style={{
                x: useTransform(x, (latest) => latest * 0.5),
                y: useTransform(ySpring, (latest) => latest * 0.5),
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(20, 40, 160, 0.3)" }}
            >
              <motion.span
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#1428a0] rounded-full shrink-0"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <span className="text-xs sm:text-sm font-medium text-[#1428a0] whitespace-nowrap overflow-visible">Trusted IT Solutions Provider</span>
            </motion.div>

            {/* Main Title with split text animation */}
            <motion.div
              variants={itemVariants}
              className="hero-main-title space-y-2 sm:space-y-3 md:space-y-4 w-full min-w-0 overflow-hidden"
            >
              <h1
                ref={titleRef}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-900 leading-[1.1] sm:leading-tight tracking-tight w-full"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                  maxWidth: "100%",
                  width: "100%",
                  boxSizing: "border-box",
                  overflow: "hidden",
                  textAlign: "left",
                }}
              >
                <span className="block w-full text-left" style={{ display: "block", width: "100%", textAlign: "left" }}>Enterprise-Grade</span>
                <span className="block w-full text-left font-semibold text-[#1428a0]" style={{ display: "block", width: "100%", textAlign: "left" }}>Digital Solutions</span>
                <span className="block w-full text-left font-light text-gray-700" style={{ display: "block", width: "100%", textAlign: "left" }}>for Your Business</span>
              </h1>
            </motion.div>

            {/* Subtitle with fade and slide */}
            <motion.p
              variants={itemVariants}
              className="hero-subtitle text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed font-light mt-4 sm:mt-6"
              style={{
                x: useTransform(x, (latest) => latest * 0.3),
              }}
            >
              Empowering businesses in Aba, Nigeria with comprehensive IT services, digital transformation, and innovative technology solutions.
            </motion.p>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="hero-description text-sm sm:text-base md:text-lg text-gray-500 leading-relaxed mt-2 sm:mt-4"
            >
              From computer training and CAC services to graphics design and online applications, we deliver professional solutions that drive growth and efficiency.
            </motion.p>

                {/* CTA Buttons with advanced hover */}
                <motion.div
                  variants={itemVariants}
                  className="hero-cta flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8"
                >
                  <Link href="/contact">
                    <motion.div
                      className="relative px-6 py-3 sm:px-8 sm:py-4 bg-[#1428a0] text-white rounded-lg font-semibold text-xs sm:text-sm overflow-hidden group w-full sm:w-auto flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      style={{
                        boxShadow: "0 10px 30px rgba(20, 40, 160, 0.3)",
                      }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-gradient-to-r from-[#1e3fd4] to-[#2563eb]"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        <span>Get Started</span>
                        <motion.svg
                          className="w-4 h-4 sm:w-5 sm:h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          initial={{ x: 0 }}
                          whileHover={{ x: 4, rotate: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </motion.svg>
                      </span>
                    </motion.div>
                  </Link>
                  <Link href="/services">
                    <motion.div
                      className="px-6 py-3 sm:px-8 sm:py-4 bg-white text-[#1428a0] rounded-lg font-semibold text-xs sm:text-sm border-2 border-[#1428a0] relative overflow-hidden group w-full sm:w-auto flex items-center justify-center cursor-pointer"
                      whileHover={{ scale: 1.05, y: -2, borderColor: "#1e3fd4" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.span
                        className="absolute inset-0 bg-[#1428a0]/5"
                        initial={{ scale: 0 }}
                        whileHover={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">View Services</span>
                    </motion.div>
                  </Link>
                </motion.div>

            {/* Business Stats with counter animation */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 border-t border-gray-200 mt-6 sm:mt-8"
            >
              {[
                { value: 500, suffix: "+", label: "Clients Served" },
                { value: 10, suffix: "+", label: "Years Experience" },
                { value: 100, suffix: "%", label: "Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="stat-item text-center"
                  whileHover={{ scale: 1.1, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl sm:text-3xl font-semibold text-[#1428a0] mb-1">
                    <span className="stat-number" data-value={stat.value} data-suffix={stat.suffix}>
                      {stat.value}{stat.suffix}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side with 3D effects */}
          <motion.div
            className="relative w-full order-2 lg:order-2 mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            style={{
              transformStyle: "preserve-3d",
              x: useTransform(x, (latest) => latest * 0.3),
              y: useTransform(ySpring, (latest) => latest * 0.3),
            }}
          >
            {/* Main Professional Card */}
            <motion.div
              className="relative bg-white rounded-xl sm:rounded-2xl shadow-2xl overflow-hidden border border-gray-100 mb-4 sm:mb-6"
              whileHover={{ 
                scale: 1.02,
                rotateY: 5,
                rotateX: -5,
                boxShadow: "0 25px 50px rgba(0, 0, 0, 0.15)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-[#1428a0]/5 to-gray-50 flex items-center justify-center">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <Image
                    src={logo}
                    alt="Metricmind Concepts - Professional IT Solutions"
                    width={400}
                    height={300}
                    className="object-contain p-4 sm:p-6 md:p-8 w-full h-full"
                    priority
                  />
                </motion.div>
                {/* Professional Badge Overlay */}
                <motion.div
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/95 backdrop-blur-sm px-2 py-1 sm:px-4 sm:py-2 rounded-lg shadow-lg border border-gray-200"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
                >
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <motion.div
                      className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"
                      animate={{
                        scale: [1, 1.3, 1],
                        opacity: [1, 0.7, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <span className="text-[10px] sm:text-xs font-semibold text-gray-700">Verified Business</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Professional Info Card */}
              <motion.div
                className="p-4 sm:p-6 bg-white border-t border-gray-100"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
              >
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 text-base sm:text-lg">Metricmind Concepts</h3>
                    <p className="text-xs sm:text-sm text-gray-600">IT & Digital Solutions</p>
                  </div>
                  <motion.div
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1428a0]/10 rounded-lg flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-xl sm:text-2xl">🏢</span>
                  </motion.div>
                </div>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span>📍</span>
                    <span className="break-words">Aba, Abia State, Nigeria</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <span>✓</span>
                    <span>CAC Registered</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Service Cards Grid with stagger */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { icon: "💼", title: "Business Support", subtitle: "CAC Services" },
                { icon: "🖥️", title: "IT Solutions", subtitle: "Expert Support" },
                { icon: "🎓", title: "Training", subtitle: "Digital Skills" },
                { icon: "🎨", title: "Design", subtitle: "Graphics & Print" },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  className="service-card bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-5 border border-gray-200 cursor-pointer group"
                  initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
                  transition={{
                    delay: 1 + index * 0.1,
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    rotateY: 5,
                    rotateX: -5,
                    boxShadow: "0 20px 40px rgba(20, 40, 160, 0.2)",
                    borderColor: "#1428a0",
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <motion.div
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-[#1428a0]/10 rounded-lg flex items-center justify-center mb-2 sm:mb-3 group-hover:bg-[#1428a0]/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="text-lg sm:text-xl md:text-2xl">{service.icon}</span>
                  </motion.div>
                  <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5 sm:mb-1">{service.title}</div>
                  <div className="text-[10px] sm:text-xs text-gray-600">{service.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-gray-400 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
        >
          <span className="text-xs font-medium">Scroll to explore</span>
          <motion.svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </motion.svg>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}

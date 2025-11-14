"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import logo from "@/assets/logo/metricmind-logo.jpg";

export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="flex flex-col items-center justify-center space-y-8">
        {/* Logo with pulse animation */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Image
              src={logo}
              alt="Metricmind Concepts Logo"
              width={90}
              height={90}
              className="rounded-xl object-cover shadow-xl ring-2 ring-[#1e40af]/10"
              priority
            />
            {/* Glowing ring effect */}
            <motion.div
              className="absolute inset-0 rounded-xl ring-2 ring-[#1e40af]/30"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>

        {/* Spinner with gradient */}
        <div className="relative w-20 h-20">
          <motion.div
            className="absolute inset-0 border-4 border-[#1e40af]/10 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-[#1e40af] border-r-[#2563eb] rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          {/* Inner spinner for depth */}
          <motion.div
            className="absolute inset-2 border-[3px] border-transparent border-b-[#0d9488] border-l-[#14b8a6] rounded-full"
            animate={{ rotate: -360 }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        {/* Company name with fade animation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center space-y-2"
        >
          <h3 className="text-xl font-semibold text-gray-900 tracking-tight">
            Metricmind Concepts
          </h3>
          <motion.p
            className="text-sm text-gray-500 font-medium"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Loading your experience...
          </motion.p>
        </motion.div>

        {/* Progress dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 rounded-full bg-[#1e40af]"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


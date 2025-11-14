"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  services: string[];
  index: number;
  imageUrl?: string;
}

export default function ServiceCard({ icon, title, description, services, index, imageUrl }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.4, 0, 0.2, 1]
      }}
      className="group relative bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-[#1e40af]/20 transition-all duration-300 shadow-sm hover:shadow-lg"
      whileHover={{ y: -4 }}
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
        </div>
      )}
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="text-4xl md:text-5xl">{icon}</div>
          <div className="w-10 h-10 rounded-lg bg-[#1e40af]/10 group-hover:bg-[#1e40af] transition-colors duration-300 flex items-center justify-center">
            <svg className="w-5 h-5 text-[#1e40af] group-hover:text-white transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#1e40af] transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">{description}</p>
        <ul className="space-y-2.5">
          {services.map((service, i) => (
            <motion.li
              key={i}
              className="flex items-start text-gray-600 text-sm"
              initial={{ opacity: 0, x: -5 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 + i * 0.03, duration: 0.3 }}
            >
              <svg className="w-4 h-4 text-[#1e40af] mr-2.5 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="flex-1">{service}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#1e40af]/0 to-[#1e40af]/0 group-hover:from-[#1e40af]/5 group-hover:to-transparent transition-all duration-300 pointer-events-none rounded-xl"></div>
    </motion.div>
  );
}


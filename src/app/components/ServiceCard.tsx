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
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className="glass-card rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100/50 group relative"
      whileHover={{ y: -12, scale: 1.02, rotateY: 2 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {imageUrl && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </div>
      )}
      <div className="p-8">
        <div className="text-5xl mb-6">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-3">
          {services.map((service, i) => (
            <motion.li
              key={i}
              className="flex items-start text-gray-600 text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <span className="text-[#1428a0] mr-3 mt-1">✓</span>
              <span>{service}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}


"use client";

import Image from "next/image";
import logo from "@/assets/logo/metricmind-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-400 py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <Image
              src={logo}
              alt="Metricmind Concepts Logo - IT Solutions and Digital Services in Aba, Nigeria"
              width={40}
              height={40}
              className="rounded-lg object-cover"
              loading="lazy"
            />
            <span className="text-xl font-semibold text-white">Metricmind Concepts</span>
          </div>
          <p className="text-sm text-center md:text-right">
            Bringing Technology Closer to You
          </p>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Metricmind Concepts. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Designed and Developed by{" "}
            <a
              href="https://opulencedeveloper.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline"
            >
              OpulenceDeveloper.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}


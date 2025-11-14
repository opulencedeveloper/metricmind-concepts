"use client";

import Image from "next/image";
import logo from "@/assets/logo/metricmind-logo.jpg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800" itemScope itemType="https://schema.org/WPFooter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={logo}
                alt="Metricmind Concepts Logo - IT Solutions and Digital Services in Aba, Nigeria"
                width={40}
                height={40}
                className="rounded-lg object-cover ring-1 ring-gray-700"
                loading="lazy"
              />
              <span className="text-lg font-semibold text-white">Metricmind Concepts</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Bringing Technology Closer to You. Professional IT solutions and digital services in Aba, Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/about" className="text-sm text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="/nysc" className="text-sm text-gray-400 hover:text-white transition-colors">NYSC Services</a></li>
              <li><a href="/contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start space-x-2">
                <span className="mt-0.5">📍</span>
                <span>Aba, Abia State, Nigeria</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>📧</span>
                <a href="mailto:info@metricmindconcepts.com" className="hover:text-white transition-colors">
                  info@metricmindconcepts.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Metricmind Concepts. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Designed and Developed by{" "}
              <a
                href="https://opulencedeveloper.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors font-medium underline decoration-blue-400/50 hover:decoration-blue-300"
              >
                OpulenceDeveloper.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


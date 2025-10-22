'use client';

import React from 'react';
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 text-gray-300 bg-gray-900">
      <div className="container px-4 mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Company Info */}
          <div className="text-center md:text-left">
            <h3 className="mb-4 text-2xl font-bold text-yellow-400 font-primary">LORASCO</h3>
            <p className="mb-6 text-sm leading-relaxed font-secondary">
              A leading oilfield service company in Libya, committed to delivering excellence and innovation through our strategic partnership with Baker Hughes.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-lg font-semibold text-white font-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="flex items-center justify-center text-sm transition-colors duration-200 md:justify-start hover:text-yellow-400 font-secondary">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="flex items-center justify-center text-sm transition-colors duration-200 md:justify-start hover:text-yellow-400 font-secondary">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Our Services
                </a>
              </li>
              <li>
                <a href="#team" className="flex items-center justify-center text-sm transition-colors duration-200 md:justify-start hover:text-yellow-400 font-secondary">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Our Team
                </a>
              </li>
              <li>
                <a href="#contact" className="flex items-center justify-center text-sm transition-colors duration-200 md:justify-start hover:text-yellow-400 font-secondary">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-lg font-semibold text-white font-primary">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#drilling" className="flex items-center justify-center text-sm transition-colors duration-200 md:justify-start hover:text-yellow-400 font-secondary">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Drilling Rigs
                </a>
              </li>
              <li>
                <a href="#wireline" className="flex items-center justify-center text-sm transition-colors duration-200 md:justify-start hover:text-yellow-400 font-secondary">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Wireline Services
                </a>
              </li>
              <li>
                <a href="#pressure" className="flex items-center justify-center text-sm transition-colors duration-200 md:justify-start hover:text-yellow-400 font-secondary">
                  <ChevronRight className="w-4 h-4 mr-2" />
                  Pressure Pumping
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="mb-4 text-lg font-semibold text-white font-primary">Contact Us</h4>
            <address className="space-y-3 not-italic font-secondary">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 text-yellow-400 flex-shrink-0" />
                <span className="text-sm">
                  Hai Alandalus District<br />
                  Tripoli, Libya
                </span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone className="flex-shrink-0 w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-sm">+218 21 333 4244</span>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail className="flex-shrink-0 w-5 h-5 mr-3 text-yellow-400" />
                <a href="mailto:info@lorasco.com" className="text-sm transition-colors duration-200 hover:text-yellow-400">
                  info@lorasco.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom Bar - Copyright */}
        <div className="pt-8 mt-8 border-t border-gray-800">
          <p className="text-sm text-center font-secondary">
            &copy; {currentYear} Lorasco. All Rights Reserved. A Baker Hughes Channel Partner.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
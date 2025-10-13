'use client';

import React from 'react';
import { Phone, Twitter, Linkedin } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="py-2 text-sm text-gray-900 bg-yellow-400">
      <div className="container flex items-center justify-between px-4 mx-auto">
        
        {/* Left Side: Contact Information */}
        <div className="flex items-center">
          <Phone className="w-4 h-4 mr-2 text-gray-900" />
          <span>
            <strong className="font-bold text-black">Tripoli</strong>: +218 21 333 4244 | <strong className="font-bold text-black">Benghazi</strong>: +218 61 222 7272
          </span>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="flex items-center space-x-4">
          <a 
            href="https://twitter.com/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors duration-200 hover:text-black"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/company/yourprofile" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="transition-colors duration-200 hover:text-black"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
      </div>
    </header>
  );
};

export default Topbar;
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

// Navigation items now use hash links for same-page scrolling
const navItems = [
  { name: 'About', href: '#about' },
  { 
    name: 'Services', 
    href: '#services',
    hasDropdown: true,
    dropdownItems: [
      { name: 'Drilling Rigs', href: '#drilling' },      // <-- CORRECTED
      { name: 'Wireline Services', href: '#wireline' },  // <-- CORRECTED
      { name: 'Pressure Pumping', href: '#pressure' },   // <-- CORRECTED
    ]
  },
  { name: 'Projects', href: '#projects' },
  { name: 'Our Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // This function handles smooth scrolling with an offset for the fixed header
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.substring(1)); // Remove the '#'
    if (targetElement) {
      const headerHeight = 64; // Height of your header (h-16 = 4rem = 64px)
      const targetPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
    // Close mobile menu and dropdown after clicking
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
  };

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };

    if (isServicesDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesDropdownOpen]);


  return (
    <header className="sticky top-0 z-50 bg-gray-900 border-b border-gray-800">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo - Clicking it scrolls to the top of the page */}
          <a href="#hero" onClick={(e) => handleScroll(e, '#hero')} className="text-2xl font-bold text-yellow-400 font-primary">
            LORASCO
          </a>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 lg:flex">
            {navItems.map((item) => (
              <div key={item.name} className="relative" ref={item.hasDropdown ? dropdownRef : null}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setIsServicesDropdownOpen(!isServicesDropdownOpen)}
                      className="flex items-center text-gray-300 transition-colors hover:text-yellow-400 font-primary"
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4 ml-1" />
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="absolute left-0 w-48 mt-2 bg-gray-800 border border-gray-700 rounded-md shadow-lg top-full">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={(e) => handleScroll(e, dropdownItem.href)}
                            className="block px-4 py-2 text-sm text-gray-300 transition-colors hover:bg-gray-700 hover:text-white"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a 
                    href={item.href} 
                    onClick={(e) => handleScroll(e, item.href)} 
                    className="text-gray-300 transition-colors hover:text-yellow-400 font-primary"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Contact Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, '#contact')} 
              className="items-center hidden px-4 py-2 text-sm font-medium text-black transition-colors bg-yellow-400 rounded sm:inline-flex hover:bg-yellow-300 font-primary"
            >
              Contact
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-300 rounded-md lg:hidden hover:bg-gray-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="py-4 border-t border-gray-800 lg:hidden">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.hasDropdown ? (
                    <div>
                      <a 
                        href={item.href} 
                        onClick={(e) => handleScroll(e, item.href)} 
                        className="block px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 hover:text-yellow-400 font-primary"
                      >
                        {item.name}
                      </a>
                      <div className="pl-4">
                        {item.dropdownItems.map((dropdownItem) => (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            onClick={(e) => handleScroll(e, dropdownItem.href)}
                            className="block px-3 py-2 text-sm text-gray-400 rounded-md hover:bg-gray-800 hover:text-yellow-400"
                          >
                            {dropdownItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a 
                      href={item.href} 
                      onClick={(e) => handleScroll(e, item.href)} 
                      className="block px-3 py-2 text-gray-300 rounded-md hover:bg-gray-800 hover:text-yellow-400 font-primary"
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
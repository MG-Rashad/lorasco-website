'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Globe } from 'lucide-react'; // Removed unused Mail, MapPin, Phone

const About = () => {
  // Removed unused isMounted state
  // const [isMounted, setIsMounted] = useState(false);
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  return (
    <>
  {/* Hero Section with Your Image as Background */}
  <section
  id="about" 
  className="relative flex items-center justify-center py-20 bg-center bg-no-repeat bg-cover"  // Changed from min-h-screen to padding
  style={{ 
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8)), url('/assets/img/about/about.jpg')`,
    backgroundColor: '#000000',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed'
  }}
>
        <div className="container relative z-10 px-4 mx-auto">
          <motion.div 
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mb-6 text-white h2">
              Taking Libya&apos;s Oilfield Services<br />
              To The Next Level
            </h1>
            <p className="mb-8 text-lg text-yellow-400 font-secondary md:text-xl">
              A BAKER HUGHES CHANNEL PARTNER
            </p>
            
            {/* Baker Hughes Button */}
            <motion.a
              href="https://www.bakerhughes.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 text-base font-bold text-black transition-all duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-300 hover:scale-105 hover:shadow-xl group font-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More About Our Partnership
              <ArrowRight className="ml-3 transition-transform duration-300 transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute text-white transform -translate-x-1/2 bottom-8 left-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronRight className="w-6 h-6 rotate-90" />
          </motion.div>
        </motion.div>
      </section>

      {/* Company Information Section */}
      
      <section className="relative z-10 py-16 md:py-24 bg-card">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 lg:items-center">
            
            {/* Main Content */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="p-8 border shadow-lg bg-background border-border rounded-xl md:p-10">
                <h3 className="mb-6 h3 text-foreground">
                  About Lorasco!
                </h3>
                
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-secondary">
                  <p>
                    Lorasco is a privately-owned oilfield service company with a primary focus on Libya. 
                    Established with a vision to revolutionize the Libyan energy sector, we began our 
                    drilling services operations in 2019.
                  </p>
                  
                  <p>
                    Our strategic partnership with Baker Hughes ensures service continuity and brings 
                    world-class technology and expertise to the Libyan oil and gas industry. This 
                    collaboration enables us to deliver exceptional value to our clients while maintaining 
                    the highest standards of safety and operational excellence.
                  </p>
                  
                  <p>
                    We are committed to developing local talent, investing in cutting-edge technology, 
                    and building sustainable partnerships that drive the growth of Libya&apos;s energy sector 
                    for generations to come.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Sidebar */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Services Card */}
              <motion.div 
                className="p-6 transition-all duration-300 transform border shadow-lg bg-background border-border rounded-xl hover:scale-105 hover:shadow-xl hover:border-yellow-400/50"
                whileHover={{ y: -5 }}
              >
                <h3 className="flex items-center mb-4 text-xl font-bold text-foreground font-primary">
                  <Globe className="w-5 h-5 mr-2 text-yellow-400" />
                  SERVICES
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#drilling" className="flex items-start text-yellow-400 transition-colors duration-200 cursor-pointer hover:text-yellow-300 font-secondary">
                      <ChevronRight className="flex-shrink-0 w-4 h-4 mt-1 mr-2" />
                      <span>Drilling Rigs</span>
                    </a>
                  </li>
                  <li>
                    <a href="#wireline" className="flex items-start text-yellow-400 transition-colors duration-200 cursor-pointer hover:text-yellow-300 font-secondary">
                      <ChevronRight className="flex-shrink-0 w-4 h-4 mt-1 mr-2" />
                      <span>Wireline Services</span>
                    </a>
                  </li>
                  <li>
                    <a href="#pressure" className="flex items-start text-yellow-400 transition-colors duration-200 cursor-pointer hover:text-yellow-300 font-secondary">
                      <ChevronRight className="flex-shrink-0 w-4 h-4 mt-1 mr-2" />
                      <span>Pressure Pumping</span>
                    </a>
                  </li>
                </ul>
              </motion.div>

              {/* Quick Links Card */}
              <motion.div 
                className="p-6 transition-all duration-300 transform border shadow-lg bg-background border-border rounded-xl hover:scale-105 hover:shadow-xl hover:border-yellow-400/50"
                whileHover={{ y: -5 }}
              >
                <h3 className="mb-4 text-xl font-bold text-foreground font-primary">MENU</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#about" className="flex items-center font-medium text-yellow-400 transition-colors duration-200 cursor-pointer hover:text-yellow-300 font-secondary">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#team" className="flex items-center font-medium text-yellow-400 transition-colors duration-200 cursor-pointer hover:text-yellow-300 font-secondary">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="flex items-center font-medium text-yellow-400 transition-colors duration-200 cursor-pointer hover:text-yellow-300 font-secondary">
                      <ChevronRight className="w-4 h-4 mr-2" />
                      Contact
                    </a>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
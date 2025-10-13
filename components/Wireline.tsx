'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Shield, Users, Gauge } from 'lucide-react';
import Link from 'next/link';

const WirelinePage = () => {
  const features = [
    {
      icon: Shield,
      title: 'Advanced Technology',
      description: 'We utilize cutting-edge wireline tools and software for precise data acquisition and well intervention, ensuring accurate results.',
    },
    {
      icon: Users,
      title: 'Expert Analysts',
      description: 'Our team includes highly experienced petrophysicists and engineers who interpret complex data to provide actionable insights.',
    },
    {
      icon: Gauge,
      title: 'Operational Safety',
      description: 'Safety is our top priority. All wireline operations are conducted with strict adherence to international safety standards.',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative flex items-center justify-center py-20 bg-center bg-no-repeat bg-cover"
        style={{ 
          // This path is from your screenshot
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/assets/img/wireline/wireline.jpg')`,
          backgroundColor: '#000000',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container relative z-10 px-4 mx-auto text-center">
          <motion.div 
            className="max-w-4xl mx-auto text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <Zap className="w-16 h-16 text-yellow-400" />
            </div>
            <h1 className="mb-6 text-white h1">
              Wireline Services
            </h1>
            <p className="mb-8 text-xl text-gray-200 font-secondary md:text-2xl">
              Advanced wireline technology for precise well logging, perforation, and intervention operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="relative z-10 py-16 md:py-24 bg-card">
        <div className="container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction with Image - UPDATED LAYOUT */}
            <div className="grid items-center gap-12 mb-16 lg:grid-cols-2 lg:gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="mb-6 h2 text-foreground">
                  Precision Wireline Solutions
                </h2>
                <div className="space-y-6 text-lg leading-relaxed text-muted-foreground font-secondary">
                  <p>
                    Lorasco's wireline services provide critical data and intervention capabilities essential for optimizing well performance. Through our partnership with Baker Hughes, we offer a comprehensive suite of wireline services, from open-hole and cased-hole logging to complex well intervention and plug & abandonment operations.
                  </p>
                  <p>
                    Our state-of-the-art equipment and expert personnel ensure that we can deliver high-resolution data and execute interventions safely and efficiently, even in the most challenging downhole environments. This allows our clients to make informed decisions and maximize the productivity of their assets.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* This path is also from your screenshot */}
                <img 
                  src="/assets/img/wireline/integrity.jpg"
                  alt="Wireline Services in action"
                  className="w-full h-auto rounded-lg shadow-xl"
                />
              </motion.div>
            </div>

            {/* Key Features Grid - UPDATED ICON ALIGNMENT */}
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-8 text-center h3 text-foreground">Why Choose Our Wireline Services?</h3>
              <div className="grid gap-8 md:grid-cols-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    className="p-6 text-center border rounded-lg shadow-lg bg-background border-border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-yellow-400 rounded-full">
                      <feature.icon className="w-8 h-8 text-foreground" />
                    </div>
                    <h4 className="mb-2 h4 text-foreground">{feature.title}</h4>
                    <p className="text-muted-foreground font-secondary">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              className="p-8 text-center bg-gray-900 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="mb-4 text-white h3">Ready to Get Started?</h3>
              <p className="mb-6 text-lg text-gray-300 font-secondary">
                Contact our team today to discuss how our services can support your next project.
              </p>
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const targetElement = document.getElementById('contact');
                  if (targetElement) {
                    const headerHeight = 64; // Height of your fixed header
                    const targetPosition = targetElement.offsetTop - headerHeight;
                    window.scrollTo({
                      top: targetPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="inline-flex items-center px-8 py-4 font-bold text-black transition-all duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-300 hover:scale-105 group font-primary"
              >
                Get In Touch
                <ArrowRight className="ml-3 transition-transform duration-300 transform group-hover:translate-x-2" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WirelinePage;
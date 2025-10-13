'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Drill, Zap, Gauge } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Drill,
      title: 'Drilling Rigs',
      description: 'State-of-the-art drilling equipment and experienced personnel for efficient oil extraction.',
      href: '#drilling'
    },
    {
      icon: Zap,
      title: 'Wireline Services',
      description: 'Advanced wireline technology for precise well logging and intervention operations.',
      href: '#wireline'
    },
    {
      icon: Gauge,
      title: 'Pressure Pumping',
      description: 'High-pressure pumping solutions for well stimulation and enhanced oil recovery.',
      href: '#pressure'
    }
  ];

  return (
    <section id="services" className="px-4 py-20 bg-card">
      <div className="mx-auto max-w-7xl">
        <motion.h2 
          className="mb-12 text-center h3 text-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              id={service.href.substring(1)}
              className="p-8 transition-all duration-300 border rounded-lg shadow-lg bg-background border-border hover:shadow-xl hover:border-yellow-400/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 bg-yellow-400 rounded-full hover:scale-110">
                <service.icon className="w-8 h-8 text-foreground" />
              </div>
              <h3 className="mb-4 h4 text-foreground">{service.title}</h3>
              <p className="mb-6 text-muted-foreground font-secondary">
                {service.description}
              </p>
              <motion.a
                href={service.href}
                className="flex items-center gap-2 font-medium text-yellow-400 transition-all font-primary hover:gap-3"
                whileHover={{ x: 5 }}
              >
                Learn More
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
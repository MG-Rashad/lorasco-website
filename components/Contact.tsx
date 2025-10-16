'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, Flame } from 'lucide-react';

const Contact = () => {
  // State to control the background attachment
  const [isFlameFixed, setIsFlameFixed] = useState(true);

  const toggleFlame = () => {
    setIsFlameFixed(!isFlameFixed);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission here (e.g., send to an API)
    console.log(formData);
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section 
      id="contact" 
      className="relative px-4 py-20 bg-gray-900 bg-center bg-no-repeat bg-cover"
      style={{ 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/assets/img/contact/contact.jpg')`,
        backgroundAttachment: isFlameFixed ? 'fixed' : 'scroll'
      }}
    >
      {/* Toggle Button */}
      <div className="absolute z-10 top-4 right-4">
        <motion.button
          onClick={toggleFlame}
          className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-white transition-colors bg-gray-800 rounded-full hover:bg-gray-700"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={`Flame is currently ${isFlameFixed ? 'fixed' : 'scrolling'}`}
        >
          <Flame className={`w-4 h-4 transition-transform duration-300 ${isFlameFixed ? '' : 'rotate-180'}`} />
          <span className="hidden sm:inline">{isFlameFixed ? 'Fixed' : 'Scroll'}</span>
        </motion.button>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.h2 
          className="mb-12 text-center text-white h3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </motion.h2>
        <div className="grid gap-12 md:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-white h4">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-gray-300 font-secondary">Hai Alandalus Post Office Street, Tripoli, Libya</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-gray-300 font-secondary">+218 21 333 4244</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-yellow-400" />
                <span className="text-gray-300 font-secondary">info@lorasco.com</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={5} required className="w-full px-4 py-3 text-white placeholder-gray-400 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"></textarea>
              <motion.button type="submit" className="flex items-center justify-center w-full gap-2 px-8 py-4 font-bold text-black transition-all duration-300 transform bg-yellow-400 rounded-lg hover:bg-yellow-300 hover:scale-105 font-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
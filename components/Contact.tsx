'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [isMounted, setIsMounted] = useState(false);

  // Ensure the component is mounted before rendering controlled form inputs
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const offices = [
    {
      title: 'Tripoli office',
      address: 'Post Office Street\nHai Alandalus District Tripoli, Libya',
      phone: '+218 21 333 4244',
      email: 'info@lorasco.com'
    },
    {
      title: 'Benghazi office',
      address: 'Office #9 - Floor 6\nJamal Abul-Nasser St Almadina\nAlmadina Tower Benghazi, Libya',
      phone: '+218 61 222 7272',
      email: 'info@lorasco.com'
    },
    {
      title: 'UK office',
      address: '11 Upper Grosvenor Street\nLondon, W1K 2NB United Kingdom',
      phone: '+44 20 7491 0590',
      email: 'info@lorasco.com'
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative min-h-screen py-12 bg-no-repeat md:py-20 lg:py-32"
      style={{ 
        // Updated gradient to match yellow and black theme
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('/assets/img/contact/contact.jpg')`,
        backgroundColor: '#000000', // Black fallback background
        backgroundSize: 'cover',
        backgroundPosition: 'center 15%',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Main content container */}
      <div className="container relative z-10 px-4 mx-auto">
        <motion.div 
          className="mb-8 text-center md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="mb-4 text-white h2">Contact us</h1>
          <p className="max-w-3xl px-4 mx-auto text-xl text-gray-200 font-secondary">
            We're delivering world class standards know-how into the Libyan sector
          </p>
        </motion.div>

        {/* Office Locations - Responsive Grid */}
        <motion.div 
          className="grid grid-cols-1 gap-4 mb-8 md:grid-cols-3 md:gap-6 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {offices.map((office, index) => (
            <motion.div
              key={office.title}
              className="p-4 text-white border rounded-lg bg-black/40 backdrop-blur-sm md:p-6 border-yellow-400/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, borderColor: 'rgba(250, 204, 21, 0.5)' }}
            >
              <h3 className="mb-3 text-lg font-semibold text-yellow-400 font-primary md:text-xl md:mb-4">
                {office.title}
              </h3>
              <div className="space-y-2 md:space-y-3">
                <div className="flex items-start">
                  <MapPin size={16} className="flex-shrink-0 mt-1 mr-2 text-yellow-400" />
                  <p className="text-sm text-gray-200 whitespace-pre-line font-secondary md:text-base">
                    {office.address}
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="flex-shrink-0 mr-2 text-yellow-400" />
                  <p className="text-sm text-gray-200 font-secondary md:text-base">{office.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="flex-shrink-0 mr-2 text-yellow-400" />
                  <a 
                    href={`mailto:${office.email}`} 
                    className="text-sm text-gray-200 transition-colors font-secondary md:text-base hover:text-yellow-400"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Form - Responsive */}
        <motion.div 
          className="w-full max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="p-6 text-white border rounded-lg bg-black/40 backdrop-blur-sm md:p-8 border-yellow-400/30">
            <h2 className="mb-4 text-center text-white h3 md:mb-6">Get In Touch</h2>
            <p className="mb-6 text-base text-center text-gray-200 font-secondary md:text-lg md:mb-8">
              We'd love to hear from you. Send us a message and we will respond as soon as possible.
            </p>

            {/* Use a wrapper div to prevent hydration issues */}
            <div className="form-wrapper">
              {isMounted ? (
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-semibold text-yellow-400 font-primary md:text-base">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm text-white placeholder-gray-400 border rounded-md md:px-4 md:py-3 bg-black/30 border-yellow-400/30 focus:ring-2 focus:ring-yellow-400 focus:border-transparent md:text-base font-secondary"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-semibold text-yellow-400 font-primary md:text-base">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 text-sm text-white placeholder-gray-400 border rounded-md md:px-4 md:py-3 bg-black/30 border-yellow-400/30 focus:ring-2 focus:ring-yellow-400 focus:border-transparent md:text-base font-secondary"
                      placeholder="Your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-semibold text-yellow-400 font-primary md:text-base">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      className="w-full px-3 py-2 text-sm text-white placeholder-gray-400 border rounded-md md:px-4 md:py-3 bg-black/30 border-yellow-400/30 focus:ring-2 focus:ring-yellow-400 focus:border-transparent md:text-base font-secondary"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <div>
                    {status === 'success' && (
                      <motion.p 
                        className="mb-4 text-sm font-semibold text-green-400 md:text-base"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Thank you! Your message has been sent.
                      </motion.p>
                    )}
                    {status === 'error' && (
                      <motion.p 
                        className="mb-4 text-sm font-semibold text-red-400 md:text-base"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        Oops! Something went wrong. Please try again.
                      </motion.p>
                    )}

                    <motion.button
                      type="submit"
                      disabled={status === 'loading'}
                      className="flex items-center justify-center w-full gap-2 px-4 py-2 text-sm font-bold text-black transition duration-300 bg-yellow-400 rounded-md md:py-3 hover:bg-yellow-300 disabled:bg-gray-600 disabled:cursor-not-allowed md:text-base font-primary"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {status === 'loading' ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              ) : (
                <div className="flex items-center justify-center h-64">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 border-4 border-yellow-400 rounded-full animate-spin border-t-transparent"></div>
                    <p className="text-white">Loading Contact Form...</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
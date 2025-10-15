'use client';

import { JSX, lazy, Suspense } from "react";
import { motion } from 'framer-motion'; // <-- THIS IS THE MISSING IMPORT
import { ArrowRight } from 'lucide-react';

// Critical components for the initial view (load immediately)
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Topbar from "@/components/Topbar";
import Services from "@/components/Services";

// Lazy load non-critical components
const About = lazy(() => import("@/components/About"));
const Drillingrigs = lazy(() => import("@/components/Drillingrigs"));
const Wireline = lazy(() => import("@/components/Wireline"));
const Pressurepumping = lazy(() => import("@/components/Pressurepumping"));
const Ourteam = lazy(() => import("@/components/Ourteam"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

// A simple loading fallback component
const SectionLoader = () => <div className="py-20 text-center">Loading Section...</div>;

const Home = (): JSX.Element => {
  return (
    <>
      <Topbar />
      <Header />
      <Hero />
      <Services />

      {/* Wrap lazy components in Suspense */}
      <Suspense fallback={<SectionLoader />}>
        <About />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Drillingrigs />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Wireline />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Pressurepumping />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Ourteam />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <Contact />
      </Suspense>

      {/* --- Light-Colored Separator Section --- */}
      <section className="relative py-16 bg-gray-100">
        <div className="container px-4 mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-gray-900 font-primary">
              Ready to Start Your Next Project?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 font-secondary">
              Our team of experts is standing by to provide innovative solutions tailored to your needs. Let's build the future of energy together.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const targetElement = document.getElementById('contact');
                if (targetElement) {
                  const headerHeight = 64;
                  const targetPosition = targetElement.offsetTop - headerHeight;
                  window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
              className="inline-flex items-center px-8 py-4 font-bold text-white transition-all duration-300 transform bg-gray-900 rounded-lg hover:bg-gray-800 hover:scale-105 group font-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
              <ArrowRight className="ml-3 transition-transform duration-300 transform group-hover:translate-x-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<SectionLoader />}>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
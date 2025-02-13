"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ContactMe from "./ContactMe";
import Products from "./products/Products";
import AboutArtist from "./AboutArtist";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

export default function Body() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode based on system preference
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="relative">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="fixed left-20 bottom-6 z-50 p-3 rounded-full bg-accent/10 hover:bg-accent/20 transition-all duration-300"
        aria-label="Toggle dark mode"
      >
        {isDarkMode ? (
          <SunIcon className="h-6 w-6 text-accent" />
        ) : (
          <MoonIcon className="h-6 w-6 text-accent" />
        )}
      </button>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif mb-6">
              Welcome to the Gallery of
              <span className="text-accent block mt-2">Yoel Vainer</span>
            </h1>

            <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Discover a collection of original oil paintings that capture moments of beauty 
              and emotion through traditional techniques and contemporary vision.
            </p>

            <button
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-accent text-secondary hover:bg-accent/90 
                       transition-all duration-300 uppercase tracking-wider text-sm"
            >
              Explore Gallery
            </button>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="fade-in-section">
          <Products />
        </section>

        {/* About Artist Section */}
        <section id="about" className="fade-in-section bg-accent/5">
          <AboutArtist />
        </section>

        {/* Contact Section */}
        <section id="contact" className="fade-in-section">
          <ContactMe />
        </section>
      </main>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed left-6 bottom-6 z-50 p-3 rounded-full bg-accent/10 text-secondary 
                 hover:bg-accent/20 transition-all duration-300 shadow-lg"
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </div>
  );
}

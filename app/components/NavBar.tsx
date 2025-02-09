"use client"

import { useEffect, useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, AnimatePresence } from "framer-motion";

export default function NavBar() {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        setIsDarkMode(darkModeMediaQuery.matches);

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        darkModeMediaQuery.addEventListener('change', handleChange);

        return () => {
            darkModeMediaQuery.removeEventListener('change', handleChange);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        if (section) {
            const offset = 80;
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setIsMenuToggled(false);
        }
    }

    const navLinks = [
        { label: 'Home', id: 'home' },
        { label: 'Gallery', id: 'gallery' },
        { label: 'About Artist', id: 'about' },
        { label: 'Contact', id: 'contact' },
    ];

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/* Logo/Brand - Add if needed */}
                    <div className="flex-shrink-0">
                        {/* Add your logo here if needed */}
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-gray-800 dark:text-gray-200 hover:text-accent dark:hover:text-accent
                                         text-sm font-medium tracking-wider transition-all duration-300"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            className="p-2 rounded-md text-gray-800 dark:text-gray-200 hover:text-accent"
                        >
                            <Bars3Icon className="h-6 w-6" />
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuToggled && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-20 left-0 right-0 bg-white dark:bg-gray-900 shadow-lg md:hidden"
                    >
                        <div className="px-4 pt-2 pb-3 space-y-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        scrollToSection(link.id);
                                        setIsMenuToggled(false);
                                    }}
                                    className="block w-full text-left px-3 py-2 text-base font-medium 
                                             text-gray-800 dark:text-gray-200 hover:text-accent 
                                             dark:hover:text-accent transition-colors duration-200"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

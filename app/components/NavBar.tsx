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
        <nav className={`fixed w-full z-50 bg-white dark:bg-[#2C2C2C]`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16">
                    {/* Desktop Navigation - Now aligned to left */}
                    <div className="hidden md:flex space-x-12 items-center">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="text-text-primary hover:text-accent transition-colors duration-300 font-medium tracking-wide text-lg"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Now aligned to left */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsMenuToggled(!isMenuToggled)}
                            className="text-text-primary hover:text-accent transition-colors duration-300"
                            aria-label="Toggle menu"
                        >
                            {isMenuToggled ? (
                                <XMarkIcon className="h-7 w-7" />
                            ) : (
                                <Bars3Icon className="h-7 w-7" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - Updated text size */}
            <AnimatePresence>
                {isMenuToggled && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden absolute top-16 inset-x-0 bg-white dark:bg-gray-900 border-t border-accent border-opacity-10"
                    >
                        <div className="px-4 py-4 space-y-3">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        scrollToSection(link.id);
                                        setIsMenuToggled(false);
                                    }}
                                    className="block w-full text-left px-4 py-2 text-text-primary hover:bg-accent hover:bg-opacity-10 hover:text-accent transition-colors duration-300 rounded-lg text-lg"
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

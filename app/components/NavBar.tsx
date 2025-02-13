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
        <nav>
            {/* Desktop Navigation */}
            <div>
                {navLinks.map((link) => (
                    <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <div>
                <button
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <Bars3Icon className="h-6 w-6" />
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMenuToggled && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div>
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => {
                                        scrollToSection(link.id);
                                        setIsMenuToggled(false);
                                    }}
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

"use client"

import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
    function scrollToSection(sectionId: string) {
        const section = document.getElementById(sectionId);
        const offset = 100; // Adjust this value to set the desired offset from the top
        if (section) {
            const elementPosition = section.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }

    return (
        <div className="fixed top-0 p-5 z-40 bg-white h-[10%] w-full">
            <div className="flex justify-between items-center">
                <div className="flex flex-row text-lg font-bold gap-8">
                    <button onClick={() => scrollToSection('home')}>Home</button>
                    <button onClick={() => scrollToSection('about-me')}>About Me</button>
                    <button onClick={() => scrollToSection('projects')}>Projects</button>
                    <button onClick={() => scrollToSection('contact-me')}>Contact Me</button>
                </div>

                <Image
                className="mr-14"
                    width={50}
                    height={50}
                    alt=""
                    src={"/icons/navbar.png"}
                />
            </div>
        </div>
    );
}

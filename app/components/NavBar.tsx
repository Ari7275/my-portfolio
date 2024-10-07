"use client"

import Image from "next/image";
import Link from "next/link";
import useMediaQuery from "../hooks/useMediaQuery";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function NavBar() {

    const isAboveMediumScreens = useMediaQuery("(min-width: 770px)");
    const [isMenuToggled, setIsMenuToggled] = useState(false);


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
            setTimeout(() => {
                setIsMenuToggled(false);
            }, 500);
        }
    }

    return (
        <div>
            {isAboveMediumScreens ? (
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
            ) : !isMenuToggled &&
            <div>
                <button className="fixed top-4 right-3 p-5 z-40 bg-white"
                    style={{ border: "none", background: "transparent" }}
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                    <Bars3Icon height="2.5rem" width="2.5rem" color="black" />
                </button>
            </div>
            }

            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed flex flex-col h-full top-4 right-2 z-10 w-[75%] gap-6 bg-white items-end p-6">

                    <button className=""
                        style={{ border: "none", background: "transparent" }}
                        onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                        <XMarkIcon height="2.5rem" width="2.5rem" color="black" />
                    </button>

                    <div className="flex flex-col h-full gap-[25%] items-end p-8 ">
                        <button className="text-lg font-semibold" onClick={() => scrollToSection('home')}>Home</button>
                        <button className="text-lg font-semibold" onClick={() => scrollToSection('about-me')}>About Me</button>
                        <button className="text-lg font-semibold" onClick={() => scrollToSection('projects')}>Projects</button>
                        <button className="text-lg font-semibold" onClick={() => scrollToSection('contact-me')}>Contact Me</button>
                    </div>

                </div>
            )}
        </div>
    );
}

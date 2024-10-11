"use client"

import c_sharp from "../../public/icons/c_sharp.png";
import c_plus from "../../public/icons/c_plus.png";
import html from "../../public/icons/html.png";
import javascript from "../../public/icons/javascript.png";
import arrow_up from "../../public/icons/arrow_up.png";
import typescript from "../../public/icons/typescript.png";
import java_icon from "../../public/icons/java_icon.png";
import git from "../../public/icons/git.png";
import sql from "../../public/icons/sql.png";
import tailwind from "../../public/icons/tailwind-css.png";
import react from "../../public/icons/react.png";
import python from "../../public/icons/python.png";
import nodejs from "../../public/icons/nodejs.png";
import css from "../../public/icons/css3.png";
import Image, { StaticImageData } from "next/image";
import { useState, useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ContactMe from "./ContactMe";
import Projects from "./projects/Projects";
import { SelectedPage } from "../shared/types";
import useMediaQuery from "../hooks/useMediaQuery";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { set } from "react-hook-form";

export default function Body() {

    const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    const [isAtEndOfScreen, setIsAtEndOfScreen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isAtEnd = window.innerHeight + window.scrollY >= document.body.offsetHeight;
            setIsAtEndOfScreen(isAtEnd);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const icons: Array<{ src: StaticImageData, name: string }> = [
        { src: nodejs, name: 'Node.js' },
        { src: react, name: 'React' },
        { src: c_sharp, name: 'C#' },
        { src: python, name: 'Python' },
        { src: javascript, name: 'JavaScript' },
        { src: typescript, name: 'TypeScript' },
        { src: tailwind, name: 'Tailwind CSS' },
        { src: css, name: 'CSS' },
        { src: html, name: 'HTML' },
        { src: git, name: 'Git' },
        { src: sql, name: 'SQL' },
        { src: java_icon, name: 'Java' }
    ];

    const entries = useIntersectionObserver({ threshold: 0.1 });

    useEffect(() => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-left');
            } else {
                entry.target.classList.remove('fade-in-left');
            }
        });
    }, [entries]);

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
        if (sectionId === 'contact-me') {
            setIsAtEndOfScreen(true);
        }
    }

    return (
        <div>
            <div className="w-full grow flex flex-col gap-16 ">


                {/* Home */}
                <section id="home" className="home">

                    <div className={`flex flex-col gap-6 text-3xl justify-center`}>
                        <h1 className="text-5xl font-bold dark:text-[#6b6868]">
                            Hi! {"I'm "}
                            <span className="text-[#453bcd] font-bold tracking-widest dark:text-[#e7dede]">Ari Vainer</span>
                        </h1>

                        <p className="text-2xl md:text-7xl text-wrap font-bold dark:text-[#a39f9f]">Full-Stack Developer</p>

                        <div className="text-wrap text-lg dark:text-[#c7c1c1]">
                            <p>A passionate Full-Stack Developer,</p>
                            <p>love to create and to learn new things, Based in Israel, Tel Aviv 📌</p>

                        </div>
                    </div>
                </section>


                <div className="flex justify-center p-8 ">
                    <button onClick={() => scrollToSection('contact-me')} className="contact-me-btn dark:text-[#928f8f] dark:border-[#bbbaba]">
                        CONTACT ME
                    </button>
                </div>


                <br />
                <br />

                {/* About Me */ }
                <section id="about-me" className="fade-in-section w-full grow opacity-0 transform translate-x-[-50%] transition-all  duration-1500">
                    <p className="text-2xl font-bold dark:text-[#dbd7d7]">About me</p>
                    <br />
                    <p className="flex leading-6 mx-auto p-3 dark:text-[#dfdbdb]" >

                        Hello! I am a web development programmer and an Industrial &
                        Management engineer. With 1 year of experience in the field, I am proficient in web development.
                        {"I'm "} committed to delivering high-quality solutions and constantly staying updated with the latest industry trends.
                        When {"I'm "} not coding, I enjoy playing the guitar, surfing, and spending time with my family and friends.
                        Additionally, I am passionate about learning new technologies and improving my skills to stay ahead in the ever-evolving tech landscape.
                        I believe in the power of collaboration and thrive in environments where I can work with like-minded individuals to create innovative solutions.
                    </p>
                </section>

                <br />

    {/* Skills Stack */ }
                <section id="skill-stack" className="skill-stack fade-in-section">
                    <span className="flex flex-col gap-8">
                        <p className="text-2xl font-bold ml-2 dark:text-[#dbd7d7]">Skills stack</p>

                        <div className="flex flex-wrap lg:flex-row gap-4 justify-center ">
                            {icons.map((icon) => (
                                <div
                                    key={icon.name}
                                    onMouseEnter={() => setHoveredIcon(icon.name)}
                                    onMouseLeave={() => setHoveredIcon(null)}
                                    className="relative flex flex-col p-3 items-center"
                                >
                                    <Image alt={icon.name} src={icon.src} className="h-16 w-16 p-1 " />
                                    {hoveredIcon === icon.name && (
                                        <div className="absolute z-10 top-full mt-2 p-1 bg-gray-700 text-white rounded">
                                            {icon.name}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </span>
                </section>

                <br />
                <br />
                <br />
                <br />

    {/* Projects */ }
                <section id="projects" className="fade-in-section transform translate-x-[-50%] transition-all duration-1500 lg:pl-3">
                    <p className="text-2xl font-bold dark:text-[#dbd7d7]">MY PROJECTS</p>
                    <Projects />
                </section>

                <br />
                <br />
                <br />

    {/* Contact Info */ }
    <section id="contact-me" className="fade-in-section pb-16 opacity-0 transform translate-x-[-50%] transition-all duration-1500">
        {/* Your Contact Info Content */}
        <ContactMe />
    </section>


            </div >

        
            <button className="absolute left-8 bottom-8" onClick={() => scrollToSection('home')}>
                <Image
                    src={arrow_up}
                    width={25}
                    height={25}
                    alt={""}
                />
            </button>



        </div >
    );
}

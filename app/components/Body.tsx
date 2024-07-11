"use client"

import c_sharp from "../../public/icons/c_sharp.png";
import c_plus from "../../public/icons/c_plus.png";
import html from "../../public/icons/html.png";
import javascript from "../../public/icons/javascript.png";
import typescript from "../../public/icons/typescript.png";
import git from "../../public/icons/git.png";
import nodejs from "../../public/icons/nodejs.png";
import sql from "../../public/icons/sql.png";
import tailwind from "../../public/icons/tailwind-css.png";
import react from "../../public/icons/react.png";
import python from "../../public/icons/python.png";
import css from "../../public/icons/css3.png";
import Image, { StaticImageData } from "next/image";
import { useEffect } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import ContactMe from "./ContactMe";

export default function Body() {
    const icons: Array<StaticImageData> = [react, html, css, tailwind, nodejs, sql, javascript, typescript, python, c_sharp, c_plus, git];

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
    }

    return (
        <div className="w-full grow p-28 flex flex-col gap-16">

            {/* Home */}
            <section id="home" className="flex flex-row p-5 justify-center gap-16">
                <div className="flex flex-col gap-6 text-3xl justify-center">
                    <h1 className="text-5xl font-bold">
                        Hi! {"I'm "}
                        <span className="text-[#453bcd] font-bold tracking-widest">Ari Vainer</span>
                    </h1>

                    <p className="text-7xl font-bold">Full-Stack</p>
                    <p className="text-7xl font-bold fadeaway">Developer</p>
                    <div className="text-[20px]">
                        <p>A passionate Full-Stack Developer,</p>
                        <p>love to create and to learn new things, Based in Israel, Tel Aviv 📌</p>
                    </div>
                </div>

                <div className="border-[14px] shadow-3xl rounded-ee-[50%] rounded-ss-[50%]  rounded-se-[20%] rounded-es-[20%] z-10 border-[#28282B] overflow-hidden">
                    <Image
                        src="/portfolioImg.png"
                        width={400}
                        height={630}
                        alt=""
                    />
                </div>

            </section>

            <div className="flex justify-center pb-[35px]">
                <button onClick={() => scrollToSection('contact-me')} className="border-[3px]  rounded-lg font-extrabold border-black px-20 py-3 transform transition-transform duration-300 hover:scale-125">CONTACT ME</button>
            </div>


            <br />
            <br />

            {/* About Me */}
            <section id="about-me" className="fade-in-section opacity-0 transform translate-x-[-50%] transition-all duration-1500">
                <span>
                    <p className="text-3xl font-bold p-3">About me</p>
                    <br />
                    <div className="pl-10 text-xl">Hello! I am a web development programmer and an Industrial & Management engineer. With 1 year of experience in the field, I am proficient in web development. {"I'm "} committed to delivering high-quality solutions and constantly staying updated with the latest industry trends. When {"I'm "} not coding, I enjoy playing the guitar, traveling, and spending time with my family and friends. Additionally, I am passionate about learning new technologies and improving my skills to stay ahead in the ever-evolving tech landscape. I believe in the power of collaboration and thrive in environments where I can work with like-minded individuals to create innovative solutions.</div>
                </span>
            </section>

            <br />

            {/* Skills Stack */}
            <section id="skill-stack" className="fade-in-section opacity-0 transform translate-x-[-50%] transition-all duration-1500">
                <span className="flex flex-col gap-2">
                    <p className="text-2xl font-bold ml-2">Skills stack</p>
                    <br />
                    <br />
                    <div className="flex flex-row justify-between">
                        {icons.map((icon) => (
                            <Image key={`${icon}`} alt={`${icon}`} src={icon} />
                        ))}
                    </div>
                </span>
            </section>
            <br />
            <br />
            <br />
            <br />
            {/* Projects */}
            <section id="projects" className="fade-in-section opacity-0 transform translate-x-[-50%] transition-all duration-1500 ">
                <p className="text-3xl font-bold p-3">MY PROJECTS</p>

                <br />
                <br />
                <br />
                <div className="flex flex-col items-center">Oops, {"don't have any yet ;( i'm working on it!"} </div>
                <br />
                <br />
                <br />

                {/* Your Projects Content */}
            </section>

            <br />
            <br />
            <br />

            {/* Contact Info */}
            <section id="contact-me" className="fade-in-section opacity-0 transform translate-x-[-50%] transition-all duration-1500">
                {/* Your Contact Info Content */}
                <ContactMe>

                </ContactMe>
            </section>
        </div>
    );
}

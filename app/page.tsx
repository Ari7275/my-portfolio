"use client"

import Image from "next/image";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import SideButtons from "./components/SideButtons";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

export default function Home() {

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

    <div className="h-full w-full">
      <main className="relative h-full w-full p-8">
        <NavBar></NavBar>
        <Body></Body>
        <SideButtons/>
      </main>
    </div>

  );
}

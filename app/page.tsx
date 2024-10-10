"use client"

import Image from "next/image";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import SideButtons from "./components/SideButtons";
import { ArrowUpIcon } from "@heroicons/react/16/solid";

export default function Home() {


  return (

    <div className="h-full w-full dark:bg-[#2C2C2C]">
      <main className="relative h-full w-full p-8 ">
        <NavBar></NavBar>
        <Body></Body>
        <SideButtons/>
      </main>
    </div>

  );
}

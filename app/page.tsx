"use client"

import Image from "next/image";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import SideButtons from "./components/SideButtons";
import { ArrowUpIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";

export default function Home() {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");




  return (

    <div className="h-full w-full dark:bg-[#2C2C2C]">
      <main className={`relative h-full w-full ${isAboveMediumScreens ? "" : "p-6"}`}>
        <NavBar></NavBar>
        <SideButtons/>
        <Body></Body>
      </main>
    </div>

  );
}

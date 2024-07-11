"use client"

import Image from "next/image";
import NavBar from "./components/NavBar";
import Body from "./components/Body";
import SideButtons from "./components/SideButtons";

export default function Home() {

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

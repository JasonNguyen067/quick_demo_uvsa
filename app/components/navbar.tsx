"use client";
import NavLink from "./navlink";
import Image from "next/image";
import bruh from "../../imgs/bruh.png";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-yellow-500 p-4 text-white w-full">
      <div className="flex items-center space-x-3">
        <Image src={bruh} alt="UVSA logo" width={60} height={60}/>
        <h1 className="text-2xl font-bold">UVSA</h1>
      </div>  
        <div className="flex text-xl font-bold space-x-10">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
            <NavLink href="/donate">Donate</NavLink>
        </div>
    </nav>
  );
};
"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white">
        <h1 className="text-2xl font-bold">UVSA</h1>


        <div className="space-x-6">
            <Link href="/" className="text-yellow-300 transition">Home</Link>
            <Link href="/about" className="text-yellow-300 transition">About</Link>
            <Link href="/contact" className="text-yellow-300 transition">Contact</Link>
            <Link href="/dondate" className="text-yellow-300 transition">Donate</Link>
        </div>
    </nav>
  );
};
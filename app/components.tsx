"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";

export default function TypewriterText() {
    return (
        <div className="text-center mt-10 text-2xl font-bold">
        <Typewriter
            words={["Welcome to Our Website", "Explore Our Features", "Join Our Community"]}
            loop={0}           // 0 = infinite
            cursor
            cursorStyle="|"
            typeSpeed={70                       }
            deleteSpeed={50}
            delaySpeed={1000}
        />
        </div>
    );
}


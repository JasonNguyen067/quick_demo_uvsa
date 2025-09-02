"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import event1 from "../../imgs/eventimg1.jpg";
import event2 from "../../imgs/eventimg2.jpg";
import usc    from "../../imgs/usc_photo.jpg";

export default function Imagedescription() {
  const data = [
    { src: event1, alt: "Event 1", title: "Fullerton", description: "Fullerton event!" },
    { src: event2, alt: "Event 2", title: "UCI",       description: "UCI event!" },
    { src: usc,    alt: "Event 3", title: "USC",       description: "USC event!" }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const active = data[activeIndex];

  // Re-trigger fade each slide (optional)
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const id = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(id);
  }, [activeIndex]);

  return (
    <div className="flex items-start justify-center gap-10 p-8">
      {/* LEFT COLUMN: fixed-size image area, never shrinks */}
      <div className="relative w-[500px] h-[500px] flex-none">
        {/* Animate the inner layer so the outer footprint never changes */}
        <div
          className={`absolute inset-0 rounded-lg shadow-lg transition-opacity duration-700 ease-in-out
                      ${visible ? "opacity-100" : "opacity-0"}`}
        >
          <Image
            key={activeIndex}
            src={active.src}
            alt={active.alt}
            fill                // use the wrapper's fixed 500x500 box
            className="object-cover rounded-lg"
            placeholder="blur"
          />
        </div>

        {/* Buttons directly under image */}
        <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex gap-4">
          <button
            onClick={() => setActiveIndex(p => (p === 0 ? data.length - 1 : p - 1))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveIndex(p => (p === data.length - 1 ? 0 : p + 1))}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Next
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN: fixed width so its text length doesn't push things around */}
      <div className="w-[380px]">
        <h2 className="text-3xl font-bold mb-3">{active.title}</h2>
        <p className="text-gray-700 leading-7">{active.description}</p>
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router"; // Router hook to track current path

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};


export const MenuItem = ({ href, setActive, active, item }) => {
  const transition = { type: "spring", stiffness: 300, damping: 30 };

  return (
    <div
      onMouseEnter={() => setActive(item)} // Set active item on hover
      onMouseLeave={() => setActive(null)} // Reset active item on mouse leave
      className="relative"
    >
      <a
        href={href}
        className={`text-white transition-colors duration-300 ${
          active === item ? "text-blue-500 font-bold" : ""
        }`}
      >
        {item}
      </a>

      
    </div>
  );
};

export const Menu = ({ setActive, children }) => {
  return (
    <nav
      // resets the state
      onMouseLeave={() => setActive(null)}
      className="relative rounded-full  border-[1px] bg-white bg-opacity-10 backdrop-blur-lg  shadow-input flex justify-center space-x-4 px-8 py-3 "
    >
      {children}
    </nav>
  );
};

"use client";
import React, { useState } from "react";
import { MenuItem,Menu, ProductItem, } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";


function Navbar({ className }) {
  const [active, setActive] = useState(null); // Manages active state

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];
  
  return (
    <div
      className={cn(
        "fixed top-6  w-[70vw] inset-x-0 max-w-xl min-w-fit mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            href={item.href}
            setActive={setActive}
            active={active}
            item={item.name}
          />
        ))}
      </Menu>
    </div>
  );
}

export default Navbar;
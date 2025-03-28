"use client";

import React from "react";

export default function ClientNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-center space-x-4">
      {["portfolio", "media", "contact"].map((item) => (
        <button
          key={item}
          onClick={() => scrollToSection(item)}
          className="hover:text-gray-400"
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </nav>
  );
}

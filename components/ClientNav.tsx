"use client";

import React from "react";

export default function ClientNav() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md absolute top-0 left-0 w-full z-50">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-gray-800 text-white flex items-center justify-center rounded-full font-bold">
          KK
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-8">
        {["portfolio", "media", "contact"].map((item) => (
          <button
            key={item}
            onClick={() => scrollToSection(item)}
            className="relative text-lg font-semibold text-gray-900 hover:text-gray-600 justify-center"
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
            <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-400 transition-all duration-300 hover:w-full"></span>
          </button>
        ))}
      </div>

      {/* Contact Me Button */}
      <button
        onClick={() => scrollToSection("contact")}
        className="px-4 py-2 border-2 border-gray-800 text-gray-900 font-semibold rounded-lg hover:bg-gray-800 hover:text-white transition-all duration-300"
      >
        Contact Me
      </button>
    </nav>
  );
}

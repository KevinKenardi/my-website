"use client";

import { useState, useEffect } from "react";
import Section from "./Section";

const sections = [
  {
    id: "hero",
    title: "Welcome",
    content: "Hi, I'm Kevin! A Web Developer.",
    image: "/images/cv1-2.jpg",
  },
  {
    id: "portfolio",
    title: "My Work",
    content: "Here are my latest projects.",
    image: "/images/cv1-2.jpg",
  },
  {
    id: "media",
    title: "Media",
    content: "Check out this video!",
    media: (
      <video
        autoPlay
        loop
        muted
        className="w-full max-w-lg rounded-lg shadow-lg"
      >
        <source src="/videos/gabypiercing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    id: "contact",
    title: "Let's Connect",
    content: "Reach me via email or LinkedIn.",
    media: (
      <form className="flex flex-col gap-4 mt-4 w-full max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="p-2 border rounded" />
        <input type="email" placeholder="Your Email" className="p-2 border rounded" />
        <textarea placeholder="Your Message" className="p-2 border rounded h-32"></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition transform hover:scale-105 active:scale-95 duration-300">
          Send Message
        </button>
      </form>
    ),
  },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);

  // Cek localStorage saat pertama kali render
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full p-4 flex flex-wrap justify-center gap-2 sm:gap-4 z-50 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 shadow-md"}`}>
        {["hero", "portfolio", "media", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="px-4 py-2 rounded transition transform hover:scale-110 active:scale-95 duration-300"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        {/* Tombol Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-4 py-2 rounded border transition transform hover:scale-110 active:scale-95 duration-300"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* Sections */}
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}
    </div>
  );
}

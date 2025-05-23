"use client";

import { useState, useEffect } from "react";
import Section from "./Section";
import ContactForm from "../components/ContactForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "../components/WhatsAppButton";

const sections = [
  {
    id: "about me",
    title: (
      <>
        Hey, I&apos;m <span className="text-blue">Kevin Kenardi</span>. Here, you can check out what I&apos;m working on.
      </>
    ),
    content: "",
    image: "/images/cv1-2.jpg",
  },
  {
    id: "portfolio",
    title: "My Projects",
    projects: [
      {
        name: "Project 1",
        image: "/images/amchorizontal.png", // Gambar untuk Project 1
      },
      {
        name: "Project 2",
        image: "", // Kosong untuk diisi nanti
      },
    ],
  },
  {
    id: "media",
    title: "Media",
    content: "Check out this video!",
    media: (
      <video autoPlay loop muted className="w-full max-w-lg mx-auto rounded-lg shadow-lg">
        <source src="/videos/gabypiercing.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    ),
  },
  {
    id: "contact",
    title: "Let's Connect",
    content: "Reach me via email or LinkedIn.",
    media: <ContactForm />,
  },
];

export default function HomePage() {
  const [darkMode, setDarkMode] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Load Dark Mode dari localStorage
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }

    // Event Listener untuk navbar hide/show
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setHidden(true); // Navbar hilang di atas
      } else if (currentScrollY > lastScrollY) {
        setHidden(false); // Navbar muncul saat scroll ke bawah
      } else {
        setHidden(true); // Navbar hilang saat scroll ke atas
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
    <div className={`min-h-screen flex flex-col ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      {/* Toast Notification */}
      <ToastContainer />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full p-4 flex flex-wrap justify-center gap-4 z-50 transition-all duration-300 ${
          hidden ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0"
        } ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900 shadow-md"}`}
      >
        {["about me", "portfolio", "media", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className="px-6 py-2 rounded-lg text-lg font-medium transition transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 duration-300"
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
        {/* Tombol Dark Mode */}
        <button
          onClick={toggleDarkMode}
          className="ml-4 px-6 py-2 rounded-lg border text-lg font-medium transition transform hover:scale-105 hover:bg-gray-100 dark:hover:bg-gray-700 active:scale-95 duration-300"
        >
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </nav>

      {/* Sections */}
      {sections.map((section) => (
        <Section key={section.id} section={section} />
      ))}

      {/* Tombol WhatsApp */}
      <WhatsAppButton />
    </div>
  );
}

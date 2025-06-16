import React, { useEffect, useState, useRef } from "react";
import { Moon, Sun } from "lucide-react";

export default function GlassNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY.current && currentScroll > 20) {
        setScrolled(true);
      } else if (currentScroll < lastScrollY.current) {
        setScrolled(false);
      }
      lastScrollY.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-700 ease-in-out">
      <div
        className={`transition-all duration-700 ease-in-out transform-gpu py-4 px-6 sm:px-10 flex justify-between items-center w-full ${
          scrolled
            ? "max-w-5xl bg-white/30 dark:bg-zinc-900/30 backdrop-blur-md rounded-full mx-4 sm:mx-10"
            : "max-w-screen-xl mx-6 sm:mx-16"
        }`}
      >
        <div className="font-bold text-xl text-black dark:text-white">Brand</div>
        <div className="flex items-center space-x-6 text-zinc-800 dark:text-zinc-200">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">Contact</a>
          <button
            onClick={() => setDarkMode(prev => !prev)}
            className="p-2 rounded-full relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 hover:bg-zinc-300/20 dark:hover:bg-zinc-700/20"
            aria-label="Toggle Dark Mode"
          >
            <span className="absolute inset-0 rounded-full animate-ping bg-zinc-400/10 dark:bg-zinc-600/10"></span>
            <span className="relative z-10">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}

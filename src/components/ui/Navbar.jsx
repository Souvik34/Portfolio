import React, { useEffect, useState, useRef } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("theme") === "dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

useEffect(() => {
  const handleScroll = () => {
    const currentScroll = window.scrollY;

    // Only expand when at the top
    if (currentScroll === 0) {
      setScrolled(false);
    } else if (currentScroll > 20) {
      setScrolled(true);
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
        <img
          src="passport.png"
          alt="Logo"
          className="w-10 h-10 rounded-full object-cover"
        />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-zinc-800 dark:text-zinc-200">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative px-2 py-1 font-medium group"
            >
              <span className="relative z-10">{item}</span>
              <span className="absolute left-0 bottom-0 w-full h-full scale-x-0 group-hover:scale-x-100 bg-zinc-200/50 dark:bg-zinc-700/40 rounded-md transition-transform duration-300 ease-out origin-left z-0" />
            </a>
          ))}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 hover:bg-zinc-300/20 dark:hover:bg-zinc-700/20"
            aria-label="Toggle Dark Mode"
          >
            <span className="absolute inset-0 rounded-full animate-ping bg-zinc-400/10 dark:bg-zinc-600/10"></span>
            <span className="relative z-10">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="p-2 rounded-full relative overflow-hidden transition-transform duration-300 ease-in-out hover:scale-110 active:scale-95 hover:bg-zinc-300/20 dark:hover:bg-zinc-700/20"
            aria-label="Toggle Dark Mode"
          >
            <span className="absolute inset-0 rounded-full animate-ping bg-zinc-400/10 dark:bg-zinc-600/10"></span>
            <span className="relative z-10">
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </span>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full hover:bg-zinc-300/20 dark:hover:bg-zinc-700/20 transition"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white dark:bg-zinc-900 rounded-2xl shadow-lg p-6 space-y-4 transition-all duration-300">
          {["Home", "About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href="#"
              className="block text-zinc-900 dark:text-white text-lg font-medium"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

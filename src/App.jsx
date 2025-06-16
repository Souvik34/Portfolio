import React from "react";
import Navbar from "./components/ui/Navbar";
import "./index.css";
import TextFlipper from "./components/ui/TextFlipper";
import { Mail, FileText, FolderOpen } from "lucide-react";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      <Navbar />
    <main className="pt-24 px-6 sm:px-10 md:px-16 lg:px-40">
  <h1 className="text-4xl sm:text-5xl md:text-6xl px-4 sm:px-10 font-medium mb-6 flex flex-wrap items-center gap-3">
    Souvik Sural
    <TextFlipper />
  </h1>

  <p className="px-4 sm:px-10 text-base sm:text-lg mb-10 leading-relaxed">
    Software engineer by trade, design enthusiast by obsession. <br />
    I build{" "}
    <span className="font-medium">
      clean code, smooth interfaces, and occasionally, really good coffee.
    </span>
    <br />
    Passionate about crafting experiences that work as good as they look —
    and yes, I debug with style.
  </p>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 px-4 sm:px-10 mb-16">
    <a
      href="#contact"
      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white dark:bg-blue-500 font-medium shadow hover:scale-105 transition-transform duration-300"
    >
      <Mail className="w-5 h-5 text-white group-hover:animate-pulse" />
      Get in Touch
    </a>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-400 dark:border-zinc-600 font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
    >
      <FileText className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:rotate-6 transition-transform" />
      View Resume
    </a>

    <a
      href="#projects"
      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white dark:bg-purple-500 font-medium shadow hover:scale-105 transition-transform duration-300"
    >
      <FolderOpen className="w-5 h-5 text-white group-hover:animate-pulse" />
      View Projects
    </a>
  </div>

  {/* Separator */}
  <div className="relative my-20 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
    </div>
    <span className="relative z-10 px-6 text-xs sm:text-sm font-medium uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-500">
      I love building things
    </span>
  </div>

  {/* Projects Section */}
  <Projects />


   {/* Separator */}
  <div className="relative my-20 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
    </div>
    <span className="relative z-10 px-6 text-xs sm:text-sm font-medium uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-500">
      Worked with
    </span>
  </div>


  <Experience />
 
  <div className="h-[1000px] px-6 sm:px-10 md:px-20 bg-gradient-to-b from-transparent via-zinc-200/20 dark:via-zinc-800/20 to-transparent" />
</main>

    </div>
  );
}

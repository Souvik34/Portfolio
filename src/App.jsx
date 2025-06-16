import React from "react";
import Navbar from "./components/ui/Navbar";
import "./index.css";
import TextFlipper from "./components/ui/TextFlipper";
import { Mail, FileText } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      <Navbar />
     <main className="pt-28 px-20 sm:px-40">
<h1 className="text-6xl px-10 font-medium mb-8 flex items-center gap-4">
  Souvik Sural
  <TextFlipper />
</h1>
  <p className="px-10 text-lg mb-12">Software engineer by trade, design enthusiast by obsession. <br />
I build  <span className="font-medium"> clean code, smooth interfaces, and occasionally, really good coffee. </span> <br />
Passionate about crafting experiences that work as good as they look — and yes, I debug with style.</p>


<div className="flex flex-wrap gap-4 px-4 sm:px-10 mb-16">
  {/* 🌟 Get in Touch Button */}
  <a
    href="#contact"
    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white dark:bg-blue-500 font-medium shadow hover:scale-105 transition-transform duration-300"
  >
    <Mail className="w-5 h-5 text-white group-hover:animate-pulse" />
    Get in Touch
  </a>

  {/* 📄 View Resume Button */}
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-400 dark:border-zinc-600 font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
  >
    <FileText className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:rotate-6 transition-transform" />
    View Resume
  </a>
</div>
  <div className="h-[2000px] px-6 sm:px-24 md:px-20 bg-gradient-to-b from-transparent via-zinc-200/20 dark:via-zinc-800/20 to-transparent" />



</main>
    </div>

    
  );
}

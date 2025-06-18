import React from "react";
import "../index.css";
import TextFlipper from "../components/ui/TextFlipper";
import { Link } from "react-router-dom";
import { Mail, FileText, FolderOpen } from "lucide-react";
import Projectsection from "../components/sections/Projectsection";
import Experience from "../components/sections/Experience";
import BlogSection from "../components/sections/Blogs";
import TechStack from "../components/sections/Techstack";
import Contact from "../pages/Contact"
import { Calendar } from "lucide-react"; 
import Projects from "../pages/Projects";
import GitHubCalendar from "../components/ui/GitHubCalendar";
import Highlights from "../components/sections/Highlights";
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      
    <main className="pt-24 px-4 sm:px-6 md:px-7 lg:px-8">

    

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
    <Link
      to="/contact"
      href=""
      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-blue-600 text-white dark:bg-blue-500 font-medium shadow hover:scale-105 transition-transform duration-300"
    >
      <Mail className="w-5 h-5 text-white group-hover:animate-pulse" />
      Get in Touch
    </Link>

    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-zinc-400 dark:border-zinc-600 font-medium text-zinc-900 dark:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors duration-300"
    >
      <FileText className="w-5 h-5 text-green-600 dark:text-green-400 group-hover:rotate-6 transition-transform" />
      View Resume
    </a>

    <Link
  to="/projects"
  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 text-white dark:bg-purple-500 font-medium shadow hover:scale-105 transition-transform duration-300"
>
  <FolderOpen className="w-5 h-5 text-white group-hover:animate-pulse" />
  View Projects
</Link>
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
  <Projectsection />


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

    {/* Separator */}
  <div className="relative my-20 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
    </div>
    <span className="relative z-10 px-6 text-xs sm:text-sm font-medium uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-500">
      Sharing knowledge as I learn
    </span>
  </div>

    <BlogSection />


  


     {/* Separator */}
  <div className="relative my-20 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
    </div>
    <span className="relative z-10 px-6 text-xs sm:text-sm font-medium uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-500"> My tools & Technologies
  
    </span>
  </div>

 
    <TechStack />


     {/* Separator */}
  <div className="relative my-20 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
    </div>
    <span className="relative z-10 px-6 text-xs sm:text-sm font-medium uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-500">
      My Journey
    </span>
  </div>
  
 <Highlights />

    {/* Separator */}
  <div className="relative my-20 flex items-center justify-center">
    <div className="absolute inset-0 flex items-center">
      <div className="w-full border-t border-zinc-300 dark:border-zinc-700" />
    </div>
    <span className="relative z-10 px-6 text-xs sm:text-sm font-medium uppercase tracking-wider bg-white dark:bg-zinc-950 text-zinc-500">
      My Contributions
    </span>
  </div>
  <GitHubCalendar />

     {/* Get in Touch Section */}
<section
  id="contact"
  className="mt-32 px-4 sm:px-10 md:px-20 text-center max-w-3xl mx-auto"
>

    {/* Animated Contact Button */}
  <div className="mb-6 flex justify-center">
    <Link 
    to = "/contact"
    href="" // Replace with your actual Twitter handle
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-blue-600 text-white dark:bg-blue-500 font-medium shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <Mail className="w-5 h-5 group-hover:animate-pulse" />
      Contact
    </Link>
  </div>
  <h2 className="text-3xl sm:text-7xl font-semibold mb-6">Get in Touch</h2>



  <p className="text-base sm:text-2xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
   Feel free to message me with a  <span className="text-blue-400"> specific question or idea on LinkedIn or Gmail</span>  — I’ll do my best to respond promptly. <br />

    <span className="italic text-amber-300" >Solicitations and generic outreach will be ignored.</span>
  </p>
  <a
  href="https://calendly.com/yourusername/meeting" // 
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-zinc-900 transition-colors duration-300"
>
  <Calendar className="w-5 h-5 group-hover:animate-spin-slow" />
  Schedule a Meet
</a>
</section>
</main>

    </div>
  );
}

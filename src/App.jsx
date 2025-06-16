import React from "react";
import GlassNavbar from "./components/ui/Navbar";
import "./index.css";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      <GlassNavbar />
     <main className="pt-28 px-20 sm:px-40">
  <h1 className="text-3xl px-10 font-bold mb-4">Welcome</h1>
  <p className="px-10 mb-10">Scroll down to see the navbar transform with glassmorphism.</p>
  <div className="h-[2000px] px-6 sm:px-24 md:px-20 bg-gradient-to-b from-transparent via-zinc-200/20 dark:via-zinc-800/20 to-transparent" />
</main>

    </div>
  );
}

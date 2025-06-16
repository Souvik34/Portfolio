import React from "react";
import Navbar from "./components/ui/Navbar";
import "./index.css";
import TextFlipper from "./components/ui/TextFlipper";

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
  <div className="h-[2000px] px-6 sm:px-24 md:px-20 bg-gradient-to-b from-transparent via-zinc-200/20 dark:via-zinc-800/20 to-transparent" />
</main>

    </div>
  );
}

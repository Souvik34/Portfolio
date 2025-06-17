// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/ui/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";
import { Toaster } from "react-hot-toast";
import Footer from "./components/ui/Footer";

export default function App() {
  return (
    <>
        <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: {
            fontSize: "14px",
            background: "#333",
            color: "#fff",
          },
        }}
      />
    <div className="min-h-screen bg-white text-zinc-900 dark:bg-zinc-950 dark:text-white transition-colors duration-300">
      <Navbar />
      <main className="pt-24 px-6 sm:px-10 md:px-16 lg:px-40">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} /> 
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
    </>
  );
}

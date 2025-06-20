"use client";

import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import { Calendar } from "lucide-react"; 
import {
  IoSend,
  IoPaperPlaneSharp,
} from "react-icons/io5";
import { Globe } from "../components/magicui/globe";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error("Something went wrong. Try again later.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    }
  };

  return (
    <div className="min-h-screen pb-5 pt-24 px-6 sm:px-10 md:px-16 lg:px-40 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-white transition-colors duration-300">
      <Toaster position="top-center" reverseOrder={false} />

      <h2 className="text-4xl sm:text-5xl font-semibold mb-8 flex items-center gap-3">
        Get in Touch
        <IoPaperPlaneSharp className="text-blue-500 w-8 h-8 animate-fly" />
      </h2>

      <div className="flex flex-col lg:flex-row gap-12 items-start">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="grid gap-6 max-w-xl w-full">
          <div>
            <label htmlFor="name" className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 font-medium">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="What's on your mind?"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-40 px-4 py-2 resize-none border border-zinc-300 dark:border-zinc-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white dark:bg-blue-500 rounded-xl font-medium hover:scale-105 transition-transform"
          >
            <IoSend className="w-5 h-5" />
            Send Message
          </button>

          {/* CTA Button */}
          <a
  href="https://calendly.com/yourusername/meeting" // 
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-zinc-900 transition-colors duration-300"
>
  <Calendar className="w-5 h-5 group-hover:animate-spin-slow" />
  Schedule a Meet
</a>
        </form>

        {/* Globe Section */}
        <div className="hidden lg:flex items-center justify-center w-full max-w-md relative rounded-lg px-10 pb-40 overflow-hidden">
          <Globe className="top-2" />
          <div className="pointer-events-none absolute inset-0" />
        </div>
      </div>
    </div>
  );
}

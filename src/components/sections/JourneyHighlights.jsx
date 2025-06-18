// src/components/sections/JourneyHighlights.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import highlightData from "../../data/highlightData.jsx";


const categories = ["All", "Hackathon", "Bootcamp", "Open Source", "Mentorship"];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function JourneyHighlights() {
  const [selected, setSelected] = useState("All");

  const filtered =
    selected === "All"
      ? highlightData
      : highlightData.filter((item) => item.category === selected);

  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
        Milestones & Contributions
      </h3>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1.5 text-sm rounded-full border font-medium transition-all duration-300
              ${
                selected === cat
                  ? "bg-blue-600 text-white border-blue-600 shadow-md scale-105"
                  : "bg-transparent text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700"
              }`}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Cards */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div
              key={item.title}
              className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, y: 20 }}
              custom={i}
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h4 className="text-lg font-semibold">{item.title}</h4>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 text-xs">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="bg-blue-100 dark:bg-blue-800/20 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

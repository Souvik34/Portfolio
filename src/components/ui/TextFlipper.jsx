/* eslint-disable no-unused-vars */
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = ["Engineer", "Debugger", "Designer", "Developer"];

export default function TextFlipper({ interval = 2500 }) {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearTimeout(timeoutRef.current);
  }, [index, interval]);

  return (
    <div className="relative inline-flex items-center justify-center px-4 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 shadow-md min-w-[120px] h-10">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: [0, -5, 5, 0] }}
          exit={{ opacity: 0, x: -20 }}
          transition={{
            opacity: { duration: 0.4 },
            x: { duration: 0.5, ease: "easeInOut" },
          }}
          className="text-base font-medium text-zinc-700 dark:text-zinc-200 whitespace-nowrap"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}

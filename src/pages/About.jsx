import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Education from "../data/Education";
import { CheckCircle } from "lucide-react";

export default function About() {
  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 text-left">
            About <span className="text-blue-500 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-left">
            I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems.
            With expertise in full-stack development, I enjoy building user-centric applications that make a difference.
          </p>
        </motion.div>

        {/* Education Timeline (Bar + Tick + Text) */}
        <div className="space-y-12">
          {Education.map((item, index) => {
            const itemRef = useRef(null);
            const isInView = useInView(itemRef, { once: true, amount: 0.3 });

            return (
              <motion.div
                ref={itemRef}
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative"
              >
                {/* Year Bar */}
                <div className="bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded-md w-fit font-semibold text-lg">
                  {item.year}
                </div>

                {/* Tick + Description */}
                <div className="flex items-start gap-4 mt-2 pl-1 sm:pl-4">
                  <CheckCircle className="text-blue-500 dark:text-blue-400 mt-1" size={20} />
                  <div className="text-zinc-700 dark:text-zinc-300">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.institution}</p>
                    <p className="mt-1">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

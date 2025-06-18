// src/components/sections/JourneyHighlights.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Code,
  Github,
  Users,
  Rocket,
  MonitorSmartphone,
} from "lucide-react";

const highlights = [
  {
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    title: "Winner - TechFiesta '25",
    description:
      "Secured first place at TechFiesta 2025 with an AI-driven platform that impressed industry judges.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    title: "Hack4Bengal Finalist",
    description:
      "Selected and built solutions at Eastern India’s largest hackathon — competing with 1,000+ developers.",
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-indigo-500" />,
    title: "Stellar Bootcamp India Selection",
    description:
      "My project was chosen to represent India in the Stellar Blockchain Bootcamp — only 15 selected nationwide.",
  },
  {
    icon: <Github className="w-6 h-6 text-pink-500" />,
    title: "Open Source Contributor",
    description:
      "Actively contributed to KWOC (IIT KGP), GSSOC, Apetere AOT, and other open-source communities.",
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Mentored 500+ Students",
    description:
      "Led sessions at Coding Junction, mentoring students in web development, DSA, and open source.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function JourneyHighlights() {
  return (
    <section className="mt-20">
      <h3 className="text-2xl font-bold text-zinc-800 dark:text-zinc-100 mb-8">
        Milestones & Contributions
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((item, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <div className="flex items-center gap-4 mb-3">
              {item.icon}
              <h4 className="text-lg font-semibold">{item.title}</h4>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

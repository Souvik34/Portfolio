import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs,
  FaGitAlt, FaGithub, FaDocker, FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss, SiRedux, SiMongodb, SiPostgresql,
  SiFirebase, SiTypescript, SiExpress, SiVite,
  SiPrisma, SiNextdotjs, SiFigma, SiLinux, SiJest,
} from "react-icons/si";
import { DiPython, DiJava } from "react-icons/di";

const iconMap = {
  HTML: <FaHtml5 className="text-orange-500 w-8 h-8" />,
  CSS: <FaCss3Alt className="text-blue-500 w-8 h-8" />,
  JavaScript: <FaJs className="text-yellow-400 w-8 h-8" />,
  TypeScript: <SiTypescript className="text-blue-600 w-8 h-8" />,
  React: <FaReact className="text-cyan-400 w-8 h-8" />,
  Redux: <SiRedux className="text-purple-500 w-8 h-8" />,
  TailwindCSS: <SiTailwindcss className="text-sky-400 w-8 h-8" />,
  Vite: <SiVite className="text-purple-400 w-8 h-8" />,
  NextJS: <SiNextdotjs className="text-black dark:text-white w-8 h-8" />,
  "Node.js": <FaNodeJs className="text-green-600 w-8 h-8" />,
  Express: <SiExpress className="text-gray-700 dark:text-gray-300 w-8 h-8" />,
  MongoDB: <SiMongodb className="text-green-700 w-8 h-8" />,
  PostgreSQL: <SiPostgresql className="text-blue-700 w-8 h-8" />,
  Firebase: <SiFirebase className="text-yellow-500 w-8 h-8" />,
  Prisma: <SiPrisma className="text-indigo-600 w-8 h-8" />,
  Git: <FaGitAlt className="text-red-500 w-8 h-8" />,
  GitHub: <FaGithub className="text-black dark:text-white w-8 h-8" />,
  Docker: <FaDocker className="text-blue-500 w-8 h-8" />,
  AWS: <FaAws className="text-orange-400 w-8 h-8" />,
  Python: <DiPython className="text-yellow-500 w-8 h-8" />,
  Java: <DiJava className="text-red-600 w-8 h-8" />,
  Figma: <SiFigma className="text-pink-500 w-8 h-8" />,
  Linux: <SiLinux className="text-black dark:text-white w-8 h-8" />,
  Jest: <SiJest className="text-red-600 w-8 h-8" />,
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
};

export default function SkillCard({ name }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-2 bg-white dark:bg-zinc-900 shadow-md rounded-xl transition-transform duration-300 hover:scale-105"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {iconMap[name] || <FaJs className="text-gray-400 w-8 h-8" />}
      <p className="text-xs font-medium text-zinc-700 dark:text-zinc-200 mt-2 text-center">
        {name}
      </p>
    </motion.div>
  );
}

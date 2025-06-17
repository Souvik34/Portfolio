import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import TechStackBadge from "./TechStackBadge";

const techStack = [
  { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "React", Icon: SiReact, color: "#61DBFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
];

export default function ProjectCard({ title, description, image, github, showSource = false }) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-transform duration-300 hover:-translate-y-1">
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">{title}</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">{description}</p>

        <div className="flex items-center -space-x-4 mb-4">
          {techStack.map((tech, index) => (
            <div key={index} className="relative z-[10] hover:z-[20]">
              <TechStackBadge {...tech} />
            </div>
          ))}
        </div>

        {showSource && github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-zinc-800 transition"
          >
            <FaGithub className="text-lg" />
            Source
          </a>
        )}
      </div>
    </div>
  );
}

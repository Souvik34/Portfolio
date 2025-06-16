import React from "react";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs } from "react-icons/si";
import TechStackBadge from "./TechStackBadge";

const techStack = [
  { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
  { name: "Express", Icon: SiExpress, color: "#000000" },
  { name: "React", Icon: SiReact, color: "#61DBFB" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
];

export default function ProjectCard() {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden max-w-xl transition-transform duration-300 hover:-translate-y-1">
      <img
        src="https://via.placeholder.com/600x300?text=Project+Image"
        alt="Project Preview"
        className="w-full h-52 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">Project Title</h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          A brief description of your amazing MERN project goes here.
        </p>

        {/* Overlapping tech badges */}
        <div className="flex items-center -space-x-4">
          {techStack.map((tech, index) => (
            <div key={index} className="relative z-[10] hover:z-[20]">
              <TechStackBadge {...tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { FaGithub } from "react-icons/fa";
import TechStackBadge from "./TechStackBadge";

export default function ProjectCard({
  title,
  description,
  image,
  github,
  techStack = [],
  showSource = false,
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg border border-zinc-200 dark:border-zinc-700 overflow-hidden transition-transform duration-300 hover:-translate-y-1 h-[500px] flex flex-col">
      <img src={image} alt={title} className="w-full h-52 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold mb-2 text-zinc-800 dark:text-zinc-100">
          {title}
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="flex items-center mb-4">
  <div className="flex -space-x-3">
    {techStack.map((tech, index) => (
      <div
        key={index}
        className="relative z-[10] hover:z-20 transition-all"
        style={{ transition: "margin 0.3s ease" }}
      >
        <TechStackBadge {...tech} />
      </div>
    ))}
  </div>
</div>


        {showSource && github && (
          <div className="mt-auto">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-500 dark:border-blue-400 rounded-full hover:bg-blue-50 dark:hover:bg-zinc-800 transition"
            >
              <FaGithub className="text-lg" />
              Source
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

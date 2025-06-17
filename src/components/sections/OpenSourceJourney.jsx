import React from "react";
import { FaStar, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";

const openSourceProjects = [
  {
    name: "Hoppscotch",
    repo: "hoppscotch/hoppscotch",
    logo: "/hoppscotch.png",
    stars: "58.2k",
    contributions: "5 PRs",
    tech: ["Vue", "TypeScript", "Firebase"],
    link: "https://github.com/hoppscotch/hoppscotch",
  },
  {
    name: "Appwrite",
    repo: "appwrite/appwrite",
    logo: "/appwrite.png",
    stars: "35.1k",
    contributions: "3 Issues, 2 PRs",
    tech: ["Node.js", "Docker", "MongoDB"],
    link: "https://github.com/appwrite/appwrite",
  },
  {
    name: "EddieHub",
    repo: "EddieHubCommunity",
    logo: "/eddiehub.png",
    stars: "12.8k",
    contributions: "Community + Docs",
    tech: ["Markdown", "HTML", "Community"],
    link: "https://github.com/EddieHubCommunity",
  },
];

export default function OpenSourceJourney() {
  return (
    <section className="px-6 sm:px-10 md:px-20 pb-24">
      <h2 className="text-4xl font-semibold mb-12 px-2"> Open Source Journey</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {openSourceProjects.map((proj, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={proj.logo} alt={proj.name} className="w-10 h-10 rounded-full" />
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">
                  {proj.name}
                </h3>
                <p className="text-xs text-zinc-500">{proj.repo}</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-zinc-600 dark:text-zinc-400 mb-3">
              <span className="flex items-center gap-1">
                <FaStar className="text-yellow-400" /> {proj.stars}
              </span>
              <span className="flex items-center gap-1">
                <FaCodeBranch className="text-blue-500" /> {proj.contributions}
              </span>
            </div>

            <div className="flex flex-wrap gap-2 text-xs mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-zinc-200 dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 px-2 py-0.5 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1"
            >
              Visit <FaExternalLinkAlt size={12} />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

// src/components/sections/ProjectsSection.jsx
import React from "react";
import ProjectCard from "../ui/ProjectCard";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiStellar,
  SiGooglecloud,
} from "react-icons/si";

const projects = [
  {
    title: "Scribbly",
    description:
      "Scribbly - A secure and simple Notes API built with Node.js, Express, and MongoDB. Features JWT authentication and CRUD operations.",
    image: "https://via.placeholder.com/600x300?text=Scribbly",
    github: "https://github.com/Souvik34/Scribbly",
    techStack: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
    ],
  },
  {
    title: "Stellar Talk",
    description:
      "Stellar-Talk is a decentralized chat application (DApp) enabling users to communicate securely and transparently on the Stellar blockchain.",
    image: "https://via.placeholder.com/600x300?text=Stellar+Talk",
    github:
      "https://github.com/Souvik34/Soroban-Accelerated-Bootcamp-in-India-Final-Project",
    techStack: [
      { name: "Stellar", Icon: SiStellar, color: "#7D00FF" },
    ],
  },
  {
    title: "Conversational Chat Bot",
    description:
      "Uses Gemini Generative AI API to generate conversational responses based on input prompt and image.",
    image: "https://via.placeholder.com/600x300?text=Chat+Bot",
    github: "https://github.com/Souvik34/Gemini-Application",
    techStack: [
      { name: "Google AI", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "React", Icon: SiReact, color: "#61DBFB" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-10 md:px-20 pb-40">
      <h2 className="text-4xl font-semibold mb-10 px-2">Projects</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} showSource />
        ))}
      </div>
    </section>
  );
}

// src/components/sections/ProjectsSection.jsx
import React from "react";
import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "MERN Blog Platform",
    description: "A full-stack blog platform built using the MERN stack with user auth and markdown support.",
    tech: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "Task Manager App",
    description: "Track tasks and deadlines with this simple fullstack task manager.",
    tech: ["MongoDB", "Express", "React", "Node"]
  },
  {
    title: "Task Manager App",
    description: "Track tasks and deadlines with this simple fullstack task manager.",
    tech: ["MongoDB", "Express", "React", "Node"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="px-4 sm:px-10 md:px-20 pb-40">
      <h2 className="text-4xl font-semibold mb-10 px-2">Projects</h2>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
}

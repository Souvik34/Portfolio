// src/components/sections/ExperienceSection.jsx
import React from "react";

const experiences = [
  {
    org: "Coding Junction",
    logo: "/logos/coding-junction.png",
    role: "Executive Web Developer & Web3 Lead",
    duration: "Oct 2022 – Present · 2 yrs 9 mos",
    location: "UIT Burdwan · On-site",
    desc: "Leading Web3 and full-stack development, mentoring juniors, and driving frontend innovation."
  },
  {
    org: "Cloud Native Hooghly",
    logo: "/logos/cnh.png",
    role: "Core Technical Member",
    duration: "May 2024 – Present · 1 yr 2 mos",
    location: "India",
    desc: "Working with Kubernetes, Docker, and DevOps stacks under CNCF projects."
  },
  {
    org: "Indian Railways",
    logo: "/logos/railways.png",
    role: "MERN Stack Intern",
    duration: "Jun 2024 – Jul 2024 · 2 mos",
    location: "East Coast Railways · On-site",
    desc: "Built scalable internal tools using React, Express, MongoDB, and Tailwind."
  },
  {
    org: "Rise In",
    logo: "/logos/risein.png",
    role: "Campus Maven",
    duration: "Nov 2023 – Aug 2024 · 10 mos",
    location: "India · On-site",
    desc: "Promoted blockchain education, built smart contracts with Solidity and Rust."
  },
];

export default function Experience() {
  return (
    <section className="px-6 sm:px-10 md:px-20 pb-24">
      <h2 className="text-4xl font-semibold mb-16 px-2">Work Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
            {/* Left: Logo & Role */}
            <div className="flex items-start gap-4">
              <img src={exp.logo} alt={exp.org} className="w-12 h-12 rounded-full object-cover" />
              <div>
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-sm text-zinc-500">{exp.org} · {exp.location}</p>
                <p className="mt-1 text-zinc-600 dark:text-zinc-400 text-sm">{exp.desc}</p>
              </div>
            </div>

            {/* Right: Duration */}
            <div className="text-sm text-zinc-400 whitespace-nowrap pt-1 md:pt-0">
              {exp.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

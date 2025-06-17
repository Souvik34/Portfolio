/* eslint-disable no-unused-vars */
import React from "react";
import ProjectCard from "../components/ui/ProjectCard"; 
import { motion } from "framer-motion";
import ProjectList from "../data/ProjectList"; 
import Footer from "../components/ui/Footer";
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Projects() {
  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        {/* Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 text-left">
            My <span className="text-blue-500 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-left">
            I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems. 
            With expertise in full-stack development, I enjoy building user-centric applications that make a difference.
          </p>
        </motion.div>

        {/* Projects Grid with Animation */}
        <motion.div
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {ProjectList.map((project, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                github={project.github}
                showSource={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    
    </section>
  );
}

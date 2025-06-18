import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Education from "../data/Education";
import skills from "../data/Skills";
import { CheckCircle } from "lucide-react";
import SkillCard from "../components/ui/SkillCard";
import {DraggableCard} from "../components/ui/DraggableCard";
import JourneyHighlights from "../components/sections/JourneyHighlights";


// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function About() {
  return (
    <section className="min-h-screen py-20 px-6 sm:px-10 lg:px-20 bg-zinc-50 dark:bg-zinc-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-800 dark:text-zinc-100 mb-4 text-left">
            About <span className="text-blue-500 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-left">
            I'm a passionate software engineer dedicated to crafting elegant solutions for complex problems.
            With expertise in full-stack development, I enjoy building user-centric applications that make a difference.
          </p>
        </motion.div>

        {/* Education */}
   <div className="space-y-12">
  <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">Education</h3>
  {Education.map((item, index) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    return (
      <motion.div
        ref={ref}
        key={index}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative"
      >
        {/* Year Bar */}
        <div className="bg-blue-500 dark:bg-blue-400 text-white px-4 py-2 rounded-md w-fit font-semibold text-lg">
          {item.year}
        </div>

        {/* Logo + Content */}
        <div className="flex items-start gap-4 mt-2 pl-1 sm:pl-4">
          {item.logo && (
            <img
              src={item.logo}
              alt={`${item.institution} logo`}
              className="w-12 h-12 object-contain rounded-md border shadow-sm"
            />
          )}

          <div className="text-zinc-700 dark:text-zinc-300">
            <h3 className="font-semibold text-lg">{item.title}</h3>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.institution}</p>
            <p className="mt-1 text-sm">{item.description}</p>
          </div>
        </div>
      </motion.div>
    );
  })}
</div>



        {/* Skills */}
        <motion.div
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
        >
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <SkillCard name={skill.name} Icon={skill.Icon} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey & Involvements */}
<JourneyHighlights />


         {/* Draggable Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-8 text-center">
            Characters & Places That Inspire Me
          </h3>
          <DraggableCard />
        </motion.div>
      </div>

      
    </section>
     
  );
}

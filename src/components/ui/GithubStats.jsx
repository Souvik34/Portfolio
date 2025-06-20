import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const GitHubStats = () => {
  const username = "Souvik34";

  const [refStats, inViewStats] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refStreak, inViewStreak] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refGraph, inViewGraph] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full py-12 px-4 md:px-12 text-center bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">
        GitHub Activity
      </h2>

      <div className="flex flex-col items-center space-y-10">
       

        {/* GitHub Activity Graph */}
        <motion.div
          ref={refGraph}
          variants={fadeIn}
          initial="hidden"
          animate={inViewGraph ? "visible" : "hidden"}
          className="w-full max-w-4xl"
        >
          <img
            src={`https://github-readme-activity-graph.vercel.app/graph?username=${username}&theme=github-compact`}
            alt="GitHub Contribution Graph"
            className="rounded-xl shadow-lg w-full"
            loading="lazy"
          />
        </motion.div>

        {/* GitHub Button */}
        <motion.a
          href={`https://github.com/${username}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 mt-6 px-6 py-2 text-white bg-gray-800 dark:bg-white dark:text-black font-semibold rounded-xl transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="inline-block"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.39 7.86 10.93.58.1.79-.25.79-.56v-2.03c-3.2.7-3.87-1.53-3.87-1.53-.53-1.35-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.77 2.74 1.26 3.41.96.1-.76.4-1.26.72-1.55-2.55-.29-5.23-1.27-5.23-5.67 0-1.25.44-2.27 1.17-3.07-.12-.28-.51-1.42.11-2.96 0 0 .96-.31 3.15 1.17A10.88 10.88 0 0112 6.8c.98.01 1.96.13 2.87.38 2.18-1.48 3.14-1.17 3.14-1.17.62 1.54.23 2.68.11 2.96.73.8 1.16 1.82 1.16 3.07 0 4.41-2.69 5.37-5.25 5.66.41.35.77 1.03.77 2.07v3.07c0 .31.21.67.8.56A10.51 10.51 0 0023.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
          View My GitHub
        </motion.a>
      </div>
    </section>
  );
};

export default GitHubStats;

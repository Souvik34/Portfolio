import React from "react";
import { FaExternalLinkAlt, FaUserFriends, FaTrophy, FaCode, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

const careerHighlights = [{
    type: "Hackathon",
    title: "TechFiesta 2k24 Winner",
    subtitle: "1st Place",
    logo: "/tf.png",
    description: "Built a decentralized medical record system in 24 hours.",
    link: "#",
  },
  {
    type: "Hackathon",
    title: "Hack4Bengal Finalist",
    subtitle: "Eastern India's Largest Hackathon",
    logo: "/h4b.jpg",
    description: "Finalist among 1000+ teams. Built a Smart Agri Monitoring System.",
    link: "#",
  },
  {
    type: "Bootcamp",
    title: "Stellar Bootcamp India",
    subtitle: "Project Selected",
    logo: "/stellar.png",
    description: "Selected for building a product on Stellar blockchain by Indian cohort.",
    link: "https://stellar.org",
  },];

const iconByType = {
  Hackathon: <FaTrophy className="text-yellow-400" />,
  Bootcamp: <FaRocket className="text-purple-500" />,
  "Open Source": <FaCode className="text-green-500" />,
  Mentorship: <FaUserFriends className="text-blue-400" />,
};

export default function Highlights() {
  return (
    <section className="px-6 sm:px-10 md:px-20 pb-24">
      <h2 className="text-4xl font-semibold mb-12 px-2">Tech Journey Highlights</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {careerHighlights.slice(0, 6).map((item, index) => (
          <div
            key={index}
            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-md transition-transform duration-300 hover:scale-105"
          >
            <div className="flex items-center gap-3 mb-4">
              <img src={item.logo} alt={item.title} className="w-10 h-10 rounded-full object-contain" />
              <div>
                <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100">{item.title}</h3>
                <p className="text-xs text-zinc-500">{item.subtitle}</p>
              </div>
            </div>

            <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">{item.description}</p>

            <div className="flex justify-between items-center text-sm text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-1 font-medium">
                {iconByType[item.type]} {item.type}
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Visit <FaExternalLinkAlt size={12} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="mt-10 flex justify-center">
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-600 text-white dark:bg-blue-500 font-medium shadow hover:scale-105 transition-transform duration-300"
        >
          See More <FaExternalLinkAlt className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}

// src/data/highlightData.js
import {
  Trophy,
  Rocket,
  MonitorSmartphone,
  Github,    
  Users,
} from "lucide-react";

const highlightData = [
  {
    icon: <Trophy className="w-6 h-6 text-yellow-500" />,
    title: "Winner - TechFiesta '25",
    description: "Secured first place at TechFiesta 2025 with an AI-driven platform that impressed industry judges.",
    category: "Hackathon",
    tags: ["AI", "Innovation", "Product Design"],
  },
  {
    icon: <Rocket className="w-6 h-6 text-purple-500" />,
    title: "Hack4Bengal Finalist",
    description: "Selected and built solutions at Eastern India’s largest hackathon — competing with 1,000+ developers.",
    category: "Hackathon",
    tags: ["Teamwork", "UI/UX", "Problem Solving"],
  },
  {
    icon: <MonitorSmartphone className="w-6 h-6 text-indigo-500" />,
    title: "Stellar Bootcamp India Selection",
    description: "My project was chosen to represent India in the Stellar Blockchain Bootcamp — only 15 selected nationwide.",
    category: "Bootcamp",
    tags: ["Blockchain", "Stellar", "Global"],
  },
  {
    icon: <Github className="w-6 h-6 text-pink-500" />,
    title: "Open Source Contributor",
    description: "Actively contributed to KWOC (IIT KGP), GSSOC, Apetere AOT, and other open-source communities.",
    category: "Open Source",
    tags: ["Community", "Docs", "PRs"],
  },
  {
    icon: <Users className="w-6 h-6 text-green-600" />,
    title: "Mentored 500+ Students",
    description: "Led sessions at Coding Junction, mentoring students in web development, DSA, and open source.",
    category: "Mentorship",
    tags: ["DSA", "Mentorship", "Web Dev"],
  },
];

export default highlightData;

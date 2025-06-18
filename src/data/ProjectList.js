import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiEthereum,
  SiStellar,
  SiGooglecloud,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
  SiNextdotjs,
  SiRedux,
  SiPostgresql,
  SiBootstrap,
  SiTypescript,
} from "react-icons/si";

const ProjectList = [
  {
    title: "TaskMate",
    description: "TaskMate - A simple and efficient to-do list app to organize your tasks, set priorities, and stay productive. Keep track of your daily goals with an intuitive and user-friendly interface.",
    image: "./taskmate.png",
    github: "https://github.com/Souvik34/TaskMate",
    techStack: [
      { name: "React", Icon: SiReact, color: "#61DBFB" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Scribbly",
    description: "Scribbly - A secure and simple Notes API built with Node.js, Express, and MongoDB. Features JWT authentication, CRUD operations, and user-specific data management for a seamless note-taking experience.",
    image: "https://via.placeholder.com/600x300?text=Scribbly",
    github: "https://github.com/Souvik34/Scribbly",
    techStack: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
    ],
  },
  {
    title: "Second Innings",
    description: "Second Innings is a web application that simplifies finding old-age homes and introduces a unique Parent Adoption feature, bridging the gap between elderly individuals and compassionate families.",
    image: "https://via.placeholder.com/600x300?text=Second+Innings",
    github: "https://github.com/Souvik34/Second-innings",
    techStack: [
      { name: "React", Icon: SiReact, color: "#61DBFB" },
      { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
    ],
  },
  {
    title: "Stellar Talk",
    description: "Stellar-Talk is a decentralized chat application (DApp) enabling users to communicate securely and transparently on the Stellar blockchain.",
    image: "https://via.placeholder.com/600x300?text=Stellar+Talk",
    github: "https://github.com/Souvik34/Soroban-Accelerated-Bootcamp-in-India-Final-Project",
    techStack: [
      { name: "Stellar", Icon: SiStellar, color: "#7D00FF" },
    ],
  },
  {
    title: "Subscription Tracker API",
    description: "A backend API service to track user subscriptions, billing cycles, and renewal dates securely.",
    image: "https://via.placeholder.com/600x300?text=Subscription+Tracker",
    github: "https://github.com/Souvik34/Subscription-tracker-api",
    techStack: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
    ],
  },
  {
    title: "Closed User Management System",
    description: "A CUG management system using the MERN stack. Allows users to create, manage, and view CUG groups for discounted or free calls and SMS within a group.",
    image: "https://via.placeholder.com/600x300?text=CUG+System",
    github: "https://github.com/Souvik34/CUG-In-Railway",
    techStack: [
      { name: "MongoDB", Icon: SiMongodb, color: "#4DB33D" },
      { name: "Express", Icon: SiExpress, color: "#000000" },
      { name: "React", Icon: SiReact, color: "#61DBFB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
    ],
  },
  {
    title: "Todo-List In Blockchain",
    description: "A decentralized task management system built on Ethereum, allowing users to manage tasks securely via blockchain and MetaMask.",
    image: "https://via.placeholder.com/600x300?text=Blockchain+Todo",
    github: "https://github.com/Souvik34/Todo-List-in-Blockchain",
    techStack: [
      { name: "Ethereum", Icon: SiEthereum, color: "#3C3C3D" },
      { name: "React", Icon: SiReact, color: "#61DBFB" },
    ],
  },
  {
    title: "Conversational Chat Bot",
    description: "Uses Gemini Generative AI API to generate conversational responses based on input prompt and image.",
    image: "https://via.placeholder.com/600x300?text=Chat+Bot",
    github: "https://github.com/Souvik34/Gemini-Application",
    techStack: [
      { name: "Google AI", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "React", Icon: SiReact, color: "#61DBFB" },
    ],
  },
  {
    title: "ATS System",
    description: "A Streamlit app acting as an ATS to evaluate resumes using Google’s Gemini-pro-vision AI based on job descriptions.",
    image: "https://via.placeholder.com/600x300?text=ATS+System",
    github: "https://github.com/Souvik34/ATS-System",
    techStack: [
      { name: "Google AI", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "Python", Icon: SiGooglecloud, color: "#FFD43B" },
    ],
  },
  {
    title: "Rev.ai",
    description: "RevAI is an AI-powered code reviewer that analyzes your code for bugs, style issues, and best practices right from your pull requests.",
    image: "https://via.placeholder.com/600x300?text=Rev.ai",
    github: "https://github.com/Souvik34/Rev.ai",
    techStack: [
      { name: "React", Icon: SiReact, color: "#61DBFB" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
    ],
  },
];

export default ProjectList;

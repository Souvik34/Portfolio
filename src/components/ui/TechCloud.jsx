/* eslint-disable no-unused-vars */
import { noop } from "framer-motion";
import { IconCloud } from "../../components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodejs",
  "express",
  "prisma",
  "amazonaws",
  "firebase",
  "vercel",
    "netlify",
    "mongodb",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
    "tailwindcss",
    "bootstrap",
    "sass",
    "postman",
    "graphql",
    "solidity",
    "kubernetes",
    "C",
  "cpp",    
    "python",
    ".NET",
  "figma",
    "materialui",
    "appwrite",
    "linux",
    "csharp",

];

export function TechCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="w-full px-4 py-8">
      <IconCloud images={images} />
    </div>
  );
}

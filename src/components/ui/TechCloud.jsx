import { IconCloud } from "../../components/magicui/icon-cloud";

const slugs = [
  "typescript", "javascript", "java", "react", "html5", "css3", "nodejs",
  "express", "prisma", "amazonaws", "firebase", "vercel", "netlify", "mongodb",
  "docker", "git", "jira", "github", "gitlab", "visualstudiocode", "tailwindcss",
  "bootstrap", "sass", "postman", "graphql", "solidity", "kubernetes", "C",
  "cpp", "python", ".NET", "figma", "materialui", "appwrite", "linux", "csharp",
];

export function TechCloud() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <div className="w-full flex justify-center items-center px-4 py-6 sm:py-10">
      <div className="w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px]">
        <IconCloud images={images} />
      </div>
    </div>
  );
}

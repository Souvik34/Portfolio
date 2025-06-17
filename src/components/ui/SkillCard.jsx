import React from "react";
import {
  Code2,
  FileCode,
  FileText,
  Braces,
  Github,
  Server,
  Database,
  GitBranch,
} from "lucide-react";

const iconMap = {
  HTML: <FileCode className="text-orange-500 w-8 h-8" />,
  CSS: <FileText className="text-blue-500 w-8 h-8" />,
  JavaScript: <Braces className="text-yellow-400 w-8 h-8" />,
  React: <Code2 className="text-cyan-400 w-8 h-8" />,
  "Node.js": <Server className="text-green-600 w-8 h-8" />,
  MongoDB: <Database className="text-green-700 w-8 h-8" />,
  Git: <GitBranch className="text-red-500 w-8 h-8" />,
};

export default function SkillCard({ name }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white dark:bg-zinc-900 shadow-md rounded-xl transition-transform duration-300 hover:scale-105">
      {iconMap[name] || <Code2 className="text-gray-400 w-8 h-8" />}
      <p className="text-sm font-medium text-zinc-700 dark:text-zinc-200 mt-2">
        {name}
      </p>
    </div>
  );
}

import { TechCloud } from "../ui/TechCloud";

export default function Techstack() {
  return (
    <section
      id="tech-stack"
      className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16 sm:py-20"
    >
      <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-6 sm:mb-10 text-zinc-800 dark:text-zinc-100">
        My <span className="text-blue-500 dark:text-blue-400">Tools</span>
      </h2>
      
      <div className="w-full">
        <TechCloud />
      </div>
    </section>
  );
}

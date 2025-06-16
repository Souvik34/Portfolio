import { TechCloud } from "../ui/TechCloud";

export default function Techstack() {
  return (
    <section id="tech-stack" className="px-4 sm:px-10 md:px-20 py-20">
      <h2 className="text-4xl font-semibold mb-12 px-2 text-center">
        Tech Stack
      </h2>
      <div className="w-full h-[500px]">
        <TechCloud />
      </div>
    </section>
  );
}

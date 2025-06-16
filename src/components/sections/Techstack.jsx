import { TechCloud } from "../ui/TechCloud";

export default function Techstack() {
  return (
    <section id="tech-stack" className="px-4 sm:px-10 md:px-20">
      <h2 className="text-4xl font-semibold px-2 text-center mb-4">
        My tools
      </h2>
      <div className="w-full mt-0">
        <TechCloud />
      </div>
    </section>
  );
}

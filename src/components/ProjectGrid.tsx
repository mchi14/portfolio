import { ProjectCard } from "./ProjectCard";
import { useState } from "react";
import { projects } from "./projects";

const categories = {
  fullstack: "Full-Stack Applications",
  prototypes: "Prototypes & System Design",
};

export const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState<keyof typeof projects>("fullstack");

  return (
    <div className="max-w-7xl mx-auto px-3 md:px-8">
      <div className="flex flex-wrap gap-2 md:gap-4 mb-4 md:mb-8">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as keyof typeof projects)}
            className={`px-3 md:px-4 py-1.5 md:py-2 text-sm md:text-base rounded-lg transition-colors ${
              activeCategory === key
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300 text-gray-800"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-10">
        {projects[activeCategory]
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </div>
  );
};
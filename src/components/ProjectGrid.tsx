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
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="flex flex-wrap gap-4 mb-8">
        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key as keyof typeof projects)}
            className={`px-4 py-2 rounded-lg transition-colors ${activeCategory === key
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300 text-gray-800"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
        {projects[activeCategory]
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
      </div>
    </div>
  );
};
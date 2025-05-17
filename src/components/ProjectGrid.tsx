import { ProjectCard } from "./ProjectCard";
import { projects } from "./projects";

export const ProjectGrid = () => {
  // Combine all projects and sort by order
  const allProjects = [...projects.fullstack, ...projects.prototypes].sort((a, b) => a.order - b.order);

  return (
    <div className="max-w-[90rem] mx-auto px-4 md:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
        {allProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
};
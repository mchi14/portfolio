import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "./ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const ProjectCard = ({ title, description, image, technologies, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="group relative overflow-hidden rounded-lg md:rounded-xl bg-[#1a1a1a] p-3 md:p-4 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30">
      <div className="aspect-video w-full overflow-hidden rounded-md md:rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="mt-3 md:mt-4 space-y-2 md:space-y-3">
        <h3 className="text-lg md:text-xl font-semibold text-gray-100">{title}</h3>
        <p className="text-sm md:text-base text-gray-400 leading-relaxed">{description}</p>
        
        <div className="flex flex-wrap gap-1.5 md:gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="rounded-full bg-[#252525] px-2 md:px-3 py-0.5 md:py-1 text-xs md:text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 md:gap-4 pt-1 md:pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
            >
              GitHub →
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs md:text-sm text-gray-400 hover:text-white transition-colors"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
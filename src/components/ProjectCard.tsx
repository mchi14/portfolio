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
    <div className="group relative overflow-hidden rounded-xl bg-[#1a1a1a] p-4 transition-all hover:scale-[1.02] hover:shadow-xl hover:shadow-black/30">
      <div className="aspect-video w-full overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      
      <div className="mt-4 space-y-3">
        <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
        <p className="text-gray-400">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="rounded-full bg-[#252525] px-3 py-1 text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            GitHub →
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors"
          >
            Live Demo →
          </a>
        </div>
      </div>
    </div>
  );
};
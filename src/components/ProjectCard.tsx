import { Github, ExternalLink } from "lucide-react";

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
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-b from-zinc-900/50 to-zinc-900/30 backdrop-blur-sm border border-zinc-800/50 hover:border-zinc-700/50 transition-all duration-300 hover:shadow-2xl hover:shadow-zinc-900/20">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-5 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span 
              key={tech} 
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 pt-2 border-t border-zinc-800/50">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors group/link"
            >
              <Github className="h-4 w-4" />
              <span className="group-hover/link:text-blue-400">Code</span>
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors group/link"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="group-hover/link:text-emerald-400">Live</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
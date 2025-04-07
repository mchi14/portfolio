import { ProjectCard } from "./ProjectCard";
import { useState } from "react";

const projects = {
  fullstack: [
    {
      title: "Stay-Vista",
      description: "A travel booking website",
      image: "/vista.jpeg",
      technologies: ["React", "Tailwind CSS", "Nodejs", "MongoDB", "Express"],
      githubUrl: "https://github.com/chistym17/vista",
      liveUrl: "https://vista-omega.vercel.app/",
      order: 1
    },
    {
      title: "Docu-Mind",
      description: "A text,image,link extraction tool",
      image: "/documind.jpeg",
      technologies: ["Next.js", "FastAPI", "python", "MongoDB"],
      githubUrl: "https://github.com/chistym17/document-parser-backend",
      liveUrl: "https://document-parser-ten.vercel.app/",
      order: 3
    },
    {
      title: "Gradia",
      description: "A platform for students and teachers to manage their assignments and projects",
      image: "/gradia.jpeg",
      technologies: ["React", "Express", "MongoDB", "Nodejs"],
      githubUrl: "https://github.com/chistym17/gradia",
      liveUrl: "https://gradia-ochre.vercel.app/",
      order: 2
    },
    {
      title: "YouVid",
      description: "A simple clone of Youtube",
      image: "/youvid.jpeg",
      technologies: ["javascript", "html", "css"],
      githubUrl: "https://github.com/chistym17/YouVid",
      liveUrl: "https://polite-semifreddo-b98601.netlify.app/",
      order: 4
    },
    {
      title: "skyla",
      description: "A simple chat application",
      image: "/skyla.jpeg",
      technologies: ["React", "Node.js", "MongoDB", "socket.io"],
      githubUrl: "https://github.com/chistym17/skyla-app",
      liveUrl: "https://skyla-7t80.onrender.com/",
      order: 5
    },
    {
      title: "czscup",
      description: "A football organization website for a college",
      image: "/czs.jpeg",
      technologies: ["next.js", "Node.js", "MongoDB", "Express"],
      githubUrl: "https://github.com/chistym17/czs-frontend",
      liveUrl: "https://czs-frontend-git-farhan-chisty17s-projects.vercel.app/",
      order: 6
    }
  ],
  // mlmodels: [
  //   {
  //     title: "ANN Model",
  //     description: "A simple ANN model",
  //     image: "/ml/ann.png",
  //     technologies: ["Python", "TensorFlow", "Streamlit"],
  //     githubUrl: "https://github.com/chistym17/ANN-implementation",
  //     liveUrl: "https://ann-implementation.streamlit.app",
  //     order: 1
  //   },
  //   {
  //     title: "RNN Model",
  //     description: "RNN implementation for sentiment analysis",
  //     image: "/ml/rnn.png",
  //     technologies: ["Python", "TensorFlow", "Streamlit", 'word2vec'],
  //     githubUrl: "https://github.com/chistym17/RNN-model",
  //     liveUrl: "https://rnn-model.streamlit.app",
  //   }
  // ],
  prototypes: [
    {
      title: "CLI to search for words",
      description: "Command-line tool to search for words",
      image: "/cli.jpeg",
      technologies: ["Rust"],
      githubUrl: "https://github.com/chistym17/CLI-in-rust",
      order: 1
    },
    {
      title: "Redis Cache Implementation",
      description: "Custom caching system prototype",
      image: "/redis.jpeg",
      technologies: ["Rust"],
      githubUrl: "https://github.com/chistym17/Redis-Prototype--in-rust",
    }
  ],
};

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
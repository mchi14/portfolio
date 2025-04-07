import { Button } from "@/components/ui/button";
import { Mail, FileDown } from "lucide-react";

export const AboutMe = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-white">Hi, I&apos;m Chisty</h1>
          <p className="text-lg text-gray-300">
            I am Mynuddin Chisty, a Full Stack Developer specializing in modern web technologies.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white">About Me</h3>
        </div>

        <ul className="space-y-2 text-gray-300">
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Currently working as an SDE Intern at MindtideAI, USA (Remote Position)
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Full stack developer with 1+ year of experience
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Student of Computer Science Engineering
          </li>
          <li className="flex items-center gap-2">
            <span className="text-primary">•</span>
            Learning Machine Learning and Generative AI
          </li>

        </ul>

        <div className="flex gap-4 pt-4">
          <Button 
            className="flex items-center gap-2"
            onClick={() => window.open("https://drive.google.com/file/d/1oJhPvxKm_IPAWcig1qKCcDO1OMfW1coO/view?usp=sharing", "_blank")}
          >
            <FileDown className="h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

    </div>
  );
}; 
import { Button } from "@/components/ui/button";
import { Mail, FileDown } from "lucide-react";

export const AboutMe = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start">
      <div className="space-y-4 md:space-y-6">
        <div className="space-y-2 md:space-y-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white">Hi, I&apos;m Chisty</h1>
          <p className="text-sm md:text-lg text-gray-300 leading-relaxed">
            I am Mynuddin Chisty, a Full Stack Developer specializing in modern web technologies.
          </p>
        </div>

        <div className="space-y-2 md:space-y-4">
          <h3 className="text-lg md:text-2xl font-semibold text-white">About Me</h3>
        </div>

        <ul className="space-y-1.5 md:space-y-2 text-sm md:text-base text-gray-300">
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
            <span>Ex-SDE Intern at MindtideAI, USA (Remote Position)</span>
          </li>
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
            <span>Full stack developer with 1+ year of experience</span>
          </li>
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
            <span>Student of Computer Science Engineering</span>
          </li>
          <li className="flex items-start gap-2 leading-relaxed">
            <span className="text-primary mt-1.5 flex-shrink-0">•</span>
            <span>Learning Machine Learning and Generative AI</span>
          </li>
        </ul>

        <div className="flex gap-3 md:gap-4 pt-2 md:pt-4">
          <Button
            className="flex items-center gap-1.5 md:gap-2 text-sm md:text-base h-8 md:h-10 px-3 md:px-4"
            onClick={() => window.open("https://drive.google.com/file/d/126kPqMFyxXknAeOxvSPfIwpZ5S6_nJQD/view?usp=sharing", "_blank")}
          >
            <FileDown className="h-3.5 w-3.5 md:h-4 md:w-4" />
            Download Resume
          </Button>
        </div>
      </div>
    </div>
  );
}; 
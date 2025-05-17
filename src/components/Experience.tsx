import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const experiences = [
  {
    title: "Full Stack Developer (Intern)",
    company: "MindtideAI",
    location: "USA",
    period: "October 2024 - March 2025",
    techStack: ["Python", "FastAPI", "Next.js", "MongoDB", "AWS"],
    description: [
      "Led the development of third-party integrations for SiteBot (AI Chatbot), successfully implementing Zendesk, Zoho, and Google Chat integrations",
      "Enhanced crawler performance by optimizing sitemap fetching and implementing support for both static and dynamic websites",
      "Architected and implemented AI agents workflow to improve chatbot response quality and follow-up question capabilities",
      "Developed specialized chatbot variants for lead generation and sales automation",
      "Designed and built responsive integration interfaces and customizable bot appearance settings",
    ],
  },
];

export const Experience = () => {
  return (
    <div className="grid gap-4 md:gap-6">
      {experiences.map((exp, index) => (
        <Card key={index} className="animate-fade-in border border-zinc-800 bg-zinc-900/50">
          <CardHeader className="space-y-3 md:space-y-4 p-4 md:p-6">
            <div className="space-y-2 md:space-y-3">
              <CardTitle className="text-lg md:text-xl font-bold text-white">
                {exp.title}
              </CardTitle>
              <div className="text-xs md:text-sm text-white/80 font-medium">
                {exp.company} • {exp.location} • {exp.period}
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2 pt-1 md:pt-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 md:py-1 text-[10px] md:text-xs font-medium rounded-full bg-blue-500/10 text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-4 md:p-6 pt-0">
            <ul className="space-y-2 md:space-y-3">
              {exp.description.map((item, i) => (
                <li key={i} className="flex gap-2 text-xs md:text-sm text-gray-300 leading-relaxed">
                  <span className="text-primary mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
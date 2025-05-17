import { ProjectGrid } from "@/components/ProjectGrid";
import { Experience } from "@/components/Experience";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AboutMe } from "@/components/AboutMe";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-[#141414]">
      <main className="min-h-screen">
        <div className="p-4 md:p-8">
          <Tabs defaultValue="about" className="w-full flex flex-col items-center">
            <TabsList className="mb-8 p-1 text-lg bg-zinc-800/80 backdrop-blur-sm rounded-lg">
              <TabsTrigger value="about" className="px-4 md:px-6 py-2 text-sm md:text-base text-white">About Me</TabsTrigger>
              <TabsTrigger value="experience" className="px-4 md:px-6 py-2 text-sm md:text-base text-white">Experience</TabsTrigger>
              <TabsTrigger value="projects" className="px-4 md:px-6 py-2 text-sm md:text-base text-white">Projects</TabsTrigger>
            </TabsList>
            <div className="w-full max-w-7xl mx-auto">
              <TabsContent value="about" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-secondary-foreground">About Me</h2>
                  <AboutMe />
                </motion.div>
              </TabsContent>
              <TabsContent value="experience" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent rounded-2xl -z-10 blur-2xl" />
                  <div className="relative bg-zinc-900/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-zinc-800/50 shadow-xl">
                    <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-secondary-foreground">My Experience</h2>
                    <Experience />
                  </div>
                </motion.div>
              </TabsContent>
              <TabsContent value="projects" className="mt-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-secondary-foreground">My Projects</h2>
                  <ProjectGrid />
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

export default Index;
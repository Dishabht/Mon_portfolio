import ProjectsSection from "@/composents/sections/ProjectsSection";
import Hero from "@/composents/sections/Hero"
import About from "@/composents/sections/About"
import CompetenceList from "@/composents/sections/CompetenceList"
import Skill from "@/composents/sections/Skill"
import Contact from "@/composents/sections/Contact"



export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      
      <Hero />     
      <About />
      <CompetenceList />
      <Skill />
      <ProjectsSection />

      <Contact />
      
    </main>
  );
}
import Hero from "@/composents/sections/Hero";
import LogoStrip from "@/composents/sections/LogoStrip";
import APropos from "@/composents/sections/APropos";
import CompetenceList from "@/composents/sections/CompetenceList";
import Contact from "@/composents/sections/Contact";

export default function Home() {
  return (
    <main>
      <div style={{ minHeight: "100vh", width: "100%", display: "flex", flexDirection: "column" }}>
        <Hero />
        <LogoStrip />
      </div>
      <APropos />
      <CompetenceList />
      <Contact />
    </main>
  );
}

import Hero from "@/composents/sections/Hero";
import LogoStrip from "@/composents/sections/LogoStrip";
import CompetenceList from "@/composents/sections/CompetenceList";

export default function Home() {
  return (
    <main>
      <div style={{ height: "100vh", overflow: "hidden", display: "flex", flexDirection: "column" }}>
        <Hero />
        <LogoStrip />
      </div>
      <CompetenceList />
    </main>
  );
}

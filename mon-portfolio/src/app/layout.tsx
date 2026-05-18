import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/composents/layout/Navbar";
import Footer from "@/composents/layout/Footer";
import ParticlesBackground from "@/composents/ui/ParticulesBackground";

export const metadata: Metadata = {
  title: "Hanah — Développeuse Web Junior",
  description: "Portfolio de Hanah, développeuse web junior en recherche de stage.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        {/* Particules sur tout le site */}
        <ParticlesBackground />

        {/* Contenu au dessus des particules */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
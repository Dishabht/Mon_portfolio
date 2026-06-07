import type { Metadata } from "next";
import { Inter, Playfair_Display, Space_Grotesk, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "@/composents/layout/Navbar";
import Footer from "@/composents/layout/Footer";
import CustomCursor from "@/composents/ui/CustomCursor";

const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500"],
  variable: "--font-playfair",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Disha.BHT — Portfolio BUT3",
  description: "Portfolio de compétences BUT3 Informatique, Parcours A – RACDV, IUT Créteil-Vitry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${spaceGrotesk.variable} ${inter.variable} ${syne.variable}`}>
      <body>
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

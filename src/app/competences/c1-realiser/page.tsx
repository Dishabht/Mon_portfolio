import CompetencePage from "@/composents/sections/CompetencePage";
import TracesC1 from "@/composents/sections/TracesC1";

const niveaux = [
  {
    id: "inter",
    label: "Niveau intermédiaire",
    description:
      "Partir des exigences et aller jusqu'à une application complète.",
    acs: [
      { num: "AC1", texte: "Élaborer et implémenter les spécifications fonctionnelles et non fonctionnelles à partir des exigences" },
      { num: "AC2", texte: "Appliquer des principes d'accessibilité et d'ergonomie" },
      { num: "AC3", texte: "Adopter de bonnes pratiques de conception et de programmation" },
      { num: "AC4", texte: "Vérifier et valider la qualité de l'application par les tests" },
    ],
  },
  {
    id: "conf",
    label: "Niveau confirmé",
    description:
      "Adapter des applications sur un ensemble de supports variés (embarqué, web, mobile, IoT…).",
    acs: [
      { num: "AC1", texte: "Choisir et implémenter les architectures adaptées" },
      { num: "AC2", texte: "Faire évoluer une application existante" },
      { num: "AC3", texte: "Intégrer des solutions dans un environnement de production" },
    ],
  },
];

export default function C1Page() {
  return (
    <CompetencePage
      num="C1"
      eyebrow="COMPÉTENCE 01 · UE5.1 / UE6.1"
      titre="Réaliser un développement d'application"
      sousTitre="Adapter des applications sur un ensemble de supports variés"
      niveaux={niveaux}
      traces={[]}
      activeNav="C1"
      tracesNode={<TracesC1 />}
    />
  );
}

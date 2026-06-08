export interface Competence {
  id: string;
  index: string;
  titre: string;
  sousTitre: string;
  tags: string[];
  href: string;
}

export const competences: Competence[] = [
  {
    id: "c1",
    index: "C — 01",
    titre: "Réaliser un développement d'application",
    sousTitre: "UE5.1 / UE6.1 · Adapter sur supports variés",
    tags: ["SAé 6.05", "SAé 6.06", "Stage"],
    href: "/competences/c1-realiser",
  },
  {
    id: "c2",
    index: "C — 02",
    titre: "Optimiser des applications",
    sousTitre: "UE5.2 / UE6.2 · Analyser et optimiser",
    tags: ["SAé 6.05", "SAé 6.06", "Stage"],
    href: "/competences/c2-optimiser",
  },
  {
    id: "c6",
    index: "C — 06",
    titre: "Collaborer au sein d'une équipe informatique",
    sousTitre: "UE5.6 / UE6.6 · Manager une équipe",
    tags: ["SAé 6.05", "SAé 6.06", "Stage"],
    href: "/competences/c6-collaborer",
  },
];

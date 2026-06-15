import CompetencePage from "@/composents/sections/CompetencePage";
import TracesC6 from "@/composents/sections/TracesC6";

const niveaux = [
  {
    id: "inter",
    label: "Niveau intermédiaire",
    description: "Situer son rôle et ses missions au sein d'une équipe informatique.",
    acs: [
      { num: "AC1", texte: "Comprendre la diversité, la structure et la dimension de l'informatique dans une organisation (ESN, DSI, …)" },
      { num: "AC2", texte: "Appliquer une démarche pour intégrer une équipe informatique au sein d'une organisation" },
      { num: "AC3", texte: "Mobiliser les compétences interpersonnelles pour intégrer une équipe informatique" },
      { num: "AC4", texte: "Rendre compte de son activité professionnelle" },
    ],
  },
  {
    id: "conf",
    label: "Niveau confirmé",
    description: "Manager une équipe informatique.",
    acs: [
      { num: "AC1", texte: "Organiser et partager une veille numérique" },
      { num: "AC2", texte: "Identifier les enjeux de l'économie de l'innovation numérique" },
      { num: "AC3", texte: "Guider la conduite du changement informatique au sein d'une organisation" },
      { num: "AC4", texte: "Accompagner le management de projet informatique" },
    ],
  },
];

export default function C6Page() {
  return (
    <CompetencePage
      num="C6"
      eyebrow="COMPÉTENCE 06 · UE5.6 / UE6.6"
      titre="Collaborer au sein d'une équipe informatique"
      niveaux={niveaux}
      traces={[]}
      activeNav="C6"
      tracesNode={<TracesC6 />}
    />
  );
}

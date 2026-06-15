import CompetencePage from "@/composents/sections/CompetencePage";
import TracesC2 from "@/composents/sections/TracesC2";

const niveaux = [
  {
    id: "inter",
    label: "Niveau intermédiaire",
    description: "Sélectionner les algorithmes adéquats pour répondre à un problème donné.",
    acs: [
      { num: "AC1", texte: "Choisir des structures de données complexes adaptées au problème" },
      { num: "AC2", texte: "Utiliser des techniques algorithmiques adaptées pour des problèmes complexes (par ex. recherche opérationnelle, méthodes arborescentes, optimisation globale, intelligence artificielle…)" },
      { num: "AC3", texte: "Comprendre les enjeux et moyens de sécurisation des données et du code" },
      { num: "AC4", texte: "Évaluer l'impact environnemental et sociétal des solutions proposées" },
    ],
  },
  {
    id: "conf",
    label: "Niveau confirmé",
    description: "Analyser et optimiser des applications.",
    acs: [
      { num: "AC1", texte: "Anticiper les résultats de diverses métriques (temps d'exécution, occupation mémoire…)" },
      { num: "AC2", texte: "Profiler, analyser et justifier le comportement d'un code existant" },
      { num: "AC3", texte: "Choisir et utiliser des bibliothèques et méthodes dédiées au domaine d'application (imagerie, immersion, intelligence artificielle, jeux vidéos, parallélisme, calcul formel…)" },
    ],
  },
];

export default function C2Page() {
  return (
    <CompetencePage
      num="C2"
      eyebrow="COMPÉTENCE 02 · UE5.2 / UE6.2"
      titre="Optimiser des applications"
      niveaux={niveaux}
      traces={[]}
      activeNav="C2"
      tracesNode={<TracesC2 />}
    />
  );
}

"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./CompetenceList.module.css";

const competences = [
  {
    id: "c1",
    num: "C1",
    ue: "UE5.1 / UE6.1",
    titre: "Réaliser un développement d'application",
    sous_titre: "Adapter des applications sur un ensemble de supports variés — web, mobile, embarqué, IoT…",
    couleur: "blue",
    tags: ["React Native", "Next.js", "SAé 5.01", "SAé 6.01", "GitLab"],
    href: "/competences/c1-realiser",
  },
  {
    id: "c2",
    num: "C2",
    ue: "UE5.2 / UE6.2",
    titre: "Optimiser des applications",
    sous_titre: "Analyser et optimiser selon des critères de performance, précision et consommation de ressources",
    couleur: "green",
    tags: ["Python", "Algorithmes", "VeloGraph", "SAé 5.02"],
    href: "/competences/c2-optimiser",
  },
  {
    id: "c6",
    num: "C6",
    ue: "UE5.6 / UE6.6",
    titre: "Collaborer au sein d'une équipe informatique",
    sous_titre: "Manager une équipe informatique — situer son rôle et ses missions au niveau confirmé",
    couleur: "purple",
    tags: ["Agile / Scrum", "GitLab", "SAé 6.06"],
    href: "/competences/c6-collaborer",
  },
];

const colors = {
  blue: {
    stripe: "bg-blue-500",
    num: "text-blue-500",
    badge: "bg-blue-950 text-blue-400 border border-blue-900",
    tag: "bg-blue-950 text-blue-400 border border-blue-900",
    tagNeutral: "bg-neutral-900 text-neutral-500 border border-neutral-800",
  },
  green: {
    stripe: "bg-green-400",
    num: "text-green-400",
    badge: "bg-green-950 text-green-400 border border-green-900",
    tag: "bg-green-950 text-green-400 border border-green-900",
    tagNeutral: "bg-neutral-900 text-neutral-500 border border-neutral-800",
  },
  purple: {
    stripe: "bg-purple-400",
    num: "text-purple-400",
    badge: "bg-purple-950 text-purple-300 border border-purple-900",
    tag: "bg-purple-950 text-purple-300 border border-purple-900",
    tagNeutral: "bg-neutral-900 text-neutral-500 border border-neutral-800",
  },
};

// Les 2 premiers tags sont colorés, le reste en neutre
function Tags({ tags, couleur }: { tags: string[]; couleur: keyof typeof colors }) {
  const c = colors[couleur];
  return (
    <div className={styles.tags}>
      {tags.map((tag, i) => (
        <span
          key={tag}
          className={`${styles.tag} ${
            i < 2 ? c.tag : c.tagNeutral
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function CompetenceList() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="competences-portfolio"
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.header}>
        <div>
          <p className={`${styles.label} ${visible ? styles.in : ""}`}>
            Démarche portfolio
          </p>
          <h2 className={`${styles.title} ${visible ? styles.in : ""}`}>
            3 compétences · niveau confirmé
          </h2>
        </div>
        <p className={`${styles.subtext} ${visible ? styles.in : ""}`}>
          Cliquer pour voir la démonstration
        </p>
      </div>

      <div className={styles.competenceContainer}>
        {competences.map((comp, idx) => {
          const c = colors[comp.couleur as keyof typeof colors];
          return (
            <Link
              key={comp.id}
              href={comp.href}
              className={`${styles.competenceCard} ${visible ? styles.in : ""}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Barre couleur */}
              <div className={`${styles.stripe} ${c.stripe}`} />

              {/* Numéro */}
              <div className={styles.numero}>
                <span className={`${styles.numeroText} ${c.num}`}>
                  {comp.num}
                </span>
              </div>

              {/* Corps */}
              <div className={styles.content}>
                <p className={styles.ue}>{comp.ue}</p>
                <h3 className={styles.titre}>{comp.titre}</h3>
                <p className={styles.sousTitre}>{comp.sous_titre}</p>
                <Tags tags={comp.tags} couleur={comp.couleur as keyof typeof colors} />
              </div>

              {/* Droite */}
              <div className={styles.rightPanel}>
                <span className={`${styles.badge} ${c.badge}`}>
                  Niveau 3
                </span>
                <svg
                  className={styles.arrow}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

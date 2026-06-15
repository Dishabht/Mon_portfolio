"use client";

import Image from "next/image";
import styles from "./TracesC1.module.css";

interface AcLink {
  id: string;
  label: string;
  type: "inter" | "conf";
}

interface Preuve {
  source: string;
  texte: string;
  image?: string;
  imageTitre?: string;
  tag: string;
  acLinks?: AcLink[];
}

const preuves: Preuve[] = [
  {
    source: "SAé 5.01",
    texte:
      "Dans le cadre de la SAÉ 5, nous avons choisi d'utiliser plusieurs bases de données spécialisées (Redis, Neo4j, MongoDB et SQL) afin d'adapter le stockage aux besoins de chaque service. Ce choix nous a permis d'anticiper les performances de l'application en limitant les temps d'accès aux données et en optimisant les traitements selon leur nature.\n\n— Utilisation de Redis pour réduire les temps d'accès aux données\n— Choix de Neo4j pour optimiser la recherche de trajets\n— Architecture microservices pour répartir la charge",
    image: "/traces/c2/PosterArchitecture_PMoove.png",
    imageTitre: "Bases de données spécialisées · SAé 5.01",
    tag: "AC 01",
    acLinks: [
      { id: "conf-ac1", label: "AC1 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "Stage S6 · Smart Accountability",
    texte:
      "Lors de mon stage chez Offsit, j'ai utilisé Insomnia et Selenium afin d'analyser et de valider le comportement des fonctionnalités développées. Insomnia m'a permis de tester les différentes routes de l'API et de vérifier que les données retournées correspondaient aux résultats attendus. De son côté, Selenium a été utilisé pour automatiser des scénarios de test sur l'interface web afin de vérifier le bon fonctionnement des parcours utilisateurs.\n\nCette démarche m'a permis d'observer le comportement réel du code, d'identifier d'éventuelles anomalies et de justifier le bon fonctionnement des fonctionnalités mises en place.",
    image: "/traces/c2/Tests.png",
    imageTitre: "Tests API & UI · Smart Accountability",
    tag: "AC 02",
    acLinks: [
      { id: "conf-ac2", label: "AC2 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "Stage S6 · Smart Accountability",
    texte:
      "Lors de mon stage chez Offsit, le portail de gestion de comptabilité devait être utilisable sur différents supports (ordinateur, tablette et mobile). Afin de répondre à cette exigence, j'ai choisi d'utiliser Tailwind CSS. Cette bibliothèque facilite la création d'interfaces responsives grâce à son système de classes utilitaires et m'a permis d'adapter rapidement l'affichage aux différentes tailles d'écran.\n\nCe choix répondait directement aux besoins du projet tout en simplifiant le développement de l'interface.",
    image: "/traces/c2/responsive.png",
    imageTitre: "Interface responsive · Smart Accountability",
    tag: "AC 03",
    acLinks: [
      { id: "conf-ac3", label: "AC3 · Confirmé", type: "conf" },
    ],
  },
];

function scrollToAC(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add(styles.highlight);
  setTimeout(() => el.classList.remove(styles.highlight), 1800);
}

export default function TracesC2() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>
        <span className={styles.sectionLabelText}>02 — TRACES & PREUVES</span>
        <div className={styles.sectionLabelLine} />
      </div>

      {preuves.map((preuve) => (
        <div key={preuve.source + preuve.tag} className={styles.preuveRow}>
          <div className={styles.preuveLeft}>
            <div>
              <p className={styles.source}>{preuve.source}</p>
              <p className={styles.texte}>
                {preuve.texte.split("\n\n").map((para, i) => (
                  <span key={i}>
                    {i > 0 && <><br /><br /></>}
                    {para}
                  </span>
                ))}
              </p>
            </div>
            <div>
              {preuve.acLinks && preuve.acLinks.length > 0 && (
                <div className={styles.acTagsRow}>
                  {preuve.acLinks.map((link) => (
                    <button
                      key={link.id}
                      className={`${styles.acTag} ${link.type === "inter" ? styles.acTagInter : styles.acTagConf}`}
                      onClick={() => scrollToAC(link.id)}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.preuveRight}>
            <div className={styles.imageWrapper}>
              {preuve.image ? (
                <Image
                  src={preuve.image}
                  alt={preuve.imageTitre ?? ""}
                  fill
                  sizes="50vw"
                  className={styles.image}
                />
              ) : (
                <span className={styles.imagePlaceholder}>Image à venir</span>
              )}
            </div>
            <p className={styles.imageCaption}>
              {preuve.imageTitre ?? "—"}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

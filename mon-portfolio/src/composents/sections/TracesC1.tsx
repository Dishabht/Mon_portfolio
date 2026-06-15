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
  video?: string;
  imageTitre?: string;
  tag: string;
  imageLarge?: boolean;
  acLinks?: AcLink[];
}

const preuves: Preuve[] = [
  {
    source: "SAé 5.01",
    texte:
      "Dans le cadre de la SAÉ 5, l'objectif était de concevoir une solution web et mobile permettant la gestion en temps réel des demandes d'assistance dans les transports en commun pour les PMR. Pour répondre aux contraintes de performance et d'évolutivité du système, nous avons conçu une architecture basée sur des microservices. Cette architecture s'articulait autour d'une API centrale communiquant avec plusieurs services spécialisés ainsi qu'avec différentes bases de données adaptées aux besoins fonctionnels du projet.\n\nL'approche microservices présentait plusieurs avantages dans le contexte du projet : la possibilité de faire évoluer indépendamment chaque service, de faciliter les déploiements et d'optimiser l'utilisation des ressources en fonction des besoins de chaque composant. Cette organisation permettait également de séparer clairement les responsabilités entre les différents services et d'améliorer la maintenabilité globale de l'application.",
    image: "/traces/c1/PosterArchitecture_PMoove.png",
    imageTitre: "Architecture microservices · SAé 5.01",
    tag: "AC 1",
    acLinks: [
      { id: "conf-ac1", label: "AC1 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "Stage S6 · Smart Accountability",
    texte:
      "Lors de mon stage chez Offsit, j'ai travaillé sur le développement d'un portail web de gestion de comptabilité. Dans ce contexte, j'ai mis en place un modèle de données représentant les principales entités du système, leurs attributs ainsi que les relations entre elles, afin d'obtenir une vision claire et structurée du fonctionnement du portail.\n\nCette étape m'a permis de traduire les besoins métier en une architecture de données cohérente et de préparer efficacement le développement des différentes fonctionnalités de l'application.",
    image: "/traces/c1/ModeledeDonnee.png",
    imageTitre: "Modèle de données · Smart Accountability",
    tag: "AC 1",
    imageLarge: true,
    acLinks: [
      { id: "conf-ac1", label: "AC1 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "SAé 5.01",
    texte:
      "Dans le cadre de la SAÉ 5, nous nous sommes appuyés sur une application existante dédiée à l'assistance des personnes à mobilité réduite. Après avoir analysé son fonctionnement et son architecture, nous avons développé de nouvelles fonctionnalités afin d'améliorer le service proposé.\n\nCela a nécessité de comprendre les composants déjà présents afin d'intégrer les nouvelles fonctionnalités sans remettre en cause le fonctionnement existant de l'application.",
    video: "/traces/c1/ClientMobile.mov",
    imageTitre: "Application mobile · SAé 5.01",
    tag: "AC 2",
    acLinks: [
      { id: "conf-ac2", label: "AC2 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "SAé 5.01",
    texte:
      "Dans le cadre de la SAÉ 5, j'ai participé à l'intégration de l'application dans un environnement conteneurisé à l'aide de Docker Compose. Cette solution permet d'orchestrer automatiquement les différents services nécessaires au fonctionnement du projet, notamment l'API, l'interface web, Neo4j et RabbitMQ.\n\nElle facilite le déploiement et l'exécution de l'application tout en garantissant un environnement homogène pour l'ensemble de l'équipe. Cette expérience m'a permis de mieux appréhender les enjeux liés à l'intégration, au déploiement et à la maintenabilité d'une application complexe.",
    image: "/traces/c1/dockercompose1.png",
    imageTitre: "Docker Compose · SAé 5.01",
    tag: "AC 3",
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

export default function TracesC1() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>
        <span className={styles.sectionLabelText}>02 — TRACES & PREUVES</span>
        <div className={styles.sectionLabelLine} />
      </div>

      {preuves.map((preuve) => (
        <div key={preuve.source + preuve.tag} className={styles.preuveRow}>
          {/* Gauche */}
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

          {/* Droite */}
          <div className={styles.preuveRight}>
            <div className={`${styles.imageWrapper} ${preuve.imageLarge ? styles.imageWrapperLarge : ""} ${preuve.video ? styles.imageWrapperVideo : ""}`}>
              {preuve.video ? (
                <video
                  src={preuve.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.video}
                />
              ) : preuve.image ? (
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

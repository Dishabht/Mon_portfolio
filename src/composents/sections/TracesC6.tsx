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
  noImage?: boolean;
  acLinks?: AcLink[];
}

const preuves: Preuve[] = [
  {
    source: "SAé 3.01",
    texte:
      "Dans le cadre de la SAé 3.01, nous avons utilisé Git pour gérer le code en équipe, permettant à chaque membre de travailler sur des parties distinctes tout en gardant une trace de chaque modification. Nous avons également mis en place un tableau Kanban avec quatre colonnes To Do, In Progress, Review et Done, enrichi de labels pour organiser les sprints et les priorités.",
    image: "/traces/c6/CollaborationGit.png",
    imageTitre: "Gestion de projet avec Git",
    tag: "AC 2",
    acLinks: [
      { id: "inter-ac2", label: "AC2 · Intermédiaire", type: "inter" },
    ],
  },
  {
    source: "SAé 3.01",
    texte:
      "Nous avons appliqué la méthode SCRUM en divisant le projet en sprints pour faciliter le suivi de l'avancement et l'adaptation aux imprévus. Plusieurs Scrum Masters ont été désignés pour organiser les daily meetings, faire le lien entre les membres de l'équipe et lever les obstacles afin de s'assurer que tout le monde avançait dans la même direction.",
    image: "/traces/c6/SuiviSCRUM.png",
    imageTitre: "Mise en place de la méthode SCRUM",
    tag: "AC 4",
    acLinks: [
      { id: "inter-ac4", label: "AC4 · Intermédiaire", type: "inter" },
    ],
  },
  {
    source: "R6.A.06",
    texte:
      "Dans le cadre de la ressource R6.A.06, nous avons rédigé une documentation destinée aux futurs étudiants reprenant la SAÉ 6.01. Ces documents avaient pour objectif de faciliter la prise en main du projet existant en explicitant l'architecture de l'application, les choix techniques effectués et les pistes d'évolution envisagées.\n\nNous y avons également intégré des instructions claires pour installer, lancer et déployer l'application, afin que toute nouvelle équipe puisse démarrer rapidement sans avoir à redécouvrir l'environnement technique from scratch.",
    imageTitre: "Documentation technique · R6.A.06",
    tag: "AC 3",
    noImage: true,
    acLinks: [
      { id: "conf-ac3", label: "AC3 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "SAé 5.01",
    texte:
      "Notre projet s'organisait autour de deux équipes distinctes, une équipe MOA chargée d'exprimer les besoins et de valider les livrables, et une équipe MOE responsable de la conception et du développement. Chaque semaine, nous tenions une réunion de suivi réunissant les deux équipes pour présenter l'avancement, identifier les blocages, ajuster les priorités et pratiquer une auto-évaluation régulière permettant d'améliorer notre organisation d'une semaine à l'autre.",
    imageTitre: "Pilotage MOA · MOE et réunions hebdomadaires",
    tag: "AC 4",
    noImage: true,
    acLinks: [
      { id: "conf-ac4", label: "AC4 · Confirmé", type: "conf" },
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

export default function TracesC6() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>
        <span className={styles.sectionLabelText}>02 — TRACES & PREUVES</span>
        <div className={styles.sectionLabelLine} />
      </div>

      {preuves.map((preuve) => (
        <div key={preuve.source + preuve.tag} className={`${styles.preuveRow} ${preuve.noImage ? styles.preuveRowFull : ""}`}>
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

          {!preuve.noImage && (
            <div className={styles.preuveRight}>
              <div className={styles.imageWrapper}>
                {preuve.image ? (
                  <img
                    src={preuve.image}
                    alt={preuve.imageTitre ?? ""}
                    className={styles.image}
                    style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "contain" }}
                  />
                ) : (
                  <span className={styles.imagePlaceholder}>Image à venir</span>
                )}
              </div>
              <p className={styles.imageCaption}>
                {preuve.imageTitre ?? "—"}
              </p>
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

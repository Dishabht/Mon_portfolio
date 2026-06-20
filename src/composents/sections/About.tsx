import { useScrollReveal } from "@/hooks/useScrollReveal"
import styles from "./About.module.css";

const interests = [
  { emoji: "♟️", label: "Échecs" },
  { emoji: "🎮", label: "Zelda" },
  { emoji: "🎨", label: "Peinture" },
  { emoji: "🏺", label: "Poterie" },
  { emoji: "🧵", label: "Couture" },
  { emoji: "🏛️", label: "Musées" },
];

export default function About() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="about"
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`${styles.title} ${visible ? styles.in : ""}`}>
        À propos de moi
      </h2>

      <div className={styles.content}>

        {/* Colonne gauche */}
        <div className={styles.textColumn}>
          <blockquote className={`${styles.quote} ${visible ? styles.in : ""}`}>
            Je suis développeuse en formation, avec un profil qui mêle{" "}
            <strong>logique et créativité</strong>. Ce qui me plaît dans
            l'informatique ? La liberté de construire quelque chose de concret
            à partir de rien — une idée, quelques lignes de code, et ça prend vie.
          </blockquote>

          <p className={`${styles.paragraph} ${visible ? styles.in : ""}`} style={{ transitionDelay: "200ms" }}>
            Mon approche mêle rigueur technique et sensibilité créative — un
            héritage de mes spécialités au bac :{" "}
            <strong className={styles.highlight}>
              Mathématiques, Arts plastiques et Anglais
            </strong>
            . J'aime autant construire un pipeline de données propre que soigner
            l'interface qui le met en valeur.
          </p>

          <p className={`${styles.paragraph} ${visible ? styles.in : ""}`} style={{ transitionDelay: "350ms" }}>
            Actuellement en recherche de stage (20 avril – 12 juin), je vise des
            environnements où je peux contribuer concrètement tout en progressant
            vite. L'auto-formation fait partie de mon ADN depuis mon passage au{" "}
            <strong className={styles.highlight}>CNED et à l'École 42</strong>.
          </p>
        </div>

        {/* Colonne droite */}
        <div className={styles.cardColumn}>
          <div className={`${styles.infoCard} ${visible ? styles.in : ""}`} style={{ transitionDelay: "100ms" }}>
            <h3 className={styles.cardLabel}>En bref</h3>
            <ul className={styles.infoList}>
              <li className={styles.infoItem}>
                <span className={styles.infoKey}>Localisation</span>
                <span className={styles.infoValue}>Nanterre · Île-de-France</span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoKey}>Formation</span>
               <a 
                  href="https://iut.u-pec.fr/formations/but-informatique-vitry" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.infoValue}
                >
                  BUT Informatique, IUT de Créteil-Vitry (UPEC)
                </a>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoKey}>Disponibilité Alternance </span>
                <span className={styles.infoValue}> 15 juin 2026 </span>
              </li>
              <li className={styles.infoItem}>
                <span className={styles.infoKey}>Langues</span>
                <span className={styles.infoValue}>Français natif · Anglais intermédiaire</span>
              </li>
            </ul>
          </div>

          <div className={`${styles.infoCard} ${visible ? styles.in : ""}`} style={{ transitionDelay: "250ms" }}>
            <h3 className={styles.cardLabel}>Centres d'intérêt</h3>
            <div className={styles.interestGrid}>
              {interests.map(({ emoji, label }) => (
                <span key={label} className={styles.interestItem}>
                  <span className={styles.interestEmoji}>{emoji}</span>
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
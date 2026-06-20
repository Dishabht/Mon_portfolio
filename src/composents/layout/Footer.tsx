import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.col}>
          <p className={styles.label}>Portfolio</p>
          <nav className={styles.colLinks}>
            <a href="/#profil" className={styles.colLink}>Profil</a>
            <a href="/#competences-portfolio" className={styles.colLink}>Compétences</a>
            <a href="/#contact" className={styles.colLink}>Contact</a>
          </nav>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Formation</p>
          <div className={styles.colLinks}>
            <span className={styles.colLink}>BUT Informatique</span>
            <span className={styles.colLink}>Parcours A – RACDV</span>
            <span className={styles.colLink}>IUT Créteil-Vitry</span>
          </div>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Compétences</p>
          <nav className={styles.colLinks}>
            <Link to="/competences/c1-realiser" className={styles.colLink}>C1 – Réaliser</Link>
            <Link to="/competences/c2-optimiser" className={styles.colLink}>C2 – Optimiser</Link>
            <Link to="/competences/c6-collaborer" className={styles.colLink}>C6 – Collaborer</Link>
          </nav>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Contact</p>
          <nav className={styles.colLinks}>
            <a
              href="https://www.linkedin.com/in/disha-bhatiya-0727282b3/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colLink}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/dishabht"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colLink}
            >
              GitHub
            </a>
            <a href="mailto:dishabh10@gmail.com" className={styles.colLink}>
              Email
            </a>
          </nav>
        </div>
      </div>

    </footer>
  );
}

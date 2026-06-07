import Link from "next/link";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      <div className={styles.grid}>
        <div className={styles.col}>
          <p className={styles.label}>Portfolio</p>
          <nav className={styles.colLinks}>
            <Link href="/#profil" className={styles.colLink}>Profil</Link>
            <Link href="/#competences-portfolio" className={styles.colLink}>Compétences</Link>
            <Link href="/#contact" className={styles.colLink}>Contact</Link>
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
            <Link href="/competences/c1-realiser" className={styles.colLink}>C1 – Réaliser</Link>
            <Link href="/competences/c2-optimiser" className={styles.colLink}>C2 – Optimiser</Link>
            <Link href="/competences/c6-collaborer" className={styles.colLink}>C6 – Collaborer</Link>
          </nav>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Contact</p>
          <nav className={styles.colLinks}>
            <a
              href="https://www.linkedin.com/in/hanah-sahmoune-519419308/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colLink}
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/sahHanah44"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colLink}
            >
              GitHub
            </a>
            <a href="mailto:thivishan04@gmail.com" className={styles.colLink}>
              Email
            </a>
          </nav>
        </div>
      </div>

      <div className={styles.bottom}>
        <span className={styles.bottomText}>2025 © Disha.BHT</span>
        <span className={styles.bottomText}>BUT3 Informatique · UPEC</span>
      </div>
    </footer>
  );
}

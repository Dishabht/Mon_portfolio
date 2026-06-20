import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav} id="top-navbar">
      <Link to="/" className={styles.logo}>
        disha.bht
      </Link>

      <div className={styles.center}>
        <Link to="/#hero-section" className={styles.link}>Profil</Link>
        <div className={styles.dropdown}>
          <Link to="/#competences-portfolio" className={styles.link}>Compétences</Link>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownInner}>
              <Link to="/competences/c1-realiser" className={styles.dropdownLink}>C1 — Réaliser</Link>
              <Link to="/competences/c2-optimiser" className={styles.dropdownLink}>C2 — Optimiser</Link>
              <Link to="/competences/c6-collaborer" className={styles.dropdownLink}>C6 — Collaborer</Link>
            </div>
          </div>
        </div>
        <Link to="/#contact" className={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

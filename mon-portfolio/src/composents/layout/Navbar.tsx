"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav} id="top-navbar">
      <Link href="/" className={styles.logo}>
        disha.bht
      </Link>

      <div className={styles.center}>
        <Link href="/#hero-section" className={styles.link}>Profil</Link>
        <div className={styles.dropdown}>
          <Link href="/#competences-portfolio" className={styles.link}>Compétences</Link>
          <div className={styles.dropdownMenu}>
            <div className={styles.dropdownInner}>
              <Link href="/competences/c1-realiser" className={styles.dropdownLink}>C1 — Réaliser</Link>
              <Link href="/competences/c2-optimiser" className={styles.dropdownLink}>C2 — Optimiser</Link>
              <Link href="/competences/c6-collaborer" className={styles.dropdownLink}>C6 — Collaborer</Link>
            </div>
          </div>
        </div>
        <Link href="/#contact" className={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

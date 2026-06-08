"use client";

import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav} id="top-navbar">
      <Link href="/" className={styles.logo}>
        {" disha.bht"}
      </Link>

      <div className={styles.center}>
        <Link href="/#hero-section" className={styles.link}>Profil</Link>
        <Link href="/#competences-portfolio" className={styles.link}>Compétences</Link>
        <Link href="/#contact" className={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

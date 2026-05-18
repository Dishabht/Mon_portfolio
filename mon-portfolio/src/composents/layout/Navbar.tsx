// src/components/layout/Navbar.tsx
import Link from "next/link";
import styles from "./Navbar.module.css"; // On importe le nouveau design !

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        
        {/* Le Logo */}
        <Link href="/" className={styles.logo}>
          Hanah<span className={styles.logoAccent}>.</span>
        </Link>

        {/* Les Liens de navigation */}
        <div className={styles.navLinks}>
          <Link href="/#about" className={styles.link}>
            À propos
          </Link>
          <Link href="/#projets" className={styles.link}>
            Projets
          </Link>
          <Link href="/#contact" className={styles.contactBtn}>
            Contact
          </Link>
        </div>

        {/* (Optionnel) Ici on pourra rajouter un bouton "Menu Burger" pour le mobile plus tard */}
        
      </div>
    </nav>
  );
}
import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

export default function Hero() {
  const [fontReady, setFontReady] = useState(false);

  useEffect(() => {
    document.fonts.load("800 1em Syne").then(() => setFontReady(true));
  }, []);

  return (
    <section className={styles.hero} id="hero-section">
      <div className={styles.center}>
        <h1 className={`${styles.name} ${fontReady ? styles.nameVisible : ""}`}>disha.bht</h1>
        <div className={styles.pill}>Portfolio de compétences</div>
      </div>

      <div className={styles.bottomLeft}>
        <span>BUT3 Informatique / Parcours A – RACDV</span>
        <span>IUT Créteil-Vitry</span>
      </div>
    </section>
  );
}

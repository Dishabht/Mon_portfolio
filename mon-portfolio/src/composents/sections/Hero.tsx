import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero-section">
      <div className={styles.inner}>
        <div className={styles.center}>
          <h1 className={styles.name}>
            <span className={styles.nameItalic}>Dish</span>a.BHT
          </h1>
          <div className={styles.pill}>Portfolio de compétences</div>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaText}>
            BUT3 Informatique / Parcours A – RACDV
          </span>
          <span className={styles.metaText}>
            IUT Créteil-Vitry · UPEC / Niveau 3 – Confirmé
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./APropos.module.css";

export default function APropos() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="a-propos"
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`${styles.title} ${visible ? styles.in : ""}`}>
        À Propos
      </h2>

      <div className={styles.body}>
        <p
          className={`${styles.paragraph} ${visible ? styles.in : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          Je m'appelle Disha BHATIYA. Étudiante en troisième année de BUT Informatique,
          parcours Réalisation d'applications : Conception,
          Développement, Validation (RACDV) à l'IUT de Créteil-Vitry.
        </p>

        <p
          className={`${styles.paragraph} ${visible ? styles.in : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          Mon parcours mêle développement web, gestion de projet
          et travail en équipe, avec une appétence pour les interfaces
          soignées et les architectures propres.
        </p>

        <p
          className={`${styles.paragraph} ${visible ? styles.in : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          Ce portfolio démontre l'acquisition du niveau confirmé
          sur 3 compétences clés du BUT Informatique, à travers
          des traces sélectionnées issues de mes SAé et de mon stage.
        </p>

        <p
          className={`${styles.signature} ${visible ? styles.in : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          Mon ambition : concevoir des solutions techniques
          qui ont du sens, du début à la mise en production.
        </p>
      </div>

      <a
        href="/BHATIYA_CV.pdf"
        download="BHATIYA_CV.pdf"
        className={`${styles.cvBtn} ${visible ? styles.in : ""}`}
        style={{ transitionDelay: "500ms" }}
      >
        Télécharger le CV
      </a>
    </section>
  );
}

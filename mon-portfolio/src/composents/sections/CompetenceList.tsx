"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { competences } from "@/data/competences";
import styles from "./CompetenceList.module.css";

export default function CompetenceList() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="competences-portfolio"
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <p className={styles.headerLabel}>Démarche portfolio</p>
            <p className={styles.headerTitle}>3 compétences</p>
          </div>
          <p className={styles.headerRight}>Cliquer pour la démonstration</p>
        </div>

        <div className={styles.list}>
          {competences.map((comp, idx) => (
            <Link
              key={comp.id}
              href={comp.href}
              className={`${styles.row} ${visible ? styles.in : ""}`}
              style={{ transitionDelay: `${idx * 80}ms` }}
              data-cursor-row=""
            >
              <div className={styles.colIndex}>
                <span className={styles.index}>{comp.index}</span>
              </div>

              <div className={styles.colBody}>
                <h3 className={styles.titre}>{comp.titre}</h3>
                <p className={styles.sousTitre}>{comp.sousTitre}</p>
                <div className={styles.tags}>
                  {comp.tags.map((tag, i) => (
                    <span
                      key={tag}
                      className={`${styles.tag} ${styles.tagWarm}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className={styles.colRight}>
                <span className={styles.badge}>NIV. 3</span>
                <span className={styles.arrow}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

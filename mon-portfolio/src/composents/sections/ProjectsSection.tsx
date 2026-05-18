"use client";

import Link from "next/link";
import { myProjects } from "@/data/project";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./ProjectsSection.module.css";

export default function ProjectsSection() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="projets"
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`${styles.sectionTitle} ${visible ? styles.titleIn : ""}`}>
        Mes Projets
      </h2>

      <div className={styles.grid}>
        {myProjects.map((project, i) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project.id}
            className={`${styles.card} ${visible ? styles.cardIn : ""}`}
            style={{ transitionDelay: visible ? `${i * 130}ms` : "0ms" }}
          >
            <div className={styles.cardInner}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              <p className={styles.cardDescription}>{project.description}</p>
              <ul className={styles.techList}>
                {project.technologies.map((tech) => (
                  <li key={tech} className={styles.techBadge}>{tech}</li>
                ))}
              </ul>
            </div>
            <span className={styles.cardArrow} aria-hidden="true">→</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
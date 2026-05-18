"use client";

import { use, useState } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { myProjects } from "@/data/project";
import styles from "./Page.module.css";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ── Utilitaire : transforme un chemin en titre lisible ──────────────────────
// "/Echo/Diagramme_UML_Classe.drawio.png" → "Diagramme UML Classe"
function pathToTitle(src: string): string {
  const filename = src.split("/").pop() ?? src;
  return filename
    .replace(/\.[^.]+$/, "")        // retire la dernière extension (.png)
    .replace(/\.[^.]+$/, "")        // retire une 2e extension (.drawio)
    .replace(/[_-]+/g, " ")         // remplace _ et - par des espaces
    .replace(/\b\w/g, (c) => c.toUpperCase()) // capitalise chaque mot
    .trim();
}

export default function ProjectPage({ params }: PageProps) {
  const { slug } = use(params);
  const project = myProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main className={styles.projectPage}>

      {/* ── Back nav ── */}
      <nav className={styles.backNav}>
        <Link href="/#projets" className={styles.backLink}>
          ← Tous les projets
        </Link>
      </nav>

      {/* ── Hero ── */}
      <header className={styles.hero}>
        <div className={styles.heroMeta}>
          <span className={styles.heroDate}>{project.date}</span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnOutline}`}
            >
              <GitHubIcon />
              Voir le code
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnGhost}`}
            >
              <PlayIcon />
              Voir la démo
            </a>
          )}
        </div>

        <h1 className={styles.heroTitle}>{project.title}</h1>
        <p className={styles.heroDescription}>{project.description}</p>

        <ul className={styles.techList} aria-label="Technologies utilisées">
          {project.technologies.map((t) => (
            <li key={t} className={styles.techBadge}>{t}</li>
          ))}
        </ul>
      </header>

      {/* ── Divider ── */}
      <div className={styles.sectionDivider} />

      {/* ── Body ── */}
      <div className={styles.bodyGrid}>

        {/* Colonne gauche */}
        <div className={styles.bodyLeft}>
          {project.context && (
            <Section label="Contexte & rôle" icon="◈" styles={styles}>
              <p className={styles.bodyText}>{project.context}</p>
            </Section>
          )}
          {project.methodology && (
            <Section label="Méthodologie" icon="◎" styles={styles}>
              <p className={styles.bodyText}>{project.methodology}</p>
            </Section>
          )}
        </div>

        {/* Colonne droite */}
        <div className={styles.bodyRight}>
          {project.videoUrl && (
            <div className={styles.mediaBlock}>
              <span className={styles.mediaLabel}>Démonstration</span>
              <VideoPlayer src={project.videoUrl} styles={styles} />
            </div>
          )}
          {project.diagrams && project.diagrams.length > 0 && (
            <div className={styles.mediaBlock}>
              <span className={styles.mediaLabel}>Diagrammes & Architecture</span>
              <DiagramGallery
                diagrams={project.diagrams}
                title={project.title}
                styles={styles}
              />
            </div>
          )}
        </div>

      </div>

      {/* ── Footer ── */}
      <footer className={styles.pageFooter}>
        <Link href="/#projets" className={styles.footerBack}>
          ← Retour aux projets
        </Link>
      </footer>
    </main>
  );
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function Section({
  label, icon, children, styles,
}: {
  label: string;
  icon: string;
  children: React.ReactNode;
  styles: Record<string, string>;
}) {
  return (
    <section className={styles.infoSection}>
      <h2 className={styles.sectionHeading}>
        <span className={styles.sectionIcon}>{icon}</span>
        {label}
      </h2>
      {children}
    </section>
  );
}
function VideoPlayer({ src, styles }: { src: string; styles: Record<string, string> }) {
  // Petite astuce pour ajouter les options YouTube automatiquement à ton lien
  const autoPlayUrl = src.includes("?") 
    ? `${src}&autoplay=1&mute=1` 
    : `${src}?autoplay=1&mute=1`;

  return (
    <div className={styles.videoWrapper}>
      <iframe
        src={autoPlayUrl}
        className={styles.videoPlayer}
        // "autoplay" doit être autorisé ici aussi pour que le navigateur accepte
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Démonstration du projet"
      />
    </div>
  );
}

function DiagramGallery({
  diagrams, title, styles,
}: {
  diagrams: string[];
  title: string;
  styles: Record<string, string>;
}) {
  const [active, setActive] = useState(0);

  return (
    <div className={styles.gallery}>

      {/* Image principale */}
      <div className={styles.galleryMain}>
        <Image
          src={diagrams[active]}
          alt={`${pathToTitle(diagrams[active])} — ${title}`}
          fill
          className={styles.galleryImg}
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Titre du diagramme actif en bas à gauche */}
        <div className={styles.diagramTitle}>
          {pathToTitle(diagrams[active])}
        </div>

        {/* Compteur en bas à droite */}
        <span className={styles.galleryCounter}>
          {active + 1} / {diagrams.length}
        </span>
      </div>

      {/* Miniatures avec titre au survol */}
      {diagrams.length > 1 && (
        <div className={styles.galleryThumbs}>
          {diagrams.map((src, i) => (
            <button
              key={src}
              aria-label={pathToTitle(src)}
              title={pathToTitle(src)}
              className={`${styles.galleryThumb} ${i === active ? styles.galleryThumbActive : ""}`}
              onClick={() => setActive(i)}
            >
              <Image
                src={src}
                alt={pathToTitle(src)}
                fill
                className={styles.galleryThumbImg}
                sizes="72px"
              />
              {/* Label sous la miniature */}
              <span className={styles.thumbLabel}>
                {pathToTitle(src)}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.09.682-.218.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.907-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.09-.647.35-1.087.636-1.337-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.104-.254-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.376.202 2.392.1 2.646.64.698 1.026 1.59 1.026 2.682 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.742 0 .267.18.578.688.48C19.138 20.165 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
  );
}

function PlayIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
    </svg>
  );
}
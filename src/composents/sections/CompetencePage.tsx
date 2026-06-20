import { Link } from "react-router-dom";
import styles from "./CompetencePage.module.css";

interface AC {
  num: string;
  texte: string;
}

interface Trace {
  label: string;
  tags: string[];
  fullWidth?: boolean;
}

interface Niveau {
  id: string;
  label: string;
  description: string;
  acs: AC[];
}

interface CompetencePageProps {
  num: string;
  eyebrow: string;
  titre: string;
  acs?: AC[];
  traces: Trace[];
  activeNav: "C1" | "C2" | "C6";
  tracesNode?: React.ReactNode;
  niveaux?: Niveau[];
}

const navLinks = [
  { id: "C1", label: "C1 — Réaliser",   href: "/competences/c1-realiser" },
  { id: "C2", label: "C2 — Optimiser",  href: "/competences/c2-optimiser" },
  { id: "C6", label: "C6 — Collaborer", href: "/competences/c6-collaborer" },
];

export default function CompetencePage({
  num,
  eyebrow,
  titre,
  acs = [],
  traces,
  activeNav,
  tracesNode,
  niveaux,
}: CompetencePageProps) {
  return (
    <div className={styles.page}>
      <Link to="/" className={styles.back}>← Retour</Link>

      {/* Hero */}
      <section className={styles.hero}>
        <span className={styles.filigrane} aria-hidden="true">{num}</span>

        <div className={styles.heroCenter}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{titre}</h1>
        </div>
      </section>

      {/* 01 — AC */}
      <section className={styles.section}>
        <div className={styles.sectionLabel}>
          <span className={styles.sectionLabelText}>01 — APPRENTISSAGES CRITIQUES</span>
          <div className={styles.sectionLabelLine} />
        </div>

        {niveaux && niveaux.length > 0 ? (
          niveaux.map((n, i) => (
            <div key={n.id} className={`${styles.niveauBlock} ${i > 0 ? styles.niveauBlockSep : ""}`}>
              <span className={styles.niveauBadge}>{n.label}</span>
              <p className={styles.niveauDesc}>{n.description}</p>
              <div className={styles.acList}>
                {n.acs.map((ac) => (
                  <div key={ac.num} id={`${n.id}-ac${parseInt(ac.num.replace("AC", ""))}`} className={styles.acRow}>
                    <span className={styles.acNum}>{"AC" + parseInt(ac.num.replace("AC", ""))}</span>
                    <p className={styles.acText}>{ac.texte}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className={styles.acList}>
            {acs.map((ac) => (
              <div key={ac.num} id={`ac${parseInt(ac.num.replace("AC", ""))}`} className={styles.acRow}>
                <span className={styles.acNum}>{"AC" + parseInt(ac.num.replace("AC", ""))}</span>
                <p className={styles.acText}>{ac.texte}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* 02 — Traces */}
      {tracesNode ?? (
        <section className={styles.sectionNoPaddingTop}>
          <div className={styles.sectionLabel}>
            <span className={styles.sectionLabelText}>02 — TRACES & PREUVES</span>
            <div className={styles.sectionLabelLine} />
          </div>

          <div className={styles.tracesGrid}>
            {traces.map((trace) => (
              <div
                key={trace.label}
                className={`${styles.traceCard} ${trace.fullWidth ? styles.traceCardFull : ""}`}
              >
                <p className={styles.traceLabel}>{trace.label}</p>
                <p className={styles.traceTitre}>À compléter</p>
                <p className={styles.traceDesc}></p>
                <div className={styles.traceTags}>
                  {trace.tags.map((tag) => (
                    <span key={tag} className={styles.traceTag}>{tag}</span>
                  ))}
                </div>
                <span className={styles.traceArrow}>→</span>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer nav */}
      <nav className={styles.footerNav}>
        <div className={styles.footerLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className={`${styles.footerLink} ${activeNav === link.id ? styles.footerLinkActive : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

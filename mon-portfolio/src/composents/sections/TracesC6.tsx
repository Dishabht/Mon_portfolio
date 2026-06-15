"use client";

import Image from "next/image";
import styles from "./TracesC1.module.css";

interface AcLink {
  id: string;
  label: string;
  type: "inter" | "conf";
}

interface Preuve {
  source: string;
  texte: string;
  image?: string;
  imageTitre?: string;
  tag: string;
  acLinks?: AcLink[];
}

const preuves: Preuve[] = [
  {
    source: "SAé 6.05",
    texte: "",
    tag: "AC 1",
    acLinks: [
      { id: "conf-ac1", label: "AC1 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "SAé 6.06",
    texte: "",
    tag: "AC 3",
    acLinks: [
      { id: "conf-ac3", label: "AC3 · Confirmé", type: "conf" },
    ],
  },
  {
    source: "Stage 2024–2025",
    texte: "",
    tag: "AC 1",
    acLinks: [
      { id: "conf-ac1", label: "AC1 · Confirmé", type: "conf" },
      { id: "conf-ac2", label: "AC2 · Confirmé", type: "conf" },
      { id: "conf-ac3", label: "AC3 · Confirmé", type: "conf" },
      { id: "conf-ac4", label: "AC4 · Confirmé", type: "conf" },
    ],
  },
];

function scrollToAC(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: "smooth", block: "center" });
  el.classList.add(styles.highlight);
  setTimeout(() => el.classList.remove(styles.highlight), 1800);
}

export default function TracesC6() {
  return (
    <section className={styles.section}>
      <div className={styles.sectionLabel}>
        <span className={styles.sectionLabelText}>02 — TRACES & PREUVES</span>
        <div className={styles.sectionLabelLine} />
      </div>

      {preuves.map((preuve) => (
        <div key={preuve.source + preuve.tag} className={styles.preuveRow}>
          <div className={styles.preuveLeft}>
            <div>
              <p className={styles.source}>{preuve.source}</p>
              <p className={styles.texte}>
                {preuve.texte.split("\n\n").map((para, i) => (
                  <span key={i}>
                    {i > 0 && <><br /><br /></>}
                    {para}
                  </span>
                ))}
              </p>
            </div>
            <div>
              {preuve.acLinks && preuve.acLinks.length > 0 && (
                <div className={styles.acTagsRow}>
                  {preuve.acLinks.map((link) => (
                    <button
                      key={link.id}
                      className={`${styles.acTag} ${link.type === "inter" ? styles.acTagInter : styles.acTagConf}`}
                      onClick={() => scrollToAC(link.id)}
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.preuveRight}>
            <div className={styles.imageWrapper}>
              {preuve.image ? (
                <Image
                  src={preuve.image}
                  alt={preuve.imageTitre ?? ""}
                  fill
                  sizes="50vw"
                  className={styles.image}
                />
              ) : (
                <span className={styles.imagePlaceholder}>Image à venir</span>
              )}
            </div>
            <p className={styles.imageCaption}>
              {preuve.imageTitre ?? "—"}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

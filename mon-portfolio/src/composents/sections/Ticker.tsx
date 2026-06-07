import styles from "./Ticker.module.css";

const items = [
  "C1 — Réaliser un développement d'application",
  "C2 — Optimiser des applications",
  "C6 — Collaborer au sein d'une équipe",
  "Niveau 3 – Confirmé · 2024–2025",
];

function TickerItem({ text }: { text: string }) {
  return (
    <>
      <span className={styles.item}>{text}</span>
      <span className={styles.dot} aria-hidden="true" />
    </>
  );
}

export default function Ticker() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <TickerItem key={i} text={item} />
        ))}
      </div>
    </div>
  );
}

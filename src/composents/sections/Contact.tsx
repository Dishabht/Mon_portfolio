"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import styles from "./Contact.module.css";

export default function Contact() {
  const { ref, visible } = useScrollReveal();

  return (
    <section
      id="contact"
      className={styles.section}
      ref={ref as React.RefObject<HTMLElement>}
    >
      <h2 className={`${styles.title} ${visible ? styles.in : ""}`}>
        Prêt(e) à collaborer ?
      </h2>

      <p
        className={`${styles.description} ${visible ? styles.in : ""}`}
        style={{ transitionDelay: "150ms" }}
      >
        Je suis actuellement à la recherche d'une alternance.
        Si mon profil vous intéresse ou si vous avez une question,
        n'hésitez pas à m'envoyer un message !
      </p>

      <a
        href="mailto:dishabh10@gmail.com"
        className={`${styles.ctaBtn} ${visible ? styles.in : ""}`}
        style={{ transitionDelay: "300ms" }}
      >
        <span>✉</span> M'envoyer un email
      </a>
    </section>
  );
}

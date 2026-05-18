// src/components/sections/Contact.tsx
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    // L'id="contact" permet au lien de ta Navbar de descendre jusqu'ici !
    <section id="contact" className={styles.section}>
      <h2 className={styles.title}>
        Prêt(e) à collaborer ?
      </h2>
      
      <p className={styles.description}>
        Je suis actuellement à la recherche de nouvelles opportunités (alternance ou stage). 
        Si mon profil vous intéresse ou si vous avez une question, n'hésitez pas à m'envoyer un message !
      </p>
      
      
      <a 
        href="mailto:dishabh10@gmail.com" 
        className={styles.ctaBtn}
      >
        <span>✉️</span> M'envoyer un email
      </a>
    </section>
  );
}
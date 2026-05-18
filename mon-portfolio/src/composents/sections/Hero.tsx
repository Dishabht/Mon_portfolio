"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

// ─── Données ──────────────────────────────────────────────────────────────────

const ROLES = [
  "Développeuse Web Junior",
  "Étudiante en Informatique",
  "Recherche d'alternance dès septembre 2026",
];

const SCRAMBLE_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const FINAL_TITLE = "Bonjour, je suis BHATIYA Disha";

// ─── Component ────────────────────────────────────────────────────────────────

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [titleHtml, setTitleHtml] = useState("");
  const [typedRole, setTypedRole] = useState("");
  const [showDesc, setShowDesc] = useState(false);
  const [showCta, setShowCta] = useState(false);

  // ── Particules ──────────────────────────────────────────────────────────────
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    type Particle = { x: number; y: number; vx: number; vy: number; r: number };
    const pts: Particle[] = Array.from({ length: 45 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      r: Math.random() * 1.6 + 0.4,
    }));

    let rafId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach((p) => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(0,229,192,0.4)";
        ctx.fill();
      });
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(pts[i].x, pts[i].y);
            ctx.lineTo(pts[j].x, pts[j].y);
            ctx.strokeStyle = `rgba(0,229,192,${0.12 * (1 - d / 100)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => { cancelAnimationFrame(rafId); window.removeEventListener("resize", resize); };
  }, []);

  // ── Scramble titre ──────────────────────────────────────────────────────────
  useEffect(() => {
    let iter = 0;
    const total = FINAL_TITLE.length * 3;
    const interval = setInterval(() => {
      const html = FINAL_TITLE.split("").map((char, i) => {
        if (char === " ") return " ";
        if (i < iter / 3) return char;
        return `<span class="${styles.scrambleChar}">${SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]}</span>`;
      }).join("");
      setTitleHtml(html);
      if (++iter > total) {
        clearInterval(interval);
        setTitleHtml(FINAL_TITLE);
        // Lance le typewriter après le scramble
        startTypewriter();
      }
    }, 38);
    return () => clearInterval(interval);
  }, []);

  // ── Typewriter rôles ────────────────────────────────────────────────────────
  const startTypewriter = () => {
    let ri = 0, ci = 0, deleting = false;
    let descShown = false;

    const tick = () => {
      const word = ROLES[ri];
      if (!deleting) {
        ci++;
        setTypedRole(word.slice(0, ci));
        if (ci === word.length) {
          if (!descShown) {
            setTimeout(() => setShowDesc(true), 200);
            setTimeout(() => setShowCta(true), 500);
            descShown = true;
          }
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        ci--;
        setTypedRole(word.slice(0, ci));
        if (ci === 0) {
          deleting = false;
          ri = (ri + 1) % ROLES.length;
          setTimeout(tick, 400);
          return;
        }
      }
      setTimeout(tick, deleting ? 38 : 72);
    };
    setTimeout(tick, 300);
  };

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <section className={styles.heroSection}>
      {/* Canvas particules en arrière-plan */}
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />

      {/* Colonne gauche */}
      <div className={styles.textContainer}>
        <span className={styles.availTag}>Disponible · Alternance 2026</span>

        <h1
          className={styles.title}
          dangerouslySetInnerHTML={{ __html: titleHtml || FINAL_TITLE }}
        />

        <h2 className={styles.subtitle}>
          <span className={styles.typedText}>{typedRole}</span>
          <span className={styles.cursor} aria-hidden="true" />
        </h2>

        <p className={`${styles.description} ${showDesc ? styles.visible : ""}`}>
          Je sais pas quoi écrire
        </p>

        <div className={`${styles.ctaContainer} ${showCta ? styles.visible : ""}`}>
          <Link href="#contact" className={styles.btnPrimary}>
            Me contacter
          </Link>
          <a href="/Hanah_Sahmoune_curriculum_vitae.pdf" target="_blank" rel="noopener noreferrer" className={styles.btnSecondary}>
            Télécharger mon CV
          </a>
        </div>
      </div>

     
    </section>
  );
}
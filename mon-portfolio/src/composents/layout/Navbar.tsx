"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.css";

type NavState = "default" | "scrolled" | "dark";

export default function Navbar() {
  const [navState, setNavState] = useState<NavState>("default");
  const heroHeightRef = useRef<number>(0);

  useEffect(() => {
    const updateHeroHeight = () => {
      const hero = document.getElementById("profil");
      if (hero) heroHeightRef.current = hero.offsetHeight;
    };

    const getBackgroundColorUnderNav = (navEl: HTMLElement | null) => {
      if (!navEl) return null;
      const rect = navEl.getBoundingClientRect();
      const probeX = window.innerWidth / 2;
      const probeY = rect.bottom + 2; // just under the navbar

      let el = document.elementFromPoint(probeX, probeY) as HTMLElement | null;
      while (el && el !== document.documentElement) {
        const bg = window.getComputedStyle(el).backgroundColor;
        if (bg && bg !== 'transparent' && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'initial') return bg;
        el = el.parentElement;
      }
      return null;
    };

    const rgbToLuma = (bg: string | null) => {
      if (!bg) return 1;
      const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
      if (!m) return 1;
      const r = Number(m[1]) / 255;
      const g = Number(m[2]) / 255;
      const b = Number(m[3]) / 255;
      // relative luminance
      const lum = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      return lum;
    };

    const onScroll = () => {
      const y = window.scrollY;
      const navEl = document.getElementById('top-navbar');

      // Prefer detecting the background under the navbar to decide dark mode
      const bg = getBackgroundColorUnderNav(navEl);
      const luma = rgbToLuma(bg);
      const isDarkBg = luma < 0.5;

      if (isDarkBg) {
        setNavState('dark');
        return;
      }

      // fallback: hero height logic
      if (heroHeightRef.current > 0 && y > heroHeightRef.current) {
        setNavState('dark');
      } else if (y > 50) {
        setNavState('scrolled');
      } else {
        setNavState('default');
      }
    };

    updateHeroHeight();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateHeroHeight, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateHeroHeight);
    };
  }, []);

  return (
    <nav id="top-navbar" className={`${styles.nav} ${styles[navState]}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          {" disha.bht"}
        </Link>

        <div className={styles.right}>
          <div className={styles.links}>
            <Link href="/#hero-section" className={styles.link}>Profil</Link>
            <Link href="/#competences-portfolio" className={styles.link}>Compétences</Link>
            <Link href="/#contact" className={styles.link}>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

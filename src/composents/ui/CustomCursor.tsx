import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const mX = useRef(-200);
  const mY = useRef(-200);
  const cX = useRef(-200);
  const cY = useRef(-200);
  const rafRef = useRef<number>(0);
  const inHeroRef = useRef(false);
  const onMenuRef = useRef(false);

  const [inHero, setInHero] = useState(false);
  const [onMenu, setOnMenu] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mX.current = e.clientX;
      mY.current = e.clientY;

      const hero = document.getElementById("hero-section");
      const menu = document.getElementById("top-navbar");

      if (hero) {
        const r = hero.getBoundingClientRect();
        const next =
          e.clientY >= r.top &&
          e.clientY <= r.bottom &&
          e.clientX >= r.left &&
          e.clientX <= r.right;
        if (next !== inHeroRef.current) {
          inHeroRef.current = next;
          setInHero(next);
        }
      }

      if (menu) {
        const m = menu.getBoundingClientRect();
        const overMenu =
          e.clientY >= m.top &&
          e.clientY <= m.bottom &&
          e.clientX >= m.left &&
          e.clientX <= m.right;
        if (overMenu !== onMenuRef.current) {
          onMenuRef.current = overMenu;
          setOnMenu(overMenu);
        }
      }
    };

    const loop = () => {
      cX.current += (mX.current - cX.current) * 0.15;
      cY.current += (mY.current - cY.current) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.left = `${cX.current}px`;
        cursorRef.current.style.top = `${cY.current}px`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const isHeroPill = inHero && !onMenu;

  return (
    <div
      ref={cursorRef}
      className={`${styles.cursor} ${isHeroPill ? styles.hero : styles.dot}`}
    >
      <span className={styles.label}>{isHeroPill ? "HELLO" : ""}</span>
    </div>
  );
}

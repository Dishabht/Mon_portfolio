import styles from "./LogoStrip.module.css";

function IconNextjs() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 16V8l7 9V8" />
    </svg>
  );
}

function IconReact() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
      <ellipse cx="12" cy="12" rx="10" ry="3.8" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.8" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconTypeScript() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="20" rx="2.5" />
      <path d="M7 9.5h5m-2.5 0V16" />
      <path d="M13.5 15.5c.4.4 1 .5 1.8.5.9 0 1.7-.45 1.7-1.5 0-.9-.7-1.2-1.75-1.5-1-.28-1.5-.7-1.5-1.5 0-1 .8-1.5 1.7-1.5.7 0 1.3.25 1.55.75" />
    </svg>
  );
}

function IconPython() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2C6.5 2 4 3.5 4 6v4h8V8.5C12 6 14.5 5 17.5 5" />
      <path d="M14.5 22c3 0 5.5-1.5 5.5-4v-4H12v1.5C12 18 9.5 19 6.5 19" />
      <circle cx="9" cy="5.5" r=".9" fill="currentColor" stroke="none" />
      <circle cx="15" cy="18.5" r=".9" fill="currentColor" stroke="none" />
    </svg>
  );
}


function IconDocker() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="10.5" width="3" height="2.5" rx="0.5" />
      <rect x="6" y="10.5" width="3" height="2.5" rx="0.5" />
      <rect x="10" y="10.5" width="3" height="2.5" rx="0.5" />
      <rect x="6" y="7.5" width="3" height="2.5" rx="0.5" />
      <path d="M1 15c2 3 6 3.5 12 1.5l3-1c2-4-1-5-2.5-5H2" />
      <path d="M18 8c.5-1.5 2-2 3-2" />
    </svg>
  );
}

const logos = [
  { name: "Next.js",    Icon: IconNextjs },
  { name: "React",      Icon: IconReact },
  { name: "TypeScript", Icon: IconTypeScript },
  { name: "Python",     Icon: IconPython },
  { name: "Docker",     Icon: IconDocker },
];

export default function LogoStrip() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.inner}>
        <div className={styles.track}>
          {[1, 2, 3].map((set) => (
            <div key={set} className={styles.set}>
              {logos.map(({ name, Icon }) => (
                <div key={name} className={styles.logo}><Icon /></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/composents/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#eeebe4",
        navy: "#3d3d52",
        "navy-muted": "#9a9aaa",
        "site-black": "#0a0a0a",
        "border-dark": "#111111",
        "border-darker": "#161616",
        "tag-warm": "#2e2418",
        "tag-neutral": "#1e1e1e",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "Georgia", "serif"],
        space: ["var(--font-space)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

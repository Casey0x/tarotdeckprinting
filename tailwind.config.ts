import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          deep: "#0B2516",
          mid: "#0D2518",
        },
        midnight: "#0D1B2A",
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E8C84A",
          dark: "#B8942A",
        },
        cream: {
          DEFAULT: "#EDE8DC",
          dark: "#E2DACC",
        },
        sage: "#6A9E72",
        "text-light": "#F2F4F3",
      },
      fontFamily: {
        cinzel: ["var(--font-cinzel)", "serif"],
        "cinzel-deco": ["var(--font-cinzel-deco)", "serif"],
        lato: ["var(--font-lato)", "sans-serif"],
      },
      maxWidth: {
        site: "1200px",
      },
      letterSpacing: {
        nav: "0.12em",
        eyebrow: "0.18em",
      },
    },
  },
  plugins: [],
};

export default config;

import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./sections/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,js,json}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "var(--font-sans-sc)", "system-ui", "sans-serif"]
      },
      colors: {
        base: {
          50: "var(--bg)",
          100: "var(--surface)",
          200: "var(--border)",
          300: "var(--chip-bg)",
          400: "var(--muted-2)",
          500: "var(--muted)",
          600: "var(--muted)",
          700: "var(--text)",
          800: "var(--text)",
          900: "var(--text)"
        },
        brand: {
          400: "var(--primary)",
          500: "var(--primary)",
          600: "var(--primary-hover)"
        },
        accent: {
          400: "var(--accent)",
          500: "var(--accent)",
          600: "var(--accent)"
        }
      },
      boxShadow: {
        soft: "0 10px 40px rgba(17, 24, 39, 0.08)",
        glow: "0 10px 24px rgba(17, 24, 39, 0.12)"
      },
      backdropBlur: {
        xs: "2px"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(15, 118, 110, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(15, 118, 110, 0.06) 1px, transparent 1px)",
        "hero-glow":
          "radial-gradient(circle at 30% 20%, rgba(204, 251, 241, 0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(15, 118, 110, 0.12), transparent 45%)"
      },
      animation: {
        float: "float 10s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" }
        }
      }
    }
  },
  plugins: []
};

export default config;

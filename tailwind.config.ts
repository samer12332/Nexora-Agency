import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#070B14",
        panel: "#0F172A",
        accent: "#38BDF8",
        neon: "#22D3EE",
        gold: "#F59E0B",
      },
      boxShadow: {
        glow: "0 0 40px rgba(56, 189, 248, 0.25)",
      },
      backgroundImage: {
        aura:
          "radial-gradient(circle at 20% 20%, rgba(56, 189, 248, 0.2), transparent 35%), radial-gradient(circle at 80% 10%, rgba(34, 211, 238, 0.16), transparent 35%), radial-gradient(circle at 50% 80%, rgba(245, 158, 11, 0.14), transparent 40%)",
      },
      fontFamily: {
        sans: ["Poppins", "Tajawal", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;

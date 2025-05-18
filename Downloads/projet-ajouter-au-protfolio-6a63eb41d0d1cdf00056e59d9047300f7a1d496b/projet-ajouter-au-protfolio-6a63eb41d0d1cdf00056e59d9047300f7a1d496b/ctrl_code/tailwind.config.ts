import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Black_folio: "#2c3036",
        Black_folio1: "#282c33",
        primary_folio: "#c778dd",
        gray_folio: "#ABB2BF",
        /* Hover colors */
        Hover_Black_folio: "#1A1A1A",
        Hover_Primary_folio: " #403943",
        Hover_Gray_folio: "#E1E8EF",
      },
      fontFamily: {
        // police perso
        FleurDeLeah: ["--font-FleurDeLeah "],
        DancingBold: ["--font-DancingBold"],
        DancingVar: ["--font-DancingVar"],
        // police du projet

        FiraCodeBold: ["var(--font-FiraCode)"],
        FiraCodeLight: ["var(--font-FiraCode)"],
        FiraCodeMedium: ["var(--font-FiraCode)"],
        FiraCodeRegular: ["var(--font-FiraCode)"],
        FiraCodeSemiBold: ["var(--font-FiraCode)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

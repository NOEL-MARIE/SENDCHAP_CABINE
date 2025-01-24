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
        Black_folio: "#000000",
        primary_folio: "#C778DD",
        gray_folio: "#ABB2BF",
        /* Hover colors */
        Hover_Black_folio: "#1A1A1A",
        Hover_Primary_folio: " #E09FF1",
        Hover_Gray_folio: "#E1E8EF",
      },
      fontFamily: {
        FiraCode: ["var(--font-FiraCode)"],
        FcBold: ["var(--font-FiraCode)"],
        FcLight: ["var(--font-FiraCode)"],
        FcMedium: ["var(--font-FiraCode)"],
        FcRegular: ["var(--font-FiraCode)"],
        FcSemibold: ["var(--font-FiraCode)"],
      },
    },
  },
  plugins: [],
} satisfies Config;

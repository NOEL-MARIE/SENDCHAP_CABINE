"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "react-feather"; // Tu peux utiliser React Icons si tu préfères

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray_folio dark:hover:bg-gray_folio transition"
      aria-label="Toggle Dark Mode"
    >
      {theme === "dark" ? <Sun size={20} color="#c778dd" /> : <Moon size={20} color="#c778dd" />}
    </button>
  );
}

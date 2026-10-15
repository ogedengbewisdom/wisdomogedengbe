"use client";

import { useState } from "react";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  function selectTheme(nextTheme: Theme) {
    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
  }

  function toggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    selectTheme(nextTheme);
  }

  return (
    <div aria-label="Color theme" className="theme-toggle" role="group">
      <button
        aria-label="Switch to light mode"
        aria-pressed={theme === "light"}
        className="theme-option"
        onClick={toggleTheme}
        type="button"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20">
          <circle cx="10" cy="10" r="3.5" />
          <path d="M10 1.5v2M10 16.5v2M1.5 10h2M16.5 10h2M4 4l1.4 1.4m9.2 9.2L16 16m0-12-1.4 1.4m-9.2 9.2L4 16" />
        </svg>
        <span>Light</span>
      </button>
      <button
        aria-label="Switch to dark mode"
        aria-pressed={theme === "dark"}
        className="theme-option"
        onClick={toggleTheme}
        type="button"
      >
        <svg aria-hidden="true" viewBox="0 0 20 20">
          <path d="M15.9 12.8A7 7 0 0 1 7.2 4.1 7 7 0 1 0 15.9 12.8Z" />
        </svg>
        <span>Dark</span>
      </button>
    </div>
  );
}

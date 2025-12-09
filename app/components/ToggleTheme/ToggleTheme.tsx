"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [light, setLight] = useState(() => {
    if (typeof window === "undefined") return false; // Server fallback
    return localStorage.getItem("theme") === "light";
  });

  // Sync DOM whenever theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  function toggleTheme() {
    const newLight = !light;
    setLight(newLight);
    localStorage.setItem("theme", newLight ? "light" : "dark");
  }

  return (
    <button
      onClick={toggleTheme}
      className="rounded-l-full cursor-pointer fixed z-50 right-0 bottom-[50%] text-[22px] px-4 h-max w-max py-4 rounded bg-neutral-600 text-white light:bg-stone-300 light:text-stone-700"
    >
      {light ? <FaMoon /> : <FaSun />}
    </button>
  );
}

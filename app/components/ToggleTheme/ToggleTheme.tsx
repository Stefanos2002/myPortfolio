"use client";
import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle() {
  const [light, setLight] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedLight = localStorage.getItem("theme") === "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLight(storedLight);

    document.documentElement.classList.toggle("light", storedLight);
    setMounted(true);
  }, []);

  if (!mounted) return null; // 🔥 Prevent hydration mismatch

  return (
    <button
      onClick={() => {
        const newLight = !light;
        setLight(newLight);
        localStorage.setItem("theme", newLight ? "light" : "dark");
        document.documentElement.classList.toggle("light", newLight);
      }}
      className="rounded-full xl:rounded-r-none xl:rounded-l-full transition-colors duration-300 cursor-pointer absolute z-50 right-15 xl:right-0 top-3 xl:top-[50%] text-[22px] px-2.5 xl:px-4 h-max w-max py-2.5 xl:py-4 bg-[#626262] xl:bg-neutral-600 text-white light:bg-stone-300 light:text-stone-700"
    >
      {light ? <FaMoon /> : <FaSun />}
    </button>
  );
}

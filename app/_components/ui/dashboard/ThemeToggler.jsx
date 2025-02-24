"use client";

import { LuMoon, LuSun } from "react-icons/lu";
import { useTheme } from "../../contexts/ThemeContext";

const ThemeToggler = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-1">
      <span className="text-text opacity-100 dark:opacity-25">
        <LuSun />
      </span>
      <div
        onClick={toggleTheme}
        className="relative w-12 h-5 bg-white shadow-md dark:shadow-transparent rounded-full cursor-pointer"
      >
        <span className="absolute top-1/2 right-0 dark:right-[calc(100%-20px)] -translate-y-1/2 w-5 h-5 bg-sky-600 rounded-full"></span>
      </div>
      <span className="text-text opacity-25 dark:opacity-100">
        <LuMoon />
      </span>
    </div>
  );
};

export default ThemeToggler;

"use client";

const { createContext, useState, useEffect, useContext } = require("react");

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    let isDark = false;

    if (localStorage.getItem("theme")) {
      isDark = localStorage.getItem("theme") === "dark";
    } else {
      isDark = window.matchMedia("(prefers-color-scheme: dark)");
    }

    setTheme(isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [setTheme]);

  const toggleTheme = () => {
    setTheme((t) => (t === "light" ? "dark" : "light"));
    localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Please use the ThemeContext inside its provider!");
  }

  return context;
};

export { ThemeProvider, useTheme };

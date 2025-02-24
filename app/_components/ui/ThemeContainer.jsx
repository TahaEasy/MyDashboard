"use client";

import { useTheme } from "../contexts/ThemeContext";

const ThemeContainer = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div data-theme={theme}>
      <div>{children}</div>
    </div>
  );
};

export default ThemeContainer;

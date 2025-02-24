"use client";

import { useTheme } from "../../contexts/ThemeContext";

const Body = ({ children, className = "" }) => {
  const { theme } = useTheme();

  return (
    <body data-theme={theme} className={className}>
      {children}
    </body>
  );
};

export default Body;

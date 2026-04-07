import { useState, useMemo } from "react";
import { ThemeReadContext, ThemeDispatchContext } from "./ThemeContext";

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // Memoized value to ensure referential stability
  const themeValue = useMemo(() => ({ theme }), [theme]);

  return (
    <ThemeReadContext.Provider value={themeValue}>
      <ThemeDispatchContext.Provider value={setTheme}>
        {children}
      </ThemeDispatchContext.Provider>
    </ThemeReadContext.Provider>
  );
}
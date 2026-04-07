import { useContext } from "react";
import { ThemeDispatchContext } from "../context/ThemeContext";

export function ThemeToggle() {
  const setTheme = useContext(ThemeDispatchContext);

  console.log("ThemeToggle rendered");

  return (
    <button
      onClick={() =>
        setTheme((prev) => (prev === "light" ? "dark" : "light"))
      }
    >
      Toggle Theme
    </button>
  );
}
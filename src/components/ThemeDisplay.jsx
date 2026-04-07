import { useContext } from "react";
import { ThemeReadContext } from "../context/ThemeContext";

export function ThemeDisplay() {
  const { theme } = useContext(ThemeReadContext);

  console.log("ThemeDisplay rendered");

  return (
    <div>
      <h2>Current Theme: {theme}</h2>
    </div>
  );
}
import { ThemeProvider } from "./context/ThemeProvider";
import { ThemeDisplay } from "./components/ThemeDisplay";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: "20px" }}>
        <h1>Theme Manager</h1>
        <ThemeDisplay />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
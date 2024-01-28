import { ThemeSwticher } from "./components/ThemeSwitcher";
import { useThemeStore } from "./hooks";

function App() {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div data-theme={theme} className="w-screen h-screen">
      <h1 className="text-3xl font-bold underline">Hello React Pokedex</h1>

      <button className="btn btn-primary">Button</button>

      <ThemeSwticher />
    </div>
  );
}

export default App;

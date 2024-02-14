import { Link, Outlet } from "@tanstack/react-router";
import { useThemeStore } from "@/hooks";
import { ThemeSwticher } from "@/components/ThemeSwitcher";

export const App = () => {
  const theme = useThemeStore((state) => state.theme);

  return (
    <div data-theme={theme} className="w-screen h-screen">
      <nav>
        <div className="p-2 flex gap-2">
          <Link to="/" className="[&.active]:font-bold">
            Home
          </Link>
          <Link to="/layoutA" className="[&.active]:font-bold">
            Layout A
          </Link>
          <Link to="/layoutA/layoutAA" className="[&.active]:font-bold">
            Layout AA
          </Link>
          <Link to="/layoutB" className="[&.active]:font-bold">
            Layout B
          </Link>
          <Link to="/layoutB/layoutBB" className="[&.active]:font-bold">
            Layout BB
          </Link>
          <Link to="/layoutC" className="[&.active]:font-bold">
            Layout C
          </Link>
        </div>
        <hr />
        <h1 className="text-3xl font-bold underline">Hello React Pokedex</h1>

        <button className="btn btn-primary">Button</button>

        <ThemeSwticher />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

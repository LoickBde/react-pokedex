import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { useThemeStore } from "../hooks";
import { ThemeSwticher } from "../components/ThemeSwitcher";
import { useQuery } from "@tanstack/react-query";
import { pokeapi } from "../api";

const App = () => {
  const theme = useThemeStore((state) => state.theme);

  const { data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => pokeapi.getPokemons(),
    retry: false,
    enabled: true,
  });

  const pokemonsList = data && (
    <ul>
      {data.results.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );

  return (
    <div data-theme={theme} className="w-screen h-screen">
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

      {pokemonsList}

      <Outlet />
    </div>
  );
};

export const Route = createRootRoute({
  component: App,
  notFoundComponent: () => {
    return <p>NOT FOUND</p>;
  },
});

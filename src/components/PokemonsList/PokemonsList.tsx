import { PokemonListProps } from "./PokemonsList.props";

export const PokemonsList = ({
  pokemons,
  setSelectedPokemon,
}: PokemonListProps) => {
  return (
    <ul className="overflow-y-auto w-1/6">
      {pokemons?.map((pokemon, index) => (
        <li key={pokemon.name}>
          <button
            className="btn rounded-none w-full h-16 justify-start"
            onClick={() => setSelectedPokemon(pokemon)}
          >
            {index + 1}. {pokemon.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

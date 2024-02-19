import { PokemonListItemType, PokemonListType } from "@/types";

export type PokemonListProps = {
  pokemons: PokemonListType;
  setSelectedPokemon: (pokemon: PokemonListItemType) => void;
};

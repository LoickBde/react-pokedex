import { PokemonDetailsListType, PokemonDetailsType } from "@/types";

export type PokemonListProps = {
  pokemons: PokemonDetailsListType;
  setSelectedPokemon: (pokemon: PokemonDetailsType | null) => void;
  lastListItemRef: (instance: Element | null) => void;
};

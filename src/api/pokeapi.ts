import { PokemonListItemType } from "../types";
import {
  PaginateCollectionType,
  getRequestBuilder,
  processCall,
} from "./utils";

const getPokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  return processCall<PaginateCollectionType<PokemonListItemType>>({
    request: getRequestBuilder({
      url,
    }),
  }) as Promise<PaginateCollectionType<PokemonListItemType>>;
};

export const pokeapi = {
  getPokemons,
};

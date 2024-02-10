import { environment } from "@/environments";
import { PokemonListItemType } from "@/types";
import {
  PaginateCollectionType,
  getRequestBuilder,
  processCall,
} from "./utils";

const baseUrl = `${environment.pokeApiBaseUrl}${environment.pokeApiVersion}`;

const getPokemons = () => {
  const url = `${baseUrl}/pokemon`;
  return processCall<PaginateCollectionType<PokemonListItemType>>({
    request: getRequestBuilder({
      url,
    }),
  }) as Promise<PaginateCollectionType<PokemonListItemType>>;
};

export const pokeapi = {
  getPokemons,
};

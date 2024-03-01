import { environment } from "@/environments";
import { PokemonDetailsType, PokemonNameType } from "@/types";
import {
  PaginateCollectionType,
  getRequestBuilder,
  processCall,
} from "./utils";

const baseUrl = `${environment.pokeApiBaseUrl}${environment.pokeApiVersion}`;

const getPokemonNames = () => {
  const url = `${baseUrl}/pokemon`;
  return processCall<PaginateCollectionType<PokemonNameType>>({
    request: getRequestBuilder({
      url,
    }),
  }) as Promise<PaginateCollectionType<PokemonNameType>>;
};

const getPokemonInformations = ({ name }: { name: string }) => {
  const url = `${baseUrl}/pokemon/${name}`;
  return processCall<PokemonDetailsType>({
    request: getRequestBuilder({
      url,
    }),
  }) as Promise<PokemonDetailsType>;
};

export const pokeapi = {
  getPokemonNames,
  getPokemonInformations,
};

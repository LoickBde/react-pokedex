import { pokeapi } from "@/api";
import { PokemonDetailsListType } from "@/types";

const getPokemonListWithInformations = async () => {
  let pokemonInformations: PokemonDetailsListType = [];

  try {
    const pokemonNamesListResp = await pokeapi.getPokemonNames();
    const pokemonNamesListData = pokemonNamesListResp.results;

    const pokemonDetailsResponses = await Promise.allSettled(
      pokemonNamesListData.map((pokemonNameItem) =>
        pokeapi.getPokemonInformations({ name: pokemonNameItem.name })
      )
    );

    pokemonInformations = pokemonDetailsResponses.map((resp) =>
      resp.status === "fulfilled" ? resp.value : null
    );

    return pokemonInformations;
  } catch (error) {
    return pokemonInformations;
  }
};

export const queriesPokeapi = {
  getPokemonListWithInformations,
};

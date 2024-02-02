import { getRequestBuilder, processCall } from "./utils";

const getPokemons = () => {
  const url = "https://pokeapi.co/api/v2/pokemon";
  return processCall({
    request: getRequestBuilder({
      url,
    }),
  });
};

export const pokeapi = {
  getPokemons,
};

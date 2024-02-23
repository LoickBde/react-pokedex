import { LoadingError } from "@/components/LoadingError";
import { PokemonsList } from "@/components/PokemonsList";
import { queriesPokeapi } from "@/queries";
import { PokemonDetailsType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

export const Home = () => {
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonDetailsType | null>();
  const { data, isFetching, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => queriesPokeapi.getPokemonListWithInformations(),
    retry: false,
    enabled: true,
  });

  const pokemons = data;

  return (
    <div className="h-full flex flex-row items-stretch">
      {pokemons && pokemons.length > 0 && (
        <PokemonsList
          pokemons={pokemons}
          setSelectedPokemon={setSelectedPokemon}
        />
      )}
      <LoadingError isLoading={isFetching} isError={isError} />
      <p>{selectedPokemon?.name}</p>
    </div>
  );
};

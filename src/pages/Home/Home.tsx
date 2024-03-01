import { LoadingError } from "@/components/LoadingError";
import { PokemonsList } from "@/components/PokemonsList";
import { queriesPokeapi } from "@/queries";
import { PokemonDetailsType } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useState } from "react";

export const Home = () => {
  const [lastListItemRef, lastListItemEntry] = useIntersectionObserver({});
  const [selectedPokemon, setSelectedPokemon] =
    useState<PokemonDetailsType | null>();
  const { data, isFetching, isError } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => queriesPokeapi.getPokemonListWithInformations(),
    retry: false,
    enabled: true,
  });

  const pokemons = data;

  console.log(lastListItemEntry?.isIntersecting);

  return (
    <div className="h-full flex flex-row items-stretch">
      {pokemons && pokemons.length > 0 && (
        <PokemonsList
          pokemons={pokemons}
          setSelectedPokemon={setSelectedPokemon}
          lastListItemRef={lastListItemRef}
        />
      )}
      <LoadingError isLoading={isFetching} isError={isError} />
      <p>{selectedPokemon?.name}</p>
    </div>
  );
};

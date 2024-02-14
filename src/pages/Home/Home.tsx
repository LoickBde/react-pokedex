import { pokeapi } from "@/api";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const { data } = useQuery({
    queryKey: ["pokemons"],
    queryFn: () => pokeapi.getPokemons(),
    retry: false,
    enabled: true,
  });

  console.log(data?.results);

  return <h1>Home Page</h1>;
};

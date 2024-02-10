import { getEnvVar } from "@/utils";

export const environment = {
  pokeApiBaseUrl: getEnvVar<string>("VITE_POKEAPI_BASE_URL") ?? null,
  pokeApiVersion: getEnvVar<string>("VITE_POKEAPI_VERSION") ?? null,
};

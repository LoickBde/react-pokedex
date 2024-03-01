export type PokemonNameType = {
  name: string;
  url: string;
};

export type PokemonNamesListType = PokemonNameType[];

export type PokemonDetailsType = {
  abilities: [];
  base_experience: number;
  cries: {};
  forms: [];
  game_indices: [];
  height: 3;
  held_items: [];
  id: 132;
  is_default: boolean;
  location_area_encounters: string;
  moves: [];
  name: string;
  order: number;
  past_abilities: [];
  past_types: [];
  species: {};
  sprites: {};
  stats: [];
  weight: 40;
};

export type PokemonDetailsListType = (PokemonDetailsType | null)[];

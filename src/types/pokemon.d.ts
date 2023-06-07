interface Abilities {
  ability: { name: string; url: string };
}

interface Moves {
  move: { name: string; url: string };
}

interface Sprites {
  other: { "official-artwork": { front_default: string; front_shiny: string } };
}

interface Stats {
  base_stat: number;
  stat: { name: string; url: string };
}

interface Types {
  type: { name: string; url: string };
}

export interface IUnparsedPokemon {
  abilities: Abilities[];
  base_experience: number;
  height: number;
  id: number;
  moves: Moves[];
  name: string;
  species: { name: string; url: string };
  sprites: Sprites;
  stats: Stats[];
  types: Types[];
  weight: number;
}

export interface IParsedPokemon {
  displayName: string;
  abilities: { name: string; url: string }[];
  baseExperience: number;
  height: number;
  id: number;
  moves: { name: string; url: string }[];
  name: string;
  species: { name: string; url: string };
  pictures: { default: string; shiny: string };
  stats: { baseStat: number; name: string }[];
  types: { name: string; url: string }[];
  weight: number;
}

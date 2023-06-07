export interface IUnparsedGeneration {
  abilities: { name: string; url: string }[] | [];
  id: number;
  main_region: { name: string; url: string };
  moves: { name: string; url: string }[];
  name: string;
  pokemon_species: { name: string; url: string }[];
  types: { name: string; url: string }[] | [];
}

export interface IParsedGeneration {
  abilities: { name: string; url: string }[] | [];
  id: number;
  mainRegion: string;
  moves: { name: string; url: string }[];
  pokemonSpecies: { name: string; url: string }[];
  types: { name: string; url: string }[] | [];
}

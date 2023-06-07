import { IParsedPokemon } from "../types/pokemon";

export default class Pokemon implements IParsedPokemon {
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

  constructor(pokemonData: IParsedPokemon) {
    this.displayName = pokemonData.displayName;
    this.abilities = pokemonData.abilities;
    this.baseExperience = pokemonData.baseExperience;
    this.height = pokemonData.height;
    this.id = pokemonData.id;
    this.moves = pokemonData.moves;
    this.name = pokemonData.name;
    this.species = pokemonData.species;
    this.pictures = pokemonData.pictures;
    this.stats = pokemonData.stats;
    this.types = pokemonData.types;
    this.weight = pokemonData.weight;
  }
}

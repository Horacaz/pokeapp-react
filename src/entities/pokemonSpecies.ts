import { IParsedPokemonSpecies } from "../types/pokemonSpecies";

export default class PokemonSpecies implements IParsedPokemonSpecies {
  description: string;
  genus: string;
  generation: { name: string; url: string };
  id: number;
  name: string;
  varieties: { name: string; url: string }[];

  constructor(speciesData: IParsedPokemonSpecies) {
    this.description = speciesData.description;
    this.genus = speciesData.genus;
    this.generation = speciesData.generation;
    this.id = speciesData.id;
    this.name = speciesData.name;
    this.varieties = speciesData.varieties;
  }
}

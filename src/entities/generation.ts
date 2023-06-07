import { IParsedGeneration } from "../types/generation";

export default class Generation implements IParsedGeneration {
  abilities: { name: string; url: string }[];
  id: number;
  mainRegion: string;
  moves: { name: string; url: string }[];
  pokemonSpecies: { name: string; url: string }[];
  types: { name: string; url: string }[];

  constructor(generationData: IParsedGeneration) {
    this.abilities = generationData.abilities;
    this.id = generationData.id;
    this.mainRegion = generationData.mainRegion;
    this.moves = generationData.moves;
    this.pokemonSpecies = generationData.pokemonSpecies;
    this.types = generationData.types;
  }
}

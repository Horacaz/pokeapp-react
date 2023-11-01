import { IParsedPokemonList } from "../types/pokemonList";

export default class PokemonList implements IParsedPokemonList {
  count: number;
  next: string;
  results: { name: string; url: string }[];
  constructor(pokemonList: IParsedPokemonList) {
    this.count = pokemonList.count;
    this.next = pokemonList.next;
    this.results = pokemonList.results;
  }
}

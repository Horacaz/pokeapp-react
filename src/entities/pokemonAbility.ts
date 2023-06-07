import { IParsedPokemonAbility } from "../types/pokemonAbility";

export default class PokemonAbility implements IParsedPokemonAbility {
  ability: { description: string; effect: string };
  generation: { name: string; url: string };
  id: number;
  pokemon: { name: string; url: string }[];
  displayName: string;
  constructor(pokemonAbility: IParsedPokemonAbility) {
    this.ability = pokemonAbility.ability;
    this.generation = pokemonAbility.generation;
    this.id = pokemonAbility.id;
    this.pokemon = pokemonAbility.pokemon;
    this.displayName = pokemonAbility.displayName;
  }
}

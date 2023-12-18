import {
  getPokemon,
  savePokemon,
  getPokemonTypes,
  savePokemonTypes,
  getPokemonSpecies,
  savePokemonSpecies,
  getGeneration,
  saveGeneration,
  getPokemonAbility,
  savePokemonAbility,
  getPokemonMoves,
  savePokemonMoves,
  getPokemonList,
  savePokemonList,
} from "./../storage/storage";

import { IParsedPokemon } from "../types/pokemon";
import { IParsedType } from "../types/pokemonType";
import { IParsedPokemonSpecies } from "../types/pokemonSpecies";
import { IParsedGeneration } from "../types/generation";
import { IParsedPokemonAbility } from "../types/pokemonAbility";
import { IParsedPokemonMove } from "../types/pokemonMove";
import { IParsedPokemonList } from "../types/pokemonList";

export default class StorageService {
  getPokemon(pokemon: string) {
    return getPokemon(pokemon);
  }

  getPokemonTypes(typeID: number) {
    return getPokemonTypes(typeID);
  }

  getPokemonSpecies(speciesId: number) {
    return getPokemonSpecies(speciesId);
  }

  getGeneration(generationId: number) {
    return getGeneration(generationId);
  }

  getPokemonAbility(ability: string) {
    return getPokemonAbility(ability);
  }

  getPokemonMoves(move: number) {
    return getPokemonMoves(move);
  }

  getPokemonList(offset: number) {
    return getPokemonList(offset);
  }

  savePokemon(pokemon: IParsedPokemon) {
    return savePokemon(pokemon);
  }

  savePokemonTypes(pokemonType: IParsedType) {
    return savePokemonTypes(pokemonType);
  }

  savePokemonSpecies(pokemonSpecies: IParsedPokemonSpecies) {
    return savePokemonSpecies(pokemonSpecies);
  }

  saveGeneration(generation: IParsedGeneration) {
    return saveGeneration(generation);
  }

  savePokemonAbility(ability: IParsedPokemonAbility) {
    return savePokemonAbility(ability);
  }

  savePokemonMoves(move: IParsedPokemonMove) {
    return savePokemonMoves(move);
  }

  savePokemonList({
    offset,
    pokemonList,
  }: {
    offset: number;
    pokemonList: IParsedPokemonList;
  }) {
    return savePokemonList({ offset, pokemonList });
  }
}

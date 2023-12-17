import ApiService from "./apiService";
import StorageService from "./storageService";
import mapGeneration from "../mappers/generationMapper";
import mapPokemon from "../mappers/pokemonMapper";
import mapPokemonAbility from "../mappers/pokemonAbilityMapper";
import mapPokemonType from "../mappers/pokemonTypeMapper";
import mapPokemonMove from "../mappers/pokemonMoveMapper";
import mapPokemonSpecies from "../mappers/pokemonSpeciesMapper";
import mapPokemonList from "../mappers/pokemonListMapper";
import { IParsedPokemonAbility } from "../types/pokemonAbility";
import { IParsedGeneration } from "../types/generation";
import { IParsedPokemonList } from "../types/pokemonList";
import { IParsedPokemonMove } from "../types/pokemonMove";
import { IParsedType } from "../types/pokemonType";
import { IParsedPokemon } from "../types/pokemon";
import { IParsedPokemonSpecies } from "../types/pokemonSpecies";

export default class PokemonApp {
  api: ApiService;
  storage: StorageService;
  constructor(apiService: ApiService, storageService: StorageService) {
    this.api = apiService;
    this.storage = storageService;
  }
  async getPokemon(name: string): Promise<IParsedPokemon> {
    try {
      return this.storage.getPokemon(name);
    } catch (error) {
      const pokemon = mapPokemon(await this.api.getPokemon(name));
      this.storage.savePokemon(pokemon);
      return pokemon;
    }
  }

  async getAbility(name: string): Promise<IParsedPokemonAbility> {
    try {
      return this.storage.getPokemonAbility(name);
    } catch (error) {
      const ability = mapPokemonAbility(await this.api.getAbility(name));
      this.storage.savePokemonAbility(ability);
      return ability;
    }
  }

  async getGeneration(id: number): Promise<IParsedGeneration> {
    try {
      return this.storage.getGeneration(id);
    } catch (error) {
      const generation = mapGeneration(await this.api.getGeneration(id));
      this.storage.saveGeneration(generation);
      return generation;
    }
  }

  async getType(id: number): Promise<IParsedType> {
    try {
      return this.storage.getPokemonTypes(id);
    } catch (error) {
      const type = mapPokemonType(await this.api.getType(id));
      this.storage.savePokemonTypes(type);
      return type;
    }
  }

  async getMove(id: number): Promise<IParsedPokemonMove> {
    try {
      return this.storage.getPokemonMoves(id);
    } catch (error) {
      const move = mapPokemonMove(await this.api.getMove(id));
      this.storage.savePokemonMoves(move);
      return move;
    }
  }

  async getSpecies(id: number): Promise<IParsedPokemonSpecies> {
    try {
      return this.storage.getPokemonSpecies(id);
    } catch (error) {
      const species = mapPokemonSpecies(await this.api.getPokemonSpecies(id));
      this.storage.savePokemonSpecies(species);
      return species;
    }
  }

  async getPokemonList(
    limit: number,
    offset: number
  ): Promise<IParsedPokemonList> {
    try {
      return this.storage.getPokemonList(offset);
    } catch (error) {
      const pokemonList = mapPokemonList(
        await this.api.getPokemonList(limit, offset)
      );
      this.storage.savePokemonList({ offset, pokemonList });
      return pokemonList;
    }
  }
}

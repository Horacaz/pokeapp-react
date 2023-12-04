import { IParsedPokemon } from "../../types/pokemon";
import { IParsedType } from "../../types/pokemonType";
import { IParsedPokemonSpecies } from "../../types/pokemonSpecies";
import { IParsedGeneration } from "../../types/generation";
import { IParsedPokemonAbility } from "../../types/pokemonAbility";
import { IParsedPokemonMove } from "../../types/pokemonMove";
import { IParsedPokemonList } from "../../types/pokemonList";
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
} from "./../../storage/storage";
import StorageService from "../storageService";
vitest.mock("./../../storage/storage");

describe("StorageService", () => {
  const storage = new StorageService();
  describe("pokemon", () => {
    test("getPokemon", () => {
      const pokemonName = "pikachu";
      storage.getPokemon(pokemonName);
      expect(getPokemon).toHaveBeenCalledWith(pokemonName);
    });

    test("savePokemon", () => {
      const pokemon = {} as IParsedPokemon;
      storage.savePokemon(pokemon);
      expect(savePokemon).toHaveBeenCalledWith(pokemon);
    });
  });

  describe("pokemonTypes", () => {
    test("getPokemonTypes", () => {
      const typeID = 1;
      storage.getPokemonTypes(typeID);
      expect(getPokemonTypes).toHaveBeenCalledWith(typeID);
    });

    test("savePokemonTypes", () => {
      const pokemonType = {} as IParsedType;
      storage.savePokemonTypes(pokemonType);
      expect(savePokemonTypes).toHaveBeenCalledWith(pokemonType);
    });
  });

  describe("pokemonSpecies", () => {
    test("getPokemonSpecies", () => {
      const speciesName = "pikachu";
      storage.getPokemonSpecies(speciesName);
      expect(getPokemonSpecies).toHaveBeenCalledWith(speciesName);
    });

    test("savePokemonSpecies", () => {
      const pokemonSpecies = {} as IParsedPokemonSpecies;
      storage.savePokemonSpecies(pokemonSpecies);
      expect(savePokemonSpecies).toHaveBeenCalledWith(pokemonSpecies);
    });
  });

  describe("generation", () => {
    test("getGeneration", () => {
      const generationId = 1;
      storage.getGeneration(generationId);
      expect(getGeneration).toHaveBeenCalledWith(generationId);
    });

    test("saveGeneration", () => {
      const generation = {} as IParsedGeneration;
      storage.saveGeneration(generation);
      expect(saveGeneration).toHaveBeenCalledWith(generation);
    });
  });

  describe("pokemonAbility", () => {
    test("getPokemonAbility", () => {
      const ability = "ability";
      storage.getPokemonAbility(ability);
      expect(getPokemonAbility).toHaveBeenCalledWith(ability);
    });

    test("savePokemonAbility", () => {
      const pokemonAbility = {} as IParsedPokemonAbility;
      storage.savePokemonAbility(pokemonAbility);
      expect(savePokemonAbility).toHaveBeenCalledWith(pokemonAbility);
    });
  });

  describe("pokemonMoves", () => {
    test("getPokemonMoves", () => {
      const moveID = 1;
      storage.getPokemonMoves(moveID);
      expect(getPokemonMoves).toHaveBeenCalledWith(moveID);
    });

    test("savePokemonMoves", () => {
      const pokemonMove = {} as IParsedPokemonMove;
      storage.savePokemonMoves(pokemonMove);
      expect(savePokemonMoves).toHaveBeenCalledWith(pokemonMove);
    });
  });

  describe("pokemonList", () => {
    test("getPokemonList", () => {
      const offset = 20;
      storage.getPokemonList(offset);
      expect(getPokemonList).toHaveBeenCalledWith(offset);
    });

    test("savePokemonList", () => {
      const offset = 20;
      const pokemonList = {} as IParsedPokemonList;
      storage.savePokemonList({ offset, pokemonList });
      expect(savePokemonList).toHaveBeenCalledWith({ offset, pokemonList });
    });
  });
});

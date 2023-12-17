import { IParsedPokemon } from "../../types/pokemon";
import { IParsedPokemonAbility } from "../../types/pokemonAbility";
import { IParsedPokemonList } from "../../types/pokemonList";
import { IParsedPokemonMove } from "../../types/pokemonMove";
import { IParsedPokemonSpecies } from "../../types/pokemonSpecies";
import { IParsedType } from "../../types/pokemonType";
import {
  getPokemonList,
  savePokemonList,
  getPokemon,
  savePokemon,
  getPokemonTypes,
  savePokemonTypes,
  getPokemonSpecies,
  savePokemonSpecies,
  getPokemonAbility,
  savePokemonAbility,
  getPokemonMoves,
  savePokemonMoves,
} from "../storage";

const setItemMock = vi.fn();
const getItemMock = vi.fn();
const jsonParseMock = vi.fn();

beforeEach(() => {
  Storage.prototype.setItem = setItemMock;
  Storage.prototype.getItem = getItemMock;
  JSON.parse = jsonParseMock;
  vi.clearAllMocks();
});

describe("pokemonList", () => {
  test("savePokemonList saves a pokemonList", () => {
    const mockPokemonList = [] as unknown as IParsedPokemonList;
    const offset = 0;
    savePokemonList({ offset, pokemonList: mockPokemonList });
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `list-${offset}`,
      JSON.stringify(mockPokemonList)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemonList is successfully called", () => {
    const offSet = 0;
    getPokemonList(offSet);
    expect(localStorage.getItem).toHaveBeenCalledWith(`list-${offSet}`);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});

describe("pokemon", () => {
  test("savePokemon saves a pokemon", () => {
    const pokemon = { name: "bulbasaur", id: 1 } as unknown as IParsedPokemon;
    savePokemon(pokemon);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "pokemon-bulbasaur-1",
      JSON.stringify(pokemon)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemon throws when key not found", () => {
    const searchQuery = "bulbasaur";
    expect(() => getPokemon(searchQuery)).toThrow();
  });

  test("getPokemon throws when search query is not a string or number", () => {
    const searchQuery = undefined;
    expect(() => getPokemon(searchQuery as unknown as string)).toThrow();
  });
});

describe("pokemonType", () => {
  test("savePokemonType saves a pokemonType", () => {
    const typeID = 1;
    const mockPokemonType = { id: typeID } as unknown as IParsedType;
    savePokemonTypes(mockPokemonType);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `type-${typeID}`,
      JSON.stringify(mockPokemonType)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemonType is successfully called", () => {
    const typeID = 1;
    getPokemonTypes(typeID);
    expect(localStorage.getItem).toHaveBeenCalledWith(`type-${typeID}`);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});

describe("pokemonSpecies", () => {
  test("savePokemonSpecies saves a pokemonSpecies", () => {
    const speciesId = 1;
    const mockPokemonSpecies = {
      id: speciesId,
    } as unknown as IParsedPokemonSpecies;
    savePokemonSpecies(mockPokemonSpecies);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `species-${speciesId}`,
      JSON.stringify(mockPokemonSpecies)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemonSpecies is successfully called", () => {
    const speciesId = 1;
    getPokemonSpecies(speciesId);
    expect(localStorage.getItem).toHaveBeenCalledWith(`species-${speciesId}`);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});

describe("pokemonAbility", () => {
  test("savePokemonAbility saves a pokemonAbility", () => {
    const mockPokemonAbility = {
      id: 1,
      displayName: "ability",
    } as unknown as IParsedPokemonAbility;
    savePokemonAbility(mockPokemonAbility);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `ability-${mockPokemonAbility.displayName}-${mockPokemonAbility.id}`,
      JSON.stringify(mockPokemonAbility)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemonAbility throws when key is not found", () => {
    const abilityId = 1;
    expect(() => getPokemonAbility(abilityId)).toThrow();
  });

  test("getPokemonAbility throws when search query is not a string or number", () => {
    const abilityId = undefined;
    expect(() => getPokemonAbility(abilityId as unknown as string)).toThrow();
  });
});

describe("pokemonMove", () => {
  test("savePokemonMove saves a pokemonMove", () => {
    const moveID = 1;
    const mockPokemonMove = { id: moveID } as unknown as IParsedPokemonMove;
    savePokemonMoves(mockPokemonMove);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `move-${moveID}`,
      JSON.stringify(mockPokemonMove)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemonMove is successfully called", () => {
    const moveID = 1;
    getPokemonMoves(moveID);
    expect(localStorage.getItem).toHaveBeenCalledWith(`move-${moveID}`);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});

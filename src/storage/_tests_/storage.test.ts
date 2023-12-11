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
    const pokemonName = "bulbasaur";
    const mockPokemon = { name: pokemonName } as unknown as IParsedPokemon;
    savePokemon(mockPokemon);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      pokemonName,
      JSON.stringify(mockPokemon)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemon is successfully called", () => {
    const pokemonName = "bulbasaur";
    getPokemon(pokemonName);
    expect(localStorage.getItem).toHaveBeenCalledWith(pokemonName);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
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
    const speciesName = "bulbasaur";
    const mockPokemonSpecies = {
      name: speciesName,
    } as unknown as IParsedPokemonSpecies;
    savePokemonSpecies(mockPokemonSpecies);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `species-${speciesName}`,
      JSON.stringify(mockPokemonSpecies)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemonSpecies is successfully called", () => {
    const speciesName = "bulbasaur";
    getPokemonSpecies(speciesName);
    expect(localStorage.getItem).toHaveBeenCalledWith(`species-${speciesName}`);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
  });
});

describe("pokemonAbility", () => {
  test("savePokemonAbility saves a pokemonAbility", () => {
    const abilityID = 1;
    const mockPokemonAbility = {
      id: abilityID,
    } as unknown as IParsedPokemonAbility;
    savePokemonAbility(mockPokemonAbility);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      `ability-${abilityID}`,
      JSON.stringify(mockPokemonAbility)
    );
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
  });

  test("getPokemonAbility is successfully called", () => {
    const abilityName = "blaze";
    getPokemonAbility(abilityName);
    expect(localStorage.getItem).toHaveBeenCalledWith(`ability-${abilityName}`);
    expect(localStorage.getItem).toHaveBeenCalledTimes(1);
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

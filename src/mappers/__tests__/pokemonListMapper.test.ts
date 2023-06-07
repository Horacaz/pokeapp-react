import mapPokemonList from "../pokemonListMapper";
import capitalizeString from "../../utils/capitalizeString";
import {
  IUnparsedPokemonList,
  IParsedPokemonList,
} from "../../types/pokemonList";

const pokemonFixtureMock: IParsedPokemonList = {
  count: 100,
  next: "url",
  results: [{ displayName: "Foo", name: "foo", url: "pokemonUrl" }],
};

const parsedPokemonListObject = pokemonFixtureMock.results.map((pokemon) => ({
  displayName: capitalizeString(pokemon.name),
  name: pokemon.name,
  url: pokemon.url,
}));

const expectedPokemonListMap: IUnparsedPokemonList = {
  count: pokemonFixtureMock.count,
  next: pokemonFixtureMock.next,
  results: parsedPokemonListObject,
};

describe("mapPokemonList()", () => {
  test("is a function", () => {
    expect(typeof mapPokemonList).toEqual("function");
  });
  test("When passed a list of pokemon it should return a mapped listOfPokemon", () => {
    expect(mapPokemonList(pokemonFixtureMock)).toEqual(expectedPokemonListMap);
  });
});

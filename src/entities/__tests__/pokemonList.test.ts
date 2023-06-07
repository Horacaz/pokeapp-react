import { IParsedPokemonList } from "../../types/pokemonList";

import PokemonList from "../pokemonList";
const pokemonListMock: IParsedPokemonList = {
  count: 100,
  next: "url",
  results: [{ displayName: "Foo", name: "foo", url: "url" }],
};
describe("PokemonList()", () => {
  test("is a function", () => {
    expect(typeof PokemonList).toEqual("function");
  });
  test("should create an instance of Pokemon with provided arguments", () => {
    const pokemon = new PokemonList(pokemonListMock);
    expect(pokemon).toBeInstanceOf(PokemonList);
    expect(pokemon).toEqual(pokemonListMock);
  });
});

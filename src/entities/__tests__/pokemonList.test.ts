import { IParsedPokemonList } from "../../types/pokemonList";

import PokemonList from "../pokemonList";
const pokemonListMock: IParsedPokemonList = {
  count: 100,
  next: "url",
  results: [{ name: "foo", url: "url" }],
};
describe("PokemonList()", () => {
  test("should create an instance of Pokemon with provided arguments", () => {
    const pokemon = new PokemonList(pokemonListMock);
    expect(pokemon).toBeInstanceOf(PokemonList);
    expect(pokemon).toEqual(pokemonListMock);
  });
});

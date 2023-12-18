import mapPokemonList from "../pokemonListMapper";
import capitalizeString from "../../utils/capitalizeString";
import {
  IUnparsedPokemonList,
  IParsedPokemonList,
} from "../../types/pokemonList";

const pokemonFixtureMock: IParsedPokemonList = {
  count: 100,
  next: "url",
  results: [
    {
      name: "bulbasaur",
      url: "url/v2/pokemon/1",
    },
  ],
};

const parsedPokemonListObject = pokemonFixtureMock.results.map((pokemon) => ({
  name: capitalizeString(pokemon.name),
  url: "pokemon/1",
}));

const expectedPokemonListMap: IUnparsedPokemonList = {
  count: pokemonFixtureMock.count,
  next: pokemonFixtureMock.next,
  results: parsedPokemonListObject,
};

describe("mapPokemonList()", () => {
  test("When passed a list of pokemon it should return a mapped listOfPokemon", () => {
    expect(mapPokemonList(pokemonFixtureMock)).toEqual(expectedPokemonListMap);
  });
});

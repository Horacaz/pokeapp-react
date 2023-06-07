import {
  IUnparsedPokemonSpecies,
  IParsedPokemonSpecies,
} from "../../types/pokemonSpecies";

import mapPokemonSpecies from "../pokemonSpeciesMapper";

const pokemonSpeciesMock: IUnparsedPokemonSpecies = {
  flavor_text_entries: [
    {
      flavor_text: "description of species",
      language: { name: "en", url: "url" },
    },
  ],
  genera: [{ genus: "genus", language: { name: "en", url: "url" } }],
  generation: { name: "generation", url: "url" },
  id: 3,
  name: "species",
  varieties: [{ pokemon: { name: "pokemon", url: "url" } }],
};
const expectedSpeciesMap: IParsedPokemonSpecies = {
  description: "Description of species",
  genus: "Genus",
  generation: { name: "Generation", url: "url" },
  id: 3,
  name: "Species",
  varieties: [{ name: "Pokemon", url: "url" }],
};

describe("mapPokemonSpecies", () => {
  test("is a function", () => {
    expect(typeof mapPokemonSpecies).toEqual("function");
  });
  test("should map a pokemonSpecies when valid arguments are passed on", () => {
    expect(mapPokemonSpecies(pokemonSpeciesMock)).toEqual(expectedSpeciesMap);
  });
});

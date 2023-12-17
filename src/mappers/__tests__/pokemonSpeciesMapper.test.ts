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
  generation: { name: "generation-i", url: "url/v2/generation/1" },
  id: 3,
  name: "species",
  varieties: [{ pokemon: { name: "pokemon", url: "url/v2/pokemon/1" } }],
};
const expectedSpeciesMap: IParsedPokemonSpecies = {
  description: "Description of species",
  genus: "Genus",
  generation: { name: "Generation I", url: "generation/1" },
  id: 3,
  name: "Species",
  varieties: [{ name: "Pokemon", url: "pokemon/1" }],
};

describe("mapPokemonSpecies", () => {
  test("should map a pokemonSpecies when valid arguments are passed on", () => {
    expect(mapPokemonSpecies(pokemonSpeciesMock)).toEqual(expectedSpeciesMap);
  });
});

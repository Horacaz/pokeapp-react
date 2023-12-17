import { IParsedPokemon, TPokemon } from "../../types/pokemon";
import { IParsedPokemonSpecies } from "../../types/pokemonSpecies";
import Pokemon from "../pokemon";

const pokemonDataMock: IParsedPokemon = {
  displayName: "Pokemon",
  abilities: [{ name: "Ability", url: "url" }],
  baseExperience: 100,
  height: 100,
  id: 1,
  moves: [{ name: "Move", url: "url" }],
  name: "pokemon",
  species: { name: "species", url: "url" },
  pictures: { default: "url", shiny: "url" },
  stats: [{ baseStat: 100, name: "hp" }],
  types: [{ name: "Fire", url: "url" }],
  weight: 100,
};

const pokemonSpeciesDataMock: IParsedPokemonSpecies = {
  description: "Pokemon Species description.",
  genus: "Leaf Pokemon",
  generation: { name: "Generation I", url: "url" },
  id: 3,
  name: "Pokemon",
  varieties: [{ name: "Mega Pokemon", url: "url" }],
};

const expectedPokemonInstance: TPokemon = {
  abilities: [
    {
      name: "Ability",
      url: "url",
    },
  ],
  baseExperience: 100,
  description: "Pokemon Species description.",
  displayName: "Pokemon",
  generation: {
    name: "Generation I",
    url: "url",
  },
  genus: "Leaf Pokemon",
  height: 100,
  id: 1,
  moves: [
    {
      name: "Move",
      url: "url",
    },
  ],
  name: "pokemon",
  pictures: {
    default: "url",
    shiny: "url",
  },
  species: {
    name: "species",
    url: "url",
  },
  stats: [
    {
      baseStat: 100,
      name: "hp",
    },
  ],
  types: [
    {
      name: "Fire",
      url: "url",
    },
  ],
  varieties: [
    {
      name: "Mega Pokemon",
      url: "url",
    },
  ],
  weight: 100,
};
describe("Pokemon()", () => {
  test("should instance a new Pokemon when passed valid parameters", () => {
    const pokemon = new Pokemon(pokemonDataMock, pokemonSpeciesDataMock);

    expect(pokemon).toBeInstanceOf(Pokemon);
    expect(pokemon).toEqual(expectedPokemonInstance);
  });
});

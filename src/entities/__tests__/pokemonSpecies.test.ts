import { IParsedPokemonSpecies } from "../../types/pokemonSpecies";
import PokemonSpecies from "../pokemonSpecies";

const pokemonSpeciesMock: IParsedPokemonSpecies = {
  description: "Pokemon Species description.",
  genus: "Leaf Pokemon",
  generation: { name: "Generation I", url: "url" },
  id: 3,
  name: "Pokemon",
  varieties: [{ name: "Mega Pokemon", url: "url" }],
};
describe("PokemonSpecies", () => {
  test("when passed valid parameters it should instantiate a new PokemonSpecies", () => {
    const pokemonSpecies = new PokemonSpecies(pokemonSpeciesMock);
    expect(pokemonSpecies).toBeInstanceOf(PokemonSpecies);
    expect(pokemonSpecies).toEqual(pokemonSpeciesMock);
  });
});

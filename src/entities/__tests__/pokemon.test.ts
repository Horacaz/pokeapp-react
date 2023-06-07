import { IParsedPokemon } from "../../types/pokemon";
import Pokemon from "../pokemon";

const pokemonMock: IParsedPokemon = {
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
describe("Pokemon()", () => {
  test("is a function", () => {
    expect(typeof Pokemon).toEqual("function");
  });
  test("should instance a new Pokemon when passed valid parameters", () => {
    const pokemon = new Pokemon(pokemonMock);
    expect(pokemon).toBeInstanceOf(Pokemon);
    expect(pokemon).toEqual(pokemonMock);
  });
});

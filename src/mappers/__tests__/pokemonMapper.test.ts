import { IParsedPokemon, IUnparsedPokemon } from "../../types/pokemon";
import mapPokemon from "../pokemonMapper";

const pokemonMockFixture: IUnparsedPokemon = {
  abilities: [{ ability: { name: "ability", url: "url" } }],
  base_experience: 100,
  height: 100,
  id: 0,
  moves: [{ move: { name: "move", url: "url" } }],
  name: "foo",
  sprites: {
    other: { "official-artwork": { front_default: "url", front_shiny: "url" } },
  },
  species: { name: "species", url: "url" },
  stats: [{ base_stat: 100, stat: { name: "stat", url: "url" } }],
  types: [{ type: { name: "fire", url: "url" } }],
  weight: 100,
};

const expectedPokemonMap: IParsedPokemon = {
  displayName: "Foo",
  abilities: [{ name: "Ability", url: "url" }],
  baseExperience: 100,
  height: 100,
  id: 0,
  moves: [{ name: "Move", url: "url" }],
  name: "foo",
  species: { name: "species", url: "url" },
  stats: [{ baseStat: 100, name: "stat" }],
  types: [{ name: "Fire", url: "url" }],
  pictures: { default: "url", shiny: "url" },
  weight: 100,
};
describe("mapPokemon()", () => {
  test("is a function", () => {
    expect(typeof mapPokemon).toEqual("function");
  });
  test("should correctly map a pokemon from provided data", () => {
    expect(mapPokemon(pokemonMockFixture)).toEqual(expectedPokemonMap);
  });
});

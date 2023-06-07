import { IParsedType } from "../../types/pokemonType";
import PokemonType from "../pokemonType";

const pokemonTypeMock: IParsedType = {
  damageRelation: {
    doubleDamageFrom: [{ name: "Fire", url: "url" }],
    doubleDamageTo: [{ name: "Fire", url: "url" }],
    halfDamageFrom: [{ name: "Fire", url: "url" }],
    halfDamageTo: [{ name: "Fire", url: "url" }],
    noDamageFrom: [{ name: "Fire", url: "url" }],
    noDamageTo: [{ name: "Fire", url: "url" }],
  },
  generation: { name: "Generation", url: "url" },
  id: 1,
  moveDamageClass: { name: "Special", url: "url" },
  moves: [{ name: "Drainers", url: "url" }],
  name: "Grass",
  pokemon: [{ name: "Bulbasaur", url: "url" }],
};
describe("PokemonType()", () => {
  test("is a function", () => {
    expect(typeof PokemonType).toEqual("function");
  });
  test("should create an instance of PokemonType with provided arguments", () => {
    const type = new PokemonType(pokemonTypeMock);
    expect(type).toBeInstanceOf(PokemonType);
    expect(type).toEqual(pokemonTypeMock);
  });
});

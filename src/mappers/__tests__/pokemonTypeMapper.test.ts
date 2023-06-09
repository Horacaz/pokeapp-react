import { IUnparsedType, IParsedType } from "../../types/pokemonType";
import mapPokemonType from "../pokemonTypeMapper";

const pokemonTypeMock: IUnparsedType = {
  damage_relations: {
    double_damage_from: [{ name: "fire", url: "url" }],
    double_damage_to: [{ name: "fire", url: "url" }],
    half_damage_from: [{ name: "fire", url: "url" }],
    half_damage_to: [{ name: "fire", url: "url" }],
    no_damage_from: [{ name: "fire", url: "url" }],
    no_damage_to: [{ name: "fire", url: "url" }],
  },
  move_damage_class: { name: "special", url: "url" },
  generation: { name: "generation", url: "url" },
  name: "grass",
  id: 1,
  moves: [{ name: "drainers", url: "url" }],
  pokemon: [{ pokemon: { name: "bulbasaur", url: "url" } }],
};

const expectTypeMap: IParsedType = {
  damageRelations: {
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

describe("pokemonTypeMapper", () => {
  test("is a function", () => {
    expect(typeof mapPokemonType).toEqual("function");
  });
  test("when passed valid parameters returns mapped pokemon type data", () => {
    expect(mapPokemonType(pokemonTypeMock)).toEqual(expectTypeMap);
  });
});

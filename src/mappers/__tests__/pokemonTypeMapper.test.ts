import { IUnparsedType, IParsedType } from "../../types/pokemonType";
import mapPokemonType from "../pokemonTypeMapper";

const pokemonTypeMock: IUnparsedType = {
  damage_relations: {
    double_damage_from: [{ name: "fire", url: "url/v2/damage/1" }],
    double_damage_to: [{ name: "fire", url: "url/v2/damage/1" }],
    half_damage_from: [{ name: "fire", url: "url/v2/damage/1" }],
    half_damage_to: [{ name: "fire", url: "url/v2/damage/1" }],
    no_damage_from: [{ name: "fire", url: "url/v2/damage/1" }],
    no_damage_to: [{ name: "fire", url: "url/v2/damage/1" }],
  },
  move_damage_class: { name: "special", url: "url/v2/damageClass/1" },
  generation: { name: "generation", url: "url/v2/generation/1" },
  name: "grass",
  id: 1,
  moves: [{ name: "drainers", url: "url/v2/move/1" }],
  pokemon: [{ pokemon: { name: "bulbasaur", url: "url/v2/pokemon/1" } }],
};

const expectTypeMap: IParsedType = {
  damageRelations: {
    doubleDamageFrom: [{ name: "Fire", url: "damage/1" }],
    doubleDamageTo: [{ name: "Fire", url: "damage/1" }],
    halfDamageFrom: [{ name: "Fire", url: "damage/1" }],
    halfDamageTo: [{ name: "Fire", url: "damage/1" }],
    noDamageFrom: [{ name: "Fire", url: "damage/1" }],
    noDamageTo: [{ name: "Fire", url: "damage/1" }],
  },
  generation: { name: "Generation", url: "generation/1" },
  id: 1,
  moveDamageClass: { name: "Special", url: "damageClass/1" },
  moves: [{ name: "Drainers", url: "move/1" }],
  name: "Grass",
  pokemon: [{ name: "Bulbasaur", url: "pokemon/1" }],
};

describe("pokemonTypeMapper", () => {
  test("is a function", () => {
    expect(typeof mapPokemonType).toEqual("function");
  });
  test("when passed valid parameters returns mapped pokemon type data", () => {
    expect(mapPokemonType(pokemonTypeMock)).toEqual(expectTypeMap);
  });
});

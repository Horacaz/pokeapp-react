import {
  IUnparsedPokemonAbility,
  IParsedPokemonAbility,
} from "../../types/pokemonAbility";
import mapPokemonAbility from "../pokemonAbilityMapper";

const pokemonAbilityDataMock: IUnparsedPokemonAbility = {
  effect_entries: [
    {
      effect: "Ability effect",
      language: { name: "en", url: "url" },
      short_effect: "Short effect",
    },
  ],
  generation: { name: "generation", url: "url" },
  id: 10,
  name: "ability",
  pokemon: [{ pokemon: { name: "pokemon", url: "string" } }],
};

const expectedPokemonAbilityMap: IParsedPokemonAbility = {
  ability: { description: "Ability effect", effect: "Short effect" },
  generation: { name: "Generation", url: "url" },
  id: 10,
  displayName: "Ability",
  pokemon: [{ name: "Pokemon", url: "string" }],
};

describe("pokemonAbilityMapper()", () => {
  test("is a function", () => {
    expect(typeof mapPokemonAbility).toEqual("function");
  });
  test("should return mapped ability data when passed valid parameters", () => {
    expect(mapPokemonAbility(pokemonAbilityDataMock)).toEqual(
      expectedPokemonAbilityMap
    );
  });
});

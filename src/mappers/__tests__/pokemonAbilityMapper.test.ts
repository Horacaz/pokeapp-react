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
  generation: { name: "generation", url: "url/v2/generation/1" },
  id: 10,
  name: "ability",
  pokemon: [{ pokemon: { name: "pokemon", url: "url/v2/pokemon/1" } }],
};

const expectedPokemonAbilityMap: IParsedPokemonAbility = {
  ability: { description: "Ability effect", effect: "Short effect" },
  generation: { name: "Generation", url: "generation/1" },
  id: 10,
  displayName: "Ability",
  pokemon: [{ name: "Pokemon", url: "pokemon/1" }],
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

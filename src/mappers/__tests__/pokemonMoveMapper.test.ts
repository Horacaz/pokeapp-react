import {
  IUnparsedPokemonMove,
  IParsedPokemonMove,
} from "../../types/pokemonMove";
import mapPokemonMove from "../pokemonMoveMapper";

const pokemonMoveMock: IUnparsedPokemonMove = {
  accuracy: 100,
  damage_class: { name: "special" },
  effect_chance: 10,
  effect_entries: [{ effect: "effect text", language: { name: "en" } }],
  flavor_text_entries: [
    { flavor_text: "effect description", language: { name: "en" } },
  ],
  generation: { name: "generation", url: "url/v2/generation/1" },
  id: 3,
  learned_by_pokemon: [{ name: "pokemon", url: "url/v2/pokemon/1" }],
  name: "move",
  power: 100,
  pp: 10,
  type: { name: "fire", url: "url/v2/type/1" },
};
const expectedPokemonMoveMap: IParsedPokemonMove = {
  accuracy: 100,
  damageClass: "Special",
  effectChance: 10,
  effect: "Effect text",
  description: "Effect description",
  generation: { name: "Generation", url: "generation/1" },
  id: 3,
  learnedBy: [{ name: "Pokemon", url: "pokemon/1" }],
  name: "Move",
  power: 100,
  pp: 10,
  type: [{ name: "Fire", url: "type/1" }],
};

describe("mapPokemonMove()", () => {
  test("is a function", () => {
    expect(typeof mapPokemonMove).toEqual("function");
  });
  test("should map a pokemon move data when passed valid parameters", () => {
    expect(mapPokemonMove(pokemonMoveMock)).toEqual(expectedPokemonMoveMap);
  });
  test("if effect chance is null it should be kept as it is", () => {
    const effectChanceNullMock = { ...pokemonMoveMock, effect_chance: null };
    const expectedEffectChaneNull = {
      ...expectedPokemonMoveMap,
      effectChance: null,
    };
    expect(mapPokemonMove(effectChanceNullMock)).toEqual(
      expectedEffectChaneNull
    );
  });
});

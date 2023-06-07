import { IParsedPokemonMove } from "../../types/pokemonMove";
import PokemonMove from "../pokemonMove";

const pokemonMoveMock: IParsedPokemonMove = {
  accuracy: 100,
  damageClass: "Special",
  effectChance: 10,
  effect: "Effect text",
  description: "Effect description",
  generation: { name: "Generation", url: "url" },
  id: 3,
  learnedBy: [{ name: "Pokemon", url: "url" }],
  name: "Move",
  power: 100,
  pp: 10,
  type: { name: "Fire", url: "url" },
};

describe("PokemonMove", () => {
  test("is a function", () => {
    expect(typeof PokemonMove).toEqual("function");
  });
  test("should generate instance of a pokemon move when passed valid arguments", () => {
    const pokemonMove = new PokemonMove(pokemonMoveMock);
    expect(pokemonMove).toBeInstanceOf(PokemonMove);
    expect(pokemonMove).toEqual(pokemonMoveMock);
  });
});

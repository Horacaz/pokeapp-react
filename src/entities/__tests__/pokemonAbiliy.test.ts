import { IParsedPokemonAbility } from "../../types/pokemonAbility";
import PokemonAbility from "../pokemonAbility";

const pokemonAbilityMock: IParsedPokemonAbility = {
  ability: { description: "Ability description", effect: "Effect" },
  generation: { name: "Generation", url: "url" },
  displayName: "Ability",
  id: 100,
  pokemon: [{ name: "Pokemon", url: "url" }],
};
describe("PokemonAbility", () => {
  test("when passed valid parameters instantiates a new pokemon ability", () => {
    const ability = new PokemonAbility(pokemonAbilityMock);
    expect(ability).toBeInstanceOf(PokemonAbility);
    expect(ability).toEqual(pokemonAbilityMock);
  });
});

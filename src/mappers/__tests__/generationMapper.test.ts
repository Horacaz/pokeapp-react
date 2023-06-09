import { IUnparsedGeneration, IParsedGeneration } from "../../types/generation";
import mapGeneration from "../../mappers/generationMapper";

const generationMock: IUnparsedGeneration = {
  abilities: [{ name: "ability", url: "url/v2/ability/1" }],
  id: 3,
  main_region: { name: "region", url: "url/v2/region/1" },
  moves: [{ name: "move", url: "url/v2/move/1" }],
  name: "region",
  pokemon_species: [{ name: "pokemon", url: "url/v2/pokemonSpecies/1" }],
  types: [{ name: "type", url: "url/v2/type/1" }],
};
const expectedGenerationMap: IParsedGeneration = {
  abilities: [{ name: "Ability", url: "ability/1" }],
  id: 3,
  mainRegion: "Region",
  moves: [{ name: "Move", url: "move/1" }],
  pokemonSpecies: [{ name: "Pokemon", url: "pokemonSpecies/1" }],
  types: [{ name: "Type", url: "type/1" }],
};

describe("mapGeneration()", () => {
  test("is a function", () => {
    expect(typeof mapGeneration).toEqual("function");
  });
  test("when passed valid parameters returns a mapped pokemon generation", () => {
    expect(mapGeneration(generationMock)).toEqual(expectedGenerationMap);
  });
});

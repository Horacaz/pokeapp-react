import { IUnparsedGeneration, IParsedGeneration } from "../../types/generation";
import mapGeneration from "../../mappers/generationMapper";

const generationMock: IUnparsedGeneration = {
  abilities: [{ name: "ability", url: "url" }],
  id: 3,
  main_region: { name: "region", url: "url" },
  moves: [{ name: "move", url: "url" }],
  name: "region",
  pokemon_species: [{ name: "pokemon", url: "url" }],
  types: [{ name: "type", url: "url" }],
};
const expectedGenerationMap: IParsedGeneration = {
  abilities: [{ name: "Ability", url: "url" }],
  id: 3,
  mainRegion: "Region",
  moves: [{ name: "Move", url: "url" }],
  pokemonSpecies: [{ name: "Pokemon", url: "url" }],
  types: [{ name: "Type", url: "url" }],
};

describe("mapGeneration()", () => {
  test("is a function", () => {
    expect(typeof mapGeneration).toEqual("function");
  });
  test("when passed valid parameters returns a mapped pokemon generation", () => {
    expect(mapGeneration(generationMock)).toEqual(expectedGenerationMap);
  });
});

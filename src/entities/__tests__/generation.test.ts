import { IParsedGeneration } from "../../types/generation";
import Generation from "../../entities/generation";

const expectedGenerationMock: IParsedGeneration = {
  abilities: [{ name: "Ability", url: "url" }],
  id: 3,
  mainRegion: "Region",
  moves: [{ name: "Move", url: "url" }],
  pokemonSpecies: [{ name: "Pokemon", url: "url" }],
  types: [{ name: "Type", url: "url" }],
};
describe("Generation()", () => {
  test("should create an instance of Generation with provided arguments", () => {
    const generation = new Generation(expectedGenerationMock);

    expect(generation).toBeInstanceOf(Generation);
    expect(generation).toEqual(expectedGenerationMock);
  });
});

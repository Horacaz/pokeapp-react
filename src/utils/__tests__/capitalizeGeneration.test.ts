import capitalizeGeneration from "../capitalizeGeneration";

describe("capitalizeGeneration", () => {
  test("it capitalizes a generation name", () => {
    const generationName = "generation-iv";
    expect(capitalizeGeneration(generationName)).toEqual("Generation IV");
  });
});

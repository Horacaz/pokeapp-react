import retrieveSpeciesUrl from "../retrieveSpeciesUrl";
describe("retrieveSpeciesUrl", () => {
  test("should retrieve species params from url", () => {
    const url = "https://pokeapi.co/api/v2/pokemon-species/813/";
    expect(retrieveSpeciesUrl(url)).toEqual(813);
  });
});

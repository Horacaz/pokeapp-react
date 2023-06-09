import retrievePathFromUrl from "../retrievePathFromUrl";
describe("retrievePathFromUrl()", () => {
  test("is a function", () => {
    expect(typeof retrievePathFromUrl).toEqual("function");
  });
  test("should retrieve api endpoint from url", () => {
    const url = "https://pokeapi.co/api/v2/pokemon/813/";
    expect(retrievePathFromUrl(url)).toEqual("pokemon/813/");
  });
});

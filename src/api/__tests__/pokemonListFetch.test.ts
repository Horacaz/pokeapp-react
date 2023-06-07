import fetchPokemonListfromApi from "../pokemonListFetch";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));

const expectedUrl = "https://pokeapi.co/api/v2/pokemon?$limit=10&offset=25";
describe("fetchPokemonListfromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchPokemonListfromApi({ limit: 10, offset: 25 });
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

import fetchPokemonFromApi from "../pokemonFetch";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));

const expectedUrl = "https://pokeapi.co/api/v2/pokemon/charmander";
describe("fetchPokemonFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchPokemonFromApi("charmander");
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toBeCalledWith(expectedUrl);
  });
});

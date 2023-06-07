import fetchPokemonSpeciesFromApi from "../pokemonSpeciesFetch";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));

const expectedUrl = "https://pokeapi.co/api/v2/pokemon-species/charizard";
describe("fetchPokemonSpeciesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchPokemonSpeciesFromApi("charizard");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

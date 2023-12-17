import fetchPokemonSpeciesFromApi from "../pokemonSpeciesFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();

const expectedUrl = "https://pokeapi.co/api/v2/pokemon-species/1";
describe("fetchPokemonSpeciesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", async () => {
    const query = 1;
    await fetchPokemonSpeciesFromApi(query);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });

  test("if response is not successful it throws", async () => {
    const query = 1;
    fetchMock.mockResolvedValueOnce({ ok: false });
    await expect(fetchPokemonSpeciesFromApi(query)).rejects.toThrowError(
      `Failed to fetch Pokemon Species ${query}`
    );
  });
});

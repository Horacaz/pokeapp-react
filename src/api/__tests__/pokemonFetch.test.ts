import fetchPokemonFromApi from "../pokemonFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();

const expectedUrl = "https://pokeapi.co/api/v2/pokemon/charmander";
describe("fetchPokemonFromApi", () => {
  test("succesfully sends a request to api with valid parameters", async () => {
    const query = "charmander";
    await fetchPokemonFromApi(query);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });

  test("if response is not successful it throws", async () => {
    const query = "charmander";
    fetchMock.mockResolvedValueOnce({ ok: false });
    await expect(fetchPokemonFromApi(query)).rejects.toThrowError(
      `Failed to fetch Pokemon ${query}`
    );
  });
});

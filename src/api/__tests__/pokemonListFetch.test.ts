import fetchPokemonListfromApi from "../pokemonListFetch";

import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();

const expectedUrl = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=25";
describe("fetchPokemonListfromApi", () => {
  test("succesfully sends a request to api with valid parameters", async () => {
    const query = { limit: 10, offset: 25 };
    await fetchPokemonListfromApi(query);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });

  test("if response is not successful it throws", async () => {
    const query = { limit: 10, offset: 25 };
    fetchMock.mockResolvedValueOnce({ ok: false });
    await expect(fetchPokemonListfromApi(query)).rejects.toThrowError(
      `Failed to fetch Pokemon List`
    );
  });
});

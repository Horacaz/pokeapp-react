import fetchMovesFromApi from "../movesFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();
const expectedUrl = "https://pokeapi.co/api/v2/move/53";
describe("fetchMovesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", async () => {
    const query = 53;
    await fetchMovesFromApi(query);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });

  test("if response is not successful it throws", async () => {
    const query = 53;
    fetchMock.mockResolvedValueOnce({ ok: false });
    await expect(fetchMovesFromApi(query)).rejects.toThrowError(
      `Failed to fetch Move ${query}`
    );
  });
});

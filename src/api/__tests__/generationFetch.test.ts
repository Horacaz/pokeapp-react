import fetchGenerationFromApi from "../generationFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();
const expectedUrl = "https://pokeapi.co/api/v2/generation/3";
describe("fetchGenerationFromApi", () => {
  test("succesfully sends a request to api with valid parameters", async () => {
    const query = 3;
    await fetchGenerationFromApi(query);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });

  test("if response is not successful it throws", async () => {
    const query = 3;
    fetchMock.mockResolvedValueOnce({ ok: false });
    await expect(fetchGenerationFromApi(query)).rejects.toThrowError(
      `Failed to fetch Generation ${query}`
    );
  });
});

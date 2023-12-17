import fetchTypesFromApi from "../typesFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();

const expectedUrl = "https://pokeapi.co/api/v2/type/10";
describe("fetchTypesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", async () => {
    const query = 10;
    await fetchTypesFromApi(query);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });

  test("if response is not successful it throws", async () => {
    const query = 10;
    fetchMock.mockResolvedValueOnce({ ok: false });
    await expect(fetchTypesFromApi(query)).rejects.toThrowError(
      `Failed to fetch Type ${query}`
    );
  });
});

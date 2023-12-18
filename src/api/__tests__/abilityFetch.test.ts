import fetchAbilityFromApi from "../abilityFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();
const expectedUrl = "https://pokeapi.co/api/v2/ability/blaze";
describe("fetchAbilityFromApi", () => {
  test("succesfully sends a request to api with valid parameters", async () => {
    const query = "blaze";
    await fetchAbilityFromApi(query);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });

  test("if response is not successful it throws", async () => {
    const query = "blaze";
    fetchMock.mockResolvedValueOnce({ ok: false });
    await expect(fetchAbilityFromApi(query)).rejects.toThrowError(
      `Failed to fetch Ability ${query}`
    );
  });
});

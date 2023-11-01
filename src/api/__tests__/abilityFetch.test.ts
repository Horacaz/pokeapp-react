import fetchAbilityFromApi from "../abilityFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();
const expectedUrl = "https://pokeapi.co/api/v2/ability/blaze";
describe("fetchAbilityFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchAbilityFromApi("blaze");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

import fetchGenerationFromApi from "../generationFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();
const expectedUrl = "https://pokeapi.co/api/v2/generation/3";
describe("fetchGenerationFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchGenerationFromApi(3);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

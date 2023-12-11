import fetchTypesFromApi from "../typesFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();

const expectedUrl = "https://pokeapi.co/api/v2/type/10";
describe("fetchTypesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchTypesFromApi(10);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

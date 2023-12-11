import fetchMovesFromApi from "../movesFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();
const expectedUrl = "https://pokeapi.co/api/v2/move/53";
describe("fetchMovesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchMovesFromApi(53);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

import fetchMovesFromApi from "../movesFetch";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));
const expectedUrl = "https://pokeapi.co/api/v2/move/53";
describe("fetchMovesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchMovesFromApi(53);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

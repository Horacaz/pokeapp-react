import fetchTypesFromApi from "../typesFetch";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));

const expectedUrl = "https://pokeapi.co/api/v2/type/10";
describe("fetchTypesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchTypesFromApi(10);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

import fetchGenerationFromApi from "../generationFetch";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));
const expectedUrl = "https://pokeapi.co/api/v2/generation/3";
describe("fetchGenerationFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchGenerationFromApi(3);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

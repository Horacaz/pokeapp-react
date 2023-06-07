import fetchAbilityFromApi from "../abilityFetch";

const fetchMock = (global.fetch = vi.fn().mockImplementation(
  () =>
    new Promise((resolve) => {
      const jsonPromise = new Promise((r) => {
        r({});
      });
      resolve({ json: () => jsonPromise });
    })
));
const expectedUrl = "https://pokeapi.co/api/v2/ability/blaze";
describe("fetchAbilityFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchAbilityFromApi("blaze");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

import fetchPokemonFromApi from "../pokemonFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();

const expectedUrl = "https://pokeapi.co/api/v2/pokemon/charmander";
describe("fetchPokemonFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchPokemonFromApi("charmander");
    expect(fetchMock).toBeCalledTimes(1);
    expect(fetchMock).toBeCalledWith(expectedUrl);
  });
});

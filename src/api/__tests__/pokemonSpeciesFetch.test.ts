import fetchPokemonSpeciesFromApi from "../pokemonSpeciesFetch";
import { setupFetchMock } from "../../../__utils__/testHelpers";
const fetchMock = setupFetchMock();

const expectedUrl = "https://pokeapi.co/api/v2/pokemon-species/charizard";
describe("fetchPokemonSpeciesFromApi", () => {
  test("succesfully sends a request to api with valid parameters", () => {
    fetchPokemonSpeciesFromApi("charizard");
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(expectedUrl);
  });
});

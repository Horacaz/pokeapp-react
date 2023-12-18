import ApiService from "../apiService";
import fetchAbilityFromApi from "../../api/abilityFetch";
import fetchGenerationFromApi from "../../api/generationFetch";
import fetchMoveFromApi from "../../api/movesFetch";
import fetchPokemonFromApi from "../../api/pokemonFetch";
import fetchPokemonListfromApi from "../../api/pokemonListFetch";
import fetchPokemonSpeciesFromApi from "../../api/pokemonSpeciesFetch";
import fetchTypeFromApi from "../../api/typesFetch";

vi.mock("../../api/abilityFetch");
vi.mock("../../api/generationFetch");
vi.mock("../../api/movesFetch");
vi.mock("../../api/pokemonFetch");
vi.mock("../../api/pokemonListFetch");
vi.mock("../../api/pokemonSpeciesFetch");
vi.mock("../../api/typesFetch");

describe("ApiService", () => {
  const api = new ApiService();

  test("should call fetchAbilityFromApi when getAbility is called", async () => {
    const abilityName = "blaze";
    await api.getAbility(abilityName);
    expect(fetchAbilityFromApi).toHaveBeenCalledTimes(1);
    expect(fetchAbilityFromApi).toHaveBeenCalledWith(abilityName);
  });

  test("should call fetchGenerationFromApi when getGeneration is called", async () => {
    const generationId = 1;
    await api.getGeneration(generationId);
    expect(fetchGenerationFromApi).toHaveBeenCalledTimes(1);
    expect(fetchGenerationFromApi).toHaveBeenCalledWith(generationId);
  });
  test("should call fetchMoveFromApi when getMove is called", async () => {
    const moveId = 1;
    await api.getMove(moveId);
    expect(fetchMoveFromApi).toHaveBeenCalledTimes(1);
    expect(fetchMoveFromApi).toHaveBeenCalledWith(moveId);
  });

  test("should call fetchPokemonFromApi when getPokemon is called", async () => {
    const pokemonName = "charizard";
    await api.getPokemon(pokemonName);
    expect(fetchPokemonFromApi).toHaveBeenCalledTimes(1);
    expect(fetchPokemonFromApi).toHaveBeenCalledWith(pokemonName);
  });

  test("should call fetchPokemonListfromApi when getPokemonList is called", async () => {
    const limit = 10;
    const offset = 25;
    await api.getPokemonList(limit, offset);
    expect(fetchPokemonListfromApi).toHaveBeenCalledTimes(1);
    expect(fetchPokemonListfromApi).toHaveBeenCalledWith({ limit, offset });
  });

  test("should call fetchPokemonSpeciesFromApi when getSpecies is called", async () => {
    const speciesId = 1;
    await api.getPokemonSpecies(speciesId);
    expect(fetchPokemonSpeciesFromApi).toHaveBeenCalledTimes(1);
    expect(fetchPokemonSpeciesFromApi).toHaveBeenCalledWith(speciesId);
  });

  test("should call fetchTypeFromApi when getType is called", async () => {
    const typeId = 1;
    await api.getType(typeId);
    expect(fetchTypeFromApi).toHaveBeenCalledTimes(1);
    expect(fetchTypeFromApi).toHaveBeenCalledWith(typeId);
  });
});

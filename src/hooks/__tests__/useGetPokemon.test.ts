import { Mock } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useGetPokemon from "../useGetPokemon";
import { PokeAppProvider } from "../../context/PokeAppContext";
import pokemon from "../../../__fixtures__/pokemon.json";
import pokemonSpecies from "../../../__fixtures__/species.json";
import parsedPokemon from "../__fixtures__/parsedPokemonFixture.json";
import fetchPokemonFromApi from "../../api/pokemonFetch";
import fetchPokemonSpeciesFromApi from "../../api/pokemonSpeciesFetch";
vi.mock("../../api/pokemonFetch");
vi.mock("../../api/pokemonSpeciesFetch");

const pokemonFetchMock = fetchPokemonFromApi as Mock;
const pokemonSpeciesFetchMock = fetchPokemonSpeciesFromApi as Mock;

describe("useGetPokemon", () => {
  test("It should retrieve a move from the api", async () => {
    pokemonFetchMock.mockResolvedValue(pokemon);
    pokemonSpeciesFetchMock.mockResolvedValue(pokemonSpecies);
    const { result } = renderHook(() => useGetPokemon("charizard"), {
      wrapper: PokeAppProvider,
    });
    await waitFor(() =>
      expect(result.current).toEqual({
        data: parsedPokemon,
        error: null,
        loading: false,
      })
    );
  });
});

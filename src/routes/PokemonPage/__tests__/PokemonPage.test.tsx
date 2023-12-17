import { Mock } from "vitest";
import { screen } from "@testing-library/react";
import { IParsedPokemon } from "../../../types/pokemon";
import PokemonPage from "../PokemonPage";
import useGetPokemon from "../../../hooks/useGetPokemon";
import pokemonPageFixture from "./pokemonPageFixture.json";
import { setupRouterRender } from "../../../../__utils__/testHelpers";
vi.mock("../../../hooks/useGetPokemon");

const pokemonFixture: IParsedPokemon = pokemonPageFixture;
const useGetPokemonMock = useGetPokemon as Mock;
const initialEntries = [`/pokemon/${1}`];
const routePath = "/pokemon/:id";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("PokemonPage", () => {
  test("It renders a pokemon page if a valid parameter is passed", () => {
    useGetPokemonMock.mockReturnValue({
      loading: false,
      data: pokemonFixture,
      error: null,
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonPage /> });
    screen.getByRole("heading", {
      name: "Bulbasaur",
    });
  });
  test("It should show an error message if there is an error", () => {
    useGetPokemonMock.mockReturnValue({
      loading: false,
      data: null,
      error: new Error("Test Error"),
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonPage /> });
    screen.getByRole("heading", {
      name: "An error has occured. Test Error",
    });
  });
  test("it should render a loading spinner if loading", () => {
    useGetPokemonMock.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonPage /> });
    screen.getByRole("progressbar");
  });
});

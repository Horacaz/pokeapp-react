import { Mock } from "vitest";
import { screen } from "@testing-library/react";
import PokemonGeneration from "../PokemonGeneration";
import useGetGeneration from "../../../hooks/useGetGeneration";
import pokemonGenerationFixture from "./pokemonGenerationFixture.json";
import { IParsedGeneration } from "../../../types/generation";
import { setupRouterRender } from "../../../../__utils__/testHelpers";
vi.mock("../../../hooks/useGetGeneration");

const useGetGenerationMock = useGetGeneration as Mock;
const generationFixture: IParsedGeneration = pokemonGenerationFixture;
const initialEntries = [`/generation/${1}`];
const routePath = "/generation/:id";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("PokemonGeneration", () => {
  test("It renders a generation page if a valid parameter is passed", () => {
    useGetGenerationMock.mockReturnValue({
      loading: false,
      data: generationFixture,
      error: null,
    });
    setupRouterRender({
      initialEntries,
      routePath,
      element: <PokemonGeneration />,
    });
    screen.getByText("Kanto");
    screen.getByText("Bulbasaur");
  });
  test("It should show an error message if there is an error", () => {
    useGetGenerationMock.mockReturnValue({
      loading: false,
      data: null,
      error: new Error("Error"),
    });
    setupRouterRender({
      initialEntries,
      routePath,
      element: <PokemonGeneration />,
    });
    screen.getByRole("heading", {
      name: "An error has occured, please refresh and wait a few seconds.",
    });
  });
  test("it should render a loading spinner if loading", () => {
    useGetGenerationMock.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    });
    setupRouterRender({
      initialEntries,
      routePath,
      element: <PokemonGeneration />,
    });
    screen.getByText("Loading...");
  });
});

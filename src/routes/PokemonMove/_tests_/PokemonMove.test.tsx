import { Mock } from "vitest";
import { screen } from "@testing-library/react";
import { IParsedPokemonMove } from "../../../types/pokemonMove";
import usePokemonMove from "../../../hooks/usePokemonMove";
import PokemonMove from "../PokemonMove";
import moveFixture from "./pokemonMoveFixture.json";
import { setupRouterRender } from "../../../../__utils__/testHelpers";
vi.mock("../../../hooks/usePokemonMove");

const pokemonMoveFixture: IParsedPokemonMove = moveFixture;
const usePokemonMoveMock = usePokemonMove as Mock;
const initialEntries = [`/move/${1}`];
const routePath = "/move/:id";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("PokemonMove", () => {
  test("It renders a move page if a valid parameter is passed", () => {
    usePokemonMoveMock.mockReturnValue({
      loading: false,
      data: pokemonMoveFixture,
      error: null,
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonMove /> });
    screen.getByText("Pound");
    screen.getByText("Clefairy");
  });
  test("It should show an error message if there is an error", () => {
    usePokemonMoveMock.mockReturnValue({
      loading: false,
      data: null,
      error: new Error("Test Error"),
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonMove /> });
    screen.getByRole("heading", {
      name: "An error has occured. Test Error",
    });
  });
  test("it should render a loading spinner if loading", () => {
    usePokemonMoveMock.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonMove /> });
    screen.getByRole("progressbar");
  });
});

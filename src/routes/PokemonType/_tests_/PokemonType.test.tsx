import { Mock } from "vitest";
import { screen } from "@testing-library/react";
import { IParsedType } from "../../../types/pokemonType";
import PokemonType from "../PokemonType";
import useGetTypes from "../../../hooks/useGetTypes";
import pokemonTypeFixture from "./pokemonTypeFixture.json";
import { setupRouterRender } from "../../../../__utils__/testHelpers";
vi.mock("../../../hooks/useGetTypes");

const typeFixture: IParsedType = pokemonTypeFixture;
const useGetTypesMock = useGetTypes as Mock;
const initialEntries = [`/type/${1}`];
const routePath = "/type/:id";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Pokemon Type", () => {
  test("It renders a move page if a valid parameter is passed", () => {
    useGetTypesMock.mockReturnValue({
      loading: false,
      data: typeFixture,
      error: null,
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonType /> });
    screen.getByText("Ground");
    screen.getByText("Sandshrew");
  });
  test("It should show an error message if there is an error", () => {
    useGetTypesMock.mockReturnValue({
      loading: false,
      data: null,
      error: new Error("Test Error"),
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonType /> });
    screen.getByRole("heading", {
      name: "An error has occured. Test Error",
    });
  });
  test("it should render a loading spinner if loading", () => {
    useGetTypesMock.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    });
    setupRouterRender({ initialEntries, routePath, element: <PokemonType /> });
    screen.getByRole("progressbar");
  });
});

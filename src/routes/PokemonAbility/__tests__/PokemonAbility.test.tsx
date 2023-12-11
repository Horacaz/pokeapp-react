import { Mock } from "vitest";
import { screen } from "@testing-library/react";
import PokemonAbility from "../PokemonAbility";
import useGetAbility from "../../../hooks/useGetAbility";
import { IParsedPokemonAbility } from "../../../types/pokemonAbility";
import abilityFixture from "./abilityFixture.json";
import { setupRouterRender } from "../../../../__utils__/testHelpers";
vi.mock("../../../hooks/useGetAbility");

const abilityMock: IParsedPokemonAbility = abilityFixture;
const useGetAbilityMock = useGetAbility as Mock;
const initialEntries = [`/ability/${abilityMock.id}`];
const routerPath = "/ability/:id";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("PokemonAbility", () => {
  test("When an id is passed as a parameter, it renders an ability page", () => {
    useGetAbilityMock.mockReturnValue({
      loading: false,
      data: abilityMock,
      error: null,
    });
    setupRouterRender({
      initialEntries,
      routePath: routerPath,
      element: <PokemonAbility />,
    });
    screen.getByText("Pokemon Ability");
    screen.getByText("Sturdy");
  });

  test("Shows error message if an error occurs", () => {
    useGetAbilityMock.mockReturnValue({
      loading: false,
      data: null,
      error: new Error("An error occurred"),
    });
    setupRouterRender({
      initialEntries,
      routePath: routerPath,
      element: <PokemonAbility />,
    });
    screen.getByRole("heading", {
      name: "An error has occured, please refresh and wait a few seconds.",
    });
  });

  test("Shows loading spinner while loading", () => {
    useGetAbilityMock.mockReturnValue({
      loading: true,
      data: null,
      error: null,
    });
    setupRouterRender({
      initialEntries,
      routePath: routerPath,
      element: <PokemonAbility />,
    });
    screen.getByText("Loading...");
  });
});

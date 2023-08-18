import { screen, render } from "@testing-library/react";
import PokemonPage from "./PokemonPage";
vi.mock("../../hooks/useGetPokemon", () => {
  return {
    default: () => {
      return {
        loading: true,
        data: null,
        error: null,
      };
    },
  };
});
describe("PokemonMoves", () => {
  test("it renders correctly", () => {
    render(<PokemonPage />);
    screen.getByText("Loading...");
  });
});

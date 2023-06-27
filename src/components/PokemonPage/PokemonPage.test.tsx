import { screen, render } from "@testing-library/react";
import PokemonPage from "./PokemonPage";

describe("PokemonMoves", () => {
  test("it renders correctly", () => {
    render(<PokemonPage />);
    screen.getByText("Print Pokemon");
  });
});

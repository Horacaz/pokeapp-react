import { screen, render } from "@testing-library/react";
import PokemonMoves from "./PokemonMoves";

describe("PokemonMoves", () => {
  test("it renders correctly", () => {
    render(<PokemonMoves />);
    screen.getByText("Pokemon Move");
  });
});

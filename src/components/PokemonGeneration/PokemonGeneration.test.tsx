import { screen, render } from "@testing-library/react";
import PokemonGeneration from "./PokemonGeneration";

describe("PokemonGeneration", () => {
  test("it renders component PokemonGeneration", () => {
    render(<PokemonGeneration />);
    screen.getByText("Pokemon Generation");
  });
});

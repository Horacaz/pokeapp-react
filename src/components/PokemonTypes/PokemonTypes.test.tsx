import { screen, render } from "@testing-library/react";
import PokemonTypes from "./PokemonTypes";

describe("PokemonType", () => {
  test("it renders correctly", () => {
    render(<PokemonTypes />);
    screen.getByText("Pokemon Type");
  });
});

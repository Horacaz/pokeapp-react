import { screen, render } from "@testing-library/react";
import PokemonAbility from "./PokemonAbility";

describe("PokemonAbility", () => {
  test("it renders component PokemonAbility", () => {
    render(<PokemonAbility />);
    screen.getByText("Pokemon Ability");
  });
});

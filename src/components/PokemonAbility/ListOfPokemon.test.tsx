import { screen, render } from "@testing-library/react";
import ListOfPokemon from "./ListOfPokemon";

const listOfPokemon = [
  {
    name: "charmander",
    url: "url",
  },
  {
    name: "squirtle",
    url: "url",
  },
  {
    name: "bulbasaur",
    url: "url",
  },
];
describe("ListOfPokemon", () => {
  test("it renders component ListOfPokemon with provided listOfPokemon", () => {
    render(<ListOfPokemon list={listOfPokemon} />);
    screen.getByText("charmander");
    screen.getByText("squirtle");
    screen.getByText("bulbasaur");
  });
});

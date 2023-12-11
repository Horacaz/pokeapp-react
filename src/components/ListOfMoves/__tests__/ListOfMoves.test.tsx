import { screen, render } from "@testing-library/react";
import ListOfMoves from "../ListOfMoves";

const listOfMoves = [
  {
    name: "Blaze",
    url: "url",
  },
  {
    name: "Fly",
    url: "url",
  },
  {
    name: "Ember",
    url: "url",
  },
];
describe("ListOfPokemon", () => {
  test("it renders component ListOfPokemon with provided listOfPokemon", () => {
    render(<ListOfMoves list={listOfMoves} />);
    screen.getByText("Blaze");
    screen.getByText("Fly");
    screen.getByText("Ember");
  });
});

import { screen, render } from "@testing-library/react";
import ListOfTypes from "../ListOfTypes";

const listOfTypes = [
  { name: "Fire", url: "url" },
  { name: "Grass", url: "url" },
  { name: "Water", url: "url" },
];

describe("ListOfTypes", () => {
  test("it correctly renders a list of types", () => {
    render(<ListOfTypes list={listOfTypes} />);
    screen.getByText("Fire");
    screen.getByText("Grass");
    screen.getByText("Water");
  });
});

import { screen, render } from "@testing-library/react";
import Header from "../Header";

describe("Header", () => {
  test("It renders correctly", () => {
    render(<Header />);
    screen.getByRole("heading", {
      name: "Pokemon Application",
    });
  });
});

import { screen, render } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
  test("It renders correctly", () => {
    render(<ErrorMessage />);
    screen.getByRole("heading", {
      name: "An error has occured, please refresh and wait a few seconds.",
    });
  });
});

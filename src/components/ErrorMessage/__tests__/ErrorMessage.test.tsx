import { screen, render } from "@testing-library/react";
import ErrorMessage from "../ErrorMessage";

describe("ErrorMessage", () => {
  test("It renders correctly", () => {
    render(<ErrorMessage error={new Error("Test Error")} />);
    screen.getByRole("heading", {
      name: "An error has occured. Test Error",
    });
  });
});

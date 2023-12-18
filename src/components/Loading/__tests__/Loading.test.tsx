import { screen, render } from "@testing-library/react";
import Loading from "../Loading";

describe("Loading", () => {
  test("It renders a loading component with the role 'progressbar' ", () => {
    render(<Loading />);
    screen.getByRole("progressbar");
  });
});

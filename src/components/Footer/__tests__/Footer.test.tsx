import { screen, render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  test("It renders correctly", () => {
    render(<Footer />);
    screen.getByText("Pokemon App by Horacio Cazavant");
  });
});

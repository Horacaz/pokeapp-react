import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "../Header";

describe("Header", () => {
  test("It renders correctly", () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    screen.getByRole("heading", {
      name: "Pokemon Application",
    });
  });
});

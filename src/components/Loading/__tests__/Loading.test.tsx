import { screen, render } from "@testing-library/react";
import Loading from "../Loading";

describe("Loading", () => {
  test("It renders a loading snipper if isLoading is true", () => {
    render(<Loading isLoading={true} />);
    screen.getByText("Loading...");
  });
  test("It should not render if isLoading is false", () => {
    render(<Loading isLoading={false} />);
    expect(screen.queryByText("Loading...")).toBeNull();
  });
});

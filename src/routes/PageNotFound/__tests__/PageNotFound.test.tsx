import PageNotFound from "../PageNotFound";
import { setupRouterRender } from "../../../../__utils__/testHelpers";
import { screen } from "@testing-library/react";

describe("PageNotFound", () => {
  test("It renders successfully", () => {
    const initialEntries = ["/"];
    const routerPath = "/";
    setupRouterRender({
      initialEntries,
      routePath: routerPath,
      element: <PageNotFound />,
    });

    screen.getByRole("heading", {
      name: "The requested page was not found.",
    });
  });
});

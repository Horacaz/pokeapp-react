import { vi } from "vitest";
import { render } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";

interface setupRouterRender {
  initialEntries: string[];
  routePath: string;
  element: JSX.Element;
}

export function setupFetchMock() {
  return (global.fetch = vi.fn().mockImplementation(
    () =>
      new Promise((resolve) => {
        const jsonPromise = new Promise((r) => {
          r({});
        });
        resolve({ json: () => jsonPromise, ok: true });
      })
  ));
}

export function setupRouterRender({
  initialEntries,
  routePath,
  element,
}: setupRouterRender) {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Routes>
        <Route path={routePath} element={element} />
      </Routes>
    </MemoryRouter>
  );
}

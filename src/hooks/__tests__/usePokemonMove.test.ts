import { Mock } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import usePokemonMove from "../usePokemonMove";
import { PokeAppProvider } from "../../context/PokeAppContext";
import moveFixture from "../../../__fixtures__/move.json";
import parsedMoveFixture from "../__fixtures__/parsedMoveFixture.json";
import fetchMoveFromApi from "../../api/movesFetch";
vi.mock("../../api/movesFetch");

const moveFetchMock = fetchMoveFromApi as Mock;

describe("usePokemonMove", () => {
  test("It should retrieve a move from the api", async () => {
    moveFetchMock.mockResolvedValue(moveFixture);
    const { result } = renderHook(() => usePokemonMove(1), {
      wrapper: PokeAppProvider,
    });
    await waitFor(() =>
      expect(result.current).toEqual({
        data: parsedMoveFixture,
        error: null,
        loading: false,
      })
    );
  });
});

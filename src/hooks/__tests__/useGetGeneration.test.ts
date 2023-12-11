import { Mock } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useGetGeneration from "../useGetGeneration";
import { PokeAppProvider } from "../../context/PokeAppContext";
import generationFixture from "../../../__fixtures__/generation.json";
import parsedgenerationFixture from "../__fixtures__/parsedGenerationFixture.json";
import fetchGenerationFromApi from "../../api/generationFetch";
vi.mock("../../api/generationFetch");

const generationFetchMock = fetchGenerationFromApi as Mock;

describe("useGetGeneration", () => {
  test("It should retrieve a generation from the api", async () => {
    generationFetchMock.mockResolvedValue(generationFixture);
    const { result } = renderHook(() => useGetGeneration(1), {
      wrapper: PokeAppProvider,
    });
    await waitFor(() =>
      expect(result.current).toEqual({
        data: parsedgenerationFixture,
        error: null,
        loading: false,
      })
    );
  });
});

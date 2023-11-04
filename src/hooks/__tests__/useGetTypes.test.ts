import { Mock } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useGetTypes from "../useGetTypes";
import { PokeAppProvider } from "../../context/PokeAppContext";
import typeFixture from "../../../__fixtures__/type.json";
import parsedTypeFixture from "../__fixtures__/parsedTypeFixture.json";
import fetchTypesFromApi from "../../api/typesFetch";
vi.mock("../../api/typesFetch");

const fetchTypeMock = fetchTypesFromApi as Mock;

describe("useGetTypes", () => {
  test("It should retrieve a generation from the api", async () => {
    fetchTypeMock.mockResolvedValue(typeFixture);
    const { result } = renderHook(() => useGetTypes(3), {
      wrapper: PokeAppProvider,
    });
    await waitFor(() =>
      expect(result.current).toEqual({
        data: parsedTypeFixture,
        error: null,
        loading: false,
      })
    );
  });
});

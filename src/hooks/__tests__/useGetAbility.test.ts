import { Mock } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import useGetAbility from "../useGetAbility";
import { PokeAppProvider } from "../../context/PokeAppContext";
import abilityFixture from "../../../__fixtures__/pokemonAbility.json";
import parsedAbiltyFixture from "../__fixtures__/parsedAbilityFixture.json";
import fetchAbilityFromApi from "../../api/abilityFetch";

vi.mock("../../api/abilityFetch");

const abilityFetchMock = fetchAbilityFromApi as Mock;

describe("useGetAbility", () => {
  test("It should retrieve an ability from the api", async () => {
    abilityFetchMock.mockResolvedValue(abilityFixture);
    const { result } = renderHook(() => useGetAbility("blaze"), {
      wrapper: PokeAppProvider,
    });
    await waitFor(() =>
      expect(result.current).toEqual({
        data: parsedAbiltyFixture,
        error: null,
        loading: false,
      })
    );
  });
});

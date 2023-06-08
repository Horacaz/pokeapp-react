// import fetchAbilityFromApi from "../api/abilityFetch";

import { useReducer, useEffect } from "react";
import mapPokemonAbility from "../mappers/pokemonAbilityMapper";
import PokemonAbility from "../entities/pokemonAbility";
import abilityData from "../../fixtures/pokemonAbility.json";
import { IParsedPokemonAbility } from "../types/pokemonAbility";

type State = {
  loading: boolean | null;
  data: IParsedPokemonAbility | null;
  error: Error | null;
};
type Action = {
  type: string;
  payload: IParsedPokemonAbility | null | Error;
};
const initialState = { loading: null, data: null, error: null };
const fetchReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, data: null, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload as IParsedPokemonAbility,
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};
export default function useGetAbility(params: string) {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    const getAbility = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const resource = abilityData;
        const Ability = new PokemonAbility(mapPokemonAbility(resource));

        dispatch({ type: "SUCCESS", payload: Ability });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error as Error });
      }
    };
    if (params) {
      getAbility();
    }
  }, [params]);
  return state;
}

import { useEffect, useReducer } from "react";
import { IParsedType } from "../types/pokemonType";
import mapPokemonType from "../mappers/pokemonTypeMapper";
import PokemonType from "../entities/pokemonType";
import fetchTypesFromApi from "../api/typesFetch";

type State = {
  loading: boolean | null;
  data: IParsedType | null;
  error: Error | null;
};

type Action = {
  type: string;
  payload: IParsedType | Error | null;
};

const initialState = { loading: null, data: null, error: null };

const typeReducer = (state: State, action: Action): State => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, data: null, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload as IParsedType,
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};

export default function useGetTypes(params: number) {
  const [state, dispatch] = useReducer(typeReducer, initialState);
  useEffect(() => {
    const getType = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const resource = await fetchTypesFromApi(params);
        const Type = new PokemonType(mapPokemonType(resource));
        dispatch({ type: "SUCCESS", payload: Type });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error as Error });
      }
    };
    getType();
  }, [params]);
  return state;
}

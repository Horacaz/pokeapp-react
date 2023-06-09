import { useEffect, useReducer } from "react";
import mapGeneration from "../mappers/generationMapper";
import Generation from "../entities/generation";
import fetchGenerationFromApi from "../api/generationFetch";
import geneterationMock from "../../fixtures/generation.json";
import { IParsedGeneration } from "../types/generation";

type State = {
  loading: boolean | null;
  error: Error | null;
  data: IParsedGeneration | null;
};
type Action = {
  type: string;
  payload: Error | null | IParsedGeneration;
};
const initialState = { loading: null, data: null, error: null };

const generationReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, data: null, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload as IParsedGeneration,
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};

export default function useGetGeneration(params: number) {
  const [state, dispatch] = useReducer(generationReducer, initialState);

  useEffect(() => {
    const getGeneration = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const resource = await fetchGenerationFromApi(params);
        const Ability = new Generation(mapGeneration(resource));

        dispatch({ type: "SUCCESS", payload: Ability });
      } catch (error) {
        dispatch({ type: "ERROR", payload: error as Error });
      }
    };
    if (params) {
      getGeneration();
    }
  }, [params]);
  return state;
}

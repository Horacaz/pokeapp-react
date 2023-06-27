import { IParsedPokemon } from "../types/pokemon";
import { useEffect, useReducer } from "react";
import mapPokemon from "../mappers/pokemonMapper";
import fetchPokemonFromApi from "../api/pokemonFetch";
import Pokemon from "../entities/pokemon";

type State = {
  loading: boolean | null;
  error: Error | null;
  data: IParsedPokemon | null;
};

type Action = {
  type: string;
  payload: Error | null | IParsedPokemon;
};

const initialState = { loading: null, data: null, error: null };
const pokemonReducer = (state: State, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING":
      return { ...state, loading: true, data: null, error: null };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: payload as IParsedPokemon,
        error: null,
      };
    case "ERROR":
      return { ...state, loading: false, data: null, error: payload as Error };
    default:
      return state;
  }
};

export default function useGetPokemon(params: string) {
  const [state, dispatch] = useReducer(pokemonReducer, initialState);
  useEffect(() => {
    const getPokemon = async () => {
      dispatch({ type: "LOADING", payload: null });
      try {
        const resource = await fetchPokemonFromApi(params);
        const pokemon = new Pokemon(mapPokemon(resource));

        dispatch({ type: "SUCCESS", payload: pokemon });
      } catch (error) {
        dispatch({ type: "ERROR", payload: null });
      }
    };
    if (params) {
      getPokemon();
    }
  }, [params]);
  return state;
}
